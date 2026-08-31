#!/usr/bin/env node
/**
 * Post-build static checks for the connector guide — the canonical-domain /
 * sitemap / robots / duplicate-id / structured-data class of regression the
 * 2026-08 audit flagged. Mirrors the `validate-build.js` gates in the
 * landing-page and Portfolio repos; kept lean because most of the guide's
 * content discipline lives in `bump-version.mjs --check` and `validate-images.mjs`.
 *
 * Reads the built `build/` tree off disk (no server, no DOM parser — raw string
 * assertions). Run after `npm run build`:  node scripts/validate-build.mjs
 * Exit 1 on any failure.
 */
import {readFileSync, existsSync} from 'node:fs';
import {join} from 'node:path';

const SITE_ORIGIN = 'https://zcohen-nerd.github.io';
const BASE_URL = '/connector-engineering-field-guide/';
const CANONICAL_HOME = `${SITE_ORIGIN}${BASE_URL}`;

const BUILD = 'build';
const failures = [];
const notes = [];
const check = (name, ok, detail) => {
  if (ok) {
    console.log(`  ok  ${name}`);
  } else {
    failures.push(name);
    console.error(`  FAIL  ${name}${detail ? ` — ${detail}` : ''}`);
  }
};

if (!existsSync(join(BUILD, 'index.html'))) {
  console.error(
    'build/index.html not found — run `npm run build` before this script.',
  );
  process.exit(1);
}

const index = readFileSync(join(BUILD, 'index.html'), 'utf8');

// Docusaurus minifies production HTML with unquoted attributes, so every check
// below tolerates `attr="v"`, `attr='v'` and bare `attr=v`.
const q = '["\']?';
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const CANON = escapeRe(CANONICAL_HOME);

// --- canonical domain -------------------------------------------------------
check(
  'home canonical points at the GitHub Pages subpath',
  new RegExp(`<link[^>]+rel=${q}canonical${q}[^>]+href=${q}${CANON}${q}`).test(
    index,
  ),
  `expected a <link rel=canonical href=${CANONICAL_HOME}>`,
);
check(
  'og:url uses the canonical home URL',
  new RegExp(
    `<meta[^>]+property=${q}og:url${q}[^>]+content=${q}${CANON}${q}`,
  ).test(index),
);
check('html element declares a lang', /<html[^>]+lang=/.test(index));

// --- sitemap --------------------------------------------------------------
const sitemapPath = join(BUILD, 'sitemap.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check('sitemap.xml has at least one <loc>', locs.length > 0);
  check(
    'every sitemap <loc> is on the canonical origin + base path',
    locs.every((u) => u.startsWith(CANONICAL_HOME)),
    locs.find((u) => !u.startsWith(CANONICAL_HOME)),
  );
} else {
  check('sitemap.xml exists', false, `${sitemapPath} missing`);
}

// --- robots.txt (soft: guide has no static/robots.txt on this branch yet) --
const robotsPath = join(BUILD, 'robots.txt');
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, 'utf8');
  check(
    'robots.txt Sitemap: line points at this site',
    /^Sitemap:\s*https:\/\/zcohen-nerd\.github\.io\/connector-engineering-field-guide\/sitemap\.xml\s*$/m.test(
      robots,
    ),
  );
  check(
    'robots.txt allows crawling',
    /User-agent:\s*\*/i.test(robots) && /Allow:\s*\//i.test(robots),
  );
} else {
  notes.push(
    'no build/robots.txt — add static/robots.txt with a Sitemap: directive (not fatal).',
  );
}

// --- duplicate ids on the home route -------------------------------------
const ids = [...index.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
check(
  'home route has no duplicate id attributes',
  ids.length === new Set(ids).size,
  ids.filter((v, i) => ids.indexOf(v) !== i).join(', '),
);

// --- exactly one h1 on the home route ----------------------------------
const h1Count = (index.match(/<h1[\s>]/g) || []).length;
check('home route has exactly one <h1>', h1Count === 1, `found ${h1Count}`);

// --- structured data parses ------------------------------------------
const ldBlocks = [
  ...index.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((m) => m[1]);
if (ldBlocks.length) {
  let allParse = true;
  for (const b of ldBlocks) {
    try {
      JSON.parse(b);
    } catch {
      allParse = false;
    }
  }
  check(`all ${ldBlocks.length} JSON-LD block(s) parse`, allParse);
} else {
  notes.push('no JSON-LD on the home route (not fatal).');
}

// --- report ------------------------------------------------------------
for (const n of notes) console.log(`  note  ${n}`);
if (failures.length) {
  console.error(`\n${failures.length} build validation failure(s).`);
  process.exit(1);
}
console.log('\nAll build validations passed.');
