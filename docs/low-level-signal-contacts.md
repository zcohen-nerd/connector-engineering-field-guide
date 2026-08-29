---
id: low-level-signal-contacts
title: "Low-Level Signals and Contact Design"
description: "Why a contact that is fine at amps can fail at millivolts — dry circuits, wetting current, gold vs. tin plating, fretting, and how to tell when a power-oriented contact is the wrong home for a signal."
slug: /low-level-signal-contacts
sidebar_label: Low-Level Signal Contacts
---

# Low-Level Signals and Contact Design

The intuition most people bring to contacts is "more current is harder." For the contact *interface*, the opposite is closer to the truth: a contact that happily carries ten amps can be unreliable at ten millivolts. This page explains why — surface films, dry circuits, wetting current, the gold-vs-tin decision, and fretting — and gives you a one-question test for whether a contact system belongs anywhere near your signal.

It extends the [plating table in §5.1](05-connector-anatomy.md) and the contact-resistance row in [Reading Datasheets §6](06-reading-datasheets.md); the hobby-track version of the boundary is [Power vs Signal](hobby/power-vs-signal.md).

## 1. The problem: films win at low level

Every non-noble contact metal grows a surface film in service — oxides, sulfides, contamination. Films are thin, but they are insulators, and whether your circuit works depends on whether metal actually touches metal through them.

At power levels, the circuit helps: enough voltage and current will break down and punch through a thin film, and the heat and force at the interface keep the conduction path open. At signal levels — millivolts of open-circuit voltage, microamps to milliamps of current — **the circuit never breaks the film**. Whatever conduction path exists is whatever the contact system created mechanically at mating, and whatever the environment has done to it since. That is the entire subject of this page: at low level, contact reliability must come from the *metallurgy and mechanics* of the contact, because the electricity contributes nothing.

This is why the failure signature is so characteristic: the interface "works when freshly plugged" (mating wipe scrapes a clean spot), then drifts intermittent over weeks or months as films and debris re-form — and often "fixes itself" when someone re-mates the connector, which just wipes a new spot and restarts the clock.

![Two schematic contact cross-sections: a tin-class interface with an insulating oxide film and fretting debris in the contact zone that millivolt signals cannot break through, beside a gold-class interface with clean metal-to-metal contact spots that conduct at any signal level](/img/diagrams/contact-interface-films.svg)

*Same force, same geometry — the film decides. On tin the signal lives with whatever the oxide and debris allow; on gold, metal touches metal and stays that way.*

## 2. "Dry circuit," defined

A **dry circuit** is one whose voltage and current are too low to alter the contact surface — too low to break down films electrically. The connector industry's standard measurement embodies the idea: the low-level contact resistance (LLCR) method, **EIA-364-23**, deliberately caps the measurement at approximately 20 mV open-circuit and 100 mA precisely so the *measurement itself* cannot break down films — it measures the interface as your signal will actually experience it, not as a power circuit would.[^eia36423][^llcr]

The practical reading for a design engineer:

- If your signal lives at or below that class of levels — thermocouple and RTD millivolts, strain-gauge bridges, low-voltage logic, bus lines with milliamp drive, anything a datasheet would call "measurement" — you are designing a dry circuit, and the contact must be reliable *without electrical help*.
- When a manufacturer publishes contact resistance "per EIA-364-23" (or an equivalent low-level method), that is the number that speaks to signal duty. A contact resistance measured at rated current says much less about how the same interface behaves at millivolts.

## 3. Minimum wetting current

The relay and switch world — which has fought this exact battle for a century — names the other side of the boundary. A film-forming contact needs a certain minimum load to stay reliable: enough current to break through and keep clear the films that keep forming. Below that level, the contact drifts intermittent. Relay manufacturers publish this as a **minimum switching capacity** or **minimum applicable load** — a reference value, not a guarantee — and their microload guidance is blunt about the failure mechanism (oxide film on the contact surface) and the fix (gold-class contact surfaces, often redundant crossbar/bifurcated geometries, for microload duty).[^omron]

The same concept applied to connectors is often called **minimum wetting current**. Connector datasheets rarely state one — which is exactly the point:

- **Tin-class contacts have a real minimum.** Below it, nothing keeps the interface clear, and the only question is how long the mating wipe's clean spot lasts.
- **Gold-class contacts effectively don't**, in clean, correctly designed service — gold grows no insulating film, so there is nothing for a minimum current to break through.[^goldrules]
- If you find yourself asking "is there enough current on this line to keep the contact happy?", the robust answer is not to add current — it is to specify a contact system that doesn't need it.

## 4. Gold vs. tin is a mechanism choice, not a price tier

The [§5.1 plating table](05-connector-anatomy.md) gives the summary; here is the mechanism behind it.

