# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed

- **Sourcing-hardening pass (audit 2026-08)** — closed or upgraded every closable needs-source row found by search; permanent rows stay honestly open. Closed: **JST EH/ZH** now cited to the official JST EH PDF and JST ZH product page with figures in §12.2 (synced in `Source/`); **DEUTSCH tooling** closed to TE-authored documents — Application Specification 114-151004 (solid contacts) and the HDT-48-00 instruction sheet (solid-only, 12–20 AWG, DT/DTM/DTP/DTHD) — on the deep dive and decode worksheet; **DEUTSCH DTHD and HD10** upgraded from distributor/industry citations to TE-direct pages and the TE HD10 catalog (HD10 row now reflects the sourced size-12/16 and 16+4 arrangements); **WAGO 221** class figures cited to WAGO's own family page in the hobby capsule; **FFC 0.5/1.0 mm pitch classes** cited to Molex's Easy-On family page; the **Deans/T-plug originator claim** cited to W.S. Deans' own site. Still open, deliberately: Weather-Pack and the Han E 6–48 span (no manufacturer-hosted equivalents found), the Autosport catalog (TE-authored, distributor-hosted), EC/Traxxas/Tamiya-style/bullet ratings, barrel jacks and screw terminals, GX/SP clone claims, and every per-design — permanent row. Both source-notes copies and the hobby needs-source table updated with closure notes.

- **Cross-link + consistency batch** (from the 2026-08 full-site audit): the four family deep dives (38999, 26482, M12, DEUTSCH) are now linked wherever their families are named — §2/§3 tables, §5/§6 examples, §9 scenario map, §12 upgrade table, §13/§14 exercises, appendix A2–A4, the comparison matrix rows, the decision-paths index, and the sealed-feedthrough / debug / high-current / defense / removable-module paths. §12 now also links the hobby track's v0.9 deep pages (Dupont, XH, PH, SH, XT) and the sealed-automotive middle ground both ways. Consistency fixes: A2 regains the size-23 (HD) contact row (matching §7.5, synced in `Source/`); A3 gains a sealed-automotive row; A4 gains the cited DEUTSCH/DRC 100-cycle row (synced in `Source/`) and its intro now names A4; the stale §5 "see Section 10" terminal-retention pointer now targets §12.3 (synced in `Source/`); glossary TPA/Wedgelock entries re-alphabetized and three entries gained their missing "See" links; engineering-home's source-discipline list now names the supplemental deep dives, Glossary, and Identification Workflow; source-notes release narrative extended through v0.10 (both copies) and its extensionless hobby links made file-based; the high-current path now names DEUTSCH DTP/DTHD and acknowledges the Powerpole photo; §9 gained deep-dive pointers and the two missing See-also lines; hobby roadmap gains JST-GH, JST-RCY, and IDC entries, the hobby landing lists the IDC capsule, and the stale Grove self-assessment on the Qwiic page was corrected.

### Added

