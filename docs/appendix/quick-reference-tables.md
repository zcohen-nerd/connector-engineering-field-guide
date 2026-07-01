---
title: "Appendix: Quick-Reference Tables"
slug: /appendix/quick-reference-tables
sidebar_label: Quick Reference Tables
sidebar_position: 1
---

# Appendix: Quick-Reference Tables

These are deliberately kept as compact lookup tables — IP ratings (A1), 38999 contact sizes (A2), and a family-selection quick guide (A3). Use the contents panel to jump between them. Every value is an orientation aid to verify against the source, not a selection rule. For scenario-by-scenario reasoning, see the [Decision Paths](../decision-paths/index.md).

## A1. IP rating reference

IP codes are commonly referenced from IEC 60529.[^iec60529] The high-pressure washdown rating IP69K comes from ISO 20653 (a DIN-style lineage, formerly DIN 40050-9), not IEC 60529[^iso20653] — IEC 60529 added a close equivalent, IPx9, in its 2013 edition. Verify the exact standard cited by the manufacturer, the specific depth/duration for any IP68 claim, and remember that an IP rating applies to the tested assembly/configuration, not automatically to the entire system.

| IP | Solid ingress | Liquid ingress | Typical application |
|---|---|---|---|
| IP54 | Dust-protected; limited ingress permitted | Splash from any direction | Sheltered outdoor equipment |
| IP65 | Dust-tight | Low-pressure jets, any direction | Outdoor enclosures, wash-down areas |
| IP67 | Dust-tight | ~1 m immersion, ~30 min (per standard test) | Many industrial field connectors |
| IP68 | Dust-tight | Manufacturer-stated depth/duration | Subsea, submerged sensors |
| IP69K / IPx9 | Dust-tight | High-pressure, high-temp jets. "K" is per ISO 20653, not IEC 60529 | Washdown, food processing, vehicles, agriculture |

## A2. 38999 contact sizes — example test values (verify per contact P/N)

| Size | Matching wire (AWG) | Spec test current (example) | Notes |
|---|---|---|---|
| 22D | 22 | 3 A | High-density signal |
| 20 | 20 | 5 A | General-purpose signal / light power |
| 16 | 16 | 10 A | Moderate power |
| 12 | 12 | 17 A | Higher-current power |
| 8 / larger | per catalog | power contacts | High current; coax/twinax in size 8 |

*Test currents from a manufacturer contact-performance spec; not a universal continuous rating. Size against the actual contact datasheet and derating curve.*[^glenaircontacts]

## A3. Family selection quick guide

| Need | Consider | Prefer an alternative / avoid |
|---|---|---|
| Mil-spec flight/defense harness | MIL-DTL-38999 Series III | Commercial circular, M12 |
| Industrial sensor connection | M12 A-coded | D-sub, hobby connectors |
| Industrial Ethernet (GbE) | M12 X-coded | M12 D-coded, exposed RJ45 |
| Machine umbilical (power+signal+data) | Industrial rectangular / Han-Modular | Many individual small connectors |
| Serial/debug, benign environment | Micro-D, MIL-grade D-sub, keyed header | Bare headers, exposed USB |
| High-current robot power (>20 A) | Anderson SB, Han-style power insert, 38999 size 8/larger or dedicated power contacts (HCP/RADSOK[^radsok]); size 12 only where derating supports it | M12 A-coded, XT60/90, 38999 size 16 for the full load |
| Internal protected PCB harness | Molex Micro-Fit, TE, Harwin | Bare wire, 0.1" headers, screw terminals on PCB |
| Fast quick-disconnect, moderate vibration | MIL-DTL-26482 bayonet (verify qualification for the vibration profile) | 38999 threaded (slower to mate) |
| RF/antenna/GPS line | SMA/TNC/N-Type (impedance-matched) | Random circular signal contacts |
| Hybrid power+RF+control to one payload | 38999 hybrid insert (coax + power + signal contacts) | Separate connectors if panel space is scarce |

---

## Final Note

Every connector decision ripples outward — into the cable drawing, the ICD, the tooling budget, the assembly procedure, the maintenance manual, and the failure log. Engineers who treat connectors as commodities buy them on pin count and regret it. Engineers who treat them as system interfaces design reliable, serviceable, manufacturable hardware.

When this guide conflicts with a manufacturer datasheet, applicable standard, customer requirement, or qualified program requirement, the datasheet / standard / customer requirement wins. This document is a framework for thinking, not a source of record.

## Sources

[^glenaircontacts]: Glenair, *MIL-DTL-38999 Contact Performance Specifications* — Class H/N/Y contact-resistance **test currents**: size 12 → 17 A, 16 → 10 A, 20 → 5 A, 22D → 3 A (per MIL-C-39029 / AS39029). Test currents, not guaranteed continuous ratings. <https://www.glenair.com/mil-dtl-38999/pdf/contact-performance-spec.pdf>

[^radsok]: Amphenol Aerospace, *High-Power 38999 / RADSOK* — RADSOK high-current contacts are rated roughly 70–250 A per contact (≈240–1000 A per connector) and are used to add dedicated power paths on the MIL-DTL-38999 platform. Contact size alone does not set safe current; use the manufacturer derating data, and do not parallel contacts unless the manufacturer/application supports it and the design is reviewed. <https://www.amphenol-aerospace.com/products/high-power-38999>

[^iec60529]: IEC 60529, *Degrees of protection provided by enclosures (IP Code)* — the international IP-rating standard: second numeral 7 = temporary immersion (tested at 1 m for 30 min), 8 = continuous immersion to a manufacturer-stated depth/duration. An IPx9 close-range high-pressure/high-temperature water-jet test was added in the 2013 edition. <https://webstore.iec.ch/publication/2452>

[^iso20653]: ISO 20653:2013, *Road vehicles — Degrees of protection (IP code)* (formerly DIN 40050-9) — origin of the IP69K high-pressure/high-temperature washdown rating; the "K" designation comes from this standard, not IEC 60529. <https://www.iso.org/standard/58048.html>