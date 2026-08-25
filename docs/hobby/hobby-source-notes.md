---
id: hobby-source-notes
title: "Hobby Source Notes"
description: "What the hobby track's claims rest on — which values are sourced, which are placeholders awaiting verification, and which are deliberate engineering judgment."
slug: /hobby/source-notes
sidebar_label: Hobby Source Notes
---

# Hobby Source Notes

The hobby track follows the same transparency rules as the rest of the site (see the main [Source Notes dashboard](../appendix/source-notes.md) and the [source hierarchy](../06-reading-datasheets.md)): claims are sourced, marked as judgment, or explicitly flagged as needing a source. Clone and marketplace parts make this discipline *more* important in hobby work, not less.

## Verified / source-backed

Only what is actually backed by sources present in this repo:

- **JST XH, PH, SH, GH, SM, and RCY series** — pitch, connector type, and headline datasheet ratings (XH 2.5 / PH 2.0 / SH 1.0 / GH 1.25 / SM 2.5 / RCY 2.5 mm), each cited to its official JST series PDF on [JST Is Not One Connector](jst-is-not-one-connector.md). **Genuine-part figures only — clones and "compatible" parts are not covered by them.**
- **JST VH** (3.96 mm, up to ~10 A @ AWG 16) — per the JST datasheet cited in the engineering track's [§12](../12-consumer-hobby-prototype-connectors.md).
- **USB-C 10,000-cycle durability** — per the USB-IF Type-C specification, cited in [§12](../12-consumer-hobby-prototype-connectors.md).
- **USB-C power mechanics** — the sink-side 5.1 kΩ-per-CC-pin rule and the source's Rp current-advertisement levels per silicon-vendor engineering documentation (Infineon, Renesas); the PD fixed-voltage rungs (5/9/15/20 V, plus 28/36/48 V EPR), the 100 W / 240 W ceilings, and the e-marked/EPR cable requirements per USB-IF's own publications; the Raspberry Pi 4 shared-CC-resistor case study per engineering-press coverage carrying Raspberry Pi's own confirmation (labeled as such). Cited on [USB-C Power for Hobby Projects](usb-c-power.md).
- **JST GH figures and the Pixhawk standardization** — 1.25 mm pitch, 2–15 circuits, positive latch, 1 A (AWG #26) / 50 V / AWG #30–26 per the official JST GH datasheet; GH as the connector of the Pixhawk Connector Standard (DS-009), the DF13-predecessor history, and the not-all-boards-follow-the-pinouts caveat per the Pixhawk standards document and Dronecode connector-workgroup documentation. Cited on [JST-GH](jst-gh.md).
- **JST XH datasheet detail and the balance-lead convention** — position span (to 20), the SXH-001T/-002T contact wire ranges, 3 A max / 250 V, and top/side-entry headers per the official JST XH datasheet; the cells-plus-one balance-lead arrangement per charger-ecosystem vendor documentation, labeled as a convention with the meter-check hedge. Cited on [JST-XH](jst-xh.md).
- **Qwiic / STEMMA QT connector conventions** — 4-pin 1.0 mm JST SH, polarized, cross-compatible ecosystems — per SparkFun's Qwiic documentation and Adafruit's STEMMA QT technical specs, cited on [JST-SH, Qwiic, and STEMMA QT](jst-sh-qwiic-stemma.md).
- **XT30/XT60/XT90 attribution and ratings** — AMASS (Changzhou Amass Electronics) as XT-series originator per its manufacturer site; rated/momentary currents (XT30: 15/30 A, XT60: 30/60 A, XT90: 40/90 A), cable specs, and temperature-rise conditions per AMASS-authored documentation (distributor-hosted PDFs — AMASS publishes no spec tables on its own site). Genuine-part figures only; clones uncovered. Cited on [XT30, XT60, and XT90](xt-connectors.md).
- **Servo-lead conventions and figures** — the red-center-positive pin order and darkest-negative/lightest-signal color rule per a servo manufacturer's documentation (Kpower) and a hobby-industry reference (Flite Test); JR-universal vs Futaba J housing geometry (bevel, keyed tab, shave-to-universal) per vendor documentation (Hansen Hobbies, Pololu); the old-Airtronics polarity difference per conversion-adapter documentation; the 0.1-inch contact-class current (~3.5 A continuous / 5 A intermittent) per servo maker ProModeler's engineering note quoting pin-manufacturer ratings; stall currents per Savox's published specifications; and the 26/22/20 AWG servo-wire ladder per vendor documentation. **No governing spec exists for this family — nothing transfers to clone leads or kit terminals.** Cited on [Servo Connectors](servo-connectors.md).
- **WAGO 221 lever-connector figures** — both size classes (4 mm² and the 6 mm² / 41 A-class 221-6xx line) and both rating systems on the identical parts (IEC 32/41 A @ 450 V; UL 20/30 A @ 600 V per the UL 486C listing), per WAGO's own family and product pages. Genuine WAGO only — clone "Wago-style" levers inherit nothing. Cited on [the terminals page](screw-terminals.md) and the [families capsule](families.md).
- **Anderson Powerpole PP15/45 and family-ladder figures** — 15/30/45 A contacts sharing one housing, #20–#10 AWG, up to 55 A/pole, 600 V (UL), 10,000 no-load mating cycles, low-detent and finger-proof variants per Anderson's own datasheet; silver contact plating per Anderson listings; PP75/PP180 ladder per Anderson pages and an Anderson-hosted PP180 datasheet (one distributor-hosted item labeled as such); the ARES/RACES orientation convention per emergency-service training references (convention, not ratings). Cited on [Anderson Powerpole](anderson-powerpole.md).
- **Barrel-jack structure, polarity-is-convention, and the switched contact** — per Same Sky's (CUI's) own selection guide, with a representative 2.5 A rating from the PJ-102A datasheet (that part only). Cited on [Barrel Jacks](barrel-jacks.md).
- **Deans/T-plug originator attribution** — per W.S. Deans' own site (attribution only; ratings deliberately unasserted). Cited on the [RC battery landscape](rc-battery-connectors.md).
- **FFC 0.5/1.0 mm pitch classes** — per Molex's Easy-On family page. Cited on the [families capsule](families.md).
- **Grove connector and port-type pinout variation** — 4-pin 2.0 mm connector; signal-pin function varies by port type (I2C/UART/digital/analog), per Seeed's Grove System documentation, cited on [JST-SH, Qwiic, and STEMMA QT](jst-sh-qwiic-stemma.md).
- **Plain STEMMA vs STEMMA QT** — plain STEMMA = JST PH 2.0 mm (4-pin I2C, 3-pin analog/digital/PWM, 3–5 V device power, Zener-protected 3-pin ports), distinct from the 1.0 mm SH-based STEMMA QT — per Adafruit's STEMMA documentation, cited on the [SH/Qwiic](jst-sh-qwiic-stemma.md) and [PH](jst-ph.md) pages.
- **0.1 in = 2.54 mm** — definitional; the basis of the Dupont/header ecosystem discussion.
- **"Dupont" name lineage** — the ancestor is Berg's Mini-PV 0.1 in crimp system (Berg → DuPont → FCI → Amphenol), and MiniPV® remains a current Amphenol 2.54 mm crimp family per Amphenol's FCI Basics portfolio PDF; the history per a community connector reference (attribution only, no ratings). Cited on [Dupont / 0.1 Inch Headers](dupont-headers.md).

