---
id: families
title: "Common Hobby Connector Families"
description: "Field notes on the connectors hobby projects actually meet — Dupont headers, JST series, Qwiic/STEMMA QT, servos, XT power, terminals, barrel jacks, USB, IDC."
slug: /hobby/families
sidebar_label: Overview
---

# Common Hobby Connector Families

Capsule field notes on the families hobby projects actually meet: what the marketplace calls them, what they really are, and what bites. Pitches cited on [JST Is Not One Connector](jst-is-not-one-connector.md) carry sources, and a few capsules below carry their own datasheet-level citations (WAGO's 221 ratings, Molex's FFC pitch classes); everything else here is orientation — **verify the exact part's drawing/datasheet before relying on it**, and treat all current capability as *source needed* unless you're holding the datasheet ([power vs signal](power-vs-signal.md)).

## Dupont / 0.1 inch headers

- **Marketplace names:** Dupont, jumper wires, 2.54 mm housings, breadboard wires.
- **What it is:** the generic 0.1 in (2.54 mm) pin-header ecosystem — square pins, friction-fit crimp sockets in snap-together housings. "Dupont" is a folk name, not a current manufacturer designation; quality varies wildly between suppliers.
- **Watch for:** no positive latch (vibration walks them off), no polarization unless you add it, contact retention varying kit to kit, and the temptation to run real power through them. Great for breadboards and bench prototypes; a liability on anything that moves.
- **Full page:** [Dupont / 0.1 Inch Headers](dupont-headers.md).

## Molex Micro-Fit 3.0 (and the Fit ladder)

- **Marketplace names:** Micro-Fit, "micro fit 3," MicroFit 3.0 — and, unhelpfully, just "Molex connector."
- **What it is:** the 3.0 mm-pitch **latching** crimp family that is the classic Dupont graduation: polarized housings, positive latch, TPA options, and one contact system serving wire-to-board, wire-to-wire, and panel-mount jobs. It sits on a ladder of lookalike siblings — Nano-Fit (2.5 mm), **Mini-Fit Jr. (4.2 mm — the ATX power connector)**, Mega-Fit (5.7 mm) — and none of them intermate.
- **Watch for:** eyeballed pitch (3.0 vs 4.2 mm is invisible in photos — [measure](pitch.md)); "micro-fit style" clone kits inheriting nothing from genuine figures; current set by the **terminal P/N**, not the family name; and standard terminals rated around **30 mating cycles** — it's a configuration interface, not a quick-disconnect.
- **Full page:** [Micro-Fit 3.0 deep dive](../micro-fit.md) (engineering track) — the Fit ladder, the terminal-set current story, the 30-cycle surprise, and TPA/keying discipline.

## JST-XH

- **Marketplace names:** XH, "JST 2.5," balance connector.
- **What it is:** 2.5 mm-pitch wire-to-board family with a friction-lock shroud — ubiquitous on 3D printers, LiPo balance leads, and budget electronics.
- **Watch for:** confusion with PH (2.0 mm) and VH (3.96 mm); balance-lead "XH" from marketplaces may be clone parts; contacts are XH-specific.
- **Full page:** [JST-XH](jst-xh.md).

## JST-PH

- **Marketplace names:** PH, "JST battery connector," "LiPo connector."
- **What it is:** 2.0 mm-pitch wire-to-board family — the small battery pigtail on many single-cell LiPos and dev boards (e.g. many Adafruit-style boards).
- **Watch for:** **polarity is not standardized across vendors** — batteries arrive with reversed pigtails, and plugging a reversed pack into a board is a classic dead-board story. Verify against the board's silkscreen, not the wire colors.
- **Full page:** [JST-PH](jst-ph.md).

## JST-SH, Qwiic, and STEMMA QT

- **Marketplace names:** SH, Qwiic cable, STEMMA QT cable, "1 mm JST."
- **What it is:** 1.0 mm-pitch wire-to-board family. The Qwiic (SparkFun) and STEMMA QT (Adafruit) I2C ecosystems standardize on a 4-pin 1.0 mm JST SH connector so sensor boards daisy-chain with no soldering — per the vendors' own documentation, cited on the full page.
- **Watch for:** SH contacts are tiny — buy pre-crimped cables rather than crimping; don't confuse with GH (1.25 mm, latched); Grove (Seeed) is a *different*, larger 2.0 mm ecosystem whose pinout varies by port type — sourced detail on the [full page](jst-sh-qwiic-stemma.md).
- **Full page:** [JST-SH, Qwiic, and STEMMA QT](jst-sh-qwiic-stemma.md).

## JST-GH

- **Marketplace names:** GH, "Pixhawk connector," drone cable.
- **What it is:** 1.25 mm-pitch wire-to-board family **with a positive latch** — common in drones/flight controllers and embedded gear that vibrates. It's the connector of the Pixhawk connector standard.
- **Watch for:** confusion with SH (1.0 mm, no latch) and with generic 1.25 mm "Molex PicoBlade-style" connectors; they are different families.
- **Full page:** [JST-GH](jst-gh.md) — the datasheet figures, the DF13-to-GH Pixhawk story, and the PicoBlade lookalike trap.