**Tin works by fracture.** Tin oxidizes instantly, but the oxide is thin, hard, and brittle on top of a soft, ductile metal. Apply enough contact normal force and wiping action, and the oxide shell cracks; clean tin extrudes through the cracks and forms gas-tight metal-to-metal spots. That is a genuinely reliable mechanism — *if* the design maintains it. The classic tin guidelines (AMP's, later Tyco's, "Tin Commandments") spell out the conditions: high contact normal force (a 100-gram class figure, far above what fine signal contacts run), a mechanically stable mated interface that cannot micro-move, contact lubrication, adequate coating thickness, and no continuous high-temperature service.[^tincmd]

**Gold works by staying noble.** Gold grows no oxide or sulfide in normal environments, so a gold-to-gold interface conducts at any level, at low normal force, indefinitely — which is why it is the default for low-current signals, dry circuits, and mil-spec contacts (the [50 µin-class plating on mil contacts](05-connector-anatomy.md) exists for this reason). Its enemies are mechanical and economic instead: it is soft, it wears, and it costs money. **Gold flash** (a very thin layer) buys the surface chemistry but not the wear life — flash wears through with cycling, exposing the nickel or base metal beneath, after which the interface is no longer a gold interface. Cycle-count expectations and plating thickness travel together; check both on the exact contact P/N.[^goldrules]

**Never mate gold to tin.** A mixed interface gets the worst of both: it fretts, tin transfers to the harder gold surface, and tin oxide builds up exactly where the gold was supposed to prevent it — the gold half is wasted and the joint behaves like a bad tin joint. This is the AMP/Tyco *Golden Rules* whitepaper's Rule 12, and it applies per mated pair: both halves, same plating class, chosen deliberately.[^goldrules][^goldtin] In families where plating is selected per contact P/N (most of them), it is easy to violate by accident across two BOMs — the mating-pair check belongs in the [ICD](tools/connector-icd-template.md).

## 5. Fretting: the low-level killer

