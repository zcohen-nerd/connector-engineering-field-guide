---
id: low-level-signal-contacts
title: "Low-Level Signals and Contact Design"
description: "Why a contact that is fine at amps can fail at millivolts — dry circuits, wetting current, gold vs. tin plating, fretting, and how to tell when a power-oriented contact is the wrong home for a signal."
slug: /low-level-signal-contacts
sidebar_label: Low-Level Signal Contacts
---

# Low-Level Signals and Contact Design

Most people assume more current means a harder connector problem. At the contact *interface*, the opposite can be true: a contact that happily carries ten amps may turn flaky at ten millivolts. The reasons are surface films, dry circuits, wetting current, plating, and fretting. We'll unpack those, then use one simple question to decide whether a contact system belongs anywhere near your signal.

It extends the [plating table in §5.1](../guide/05-connector-anatomy.md) and the contact-resistance row in [Reading Datasheets §6](../guide/06-reading-datasheets.md); the hobby-track version of the boundary is [Power vs Signal](../../hobby/power-vs-signal.md).

## 1. The problem: films win at low level

Every non-noble contact metal grows a surface film in service — oxides, sulfides, contamination. Films are thin, but they are insulators, and whether your circuit works depends on whether metal actually touches metal through them.

Sufficient electrical stress can alter or break down surface films, which can mask a degraded interface during a higher-energy resistance test. That is not a reliable cleaning strategy. Low-level circuits need stable conductive contact spots created and maintained by the *contact materials, normal force, wipe, and mechanical stability*. Assess those features and the environmental qualification together; plating alone does not establish reliability.

This is why the failure signature is so characteristic: the interface "works when freshly plugged" (mating wipe scrapes a clean spot), then drifts intermittent over weeks or months as films and debris re-form — and often "fixes itself" when someone re-mates the connector, which just wipes a new spot and restarts the clock.

![Schematic contact cross-sections contrasting fretting debris at a degraded tin interface with conductive spots at an intact gold interface; either system needs suitable mechanics and qualification](/img/diagrams/contact-interface-films.svg)

*Mechanisms, not guaranteed outcomes: tin can serve dry circuits when fretting is controlled. Gold resists oxide formation, but contamination, porosity, and wear still matter.*

## 2. "Dry circuit," defined

A **dry circuit** is one whose voltage and current are too low to alter the contact surface — too low to break down films electrically. The connector industry's standard measurement embodies the idea: the low-level contact resistance (LLCR) method, **EIA-364-23**, deliberately caps the measurement at approximately 20 mV open-circuit and 100 mA precisely so the *measurement itself* cannot break down films — it measures resistance without intentionally conditioning the contact surface. These are test limits, not a universal boundary between signal and power applications.[^eia36423][^llcr]

The practical reading for a design engineer:

- Evaluate the actual open-circuit voltage, available current, allowable resistance change, and environment. Thermocouples, RTDs, logic, and bus transceivers have different error budgets; the LLCR test limits do not classify all of them as the same circuit.
- When a manufacturer publishes contact resistance "per EIA-364-23" (or an equivalent low-level method), that is the number that speaks to signal duty. A contact resistance measured at rated current says much less about how the same interface behaves at millivolts.

## 3. Minimum wetting current: keep the context

Relay and switch manufacturers may publish a **minimum switching capacity** or **minimum applicable load** for a particular contact system. Their microload guidance concerns switching contacts and their operating conditions; it is not a universal rule for separable connectors.[^omron]

**Tin does not inherently require a minimum application current.** AMP/Tyco's *Tin Commandments*, Rule 10, explicitly permits tin contacts in dry circuits when fretting is prevented. Reliable performance depends on normal force, wipe, coating, lubrication where specified, and mechanical stability.[^tincmd]

Gold's resistance to oxide formation is useful at low level, but gold plating alone does not guarantee a stable interface. Check the exact contact system and its low-level qualification after the relevant environmental and durability exposures. Apply a minimum load only when the manufacturer specifies one for that product and duty; do not add current as a substitute for fixing an unstable interface.

## 4. Gold vs. tin is a mechanism choice, not a price tier

The [§5.1 plating table](../guide/05-connector-anatomy.md) gives the summary; here is the mechanism behind it.

**Tin works by fracture.** Tin oxidizes instantly, but the oxide is thin, hard, and brittle on top of a soft, ductile metal. Apply enough contact normal force and wiping action, and the oxide shell cracks; clean tin extrudes through the cracks and forms gas-tight metal-to-metal spots. That is a genuinely reliable mechanism — *if* the design maintains it. The classic tin guidelines (AMP's, later Tyco's, "Tin Commandments") spell out the conditions: high contact normal force (a 100-gram class figure, far above what fine signal contacts run), a mechanically stable mated interface that cannot micro-move, contact lubrication, adequate coating thickness, and no continuous high-temperature service.[^tincmd]

