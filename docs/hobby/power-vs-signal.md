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
- **Fusing matters.** A battery can deliver enormous fault current; a fuse or polyfuse near the source protects the wiring and connectors downstream.
- **Removable power connectors need strain relief** — a tug on a power lead should land on the housing/boot, never the crimp.
- **Don't pull power through tiny dev-board signal connectors** (Qwiic/SH-class, breadboard jumpers) unless the ecosystem explicitly designed for that current — check, don't assume.

Exact current limits are deliberately absent here: they belong to the exact contact, wire gauge, and datasheet — not to a family name or a listing title *(source needed per part)*.

## Which direction to look, by project

| Project | Connector direction |
|---|---|
| I2C sensor board | Qwiic/STEMMA QT/JST-SH ecosystem |
| Breadboard signal jumper | Dupont jumper |
| Addressable LED data | small signal connector acceptable |
| LED strip power injection | choose current-rated power wiring/connectors |
| RC battery | XT30/XT60/XT90-class connector depending on current |
| Servo | servo connector, but check current and wire gauge |
| Heated bed / hotend | current/temperature-rated connector or terminal system |

:::warning

Power connectors are also **not load-break devices**: don't unplug things under load, and don't assume touch safety on exposed battery contacts. When the amps get real, the engineering track's [high-current DC path](../decision-paths/high-current-dc-power.md) — including its energized-connector safety warning — is written for exactly this.

:::

Related: [JST-SM and LED strings](jst-sm-led-connectors.md) (power injection) · [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md).