## Engineering heuristics (judgment, not specification)

- **"JST" is not a complete connector description.**
- **Measure pitch before buying.**
- **Compare drawings rather than product photos.**
- **Treat marketplace connector names as clues, not proof.**
- **Buy small samples before committing.**
- **Use pre-crimped leads when tiny terminals/tooling are impractical** — a reliability decision, not cheating.
- **Move to the [professional guide](../hobby-or-professional.md) when failure consequence, environment, or documentation burden increases.**
- Soldering crimp terminals is usually a smell; genuine parts from authorized distributors are cheap insurance for repeatable projects.

## Example-only / source-needed values

Typical hobby usage, not design ratings. Anywhere these appear they carry a *verify* hedge — verify exact pitch, current, voltage, wire gauge, and mating part against the manufacturer datasheet or supplier documentation:

- Clone / "compatible" / "-style" versions of any JST or XT series — the genuine-part figures above do not transfer to them
- JST/XT series usage beyond the sourced figures (derating, environment, cycles in *your* application)
- Servo connector/lead current examples beyond the class figures and Savox stall currents cited on [Servo Connectors](servo-connectors.md) — *your* servo's stall figure and *your* terminal's rating still decide
- Dupont / 0.1 in header current assumptions
- Barrel jack size and rating examples beyond the figures cited on [Barrel Jacks](barrel-jacks.md) (5.5 × 2.1/2.5 mm remain *common sizes*, not a standard; the PJ-102A 2.5 A rating covers that part only)
- Screw/spring terminal ratings and gauge ranges beyond the WAGO 221 figures cited on [the terminals page](screw-terminals.md) — clone blocks and torque-class figures stay unsourced
- LED connector current assumptions and power-injection sizing
- Every marketplace kit claim (series, pitch, "waterproof," "high current")

