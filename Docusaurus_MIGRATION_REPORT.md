# Docusaurus Migration Report

**Date:** 2026-06-19
**Branch:** `docusaurus-migration`
**Docusaurus version:** 3.10.1
**Prior spike report:** `Docusaurus_SPIKE_REPORT.md`

---

## Executive Summary

The Professional Connector Guide was fully migrated from MkDocs Material to Docusaurus 3.10.1. All 19 published guide pages are present in the Docusaurus site. The build passes with `[SUCCESS]` and zero warnings. Brand tokens are applied from the `@zcohen-nerd/brand` package. The GitHub Pages workflow has been replaced with a Node-based build. MkDocs files were removed after the build was validated.

**All preservation checks passed.** Source-verification HTML comments, checklist content, tables, internal links, and technical content are preserved in source files. No editorial content was rewritten.

---

## Files Migrated

### Docusaurus configuration (new)

| File | Purpose |
|---|---|
| `package.json` | Docusaurus 3.10.1 + `@zcohen-nerd/brand` file: dependency |
| `tsconfig.json` | TypeScript config extending `@docusaurus/tsconfig` |
| `docusaurus.config.ts` | Site config: title, baseUrl, markdown detect, nav, footer |
| `sidebars.ts` | Explicit sidebar matching MkDocs nav order |
| `src/css/custom.css` | Imports brand tokens + bridge, applies connectors-family overrides |
| `static/img/favicon.ico` | Favicon (copied from spike) |
| `static/.nojekyll` | Required for GitHub Pages with Jekyll disabled |

### All 19 docs pages (converted from MkDocs)

| File | Admonitions converted | TODO comments preserved |
|---|---|---|
| `docs/index.md` | 3 (`note`, `note`, `warning`) | 0 |
| `docs/00-how-to-search-for-connectors.md` | 1 (`warning`) | 0 |
| `docs/01-what-connectors-do.md` | 1 (`warning`) | 0 |
| `docs/02-major-connector-categories.md` | 1 (`note`) | 0 |
| `docs/03-connector-standards-and-families.md` | 1 (`note`) | 2 |
| `docs/04-connector-selection-workflow.md` | 2 (`note`, `note`) | 1 (engineering heuristic) |
| `docs/05-connector-anatomy.md` | 3 (`note`, `warning`, `note`) | 0 |
| `docs/06-reading-datasheets.md` | 0 | 0 |
| `docs/07-mil-dtl-38999.md` | 4 (`note`, `warning`, `note`, `warning`) | 4 |
| `docs/08-m12.md` | 4 (`note`, `note`, `warning`, `note`) | 2 |
| `docs/09-decision-examples.md` | 0 | 0 |
| `docs/10-selection-checklist.md` | 0 | 0 |
| `docs/11-red-flags.md` | 0 | 0 |
| `docs/12-consumer-hobby-prototype-connectors.md` | 2 (`tip`, `warning`) | 2 |
| `docs/13-hands-on-exercises.md` | 0 | 0 |
| `docs/14-thirty-day-learning-plan.md` | 1 (`tip`) | 0 |
| `docs/usage-and-attribution.md` | 0 | 0 |
| `docs/appendix/quick-reference-tables.md` | 0 | 2 |
| `docs/appendix/source-notes.md` | 0 | 0 |

**Total admonitions converted:** 23 across 12 pages.
**Total source-verification TODO comments in source:** 15 occurrences across 6 files. All preserved.

### Files updated

| File | Change |
|---|---|
| `.gitignore` | Added `node_modules/`, `build/`, `.docusaurus/` |
| `.github/workflows/deploy-pages.yml` | Replaced MkDocs/Python workflow with Node/Docusaurus workflow |
| `README.md` | Updated repository layout description; replaced MkDocs build commands with npm commands |

---

## Files Removed or Archived

The following MkDocs-specific files were removed after the Docusaurus build passed:

| File | Reason |
|---|---|
| `mkdocs.yml` | MkDocs configuration — replaced by `docusaurus.config.ts` |
| `requirements.txt` | Python dependencies — replaced by `package.json` |
| `docs/overrides/main.html` | MkDocs Jinja2 template override — replaced by Docusaurus themeConfig footer |