**Gold works by staying noble.** Gold resists oxide and sulfide formation in normal service, making it useful for low-level signals. It still needs adequate contact force and a suitable plating system: contamination, pores exposing the underplate or base metal, corrosion products, and wear can all degrade the interface. The [plating discussion in §5.1](../guide/05-connector-anatomy.md) explains why thickness and service conditions matter. **Gold flash** (a very thin layer) buys the surface chemistry but not the wear life — flash wears through with cycling, exposing the nickel or base metal beneath, after which the interface is no longer a gold interface. Cycle-count expectations and plating thickness travel together; check both on the exact contact P/N.[^goldrules]

**Never mate gold to tin.** A mixed interface gets the worst of both: it frets, tin transfers to the harder gold surface, and tin oxide builds up exactly where the gold was supposed to prevent it — the gold half is wasted and the joint behaves like a bad tin joint. This is the AMP/Tyco *Golden Rules* whitepaper's Rule 12, and it applies per mated pair: both halves, same plating class, chosen deliberately.[^goldrules][^goldtin] In families where plating is selected per contact P/N (most of them), it is easy to violate by accident across two BOMs — the mating-pair check belongs in the [ICD](../../tools/connector-icd-template.md).

## 5. Fretting: the low-level killer

[§1.6's failure table](../guide/01-what-connectors-do.md) lists fretting corrosion first for a reason. The mechanism:

1. Vibration, thermal cycling, or cable motion moves the mated contacts against each other by micrometers — far too little to notice, far too much for the interface.
2. Each micro-slide exposes fresh metal, which (on tin and other film-formers) instantly oxidizes.
3. The oxide debris doesn't leave. It accumulates *in* the contact zone, and the interface resistance climbs — steadily or intermittently — until the signal fails.

Two properties make fretting the characteristic low-level failure. It is **invisible**: a fretted connector looks perfect, and the damage is under the contact spot. And it is **self-hiding**: re-mating wipes the debris aside and the fault "goes away," which is how harnesses end up in the maintenance folklore of "reseat the connector every few months." A dry circuit cannot burn through the debris the way a power circuit partially can, so low-level signals see fretting first and worst.

Mitigations work together: control contact motion with appropriate retention, [strain relief](../guide/05-connector-anatomy.md), and [mechanical support](../../decision-paths/board-to-board.md); select a plating system demonstrated for the duty; and use lubricant only where the manufacturer specifies it. A housing latch alone does not prove that the contact interface cannot fret. Tin can work in dry circuits when its interface remains stable; gold reduces oxide-related problems but does not remove the need for mechanical control.[^tincmd][^goldrules]

## 6. When a power-oriented contact is the wrong home for a signal

The [Anderson Powerpole page](../../hobby/anderson-powerpole.md) raises a useful question: does the available evidence cover the proposed signal duty? A power rating and a temperature-rise curve do not answer that question.

- **Interface performance.** Tin, silver, and gold contact systems need assessment for their actual environment and signal error budget. Tin is not automatically disqualified from dry circuits.
- **Evidence.** Seek low-level contact-resistance results before and after relevant exposures, or an application statement covering the duty. Missing public data is an evidence gap, not proof that the manufacturer never tested the product.
- **System fit.** Check polarization, retention, shielding, contact density, and service life. Some power families provide these features; others do not.

:::tip[The evidence test]

**Does the manufacturer document low-level performance for the exact contact system and relevant service conditions?** If yes, design within that evidence. If no, ask the manufacturer and define the additional qualification needed before release.

:::

A mixed power-and-signal connector can be appropriate when each circuit's requirements are met. Spare power contacts are neither automatically suitable nor automatically unsuitable for sense lines: confirm low-level behavior, signal integrity, and fault segregation. Likewise, a low-current accessory feed still needs a verified power path. See [Power vs Signal](../../hobby/power-vs-signal.md) for the other direction of the check.

## 7. What to check on the datasheet

Adding the low-level lens to the [§6 field guide](../guide/06-reading-datasheets.md):

| Check | Where it hides | Why it matters at low level |
|---|---|---|
| Plating material **and thickness** on the exact contact P/N | Contact drawing / ordering table, not the family page | Gold flash and 50 µin gold are different products with different lives ([§5.1](../guide/05-connector-anatomy.md)) |
| Contact resistance **test method** | Spec/qualification table footnotes | Low-level (EIA-364-23-class) data speaks to signal duty; rated-current data mostly doesn't[^eia36423] |
| Cycle rating *at that plating* | Durability spec | Wear-through converts a gold interface into something else mid-life |
| Mating half's plating | The other BOM | Gold-to-tin is a per-pair defect no single datasheet will flag[^goldrules] |
| Normal force / stability features | Application spec (latch, coupling, TPA) | Force, wipe, and motion control must maintain conductive spots through the required environment[^tincmd] |
| Any stated minimum load | Exact product specification, where provided | Apply only to the specified product and duty; absence does not establish a minimum or disqualify tin |

## 8. Contact resistance is only one part of the signal budget

| Interface | Additional design checks |
|---|---|
| Thermocouple | Compatible thermocouple/extension alloys, junction temperatures, and thermal-EMF error; a low-resistance connector alone does not establish temperature accuracy |
| RTD / resistance sensor | Two-, three-, or four-wire topology; lead/contact resistance and matching or compensation |
| Strain-gauge bridge / low-level analog | Excitation and sense returns, leakage, offset/noise budget, shielding, and common-mode range |
| CAN / RS-485 | Transceiver common-mode range, reference path, topology/termination, surge protection, and any isolation boundary |
| I2C | Total bus capacitance, pull-up resistance, logic levels, rise time, cable length, and hot-plug behavior |

These are design-review prompts, not new limits or a substitute for the selected sensor/transceiver documentation.

## Source status

The film, dry-circuit, fretting, and gold-vs-tin explanations come from the EIA-364-23 method listings and manufacturer engineering documents listed below. The evidence test is engineering judgment, tracked in [Source Notes](../../appendix/source-notes.md). There is no universal magic number on this page: minimum loads, normal forces, plating thicknesses, and cycle lives belong to exact part numbers and their datasheets.

## Sources

[^eia36423]: EIA-364-23, *Low Level Contact Resistance Test Procedure for Electrical Connectors and Sockets* — the connector industry's standard LLCR method, adopted for use by the U.S. Department of Defense (DLA-hosted adoption notice: <https://weaponssupportapps.dla.mil/Downloads/MilSpec/Docs/EIA/eia364-23.pdf> — the DLA MilSpec portal migrated to this hostname from landandmaritimeapps.dla.mil in August 2026). Current edition E (2024-08) listing: <https://www.dinmedia.de/en/standard/eia-364-23e/383800335>. Record the edition your program requires.

[^llcr]: Samtec, "Understanding Low Level Contact Resistance (LLCR)" — manufacturer engineering explainer describing the LLCR measurement's limits of ~20 mV / 100 mA and why the levels are kept below film-breakdown. <https://blog.samtec.com/post/understanding-low-level-contact-resistance-llcr/>

[^omron]: Omron, relay technical information (microload switching guidance): minimum switching capacity / minimum applicable load as reference values (failure-rate P level per JIS C 5003), oxide-film contact failure at microloads, and gold-clad crossbar/bifurcated contacts recommended for microload duty. Distributor-hosted copy of Omron's relay technical documentation, labeled as such: <https://www.mouser.com/pdfDocs/omronrelayprecautions.pdf>; Omron FAQ on oxide-film failure during microload switching: <https://components.omron.com/us-en/faq/relays/FAQE10082>

[^goldrules]: AMP/Tyco Electronics, *Golden Rules: Guidelines for the Use of Gold on Connector Contacts* — gold for low-level/dry-circuit duty, gold-flash limitations, and Rule 12: gold contacts should not be mated to tin contacts (fretting; tin transfer to and oxide buildup on the gold surface). Third-party-hosted copy of the manufacturer whitepaper, labeled as such: <https://www.ramoem.com/uploads/4/4/0/7/44075859/gold_rules.pdf>

[^tincmd]: Tyco Electronics (orig. AMP), *The Tin Commandments: Guidelines for the Use of Tin on Connector Contacts* — tin's fracture/extrusion conduction mechanism and its conditions: ~100-gram-class contact normal force, mechanically stable mated interfaces, contact lubrication, adequate coating thickness, temperature limitations; Rule 10 permits dry-circuit use when fretting is controlled. Third-party-hosted copy of the manufacturer whitepaper, labeled as such: <https://www.ramoem.com/uploads/4/4/0/7/44075859/tin_commandments.pdf>

[^goldtin]: Engineering-press treatment of the mixed-plating rule, consistent with the whitepapers above: "Gold or Tin Contacts? Just don't mate them together," Microcontroller Tips (labeled press coverage, not design authority). <https://www.microcontrollertips.com/gold-tin-contacts-just-dont-mate-together/>
