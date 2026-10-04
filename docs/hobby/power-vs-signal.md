---
id: power-vs-signal
title: "Power vs Signal Connectors"
description: "Signal connectors are not automatically power connectors. Current, heat, wire gauge, polarity, and fusing decide what a hobby connector can safely carry."
slug: /hobby/power-vs-signal
sidebar_label: Power vs Signal
---

# Power vs Signal Connectors

The most damaging hobby connector mistake isn't a bad crimp — it's pulling **power** through a connector that was chosen for **signals**. A logic line carries milliamps; LED strips, motors, heaters, and batteries carry amps, and amps make heat.

## The rules

- **A signal connector is not automatically a power connector.** The tiny connector that carries I2C happily will not carry a motor.
- **Voltage is not the whole story** — current and the heat it makes in contact resistance are what melt housings. A 5 V rail can be far more demanding than a 24 V sensor line.
- **Wire gauge must match both the load and the connector/contact.** Thick wire crimped into a tiny contact fails; thin wire on a big load overheats before the connector does.
- **Polarity and keying matter more on power.** A swapped signal line is a debugging session; swapped battery leads are smoke. Prefer keyed, polarized power connectors.
- **Fusing matters.** A battery can deliver enormous fault current; select source-side protection with suitable voltage, fault-current capability, and clearing behavior for the downstream wire and contacts.
- **Removable power connectors need strain relief** — a tug on a power lead should land on the housing/boot, never the crimp.
- **Don't pull power through tiny dev-board signal connectors** (Qwiic/SH-class, breadboard jumpers) unless the ecosystem explicitly designed for that current — check, don't assume.

Exact current limits are deliberately absent here: they belong to the exact contact, wire gauge, and datasheet — not to a family name or a listing title *(source needed per part)*.

![Three wiring rows: a dev board to a sensor through a small signal connector carrying milliamps, marked fine; a battery to a motor through the same small connector with heat marks at the contact, marked wrong; and a battery to a motor through a fused, keyed, current-rated power pair with thick wire, marked right](/img/diagrams/hobby-power-vs-signal.svg)

*The same instinct — "there's a connector in the drawer" — with three different outcomes. Amps get a rated, keyed pair, matched gauge, and a fuse near the source.*

## Which direction to look, by project

| Project | Connector direction |
|---|---|
| I2C sensor board | Qwiic/STEMMA QT/JST-SH ecosystem |
| Breadboard signal jumper | Dupont jumper |
| Addressable LED data | small signal connector acceptable |
| LED strip power injection | choose current-rated power wiring/connectors |
| RC battery | XT30/XT60/XT90-class connector depending on current |
| Servo | [servo connector](servo-connectors.md), but check current and wire gauge |
| Heated bed / hotend | current/temperature-rated connector or terminal system |

:::warning

Power connectors are also **not load-break devices**: don't unplug things under load, and don't assume touch safety on exposed battery contacts. When the amps get real, the engineering track's [high-current DC path](../decision-paths/high-current-dc-power.md) — including its energized-connector safety warning — is written for exactly this.

:::

A fuse or resettable protector needs more than an ampere value: check maximum system voltage, time/current behavior, available fault current, and the device's interrupting or maximum-fault capability. Coordinate it with the wire, contacts, and load. A PPTC resettable protector is not automatically interchangeable with a fuse; follow its application limits.

## The other direction: tiny signals through big contacts

A spare pole in a power connector still needs a signal-duty check.

- **A current rating does not establish low-level reliability.** Check contact resistance under low-level test conditions and after relevant environmental exposures.
- **Tin can work in dry circuits.** Contact force, wipe, lubrication where specified, and motion control matter. Gold resists oxidation but is not a guarantee against contamination or wear.
- **Re-plugging can mask a fault.** The mating wipe can temporarily clear debris; inspect and measure before disturbing a suspect interface where the diagnostic procedure permits.
- **Signal requirements go beyond current.** Check shielding, pair geometry, common-mode range, and the signal error budget, as well as retention and polarization.

Use a contact system supported by manufacturer evidence or application qualification. Missing public low-level data means ask and verify, not assume failure or success. The engineering track's [Low-Level Signals and Contact Design](../low-level-signal-contacts.md) explains the mechanisms.

Related: [JST-SM and LED strings](jst-sm-led-connectors.md) (power injection) · [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md).