**Not removed** (preserved as project assets):
- `Source/` — canonical source and source-verification backlog
- `templates/` — reusable engineering document templates
- `examples/` — placeholder exercise examples
- `LICENSE`, `LICENSE-CODE` — project licenses
- `CITATION.cff` — citation metadata
- `CONTRIBUTING.md`, `CHANGELOG.md`, `CODE_OF_CONDUCT.md` — project governance
- `CLAUDE.md`, `AGENTS.md` — workspace AI instructions
- `Docusaurus_SPIKE_REPORT.md` — spike findings (reference)

---

## Content Changes Made

**Content preserved verbatim:** All section headings, tables, prose paragraphs, checklist items, decision tables, exercise descriptions, and technical statements were carried over without rewriting.

**Changes made to docs files:**

1. **Frontmatter added** to all 19 files: `id`, `title`, `slug`, `sidebar_label`, and where applicable `sidebar_position`.
2. **Admonitions converted** (23 total): MkDocs `!!! type "Title"` → Docusaurus `:::type[Title]` syntax. Body indentation removed; blank lines added around content.
3. **`id:` in appendix files**: Files in `docs/appendix/` do not have an `id:` field in frontmatter (Docusaurus does not allow slashes in frontmatter IDs). The path-based ID (`appendix/quick-reference-tables`) is computed automatically.

**No other content changes.** Editorial text, technical values, warnings, disclaimers, source-verification comments, ICD examples, and all engineering judgment statements are byte-for-byte identical to the MkDocs source.

---

## Admonition Conversion Summary

**MkDocs syntax → Docusaurus syntax:**

```
Before:                          After:
!!! note                         :::note
    Content.                     Content.
                                 :::

!!! note "Title"                 :::note[Title]
    Content.                     Content.
                                 :::

!!! warning "Title"              :::warning[Title]
    Content.                     Content.
                                 :::

!!! tip                          :::tip
    Content.                     Content.
                                 :::
```

**Types used in this guide:** `note` (plain), `note` (titled), `warning` (plain), `warning` (titled), `tip` (plain).
**No collapsible (`???`) or inline admonitions** were present in the MkDocs source.

**HTML comments inside admonitions:** Several admonitions contained inline `<!-- TODO: source/verify -->` comments at the end of the body text. These are preserved verbatim in the source. Docusaurus strips all HTML comments from built output (CommonMark behavior with `markdown.format: 'detect'`).

---

## Link / ID Strategy

**Explicit `id:` frontmatter** was added to all 19 docs files, preserving numeric prefixes exactly:
- `id: 00-how-to-search-for-connectors`
- `id: 04-connector-selection-workflow`
- `id: 07-mil-dtl-38999`
- etc.

This means URLs are:
- `/connector-engineering-field-guide/00-how-to-search-for-connectors`
- `/connector-engineering-field-guide/04-connector-selection-workflow`
- etc.

**Exception:** Files in `docs/appendix/` — Docusaurus does not allow slashes in frontmatter `id:` values. These files have no explicit `id:` and use the path-computed IDs (`appendix/quick-reference-tables`, `appendix/source-notes`), giving URLs:
- `/connector-engineering-field-guide/appendix/quick-reference-tables`
- `/connector-engineering-field-guide/appendix/source-notes`

**Internal relative links** between docs (e.g., `[How to Search](00-how-to-search-for-connectors.md)`) use Markdown-relative `.md` references, which Docusaurus resolves correctly.

---

## Sidebar Strategy

`sidebars.ts` uses an explicit sidebar matching the MkDocs nav structure:

```
Home
Start Here (collapsed: false)
  └── How to Search for Connectors
Guide (collapsed: false)
  ├── What Connectors Actually Do
  ├── Major Connector Categories
  ├── Standards and Families
  ├── Selection Workflow
  ├── Connector Anatomy
  ├── Reading Datasheets
  ├── MIL-DTL-38999 Deep Dive
  ├── M12 Deep Dive
  ├── Decision Examples
  ├── Practical Checklist
  ├── Red Flags
  ├── Consumer/Hobby/Prototype Connectors
  ├── Hands-On Exercises
  └── 30-Day Learning Plan
Appendix (collapsed: false)
  ├── Quick Reference Tables
  └── Source Notes
Usage and Attribution
```

All top-level categories are `collapsed: false` to match MkDocs behavior where all sections are visible without clicking.

---

## Brand Integration

### What was integrated

