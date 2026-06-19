# Brand Package Integration Report

**Branch:** `test-shared-brand-package` (from `docusaurus-migration`)
**Brand package version:** `@zcohen-nerd/brand@1.0.0` (Phase 1 + Phase 2)
**Date:** 2026-06-19
**Result:** BUILD PASSES — with one local workaround required

---

## What was tested

Integration of `@zcohen-nerd/brand` into the Professional Connector Guide as a local `file:` dependency, exercising:

- Theme plugin (`themes: ['@zcohen-nerd/brand']`) → swizzled Navbar and Footer
- Project-aware configuration via `customFields.brand` (project mode, `isHub: false`)
- CSS imports from the package (`@import '@zcohen-nerd/brand/tokens/...'`)
- Logo asset copy from `assets/zcohen-nerd-logo.png`
- Production build (`npm run build`)

---

## Changes made to the connector guide

| File | Change |
|---|---|
| `package.json` | Added `"@zcohen-nerd/brand": "file:../../brand/zcohen-nerd-brand"` |
| `docusaurus.config.ts` | Added `themes`, `plugins` (workaround), `customFields.brand`; removed `themeConfig.navbar` and `themeConfig.footer` |
| `src/css/custom.css` | Changed `@import` from local files to package paths |
| `src/brand-docusaurus-compat.js` | **New:** workaround proxy file (see below) |
| `static/img/zcohen-nerd-logo.png` | Copied from brand package `assets/` |

---

## Build result

```
[INFO] [en] Creating an optimized production build...
[SUCCESS] Generated static files in "build".
```

Zero errors. Zero warnings (beyond the pre-existing npm audit note).

---

## Build validation

| Check | Result |
|---|---|
| `build/img/zcohen-nerd-logo.png` exists | ✅ |
| CSS bundle has `--zc-color-primary` (brand tokens) | ✅ |
| CSS bundle has `--ifm-color-primary` (Infima bridge) | ✅ |
| CSS bundle has `--zc-navy` (base token) | ✅ |
| CSS bundle has footer module CSS | ✅ |
| JS bundle has `"A zcohen-nerd technical guide"` (projectBadge) | ✅ |
| JS bundle has `"Projects"` (switcher label) | ✅ |
| JS bundle has `"documented in public"` (footer signal) | ✅ |
| JS bundle has `"Connector Guide"` (project registry) | ✅ |
| `index.html` references `zcohen-nerd-logo.png` | ✅ |

---

## Workaround required: Windows junction peer-dep resolution

### Root cause

On Windows, npm installs `file:` local packages as **junction points**, not true symlinks. rspack (used by `@docusaurus/faster`) follows the junction to the brand package's **real disk path** when building the module graph. From there, `@docusaurus/core` is not in any `node_modules` in the directory hierarchy, so rspack reports:

```
Module not found: Can't resolve '@docusaurus/core' in '...brand\src\components\Footer'
```

A secondary issue: even after adding the consumer's `node_modules` to `resolve.modules`, rspack finds the `@docusaurus/core` package directory but cannot resolve it because the package has **no `main`, `exports`, or root `index.js` field** (it is a CLI tool, not a browser-importable barrel).

Docusaurus itself does NOT alias `@docusaurus/core` as a whole — it only aliases individual client exports like `@docusaurus/useDocusaurusContext`, `@docusaurus/useBaseUrl`, etc.

### Workaround applied

**`src/brand-docusaurus-compat.js`** — a one-line proxy file:
```js
export {default as useDocusaurusContext} from '@docusaurus/useDocusaurusContext';
```

**`docusaurus.config.ts` plugin** — aliases `@docusaurus/core` to the proxy:
```ts
plugins: [
  function resolveBrandPeerDeps() {
    const path = require('path');
    const compatFile = path.resolve(process.cwd(), 'src', 'brand-docusaurus-compat.js');
    return {
      name: 'resolve-brand-peer-deps',
      configureWebpack() {
        return { resolve: { alias: {'@docusaurus/core': compatFile} } };
      },
    };
  },
],
```

This bridges the brand package's `import {useDocusaurusContext} from '@docusaurus/core'` to the Docusaurus-aliased `@docusaurus/useDocusaurusContext` path.

### Remediation options (in order of preference)

1. **Update brand package** — Change `import {useDocusaurusContext} from '@docusaurus/core'` to `import useDocusaurusContext from '@docusaurus/useDocusaurusContext'` in both `Navbar/index.js` and `Footer/index.js`. This is the correct Docusaurus theme component pattern. Removes the need for the proxy entirely.

