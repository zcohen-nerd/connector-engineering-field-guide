---
title: "Appendix: Quick-Reference Tables"
description: "Quick-reference tables: IP ratings, 38999 contact test currents, a family-selection quick guide, and typical mating-cycle life by connector family."
slug: /appendix/quick-reference-tables
sidebar_label: Quick Reference Tables
---

# Appendix: Quick-Reference Tables

This is the page to keep open when you need the quick answer: IP ratings (A1), 38999 contact sizes (A2), a family-selection guide (A3), and mating-cycle life (A4). Every value gets you oriented; none of it selects a part for you. Verify the source before using a number, and use the [Decision Paths](../decision-paths/index.md) when you need the reasoning instead of the lookup.

:::caution[Ratings are system-level]

A catalog rating is not a permission slip. Current, voltage, temperature, sealing, and mating-cycle limits depend on the exact contact, wire gauge, number of loaded circuits, ambient temperature, enclosure heat, termination quality, assembly process, and allowable temperature rise. Use these tables as a screening tool first; use the exact datasheet, derating curve, application specification, and program/customer requirement for design release.

:::

## A1. IP rating reference

IP codes are commonly referenced from IEC 60529.[^iec60529] Distinguish IEC 60529's water-protection class 9 from ISO 20653's K-coded designations (including IP6K9K), often shortened in product literature to “IP69K.”[^iso20653] IEC 60529 added its high-pressure/high-temperature jet test in the 2013 amendment. The tests and notation must be identified rather than treated as interchangeable. Verify the exact standard cited by the manufacturer, the specific depth/duration for any IP68 claim, and remember that an IP rating applies to the tested assembly/configuration, not automatically to the entire system — confirm whether the rating applies mated, unmated, capped, panel-mounted, torqued, strain-relieved, or with specific wire seals/cavity plugs installed. Note also that the immersion tests (IPx7/IPx8) and the jet tests (IPx5/IPx6/IPx9) are independent — passing immersion does not imply jet protection, which is why washdown parts are often dual-rated (e.g. "IP67/IP69K").

| IP | Solid ingress | Liquid ingress | Typical application |
|---|---|---|---|
| IP54 | Dust-protected; limited ingress permitted | Splash from any direction | Sheltered outdoor equipment |
| IP65 | Dust-tight | Low-pressure jets, any direction | Outdoor enclosures, wash-down areas |
| IP67 | Dust-tight | ~1 m immersion, ~30 min (per standard test) | Many industrial field connectors |
| IP68 | Dust-tight | Manufacturer-stated depth/duration | Subsea, submerged sensors |
| IP69 (IEC 60529) | Dust-tight: first digit 6 | High-pressure/high-temperature water-jet test: second digit 9 | Washdown where the exact IEC rating is specified |
| IPX9 (IEC 60529) | Not specified by X | Water-jet protection 9; X makes no dust claim | Verify solid-ingress protection separately |
| IP6K9K (ISO 20653) | Dust-tight class 6K | High-pressure/high-temperature jet class 9K | Road-vehicle applications; record the exact code and standard |

## A2. 38999 contact sizes — construction and conditions first

| Contact size | Typical investigation |
|---|---|
| 22D / 20 | Signal and light-power circuits; verify exact contact limits |
| 16 / 12 | Larger power paths; check loaded-contact and temperature conditions |
| 8 and larger | Power or special coax/twinax contacts, depending on the insert |
| 23 (HD) | High-density variants; use the exact contact specification |

