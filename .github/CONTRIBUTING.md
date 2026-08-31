# Contributing

Thanks for helping improve the Connector Field Guides — both the Hobby track and the Professional / Industrial track.

## Technical corrections require a source

Technical corrections, exact values, standards claims, part-number interpretations, and qualification statements must be backed by a source.

Acceptable sources include:

- Current manufacturer datasheet
- Applicable standard reference
- QPL listing
- Manufacturer application note
- Program/customer requirement when applicable

The hobby track follows the same source discipline as the professional track. Hobby-track corrections should distinguish official manufacturer datasheets, vendor ecosystem documentation (e.g. SparkFun/Adafruit), marketplace listings, and clone/"compatible" claims. Marketplace listings are useful evidence of common naming chaos, but they are not design authority for pitch, current, voltage, compatibility, crimp tooling, or safety limits.

## Source discipline rules

- Do not reproduce paid standards tables.
- Do not copy proprietary catalog tables.
- Do not add universal connector ratings unless they are truly universal and sourced.
- Mark exact values as examples unless verified.
- Preserve the guide's engineering-judgment tone.
- Preserve existing warnings, disclaimers, caveats, and `<!-- TODO: source/verify -->` comments.

## Content expectations

- Keep the guide practical and mentor-style.
- Do not invent new connector facts.
- Prefer practical decision logic over vendor marketing language.
- If a claim cannot yet be sourced, add or preserve a source-verification TODO rather than inventing a citation.

## Development workflow

```bash
npm install
npm run start    # dev server with hot reload
npm run build    # production build into build/
```

Use `npm run build` before opening a pull request so broken links and navigation issues are caught early.

## Quality checks

Use **Node 22** (`.nvmrc`). Run `npm run <script>`:

| Script | What it checks | CI job (`.github/workflows/quality.yml`) |
| --- | --- | --- |
| `typecheck` | `tsc --strict`. | `format-lint` |
| `format:check` | Prettier over **changed non-Markdown files only** (`scripts/changed-files.mjs`). Markdown is linted by `lint:md`, not Prettier. | `format-lint` |
| `format` | Prettier write over the repo — the one-time baseline (see below). | — |
| `lint` | ESLint (flat config, JS/JSX/MJS). `.ts`/`.tsx` are covered by `typecheck`. | `format-lint` |
| `lint:md` / `lint:md:all` | markdownlint on changed Markdown / on everything. | `format-lint` / — |
| `validate-images` | `scripts/validate-images.mjs` — rejects image formats that hang the build's image-size parser; runs automatically before `build`. | `build` |
| `validate` | `bump-version.mjs --check` (version-string consistency) **and** `scripts/validate-build.mjs` (canonical domain, sitemap host, robots, duplicate IDs, single `<h1>`, JSON-LD parses). Needs `npm run build` first. | `validators` |
| `test:a11y` | Playwright + `@axe-core/playwright` — WCAG 2.1 A/AA smoke on `/`, a representative article, `/404.html`. | `a11y` |
| `test:responsive` | Playwright — no horizontal overflow, landmarks inside the viewport, tap targets, full-page screenshots at 360/390/768/1024/1440/1920 px. | `responsive` |
| `size` | `size-limit` — initial JS (gzip) <= 175 kB, initial CSS (gzip) <= 22 kB. Needs `npm run build`. | `bundle-budget` |
| `bundle-report` | `scripts/bundle-report.mjs` — payload sizes, route-chunk count, per-route LCP candidate + inline-media weight; enforces `perf-budgets.json`. | `bundle-budget` |
| `links:external` | linkinator over the served build — outbound URLs, retries, skip list for login-gated / bot-walled hosts (`linkinator.config.json`). | `links-external.yml` (weekly, non-blocking) |
| `verify` | `format:check && typecheck && lint && lint:md && validate`. | — |

### One-time Prettier baseline

`format:check` and the pre-commit hook only touch changed files, so Prettier was
**not** run across the repo. When the tree is clean:

```bash
npm run format
git commit -am "chore: prettier baseline (no behaviour change)"
```

then record the SHA in `.git-blame-ignore-revs`.

### Pre-commit hook (opt-in)

```bash
git config core.hooksPath .githooks   # runs lint-staged on staged files
```

### CI

`quality.yml` builds once and fans out (`format-lint`, `validators`, `a11y`,
`responsive`, `bundle-budget`), each uploading its report artifact. `a11y` and
`responsive` are **`continue-on-error`** until the acceptance-triage follow-up has
resolved or documented every current finding; then they become blocking.
`links-external.yml` runs weekly with `--warn-only`. The existing `build.yml` and
`deploy-pages.yml` are unchanged.

### Deferred / backlog

- **Acceptance triage** of `test:a11y` / `test:responsive` findings against the
  consolidated remediated tree — fix, or add a scoped entry to
  `e2e/axe-exclusions.ts`.
- `lint:md:all` reports pre-existing `MD025` (duplicate H1) in several `docs/`
  pages; `lint:md` is changed-scoped so it does not block.
- Perf budgets sit ~15% above the 2026-08 baseline; ratchet down after any
  optimisation.
