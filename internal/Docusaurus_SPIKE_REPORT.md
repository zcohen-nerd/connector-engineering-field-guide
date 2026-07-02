# Docusaurus Migration Spike Report

**Date:** 2026-06-19
**Branch:** `docusaurus-spike`
**Spike folder:** `docusaurus-spike/` inside the repo

---

## Executive Summary

The spike succeeded in building a Docusaurus site from 4 representative guide pages.
The build passes with `[SUCCESS]`. Brand tokens are applied. Admonitions render correctly after syntax conversion.

**However, the migration has non-trivial friction that makes it premature right now:**

1. Every admonition on every page must be syntax-converted (`!!! type` → `:::type`).
2. Docusaurus strips numeric prefixes from doc IDs, breaking all internal cross-links.
3. HTML comment stripping changes the editorial visibility of `<!-- TODO: source/verify -->` markers.
4. The brand package's Navbar/Footer components require npm package installation — not installed in the spike.
5. The current MkDocs site is clean, deployed, and Phase 1 is live.

**Recommendation: Stay on MkDocs for Phase 2 and Phase 3. Revisit migration after the brand system is stable.**

---

## Spike Scope

- Scaffolded Docusaurus 3.10.1 (classic TypeScript template) in `docusaurus-spike/`
- Migrated 4 representative pages: `index.md`, `04-connector-selection-workflow.md`, `07-mil-dtl-38999.md`, `appendix/quick-reference-tables.md`
- Applied brand token CSS (connectors theme)
- Ran `npm run build` — confirmed build success
- Did not migrate remaining 13 pages, templates, examples, or Source/

---

## Current MkDocs Baseline

- MkDocs 1.6.1 + Material 9.7.6
- 17 docs pages across docs/ with appendix
- Strict build passes in CI (`mkdocs build --strict`)
- Phase 1 identity footer live at `https://zcohen-nerd.github.io/connector-engineering-field-guide/`
- 0 custom CSS, 0 custom JS, 1 template override (`docs/overrides/main.html`)
- HTML comments preserved in both source and built HTML output

---

## Docusaurus Setup

- **Version:** Docusaurus 3.10.1 (latest)
- **Template:** classic (TypeScript)
- **Node version:** 22.20.0
- **npm version:** 10.9.3
- **Config key choices:**
  - `routeBasePath: '/'` — docs served at site root (docs-only mode)
  - `markdown.format: 'detect'` — CRITICAL: makes `.md` files use CommonMark parser, not MDX. Required to avoid MDX parse errors on HTML comments.
  - `onBrokenLinks: 'warn'` — spike only (4 of 17 pages migrated)
  - `blog: false` — pure docs site
- **Scaffold cleanup required:** Removed `src/pages/` (homepage collision with docs root), `blog/`, tutorial content

---

## Pages Migrated for Test

| Source | Spike path | Status |
|---|---|---|
| `docs/index.md` | `docusaurus-spike/docs/index.md` | Migrated |
| `docs/04-connector-selection-workflow.md` | `docusaurus-spike/docs/04-connector-selection-workflow.md` | Migrated |
| `docs/07-mil-dtl-38999.md` | `docusaurus-spike/docs/07-mil-dtl-38999.md` | Migrated |
| `docs/appendix/quick-reference-tables.md` | `docusaurus-spike/docs/appendix/quick-reference-tables.md` | Migrated |

---

## Markdown / MDX Compatibility

### Headings

**PASS.** H1–H3 headings render identically.

### Tables

**PASS.** Standard GFM tables (using `|---|---|` syntax) render correctly without any changes. This covers the wide tables in `04-connector-selection-workflow.md`, the shell-size and contact-size tables in `07-mil-dtl-38999.md`, and all three tables in `quick-reference-tables.md`.

### Code blocks

**PASS.** Fenced code blocks with language specifiers render correctly via Prism.

### Admonitions

**REQUIRES SYNTAX CONVERSION — affects every page.**

MkDocs Material uses:
```
!!! note "Title"
    Indented content here.

!!! warning
    Indented content here.
```

