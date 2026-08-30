---
id: connector-comparison-matrix
title: Connector Comparison Matrix
description: "A worked connector comparison matrix — 38999, 26482, M12, DEUTSCH, D-sub, Micro-D, Han, Micro-Fit — filled with sourced, representative figures for each family."
slug: /tools/connector-comparison-matrix
sidebar_label: Comparison Matrix
---

# Connector Comparison Matrix

This is the worked version of the matrix from [Exercise 2](../13-hands-on-exercises.md). The numbers come from the manufacturer documents and standards cited in the cells. For your own trade study, copy the table, blank it out, and make every candidate earn its score.

:::warning[Read the numbers as orientation, not specification]

Every figure below is a *typical or example* value for the **family**, not a rating for an exact part. Current especially depends on the contact, wire gauge, loaded-contact count, temperature, and derating curve (see [Selection Workflow §2](../04-connector-selection-workflow.md)). Use the table to screen families. For released hardware, go back to the current datasheet, applicable standard, QPL, application specification, and program/customer requirements. If this table and a datasheet disagree, the datasheet wins. No committee meeting required.

:::

| Family | Environment | Pin count | Current (per contact) | Sealing | Tooling | Cost | Lead time | Serviceability | Common mistakes | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **[MIL-DTL-38999 Series III](../07-mil-dtl-38999.md)** | Harsh aero/defense; wide temp range | Shells 9–25; ~2 to 100+ contacts[^d38999] | Size-dependent; e.g. size 16 ≈ 10 A, size 12 ≈ 17 A (example test currents)[^d38999cur] | IP67 mated[^d38999] | AS39029 crimp; positioner + insert/extract tools | High | Often long | Rear-release removable crimp; ~500 cycles[^d38999] | Wrong crimp tool; omitted backshell; keying/gender errors | Threaded Tri-Start, scoop-proof; hybrid inserts (coax/twinax/power) |
| **[MIL-DTL-26482 (Series 2)](../mil-dtl-26482.md)** | Rugged mil/industrial; bayonet | Multiple shells; contact sizes 20/16/12[^m26482] | Size-dependent (20/16/12) — verify per catalog[^m26482] | Environmental when mated; IP-rated variants | M39029 crimp + insert/extract tools | Med–High | Moderate–long | Removable crimp; ≥ 500 cycles[^m26482] | Assuming bayonet suits every vibration profile; wrong contacts | Fast 3-point bayonet; 600 V (Class I) / 1000 V (Class II)[^m26482] |
| **[M12 A-coded](../08-m12.md)** | Industrial sensors, actuators, I/O | 3/4/5/8-pin (2–17 way)[^m12a] | ≤ 4 A[^m12a] | IP67 mated; IP68/IP69K variants[^m12x] | Molded cordsets or field-wireable | Low–Med | Short (COTS) | Field-wireable variants; screw-lock | Assuming all 4-pin pinouts are alike; IP applies while unmated | IEC 61076-2-101; ≤ 250 V, ≤ 100 MHz[^m12a] |
| **[M12 X-coded](../08-m12.md)** | Industrial Ethernet | 8-pin[^m12x] | Signal/data level — verify per datasheet | IP67 mated[^m12x] | Molded cordsets or field-wireable | Med | Short–Med | Field-wireable variants | Unshielded cable on X-coded; using D-coded for GbE | IEC 61076-2-109; up to 10 Gbit/s, Cat 6A (≤ 500 MHz)[^m12x] |
| **DEUTSCH DT family / HD30 / DRC** | Sealed automotive/off-road field wiring | DT family 1–12 cavities; HD30/HDP20 to 47; DRC to 80[^deutschdt] | Size-dependent: ~7.5 A (size 20) to ~100 A (size 4) — family classes[^deutschdt] | IP68 / IP6K9K (DT family, correctly assembled)[^deutschdt] | Solid or stamped contact lines — **different crimp tools**; hand-tool friendly | Low–Med | Short (COTS) | Rear-release crimp; field-service cycle class (e.g. 100 cycles, DRC)[^deutschdt] | Missing wedgelock/sealing plugs; wrong contact line for the tool | No EMI backshell ecosystem or QPL — not a 38999 substitute. See the [DEUTSCH Deep Dive](../deutsch.md) |
| **D-sub (MIL-DTL-24308)** | Non-environmental; racks, panels, test gear[^dsub] | 9/15/25/37/50; up to 104 (size 22D)[^dsub] | Size 20 & 22D contacts; low-current signal/control — verify[^dsub] | Non-environmental (standard); ruggedized variants exist[^dsub] | M39029 crimp or solder cup; insert/extract tools[^dsub] | Low–Med | Short | Removable-crimp variants; 500 cycles[^dsub] | Assuming "mil-spec" = sealed; jackscrews left loose | Polarized shell, rack & panel; −55 to +125 °C[^dsub] |
| **Micro-D (MIL-DTL-83513)** | Compact high-reliability; internal / protected | 9 to 100 (standard layouts)[^microdlay] | 3.0 A[^microd] | Not sealed on its own (interfacial-seal option); treat as internal | twist-pin (or stamped-and-formed) crimp, or PCB/solder; assembly-intensive | High | Moderate–long | 500 cycles; delicate[^microd] | Using it for high current or dirty field service; handling damage | 600 V rms SL / 150 V at 70k ft; .050 in (1.27 mm) centers[^microd] |
| **Industrial rectangular / Han-style** | Machinery, panels, removable modules | Modular inserts; Han E 6–48 contacts/insert[^hane] | 16 A (Han E); higher-current inserts available (e.g. Han HC)[^hane] | Hood-dependent (IP65–IP69K options) | Crimp or screw/cage-clamp; insert tooling | Med–High | Moderate | Modular, serviceable inserts; 500 cycles (Han HMC higher)[^hane] | Wrong insert/hood combination; sealing assumed without a rated hood | 500 V (Han E); mixed power/signal/data in one housing[^hane] |
| **[Molex Micro-Fit 3.0](../micro-fit.md)** | Internal, non-sealed; −40 to +105 °C[^microfit] | 2–24 circuits[^microfit] | ≤ 8.5 A, terminal-dependent (a 10.0 A RMF terminal is offered — verify exact terminal P/N)[^microfit] | Non-sealed[^microfit] | Crimp terminals; hand or applicator tooling | Low | Short (COTS) | Crimp; ~30 cycles (250 with lubricated RMF)[^microfit] | Exceeding the rating; no TPA/keying in volume production | 3.00 mm pitch; 600 V; positive latch, TPA, polarization[^microfit] |

