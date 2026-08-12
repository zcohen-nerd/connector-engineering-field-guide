---
id: m12-coding-cheat-sheet
title: M12 Coding Cheat Sheet
description: "One-page M12 coding reference: A/B/D/X and the power codings, what each is for, the keyway faces, and what to record before committing to a part."
slug: /tools/m12-coding-cheat-sheet
sidebar_label: M12 Coding Cheat Sheet
---

# M12 Coding Cheat Sheet

Based on [§8.1 of the M12 deep dive](../08-m12.md) — this page is the print-friendly extract; the deep dive is the authority, and the exact part's datasheet outranks both.

Coding keyways and insert geometry prevent mismatched codings from mating — exact geometry per IEC 61076-2-101/-109/-111 and the manufacturer drawing. Standardization improves cross-vendor interoperability, but it does not make it automatic: exact code, pin count, gender, shielding, sealing, torque, and cable-assembly details still need verification against the specific part.

## The codings

| Code | Pins | Primary use | Practical note |
|---|---|---|---|
| A | 3/4/5/8 | DC sensors, actuators, I/O, IO-Link, some CAN | 4-pin A-coded is extremely common for basic industrial sensors. IO-Link = a point-to-point digital sensor/actuator protocol carried over the same unshielded 3–4 wires. |
| B | 5 | PROFIBUS and similar fieldbus | Less common in new systems; keyed differently from A |
| D | 4 | 10/100BASE-TX industrial Ethernet | 4-pin; commonly used for 10/100 Mbps; not rated for GbE/10G |
| X | 8 | Gigabit / 10G-class industrial Ethernet | 8-pin, shielded; used for GbE/10G applications |
| L | 4+FE | Higher-current DC power (e.g. PROFINET power) | 4 power contacts + FE (functional earth) per DIN EN 61076-2-111[^m12lt]; vendor example rating 12 A/16 A at 63 V DC — distributed I/O power, higher current than A; verify exact rating by catalog |
| T | 4 | DC power (dedicated) | 4 contacts per DIN EN 61076-2-111[^m12lt]; vendor example rating 12 A at 63 V DC — verify exact rating by catalog |
| S | 4/5 | AC power | Application-specific; verify by catalog |
| K | 4+PE | AC power | 4 power contacts + PE (protective earth); the 630 V AC class is an example configuration per IEC 61076-2-111[^m12k], not a universal M12 rating — verify exact current, voltage, and pinout by standard edition and catalog/application |

![Schematic face views of M12 A, B, D, and X codings](/img/diagrams/m12-coding-faces.svg)

*Schematic face views of the four most common codings.*

## Which standard covers what

- **IEC 61076-2-101** — many common A/B/D signal/data codings.[^iec101]
- **IEC 61076-2-109** — X- (and H-) coded high-speed data.[^iec109]
- **IEC 61076-2-111** — power codings such as S/T/K/L.[^iec111]

## The two mix-ups this sheet exists to prevent

- **A-coded current:** many A-coded M12 connectors are in the ~4 A class within common standard/catalog scopes,[^iec101] but the exact rating depends on the connector, cable assembly, wire gauge, loaded contacts, and temperature. Use L-, T-, or other power codings where the exact datasheet supports the load.
- **D vs. X:** D-coded is **not** obsolete — it is the common 10/100BASE-TX choice.[^iec101] X-coded is for GbE/10G-class Ethernet[^iec109] and is **not** a blanket default for every Ethernet use. Choose by data rate, then verify cable category, shielding, pinout, and assembly rating.

## Record before you commit

- [ ] Coding and pin count, from the drawing (not the listing photo)
- [ ] Standard identifier **and edition/date checked**
- [ ] Manufacturer datasheet revision used for the design
- [ ] Exact current/voltage rating for the loaded configuration
- [ ] Gender, shielding, sealing (mated *and* unmated), and coupling torque per the exact datasheet

:::note

This is a working reference, not a standard. The datasheet, applicable standard, and customer/program requirements always win. Scenario walkthroughs: [Industrial sensor](../decision-paths/industrial-sensor.md) · [Rugged Ethernet](../decision-paths/rugged-ethernet.md).

:::

## Sources

[^iec101]: IEC 61076-2-101, *Connectors for electronic equipment — Product requirements — Part 2-101: Circular connectors — Detail specification for M12 connectors with screw-locking* (A/B/D coding): 2- to 17-way; data transmission up to 100 MHz; signal and power up to 250 V and up to 4 A per contact. <https://webstore.iec.ch/en/publication/77773>

[^iec109]: IEC 61076-2-109, *… Part 2-109: Circular connectors — Detail specification for connectors with M12 × 1 screw-locking, for data transmission frequencies up to 500 MHz* — covers the X- and H-coded variants; X-coding supports Cat 6A / up to 10 Gbit/s at IP65/IP67. <https://webstore.iec.ch/en/publication/4425>

[^iec111]: IEC 61076-2-111:2025, *Connectors for electrical and electronic equipment — Product requirements — Part 2-111: Circular connectors — Detail specification for power connectors with M12 screw-locking* — per the current edition's abstract: 4- to 6-way connectors "with current ratings 8, 12 or 16 A per contact and voltage ratings of 50 V AC / 60 V or 630 V according to their coding." Treat these as edition- and configuration-specific scope figures, not universal M12 power ratings. <https://webstore.iec.ch/en/publication/89862>

[^m12k]: binder, *M12 K-coded* product family — "K-coded connectors with screw locking according to DIN EN 61076-2-111 are designed for AC applications and have 4+PE contacts" (630 V class; vendor current ratings vary, e.g. 12 A — verify the datasheet). <https://www.binder-usa.com/us-en/products/automation-technology-voltage-and-power-supply/m12-k>

[^m12lt]: binder, *M12 L-coded* and *M12 T-coded* product families (screw locking per DIN EN 61076-2-111) — "L-coded versions have 4+FE contacts" with a rated current of 12 A/16 A at 63 V DC; "T-coded versions have 4 contacts with a rated current of 12 A at 63 VDC." Vendor example configurations, not universal M12 ratings — verify the exact datasheet. L-coded: <https://www.binder-usa.com/us-en/products/automation-technology-voltage-and-power-supply/m12-l> — T-coded: <https://www.binder-usa.com/us-en/products/automation-technology-voltage-and-power-supply/m12-t>
