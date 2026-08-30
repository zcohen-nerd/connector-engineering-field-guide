---
id: glossary
title: Glossary
description: "A shared glossary for both guide tracks — pitch, housing, contact vs terminal, plug/receptacle, male/female ambiguity, crimp anatomy, clone vs genuine."
slug: /glossary
sidebar_label: Glossary
---

# Glossary

Here are the connector terms both the [Hobby](hobby/index.md) and [Professional / Industrial](engineering-home.md) tracks use. Each one links to the page that goes deeper. Three warnings before the alphabet starts: **"male/female" is ambiguous** because housing gender and contact gender are separate; **"plug" and "receptacle" change meaning between vendors**; and **marketplace names are much less trustworthy than drawings**. Say exactly what you mean and check the mating diagram. If you're doing Week 1 of the [30-Day Plan](14-thirty-day-learning-plan.md), use this as a starting point, then rewrite 30 of these in your own words.

**360° shield termination** — bonding the cable shield circumferentially into the backshell/shell instead of through a pigtail wire; keeps shield impedance low across frequency. See [EMI, shielding, and bonding](05-connector-anatomy.md).

**AS39029** — the SAE specification (formerly M39029) for the removable crimp contacts used in MIL-DTL-38999 and related mil circulars. See [Contact sizes and current](07-mil-dtl-38999.md).

**Authorized / franchised distributor** — a distributor selling under agreement with the manufacturer: factory traceability, manufacturer warranty, and PCN/EOL notices flow. The default channel for released hardware. See [Lifecycle & Procurement](lifecycle-and-procurement.md).

**Backshell** — the rear accessory that provides strain relief, shield termination, sealing, and cable exit angle. Not optional. See [Connector Anatomy](05-connector-anatomy.md).

**Blind mate** — mating a connector the operator can't see; needs lead-in, float, and pin-length stagger. See [Mating sequence and blind mate](05-connector-anatomy.md).

**Broker / independent distributor** — a distributor operating outside manufacturer agreements; a legitimate channel for obsolete/allocated parts under counterfeit-avoidance controls, but traceability must be verified per lot. See [Lifecycle & Procurement](lifecycle-and-procurement.md).

**Bundle derating** — reducing allowable per-contact current as more contacts are energized, because packed contacts heat each other. See [How to read a derating curve](04-connector-selection-workflow.md).

**Coding (M12)** — the keyway geometry (A/B/D/X/S/T/K/L) that maps an M12 connector to its application class and prevents cross-mating. See [M12 Deep Dive](08-m12.md).

**Connection type** — wire-to-board (housing on wires, header on a PCB), wire-to-wire (two cable halves mate in-line), board-to-board (stacking/mezzanine), or panel/feedthrough. The first sorting question for any unknown connector. See the [identification workflow](connector-identification.md).

**Connector family / series** — the manufacturer-defined system of housing + contacts + pitch + latch + tooling + mating part, controlled by a drawing. The unit of compatibility: parts interchange within a family, not between lookalikes. See [The Big Idea](hobby/big-idea.md).

**Connector saver** — a sacrificial adapter left on a high-cycle test port so mating wear lands on the cheap replaceable part. See [RF orientation](02-major-connector-categories.md).

**Contact / terminal** — two names for the same part: the metal element crimped onto the wire and inserted into the housing. "Terminal" dominates kit and marketplace language; "contact" dominates datasheets. Family-specific either way. See [Crimping](hobby/crimping.md).

**Contact resistance** — the milliohm-level resistance through a mated contact pair; rises with cycles and fretting, critical for low-level signals. See [Reading Datasheets](06-reading-datasheets.md) and [Low-Level Signal Contacts](low-level-signal-contacts.md).

**Contact size** — the numbered physical contact size (22D, 20, 16, 12, 8…); smaller number = larger contact = more current and larger wire. See [Contact sizes and current](07-mil-dtl-38999.md).

**COTS** — commercial off-the-shelf; purchasable as a standard catalog item rather than qualified/QPL hardware. See [Production reality](04-connector-selection-workflow.md).

**Creepage / clearance** — creepage is the shortest path along a surface between two conductors; clearance is the shortest through-air gap. Both drive voltage rating. See [Electrical requirements](04-connector-selection-workflow.md).

**Crimp** — terminating a wire by compressing it into a contact barrel with a calibrated tool; the standard for rugged harnesses. See [Termination types](05-connector-anatomy.md) and, for the hobby-scale version, [Crimping Without Losing Your Mind](hobby/crimping.md).