Docusaurus uses:
```
:::note[Title]

Content here (no indentation).

:::

:::warning

Content here.

:::
```

**This is the highest-friction migration item.** There are approximately 25–30 admonition blocks across the 14 guide pages. Each requires:
1. Change `!!! type "Title"` → `:::type[Title]`
2. Remove 4-space indentation from the body
3. Add blank line after opening fence and before closing `:::`

The conversion can be partially scripted with a regex, but multi-line admonition bodies and edge cases (HTML comments inside admonitions, admonitions at end-of-section before `---`) require careful handling. A fully automated script should be reviewed manually before use.

### MDX and format detection

**PASS — with the required `markdown.format: 'detect'` config.**

Without `format: 'detect'`, Docusaurus 3 (MDX v3) would attempt to parse `.md` files as JSX-flavored MDX, and HTML comments (`<!-- -->`) are invalid JSX, causing parse errors. With `format: 'detect'`, `.md` files use the CommonMark parser and HTML comments are accepted.

**This config option is mandatory for this guide and must be set in any real migration.**

---

## Link and Sidebar Compatibility

### Internal link format

**REQUIRES ATTENTION — all internal cross-links need updating.**

Docusaurus strips numeric prefixes from doc IDs when generating URLs:
- `04-connector-selection-workflow.md` → doc ID `connector-selection-workflow` → URL `/connector-selection-workflow`
- `07-mil-dtl-38999.md` → doc ID `mil-dtl-38999` → URL `/mil-dtl-38999`

The existing guide pages use internal links like:
```markdown
[Selection Workflow](04-connector-selection-workflow.md)
[MIL-DTL-38999 deep dive](07-mil-dtl-38999.md)
```

These resolve to the wrong URLs post-migration. Two remediation options:
1. Add explicit `id:` frontmatter to each page matching the current filename (e.g., `id: 04-connector-selection-workflow`). This preserves the original URL scheme.
2. Update all internal links to use the stripped IDs. This changes 30+ link occurrences across all pages.

Option 1 (explicit IDs) is less disruptive and keeps the source files recognizable.

### Sidebar

**PASS with Docusaurus ID correction.** Explicitly defined sidebar (`sidebars.ts`) works cleanly. Uses the generated IDs (without numeric prefix). Autogenerated sidebar is also supported — ordering is controlled by `sidebar_position` frontmatter.

### Appendix structure

**PASS.** `docs/appendix/quick-reference-tables.md` resolves to `/appendix/quick-reference-tables` automatically. The nested directory structure is preserved.

### Broken links from non-migrated pages

**Expected — spike only.** 6 warnings for cross-links to the 13 non-migrated pages. These become zero warnings when all 17 pages are migrated.

---

## Admonition Compatibility

**PASS after syntax conversion.** All four admonition types used in the guide (`note`, `note` with title, `warning`, `warning` with title) rendered correctly in the Docusaurus build after converting from MkDocs syntax.

**Specific admonitions tested:**
- `:::note[v0.1 Public Review Draft]` — renders ✓
- `:::note[Core mental model]` — renders ✓
- `:::warning[Disclaimer]` — renders ✓
- `:::note[Spare capacity]` with inline HTML comment — renders ✓
- `:::warning` with inline `<!-- TODO: source/verify -->` — renders without error ✓
- `:::note[Often overlooked]` — renders ✓

**Notable:** HTML comments inside admonition bodies are accepted and do not cause parse errors with `format: 'detect'`.

---

## Table Compatibility

**PASS.** All GFM tables rendered correctly including:
- Wide tables with 3–4 columns (`04-connector-selection-workflow.md`)
- Tables with long cell content (the criteria/questions tables)
- Tables with `*emphasis*` inside cells
- Tables with code spans inside cells
- The shell-size table with `~` approximation prefix values
- The IP rating table with complex cell text

No table-specific changes required.

---

## Source-Verification Comment Preservation

**PARTIAL — important behavioral difference between generators.**

| Aspect | MkDocs | Docusaurus |
|---|---|---|
| Comments in source `.md` files | Preserved ✓ | Preserved ✓ |
| Comments in **built HTML output** | **Preserved** (visible in page source) | **Stripped** (React renderer removes them) |