- **Aptiv Weather-Pack** joins the sealed-automotive family table (§3.2, synced in `Source/`) with distributor-cited family figures (1–6-way, triple-ribbed silicone seals, ~20 A class), a budget-path bullet and search term, and source-notes rows in both copies; §3.2 also gains the Amphenol Sine AT/ATM/ATP second-source note (synced), reconciling the family sets across §2, §3.2, and the DEUTSCH deep dive.
- **Motor + feedback cable decision path** (`docs/decision-paths/motor-feedback-cable.md`) — the audit's last structural gap: servo/motor cabling had no routing and M23 appeared nowhere. Covers the M23-class power + signal pair (17–19-pole feedback class, power inserts, threaded and SpeedTec-style quick-lock couplings, multi-vendor per binder/TE Intercontec/Phoenix pages), M17/M40 siblings, drive-ecosystem cordsets as the usually-right answer, one-cable servo notes, and the EMC discipline (360° shields both ends per the drive manual, power/feedback separation) with a new diagram (`motor-feedback-cabling.svg`). New §3.1 Part A/B and A3 rows (synced in `Source/`), engineering-home Start Here card, index row, sidebar, §9 motor-power See-also, source-notes rows in both copies (no governing-standard number asserted; cross-vendor intermating flagged verify). README count updated to thirteen.
- **Name-drop sweep** (from the 2026-08 audit's tier-2 list) — families a reader will meet, each placed where they'd meet it, all qualitative/identification-level with verify hedges: **MIL-DTL-5015 / "MS-style"** legacy circulars (26482 page + defense path), **LEMO/ODU/Fischer-class push-pull** and the **OBD-II J1962 / J1939 HD10** standardized vehicle diagnostic ports (debug/service path), **DIN 43650 valve connectors** and **7/8-inch mini-change** (industrial-sensor path + search terms), **MC4-style PV** with its not-load-break and no-brand-mixing cautions (high-current path), **Nano-D MIL-DTL-32139** (Micro-D path), and **ix Industrial (IEC 61076-3-124) + Single Pair Ethernet (IEC 63171)** as horizon options (rugged-Ethernet path). Hobby track gains two new capsules in Common Families — **FFC/FPC flat-flex (ZIF)** and **GX/SP-style "aviation / waterproof" circulars** (naming-trap and listing-skepticism guidance, closing the loop on the track's "waterproof means nothing" warnings) — with the landing coverage list, roadmap (items 15–16), and needs-source table updated.
- **Board-to-board decision path** (`docs/decision-paths/board-to-board.md`) — closes the audit's clearest structural gap (§2 named the category; nothing routed it). Covers stacking headers, shrouded pairs, 2 mm/1.27 mm strips, fine-pitch mezzanine (DF40/SlimStack/Samtec class), card edge, DIN 41612 / IEC 60603-2 backplane, and pogo arrays, built around the two board-to-board rules: the standoffs carry the load, and the pair is ordered to the mated stack height (new house-style diagram `board-to-board-stack.svg`). Deliberately number-free, per decision-path convention. Wired in everywhere the category appears: new §3.1 Part A/B rows and an A3 row (all synced in `Source/`), the §2 category link, a new engineering-home Start Here card, the decision-paths index, sidebar, an internal-PCB-harnessing cross-reference, and **Mezzanine** / **Stack height** glossary entries. README's decision-path list corrected to twelve (it said ten and omitted Micro-D).
- **Barrel Jacks and Polarity Traps** (`docs/hobby/barrel-jacks.md`) + **Screw Terminals, Spring Clamps, and Ferrules** (`docs/hobby/screw-terminals.md`) — deep pages for the two most-used, least-documented connector classes, closing hobby roadmap items 7 and 9. Barrel: the OD×ID size-pair system and the 2.1-in-2.5 loose-mate trap, the polarity symbol decoded (with a new diagram), the switched third pin, and per-part ratings — structure/polarity/switched-contact claims cited to Same Sky's (CUI's) own selection guide and a representative 2.5 A rating to the PJ-102A datasheet; EIAJ RC-5320A named without reproducing its tables. Terminals: the clamp-style map (rising clamp / direct screw / spring cage / lever / pluggable, with a new cross-section diagram), pitch-tracks-voltage and the 5.0-vs-5.08 pluggable trap, torque and gauge-range discipline, DIN 46228-style ferrules, and the never-tin-stranded-wire rule stated with its cold-flow mechanism (first-party citation tracked as an open source target). Both wired into the sidebar, family capsules, decision guide, §12.3, hobby landing lists, roadmap, and needs-source table. The terminals page additionally carries a **"Lever connectors for real power work"** section with WAGO 221 figures at datasheet level: both size classes (the little-known 6 mm² / 41 A-class 221-6xx line alongside the 4 mm² class) and both rating systems on the identical parts (IEC 32/41 A at 450 V vs. UL 20/30 A at 600 V per UL 486C), the fine-stranded-without-ferrules selection logic vs. push-in clamps, and the mounting-carrier/enclosure discipline — all cited to WAGO's own family and product pages.
- **U.FL / IPEX-class board micro-coax** joins the RF/GPS/radio decision path — family bullet (assemble-once, extraction tool, pigtail-to-bulkhead pattern, IPEX/MHF naming chaos), search term, and decision-field entry, with a Hirose series-page citation recorded in both source-notes copies (mating-cycle figure deliberately unquoted pending the exact datasheet). Closes the audit finding that the RF path covered MCX/MMCX but not the most common dev-board antenna connector.
- **RC Battery Connector Landscape** (`docs/hobby/rc-battery-connectors.md`) — the hobby track's answer to "what connector is on this battery?": identification table and traps for Deans/T-plug, EC3/EC5/IC, Traxxas-style, Tamiya-style, bare bullets, MR/MT trios, Powerpole, and RCY, with a new house-style ID-silhouette diagram (`hobby-rc-battery-id.svg`). Deliberately rating-free except Anderson Powerpole PP15/45 figures cited to Anderson's own datasheet; other genuine-part ratings added to the hobby needs-source table, and the roadmap/coverage lists updated. Cross-linked from the XT page, families capsule, decision guide, and hobby landing.
- **DEUTSCH Decode & Tooling Worksheet** (`docs/tools/deutsch-decode-worksheet.md`) — the family's Tools-page counterpart to the 38999 decode worksheet, derived from the deep dive's §7 (DT/HD part-number decode) and §4 (solid 0460/0462 vs stamped 1060/1062 contact lines and their non-interchangeable crimp tooling) with citations carried over and zero new claims; linked from the deep dive, the Tools index, and the sidebar. Closes the audit's tools-asymmetry finding for DEUTSCH.
- **DEUTSCH deep dive** (`docs/deutsch.md`) — a full 38999-style deep dive, supplemental and site-only (not a canonical numbered section), covering every size of the industrial DEUTSCH range: DTM / DT / DTP / DTHD, HD10 (including the SAE J1939-13 diagnostic connector), HD30 / HDP20, DRC, and the Autosport lines, plus the solid-vs-stamped contact-system trap, sealing/wedgelock discipline, keying, and a DT part-number decode. All figures are family-level and cited (TE pages and catalogs, with distributor/industry references labeled where a TE-hosted equivalent is pending). Two new house-style line-art diagrams (`deutsch-dt-exploded.svg`, `deutsch-contact-sizes.svg`); the §3.2 J1939 photo is reused in context. Cross-linked from §3.2, the rugged-on-a-budget path, the Connector Selection Packet, the 26482 page, the hobby track's graduation page, engineering home, and the README; new sourced DEUTSCH row in the comparison matrix; new **Wedgelock** glossary entry; source-notes rows added in both copies.

## [0.10.0] - 2026-08-12

### v0.10 — Audit Hardening + Release Tooling

Everything from the 2026-07 consistency audit through the 2026-08 punch-list remediation and closeout: licensed photos and ID-card line art across the family pages, three new templates and a new decision path, the intern-onboarding guide, single-sourced version strings with a CI drift guard, and a validated two-PDF release pipeline.

### Audit 2026-08 — punch-list remediation

- Verified the 2026-08-11 audit's footer-drift and stale-hobby-banner findings against the served live site: both were already fixed and deployed (the audit hit cached pages); no code change was needed.
- Fixed `CITATION.cff` version drift (0.8.1 → 0.9.0) and added version single-sourcing: `scripts/bump-version.mjs` rewrites every version call site from one command, and CI now fails on drift (`--check` in `build.yml`).
- Hobby landing "What this guide covers" no longer overpromises: dedicated-page topics and capsule-only topics (servo, screw/spring terminals, USB/barrel-jack power, Grove) are now listed separately, matching the Hobby Source Notes roadmap.
- Engineering Start Here grid: added the missing Sealed Enclosure Feedthrough card, and gave the Micro-D card a real path — a new **Micro-D / compact high-rel decision path** built entirely from the already-sourced §3 material (Glenair MIL-DTL-83513 citation carried over). Every Start Here card now links a decision path.
- Three new Tools & Templates pages, all derived from existing sourced content with citations carried over and zero new claims: **M12 Coding Cheat Sheet** (§8.1), **38999 Part-Number Decode Worksheet** (§7.8), and a deliberately criterion-free **Harness Inspection Checklist** (§4/§7.9/What People Forget; acceptance values stay with A-620 and the contact system's application spec).
- New worked example: **M12 Sensor Interface** — full A-coded/X-coded selection reasoning (candidates, rejections, service-model logic), with the scenario marked as an illustrative composite under review against the sanitized real-world selection; all connector facts by reference to §8 and the decision paths.
- New shared page: **How to Use This Guide with an Intern** — a mentor's four-week overlay on the 30-day plan, exercises, decision paths, and templates, linked from the landing page and both track homes.
- New `release-pdf.yml` workflow: builds two per-track PDF artifacts (hobby, engineering) by crawling each sidebar's pagination chain, on version tags and on demand.
- Needs-source backlog clarified in both source-notes copies: rows are now explicitly **closable** vs **per-design — permanent**; hedge wording on all per-design-affected pages re-verified.
- Distributor-citation pass: Molex MX150 now cites Molex-hosted MX150L literature (verified; sealing claim tightened to IP67); MIL-DTL-24308 citations gained the DLA ASSIST locator plus a revision-currency note (current is Rev K w/Amend 1; clause refs checked against Rev G); Aptiv Metri-Pack documented as having no stable manufacturer-hosted system datasheet (TTI-hosted copy retained per the acceptable-interim rule).
- Usage and Attribution now states explicitly that the Tools & Templates pages are documentation content under CC BY 4.0.

### Audit 2026-08 — closeout

- PDF release pipeline validated end-to-end via manual dispatch: hobby PDF 75 pages, professional/industrial PDF 239 pages; track boundaries (hobby ends at Hobby Source Notes, engineering at Usage and Attribution), new-page coverage, and image embedding verified; no workflow fixes needed.
- Every MIL-DTL-24308 claim verified against Revision K w/Amendment 1 (5 December 2022) retrieved directly from DLA ASSIST: all clause numbers and figures unchanged from what the site cited (durability requirement §3.5.16 / test §4.5.18, 500 cycles, −55 to +125 °C, sizes 20/22D, arrangements per Table A-I). Citations now name Rev K with the ASSIST locator; the distributor-hosted Rev G copy is dropped.
- OG/social card regenerated for the two-track site with an editable in-repo source (`assets/og-card.svg`, rendered by `npm run og-card` via a new `sharp` devDependency); visual backlog item 0 closed.

### Images pass — a picture on every connector family page

- Added licensed photographs (Wikimedia Commons / Flickr, CC BY / CC BY-SA, credited per-image in captions) to: Dupont headers, JST-XH, JST-SH/Qwiic/STEMMA QT, JST Is Not One Connector (generic "JST-style" header + the red RCY pair), XT connectors (XT60 mating ends), MIL-DTL-38999, M12, §3 (DE-9 D-sub + Deutsch-style J1939 plug), and the high-current DC decision path (Anderson Powerpole workbench). No manufacturer marketing photography used.
- Added eight original line-art "ID card" diagrams in the existing house style: Dupont/0.1", JST-XH, JST-PH, JST-SH, JST-SM, XT30/60/90, 38999 Series III profile, and 26482 bayonet coupling.
- Added a "Photographs and diagrams" licensing section to Usage and Attribution; photos remain under their own CC licenses and are not relicensed by the project.
- Updated the hobby visual backlog: item 4 (JST-SM diagram) done; item 3 (JST size silhouettes) partly covered by the per-series ID cards.
- Added `internal/PHOTO_BACKLOG.md` — full-site audit of where real photographs beat line art, with per-item sourcing status and a bench-photo shooting guide.
- Commons harvest pass: ten more licensed photos wired in — ratcheting crimper + ferrule spread (crimping), SMA-vs-RP-SMA + BNC (RF path), M12-X vs RJ45 (rugged Ethernet), SG90 servo lead / WAGO 221 / barrel-jack pair / IDC-10 (family capsules), and a public-domain ITT Cannon CIR circular pair (§2 categories).

### Audit 2026-07 — consistency + source-hardening fixes (T1–T10)

- Hobby source status is now tracked in exactly one place (Hobby Source Notes); the appendix dashboard carries a track-level pointer instead of a duplicated per-topic summary (T1).
- Hobby landing banner normalized to the canonical version story ("Introduced v0.8, expanded v0.9") (T2).
- Hobby figures/diagrams verified rendering correctly with alt text — no change needed (T3).
- XT30/XT60/XT90 page rewritten with sourced AMASS attribution and ratings (rated vs *momentary* current — the digits are the momentary figure), temperature-rise conditions, and genuine-vs-clone caveats (T4).
- Grove ecosystem warning sourced to Seeed documentation: 4-pin 2.0 mm connector whose signal pinout varies by port type (T5).
- Plain STEMMA (JST PH 2.0 mm) explicitly distinguished from STEMMA QT (JST SH 1.0 mm), sourced to Adafruit, cross-linked from the PH page (T6).
- Citation-quality swaps: USB-C cycle figure now cited to the USB-IF document library (Mouser PDF relabeled vendor secondary); GlobalSpec standard listings replaced with direct IEC webstore links (with current-edition -111:2025 / -104:2026 scope figures); Han E figures now cited to HARTING's own product page instead of a distributor listing; stale redirect URLs refreshed (T7).
- M12 coding table: L-coded corrected to 4+FE and T-coded to 4 contacts per DIN EN 61076-2-111, sourced to binder product documentation (T8).
- Dupont page now names the sourced lineage: Berg's Mini-PV → DuPont → FCI → Amphenol, with MiniPV® confirmed as a current Amphenol 2.54 mm family (T9).
- Roadmap ordering (servo above barrel jacks) verified already satisfied — no change needed (T10).

## [0.9.0] - 2026-07-08

### v0.9 — Hobby Guide Expansion + Two-Track Polish

- Added dedicated hobby family pages for the highest-value connector families: Dupont / 0.1-inch headers, JST-XH, JST-PH, JST-SH / Qwiic / STEMMA QT, and XT-class DC power connectors (JST-SM keeps its existing dedicated page).
- Tightened or sourced remaining hobby-specific claims: Qwiic/STEMMA QT connector conventions now cited to SparkFun/Adafruit documentation; the XT "AMASS-designed" claim softened to a common-usage description pending manufacturer documentation; JR/Futaba servo wording replaced with cautious verify-the-documentation language; Grove kept qualitative with Seeed docs as the named target.
- Reframed the professional §12 page as "Consumer, Hobby, and Prototype Connectors at the Bench-to-Product Boundary" — the transition-risk page, explicitly deferring identification/buying/crimping detail to the hobby track.
- Added an editorial roadmap ("Recommended next deep pages") to Hobby Source Notes; new pages are marked initial, not complete.
- Improved the two-track landing page: kicker labels, button-style CTAs with hover/focus states, subtle per-track accents, mobile spacing — existing tokens only, no brand changes.
- Documented that top-level brand navLinks are unsupported in project mode (feature request against the brand package; TODO recorded in config) — no unsafe config added.
- Flagged the OG/social card as stale for the two-track site in a new visual backlog (`internal/HOBBY_VISUAL_BACKLOG.md`); `themeConfig.image` unchanged and valid.
- Added "Bad Connector Listings, Corrected" — five marketplace-description makeovers plus a reusable good-connector-description template.
- Added two hobby diagrams (pitch measurement; housing vs contact) in the existing line-art style, plus the prioritized visual backlog.

The hobby track remains initial/seeded — not complete or fully sourced.

## [0.8.1] - 2026-07-08

### Fixed

- Corrected project navigation so the top-left brand/home link returns to the guide landing page instead of leaving the site.
- Updated site and repo metadata from the old professional-only framing to the two-track Connector Field Guides framing (Docusaurus title/tagline/brand name, CITATION.cff, agent instructions, CONTRIBUTING).
- Added CI validation (`.github/workflows/build.yml`) running typecheck and the Docusaurus build on pushes and pull requests.
- Tightened hobby JST source-status language: all six commonly-met JST series (XH, PH, SH, GH, SM, RCY) are now cited series-by-series to official JST PDFs, with genuine-vs-clone caveats; only directly cited claims are marked verified.
- Replaced hardcoded internal sidebar URLs with Docusaurus doc references.
- Cleaned up the v0.8 changelog wording.

## [0.8.0] - 2026-07-08

### v0.8 — Two-Track Guide Structure

- Added a top-level routing page between the Hobby Connector Field Guide and Professional / Industrial Connector Field Guide.
- Preserved the existing professional guide content and moved its start page to `/engineering` while keeping existing professional URLs intact.
- Added the initial Hobby Connector Field Guide at `/hobby`, including Start Here, The Big Idea, unknown-connector identification, JST Is Not One Connector, pitch measurement, Common Hobby Connector Families, JST-SM and LED string connectors, power vs signal, crimping, marketplace kits, buying mating parts, when hobby connectors are not enough, a hobby decision guide, and Hobby Source Notes.
- Added shared cross-track infrastructure: Glossary, Connector Identification Workflow, and Hobby or Professional? boundary page.
- Added bidirectional links between the hobby and professional tracks.
- Added hobby source-status notes and a source-needed backlog. The hobby guide is initial/seeded, not complete or fully sourced.
- Aligned README, engineering home, Source Notes, and package version to v0.8.

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
