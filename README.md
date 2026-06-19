# Connector Engineering Field Guide

Practical connector selection for rugged, industrial, military-style, and electromechanical systems.

**Project status:** `v0.1 Public Review Draft`

This project exists because connector selection is often harder than it should be. The information is fragmented across vendor catalogs, datasheets, standards, and tribal knowledge. The goal of this guide is to help non-specialists pick a reasonable connector family, understand what specs matter, avoid beginner mistakes, and document the interface properly.

This repository turns the canonical Connector Engineering Field Guide into a Markdown-first documentation website. The guide is educational and judgment-focused; it is not a replacement for manufacturer datasheets, applicable standards, customer requirements, qualification requirements, or program-specific design rules.

When this guide conflicts with a datasheet, applicable standard, customer requirement, or qualified program requirement, the datasheet / standard / customer requirement wins.

## Repository layout

- `Source/connector-engineering-field-guide.md` is the current canonical guide source.
- `Source/source-notes.md` is the source-verification backlog.
- `docs/` contains the published MkDocs site content.
- `templates/` contains reusable engineering-document templates derived from the guide.
- `examples/` contains placeholder working examples derived from the guide's exercises.

## What the guide helps with

- Figuring out what connector family to start with
- Understanding which specifications actually matter
- Avoiding common connector-selection traps
- Turning "I need a connector here" into a buildable, documented interface

## Local preview

```bash
pip install mkdocs-material
mkdocs serve
mkdocs build
```

If you already have a virtual environment, install into that environment before running `mkdocs serve`.

## Contribution guidance

- Technical corrections require sources.
- Do not copy paid standards tables.
- Do not add exact ratings without sources.
- Prefer practical engineering decision logic over vendor marketing.
- Preserve existing warnings, disclaimers, TODO comments, and source-verification notes.

See `CONTRIBUTING.md` for the full source-discipline rules.
