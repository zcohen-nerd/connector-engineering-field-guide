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