Contact sizes, insert arrangements, and exact ratings vary by manufacturer and part number — always pull the specific datasheet and, where qualification matters, the QPL.

**When you reuse this matrix for your own trade study, add evidence columns** so it stays reviewable: *Rating source (document + rev/date)*, *Requirement type (customer / standard / manufacturer / internal / assumption)*, *Verification status (verified / assumed / example / TBD)*, and *Derating curve checked (yes / no / n-a)*. The rows above are **example-only** family orientation, sourced per the footnotes — not release values.

## Sources

[^d38999]: Amphenol Aerospace, *MIL-DTL-38999 Series III* — environmentally sealed (IP67 when mated), durability commonly evaluated at 500 mating cycles, shell sizes 9–25, AS39029 removable crimp contacts (sizes 22D/20/16/12/8). <https://amphenol-aerospace.com/products/mil-dtl-38999-series-iii-tv>

[^d38999cur]: Contact current is size-dependent. Figures such as size 16 ≈ 10 A and size 12 ≈ 17 A are AS39029 example *test* currents / relative sizing aids, **not** guaranteed continuous ratings — size against the specific contact datasheet and derating curve. See the [MIL-DTL-38999 Deep Dive](../07-mil-dtl-38999.md).

[^m26482]: *MIL-DTL-26482 Series 2* catalog (Aero-Electric / Amphenol) — quick-disconnect 3-point bayonet, ≥ 500 mating cycles, 600 V (Service Class I) / 1000 V (Service Class II), crimp contacts in sizes 20/16/12. <https://www.aero-electric.com/PDF/MIL-DTL-26482%20Series%202.pdf>