MkDocs passes `<!-- TODO: source/verify -->` HTML comments through to the final compiled HTML. A developer or reviewer can open browser DevTools and see them in the live page markup.

Docusaurus's React renderer strips all HTML comments during the build. The comments exist only in the source `.md` files.

**Practical impact:** The TODO backlog is maintained in `Source/source-notes.md`, and the comments in guide pages exist as editorial markers for contributors working with the source files. Both workflows accommodate this. However, the loss of comment visibility in the built HTML is a behavioral downgrade worth noting. **This is not a blocker, but it is a change in editorial tooling.**

All 7 source-verification HTML comments across the 4 spike pages are present in the spike `.md` source files and were not removed during migration.

---

## Brand-System Integration Test

### Token CSS

**PASS.** `tokens/zcohen-nerd-tokens.css` from the brand repo was copied into `docusaurus-spike/src/css/` and imported via `@import` in `custom.css`. All `--zc-*` CSS custom properties are available.

The connectors theme values (`--zc-color-primary: #1f3a5f`, `--zc-color-accent: #c2410c`) were mapped to Infima variables (`--ifm-color-primary`, etc.) in `custom.css`, mirroring the pattern from `src/infima-bridge.css` in the brand package.

**In a real migration:** the token import would be:
```css
@import '@zcohen-nerd/brand/tokens/zcohen-nerd-tokens.css';
@import '@zcohen-nerd/brand/src/infima-bridge.css';
```
…with the brand package installed via `npm install` (file: path or published registry).

### Infima bridge

**PASS — manually applied.** The variable mappings from `src/infima-bridge.css` were applied directly in `custom.css` for the spike. In a real migration, this is a 1-line import.

### Shared Navbar and Footer components

**Not installed in the spike.** The brand package (`@zcohen-nerd/brand`) is a Docusaurus plugin that swizzles `@theme/Navbar` and `@theme/Footer`. To use it:

```bash
npm install ../../../brand/zcohen-nerd-brand
```

Then in `docusaurus.config.ts`:
```ts
themes: ['@zcohen-nerd/brand'],
```

And in `custom.css`:
```css
@import '@zcohen-nerd/brand/tokens/zcohen-nerd-tokens.css';
@import '@zcohen-nerd/brand/src/infima-bridge.css';
```

This would give the guide the same Navbar (zcohen-nerd wordmark, Projects dropdown) and Footer (navy, ecosystem links, "documented in public" signal dot) as the landing page and portfolio. This is the primary brand-ecosystem benefit of migrating to Docusaurus, and it is **not achievable with the current MkDocs implementation without a significant custom override**.

