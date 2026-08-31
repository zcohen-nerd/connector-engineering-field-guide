# SEO / metadata audit — Connector Field Guides (2026-08)

Snapshot of every indexable route's metadata, and what the 2026-08 pass changed.
Canonical origin: `https://zcohen-nerd.github.io/connector-engineering-field-guide/`
(`trailingSlash: false`). No analytics on this site.

## How metadata is produced

| Element | Source | Status |
| --- | --- | --- |
| `<title>` | front-matter `title` + ` \| Connector Field Guides` | OK on every route |
| `<meta name="description">` | front-matter `description` (quoted, ~150–230 chars) | present on **every** doc except `/changelog` on the committed tree — the working copy adds it |
| `<link rel="canonical">` | Docusaurus, from `url` + permalink | correct origin, no trailing slash |
| `og:title` / `og:description` / `og:url` | Docusaurus, from the above | OK |
| `og:image` / `twitter:image` | `themeConfig.image` → `img/og-card.png` (site-wide) | **one card for all 89 docs** — accepted (see Task 2 below) |
| `twitter:card` | `summary_large_image` | OK |
| `<link rel="icon">` | `favicon` → `img/favicon.ico` | OK; `apple-touch-icon` + manifest **added** this pass |
| JSON-LD `TechArticle` | `src/theme/DocItem/Layout/index.tsx` (per doc) | present; `image` field **added** this pass |
| JSON-LD `BreadcrumbList` | Docusaurus core | present |
| sitemap | `@docusaurus/plugin-sitemap` via preset (weekly / 0.5, no `lastmod`) | active; all 89 docs + `/` included |
| robots | `static/robots.txt` (`Allow: /`, sitemap line) | present — **note:** on a GitHub Pages *project subpath* this file is not the one crawlers fetch; the host-root `robots.txt` is authoritative |

## Route inventory (weakness flags)

- **89 doc routes**, all with a front-matter `description` and an explicit `slug`.
  Titles are unique. Click depth from `/` to the deepest doc is **2**.
- **`/changelog`** — the only route with (a) no `description` on the committed
  tree and (b) no place in any sidebar, navbar, or footer (a true navigational
  orphan; reachable only from one in-body link in `/appendix/source-notes`). The
  working copy adds the description. **Recommend** also surfacing it — a
  `connectLinks` entry or a sidebar item — in a separate small change.
- **Zero docs set a front-matter `image`.** Every social share uses the single
  `og-card.png`.
- No `keywords` meta anywhere (Google ignores it — not a gap).

## What this pass changed

| Task | Change |
| --- | --- |
| 4 | `src/theme/DocItem/Layout/index.tsx` — added `image` (absolute `img/og-card.png`) to the per-doc `TechArticle` JSON-LD. No dates, no Organization, no rating (unchanged rationale). |
| 7 | Added `static/img/icon-192.png`, `icon-512.png`, `static/apple-touch-icon.png` (`scripts/generate-icons.ps1`) and `static/site.webmanifest` (`display: "browser"` — **not** a PWA, no service worker). Wired `apple-touch-icon` / `manifest` / `theme-color` into a new `headTags` array (baseUrl-prefixed hrefs). Existing `favicon.ico` kept. |
| 8 | Commented `google-site-verification` / `msvalidate.01` placeholders added to `headTags`; see `SEARCH-CONSOLE-CHECKLIST.md`. |

**Not changed:** titles, descriptions, canonical handling, sitemap config, the
per-doc `TechArticle` structure, copy. The single site-wide OG card is kept
deliberately — a "Connector Field Guides" card is an adequate preview for every
chapter, and 89 per-page cards is not warranted.

## Verified after the change

- `npm run build` — SUCCESS (`onBrokenLinks: 'throw'`).
- `node scripts/bump-version.mjs --check` — version in sync.
- Built `TechArticle` on `/07-mil-dtl-38999` parses; `image` / `url` /
  `isPartOf.url` all on the canonical origin.
- `site.webmanifest` parses, `display: "browser"`, icons 192 + 512.
