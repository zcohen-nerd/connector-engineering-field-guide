---
id: deutsch
title: "DEUTSCH Deep Dive"
description: "DEUTSCH connector deep dive: every size from DTM to DTHD, HD10, HD30/HDP20, DRC, and Autosport — contacts, tooling, sealing, keying, part-number decode, and traps."
slug: /deutsch
sidebar_label: DEUTSCH Deep Dive
---

# DEUTSCH Deep Dive

DEUTSCH (today a TE Connectivity brand) is the connector name you'll hear most on off-road equipment, agricultural machinery, trucks, marine electrical systems, and field robotics. The family earned that position the same way 38999 earned aerospace: a complete, disciplined system — sealed thermoplastic housings, a rear-release crimp contact system, positive secondary locks, and an ecosystem of seals, plugs, boots, and tooling — at a price and hand-tool level a small team can actually adopt. For this guide's audience it is usually the first serious step above hobby connectors and the last stop before mil circulars.

![A round Deutsch HD-style 9-pin J1939 diagnostic plug with threaded coupling on a black cable](/img/photos/deutsch-j1939-plug.jpg)

*The sealed-DEUTSCH look on a real vehicle: an HD10-family 9-pin J1939 diagnostic plug — crimp contacts, wire seals, thumb-coupled shell. Photo: [Florian Schäffer](https://commons.wikimedia.org/wiki/File:J1939-Stecker.jpg), CC BY-SA 3.0, via Wikimedia Commons.*

:::tip[Just need to choose?]

For a scenario walkthrough, see the [Rugged on a budget decision path](decision-paths/rugged-on-a-budget.md) — sealed automotive families including DEUTSCH are its headline candidates. This page is the detail behind that choice.

:::

:::note[This is a supplemental deep dive]

Like the [MIL-DTL-26482 page](mil-dtl-26482.md), this page is site-only supplemental material, not one of the numbered canonical sections. It goes deeper than the sourced family table in [Standards and Families (§3.2)](03-connector-standards-and-families.md#32-sealed-automotive-connector-families) but follows the same rule: every figure here is a **cited, family-level orientation value**, never a substitute for the exact part's datasheet.

:::

## 1. What a full DEUTSCH interface includes

Plug housing + receptacle housing + **contacts for both halves** (pins *and* sockets, in the correct contact line) + **wedgelock for each half** + **sealing plugs for every unused cavity** + boot or backshell where the cable needs strain relief + pinout drawing + the correct crimp tool with an inspection criterion.

None of that is optional. Wire-to-wire DEUTSCH housings generally ship as bare shells: contacts, wedgelocks, and sealing plugs are separate line items, and the sealing claim assumes all of them are present and correctly installed. A DT missing its wedgelock will pass a bench tug-test and then back its contacts out on a vehicle; an unused cavity without a sealing plug is an open hole in a "sealed" connector.

## 2. The family map — every series and size

The industrial DEUTSCH range is one contact philosophy (rear-insert, rear-release crimp contacts behind silicone seals) packaged at different sizes and shapes. Orientation figures below are family-level and cited; cavity counts and ratings for a specific shell come from the series datasheet.[^dtfam][^dtte][^dthd][^hd30][^hd10][^drc]

| Series | Format | Cavities / shells | Contact sizes | Continuous current class | Typical role |
|---|---|---|---|---|---|
| **DTM** | Rectangular wedgelock, wire-to-wire + flange/PCB | 2, 3, 4, 6, 8, 12 | 20 | ~7.5 A | Sensor and small-signal harnessing |
| **DT** | Rectangular wedgelock, wire-to-wire + flange/PCB | 2, 3, 4, 6, 8, 12 | 16 | ~13 A | The general-purpose default |
| **DTP** | Rectangular wedgelock | 2, 4 | 12 | ~25 A | Power distribution branches |
| **DTHD** | Single-cavity heavy-duty | 1 | 12 / 8 / 4 | ~25 / 60 / 100 A | Battery, starter, charge lines |
| **HD10** | Compact thermoplastic circular | 3–9 | 16 (others per catalog) | ~13 A | Legacy vehicle I/O; the J1939 9-pin diagnostic |
| **HD30** | Heavy-duty circular, **metal shell**, quarter-turn coupling | Shell sizes 18 & 24; arrangements from 2 to 47 cavities | 4–20 | ~7.5–100 A | Heavy-equipment trunk harnesses, bulkheads |
| **HDP20** | Same inserts as HD30 in a **thermoplastic shell** | Shell sizes 18 & 24; 2–47 cavities | 4–20 | ~7.5–100 A | Cost/weight-reduced HD30 duty |
| **DRC** | High-density sealed rectangular, inline/flange/PCB | Arrangements 24–80 cavities | 20 (12/16 options) | ~7.5 A (size 20) | ECU and controller interfaces |
| **Autosport (AS / ASL / ASDD / ASX / ASHD)** | Miniature high-performance circulars, threaded coupling | Up to 128 ways; ASX reaches a #2 shell | Down to size 24 (~3 A, 24–30 AWG) on ASX | Per catalog | Motorsport / lightweight vehicles — a different cost class |

Two boundary notes. Below this range, if the interface is protected and dry, a sealed family may be overkill — see [Internal PCB harnessing](decision-paths/internal-pcb-harnessing.md). Above it, DEUTSCH the *company* also builds MIL-DTL-38999 and other qualified mil circulars; those are a different ecosystem entirely and are covered in the [38999 deep dive](07-mil-dtl-38999.md), not here.

**Choosing within the family** usually follows current and count: DTM for small-signal sensor runs, DT as the default, DTP when a branch needs ~25 A contacts, DTHD for single heavy conductors, HD30/HDP20 when one connector must carry a whole harness trunk or pass a bulkhead, DRC when an ECU-style block of dozens of size-20 lines terminates in one place, HD10 mostly when matching legacy equipment or providing a J1939 diagnostic port. Autosport is the graduation path when mass and envelope justify motorsport pricing — at that point also compare [Micro-D](decision-paths/micro-d.md) and [38999](07-mil-dtl-38999.md) before committing.

## 3. Contact sizes and current across the system

The whole industrial range draws from one ladder of contact sizes. As everywhere in this guide: these are **family-level continuous ratings from manufacturer literature**, useful for relative sizing — the allowable current for a real design comes from the exact contact datasheet at your wire gauge, loaded-contact count, and temperature.[^dtfam][^dthd][^hd30]

| Contact size | Continuous current class | Where you meet it |
|---|---|---|
| 20 | ~7.5 A | DTM, DRC, HD30/HDP20 arrangements |
| 16 | ~13 A | DT, HD10, HD30/HDP20 arrangements |
| 12 | ~25 A | DTP, DTHD-12, HD30/HDP20 arrangements |
| 8 | ~60 A | DTHD-8, HD30/HDP20 power arrangements |
| 4 | ~100 A | DTHD-4, HD30/HDP20 power arrangements |

![Relative mating-end sizes of DEUTSCH contact sizes 20, 16, 12, 8, and 4 with continuous current classes](/img/diagrams/deutsch-contact-sizes.svg)

*Approximate relative sizes, for orientation only — smaller size number = physically larger contact. Dimensions, wire ranges, and ratings come from the exact contact datasheet.*

:::warning

A "13 A" size-16 contact does not promise 13 A in *your* connector. Derate for bundle/loaded-contact count, ambient temperature, wire gauge, and duty cycle against the manufacturer's data — and remember these families are **not load-break rated**: never unplug them under power unless the exact datasheet says otherwise. See the [energized-connector warning](decision-paths/high-current-dc-power.md).

:::

## 4. The contact-system trap: solid vs. stamped-and-formed

This is the DEUTSCH equivalent of the [26482 Series 1 vs Series 2 trap](mil-dtl-26482.md#5-series-and-termination-traps). The same housings accept two different contact lines, and the lines do not share tooling:[^dtool]

| | Solid (machined) contacts | Stamped-and-formed contacts |
|---|---|---|
| Part-number series | 0460 (pins) / 0462 (sockets) | 1060 (pins) / 1062 (sockets) |
| Construction | Machined barrel | Stamped, rolled barrel, often on carrier strip |
| Crimp tooling | Solid-barrel indent tool (e.g. the HDT-48-00 hand tool, sizes 20/16/12) | **Different** tool for stamped contacts — the solid-contact tool does not produce a valid crimp |
| Typical buying context | Loose-piece, field service, low volume | Volume harness production; also common in marketplace kits |

:::warning

**Match the crimp tool to the contact line, not to the connector.** The classic failure: genuine housings, marketplace-kit stamped contacts, and a solid-barrel indent crimper — every crimp looks plausible and none meets spec. Buy the contact line you have tooling for, from a real distributor, and get the manufacturer's crimp inspection criteria. Plating (nickel standard, gold optional) must also match on both sides of the interface.[^dtte][^dtool]

:::

## 5. Sealing, wedgelocks, and unused cavities

DT-family sealing is a **system claim**: TE rates the DT system to IP68 and IP6K9K, with silicone rear grommets sealing on the **wire insulation OD** and an interface seal between halves.[^dtte][^dtfam] That means:

- **Wire OD is a spec, not a suggestion.** The grommet seals only over its insulation-diameter range. Thin-insulation wire (common on bench spools) under-fills the seal and leaks; verify the seal range per cavity, and use the family's reduced-diameter-seal or enhanced-seal housing variants where offered.
- **Every unused cavity gets a sealing plug.** Same rule as every sealed family in this guide — see [What People Forget](what-people-forget.md).
- **The wedgelock is part of the connector.** On wire-to-wire DT/DTM/DTP, the wedge (the classic orange piece on gray DT plugs) is a separate loose part per half — e.g. W-prefix part numbers like W2S/W2P for 2-way plugs/receptacles — that locks the contacts in their cavities as the secondary retention. No wedge, no retention system.[^dtds]
- **Temperature class is thermoplastic-and-silicone.** Family literature works in a −55 °C to +125 °C class window; verify per series and per contact/current point.[^drc][^dtds]
- **Cycle life is field-service class, not mil class.** DEUTSCH industrial literature evaluates durability at figures like **100 mating cycles** (DRC), versus the ≥500 typical of mil circulars — fine for a service disconnect, wrong for a daily-mate interface.[^drc] Verify the figure for your series; if the interface mates often, revisit [M12](08-m12.md) or a [mil circular](07-mil-dtl-38999.md).

![Exploded line diagram of a DT plug: socket contacts, rear silicone grommet, housing, and orange wedgelock, with the mating receptacle](/img/diagrams/deutsch-dt-exploded.svg)

*The parts people forget are the parts that make it sealed: rear grommet, wedgelock per half, sealing plugs in unused cavities.*

## 6. Keying

Same discipline as [38999 keying (§7.7)](07-mil-dtl-38999.md#77-service-classes-and-keying), simpler mechanics:

- **DT/DTM 8- and 12-way housings** mold the keying into the housing with **A–D key options, color-coded** so harness builders can tell positions apart at a glance.[^dtds]
- **Smaller DT arrangements** offer keyed variants through housing/wedgelock options — decode the exact part number rather than assuming any 4-way mates with any 4-way.
- **HD30/HDP20 and Autosport** use positive shell keying / multiple keyway orientations (five on Autosport shells).[^hd30][^autosport]

Use alternate keys whenever identical-looking connectors sit near each other, and put the key position in the [ICD](tools/connector-icd-template.md) — don't rely on wire color and technician memory.

## 7. Decoding a part number (worked example)

DEUTSCH wire-to-wire part numbers are readable once you know the pattern. Example: **`DT06-3S`** with its wedgelock **`W3S`**:[^dtds]

| Field | Value | Meaning |
|---|---|---|
| DT | `DT` | Series (DTM, DTP, DTHD, DRC follow the same logic) |
| 06 | `06` | Shell half: **DT06 = plug** (takes **socket** contacts); **DT04 = receptacle** (takes **pin** contacts) |
| 3 | `3` | Cavity count |
| S | `S` | Contact gender the housing accepts — S = sockets, P = pins |
| — | `W3S` | Matching wedgelock: W + cavity count + half (S = plug side, P = receptacle side) |

Trailing codes (`-E008`, `-P006`, `-CE05`-style suffixes) are **housing modifications**: color, enhanced seal retention, shroud and boot-adapter options, molded-in termination resistors, keying variants. They change the part meaningfully — decode them against TE literature, never by pattern-matching a lookalike listing.[^dtds]

The heavy circulars follow their own prefix logic: **HD34** = HD30-series receptacle, **HD36** = HD30-series plug, **HDP24/HDP26** = the HDP20-series equivalents, followed by shell size and insert arrangement (e.g. an 18-shell 14-cavity arrangement reads `18-14`).[^hd30]

To decode *your* part number against TE's literature — and pick the matching contact line and crimp tooling — use the fill-in [DEUTSCH Decode & Tooling Worksheet](tools/deutsch-decode-worksheet.md).

:::warning

Plug/receptacle does **not** tell you pin/socket — a DT06 *plug* carries *sockets*. Energized-side rules from the [38999 mistakes table](07-mil-dtl-38999.md#79-common-38999-beginner-mistakes) apply here too: put sockets on the live side, and verify both halves as a mated pair. Also verify vendor mixing deliberately: Amphenol Sine's AT/ATM/ATP/AHD lines are marketed as intermateable equivalents of DT/DTM/DTP/HD, and they are a legitimate second source — but treat cross-vendor interfaces like any compatibility claim and confirm contacts, seals, and tooling against both datasheets rather than folklore. Anonymous marketplace "Deutsch-style" kits are a different thing entirely — see the [kit warnings in the hobby track](hobby/connector-kits.md).[^atseries]

:::

## 8. Common DEUTSCH beginner mistakes

| Mistake | Consequence |
|---|---|
| No wedgelock (left in the bag, or never ordered) | Contacts back out under vibration; intermittents that "fix themselves" on the bench |
| Unused cavities without sealing plugs | The sealed connector leaks at every empty hole |
| Solid-contact crimper on stamped contacts (or vice versa) | Plausible-looking crimps that fail in service |
| Thin-insulation wire in a standard seal | Cavity leaks; sealing defeated |
| Assuming contacts ship with housings | Build stalls; pins, sockets, wedges, and plugs are separate line items |
| Unplugging under load | Arc damage — these are not load-break connectors |
| Wrong series for the current (signal series feeding power) | Overheated contacts; melted housings |
| Ignoring keying on same-size neighbors | Eventual mis-mate in the field |
| Marketplace kit contacts in a real build | Unknown plating and spring force; crimp spec unverifiable |
| Treating DT as a 38999 substitute | No EMI backshell ecosystem, no QPL, wrong cycle-life class — see [when mil-spec is actually required](decision-paths/defense-rugged-external-io.md) |
| No boot/strain relief on a flexing cable | Seal works, wire fatigues at the grommet |
| Daily-mate service port on a 100-cycle-class family | Worn seals and retention long before the machine retires |

## 9. Sources / caveats

Every figure on this page is a family-level orientation value quoted from public manufacturer or distributor literature, cited below. Cavity counts, current ratings, seal ranges, temperature classes, cycle life, and part-number suffixes all vary by exact series and part number — size and specify against the current TE Connectivity DEUTSCH datasheet for the exact part, and treat compatibility and interchange claims (including second-source lines) as things to verify, not assume. This page reproduces no paid-standard or proprietary catalog tables.

## Sources

[^dtfam]: TE Connectivity DEUTSCH DT / DTM / DTP series — sealed to IP68; continuous-current ratings ~7.5 A (DTM, size 20), ~13 A (DT, size 16), ~25 A (DTP, size 12). Same family-level citation as [§3.2](03-connector-standards-and-families.md#32-sealed-automotive-connector-families). <https://www.te.com/en/products/connectors/automotive-connectors/intersection/deutsch-dtp-connectors.html>

[^dtte]: TE Connectivity, *DEUTSCH DT Connectors* product page — DT housings in 2, 3, 4, 6, 8, and 12 cavities using the DEUTSCH size 16 contact system (13 A continuous); solid (machined) or stamped-and-formed contacts; IP68 / IP6K9K ingress protection; nickel finish standard, gold optional. <https://www.te.com/en/products/connectors/automotive-connectors/intersection/deutsch-dt-series-connectors.html>

[^dtds]: TE Connectivity, *DEUTSCH DT* datasheet (ICT series literature) — thermoplastic shell and wedgelock with silicone rear grommet; thermal cycling characterized over −55 °C to +125 °C; 8- and 12-way arrangements with integral, color-coded A–D keying; DT04/DT06 receptacle/plug and W-series wedgelock part-number structure, with suffix codes for housing modifications. <https://www.te.com/content/dam/te-com/documents/industrial-and-commercial-transportation/global/ict-deutsch-DT-ds-a4-en-0224.pdf>

[^dthd]: DEUTSCH DTHD series — single-cavity heavy-duty connectors accepting size 12 / 8 / 4 contacts rated ~25 / 60 / 100 A continuous. Distributor technical page (WireCare), pending a TE-hosted equivalent. <https://www.wirecare.com/manufacturers/deutsch/dthd-series-connector>

[^hd30]: TE Connectivity, *DEUTSCH HD30 & HDP20 Connectors* catalog — HD30 metal shells / HDP20 thermoplastic shells; shell sizes 18 and 24 with insert arrangements from 2 to 47 cavities; contact sizes 4 (~100 A) through 20 (~7.5 A); quarter-turn coupling with positive shell keying; HD34/HD36 and HDP24/HDP26 receptacle/plug part-number prefixes. <https://www.te.com/content/dam/te-com/documents/industrial-and-commercial-transportation/global/ict-hd30-hdp20-cat-a4-en.pdf>

[^hd10]: DEUTSCH HD10 series — compact thermoplastic circulars in 3–9-cavity arrangements, inline or flanged; the SAE J1939-13 off-board diagnostic connector is the 9-pin HD10-9-1939. CopperHill Technologies, "SAE J1939/13 Off-Board Diagnostic Connector." <https://copperhilltech.com/blog/sae-j193913-offboard-diagnostic-connector-deutsch-hd1091939-/>

[^drc]: DEUTSCH DRC series — environmentally sealed rectangular connectors with insert arrangements from 24 to 80 cavities accepting size 20 (and 12/16) contacts; −55 °C to +125 °C; durability evaluated at 100 engagement cycles; 20 G sinusoidal vibration, 10–2000 Hz. TE product page and distributor technical summary. <https://www.te.com/en/products/connectors/automotive-connectors/intersection/deutsch-drc-connectors.html>, <https://www.deutschconnectors.com.au/deutsch-connectors/deutsch-drc-series-connectors.html>

[^dtool]: DEUTSCH contact lines and tooling — solid (machined) contacts in the 0460 (pin) / 0462 (socket) part-number series vs. stamped-and-formed in 1060 / 1062; the HDT-48-00 hand crimp tool serves **solid** contacts in sizes 20/16/12 only, and stamped-and-formed contacts require their own tooling. DeutschConnector.com crimp tool selection guide; RS Components HDT-48-00 listing. <https://www.deutschconnector.com/technical/deutsch_connector_crimp_guide/>, <https://int.rsdelivers.com/product/deutsch/hdt-48-00/deutsch-hand-crimp-tool-for-dt-solid-contacts/0425973>

[^autosport]: TE Connectivity, *DEUTSCH Autosport Interconnection Solutions* catalog — AS series in four shell styles and five keyway orientations with arrangements up to 128 ways; variants include ASL (MicroLITE), ASDD (double density), ASX (Micro XtraLITE — #2 shell, size 24 contacts, ~3 A, 24–30 AWG), and ASHD (heavy duty, battery/starter/ERS applications). <https://cdn.wirecare.com/assets/pdfs/pages/customer-service/catalog-deutsch-autosport.pdf>

[^atseries]: Amphenol Sine Systems AT / ATM / ATP / AHD series — marketed as intermateable, interchangeable equivalents of DEUTSCH DT / DTM / DTP / HD respectively; verify contact, seal, and tooling compatibility for any mixed-vendor interface against both manufacturers' documentation. <https://www.amphenol-sine.com/atm-series>, <https://www.chiefenterprises.com/chief-blog/are-amp-and-deutsch-connectors-interchangeable/>
