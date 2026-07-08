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
- **Qwiic / STEMMA QT connector conventions** — 4-pin 1.0 mm JST SH, polarized, cross-compatible ecosystems — per SparkFun's Qwiic documentation and Adafruit's STEMMA QT technical specs, cited on [JST-SH, Qwiic, and STEMMA QT](jst-sh-qwiic-stemma.md).
- **XT30/XT60/XT90 attribution and ratings** — AMASS (Changzhou Amass Electronics) as XT-series originator per its manufacturer site; rated/momentary currents (XT30: 15/30 A, XT60: 30/60 A, XT90: 40/90 A), cable specs, and temperature-rise conditions per AMASS-authored documentation (distributor-hosted PDFs — AMASS publishes no spec tables on its own site). Genuine-part figures only; clones uncovered. Cited on [XT30, XT60, and XT90](xt-connectors.md).
- **Grove connector and port-type pinout variation** — 4-pin 2.0 mm connector; signal-pin function varies by port type (I2C/UART/digital/analog), per Seeed's Grove System documentation, cited on [JST-SH, Qwiic, and STEMMA QT](jst-sh-qwiic-stemma.md).
- **Plain STEMMA vs STEMMA QT** — plain STEMMA = JST PH 2.0 mm (4-pin I2C, 3-pin analog/digital/PWM, 3–5 V device power, Zener-protected 3-pin ports), distinct from the 1.0 mm SH-based STEMMA QT — per Adafruit's STEMMA documentation, cited on the [SH/Qwiic](jst-sh-qwiic-stemma.md) and [PH](jst-ph.md) pages.
- **0.1 in = 2.54 mm** — definitional; the basis of the Dupont/header ecosystem discussion.

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
- Servo connector/lead current examples
- Dupont / 0.1 in header current assumptions
- Barrel jack size and rating examples (5.5 × 2.1/2.5 mm named as *common sizes*, not a standard)
- Screw/spring terminal ratings and gauge ranges
- LED connector current assumptions and power-injection sizing
- Every marketplace kit claim (series, pitch, "waterproof," "high current")

## Needs source before hobby v1.0

Source targets, honestly unfilled — none of these citations exist in the repo yet:

| Item | Source target |
|---|---|
| JST EH/ZH (mentioned only as published-pitch examples) | Official JST datasheets per series, if those mentions are kept |
| XT ratings from AMASS-direct hosting | Closed for values (audit-2026-07) via distributor-hosted AMASS PDFs; an AMASS-domain-hosted equivalent would still be an upgrade |
| Crimping tiny open-barrel terminals | Manufacturer application notes / crimp specifications |
| LED power injection guidance (if expanded) | Reputable LED wiring/power-injection references |
| USB connector guidance (if formalized) | USB-IF specifications (the 10k-cycle figure is already cited in §12) |
| Barrel jacks, terminal blocks, Wago-style lever connectors, screw terminals | Relevant manufacturer documentation |

## Recommended next deep pages

The editorial roadmap for this track — what exists, what's next, and in what order. Nothing here is claimed complete or fully sourced; "initial page added" means exactly that.

1. **JST-XH** — initial page added (v0.9); source hardening still needed
2. **JST-PH** — initial page added (v0.9); source hardening still needed
3. **JST-SH / Qwiic / STEMMA QT** — initial page added (v0.9); Qwiic/STEMMA QT conventions cited, Grove still qualitative
4. **Dupont / 0.1 inch headers** — initial page added (v0.9); no governing spec exists, by nature
5. **XT30 / XT60 / XT90** — initial page added (v0.9); AMASS attribution and ratings sourced (audit-2026-07, distributor-hosted manufacturer PDFs); clone parts remain uncovered
6. **Servo connectors** — capsule only; deep page not started
7. **Screw/spring terminals and ferrules** — capsule only; deep page not started
8. **USB-C power for hobby projects** — capsule only; deep page not started
9. **Barrel jacks and polarity traps** — capsule only; deep page not started
10. **Grove ecosystem** — deep page not started; connector and pinout-varies-by-port-type facts sourced to Seeed docs (audit-2026-07)

:::note

No exact current, voltage, temperature, or cycle rating in the hobby track should ever be read as universal. When a number matters, the exact part's datasheet decides — same rule as everywhere else on this site.

:::
