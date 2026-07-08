---
id: jst-ph
title: "JST-PH"
description: "The 2.0 mm JST PH series behind most small LiPo pigtails and dev-board battery ports — the polarity trap, tiny contacts, and why pre-crimped leads win."
slug: /hobby/jst-ph
sidebar_label: JST-PH
---

# JST-PH

## What people call it

PH, "JST battery connector," "LiPo connector," "2-pin JST," battery pigtail.

## What it actually is

The genuine JST **PH series**: 2.0 mm-pitch **wire-to-board** family, rated 2 A AC/DC (AWG #24) / 100 V per the official JST datasheet, 2–16 circuits, wire range AWG #32–24.[^jst-ph] "JST battery connector" is **not a complete description** — PH is just the series most often behind that phrase on single-cell packs.

## Where it shows up

Small 1S LiPo battery pigtails, dev-board battery ports (many Adafruit-style boards), small sensors, and compact internal harnesses.

## How to identify it

2.0 mm pitch ([measure it](pitch.md) — visually near-identical to XH's 2.5 mm in photos), low-profile white housing, friction-fit shroud. Two-position PH is the archetypal small battery pigtail; don't confuse it with the slightly larger XH or with [RCY](families.md#jst-rcy--bec-style-battery-leads), the red 2.5 mm wire-to-wire battery pair.

## What to buy

**Pre-crimped PH leads are the sane default** — the contacts are tiny and hand-crimping them is genuinely hard ([crimping](crimping.md)). Otherwise: housing + PH contacts + board header as separate genuine line items ([buying mating parts](buying-mating-parts.md)).

:::warning[The PH polarity trap]

PH-style battery leads are **not universally wired the same way** across boards and battery vendors. Batteries routinely arrive with the pigtail reversed relative to your board's expectation, and plugging a reversed pack into a dev board is a classic dead-board story. Verify polarity against the **board silkscreen/documentation** — never against wire color — every time, every new battery.

:::

## Common traps

- Treating "JST battery connector" as a spec — [it names nothing](jst-is-not-one-connector.md).
- **Current wishful thinking.** The 2 A headline is a genuine-part, gauge-dependent figure — not a promise for the clone pigtail on a marketplace pack, and not sized for motors or heaters ([power vs signal](power-vs-signal.md)). Verify the exact part/wire/datasheet before drawing real current.
- Forcing PH into XH (or vice versa) — the 0.5 mm pitch difference means damage, not compatibility.
- No latch, no sealing — protected internal use.

## Source status

Pitch, type, and headline ratings are sourced to the official JST PH datasheet;[^jst-ph] clone parts are not covered. Polarity conventions are per-vendor and inherently unsourceable — that's the trap. See [Hobby Source Notes](hobby-source-notes.md).

## When to move to the engineering track

Battery interfaces that matter (capacity, current, or consequences), anything leaving the bench, or harnesses others build — [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md), and for the energized-interface discipline, the [high-current DC path](../decision-paths/high-current-dc-power.md).

## Sources

[^jst-ph]: JST PH series datasheet, official JST PDF — 2.0 mm pitch, wire-to-board; 2 A AC/DC (AWG #24), 100 V, 2–16 circuits, wire range AWG #32–24. Genuine-part figures only. <https://www.jst-mfg.com/product/pdf/eng/ePH.pdf>
