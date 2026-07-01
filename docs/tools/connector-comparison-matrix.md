---
id: connector-comparison-matrix
title: Connector Comparison Matrix
slug: /tools/connector-comparison-matrix
sidebar_label: Comparison Matrix
sidebar_position: 2
---

# Connector Comparison Matrix

A worked version of the matrix from [Exercise 2](../13-hands-on-exercises.md), filled with representative figures from the manufacturer datasheets and standards cited in each cell. To score your own application, copy the table and blank the cells.

:::warning[Read the numbers as orientation, not specification]

Every figure below is a *typical or example* value for the **family**, pulled from the source footnoted in the cell — not a rating for any exact part. Current in particular depends on the specific contact, wire gauge, number of loaded contacts, temperature, and derating curve (see [Selection Workflow §2](../04-connector-selection-workflow.md)). Verify against the current datasheet, the applicable standard, and the QPL before relying on any value in released hardware. When this table and a datasheet disagree, the datasheet wins.

:::

| Family | Environment | Pin count | Current (per contact) | Sealing | Tooling | Cost | Lead time | Serviceability | Common mistakes | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **MIL-DTL-38999 Series III** | Harsh aero/defense; wide temp range | Shells 9–25; ~2 to 100+ contacts[^d38999] | Size-dependent; e.g. size 16 ≈ 10 A, size 12 ≈ 17 A (example test currents)[^d38999cur] | IP67 mated[^d38999] | AS39029 crimp; positioner + insert/extract tools | High | Often long | Rear-release removable crimp; ~500 cycles[^d38999] | Wrong crimp tool; omitted backshell; keying/gender errors | Threaded Tri-Start, scoop-proof; hybrid inserts (coax/twinax/power) |
| **MIL-DTL-26482 (Series 2)** | Rugged mil/industrial; bayonet | Multiple shells; contact sizes 20/16/12[^m26482] | Size-dependent (20/16/12) — verify per catalog[^m26482] | Environmental when mated; IP-rated variants | M39029 crimp + insert/extract tools | Med–High | Moderate–long | Removable crimp; ≥ 500 cycles[^m26482] | Assuming bayonet suits every vibration profile; wrong contacts | Fast 3-point bayonet; 600 V (Class I) / 1000 V (Class II)[^m26482] |
| **M12 A-coded** | Industrial sensors, actuators, I/O | 3/4/5/8-pin (2–17 way)[^m12a] | ≤ 4 A[^m12a] | IP67 mated; IP68/IP69K variants[^m12x] | Molded cordsets or field-wireable | Low–Med | Short (COTS) | Field-wireable variants; screw-lock | Assuming all 4-pin pinouts are alike; IP applies while unmated | IEC 61076-2-101; ≤ 250 V, ≤ 100 MHz[^m12a] |
| **M12 X-coded** | Industrial Ethernet | 8-pin[^m12x] | Signal/data level — verify per datasheet | IP67 mated[^m12x] | Molded cordsets or field-wireable | Med | Short–Med | Field-wireable variants | Unshielded cable on X-coded; using D-coded for GbE | IEC 61076-2-109; up to 10 Gbit/s, Cat 6A (≤ 500 MHz)[^m12x] |
| **D-sub (MIL-DTL-24308)** | Non-environmental; racks, panels, test gear[^dsub] | 9/15/25/37/50; up to 104 (size 22D)[^dsub] | Size 20 & 22D contacts; low-current signal/control — verify[^dsub] | Non-environmental (standard); ruggedized variants exist[^dsub] | M39029 crimp or solder cup; insert/extract tools[^dsub] | Low–Med | Short | Removable-crimp variants; 500 cycles[^dsub] | Assuming "mil-spec" = sealed; jackscrews left loose | Polarized shell, rack & panel; −55 to +125 °C[^dsub] |
| **Micro-D (MIL-DTL-83513)** | Compact high-reliability; internal / protected | 9 to 100 (standard layouts)[^microdlay] | 3.0 A[^microd] | Not sealed on its own (interfacial-seal option); treat as internal | TwistPin crimp or PCB/solder; assembly-intensive | High | Moderate–long | 500 cycles; delicate[^microd] | Using it for high current or dirty field service; handling damage | 600 V rms SL / 150 V at 70k ft; .050 in (1.27 mm) centers[^microd] |
| **Industrial rectangular / Han-style** | Machinery, panels, removable modules | Modular inserts; Han E 6–48 contacts/insert[^hane] | 16 A (Han E); higher-current inserts available (e.g. Han HC)[^hane] | Hood-dependent (IP65–IP69K options) | Crimp or screw/cage-clamp; insert tooling | Med–High | Moderate | Modular, serviceable inserts; ≥ 500 cycles (Han HMC higher)[^hane] | Wrong insert/hood combination; sealing assumed without a rated hood | 500 V (Han E); mixed power/signal/data in one housing[^hane] |
| **Molex Micro-Fit 3.0** | Internal, non-sealed; −40 to +105 °C[^microfit] | 2–24 circuits[^microfit] | ≤ 8.5 A (10 A with RMF terminal)[^microfit] | Non-sealed[^microfit] | Crimp terminals; hand or applicator tooling | Low | Short (COTS) | Crimp; ~30 cycles (250 with lubricated RMF)[^microfit] | Exceeding the rating; no TPA/keying in volume production | 3.00 mm pitch; 600 V; positive latch, TPA, polarization[^microfit] |