## Needs source before hobby v1.0

Source targets tracked to closure. Rows marked **Closed** are done — the citations now exist in the repo at the locations named; everything else remains honestly open:

| Item | Source target |
|---|---|
| JST EH/ZH pitch and headline ratings | **Closed (audit 2026-08):** EH cited to the official JST series PDF and ZH to JST's official product page; figures live in §12.2 (its `[^jst]` footnote) and, since the fix batch, as sourced rows on [JST Is Not One Connector](jst-is-not-one-connector.md) |
| XT ratings from AMASS-direct hosting | Closed for values (audit-2026-07) via distributor-hosted AMASS PDFs; an AMASS-domain-hosted equivalent would still be an upgrade |
| Crimping tiny open-barrel terminals | Manufacturer application notes / crimp specifications |
| LED power injection guidance (if expanded) | Reputable LED wiring/power-injection references |
| USB connector guidance (if formalized) | **Closed (audit 2026-08):** formalized as [USB-C Power for Hobby Projects](usb-c-power.md) — CC/Rd/Rp mechanics per silicon-vendor documentation, PD rungs and cable rules per USB-IF publications, 10k cycles per the Type-C spec (as in §12). Exact PDO tables and tolerances deliberately left to the USB-IF specifications |
| Barrel jacks, terminal blocks, Wago-style lever connectors, screw terminals | Relevant manufacturer documentation. **Substantially closed (audit 2026-08):** WAGO 221 figures cited to WAGO's own pages at datasheet level — both size classes (4 mm² and 6 mm²/41 A) and both rating systems (IEC + UL 486C); barrel structure/polarity to Same Sky's selection guide with a representative rating from the PJ-102A datasheet. **Still open:** representative torque-class figures, a first-party never-tin-stranded-wire manufacturer document, EIAJ RC-5320A per-class voltage figures, and every clone-block rating |
| Deans / EC3-EC5-IC / Traxxas / Tamiya-style / bullet ratings (RC battery landscape page is deliberately rating-free) | W.S. Deans, Horizon Hobby, and Traxxas documentation for genuine parts, if any figures are ever added. **Partially closed (audit 2026-08):** the Deans/T-plug originator claim is now cited to W.S. Deans' own site; ratings remain deliberately unasserted |
| FFC/FPC pitch classes and cycle expectations; GX/SP-style circular claims (capsules are identification-level) | Connector-manufacturer FFC/ZIF documentation; GX/SP clones have no governing spec — listings stay untrusted. **Partially closed (audit 2026-08):** the 0.5/1.0 mm FFC pitch classes are now cited to Molex's Easy-On family page; cycle expectations and all GX/SP claims remain open |

