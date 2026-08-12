#!/usr/bin/env node
// Renders assets/og-card.svg -> static/img/og-card.png (1200x630, the og:image).
// Usage: npm run og-card   (requires devDependency: sharp)
// Rendered at 2x density and downscaled so text stays crisp.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.join(import.meta.dirname, '..');
const svg = fs.readFileSync(path.join(root, 'assets', 'og-card.svg'));
const out = path.join(root, 'static', 'img', 'og-card.png');

await sharp(svg, { density: 192 }).resize(1200, 630).png().toFile(out);
console.log(`rendered ${path.relative(root, out)} (1200x630)`);