## JST-SM and LED string connectors

The inline wire-to-wire connector on LED strings, pixels, and prewired harnesses — important enough to get [its own page](jst-sm-led-connectors.md).

## JST-RCY / BEC-style battery leads

- **Marketplace names:** "JST connector" (unhelpfully), JST plug, BEC connector, micro LiPo plug.
- **What it is:** a small red wire-to-wire battery/power pair common on small RC packs and BEC leads. The genuine JST RCY series is documented — 2.5 mm pitch, 2-circuit, current wire-gauge-dependent — per the sourced table on [JST Is Not One Connector](jst-is-not-one-connector.md); marketplace "JST battery leads" may be RCY, a clone of it, or something else entirely.
- **Watch for:** this is the connector people most often mean by bare "JST" in RC contexts — which is exactly why the name is useless. Verify by drawing; check polarity.

## Servo connectors

- **Marketplace names:** servo plug, JR/Futaba-style, 3-pin Dupont.
- **What it is:** servo leads are three-conductor signal / power / ground harnesses in 0.1-inch-class housings with one de-facto pin order — **positive always on the center pin** — while keying tabs and wire colors vary by vendor. Verify the order at both ends against documentation before powering anyway: vintage-Airtronics leads and miswired no-name leads are the exceptions that burn.
- **Watch for:** friction fit only — vibration protection is on you; check the servo's stall current against the lead and wire gauge, not just "it's a servo plug."
- **Full page:** [Servo Connectors](servo-connectors.md) — the center-positive pin order, JR vs Futaba housings, the old-Airtronics trap, and the stall-current math.

![An SG90 micro servo with its three-wire lead ending in a 3-pin 0.1-inch-class servo plug](/img/photos/servo-sg90-lead.jpg)