**Current rating** — a screening number tied to test conditions, never universal permission: the real limit depends on the exact contact, wire gauge, loaded positions, ambient temperature, and allowable temperature rise. See the derating-curve entry, [Power vs Signal](hobby/power-vs-signal.md), and [Selection Workflow §2](04-connector-selection-workflow.md).

**Derating curve** — the manufacturer plot of allowable current vs. loaded-contact count and temperature; the number you actually design to. See [How to read a derating curve](04-connector-selection-workflow.md).

**Dry circuit** — a circuit whose voltage and current are too low to break down the films that grow on contact surfaces, so the contact must be reliable without electrical help — noble (gold-class) plating, adequate force, and wipe. Most measurement and low-voltage signal lines qualify. See [Low-Level Signal Contacts](low-level-signal-contacts.md).

**Dust cap** — the cover that protects an unmated connector from dirt, water, and pin damage; belongs on the BOM. See [Connector Anatomy](05-connector-anatomy.md).

**DWV / hi-pot** — dielectric withstanding voltage; the survivable overvoltage test, *not* the continuous working voltage. See [Reading Datasheets](06-reading-datasheets.md) and the [Qualification Plan Template](tools/connector-qualification-template.md).

**EOL / last-time buy (LTB)** — a manufacturer's discontinuance of a part, announced with final-order and final-ship dates; the decision point for a bridge buy, an approved alternate, or a redesign. See [Lifecycle & Procurement](lifecycle-and-procurement.md).

**First article inspection (FAI)** — verifying that the first built unit(s) of a configuration match the complete drawing package before performance results count as evidence; AS9102 is the aerospace formalization. See the [Qualification Plan Template](tools/connector-qualification-template.md).

**Fretting** — micro-motion wear that oxidizes contact surfaces under vibration, causing intermittent high resistance. See [Common failure points](01-what-connectors-do.md) and [Low-Level Signal Contacts](low-level-signal-contacts.md).

**Front-release / rear-release** — which side the contact insertion/extraction tool works from; rear-release (wire side) is the common 38999 arrangement. See [Termination types](05-connector-anatomy.md).

**Genuine vs. clone / "compatible" / "-style"** — a clone or "-style" part resembles a named family without being the genuine article; it may mate perfectly, loosely, or not at all, with no drawing to arbitrate. Fine when chosen knowingly for a prototype; a trap when assumed. See [JST Is Not One Connector](hobby/jst-is-not-one-connector.md) and [Marketplace Kits](hobby/connector-kits.md).

**Ground-first sequencing** — staggered contacts so ground mates first and breaks last, preventing power-before-ground faults. See [Mating sequence and blind mate](05-connector-anatomy.md).