## Recommended next deep pages

The editorial roadmap for this track — what exists, what's next, and in what order. Nothing here is claimed complete or fully sourced; "initial page added" means exactly that.

1. **JST-XH** — initial page added (v0.9); deepened (audit 2026-08) with datasheet-level detail (positions, both crimp contacts' wire ranges, header orientations) and the balance-lead convention, cited to the official JST datasheet and labeled vendor convention documentation
2. **JST-PH** — initial page added (v0.9); figures already datasheet-cited — the remaining depth work is an XH-style "in detail" table (positions, contact part numbers, header orientations)
3. **JST-SH / Qwiic / STEMMA QT** — initial page added (v0.9); Qwiic/STEMMA QT conventions cited; Grove and plain-STEMMA distinctions sourced (audit-2026-07)
4. **Dupont / 0.1 inch headers** — initial page added (v0.9); no governing spec exists, by nature; name lineage (Berg Mini-PV → DuPont → FCI → Amphenol) sourced (audit-2026-07)
5. **XT30 / XT60 / XT90** — initial page added (v0.9); AMASS attribution and ratings sourced (audit-2026-07, distributor-hosted manufacturer PDFs); clone parts remain uncovered
6. **Servo connectors** — initial page added (audit 2026-08); pin-order/color conventions, housing geometry, contact-class current, stall figures, and the wire ladder all cited to vendor/industry references honestly labeled as such — no governing spec exists for the family; clone leads and kit terminals uncovered
7. **Screw/spring terminals and ferrules** — initial page added (audit 2026-08); WAGO 221 figures cited at datasheet level for both size classes and both rating systems (IEC + UL, incl. the 6 mm²/41 A class); torque-class figures and a first-party never-tin-stranded-wire citation remain open
8. **USB-C power for hobby projects** — initial page added (audit 2026-08); CC/Rd/Rp mechanics, PD rungs, cable rules, and the Pi 4 case study all cited (silicon-vendor, USB-IF, and labeled press references); PDO tables deliberately left to the USB-IF specs
9. **Barrel jacks and polarity traps** — initial page added (audit 2026-08); structure/polarity/switched-contact claims sourced to Same Sky's selection guide and the representative rating to the PJ-102A datasheet; EIAJ per-class figures deliberately unquoted
10. **Grove ecosystem** — deep page not started; connector and pinout-varies-by-port-type facts sourced to Seeed docs (audit-2026-07)
11. **JST-GH** — initial page added (audit 2026-08); datasheet figures, the Pixhawk DS-009 standardization, DF13 history, and the PicoBlade-lookalike guidance cited; clone "Pixhawk cables" uncovered
12. **JST-RCY** — capsule only; the classic red 2-pin "battery pair" and a top confusion family; deep page not started
13. **IDC ribbon connectors** — capsule only; deep page not started
14. **RC battery-connector landscape** — initial page added; identification-level and deliberately rating-free except the cited Anderson Powerpole figures; per-family genuine-part ratings remain a needs-source item
15. **FFC/FPC flat-flex** — capsule only ([families](families.md)); deep page not started
16. **GX/SP-style "aviation / waterproof" circulars** — capsule only ([families](families.md)); identification and skepticism guidance; no ratings asserted
17. **Anderson Powerpole** — initial page added (audit 2026-08); PP15/45 figures and contact plating cited to Anderson's own datasheet/listings; PP75-class ladder figures partially distributor-listed (labeled) pending Anderson-hosted equivalents; the ARES/RACES orientation convention cited to emergency-service training references

:::note

No exact current, voltage, temperature, or cycle rating in the hobby track should ever be read as universal. When a number matters, the exact part's datasheet decides — same rule as everywhere else on this site.

:::