2. **Use npm workspaces** — Add a root `package.json` with `"workspaces": ["guides/*", "brand/*"]`. npm hoists all packages, eliminating the junction issue. No brand package changes needed.

3. **Keep the proxy** — Acceptable for local development. The proxy is transparent and harmless; adds ~10 bytes to the bundle.

---

## Behavioral notes

### Navbar changes

| Before (native Docusaurus Navbar) | After (brand Navbar) |
|---|---|
| Guide title text + Guide sidebar toggle | ZN wordmark logo (links to hub) |
| GitHub + zcohen-nerd links in nav | `"A zcohen-nerd technical guide"` badge |
| Sidebar docSidebar toggle | **Projects ▾** ecosystem dropdown |
| Mobile: hamburger → sidebar drawer | Mobile: hamburger → brand drawer (no sidebar toggle) |

**Known gap: no docs sidebar toggle on mobile.** The brand Navbar has its own mobile drawer for nav/project links but does not include a Docusaurus docs sidebar toggle. On mobile, the docs sidebar is inaccessible via the brand Navbar. This is expected — the brand Navbar was designed for hub/landing pages without a sidebar. A future Phase 3 or dedicated project-mode Navbar component should add this.

### Footer changes

The brand Footer entirely replaces the native Docusaurus footer:
- **Before:** "Guide" column with internal links + "zcohen-nerd ecosystem" column
- **After:** Brand column (wordmark + attribution tagline) + Ecosystem column (all projects) + Connect column (GitHub, zcohen-nerd hub)

Internal guide links (How to Search, Selection Workflow, MIL-DTL-38999, etc.) are **no longer in the footer**. If this navigation is important, it would need to be added to the brand Footer's project-mode config or kept as a native Docusaurus footer alongside the brand footer (which is not currently supported).

### CSS / theming

The connector-family color overrides in `custom.css` (instrument navy + safety orange) continue to work correctly — they override `:root` variables that the brand tokens define. The `@import` switch from local file copies to package paths works correctly (rspack resolves the CSS through the installed package).

The `data-theme="connectors"` attribute still requires a Root swizzle to be set automatically. Currently the connectors family overrides are applied directly in `:root` in `custom.css`, which is the correct interim approach.

---

## What was NOT tested

- **Live local preview** (`npm run start`) — the build passes; visual inspection of the dev server was not performed in this automated test.
- **Mobile sidebar access** — known gap documented above.
- **Dark mode** — brand Navbar and Footer do not currently implement `[data-theme='dark']` overrides; dark mode CSS falls through to Infima defaults. Acceptable for Phase 2.
- **CI pipeline** — this test uses a local `file:` dependency which fails in standalone CI (no workspace). The `docusaurus-migration` branch's CSS-only integration remains the deployable baseline until the brand package is published or workspaces are set up.

---

## Conclusion

The `@zcohen-nerd/brand` package (Phase 1 + Phase 2) integrates successfully with the Professional Connector Guide. The `customFields.brand` configuration mechanism works correctly — project badge, ecosystem switcher, footer attribution, and connect links all render from config. CSS tokens flow through correctly.

The one issue is a local-development workaround for the Windows junction peer-dep resolution bug. The recommended fix (updating the brand package to use `@docusaurus/useDocusaurusContext` instead of `@docusaurus/core`) is a small change that should be made before using the brand package with any other consumer.

---

## Phase 3 Retest

**Date:** 2026-06-19
**Test branch:** `test-shared-brand-package`
**Prior branch state:** Workaround files already removed (commit `97a7338`)

### Brand Package Commit Tested

`c5c80a4 Make brand Navbar docs-site compatible`

Phase 3 added to the brand package:
- Mobile docs sidebar toggle (`useNavbarMobileSidebar` + `NavbarMobileSidebar`)
- `headerLeft` wrapper grouping sidebar toggle + logo
- `navbar-sidebar__backdrop` div for outside-tap dismiss
- `aria-current="page"` on current project in Projects dropdown and mobile drawer
- Shared `DEFAULT_BRAND` extracted to `src/data/defaultBrand.js`
- README docs for sidebar toggle, project-mode setup, and `projectUrl` matching

### Build Result

```
[INFO] [en] Creating an optimized production build...
[SUCCESS] Generated static files in "build".
```

**Zero errors. Zero warnings.** 20 HTML pages generated (identical page count to Phase 2 retest).

`npm install` reported `up to date` — no `package-lock.json` changes.

### Navbar Result

SSR output of `<header>` on both `index.html` and `01-what-connectors-do.html`:

