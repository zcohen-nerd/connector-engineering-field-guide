#!/usr/bin/env node
// Single-source version management for the Connector Field Guides.
//
// Truth lives in package.json "version". The public status string is
//   "<display> — <release name>"           e.g. "v0.9 Beta — Hobby Guide Expansion + Two-Track Polish"
// where <display> is "v<major>.<minor>", plus " Beta" while major is 0.
//
// Modes:
//   node scripts/bump-version.mjs --check
//     Verify every call site agrees with package.json. Exits 1 on drift.
//     Run by CI (build.yml) so a missed file fails the build.
//
//   node scripts/bump-version.mjs <semver> "<Release Name>" [--date YYYY-MM-DD]
//     Rewrite every call site for a release. <semver> is X.Y.Z; the date
//     (default: today) goes to CITATION.cff date-released.
//
// Call sites rewritten/checked:
//   package.json                    "version": "X.Y.Z"
//   CITATION.cff                    version + date-released (date: bump mode only)
//   README.md                       **Status:** line (keeps its trailing badge text)
//   docs/engineering-home.md        :::note[<status>] banner
//   docs/appendix/source-notes.md   **Status: <status>** line
//   Source/source-notes.md          **Status: <status>** line
//
// NOT rewritten (editorial, review by hand every release — the script reminds you):
//   docs/hobby/index.md             ":::note[Introduced v0.8, expanded v0.9]" — only
//                                   correct to bump when the release actually expands
//                                   the hobby track.
//   CHANGELOG.md                    the release entry itself.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.join(import.meta.dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const write = (p, s) => fs.writeFileSync(path.join(root, p), s);

const EM = '—'; // — (all status strings use an em dash)

function display(semver) {
  const m = semver.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!m) throw new Error(`not a X.Y.Z semver: ${semver}`);
  return `v${m[1]}.${m[2]}${m[1] === '0' ? ' Beta' : ''}`;
}

// Each site: file, a locator regex (must match exactly once), and how to
// rebuild the matched line from (display, releaseName).
const SITES = [
  {
    file: 'package.json',
    locate: /"version":\s*"([^"]+)"/,
    render: (_d, _n, semver) => `"version": "${semver}"`,
    extract: (m) => ({ semver: m[1] }),
  },
  {
    file: 'CITATION.cff',
    locate: /^version:\s*"([^"]+)"$/m,
    render: (_d, _n, semver) => `version: "${semver}"`,
    extract: (m) => ({ semver: m[1] }),
  },
  {
    file: 'README.md',
    locate: /^\*\*Status:\*\* (.+?)(?: ·.*)?$/m,
    render: (d, n) => null, // handled specially to preserve the trailing badge
    extract: (m) => ({ status: m[1].trim() }),
  },
  {
    file: 'docs/engineering-home.md',
    locate: /^:::note\[(v\d+\.\d+[^\]]*)\]$/m,
    render: (d, n) => `:::note[${d} ${EM} ${n}]`,
    extract: (m) => ({ status: m[1] }),
  },
  {
    file: 'docs/appendix/source-notes.md',
    locate: /^\*\*Status: (.+)\*\*$/m,
    render: (d, n) => `**Status: ${d} ${EM} ${n}**`,
    extract: (m) => ({ status: m[1] }),
  },
  {
    file: 'Source/source-notes.md',
    locate: /^\*\*Status: (.+)\*\*$/m,
    render: (d, n) => `**Status: ${d} ${EM} ${n}**`,
    extract: (m) => ({ status: m[1] }),
  },
];

function currentState() {
  const semver = JSON.parse(read('package.json')).version;
  const d = display(semver);
  // Release name comes from the README status line: "<display> — <name>".
  const readme = SITES[2].locate.exec(read('README.md'));
  if (!readme) throw new Error('README.md: no **Status:** line found');
  const status = readme[1].trim();
  const prefix = `${d} ${EM} `;
  const name = status.startsWith(prefix) ? status.slice(prefix.length) : null;
  return { semver, display: d, name, readmeStatus: status };
}

function check() {
  const { semver, display: d, name, readmeStatus } = currentState();
  const errors = [];
  if (name === null) {
    errors.push(
      `README.md status "${readmeStatus}" does not start with "${d} ${EM} " (package.json says ${semver})`,
    );
  }
  const expectStatus = name === null ? null : `${d} ${EM} ${name}`;
  for (const site of SITES) {
    const m = site.locate.exec(read(site.file));
    if (!m) {
      errors.push(`${site.file}: version/status line not found`);
      continue;
    }
    const got = site.extract(m);
    if (got.semver !== undefined && got.semver !== semver) {
      errors.push(`${site.file}: has ${got.semver}, package.json says ${semver}`);
    }
    if (got.status !== undefined && expectStatus !== null && got.status !== expectStatus) {
      errors.push(`${site.file}: has "${got.status}", expected "${expectStatus}"`);
    }
  }
  if (errors.length) {
    console.error('Version drift detected:\n  - ' + errors.join('\n  - '));
    console.error('\nFix by hand or re-run: node scripts/bump-version.mjs <semver> "<Release Name>"');
    process.exit(1);
  }
  console.log(`Version in sync: ${semver} ${EM} "${expectStatus}"`);
}

function bump(semver, name, dateArg) {
  const d = display(semver);
  const status = `${d} ${EM} ${name}`;
  const date = dateArg ?? new Date().toISOString().slice(0, 10);

  let pkg = read('package.json');
  pkg = pkg.replace(SITES[0].locate, `"version": "${semver}"`);
  write('package.json', pkg);

  let cff = read('CITATION.cff');
  cff = cff.replace(SITES[1].locate, `version: "${semver}"`);
  cff = cff.replace(/^date-released:.*$/m, `date-released: ${date}`);
  write('CITATION.cff', cff);

  let readme = read('README.md');
  readme = readme.replace(SITES[2].locate, (line) => {
    const badge = line.includes('·') ? ' ·' + line.split('·').slice(1).join('·') : '';
    return `**Status:** ${status}${badge}`;
  });
  write('README.md', readme);

  for (const site of SITES.slice(3)) {
    let text = read(site.file);
    text = text.replace(site.locate, site.render(d, name));
    write(site.file, text);
  }

  console.log(`Bumped to ${semver} ${EM} "${status}" (released ${date})`);
  console.log('\nStill manual — review before committing:');
  console.log('  - CHANGELOG.md: write the release entry.');
  console.log(
    '  - docs/hobby/index.md banner ("Introduced v0.8, expanded v0.9"): bump the\n' +
      '    "expanded" version only if this release actually expands the hobby track.',
  );
}

const args = process.argv.slice(2);
if (args[0] === '--check') {
  check();
} else if (args.length >= 2 && /^\d+\.\d+\.\d+$/.test(args[0])) {
  const dateIdx = args.indexOf('--date');
  bump(args[0], args[1], dateIdx === -1 ? undefined : args[dateIdx + 1]);
} else {
  console.error(
    'Usage:\n  node scripts/bump-version.mjs --check\n  node scripts/bump-version.mjs <X.Y.Z> "<Release Name>" [--date YYYY-MM-DD]',
  );
  process.exit(2);
}
