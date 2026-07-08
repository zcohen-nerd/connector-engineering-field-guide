# Changelog

All notable changes to this project will be documented in this file.

## [0.7.0] - 2026-07-08

### v0.7 — Reference Hardening + Design Nuance Pass

- Added source hierarchy guidance distinguishing program requirements, standards, QPD/QPL listings, manufacturer documentation, and distributor metadata (guide §6.1 + Source Notes); distributor-listing citations flagged as orientation-only.
- Added "mil-spec style ≠ qualified" language: qualification requires the exact manufacturer, part number, slash sheet, and QPD/QPL status.
- Added evidence/source-tracking fields (source document, revision/date, requirement type, verification status, verified by, risk-if-wrong; plus datasheet/drawing/application-spec revisions, QPD/QPL reference, and derating-curve check) to the selection checklist, cable drawing, ICD, comparison matrix, and design-review templates.
- Tightened sealed automotive connector language ("strong middle ground," not guaranteed ruggedness) and made IP-rating cautions configuration/test-condition-specific.
- Added "ratings are system-level / not a permission slip" warnings near the §3 tables, comparison matrix, and quick-reference appendix, with rating-context fields in the checklists.
- Revised shield termination guidance: one-end vs. both-ends vs. 360° backshell is system- and frequency-dependent, documented per design with an EMC rationale — never a universal rule; shield-strategy fields added to templates.
- Added minimum RF and fiber connector decision-field tables (orientation-level; no performance values asserted).
- Updated Source Notes: v0.7 entry, source hierarchy, new heuristics, and backlog items for distributor-citation replacement and RF/fiber values.

## [0.6.0] - 2026-07-08

### v0.6 — Source Cleanup + Safety Pass

- Aligned public version/status language across the guide (`v0.6 Beta — Source Cleanup + Safety Pass`), with a consistent educational/reference disclaimer on the homepage and Source Notes.
- Reworked Source Notes into a source-status dashboard: verified claims, engineering heuristics, example-only values, and an explicit needs-source-before-v1.0 backlog.
- Updated M8/M12 standards language: IEC 61076-2-104 scope no longer over-anchored on a single edition's contact-count summary; IEC 61076-2-111 power figures labeled as edition/configuration-specific examples; added a record-the-edition/datasheet-revision reminder.
- Added explicit energized-connector / load-break / hot-plug safety warnings to the high-current DC path (and cross-references on the removable-module and rugged-on-a-budget paths), plus load-break/touch-safety/fault-current/inrush fields in the selection checklists, ICD template, design-review checklist, and worked selection packet.
- Added IPC/WHMA-A-620 as the general cable and wire harness workmanship/acceptance reference (program/customer requirements still control) across the workflow, templates, and checklists.
- Added source-verification reminders for ratings, tooling, qualification, and environmental limits.

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
