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

- **JST series pitches** — XH 2.5 mm, PH 2.0 mm, SH 1.0 mm, GH 1.25 mm (also EH/ZH/VH) — per JST's published datasheets, cited on [JST Is Not One Connector](jst-is-not-one-connector.md) and in the engineering track's [§12](../12-consumer-hobby-prototype-connectors.md).
- **JST XH ≈ 3 A class / VH up to ~10 A (AWG 16)** — per the JST datasheets cited in [§12](../12-consumer-hobby-prototype-connectors.md); series/contact/gauge caveats apply.
- **USB-C 10,000-cycle durability** — per the USB-IF Type-C specification, cited in [§12](../12-consumer-hobby-prototype-connectors.md).
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

- JST-XH, JST-PH, JST-SH, JST-GH pitch/rating usage beyond the sourced pitches above
- JST-SM pitch/rating examples (series values not yet sourced in this repo)
- JST-RCY / BEC-style series identification and examples
- XT30/XT60/XT90 current examples — the digits are not a rating
- Servo connector/lead current examples
- Dupont / 0.1 in header current assumptions
- Barrel jack size and rating examples (5.5 × 2.1/2.5 mm named as *common sizes*, not a standard)
- Screw/spring terminal ratings and gauge ranges
- LED connector current assumptions and power-injection sizing
- Every marketplace kit claim (series, pitch, "waterproof," "high current")
- The Qwiic / STEMMA QT ↔ JST SH ecosystem association (stated per vendor documentation, pending citation)

## Needs source before hobby v1.0

Source targets, honestly unfilled — none of these citations exist in the repo yet:

| Item | Source target |
|---|---|
| JST XH/PH/SH/GH/SM/RCY series details beyond pitch | Official JST product pages/datasheets per series (SM and RCY entirely unsourced today) |
| Qwiic connector conventions | SparkFun Qwiic documentation |
| STEMMA QT connector conventions | Adafruit STEMMA QT documentation |
| XT30/XT60/XT90 ratings | AMASS (or actual manufacturer) documentation |
| Crimping tiny open-barrel terminals | Manufacturer application notes / crimp specifications |
| LED power injection guidance (if expanded) | Reputable LED wiring/power-injection references |
| USB connector guidance (if formalized) | USB-IF specifications (the 10k-cycle figure is already cited in §12) |
| Barrel jacks, terminal blocks, Wago-style lever connectors, screw terminals | Relevant manufacturer documentation |

:::note

No exact current, voltage, temperature, or cycle rating in the hobby track should ever be read as universal. When a number matters, the exact part's datasheet decides — same rule as everywhere else on this site.

:::
