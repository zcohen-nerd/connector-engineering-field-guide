# Migration Notes

## What files were created or refreshed

- Root project metadata and community files were added or updated: `README.md`, `LICENSE`, `LICENSE-CODE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `CHANGELOG.md`, `CITATION.cff`, and `mkdocs.yml`.
- The canonical guide in `Source/connector-engineering-field-guide.md` was split into the active site pages under `docs/`.
- `Source/source-notes.md` was copied into `docs/appendix/source-notes.md`.
- Templates were refreshed from the guide content and a connector comparison matrix template was added.
- The rugged control box example was expanded into placeholder working documents derived from Exercise 1.
- Empty tracked asset directories were added under `assets/diagrams/` and `assets/images/`.

## What content moved where

- Guide introduction, core mental model, and disclaimer -> `docs/index.md`
- Sections 1 through 14 -> corresponding numbered guide pages under `docs/`
- Appendix quick-reference tables and final note -> `docs/appendix/quick-reference-tables.md`
- Usage and Attribution -> `docs/usage-and-attribution.md`
- Source verification backlog -> `docs/appendix/source-notes.md`

## Build issues fixed

- Updated navigation and file names to match the desired website structure.
- Removed the obsolete glossary page from navigation because it was not part of the canonical source or requested structure.
- Preserved existing `<!-- TODO: source/verify -->` comments from the canonical guide.

## Remaining TODOs and source-verification notes

- Source-verification TODO comments remain in the guide exactly as carried from the canonical source.
- `Source/source-notes.md` remains the backlog of claims to verify before public release.
- License choice was not present in the source content; repository license files were added to support the requested open-source structure and should be reviewed by the maintainer.
