# Connector Engineering Field Guide

Practical connector selection for rugged, industrial, military-style, and electromechanical systems.

**Project status:** `v0.1 Public Review Draft`

This project exists because connector selection is often harder than it should be. The information is fragmented across vendor catalogs, datasheets, standards, and tribal knowledge. The goal of this guide is to help non-specialists pick a reasonable connector family, understand what specs matter, avoid beginner mistakes, and document the interface properly.

This repository turns the canonical Connector Engineering Field Guide into a Markdown-first documentation website. The guide is educational and judgment-focused; it is not a replacement for manufacturer datasheets, applicable standards, customer requirements, qualification requirements, or program-specific design rules.

When this guide conflicts with a datasheet, applicable standard, customer requirement, or qualified program requirement, the datasheet / standard / customer requirement wins.

## Repository layout

**Canonicality:** `Source/connector-engineering-field-guide.md` is the single, unambiguous source of truth for the guide's 14 numbered sections + appendix — every factual correction, citation, and source-verification update lands there first. `docs/` numbered pages (`00`–`14` + `appendix/`) are refreshed *from* `Source/`; if the two ever disagree on a factual claim, `Source/` is authoritative and `docs/` is stale and due for a refresh.

- `Source/connector-engineering-field-guide.md` is the canonical guide source (14 sections + appendix).
- `Source/source-notes.md` is the source-verification backlog for the canonical guide — 17 of 19 tracked claims verified as of 2026-07-02.
- `docs/` contains the Docusaurus site content. The numbered guide pages (`docs/00-*.md` through `docs/14-*.md`, `docs/appendix/`) mirror `Source/`. The following are **site-only presentational material with no `Source/` equivalent** — useful additions, but not part of the canonical guide text, and not expected to stay in lockstep with `Source/`:
  - `docs/index.md` — the site home page (cards, navigation).
  - `docs/decision-paths/` — scenario-based connector-selection walkthroughs.
  - `docs/tools/` — reusable engineering-document templates derived from the guide.
  - `docs/examples/` — worked examples derived from the guide's exercises.
  - `docs/what-people-forget.md`, `docs/glossary.md`, and the diagrams under `static/img/diagrams/`.

## What the guide helps with

- Figuring out what connector family to start with
- Understanding which specifications actually matter
- Avoiding common connector-selection traps
- Turning "I need a connector here" into a buildable, documented interface

## Local preview

```bash
npm install
npm run start    # dev server with hot reload at http://localhost:3000/connector-engineering-field-guide/
npm run build    # production build into build/
npm run serve    # serve the production build locally
```

## Contribution guidance

- Technical corrections require sources.
- Do not copy paid standards tables.
- Do not add exact ratings without sources.
- Prefer practical engineering decision logic over vendor marketing.
- Preserve existing warnings, disclaimers, TODO comments, and source-verification notes.

See `CONTRIBUTING.md` for the full source-discipline rules.

## License

This repository uses two licenses:

- **Documentation and content** (everything under `docs/` and `Source/`, including the templates and examples now under `docs/tools/` and `docs/examples/`, and the guide text itself) is licensed under the **Creative Commons Attribution 4.0 International License (CC BY 4.0)**. See [`LICENSE`](LICENSE).
- **Code and configuration** (the Docusaurus site code, build config, scripts, and similar non-content files) is licensed under the **MIT License**. See [`LICENSE-CODE`](LICENSE-CODE).

When reusing material, give appropriate credit: *A zcohen-nerd technical guide by Zac Cohen.*

> Note: GitHub may display a single license for the repository based on the `LICENSE` file. The dual-license split above is authoritative — content is CC BY 4.0, code is MIT.
