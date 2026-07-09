---
id: jst-xh
title: "JST-XH"
description: "The 2.5 mm JST XH series: 3D printers, LiPo balance leads, and budget harnesses — identification, the PH/VH/'JST 2.54' confusion, and the battery caveats."
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

## How to identify it

2.5 mm pitch ([measure across the row](pitch.md) — this is the classic 2.5-vs-2.54 trap), friction-lock shroud on the header (no positive latch arm like GH), white nylon housing. Distinguish from **PH** (2.0 mm, smaller), **VH** (3.96 mm, much larger power family), **EH** (also 2.5 mm but a different, slimmer family — check the drawing), and generic "JST 2.54" kit parts (a contradiction — [see the kit decoder](connector-kits.md)).

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

Pitch, family type, and the 3 A-class headline rating are sourced to the official JST XH datasheet;[^jst-xh] genuine-part figures don't transfer to clones, and application current still depends on contact, wire gauge, and temperature — verify the exact datasheet. See [Hobby Source Notes](hobby-source-notes.md).

## When to move to the engineering track

Vibration, field exposure, real battery current, or someone else building the harness — see [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md) and, for sealed field wiring one step up, [rugged on a budget](../decision-paths/rugged-on-a-budget.md).

## Sources

[^jst-xh]: JST XH series datasheet, official JST PDF — 2.5 mm pitch, wire-to-board; 3 A current class (contact/gauge-dependent), 250 V. Genuine-part figures only. <https://www.jst-mfg.com/product/pdf/eng/eXH.pdf>