**HCP / RADSOK** — high-current power contact technologies (RADSOK = Amphenol's hyperboloid contact) for loads standard contacts can't carry. See [Quick-Reference A3](appendix/quick-reference-tables.md).

**Hermetic** — a gas-tight connector (often glass-sealed, solder-terminated) for pressure boundaries; distinct from merely IP-rated. See [Solder-cup quality](05-connector-anatomy.md).

**Housing** — the insulating body that holds the contacts. In most families it is ordered *separately* from the contacts, and its gender is independent of theirs. See [Buying the Right Mating Parts](hobby/buying-mating-parts.md).

**ICD** — interface control document; the released definition of an interface (part numbers, pinout, limits, assembly) that procurement and manufacturing build from. See [Configuration-control item](01-what-connectors-do.md).

**IDC** — insulation-displacement contact; a blade cuts through insulation to terminate, common for ribbon cable. See [Termination types](05-connector-anatomy.md).

**Insert arrangement** — the defined layout of contact count, sizes, and positions inside a shell; the drawing that actually controls what a connector carries. See [Insert arrangements](07-mil-dtl-38999.md).

**Insulation diameter** — the wire jacket's outside diameter. Crimp insulation wings and wire seals are sized for a *range* of it, independent of conductor gauge — the second number to check before crimping. See [Crimping](hobby/crimping.md).

**Insulation resistance** — leakage resistance through the insulator (MΩ/GΩ); the first parameter to drop after moisture ingress. See [Reading Datasheets](06-reading-datasheets.md).

**IO-Link** — a point-to-point digital sensor/actuator protocol carried over standard unshielded 3–4-wire sensor cabling. See [M12 coding table](08-m12.md).

**IP rating** — ingress-protection code (IEC 60529); applies to the tested, correctly-mated assembly, not automatically the system. See [Quick-Reference A1](appendix/quick-reference-tables.md).

**IP69K** — the high-pressure/high-temperature washdown rating from ISO 20653 (not IEC 60529, which has the IPx9 equivalent). See [Quick-Reference A1](appendix/quick-reference-tables.md).

**Jam nut / flange mount** — the two panel-mount styles: single rear nut (compact, can rotate) vs. perimeter bolts (rigid, better gasket control). See [Jam nut vs. flange](05-connector-anatomy.md).

**Keying / polarization** — mechanical features that prevent mis-mating; alternate key positions stop identical connectors from cross-mating. See [Service classes and keying](07-mil-dtl-38999.md).

**Latch — friction vs. positive** — friction fits hold by grip alone (Dupont, servo leads) and can walk off under vibration; a positive latch clicks in and must be deliberately released. Which one a connector has is both an identification clue and a reliability decision. See [Identify an Unknown Connector](hobby/identify-unknown-connector.md).

**Less-contact** — a connector part number shipped without contacts; contacts and tooling must be ordered separately. See [What a full 38999 interface includes](07-mil-dtl-38999.md).

**Male / female** — ambiguous by itself: the *housing* and the *contacts* each have a gender, and they often don't match intuition (a "female" housing can hold pin contacts, and vice versa). Say which you mean — or use pin/socket for contacts and plug/receptacle for bodies. See the pin/socket entry below and [Connector Anatomy](05-connector-anatomy.md).

**Mating cycles** — the rated number of connect/disconnect cycles; design with margin below it, and remember it is not a ruggedness measure. See [Quick-Reference A4](appendix/quick-reference-tables.md).

**Mating pair** — the two halves designed to mate, defined by the family drawing. Buy both halves deliberately; never discover the mate by trial. See [Buying the Right Mating Parts](hobby/buying-mating-parts.md).

**Mezzanine (board-to-board)** — a connector pair joining two parallel PCBs at a defined mated stack height; ordered as a matched header/receptacle pair from one family's height table. See [Board-to-board](decision-paths/board-to-board.md).

**NRND** — not recommended for new designs; the lifecycle state between active and end-of-life. Existing designs are supported, but the clock is running. See [Lifecycle & Procurement](lifecycle-and-procurement.md).

**Obsolescence / DMSMS** — the loss or impending loss of a part's manufacturing sources (DoD language: diminishing manufacturing sources and material shortages); managed proactively with multi-source families and recorded alternates, or reactively at much higher cost. See [Lifecycle & Procurement](lifecycle-and-procurement.md).

**Open-barrel crimp** — the common stamped-terminal crimp style with two wing sets: **conductor wings** folded onto bare strands (the electrical joint) and **insulation wings** gripping the jacket (the strain relief). Both must be formed correctly. See [Crimping](hobby/crimping.md).

**Panel mount** — a connector mounted through an enclosure wall (jam nut, flange, or snap-in), making the enclosure part of the interface — panel sealing and cutout included. See [Connector Anatomy](05-connector-anatomy.md).

**PCN** — product/process change notification; the manufacturer's notice that a part is changing (material, plating, site, marking) while keeping its part number. Harmless to most users — except when it touches your qualified configuration. See [Lifecycle & Procurement](lifecycle-and-procurement.md).

**Pigtail** — a shield gathered into a short wire instead of a 360° bond; inductive, so it radiates at RF. See [EMI, shielding, and bonding](05-connector-anatomy.md).

**Pin / socket vs. plug / receptacle** — contact *gender* (electrical) vs. body *style* (mechanical); all four combinations exist, so verify both on the part number. See [Connector Anatomy](05-connector-anatomy.md).

**Pitch** — the center-to-center spacing between adjacent contacts; the most discriminating easy measurement on any connector. Measure across the whole row and divide by N−1. See [Pitch: The Number That Saves You](hobby/pitch.md).

**Plug / receptacle** — body *styles* (roughly: the free/cable half vs. the fixed half), but vendors do not use the words consistently — verify against the drawing's mating diagram, not the terminology. Independent of contact gender. See [Connector Anatomy](05-connector-anatomy.md).

**Position / circuit / pin count** — three names for the number of contact cavities in a housing, loaded or not. Count all of them when identifying a connector. See the [identification workflow](connector-identification.md).

**Pre-crimped lead** — a factory-terminated wire you insert into a housing yourself; often the most reliable hobby choice for tiny contacts (SH/GH/PH class). See [Crimping](hobby/crimping.md).

**QPL** — Qualified Products List; the register of parts qualified to a military specification. Required when qualification matters, and a second-source consideration always. See [Production reality](04-connector-selection-workflow.md).

**Qualification testing** — design-level proving of one documented connector configuration (parts, plating, wire, seals, tooling, process), done once per the governing spec's rules — distinct from *acceptance* testing, which verifies every built unit or lot. See the [Qualification Plan Template](tools/connector-qualification-template.md) and the [Harness Inspection Checklist](tools/harness-inspection-checklist.md).

**Requalification** — re-opening qualification evidence when the qualified configuration changes: a PCN touching form/fit/function, an alternate or vendor change, a new site or plating. The governing spec decides the scope; the question is never optional. See the [Qualification Plan Template](tools/connector-qualification-template.md) and [Lifecycle & Procurement](lifecycle-and-procurement.md).

**RMF** — Molex's Reduced Mating Force Micro-Fit terminals; a mating-force feature, with current still set by the exact terminal P/N. See [Micro-Fit deep dive](micro-fit.md), [Comparison Matrix](tools/connector-comparison-matrix.md).

**Scoop-proof** — shell geometry where the outer shell engages before the pins, so a misaligned plug can't scoop across and bend them. See [38999 series distinctions](07-mil-dtl-38999.md).

**Sealing plug** — the plug that fills an unused contact cavity in a sealed connector; an unplugged cavity is an open hole. See [Wire seals](05-connector-anatomy.md).

**Service class** — the 38999 designator controlling shell material, plating, and environmental capability. See [Service classes and keying](07-mil-dtl-38999.md).

**Shield / drain wire** — the cable's braid/foil EMI barrier, and the bare conductor that terminates a foil shield. Termination strategy (one end / both ends / 360°) is system- and frequency-dependent — see [EMI, shielding, and bonding §5.7](05-connector-anatomy.md).

**Shrouded header** — a pin header surrounded by a plastic wall, adding polarization, latch engagement, and pin protection that bare 0.1 in headers lack. See [Internal PCB harnessing](decision-paths/internal-pcb-harnessing.md).

**Slash sheet** — the numbered detail sheet under a military specification (e.g. `D38999/26…`) that defines a specific connector style. See [Decoding a part number](07-mil-dtl-38999.md).

**Solder cup** — a solder-terminated contact with a cup behind it; reworkable but skill-sensitive and strain-relief-dependent. See [Solder-cup quality](05-connector-anatomy.md).

**Stack height (mated height)** — the board-to-board distance a mated connector pair sets between two PCBs; the defining board-to-board spec, offered in multiple heights under near-identical part numbers — order the matched pair to it. See [Board-to-board](decision-paths/board-to-board.md).

**Strain relief** — the hardware that transfers cable load into the connector body so the contacts never carry it. See [Connector Anatomy](05-connector-anatomy.md).

**Temperature rise** — the heating above ambient a contact system is allowed at its rated current; the hidden variable behind every current rating and derating curve. See [How to read a derating curve](04-connector-selection-workflow.md).

**TPA** — Terminal Position Assurance; a secondary lock confirming every contact is fully seated before the connector can mate. See [Major Connector Categories](02-major-connector-categories.md).

**Traceability / CoC** — the documented chain from factory to your dock (certificates of conformance, lot records) that authorized distribution provides by default and broker purchases must prove per lot. See [Lifecycle & Procurement](lifecycle-and-procurement.md).

**Voltage rating** — a class figure tied to insulation, spacing, and test conditions; working voltage and withstand voltage (DWV) differ, and AC/DC/altitude assumptions matter. Verify the datasheet. See [Reading Datasheets](06-reading-datasheets.md).

**Wedgelock** — the separate wedge (orange on gray DEUTSCH DT plugs, green on receptacles) that locks contacts into their cavities as the secondary retention; a DT-family connector without it has no retention system. Usually a separate line item. See [DEUTSCH Deep Dive](deutsch.md).

**Wetting current** — the relay/switch-world concept of the minimum load a film-forming contact needs to stay reliable; below it, tin-class contacts drift intermittent. Gold-class contacts effectively have none in clean service — the reason they own dry-circuit duty. See [Low-Level Signal Contacts](low-level-signal-contacts.md).

**Wire gauge (AWG / mm²)** — conductor size. Every contact supports a defined gauge range, and both the electrical load and the crimp quality depend on staying inside it. See [Crimping](hobby/crimping.md).

**Wire seal / grommet** — the per-contact seal sized for a specific wire-OD range; undersized wire defeats the whole connector's sealing. See [Wire seals](05-connector-anatomy.md).
