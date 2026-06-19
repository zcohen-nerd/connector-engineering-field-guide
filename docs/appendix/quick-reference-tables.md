---
title: "Appendix: Quick-Reference Tables"
slug: /appendix/quick-reference-tables
sidebar_label: Quick Reference Tables
sidebar_position: 1
---

# Appendix: Quick-Reference Tables

## A1. IP rating reference

IP codes are commonly referenced from IEC 60529. The high-pressure washdown rating IP69K comes from ISO 20653 (a DIN-style lineage, formerly DIN 40050-9), not IEC 60529 — IEC 60529 expresses a close equivalent as IPx9. Verify the exact standard cited by the manufacturer, the specific depth/duration for any IP68 claim, and remember that an IP rating applies to the tested assembly/configuration, not automatically to the entire system. <!-- TODO: source/verify IP rating definitions and IP69K / ISO 20653 distinction -->

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

*Test currents from a manufacturer contact-performance spec; not a universal continuous rating. Size against the actual contact datasheet and derating curve.* <!-- TODO: source/verify 38999 contact-size current example table -->

## A3. Family selection quick guide

| Need | Consider | Prefer an alternative / avoid |
|---|---|---|
| Mil-spec flight/defense harness | MIL-DTL-38999 Series III | Commercial circular, M12 |
| Industrial sensor connection | M12 A-coded | D-sub, hobby connectors |
| Industrial Ethernet (GbE) | M12 X-coded | M12 D-coded, exposed RJ45 |
| Machine umbilical (power+signal+data) | Industrial rectangular / Han-Modular | Many individual small connectors |
| Serial/debug, benign environment | Micro-D, MIL-grade D-sub, keyed header | Bare headers, exposed USB |
| High-current robot power (>20 A) | Anderson SB, Han-style power insert, 38999 size 8/larger or dedicated power contacts (HCP/RADSOK); size 12 only where derating supports it | M12 A-coded, XT60/90, 38999 size 16 for the full load |
| Internal protected PCB harness | Molex Micro-Fit, TE, Harwin | Bare wire, 0.1" headers, screw terminals on PCB |
| Fast quick-disconnect, moderate vibration | MIL-DTL-26482 bayonet (verify qualification for the vibration profile) | 38999 threaded (slower to mate) |
| RF/antenna/GPS line | SMA/TNC/N-Type (impedance-matched) | Random circular signal contacts |
| Hybrid power+RF+control to one payload | 38999 hybrid insert (coax + power + signal contacts) | Separate connectors if panel space is scarce |

---

## Final Note

Every connector decision ripples outward — into the cable drawing, the ICD, the tooling budget, the assembly procedure, the maintenance manual, and the failure log. Engineers who treat connectors as commodities buy them on pin count and regret it. Engineers who treat them as system interfaces design reliable, serviceable, manufacturable hardware.

When this guide conflicts with a manufacturer datasheet, applicable standard, customer requirement, or qualified program requirement, the datasheet / standard / customer requirement wins. This document is a framework for thinking, not a source of record.