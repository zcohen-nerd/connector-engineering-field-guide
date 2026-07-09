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

![A white 4-pin shrouded wire-to-board header of the kind marketplaces sell as simply a JST connector](/img/photos/jst-style-header.jpg)

*Exhibit A: a "JST connector" as sold — white, shrouded, latchy-looking. The listing names no series; the drawing does. Photo: [oomlout](https://commons.wikimedia.org/wiki/File:JSTS-02-X-04PI-01.jpg), CC BY-SA 2.0, via Wikimedia Commons.*

## The series you'll actually meet

Every pitch below is sourced from the official JST series datasheet footnoted on its row; the footnotes also carry each datasheet's headline rating. Two standing caveats: those figures describe **genuine JST parts assembled per the datasheet** — clone and "compatible" parts are not covered — and a headline current is still contact-, gauge-, and application-dependent ([power vs signal](power-vs-signal.md)).

| Common name | Typical pitch | Common use | Connector type | Common confusion |
|---|---|---|---|---|
| JST-XH | 2.5 mm[^jst-xh] | 3D printers, balance leads, low-cost wire-to-board | wire-to-board | confused with PH/VH/KF-style terminal blocks |
| JST-PH | 2.0 mm[^jst-ph] | small batteries, sensors, small boards | wire-to-board | confused with XH or generic battery connectors |
| JST-SH | 1.0 mm[^jst-sh] | Qwiic/STEMMA QT-style tiny I2C boards | wire-to-board | confused with GH or other 1 mm-ish connectors |
| JST-GH | 1.25 mm[^jst-gh] | compact locking harnesses, drones, embedded systems | wire-to-board | confused with SH due to size |
| JST-SM | 2.5 mm[^jst-sm] | LED strings/strips, low-voltage wire-to-wire harnesses | wire-to-wire | often sold as generic LED connectors or "JST-SM-style" — see [JST-SM and LED string connectors](jst-sm-led-connectors.md) |
| JST-RCY / BEC style | 2.5 mm[^jst-rcy] | small battery leads, RC-ish power | wire-to-wire | often called a "JST battery connector," which names nothing |

Three practical consequences:

- **2.5 mm (XH) and 2.0 mm (PH) look nearly identical in photos.** A PH battery pigtail will not mate an XH header, and forcing it damages both. [Measure the pitch](pitch.md).
- **The housing and the contact are separate parts, per series.** An XH housing needs XH contacts — not PH contacts, not "Dupont" contacts, not whatever came in the kit drawer. See [Crimping](crimping.md).
- **A "JST battery lead" from a marketplace could be PH, XH, RCY, SM, or a clone of any of them.** Identify before you order the mate — see [Buying the Right Mating Parts](buying-mating-parts.md).

![A mating pair of red JST RCY connectors on red and black wires](/img/photos/jst-rcy-pair.jpg)

*The red pair behind most "JST battery connector" listings is the RCY series (2.5 mm, wire-to-wire) — not SM, not PH, not XH. Photo: [Mike mahoney aus4810](https://commons.wikimedia.org/wiki/File:JST_RCY.JPG), CC BY-SA 4.0, via Wikimedia Commons.*

The vocabulary doing the work here — *pitch*, *contact vs. terminal*, *housing*, the *male/female* ambiguity, *genuine vs. clone* — is pinned down in the shared [Glossary](../glossary.md).

## Sources

All figures are for genuine JST parts assembled per the datasheet; clones and "compatible" parts are not covered by them. See also the engineering track's [consumer/hobby connectors §12](../12-consumer-hobby-prototype-connectors.md).

[^jst-xh]: JST XH series datasheet, official JST PDF — 2.5 mm pitch, wire-to-board; 3 A current class (contact/gauge-dependent), 250 V. <https://www.jst-mfg.com/product/pdf/eng/eXH.pdf>

[^jst-ph]: JST PH series datasheet, official JST PDF — 2.0 mm pitch, wire-to-board; 2 A AC/DC (AWG #24), 100 V, 2–16 circuits, wire range AWG #32–24. <https://www.jst-mfg.com/product/pdf/eng/ePH.pdf>

[^jst-sh]: JST SH series datasheet, official JST PDF — 1.0 mm pitch, crimp wire-to-board; 1.0 A AC/DC (AWG #28), 50 V, wire range AWG #32–28. <https://www.jst-mfg.com/product/pdf/eng/eSH.pdf>

[^jst-gh]: JST GH series datasheet, official JST PDF — 1.25 mm pitch, wire-to-board with a positive outer latch; 1.0 A AC/DC (AWG #26), 50 V, wire range AWG #30–26. <https://www.jst-mfg.com/product/pdf/eng/eGH.pdf>

[^jst-sm]: JST SM series datasheet, official JST PDF — 2.5 mm pitch, disconnectable crimp **wire-to-wire**; 3 A AC/DC max (2 A for the 18-circuit version), 250 V, wire range AWG #28–22; arm-lock housings, panel-mountable. <https://www.jst-mfg.com/product/pdf/eng/eSM.pdf>

[^jst-rcy]: JST RCY series datasheet, official JST PDF — 2.5 mm pitch, 2-circuit **wire-to-wire**; current is wire-gauge-dependent per the datasheet's table (3 A at AWG #22 down to 0.5 A at AWG #28), 250 V. <https://www.jst-mfg.com/product/pdf/eng/eRCY.pdf>