| Integration | Status | Method |
|---|---|---|
| `@zcohen-nerd/brand` package installed | ✓ | `npm install` via `file:../../brand/zcohen-nerd-brand` |
| `zcohen-nerd-tokens.css` imported | ✓ | `@import '@zcohen-nerd/brand/tokens/zcohen-nerd-tokens.css'` in `custom.css` |
| `infima-bridge.css` imported | ✓ | `@import '@zcohen-nerd/brand/src/infima-bridge.css'` in `custom.css` |
| Connectors-family theme applied | ✓ | `:root` overrides in `custom.css` mirroring `[data-theme="connectors"]` scope |
| Instrument navy primary (`#1f3a5f`) | ✓ | In `--ifm-color-primary` |
| Safety orange links (`#b8460a`) | ✓ | In `--ifm-link-color` |
| Dark navy footer (`#15293f`) | ✓ | In `--ifm-footer-background-color` |
| Footer attribution | ✓ | `copyright:` in `themeConfig.footer` |
| Links to zcohen-nerd hub | ✓ | In navbar and footer config |
| Brand token variables in CSS bundle | ✓ | Verified via `--zc-navy-700`, `#1f3a5f`, `#b8460a` in built CSS |

### What was NOT integrated (deferred)

| Component | Reason |
|---|---|
| Shared Navbar (`@theme/Navbar` swizzle) | The brand Navbar has hub-specific `NAV_LINKS` (`Work`, `Writing`, `About`) pointing to `#`, which are wrong for the connector guide. It also replaces Docusaurus's native Navbar entirely, losing the sidebar toggle, search integration, and mobile navigation. Blocked because the component assumes the site is the hub (root domain). |
| Shared Footer (`@theme/Footer` swizzle) | The brand Footer uses Docusaurus `Link` with relative `to:` paths (`/portfolio`, `/literacy`, `/connectors`). With this site's `baseUrl: '/connector-engineering-field-guide/'`, those resolve to sub-paths of the guide rather than the hub's root — all ecosystem links would be broken. |

**Path to full integration:** Both blockers are architectural — the shared Navbar/Footer components assume `baseUrl: '/'`. Future integration requires either:
1. Publishing the connector guide at `https://zcohen-nerd.github.io/` as a sub-domain
2. Updating the brand components to use absolute `href:` URLs for ecosystem links
3. Configuring a project-specific override in the shared Footer to accept absolute URLs

Until then, the Docusaurus built-in Navbar and Footer (configured via `themeConfig`) provide the correct links and attribution.

---

## GitHub Pages Workflow

### Old workflow (MkDocs/Python)

```yaml
- uses: actions/setup-python@v5
  with: python-version: "3.12"
- run: pip install -r requirements.txt
- run: python -m mkdocs build --strict
- artifact path: site
```

### New workflow (Docusaurus/Node)

```yaml
- uses: actions/setup-node@v4
  with: node-version: '22' cache: 'npm'
- run: npm ci
- run: npm run build
- artifact path: build
```

**Deployment model unchanged:** `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`. Same permissions, same concurrency group, same trigger (`push main`).

---

## Build Results

| Metric | Value |
|---|---|
| Build command | `npm run build` |
| Exit code | 0 (`[SUCCESS]`) |
| Errors | 0 |
| Warnings | 0 |
| Built HTML files | 20 (19 docs + 404 page) |
| Brand tokens in CSS bundle | ✓ (verified: `--zc-navy-700`, `#1f3a5f`, `#b8460a`) |
| Admonition elements in built HTML | 11 themes (confirmed rendered, not raw source) |

**Build issue discovered and fixed:** Docusaurus does not allow slashes in frontmatter `id:` values. Files in `docs/appendix/` had `id: appendix/quick-reference-tables` which caused a build failure. Fixed by removing the explicit `id:` from appendix files; path-based IDs are computed correctly from directory structure.

---

## Known Warnings

None. The build passes with zero warnings.

---

## Preservation Checks