[§1.6's failure table](01-what-connectors-do.md) lists fretting corrosion first for a reason. The mechanism:

1. Vibration, thermal cycling, or cable motion moves the mated contacts against each other by micrometers — far too little to notice, far too much for the interface.
2. Each micro-slide exposes fresh metal, which (on tin and other film-formers) instantly oxidizes.
3. The oxide debris doesn't leave. It accumulates *in* the contact zone, and the interface resistance climbs — steadily or intermittently — until the signal fails.

Two properties make fretting the characteristic low-level failure. It is **invisible**: a fretted connector looks perfect, and the damage is under the contact spot. And it is **self-hiding**: re-mating wipes the debris aside and the fault "goes away," which is how harnesses end up in the maintenance folklore of "reseat the connector every few months." A dry circuit cannot burn through the debris the way a power circuit partially can, so low-level signals see fretting first and worst.

Mitigations, in the order to prefer them: a gold-to-gold interface (no film to grow), a mated pair that cannot micro-move (positive latching or threaded/self-locking coupling, [strain relief](05-connector-anatomy.md) so cable loads never reach the contacts, board-to-board stacks that are [mechanically supported](decision-paths/board-to-board.md)), and — where the manufacturer specifies it — contact lubricant, which is a legitimate engineering material here and part of the tin guidelines, not a hack.[^tincmd]

## 6. When a power-oriented contact is the wrong home for a signal

The [Anderson Powerpole page](hobby/anderson-powerpole.md) makes this argument for one family; here is the general version. Power-oriented contact systems are engineered around a different problem: carrying amps with low temperature rise. Their platings (tin, silver), normal forces, geometries, and published data all serve that lane. Pressing one into signal duty fails on three counts:

- **Surface chemistry.** Tin and silver are power platings; at dry-circuit levels their films never get broken down (silver's sulfide tarnish is its own version of the problem — see [§5.1](05-connector-anatomy.md)).
- **No data.** The documentation publishes current ratings and temperature rise, not low-level contact resistance. Nothing tells you how the interface behaves at millivolts, because the manufacturer never characterized it — you'd be designing on vibes.
- **No signal mechanics.** Power families frequently lack the latch, keying, shielding path, and fine-pitch density that signal interconnects are built around.

So the one-question test:

:::tip[The lane test]

**Does the manufacturer publish low-level / dry-circuit contact resistance (EIA-364-23-class data) — or otherwise state that this contact system is characterized for low-level signals?** If yes, you're in the documented lane; design to that data. If no, your millivolt signal is an experiment the manufacturer never ran.

:::

The legitimate mixed case is real and common: one connector carrying both power and signal contacts, each specified for its job — a mil-circular insert with gold-plated signal contacts beside larger power contacts, an [M23 motor connector's](decision-paths/motor-feedback-cable.md) separate feedback insert. What makes those work is that the *signal contacts* are signal contacts. The illegitimate version is "the power connector has spare poles, run the sense lines through them" — same shell, wrong lane.

Signal ≠ small power, in both directions: a 500 mA accessory feed through a power family is fine; an encoder pair through it is not. The mirror-image mistake — real power through signal contacts — is [Power vs Signal](hobby/power-vs-signal.md)'s subject.

## 7. What to check on the datasheet

Adding the low-level lens to the [§6 field guide](06-reading-datasheets.md):

| Check | Where it hides | Why it matters at low level |
|---|---|---|
| Plating material **and thickness** on the exact contact P/N | Contact drawing / ordering table, not the family page | Gold flash and 50 µin gold are different products with different lives ([§5.1](05-connector-anatomy.md)) |
| Contact resistance **test method** | Spec/qualification table footnotes | Low-level (EIA-364-23-class) data speaks to signal duty; rated-current data mostly doesn't[^eia36423] |
| Cycle rating *at that plating* | Durability spec | Wear-through converts a gold interface into something else mid-life |
| Mating half's plating | The other BOM | Gold-to-tin is a per-pair defect no single datasheet will flag[^goldrules] |
| Normal force / stability features | Application spec (latch, coupling, TPA) | Tin's mechanism needs force and zero micro-motion; low force + vibration = fretting[^tincmd] |
| Any stated minimum load | Usually absent on connectors | Its absence on a power-oriented family is the lane test failing |

## Source status

The film/dry-circuit/fretting mechanisms and the gold-vs-tin logic are cited to the EIA-364-23 method listings and to manufacturer engineering documents (AMP/Tyco plating whitepapers, Omron relay technical documentation, Samtec's LLCR explainer) — see below. The "lane test" and mitigation orderings are engineering judgment, tracked as heuristics in [Source Notes](appendix/source-notes.md). No universal numeric limits are asserted anywhere on this page: minimum loads, normal forces, plating thicknesses, and cycle lives are properties of exact part numbers and belong to their datasheets.

## Sources

[^eia36423]: EIA-364-23, *Low Level Contact Resistance Test Procedure for Electrical Connectors and Sockets* — the connector industry's standard LLCR method, adopted for use by the U.S. Department of Defense (DLA-hosted adoption notice: <https://weaponssupportapps.dla.mil/Downloads/MilSpec/Docs/EIA/eia364-23.pdf> — the DLA MilSpec portal migrated to this hostname from landandmaritimeapps.dla.mil in August 2026). Current edition E (2024-08) listing: <https://www.dinmedia.de/en/standard/eia-364-23e/383800335>. Record the edition your program requires.

[^llcr]: Samtec, "Understanding Low Level Contact Resistance (LLCR)" — manufacturer engineering explainer describing the LLCR measurement's limits of ~20 mV / 100 mA and why the levels are kept below film-breakdown. <https://blog.samtec.com/post/understanding-low-level-contact-resistance-llcr/>

[^omron]: Omron, relay technical information (microload switching guidance): minimum switching capacity / minimum applicable load as reference values (failure-rate P level per JIS C 5003), oxide-film contact failure at microloads, and gold-clad crossbar/bifurcated contacts recommended for microload duty. Distributor-hosted copy of Omron's relay technical documentation, labeled as such: <https://www.mouser.com/pdfDocs/omronrelayprecautions.pdf>; Omron FAQ on oxide-film failure during microload switching: <https://components.omron.com/us-en/faq/relays/FAQE10082>

[^goldrules]: AMP/Tyco Electronics, *Golden Rules: Guidelines for the Use of Gold on Connector Contacts* — gold for low-level/dry-circuit duty, gold-flash limitations, and Rule 12: gold contacts should not be mated to tin contacts (fretting; tin transfer to and oxide buildup on the gold surface). Third-party-hosted copy of the manufacturer whitepaper, labeled as such: <https://www.ramoem.com/uploads/4/4/0/7/44075859/gold_rules.pdf>

[^tincmd]: Tyco Electronics (orig. AMP), *The Tin Commandments: Guidelines for the Use of Tin on Connector Contacts* — tin's fracture/extrusion conduction mechanism and its conditions: ~100-gram-class contact normal force, mechanically stable mated interfaces, contact lubrication, adequate coating thickness, no continuous high-temperature service. Third-party-hosted copy of the manufacturer whitepaper, labeled as such: <https://www.ramoem.com/uploads/4/4/0/7/44075859/tin_commandments.pdf>

[^goldtin]: Engineering-press treatment of the mixed-plating rule, consistent with the whitepapers above: "Gold or Tin Contacts? Just don't mate them together," Microcontroller Tips (labeled press coverage, not design authority). <https://www.microcontrollertips.com/gold-tin-contacts-just-dont-mate-together/>
