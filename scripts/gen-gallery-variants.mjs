#!/usr/bin/env node
// Generates small WebP variants for the home-page gallery photos in docs/index.md.
// Usage: node scripts/gen-gallery-variants.mjs   (requires devDependency: sharp)
//
// The gallery renders each photo in a ~185px-wide box (object-fit: cover), so
// shipping the 1000-1600px originals wastes ~0.7 MiB on the landing route. This
// writes width-descriptor variants the browser can choose from; the originals
// stay in static/img/photos/ as the full-resolution source of record and remain
// listed in the image attribution register.
//
// AVIF is intentionally not produced: scripts/validate-images.mjs blocks AVIF
// because the image-size parser Docusaurus uses can hang on it. WebP alone is
// enough to clear the transfer budget.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.join(import.meta.dirname, '..');
const srcDir = path.join(root, 'static', 'img', 'photos');
const outDir = path.join(srcDir, 'responsive');

// Photos used by the .cn-home-gallery block in docs/index.md.
const SOURCES = [
  'zif-connector-ffc.jpg',
  'micro-d-and-de9-comparison.jpg',
  'm12-m8-family.jpg',
  'cable-gland-disassembled.webp',
];

const WIDTHS = [320, 480, 640, 800];
const QUALITY = 74;

fs.mkdirSync(outDir, {recursive: true});

let written = 0;
for (const file of SOURCES) {
  const base = file.replace(/\.[^.]+$/, '');
  const input = path.join(srcDir, file);
  const meta = await sharp(input).metadata();
  for (const w of WIDTHS) {
    if (meta.width && w >= meta.width) continue; // never upscale
    const out = path.join(outDir, `${base}-${w}w.webp`);
    await sharp(input).resize({width: w}).webp({quality: QUALITY}).toFile(out);
    const kb = (fs.statSync(out).size / 1024).toFixed(1);
    console.log(`  ${path.relative(root, out)}  (${w}w, ${kb} KiB)`);
    written += 1;
  }
}
console.log(`\nwrote ${written} variant(s) to ${path.relative(root, outDir)}/`);
