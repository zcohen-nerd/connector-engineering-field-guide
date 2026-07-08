---
id: families
title: "Common Hobby Connector Families"
description: "Field notes on the connectors hobby projects actually meet — Dupont headers, JST series, Qwiic/STEMMA QT, servos, XT power, terminals, barrel jacks, USB, IDC."
slug: /hobby/families
sidebar_label: Overview
---

# Common Hobby Connector Families

Capsule field notes on the families hobby projects actually meet: what the marketplace calls them, what they really are, and what bites. Pitches cited on [JST Is Not One Connector](jst-is-not-one-connector.md) carry sources; everything else here is orientation — **verify the exact part's drawing/datasheet before relying on it**, and treat all current capability as *source needed* unless you're holding the datasheet ([power vs signal](power-vs-signal.md)).

## Dupont / 0.1 inch headers

- **Marketplace names:** Dupont, jumper wires, 2.54 mm housings, breadboard wires.
- **What it is:** the generic 0.1 in (2.54 mm) pin-header ecosystem — square pins, friction-fit crimp sockets in snap-together housings. "Dupont" is a folk name, not a current manufacturer designation; quality varies wildly between suppliers.
- **Watch for:** no positive latch (vibration walks them off), no polarization unless you add it, contact retention varying kit to kit, and the temptation to run real power through them. Great for breadboards and bench prototypes; a liability on anything that moves.
- **Full page:** [Dupont / 0.1 Inch Headers](dupont-headers.md).

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
- **Watch for:** SH contacts are tiny — buy pre-crimped cables rather than crimping; don't confuse with GH (1.25 mm, latched); Grove (Seeed) is a *different* ecosystem with a different, larger connector — verify the vendor pinout and connector documentation before mixing ecosystems.
- **Full page:** [JST-SH, Qwiic, and STEMMA QT](jst-sh-qwiic-stemma.md).

## JST-GH

- **Marketplace names:** GH, "Pixhawk connector," drone cable.
- **What it is:** 1.25 mm-pitch wire-to-board family **with a positive latch** — common in drones/flight controllers and embedded gear that vibrates.
- **Watch for:** confusion with SH (1.0 mm, no latch) and with generic 1.25 mm "Molex PicoBlade-style" connectors; they are different families.

## JST-SM and LED string connectors

The inline wire-to-wire connector on LED strings, pixels, and prewired harnesses — important enough to get [its own page](jst-sm-led-connectors.md).

## JST-RCY / BEC-style battery leads

- **Marketplace names:** "JST connector" (unhelpfully), JST plug, BEC connector, micro LiPo plug.
- **What it is:** a small red wire-to-wire battery/power pair common on small RC packs and BEC leads. The genuine JST RCY series is documented — 2.5 mm pitch, 2-circuit, current wire-gauge-dependent — per the sourced table on [JST Is Not One Connector](jst-is-not-one-connector.md); marketplace "JST battery leads" may be RCY, a clone of it, or something else entirely.
- **Watch for:** this is the connector people most often mean by bare "JST" in RC contexts — which is exactly why the name is useless. Verify by drawing; check polarity.

## Servo connectors

- **Marketplace names:** servo plug, JR/Futaba-style, 3-pin Dupont.
- **What it is:** servo leads are commonly three-conductor signal / power / ground harnesses using 0.1-inch-class housings, but keying tabs, pin order, wire colors, and vendor conventions vary — verify the receiver/controller and servo documentation before powering.
- **Watch for:** friction fit only — vibration protection is on you; check the servo's stall current against the lead and wire gauge, not just "it's a servo plug."

## XT30, XT60, and XT90

- **Marketplace names:** XT connectors, battery connectors.
- **What it is:** a keyed, polarized DC power connector ecosystem commonly sold under XT30 / XT60 / XT90 names in RC and hobby battery wiring — sized XT30 → XT60 → XT90.
- **Watch for:** the digits loosely track a current class in common usage but **are not a design rating** — exact manufacturer, genuine-vs-clone status, current rating, wire gauge, and temperature limits must be verified from the actual part documentation *(source needed)*; they are unsealed; and like all power connectors they are **not load-break devices** — see the [energized-connector warning](../decision-paths/high-current-dc-power.md).
- **Full page:** [XT30, XT60, and XT90](xt-connectors.md).

## Screw terminals and spring terminals

- **What it is:** terminal blocks (fixed or pluggable), spring/lever types (Wago-style) — field-wireable, no crimping, great for power distribution and things you'll re-wire.
- **Watch for:** wire must match the terminal's gauge range; stranded wire in screw terminals wants ferrules; screws loosen under vibration — retorque or use spring types; these are not sealed and not strain-relieved by themselves.

## Barrel jacks

- **What it is:** the classic DC power plug (e.g. 5.5 mm OD × 2.1 or 2.5 mm ID are common sizes — verify yours).
- **Watch for:** multiple incompatible ID/OD combinations that all look alike; center-positive vs center-negative polarity conventions; low retention (they fall out); modest current capability — check the jack's rating, not the wall adapter's label.

## USB connectors

- **What it is:** USB-A/micro-B/USB-C as hobby power-and-data workhorses.
- **Watch for:** cheap cables with undersized conductors that drop volts under load; USB-C requiring pull-down resistors (or a PD negotiation) to get power from a C-to-C source — a bare breakout may read 0 V; connector current limits per the USB spec and the part's datasheet, not vibes. See the engineering track's [§12 consumer I/O coverage](../12-consumer-hobby-prototype-connectors.md).

## IDC ribbon connectors

- **What it is:** insulation-displacement connectors mass-terminating ribbon cable — the classic 2×N 0.1 in header on vintage computing, RepRap-era electronics, and parallel buses.
- **Watch for:** pin-1 orientation (the red stripe convention), strain relief clips, one-shot termination (re-clamping the same spot is unreliable), and pitch variants (1.27 mm ribbon vs the connector's 2.54 mm grid is by design — but smaller IDC systems exist).

---

Every family above obeys the same rules: [identify it properly](identify-unknown-connector.md), [measure the pitch](pitch.md), match [housing + contact + tooling](crimping.md), and [buy the actual mating part](buying-mating-parts.md).
