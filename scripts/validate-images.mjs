#!/usr/bin/env node
// Reject image formats that can hang the image-size parser used by Docusaurus,
// and catch files whose contents do not match their extension before the build.

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.join(import.meta.dirname, '..');
const contentRoots = ['assets', 'docs', 'Source', 'static'];
const imageExtensions = new Set(['.gif', '.ico', '.jpeg', '.jpg', '.png', '.svg', '.webp']);
const blockedExtensions = new Set(['.avif', '.heic', '.heif', '.icns', '.jxl']);
const errors = [];
let checked = 0;
const maxSignatureBytes = 64 * 1024;

const startsWith = (buffer, bytes, offset = 0) =>
  bytes.every((byte, index) => buffer[offset + index] === byte);

function dangerousFormat(buffer) {
  if (buffer.subarray(0, 4).toString('ascii') === 'icns') return 'ICNS';
  if (startsWith(buffer, [0xff, 0x0a])) return 'JXL';
  if (startsWith(buffer, [0x00, 0x00, 0x00, 0x0c, 0x4a, 0x58, 0x4c, 0x20, 0x0d, 0x0a, 0x87, 0x0a])) {
    return 'JXL';
  }
  if (buffer.subarray(4, 8).toString('ascii') === 'ftyp') return 'HEIF/AVIF';
  return null;
}

function hasExpectedSignature(extension, buffer) {
  switch (extension) {
    case '.gif':
      return ['GIF87a', 'GIF89a'].includes(buffer.subarray(0, 6).toString('ascii'));
    case '.ico':
      return startsWith(buffer, [0x00, 0x00, 0x01, 0x00]);
    case '.jpeg':
    case '.jpg':
      return startsWith(buffer, [0xff, 0xd8, 0xff]);
    case '.png':
      return startsWith(buffer, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    case '.svg': {
      const text = buffer.toString('utf8');
      return /^\uFEFF?\s*(?:<\?xml[\s\S]*?\?>\s*)?(?:<!--[\s\S]*?-->\s*)?<svg[\s>]/i.test(text);
    }
    case '.webp':
      return buffer.subarray(0, 4).toString('ascii') === 'RIFF' &&
        buffer.subarray(8, 12).toString('ascii') === 'WEBP';
    default:
      return false;
  }
}

async function readPrefix(filePath) {
  const handle = await fs.open(filePath, 'r');
  try {
    const {size} = await handle.stat();
    const buffer = Buffer.alloc(Math.min(size, maxSignatureBytes));
    const {bytesRead} = await handle.read(buffer, 0, buffer.length, 0);
    return buffer.subarray(0, bytesRead);
  } finally {
    await handle.close();
  }
}

async function walk(directory) {
  for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(filePath);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    const buffer = await readPrefix(filePath);
    const relativePath = path.relative(root, filePath);
    const dangerous = dangerousFormat(buffer);

    if (blockedExtensions.has(extension) || dangerous) {
      errors.push(`${relativePath}: blocked ${dangerous ?? extension.slice(1).toUpperCase()} image format`);
      continue;
    }

    if (imageExtensions.has(extension)) {
      checked += 1;
      if (!hasExpectedSignature(extension, buffer)) {
        errors.push(`${relativePath}: contents do not match the ${extension} extension`);
      }
    }
  }
}

for (const directory of contentRoots) {
  await walk(path.join(root, directory));
}

if (errors.length > 0) {
  console.error(`Image validation failed:\n  - ${errors.join('\n  - ')}`);
  process.exit(1);
}

console.log(`Validated ${checked} image assets; blocked formats were not found.`);
