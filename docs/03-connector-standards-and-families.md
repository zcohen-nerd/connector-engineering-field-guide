---
id: 03-connector-standards-and-families
title: "3. Connector Standards and Families"
description: "At-a-glance comparison of connector families — 38999, 26482, M12, D-sub, Micro-D, Han, sealed automotive — with cost, strengths, and when to prefer another."
slug: /03-connector-standards-and-families
sidebar_label: Standards and Families
---

# 3. Connector Standards and Families

:::note

Always verify against the *current* version of the applicable standard and the manufacturer's datasheet. Standards get revised; part-number schemas vary between manufacturers. What follows is a framework for thinking, not a substitute for the source document — when this guide and a manufacturer datasheet or standard disagree, the datasheet/standard wins. MIL-DTL-38999 covers miniature high-density environmental circular connectors with removable crimp or hermetic solder contacts; M12 connectors are covered by the IEC 61076-2-x family (e.g. 61076-2-101 for A/B/D codings, 61076-2-109 for X-coded, 61076-2-111 for power codings — sourced on the [M12 deep dive](08-m12.md)); the MIL-DTL-38999 scope and part-number structure are sourced on the [MIL-DTL-38999 deep dive](07-mil-dtl-38999.md).

:::

## 3.1 At-a-glance family comparison

**Part A — application, strengths, weaknesses**

| Family | Used for | Strengths | Weaknesses |
|---|---|---|---|
| MIL-DTL-38999 | Aero/defense rugged external I/O | Sealing, density, keying, EMI backshell ecosystem, crimp contacts | Expensive, part-number traps, tooling-heavy |
| [MIL-DTL-26482](mil-dtl-26482.md) | Rugged circular mil/industrial I/O | Smaller/cheaper than 38999, fast bayonet, common; Series I/II variants vary by P/N | Less dense, fewer modern high-speed options than 38999 |
| M12 | Industrial sensors, Ethernet, IO-Link, CAN | Standard ecosystem, molded cables, IP-rated options, easy sourcing | Coding/pinout confusion, limited pins/current |
| M8 | Compact sensors, small actuators | Small, common sensor connector | Less current, fewer pins, smaller cable support |
| D-sub / MIL-DTL-24308 | Rack/panel, test, legacy serial/control | Cheap, common, many accessories, good density | Standard versions non-environmental; screws can loosen |
| Micro-D / MIL-DTL-83513 | Space/aero, compact high-reliability | High density, light, rugged, fine pitch | Expensive, delicate, assembly complexity, lower current |
| Terminal blocks | Control panels, DIN-rail, service wiring | Easy troubleshooting, modular, field-friendly | Fixed types are not quick-disconnects; need enclosure |
| Industrial rectangular / Han-style | Machinery, removable modules, mixed power/signal/data | Modular inserts, high current, robust housings | Large, many options; qualification varies |
| RF / coax | Antennas, RF, GPS, radar, timing | Controlled impedance, shielding, frequency-rated | Must match cable/impedance/torque/frequency |

**Part B — cost, when to consider, when to prefer an alternative**

| Family | Cost | Consider when | Prefer an alternative when |
|---|---|---|---|
| MIL-DTL-38999 | High | Harsh environment, vibration, defense/aero, configuration control | Low-cost commercial gear, casual prototypes |
| MIL-DTL-26482 | Med-High | Rugged but not extreme; legacy compatibility; moderate pins | Threaded/self-locking coupling, higher density, or the modern defense ecosystem is required |
| M12 | Low-Med | Factory automation, sensors, field I/O | Mil-spec qualification, very high pin count, high power (unless correctly coded) |
| M8 | Low-Med | Small sensors, limited current, tight space | Heavy cable, rugged power, severe vibration without verified support |
| D-sub / MIL-DTL-24308 | Low-Med | Internal panels, lab gear, legacy interfaces | Wet/dirty external use without a ruggedized variant and strategy |
| Micro-D / MIL-DTL-83513 | High | Space/weight-constrained high-reliability systems | Field-serviceable dirty environments, high current |
| Terminal blocks | Low-Med | Industrial panels, power distribution | External rugged harness disconnects |
| Industrial rectangular / Han-style | Med-High | Machine sections, removable boxes, mixed interfaces | Small payloads, aero weight-sensitive systems |
| RF / coax | Low-High | Any real RF path | Discrete wiring / uncontrolled impedance |

Two specific clarifications worth internalizing:

- **MIL-DTL-24308 D-subs in their standard form are non-environmental, polarized rack-and-panel connectors.**[^dsub] "Mil-spec" does not by itself mean "rugged outdoor / environmentally sealed" — read what the spec actually covers. Ruggedized/environmental D-sub variants exist and must be selected and verified intentionally. D-subs are perfectly appropriate for protected panels, racks, test gear, legacy interfaces, and internal equipment.
- **Micro-D (MIL-DTL-83513)** is a fine-pitch (contacts on .050 in / 1.27 mm centers), high-density, lightweight, high-reliability family used where size and weight matter.[^microd] It carries lower current than larger connectors (≈ 3 A per contact) and has more assembly/tooling complexity. Exact contact arrangements vary by product — verify against the catalog. Treat it as an internal / protected high-reliability connector, not a high-current or dirty field-service connector.

## 3.2 Sealed automotive connector families

Between hobby connectors (JST, Dupont) and mil-spec circulars (38999) sits a cost-effective, sealed, crimp-based ecosystem built for vehicles — often the right answer for makers and robotics teams going rugged on a budget. These are wire-to-wire / panel crimp systems; verify the exact series datasheet.

| Family | Typical sealing | Typical current / contact | Notes |
|---|---|---|---|
| Deutsch DTM / DT / DTP | IP68[^deutsch] | ~7.5 A (DTM, size 20) / ~13 A (DT, size 16) / ~25 A (DTP, size 12)[^deutsch] | Genderless wedgelock housings; ubiquitous in off-road/automotive; hand-crimpable |
| TE AMP Superseal 1.5 / AMPSEAL | IP67[^superseal] | ~14 A (Superseal 1.5)[^superseal] | Compact sealed inline; AMPSEAL for higher pin counts |
| Molex MX150 / MX150L | ≥ IP67[^mx150] | up to ~30–40 A (MX150L, 8–12 AWG)[^mx150] | Sealed signal-to-power; industrial/automotive |
| Aptiv (Delphi) Metri-Pack | Sealed & unsealed variants[^metripack] | 150 / 280 / 480 / 630 series — a few A up to tens of A by series (verify)[^metripack] | Long-standing automotive terminal system |

**Where they win:** IP67/IP68 sealing and vibration life far beyond hobby connectors, at a fraction of the cost, tooling, and lead time of mil-spec circulars — cheap hand crimp tools, no QPL overhead. They are the sweet spot for rugged-on-a-budget field wiring; they are *not* a substitute for MIL-DTL-38999 where qualification, EMI backshells, or extreme environments are required.

## Sources

[^dsub]: MIL-DTL-24308G (DLA detail specification) — standard D-subminiature connectors are nonenvironmental, polarized-shell, rack-and-panel; ruggedized/environmental variants are separately specified. <https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/7139/5831_mil-dtl-24308.pdf>

[^microd]: Glenair, *Micro-D Performance Specifications* (MIL-DTL-83513) — contacts on .050 in (1.27 mm) centers, 3.0 A continuous per contact (−55 to +150 °C), 600 V rms at sea level. <https://www.glenair.com/micro-d/pdf/micro-d-specifications.pdf>

[^deutsch]: TE Connectivity DEUTSCH DT / DTM / DTP series — sealed to IP68; continuous-current ratings ~7.5 A (DTM, size 20), ~13 A (DT, size 16), ~25 A (DTP, size 12). <https://www.te.com/en/products/connectors/automotive-connectors/intersection/deutsch-dtp-connectors.html>

[^superseal]: TE Connectivity AMP SUPERSEAL 1.5 — sealed IP67 automotive/industrial connector; housings rated ~14 A. <https://www.te.com/en/products/connectors/automotive-connectors/intersection/amp-superseal-1-5.html>

[^mx150]: Molex MX150 / MX150L sealed connector system — exceeds IEC IP67; MX150L supports up to ~40 A (8 AWG) and ~30 A (10–12 AWG). <https://www.mouser.com/pdfdocs/molexmx150sealedconnectorsystem.pdf>

[^metripack]: Aptiv (formerly Delphi) *Metri-Pack Connection System* datasheet — the series are designated by nominal terminal blade size (150/280/480/630/800 class) and offered in sealed and unsealed variants, with per-series current envelopes stated in the datasheet. The figures in this row are deliberately kept qualitative — verify the exact series/terminal datasheet before use. <https://www.tti.com/content/dam/tti-commons/supplier/aptiv/doc/aptiv-metri-pack-connection-system-datasheet-specifications.pdf>

---