[^m12a]: IEC 61076-2-101 (M12 circular connectors with screw-locking, A/B/D coding) — 2- to 17-way; data transmission up to 100 MHz; signal and power up to 250 V and up to 4 A per contact. <https://webstore.iec.ch/en/publication/77773>

[^m12x]: IEC 61076-2-109 (M12 X- and H-coding, data up to 500 MHz) and manufacturer datasheet — 8-way X-coded, up to 10 Gbit/s, Cat 6A, IP67 when mated. <https://media.metz-connect.com/files/171/Data_sheet_MNF881A315-0001.PDF>

[^deutschdt]: TE Connectivity DEUTSCH family literature — DT/DTM/DTP sealed to IP68 (DT also rated IP6K9K) with ~7.5 / 13 / 25 A contact classes (sizes 20/16/12); DTHD single-cavity to ~100 A (size 4); HD30/HDP20 shell sizes 18/24 with 2–47-cavity arrangements, contact sizes 4–20; DRC arrangements 24–80 cavities, durability evaluated at 100 engagement cycles. Family-level orientation values — see the [DEUTSCH Deep Dive](../deutsch.md) for the per-series citations. <https://www.te.com/en/products/connectors/automotive-connectors/intersection/deutsch-dt-series-connectors.html>, <https://www.te.com/content/dam/te-com/documents/industrial-and-commercial-transportation/global/ict-hd30-hdp20-cat-a4-en.pdf>

[^dsub]: *MIL-DTL-24308K w/Amendment 1* (DLA detail specification, 5 December 2022) — nonenvironmental, polarized-shell, rack-and-panel; −55 to +125 °C (scope §1.1); 500 mating/unmating cycles (requirement §3.5.16, test §4.5.18); contact sizes 20 (standard density) and 22D (high density); insert arrangements 9/15/25/37/50 (size 20) and up to 104 (size 22D) per appendix Table A-I. Verified against Rev K w/Amendment 1 via DLA ASSIST QuickSearch (audit 2026-08). <https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=17161>

[^microd]: Glenair, *Micro-D Performance Specifications* (MIL-DTL-83513) — 3.0 A continuous per contact from −55 to +150 °C, 600 V rms at sea level / 150 V at 70,000 ft, 500 mating cycles, .050 in (1.27 mm) contact centers. <https://www.glenair.com/micro-d/pdf/micro-d-specifications.pdf>

[^microdlay]: Micro-D standard shell layouts (9, 15, 21, 25, 31, 37, 51, 100 contacts) — ConnectorSupplier / Bishop & Associates, "What are MIL-DTL-83513 connectors?" <https://connectorsupplier.com/what-are-mil-dtl-83513-connectors/>

[^hane]: HARTING's own product page for the Han E 16-pole insert (09330162601) states 16 A, 500 V, 500 mating cycles. <https://www.harting.com/en-US/p/Han-E-16-Pos-M-Insert-Screw-09330162601> The 6–48 contacts-per-insert span is a family-range figure from distributor listings — verify the HARTING catalog for your exact insert (TME family listing: <https://www.tme.com/us/en-us/details/09330162601/harting-connectors/harting/>). The Han family also offers higher-current inserts (e.g. Han HC) and high-mating-cycle variants (Han HMC).

[^microfit]: Molex, *Micro-Fit 3.0 Connector System Product Family* (document 987650-5984, Rev. 5) — states an "8.5A maximum current rating," with current "determined by terminal used" (600 V, 3.00 mm pitch, 2–24 circuits, −40 to +105 °C, non-sealed; durability typically 30 cycles, up to 250 with factory-applied lubricant on RMF terminals). The same document offers a "10.0A RMF terminal"; its ordering table lists RMF terminals in 20–30 AWG (series 46235) and 18 AWG (series 203951). RMF primarily means *Reduced Mating Force* — current is set by the exact terminal P/N and wire gauge, not by the RMF designation itself. <https://www.content.molex.com/dxdam/literature/987650-5984.pdf>