*The classic micro-servo lead: three conductors into a 0.1-inch-class housing — verify pin order against *your* receiver, not the wire colors. Photo: [Suyash Dwivedi](https://commons.wikimedia.org/wiki/File:Tower_Pro_SG90_micro_servo_motor.jpg), CC BY-SA 4.0, via Wikimedia Commons.*

## XT30, XT60, and XT90

- **Marketplace names:** XT connectors, battery connectors.
- **What it is:** a keyed, polarized DC power connector ecosystem commonly sold under XT30 / XT60 / XT90 names in RC and hobby battery wiring — sized XT30 → XT60 → XT90.
- **Watch for:** per AMASS's own documentation **the digits are the *momentary* current — continuous is half or less** (sourced table on the [full page](xt-connectors.md)); clone quality varies and genuine-part figures don't transfer; they are unsealed; and like all power connectors they are **not load-break devices** — see the [energized-connector warning](../decision-paths/high-current-dc-power.md).
- **Full page:** [XT30, XT60, and XT90](xt-connectors.md). For everything else on a battery — Deans/T-plug, EC3/EC5, Traxxas-style, Tamiya-style, bullets, Powerpole — see the [RC battery connector landscape](rc-battery-connectors.md).

## Anderson Powerpole

- **Marketplace names:** Powerpole, Anderson connectors, PP15/45, "Anderson-style."
- **What it is:** a **genderless** single-pole DC power system — one PP15/45 housing accepts 15/30/45 A contacts, and poles dovetail into whatever multi-pole blocks you need. The ham-radio, robotics, and DC-distribution standard.
- **Watch for:** housing color is identification only (every color mates with every color), so **your assembly convention is the only polarity protection** — build every pair one way and pin it; unsealed; not load-break; clones get the contact spring wrong.
- **Full page:** [Anderson Powerpole](anderson-powerpole.md) — the PP15/45 datasheet numbers, the family ladder to 350 A-class, the ARES "Red Right, Tongue Top" standard, and why it's the wrong answer for signal.

## Screw terminals and spring terminals

- **What it is:** terminal blocks (fixed or pluggable), spring/lever types (Wago-style) — field-wireable, no crimping, great for power distribution and things you'll re-wire. A sourced anchor for the lever class: WAGO's own [221-series family page](https://www.wago.com/gb/products/electrical-interconnections/discover-installation-terminal-blocks-and-connectors/221) rates the 4 mm² class at 32 A / 450 V IEC (20 A / 600 V UL) — and a 6 mm², 41 A-class 221-6xx line exists for heavier work. Clone "Wago-style" levers inherit none of that; full detail on the [terminals page](screw-terminals.md).
- **Watch for:** wire must match the terminal's gauge range; stranded wire in screw terminals wants ferrules; screws loosen under vibration — retorque or use spring types; these are not sealed and not strain-relieved by themselves.
- **Full page:** [Screw Terminals, Spring Clamps, and Ferrules](screw-terminals.md) — the clamp-style map, torque and gauge-range discipline, and the never-tin rule.

![A transparent WAGO 221 lever connector next to a stripped stranded wire](/img/photos/wago-221-lever.jpg)

*A lever-type splicing connector — tool-free, re-wireable, and rated on its own datasheet. This one marks 20 A / 300 V on the housing: its Japanese JET listing, a third rating system alongside the IEC and UL figures above — same part, three certification regimes. Photo: [Lucasbosch](https://commons.wikimedia.org/wiki/File:Wago_221-413_splicing_connector_with_stranded_wire.jpg), CC BY-SA 4.0, via Wikimedia Commons.*

## Barrel jacks

- **What it is:** the classic DC power plug (e.g. 5.5 mm OD × 2.1 or 2.5 mm ID are common sizes — verify yours).
- **Watch for:** multiple incompatible ID/OD combinations that all look alike; center-positive vs center-negative polarity conventions; low retention (they fall out); modest current capability — check the jack's rating, not the wall adapter's label.
- **Full page:** [Barrel Jacks and Polarity Traps](barrel-jacks.md) — the size pairs, the polarity symbol decoded, the switched pin, and real ratings.

![A panel-mount barrel jack facing a 5.5 by 2.5 millimeter barrel plug, center pin visible](/img/photos/barrel-jack-pair.jpg)

*A 5.5 × 2.5 mm pair face to face — the center pin diameter is exactly what the look-alikes get wrong. Photo: [Martin Meise](https://commons.wikimedia.org/wiki/File:Hohlstecker_und_Hohlbuchse_5,5x2,5.jpg), CC BY-SA 3.0, via Wikimedia Commons.*

## USB connectors

- **What it is:** USB-A/micro-B/USB-C as hobby power-and-data workhorses.
- **Watch for:** cheap cables with undersized conductors that drop volts under load; USB-C requiring pull-down resistors (or a PD negotiation) to get power from a C-to-C source — a bare breakout may read 0 V; connector current limits per the USB spec and the part's datasheet, not vibes. See the engineering track's [§12 consumer I/O coverage](../12-consumer-hobby-prototype-connectors.md).
- **Full page:** [USB-C Power for Hobby Projects](usb-c-power.md) — the 5.1 kΩ resistor rule, the source's advertisement, the PD ladder to 240 W, and the cable's role.

## IDC ribbon connectors

- **What it is:** insulation-displacement connectors mass-terminating ribbon cable — the classic 2×N 0.1 in header on vintage computing, RepRap-era electronics, and parallel buses.
- **Watch for:** pin-1 orientation (the red stripe convention), strain relief clips, one-shot termination (re-clamping the same spot is unreliable), and pitch variants (1.27 mm ribbon vs the connector's 2.54 mm grid is by design — but smaller IDC systems exist).

![An open 10-position IDC ribbon connector showing the rows of insulation-displacement blade contacts](/img/photos/idc-10-ribbon.jpg)

*Inside an IDC-10 before termination: the blade contacts pierce the ribbon's insulation in one clamping stroke — which is why re-clamping the same spot is unreliable. Photo: [Retired electrician](https://commons.wikimedia.org/wiki/File:IDC-10_female_connector_%2801%29.jpg), CC0, via Wikimedia Commons.*

## FFC / FPC flat-flex cables

- **Marketplace names:** flat flex, FFC, FPC, ribbon cable (confusingly), "Pi camera cable," ZIF cable.
- **What it is:** a flat flexible cable ending in bare printed contacts that clamp into a ZIF (zero-insertion-force) latched connector on the board — the Raspberry Pi camera/display interface and the inside of most consumer electronics. The cable end *is* the contact; 1.0 mm and 0.5 mm are the common pitch classes per [Molex's Easy-On FFC/FPC family](https://www.molex.com/en-us/products/connectors/ffc-fpc-connectors) (4–80 circuits) — measure, and verify against the connector drawing.
- **Watch for:** contacts-up vs. contacts-down orientation (both cable types exist and the connector dictates which); same-end vs. opposite-end contact versions of "the same" cable; the fragile flip- or slide-style ZIF latch; low insertion-cycle expectations; and creasing — a sharp fold can crack conductors invisibly.
- **Boards that mount rigidly to each other** may not need a cable at all — see the [board-to-board path](../decision-paths/board-to-board.md).

## GX and SP-style "aviation / waterproof" circulars

- **Marketplace names:** aviation plug, aviation connector, GX12 / GX16 / GX20, SP13 / SP17 / SP21 "waterproof connector."
- **What it is:** inexpensive marketplace circulars — GX-style are small threaded metal-shell panel connectors (the number is the nominal shell diameter in mm); SP-style are plastic shells sold with IP claims. Genuinely useful for hobby panels and quick disconnects *when treated skeptically*.
- **Watch for:** "aviation plug" is a naming trap, not a specification ([How to Search](../00-how-to-search-for-connectors.md) uses it as the canonical vague label); current and IP claims are listing-grade until proven; sealing, where real, is conditional on gaskets, panel torque, and cable fit; and with no controlling drawing, clone-to-clone mating is never guaranteed.
- **If the "waterproof" actually matters,** graduate to a datasheet-rated family: [rugged on a budget](../decision-paths/rugged-on-a-budget.md) or [M12-class](../decision-paths/industrial-sensor.md).

---

Every family above obeys the same rules: [identify it properly](identify-unknown-connector.md), [measure the pitch](pitch.md), match [housing + contact + tooling](crimping.md), and [buy the actual mating part](buying-mating-parts.md).