Contact sizes, insert arrangements, and exact ratings vary by manufacturer and part number — always pull the specific datasheet and, where qualification matters, the QPL.

## Sources

[^d38999]: Amphenol Aerospace, *MIL-DTL-38999 Series III* — environmentally sealed (IP67 when mated), durability commonly evaluated at 500 mating cycles, shell sizes 9–25, AS39029 removable crimp contacts (sizes 22D/20/16/12/8). <https://amphenol-aerospace.com/products/mil-dtl-38999-series-iii-tv>

[^d38999cur]: Contact current is size-dependent. Figures such as size 16 ≈ 10 A and size 12 ≈ 17 A are AS39029 example *test* currents / relative sizing aids, **not** guaranteed continuous ratings — size against the specific contact datasheet and derating curve. See the [MIL-DTL-38999 Deep Dive](../07-mil-dtl-38999.md).

[^m26482]: *MIL-DTL-26482 Series 2* catalog (Aero-Electric / Amphenol) — quick-disconnect 3-point bayonet, ≥ 500 mating cycles, 600 V (Service Class I) / 1000 V (Service Class II), crimp contacts in sizes 20/16/12. <https://www.aero-electric.com/PDF/MIL-DTL-26482%20Series%202.pdf>

[^m12a]: IEC 61076-2-101 (M12 circular connectors with screw-locking, A/B/D coding) — 2- to 17-way; data transmission up to 100 MHz; signal and power up to 250 V and up to 4 A per contact. <https://standards.globalspec.com/std/1519301/iec-61076-2-101>

[^m12x]: IEC 61076-2-109 (M12 X- and H-coding, data up to 500 MHz) and manufacturer datasheet — 8-way X-coded, up to 10 Gbit/s, Cat 6A, IP67 when mated. <https://media.metz-connect.com/files/171/Data_sheet_MNF881A315-0001.PDF>

[^dsub]: *MIL-DTL-24308G* (DLA detail specification) — nonenvironmental, polarized-shell, rack-and-panel; −55 to +125 °C; 500 mating/unmating cycles (§4.5.18); contact sizes 20 (standard density) and 22D (high density); positions 9/15/25/37/50, up to 104 for size 22D. <https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/7139/5831_mil-dtl-24308.pdf>

[^microd]: Glenair, *Micro-D Performance Specifications* (MIL-DTL-83513) — 3.0 A continuous per contact from −55 to +150 °C, 600 V rms at sea level / 150 V at 70,000 ft, 500 mating cycles, .050 in (1.27 mm) contact centers. <https://www.glenair.com/micro-d/pdf/micro-d-specifications.pdf>

[^microdlay]: Micro-D standard shell layouts (9, 15, 21, 25, 31, 37, 51, 100 contacts) — ConnectorSupplier / Bishop & Associates, "What are MIL-DTL-83513 connectors?" <https://connectorsupplier.com/what-are-mil-dtl-83513-connectors/>

[^hane]: HARTING Han E insert (per IEC 61984) — 16 A, 500 V, ≥ 500 mating cycles, 6–48 contacts per insert. The Han family also offers higher-current inserts (e.g. Han HC) and high-mating-cycle variants (Han HMC). <https://www.tme.com/us/en-us/details/09330162601/harting-connectors/harting/>

[^microfit]: Molex, *Micro-Fit 3.0 Connector System Product Family* (document 987650-5984) — 8.5 A max (10 A with the RMF terminal), 600 V, durability typically 30 cycles (up to 250 with factory-lubricated RMF terminals), 3.00 mm pitch, 2–24 circuits, −40 to +105 °C, non-sealed. <https://www.content.molex.com/dxdam/literature/987650-5984.pdf>
