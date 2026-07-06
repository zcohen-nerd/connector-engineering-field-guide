# Changelog

All notable changes to this project will be documented in this file.

## [0.5.0] - 2026-07-06

### Added

- **Rugged-on-a-budget decision path** — routes makers and small teams to sealed automotive families (Deutsch, Superseal, MX150, Metri-Pack) before jumping from hobby parts to MIL-DTL-38999.
- **Removable machine module decision path** — industrial rectangular / Han-style connectors for serviceable modules with mixed power/signal/data.
- **RF / GPS / radio decision path** — orientation-level routing for controlled-impedance RF paths (SMA/TNC/N/BNC, coax contacts, impedance/torque/shielding discipline).
- **MIL-DTL-26482 mini deep dive** (`docs/mil-dtl-26482.md`) — a supplemental, site-only page (not a canonical numbered section); covers the Series 1 vs Series 2 termination trap and when to prefer 38999 / M12 / sealed automotive. Reuses the sourced 26482 figures from `docs/03` plus a newly-cited Series 1/2 distinction.
- **Worked Connector Selection Packet example** — a full requirements→decision-matrix→architecture→pinout→BOM→cable→ICD→review packet for a rugged field-robot module.

### Changed

- Homepage bumped to **v0.5 Public Beta**; scenario cards now link to their decision paths, a new rugged-on-a-budget card was added, and the stale "no dedicated path yet" text for the removable-machine-module and RF/GPS/radio cards was removed.
- Sidebar, Decision Paths overview, and Examples overview updated for the new pages.
- `package.json` version bumped to `0.5.0`.
- Source notes updated: the new decision paths and worked example are intentionally qualitative (no new exact ratings); source discipline preserved.

## [0.1.1] - 2026-07-02

### Changed

- Documentation site migrated from MkDocs Material to Docusaurus 3 (see `internal/Docusaurus_MIGRATION_REPORT.md`). The `[0.1]` entry below describes the original MkDocs structure and is retained as history.
- Source-verification pass completed: the 38999/M12/D-sub/Micro-D/JST/USB-C/IP claims are now cited inline; `Source/connector-engineering-field-guide.md` remains the canonical guide source (see README).

## [0.1] - 2026-06-19

### Added

- MkDocs Material documentation site structure split from the canonical guide source
- Appendix source-notes page copied from the source-verification backlog
- Engineering-document templates derived from the guide
- Rugged control box example placeholders derived from the guide exercises
- Open-source project metadata files for review and contribution workflow

### Changed

- Navigation updated to match the structured documentation website layout
- Existing split pages refreshed from `Source/connector-engineering-field-guide.md`