*Glenair's size-16 entries distinguish 13 A crimp and 10 A hermetic current ratings; its H/N/Y resistance table concerns hermetic contacts. Do not reinterpret that difference as a universal test-current/free-air-rating rule. Test wire size is not a termination wire range. Use the exact contact's drawing and application derating data. Full context in [38999 §7.5](../07-mil-dtl-38999.md#75-contact-sizes-and-current).*[^glenaircontacts]

## A3. Family selection quick guide

| Need | Consider | Prefer an alternative / avoid |
|---|---|---|
| Mil-spec flight/defense harness | [MIL-DTL-38999 Series III](../07-mil-dtl-38999.md) | Commercial circular, M12 |
| Industrial sensor connection | [M12 A-coded](../08-m12.md) | D-sub, hobby connectors |
| Industrial Ethernet (GbE) | [M12 X-coded](../08-m12.md) | M12 D-coded, exposed RJ45 |
| Machine umbilical (power+signal+data) | Industrial rectangular / Han-Modular | Many individual small connectors |
| Serial/debug, benign environment | Micro-D, MIL-grade D-sub, keyed header | Bare headers, exposed USB |
| High-current robot power (>20 A) | Anderson SB, Han-style power insert, 38999 size 8/larger or dedicated power contacts (HCP = high-current power, or RADSOK[^radsok]); size 12 only where derating supports it | M12 A-coded, XT60/90, 38999 size 16 for the full load |
| Internal protected PCB harness | [Molex Micro-Fit](../micro-fit.md), TE, Harwin | Bare wire, 0.1" headers, screw terminals on PCB |
| Two boards plugging directly together | Stacking headers or a [fine-pitch mezzanine pair](../decision-paths/board-to-board.md) — one family, matched mated height | The connector as the only mechanical support; frequent-mate service joints |
| Servo motor power + feedback | The motor's own [M23-class receptacle pair](../decision-paths/motor-feedback-cable.md) or the drive ecosystem's cordsets | Custom-built feedback cables; feedback routed with power; pigtailed shields |
| Fast quick-disconnect, moderate vibration | [MIL-DTL-26482](../mil-dtl-26482.md) bayonet (verify qualification for the vibration profile) | 38999 threaded (slower to mate) |
| Rugged field wiring on a budget, no mil requirement | Sealed automotive — [DEUTSCH DT/DTM/DTP class](../deutsch.md) (see the [budget path](../decision-paths/rugged-on-a-budget.md)) | Hobby connectors outdoors; a mil circular nothing is requiring |
| RF/antenna/GPS line | SMA/TNC/N-Type (impedance-matched) | Random circular signal contacts |
| Hybrid power+RF+control to one payload | 38999 hybrid insert (coax + power + signal contacts) | Separate connectors if panel space is scarce |

## A4. Typical mating-cycle life by family

Rated mate/unmate cycles vary widely. Design with margin *below* the rated number for the service model (production-only, test, or field-service).

| Family | Typical rated mating cycles |
|---|---|
| [Molex Micro-Fit 3.0](../micro-fit.md) | ~30 (up to ~250 with lubricated RMF terminals)[^microfitcyc] |
| [MIL-DTL-38999](../07-mil-dtl-38999.md) / [MIL-DTL-26482](../mil-dtl-26482.md) | 500[^milcyc] |
| Micro-D (MIL-DTL-83513) | 500[^milcyc] |
| D-sub (MIL-DTL-24308) | 500[^milcyc] |
| M12 (screw-lock) | > 100 (per datasheet)[^m12cyc] |
| DEUTSCH sealed automotive (DRC figure) | 100 (DRC) — field-service class; verify per series[^deutschcyc] |
| Industrial rectangular / Han | ~500 standard; Han HMC (high mating cycle) far higher[^hancyc] |
| USB-C | 10,000 (USB Type-C spec)[^usbccyc] |

*Cycle life is a durability figure only — not a measure of sealing, vibration, or ruggedness. Verify against the exact part's datasheet.*

---

## Final Note

Every connector decision ripples outward — into the cable drawing, the ICD, the tooling budget, the assembly procedure, the maintenance manual, and the failure log. Engineers who treat connectors as commodities buy them on pin count and regret it. Engineers who treat them as system interfaces design reliable, serviceable, manufacturable hardware.

When this guide conflicts with a manufacturer datasheet, applicable standard, customer requirement, or qualified program requirement, the datasheet / standard / customer requirement wins. This document is a framework for thinking, not a source of record.

## Sources

[^glenaircontacts]: Glenair, *MIL-DTL-38999 Contact Performance Specifications* — the current-rating table distinguishes crimp and hermetic construction (size 16: 13 A and 10 A respectively); the separate contact-resistance table is labeled H/N/Y. These tables do not establish an application's ampacity, and the test wire sizes are not crimp-barrel wire ranges. <https://www.glenair.com/mil-dtl-38999/pdf/contact-performance-spec.pdf>

[^radsok]: Amphenol Aerospace, *High-Power 38999 / RADSOK* — RADSOK high-current contacts are rated roughly 70–250 A per contact (≈240–1000 A per connector) and are used to add dedicated power paths on the MIL-DTL-38999 platform. Contact size alone does not set safe current; use the manufacturer derating data, and do not parallel contacts unless the manufacturer/application supports it and the design is reviewed. <https://www.amphenol-aerospace.com/products/high-power-38999>

[^iec60529]: IEC 60529, *Degrees of protection provided by enclosures (IP Code)* — the international IP-rating standard: second numeral 7 = temporary immersion (tested at 1 m for 30 min), 8 = continuous immersion to a manufacturer-stated depth/duration. An IPx9 close-range high-pressure/high-temperature water-jet test was added in the 2013 edition. <https://webstore.iec.ch/en/publication/2452>

[^iso20653]: ISO 20653:2013, *Road vehicles — Degrees of protection (IP code)* — a cited edition of the vehicle IP standard with K-coded designations; record the actual standard, edition, code, and test configuration stated for the selected product. The manufacturer may use “IP69K” shorthand; do not silently equate it with IEC IPX9 or infer dust protection from X. <https://www.iso.org/standard/58048.html>

[^microfitcyc]: Molex, *Micro-Fit 3.0 Connector System Product Family* — durability typically 30 cycles (up to ~250 with factory-lubricated RMF terminals). <https://www.content.molex.com/dxdam/literature/987650-5984.pdf>

[^milcyc]: 500-cycle durability is specified per family: MIL-DTL-38999 — Amphenol Series III catalog lists "standard 500 cycle contacts" <https://amphenol-in.com/wp-content/uploads/2024/12/MIL-38999-Sr-III-AC38907-0317.pdf>; MIL-DTL-26482 Series 2 — ≥ 500 mating cycles per the Aero-Electric catalog <https://www.aero-electric.com/PDF/MIL-DTL-26482%20Series%202.pdf>; MIL-DTL-83513 Micro-D — 500 cycles per the Glenair performance spec §3.2.8 <https://www.glenair.com/micro-d/pdf/micro-d-specifications.pdf>; MIL-DTL-24308 D-sub — 500 mating/unmating cycles per MIL-DTL-24308K w/Amendment 1 (requirement §3.5.16, test §4.5.18; verified audit 2026-08) — DLA ASSIST <https://quicksearch.dla.mil/qsDocDetails.aspx?ident_number=17161>.

[^m12cyc]: Turck M12 cordset RK 4.5T-5 — mechanical life > 100 mating cycles. <https://www.turck.us/datasheet/_us/edb_U2188-94_eng_us.pdf>

[^deutschcyc]: DEUTSCH DRC series — durability evaluated at 100 cycles of engagement/disengagement. A family-level field-service figure, not a rating for other DEUTSCH series or exact parts; the contrast with the ≥ 500-cycle mil circulars is the point. TE DRC product page and distributor technical summary: <https://www.te.com/en/products/connectors/automotive-connectors/intersection/deutsch-drc-connectors.html>, <https://www.deutschconnectors.com.au/deutsch-connectors/deutsch-drc-series-connectors.html>. See the [DEUTSCH deep dive](../deutsch.md).

[^hancyc]: HARTING's own product page for the Han E 16-pole insert (09330162601) states 500 mating cycles (16 A, 500 V). <https://www.harting.com/en-US/p/Han-E-16-Pos-M-Insert-Screw-09330162601> The Han HMC (High Mating Cycle) series is designed for 10,000+ mating cycles (HARTING Han HMC product page: <https://www.harting.com/en-US/s/han-hmc>).

[^usbccyc]: USB-IF, *USB Type-C Cable and Connector Specification* (Release 2.5, USB-IF document library) — 10,000-cycle durability minimum. <https://www.usb.org/document-library/usb-type-cr-cable-and-connector-specification-release-25> The same figure is reproduced in vendor datasheets (Mouser-hosted example: <https://www.mouser.com/pdfDocs/USBCCADatasheet.pdf>).