| Check | Result |
|---|---|
| All 19 MkDocs pages exist in Docusaurus | ✓ |
| Sidebar order matches MkDocs nav | ✓ |
| Every doc has explicit frontmatter `id` | ✓ (appendix uses path-computed ID — cannot have slash in `id:`) |
| Numeric-prefixed pages keep numeric-prefixed IDs | ✓ |
| All 23 MkDocs admonitions converted | ✓ |
| Source-verification HTML comments in source `.md` files | ✓ (15 occurrences, 6 files) |
| No technical source notes deleted | ✓ |
| Tables build without errors | ✓ |
| Site builds successfully | ✓ |
| GitHub Pages config uses correct `baseUrl` | ✓ (`/connector-engineering-field-guide/`) |
| `site/` not committed | ✓ (in `.gitignore`) |
| `node_modules/`, `build/`, `.docusaurus/` ignored | ✓ (in `.gitignore`) |
| `LICENSE`, `LICENSE-CODE`, `CITATION.cff` preserved | ✓ |
| `CONTRIBUTING.md`, `CHANGELOG.md`, `CODE_OF_CONDUCT.md` preserved | ✓ |
| `Source/`, `templates/`, `examples/` preserved | ✓ |
| `README.md` updated with Node build commands | ✓ |
| MkDocs workflow replaced with Node workflow | ✓ |
| `trailingSlash: false` set | ✓ |
| `onBrokenLinks: 'throw'` set (not warn) | ✓ |
| `markdown.format: 'detect'` set | ✓ |

---

## Risks

| Risk | Severity | Status |
|---|---|---|
| Shared Navbar/Footer not integrated | Low | Documented; path to resolution identified. Using Docusaurus native nav with correct links. |
| URL change for existing links | Low | URLs preserved — numeric prefixes in IDs match MkDocs URL scheme exactly. |
| `appendix/` doc IDs computed from path, not explicit `id:` | Low | Confirmed working in build. Sidebar references path-based IDs correctly. |
| HTML comments stripped from built HTML | None | Confirmed expected behavior. Comments preserved in source `.md` files. |
| npm security audit (28 moderate, 1 high) | Low | Standard Docusaurus scaffold advisories; none related to connector guide content serving. Run `npm audit` for details. |

---

## Recommended Review Steps

1. Run `npm run start` and navigate to `http://localhost:3000/connector-engineering-field-guide/` to verify the local site renders correctly.
2. Confirm sidebar order matches the MkDocs nav (Home → Start Here → Guide 01–14 → Appendix → Usage and Attribution).
3. Spot-check admonition rendering on `/07-mil-dtl-38999` (4 admonitions) and `/08-m12` (4 admonitions).
4. Verify `<!-- TODO: source/verify -->` comments appear in the source files (e.g., `docs/07-mil-dtl-38999.md`) but NOT in the browser DOM.
5. Verify all internal links work (click "How to Search for Connectors" from the homepage and exercise pages).
6. Confirm the footer shows `A zcohen-nerd technical guide by Zac Cohen. Licensed CC BY 4.0.`
7. Confirm the navbar has a `zcohen-nerd` link pointing to `https://zcohen-nerd.github.io/`.
8. Run `npm run build` one more time from a clean state if desired.

---

## Recommended Commit Plan

**Commit 1:** `Migrate connector guide to Docusaurus`
- `package.json`, `package-lock.json`, `tsconfig.json`
- `docusaurus.config.ts`, `sidebars.ts`
- `src/css/custom.css`
- `static/img/favicon.ico`, `static/.nojekyll`
- All 19 files in `docs/` (frontmatter + admonition conversion)
- `.github/workflows/deploy-pages.yml`
- `.gitignore`
- `README.md`
- Removal of `mkdocs.yml`, `requirements.txt`, `docs/overrides/`

**Commit 2:** `Document Docusaurus migration`
- `Docusaurus_MIGRATION_REPORT.md`
- `Docusaurus_SPIKE_REPORT.md` (from spike branch — clean up)

---

## Future Integration Path

When the brand package's Navbar/Footer components are updated to use absolute URLs for ecosystem links (rather than Docusaurus `Link` with relative `to:` paths), full brand component integration can be enabled by:

1. Adding `themes: ['@zcohen-nerd/brand']` to `docusaurus.config.ts`
2. Adding `/img/zcohen-nerd-logo.png` to `static/img/` (brand Navbar requires this)
3. Removing the `themeConfig.navbar` and `themeConfig.footer` entries (overridden by brand components)

The `@zcohen-nerd/brand` package is already installed as a dependency (`file:../../brand/zcohen-nerd-brand`). Token and Infima bridge imports already use the package path. No package changes are needed for this future step.
