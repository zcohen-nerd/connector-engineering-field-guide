---
id: jst-is-not-one-connector
title: "JST Is Not One Connector"
description: "JST is a manufacturer with dozens of connector series, not one connector. How XH, PH, SH, GH, SM, and RCY differ, and why listings that say JST mean little."
slug: /hobby/jst-is-not-one-connector
sidebar_label: JST Is Not One Connector
---

# JST Is Not One Connector

**JST is a manufacturer** — Japan Solderless Terminal — **not a single connector.** JST makes dozens of connector series with different pitches, latches, contacts, housings, current ratings, and mating parts. When a listing, forum post, or wiring diagram says just "JST," it has told you almost nothing.

Online sellers use "JST" loosely: for genuine JST series, for clones of JST series, and for anything small, white, and vaguely latchy. Similar-looking families differ in pitch, latch geometry, contact design, housing dimensions, and mating parts — and **"JST-compatible" or "JST-style" does not guarantee genuine JST or full compatibility.** Always identify the exact series and compare manufacturer drawings.

:::caution["JST" is not a complete part description]

A listing that says "JST connector" has not told you the connector series, pitch, housing, contact, latch, wire gauge range, or mating part. Treat it as a clue, not an answer.

:::

## The series you'll actually meet

Pitches marked with a citation are sourced from JST's published datasheets;[^jstpitch] cells marked *source needed* must be verified against the exact series drawing before you rely on them. Current ratings are deliberately omitted here — they are series-, contact-, and wire-gauge-specific ([power vs signal](power-vs-signal.md)).

| Common name | Typical pitch | Common use | Connector type | Common confusion |
|---|---|---|---|---|
| JST-XH | 2.5 mm[^jstpitch] | 3D printers, balance leads, low-cost wire-to-board | wire-to-board | confused with PH/VH/KF-style terminal blocks |
| JST-PH | 2.0 mm[^jstpitch] | small batteries, sensors, small boards | wire-to-board | confused with XH or generic battery connectors |
| JST-SH | 1.0 mm[^jstpitch] | Qwiic/STEMMA QT-style tiny I2C boards | wire-to-board | confused with GH or other 1 mm-ish connectors |
| JST-GH | 1.25 mm[^jstpitch] | compact locking harnesses, drones, embedded systems | wire-to-board | confused with SH due to size |
| JST-SM | *source needed — verify the exact series drawing* | LED strings/strips, low-voltage wire-to-wire harnesses | wire-to-wire | often sold as generic LED connectors or "JST-SM-style" — see [JST-SM and LED string connectors](jst-sm-led-connectors.md) |
| JST-RCY / BEC style | *source needed — verify the exact series drawing* | small battery leads, RC-ish power | wire-to-wire | often called a "JST battery connector," which names nothing |

Three practical consequences:

- **2.5 mm (XH) and 2.0 mm (PH) look nearly identical in photos.** A PH battery pigtail will not mate an XH header, and forcing it damages both. [Measure the pitch](pitch.md).
- **The housing and the contact are separate parts, per series.** An XH housing needs XH contacts — not PH contacts, not "Dupont" contacts, not whatever came in the kit drawer. See [Crimping](crimping.md).
- **A "JST battery lead" from a marketplace could be PH, XH, RCY, SM, or a clone of any of them.** Identify before you order the mate — see [Buying the Right Mating Parts](buying-mating-parts.md).

The vocabulary doing the work here — *pitch*, *contact vs. terminal*, *housing*, the *male/female* ambiguity, *genuine vs. clone* — is pinned down in the shared [Glossary](../glossary.md).

## Sources

[^jstpitch]: JST product datasheets (jst-mfg.com) — published series pitches: XH = 2.5 mm, PH = 2.0 mm, SH = 1.0 mm, GH = 1.25 mm (also EH = 2.5 mm, ZH = 1.5 mm, VH = 3.96 mm). Exact ratings depend on the contact, wire gauge, and configuration. XH: <https://www.jst-mfg.com/product/pdf/eng/eXH.pdf> — VH: <https://www.jst-mfg.com/product/pdf/eng/eVH.pdf>. See also the engineering track's [consumer/hobby connectors §12](../12-consumer-hobby-prototype-connectors.md).