The file: protocol install is expected to work (the package has a valid `package.json` with `@docusaurus/core` and `react` as peer dependencies, which would already be satisfied by the spike's installed packages). This was not attempted to keep the spike scoped.

### Brand-system readiness for Docusaurus

The brand package was purpose-built for Docusaurus. Token file, Infima bridge, Navbar, Footer, and project registry all integrate cleanly. The connectors theme (`data-theme="connectors"`) already exists in the token file.

---

## Build Results

| Build attempt | Result | Notes |
|---|---|---|
| First attempt | FAIL | Sidebar doc IDs used numeric-prefixed names; Docusaurus generated IDs without prefix |
| After sidebar fix | SUCCESS with warnings | Duplicate route (scaffold homepage collision) + footer links using old IDs |
| After collision + footer fix | **SUCCESS** | 6 warnings only (broken links to 13 non-migrated pages — expected) |

**Final build output:**
```
[SUCCESS] Generated static files in "build".
```
**Remaining warnings:** 6 Markdown broken link warnings, all pointing to non-migrated pages (`00-how-to-search-for-connectors.md`, `01-what-connectors-do.md`, `08-m12.md`, etc.). These become zero when all 17 pages are migrated.

**Config issues discovered and resolved:**
1. `onBrokenMarkdownLinks` is deprecated in favor of `markdown.hooks.onBrokenMarkdownLinks`
2. Scaffolded `src/pages/` creates a homepage that collides with `routeBasePath: '/'` — must be removed for docs-only sites
3. Docusaurus strips numeric prefixes from doc IDs; sidebar and footer links must use the generated IDs

---

## Deployment Considerations

### GitHub Pages

**Comparable complexity to MkDocs.** The existing CI workflow (`deploy-pages.yml`) uses Python/MkDocs. A Docusaurus deployment would replace it with:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '22'
    cache: 'npm'
    cache-dependency-path: docusaurus-spike/package-lock.json
- run: npm ci
  working-directory: docusaurus-spike
- run: npm run build
  working-directory: docusaurus-spike
```

The Pages artifact path changes from `site/` to `docusaurus-spike/build/`.

**baseUrl behavior:** `baseUrl: '/connector-engineering-field-guide/'` in `docusaurus.config.ts` replicates the current GitHub Pages sub-path correctly. Internal links and assets resolve correctly in the built output.

### Build time

Docusaurus is significantly slower than MkDocs. MkDocs built this 17-page site in ~1.5 seconds. Docusaurus with npm install overhead and webpack/Rspack bundling typically takes 15–60 seconds for a comparable site. This is a CI time cost, not a blocker.

### Node dependency

Docusaurus adds Node.js as a build dependency. The CI workflow change is straightforward, but it is a new requirement vs. the current Python-only stack.

---

## MkDocs vs Docusaurus Comparison

| Criterion | MkDocs (current) | Docusaurus |
|---|---|---|
| **Content migration effort** | N/A (current) | Moderate: ~25–30 admonition conversions + link ID corrections across all 14 pages |
| **Brand token integration** | Token CSS copyable in Phase 2 | Token CSS importable from package; same result |
| **Brand Navbar/Footer** | Requires manual MkDocs HTML override; not automatic | Full parity via `@zcohen-nerd/brand` plugin install |
| **Navigation / sidebar** | `mkdocs.yml` nav section; explicit order | `sidebars.ts`; explicit or autogenerated; more flexible |
| **Table rendering** | Excellent | Excellent |
| **Admonition compatibility** | Native (`!!! note`) | Requires syntax conversion (`:::note`) |
| **HTML comment behavior** | Passes through to built HTML | Stripped in built HTML; only in source files |
| **Internal link format** | Filename with `.md` extension | Filename with `.md`, but IDs strip numeric prefixes |
| **GitHub Pages deployment** | Stable; Python-only; ~1.5 sec build | Node-based; 15–60 sec build; well-documented pattern |
| **Search** | MkDocs Material search (built-in) | Docusaurus search (built-in or Algolia integration) |
| **Long-term maintenance** | Separate brand layer from ecosystem | Shared brand layer with rest of ecosystem |
| **Future component reuse** | Not applicable | MDX + React enables interactive content, badges, cards |
| **Risk level** | Low (already deployed) | Moderate (content conversion + CI change) |
| **Ecosystem alignment** | Disconnected | Fully aligned; same components as hub and literacy sites |

---

## Risks

| Risk | Severity | Notes |
|---|---|---|
| Admonition conversion errors | Medium | 25–30 blocks across 14 pages; multi-line bodies; comments inside admonitions. Needs careful scripting + review. |
| Doc ID stripping breaks cross-links | Medium | All 14 pages link to each other using numeric-prefix filenames; all links need updating or explicit ID frontmatter |
| HTML comments stripped from built HTML | Low | Editorial workflow stays in source files; not a functional regression |
| Brand package peer dependency conflicts | Low-Medium | `@zcohen-nerd/brand` has `@docusaurus/core >=3.0.0` as peer dep; should be compatible with 3.10.1 |
| CI workflow rebuild | Low | Replacing Python with Node; well-understood pattern |
| `markdown.format: 'detect'` deprecation | Low | If this config key changes in Docusaurus v4, HTML comments in `.md` files would need to move to `.md` with explicit CommonMark config |
| MkDocs 2.0 upstream concern | Low | The `mkdocs-material` team warns that MkDocs 2.0 will break plugin and theme systems. This is a future risk for the MkDocs path, not the Docusaurus path. |
| `site/` directory in MkDocs (now gitignored) | None | Already resolved in Phase 1 commits |

---

## Recommended Decision

**Stay on MkDocs for Phase 2 and Phase 3. Revisit Docusaurus migration when the brand system is stable.**

### Reasoning

1. **Phase 2 is achievable on MkDocs without Docusaurus.** The brand token CSS file is plain CSS — it can be copied into `docs/assets/css/` and referenced via `extra_css` in `mkdocs.yml`. The connectors theme variables can be applied in a `docs/overrides/custom.css`. No Node.js required.

2. **Phase 3 (footer/nav standardization) is achievable on MkDocs.** The `docs/overrides/main.html` already exists. The footer block override can be extended with a static HTML equivalent of the brand Footer, driven by hardcoded links rather than the React component. It will need manual updates when the project registry changes, but that is acceptable until the ecosystem settles.

3. **The admonition migration cost is real.** All 14 guide pages need admonition syntax changes. This is not insurmountable, but it is non-trivial, carries content risk, and should not be the first thing happening to a v0.1 Public Review Draft guide that has not yet completed source verification.

4. **The doc ID issue adds link risk.** Incorrect links in a technical reference guide are harmful. The ID renaming issue would require a careful audit of all cross-references before migration can be called complete.

5. **The HTML comment behavior change is minor but real.** The existing editorial workflow relies on `<!-- TODO: source/verify -->` comments being accessible to reviewers. They remain in source files in both generators, so this is not a blocker — but it is worth documenting that Docusaurus renders them away from the live site's DOM.

6. **The brand package benefit is real but deferred.** The shared Navbar and Footer are the correct long-term answer for ecosystem consistency. That value is fully unlocked only after the brand system is stable and the shared components are tested across multiple sites. Migrating to Docusaurus *before* the brand is stable just means doing the migration twice.

---

## If We Stay on MkDocs

Phase 2 plan:
1. Pin `mkdocs-material` to `9.7.6` in `requirements.txt`
2. Copy `tokens/zcohen-nerd-tokens.css` to `docs/assets/css/`
3. Add `extra_css: [assets/css/zcohen-nerd-tokens.css, assets/css/connectors-theme.css]` to `mkdocs.yml`
4. Create `docs/assets/css/connectors-theme.css` mapping `--zc-*` tokens to Material theme vars
5. Verify strict build passes

Phase 3 plan:
1. Extend `docs/overrides/main.html` with a static-HTML ecosystem footer block
2. Add the zcohen-nerd Navbar equivalent (wordmark + hub link) via template override

Docusaurus migration remains available later as a deliberate, well-planned upgrade once:
- All 17 guide pages are finalized and source-verified
- The brand system has stabilized
- A migration script for admonitions is written and tested
- Explicit `id:` frontmatter is added to all pages

---

## If We Migrate to Docusaurus

Required steps beyond this spike:
1. Write and test an admonition conversion script for all 14 pages
2. Add explicit `id:` frontmatter to all 17 pages to preserve URL paths
3. Update all internal cross-links to use Docusaurus-format references
4. Install `@zcohen-nerd/brand` via `npm install file:../../../brand/zcohen-nerd-brand`
5. Add `themes: ['@zcohen-nerd/brand']` to config
6. Add CSS imports for tokens and Infima bridge
7. Replace CI workflow (Python → Node)
8. Delete MkDocs files (`mkdocs.yml`, `requirements.txt`, `docs/overrides/`)
9. Verify full build with all 17 pages passes without warnings
10. Verify GitHub Pages deployment at correct base URL

---

## Proposed Next Step

Proceed with Phase 2 on MkDocs. Pin `mkdocs-material` in `requirements.txt`, copy brand token CSS into the site, and apply the connectors theme via `extra_css`. This is a small, safe, reviewable change that does not require Docusaurus migration.

When all 17 pages are finalized and source-verified, schedule the Docusaurus migration as a standalone project with time for a proper admonition conversion script and full cross-link audit.