| Element | Result |
|---|---|
| `headerLeft` wrapper div | ✅ Present |
| Logo links to `https://zcohen-nerd.github.io/` | ✅ Correct |
| Logo image path `/connector-engineering-field-guide/img/zcohen-nerd-logo.png` | ✅ baseUrl-correct |
| Project badge: `A zcohen-nerd technical guide` | ✅ Present |
| Projects ▾ switcher button | ✅ Present |
| Hub nav links (Work / Writing / About) | ✅ Absent (project mode correct) |
| `menuToggle` (brand hamburger) | ✅ Present |
| `navbar-sidebar__backdrop` div | ✅ Present (always rendered) |
| Forbidden strings (`brand-docusaurus-compat`, `resolveBrandPeerDeps`) | ✅ 0 hits |
| RSS link | ✅ Absent |

Footer on `01-what-connectors-do.html`:

| Element | Result |
|---|---|
| Wordmark: `zcohen-nerd` | ✅ |
| Attribution: `A zcohen-nerd technical guide by Zac Cohen.` | ✅ |
| Ecosystem: Portfolio, Literacy for Kids, Connector Guide (absolute URLs) | ✅ |
| Connect: GitHub (project repo), zcohen-nerd (hub) | ✅ |
| Copyright year: 2026 | ✅ |
| "documented in public" signal dot | ✅ |
| Appendix pages: `quick-reference-tables.html`, `source-notes.html` | ✅ |

### Docs Sidebar / Mobile Result

**SSR behavior (expected):**
- `sidebarToggle` button is **not** in SSR HTML — correct. On SSR, `mobileSidebar.disabled = true` because `NavbarSecondaryMenuContent` hasn't been injected yet. The toggle renders after React hydration on docs pages.
- `NavbarMobileSidebar` panel is **not** in SSR HTML — correct. `NavbarMobileSidebar` returns `null` when `shouldRender = false` (`!disabled && windowSize === 'mobile'`). It renders client-side only, after hydration, at mobile viewport width.
- `navbar-sidebar__backdrop` IS in SSR HTML — backdrop is always rendered; CSS hides it when the sidebar is not open.
- Docusaurus docs sidebar container (`theme-doc-sidebar-container`) IS in SSR HTML on docs pages ✅

**Architecture confirmed correct:**
- `NavbarProvider` (containing `NavbarMobileSidebarProvider`) is provided by `@theme/Layout/Provider`, which is above the brand Navbar in the React tree
- `useNavbarMobileSidebar()` called in brand Navbar is safe — context is always available
- `@docusaurus/theme-common/internal` sub-path resolves correctly via `exports` field — no junction resolution issue (unlike `@docusaurus/core` which had no exports)

**Live interactive browser test:** Chrome extension was unavailable during this retest. Manual mobile validation is recommended: open http://localhost:3000/connector-engineering-field-guide/ at ≤720px width on a docs page and confirm the sidebar toggle appears left of the logo and opens the docs sidebar.

### Link Safety Result

| Check | Result |
|---|---|
| Doubled ecosystem paths (e.g. `/connector-engineering-field-guide/connectors`) | ✅ 0 hits |
| All ecosystem links absolute (Portfolio, Literacy, Connector Guide) | ✅ Confirmed in footer SSR and JS bundles |
| Hub URL `https://zcohen-nerd.github.io/` | ✅ Correct in logo link |
| No `<Link to="/...">` (Docusaurus router) in brand output | ✅ None found |

### Current Project Highlight Result

- `aria-current` code is compiled into `main.ca69a167.js` ✅
- `brand.projectUrl` in connector guide config: `https://zcohen-nerd.github.io/connector-engineering-field-guide/`
- Matching entry in `projects.js` registry: `href: 'https://zcohen-nerd.github.io/connector-engineering-field-guide/'`
- **Match is exact** — Connector Guide will receive `aria-current="page"` in the Projects ▾ dropdown and mobile drawer when JS hydrates
- Live confirmation of CSS highlight (cyan + semibold) requires browser interaction (dropdown must be opened)

### Remaining Issues

1. **No live browser test.** Chrome extension was unavailable. Functional correctness of sidebar toggle, `aria-current` highlight, and mobile drawer has been validated via SSR HTML and bundle analysis, but not by direct browser interaction.
2. **Local `file:` dependency only.** The connector guide uses `"@zcohen-nerd/brand": "file:../../brand/zcohen-nerd-brand"`. This is a local development dependency; standalone CI or GitHub Pages deployment cannot use it. Package distribution or workspace hoisting is required before production use.
3. **Dark mode.** Brand Navbar and Footer do not implement `[data-theme='dark']` overrides. Dark mode CSS falls through to Infima defaults. Unchanged from Phase 2.
4. **`data-theme="connectors"` not auto-applied.** The connector-family color overrides are still applied manually in `:root` via `custom.css`. A future Root swizzle would apply it automatically from `brand.projectFamily`. Unchanged from Phase 2.
5. **Mobile sidebar toggle not verified live.** The `sidebarToggle` button appears only after React hydration at ≤720px. This is the main Phase 3 feature and could not be confirmed live in this retest.

