---
id: jst-xh
title: "JST-XH"
description: "The 2.5 mm JST XH series: 3D printers, LiPo balance leads, and budget harnesses — datasheet-level detail, the balance-lead convention decoded, the PH/VH/'JST 2.54' confusion, and the battery caveats."
slug: /hobby/jst-xh
sidebar_label: JST-XH
---

# JST-XH

## What people call it

XH, "JST 2.5," balance connector, balance lead, "JST 2.54" (wrongly), printer connector.

## What it actually is

The genuine JST **XH series**: 2.5 mm-pitch **wire-to-board** family — board header plus wire housing with XH-specific crimp contacts — rated in the 3 A class per the official JST datasheet.[^jst-xh] Marketplace "XH" may be genuine JST, a decent clone, or a loose lookalike; the figures here describe genuine parts.

## Where it shows up

3D printers (endstops, thermistors, fans, steppers on many budget boards), LiPo **balance leads**, and low-cost wire-to-board harnesses across budget electronics.

![Close-up of 4S, 5S, and 6S XH balance ports on a battery charger, showing the white shrouded headers and pins](/img/photos/jst-xh-balance-ports.jpg)

*The XH you probably know: balance ports on a LiPo charger. Photo: [Laurenz Wagner](https://commons.wikimedia.org/wiki/File:Balancer_Buchse_XH.JPG), CC BY 3.0, via Wikimedia Commons.*

## XH in detail — the datasheet numbers

Because this is probably the JST series you actually own, the official-datasheet detail is worth having at hand:[^jst-xh]

| Spec | Value | What it means in practice |
|---|---|---|
| **Pitch** | 2.5 mm | Not 2.54 — the whole trap in one row |
| **Positions** | up to 20, single row | From 2-pin fans to long balance/harness runs |
| **Rating** | 3 A AC/DC max, 250 V | The 3 A is the *top* of the range — gauge- and contact-dependent |
| **Contacts** | SXH-001T-P0.6 (#28–22 AWG) · SXH-002T-P0.6 (#30–26 AWG) | Two crimp contacts for two wire ranges — the 3 A headline belongs to the heavy-gauge end |
| **Headers** | top-entry and side-entry, shrouded | The boxy open-top shroud is the ID mark; both orientations are ordinary catalog parts |
| **Retention** | friction shroud, no latch arm | Repeatable, serviceable — and vibration protection is on you |

The row that changes real decisions is **contacts**: "an XH is 3 A" is only true with the right contact on the right wire. A #30 AWG lead in an XH housing is a signal lead wearing a power family's name — the [contact-matches-the-wire principle](anderson-powerpole.md) at 2.5 mm scale.

## The balance-lead convention, decoded

XH's most famous job is the LiPo **balance lead**, and the convention is worth writing down precisely because no battery standard governs it — charger and battery vendors document it as the de-facto "JST-XH balance" arrangement their balance boards assume:[^xhbal]

- **Pin count = cell count + 1.** A 3S pack has a 4-position plug, a 4S pack a 5-position plug, and chargers ship 2S–6S XH balance boards on exactly that pattern.
- **One end is pack negative; the rest are ascending cell taps** — B−, cell 1, cell 2, … up to pack positive at the far end, so the charger can read every cell across adjacent pins.
- **It's a convention, not a spec.** Before a pack's first charge — and before trusting any adapter or extension — verify the tap order with a meter against the charger's documentation. A miswired balance lead puts full-cell voltages across the wrong charger inputs, and lithium chemistry grades that mistake harshly.

Balance taps carry *balancing* currents; the pack's main current stays on a [real power connector](xt-connectors.md). And the fact that the plug is "just an XH" is exactly why [buying genuine parts](buying-mating-parts.md) matters here — the one connector in the hobby that routinely touches every cell of a lithium pack is a bad place for a mystery-metal clone.

## How to identify it

2.5 mm pitch ([measure across the row](pitch.md) — this is the classic 2.5-vs-2.54 trap), friction-lock shroud on the header (no positive latch arm like [GH](jst-gh.md)), white nylon housing. Distinguish from **PH** (2.0 mm, smaller), **VH** (3.96 mm, much larger power family), **EH** (also 2.5 mm but a different, slimmer family — check the drawing), and generic "JST 2.54" kit parts (a contradiction — [see the kit decoder](connector-kits.md)).

![Line diagram of a JST XH shrouded header with pitch arrows and polarization-rib callouts](/img/diagrams/hobby-jst-xh-id.svg)

*ID marks: 2.5 mm pitch, boxy open-top shroud, friction fit — no latch arm.*

## What to buy

Housing + XH contacts (separate line items) + the board header, or pre-crimped XH leads from a reputable supplier. Genuine JST from an authorized distributor costs pennies more than mystery parts — see [Buying the Right Mating Parts](buying-mating-parts.md). Contacts are **XH-specific**: not PH, not EH, not kit-drawer "Dupont."

## Common traps

- **Balance-lead assumptions.** The balance-connector convention makes XH *common* on packs — it does not make every XH harness appropriate for every battery use. Balance leads carry small balancing currents; main pack current belongs on a [real power connector](xt-connectors.md).
- **Polarity/pinout is per the board, not the connector.** Printer boards and battery pigtails differ vendor-to-vendor — verify against the silkscreen/documentation before powering.
- **2.5 ≠ 2.54.** An XH housing forced onto a 0.1 in header binds and mis-seats; it will "work" until it doesn't.
- **It is not sealed or rugged.** Indoor, protected, low-vibration use — no wire seals, no positive latch.

## Source status

Pitch, position span, header orientations, the two crimp-contact wire ranges, and the 3 A / 250 V ratings are sourced to the official JST XH datasheet;[^jst-xh] the balance-lead arrangement is cited to charger-ecosystem vendor documentation and labeled as the convention it is — no battery standard governs it, so the meter check stands.[^xhbal] Genuine-part figures don't transfer to clones, and application current still depends on contact, wire gauge, and temperature — verify the exact datasheet. See [Hobby Source Notes](hobby-source-notes.md).

## When to move to the engineering track

Vibration, field exposure, real battery current, or someone else building the harness — see [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md) and, for sealed field wiring one step up, [rugged on a budget](../decision-paths/rugged-on-a-budget.md) (family detail in the [DEUTSCH deep dive](../deutsch.md)).

## Sources

[^jst-xh]: JST XH series datasheet, official JST PDF — 2.5 mm pitch, wire-to-board, single-row housings to 20 positions; 3 A AC/DC maximum (contact/gauge-dependent), 250 V; crimp contacts SXH-001T-P0.6 (AWG #28–22) and SXH-002T-P0.6 (AWG #30–26); shrouded top-entry and side-entry headers. Genuine-part figures only. <https://www.jst-mfg.com/product/pdf/eng/eXH.pdf>

[^xhbal]: LiPo balance-lead convention (vendor documentation of a de-facto arrangement — no governing battery standard exists): charger-ecosystem balance boards and leads are sold on the cells-plus-one XH pattern spanning 2S–6S — e.g. GetFPV, *JST-XH 2–6S Balance Board* <https://www.getfpv.com/jst-xh-balance-board.html>; HobbyKing, *5-pin (4S) JST-XH balance connectors* <https://hobbyking.com/en_us/5-pin-4s-jst-xh-balance-connectors-male-female-5-pairs.html>. Convention documentation only — verify the tap order of *your* pack and charger with a meter.
