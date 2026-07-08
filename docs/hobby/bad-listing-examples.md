---
id: bad-listing-examples
title: "Bad Connector Listings, Corrected"
description: "Five real-world-shaped bad marketplace connector descriptions, what each one fails to say, and the corrected engineering description that replaces it."
slug: /hobby/bad-listing-examples
sidebar_label: Bad Listings, Corrected
---

# Bad Connector Listings, Corrected

The fastest way to learn the [identification method](identify-unknown-connector.md) is to watch it repair real listings. Each example below shows a typical marketplace/forum description, why it isn't enough, and what a corrected description looks like. None of these corrections invent ratings — they name what's known and flag what isn't.

## Example 1 — "JST 2 pin connector"

**Why it's not enough:** "JST" is a manufacturer, [not a series](jst-is-not-one-connector.md). Pitch is missing. Wire-to-board vs wire-to-wire is missing. Housing/contact gender is missing. The mating part is missing. Current and wire gauge are unknown.

**Corrected:**

> Candidate: JST-PH-style 2-position wire-to-board housing, 2.0 mm pitch, pre-crimped leads, polarity verified against board silkscreen. Exact manufacturer/source TBD.

## Example 2 — "2.54mm JST kit"

**Why it's suspicious:** 2.54 mm is the [0.1-inch header/Dupont ecosystem](dupont-headers.md); JST's common series run 2.5, 2.0, 1.5, 1.25, and 1.0 mm. A listing mixing the two is telling you it doesn't know what it's selling.

**Corrected:**

> Likely generic 0.1-inch Dupont-style housings/contacts, not an official JST series. Verify housing/contact fit and use only for bench/prototype wiring unless the exact parts are sourced.

## Example 3 — "Waterproof LED connector"

**Why it's not enough:** waterproof under what condition — mated? capped? heat-shrunk? What IP rating, per what test? Wire seals? Strain relief? ["Waterproof" in a title is not a sealing condition](jst-sm-led-connectors.md).

**Corrected:**

> 3-position JST-SM-style LED pigtail, sealing condition unknown, suitable only after current, polarity, strain relief, and exposure are verified.

## Example 4 — "High current XT60 clone"

**Why it's not enough:** [XT60 is a family/common name](xt-connectors.md), not proof of source or rating. Clone quality varies. You still need the actual manufacturer, wire gauge, solder quality, strain relief, fusing — and the standing assumption that it is not load-break.

**Corrected:**

> XT60-class keyed DC power connector, manufacturer unknown, rating source TBD. Use only after calculated current, wire gauge, soldering process, fusing, and service conditions are checked.

## Example 5 — "Servo plug"

**Why it's not enough:** servo leads are three-conductor signal/power/ground harnesses in 0.1-inch-class housings, but pin order, wire colors, and keying conventions vary by vendor — and stall current is what actually sizes the wiring. It's also a friction fit.

**Corrected:**

> 3-position servo-style lead for signal/power/ground; verify pin order at controller and servo, stall current, wire gauge, and retention needs.

## Good connector description template

Copy this and fill it in — the blanks you can't fill are your shopping list:

- Manufacturer / source:
- Series / family:
- Genuine / clone / unknown:
- Positions:
- Pitch:
- Connection type:
- Housing part number:
- Contact/terminal part number:
- Mating part:
- Wire gauge / insulation range:
- Current / voltage source:
- Polarity / pinout:
- Latch / keying:
- Environment:
- Source document / drawing:
- Verification status:

Related: [How to Identify an Unknown Connector](identify-unknown-connector.md) · [Marketplace Kits](connector-kits.md) · [Buying the Right Mating Parts](buying-mating-parts.md) · the shared [Glossary](../glossary.md) for every term above.