### Recommendation

**Shared brand package is functionally ready; package distribution is now the main blocker.**

The Phase 3 commit (`c5c80a4`) correctly adds docs sidebar support to the shared Navbar. The build is clean, the Navbar SSR output is correct, and the architecture for the mobile sidebar toggle is sound. All previously documented workarounds have been removed. The only blocker preventing production use is local `file:` dependency resolution — publish the package or set up npm workspaces to unblock deployment.

---

## Published npm Package Retest

**Brand package version tested:** `@zcohen-nerd/brand@1.0.2` (local tarball, pre-publication)
**Date:** 2026-06-19
**Branch:** `test-shared-brand-package`
**Result:** ALL CHECKS PASS — 1.0.2 ready to publish; connector guide ready to commit after publication

### Summary

Switched connector guide from `file:../../brand/zcohen-nerd-brand` to `^1.0.2` (npm package). Discovered and fixed three blocking issues in the brand package during this retest, all resolved in `@zcohen-nerd/brand@1.0.2`:

| Issue | Root Cause | Fix |
|---|---|---|
| JSX parse error from rspack | Brand package shipped JSX source; rspack excludes `node_modules` from JSX transforms | Added Babel build pipeline; `getThemePath()` now points to compiled `lib/components/` |
| `useTOCHighlight` crash (`null.clientHeight`) | `useTOCHighlight.js` queries `document.querySelector('.navbar')` — brand `<header>` lacked this class | Added `navbar` as base class on `<header>` |
| Mobile sidebar clamped to 59px | `backdrop-filter: blur(8px)` on `<header>` creates a CSS containing block for `position:fixed` children | Moved `<NavbarMobileSidebar>` and sidebar backdrop OUTSIDE `<header>` into a sibling wrapper `<div>` with `navbar-sidebar--show` |

None of these issues were visible from the build alone — all require live browser execution.

### Build validation

- `npm run build` → zero errors, zero warnings, 20 pages ✅
- Correct strings present in built HTML: `A zcohen-nerd technical guide`, `zcohen-nerd`, `documented in public`, `Connector Guide` ✅
- Forbidden strings absent: `isHub`, `DEFAULT_BRAND`, hub `navLinks` (Work/Writing/About) ✅
- No `file:` path in `package-lock.json` (resolved via local tarball until npm publish) ✅

### Live browser validation (desktop, 1304×943)

- Brand Navbar: ZCohen Nerd logo, badge "A zcohen-nerd technical guide", Projects ▾ button ✅
- Projects dropdown: Portfolio, Literacy for Kids, Connector Guide ✅
- `aria-current="page"` on Connector Guide dropdown item ✅
- `navbar` class on `<header>` (TOC scroll-spy works) ✅
- Footer: wordmark, attribution, Ecosystem column, Connect column, "documented in public" amber dot ✅
- Docs sidebar: renders on left at desktop; all 20 pages navigable ✅
- No React crash on any page ✅

### Live browser validation (mobile, 390px width)

- Left docs sidebar toggle (≡) visible at ≤720px ✅
- Right brand hamburger (≡) visible ✅
- Sidebar toggle click → docs sidebar opens at full viewport height (693px) ✅
- Current page ("What Connectors Actually Do") highlighted in sidebar ✅
- Sidebar backdrop present; outside-click closes sidebar ✅

### Remaining issues

1. **1.0.2 not yet published.** `package.json` references `^1.0.2`; `package-lock.json` currently resolves from a local tarball. After publishing 1.0.2 to npm, run `npm install` to get a clean lockfile from the registry, then commit.
2. **Dark mode.** Brand Navbar/Footer do not implement `[data-theme='dark']` overrides. Unchanged from prior retests.
3. **`data-theme="connectors"` not auto-applied.** Still applied manually via `custom.css :root`. A future Root swizzle would read `brand.projectFamily` automatically.

### Recommended next steps

1. Publish `@zcohen-nerd/brand@1.0.2` to npm (`npm publish --access public` from the brand package directory)
2. In connector guide: `npm install` (cleans the lockfile from tarball → registry)
3. Commit `package.json` + `package-lock.json` + `BRAND_PACKAGE_INTEGRATION_REPORT.md` with message `"Use published @zcohen-nerd/brand package"`
