---
id: decision-paths-index
title: "Decision Paths"
description: "Scenario-based connector decision paths that take a real interface problem and route you to a sane starting family, key specs, and documentation bundle."
slug: /decision-paths
sidebar_label: Overview
---

# Decision Paths

Start with the job in front of you. Each page takes one common “I need a connector here” problem and walks it toward a choice you can document and build:

- **Use this when / Avoid this when** — is this even the right scenario?
- **Families to start with** — where to point your search first
- **Search terms** — how to phrase it so the datasheet actually opens
- **Specs to check / Parts people forget / Common traps**
- **Questions to ask a vendor/FAE**
- **Example documentation bundle** — what "done" looks like

These are routing pages, not permission slips. They point you toward useful families and the questions that separate them, then hand you off to the deep dives and source documents. Verify every rating and part number against the real source before you use it.

![A group of M12 and M8 cordsets and panel receptacles showing several body styles within one industrial interface class](/img/photos/m12-m8-family.jpg)

*A decision path starts with the job, then narrows the family and configuration. Even the familiar M8/M12 sensor ecosystem spans different shell sizes, cable exits, and mounting styles. Photo: [Riep.](https://commons.wikimedia.org/wiki/File:M12_-_A.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via Wikimedia Commons.*

| Scenario | Start here |
|---|---|
| Sealed sensor/actuator cable in factory or field automation | [Industrial sensor](industrial-sensor.md) |
| Servo/motor power + encoder feedback cabling | [Motor + feedback cable](motor-feedback-cable.md) |
| Ethernet outside a protected enclosure | [Rugged Ethernet](rugged-ethernet.md) |
| Board-to-wire wiring inside an enclosure | [Internal PCB harnessing](internal-pcb-harnessing.md) |
| Two boards plugging directly into each other | [Board-to-board](board-to-board.md) |
| Better-than-hobby field wiring on a budget (makers going rugged) | [Rugged on a budget](rugged-on-a-budget.md) |
| Motors, batteries, PDUs — real DC power | [High-current DC power](high-current-dc-power.md) |
| Passing a circuit through a sealed enclosure wall | [Sealed enclosure feedthrough](sealed-enclosure-feedthrough.md) |
| Occasional debug / programming / service access | [Debug / service port](debug-service-port.md) |
| Compact, weight-critical high-reliability internal interface | [Micro-D / compact high-rel](micro-d.md) |
| Harsh-environment external I/O on defense/aero hardware | [Defense / rugged external I/O](defense-rugged-external-io.md) |
| Serviceable machine module — mixed power/signal/data | [Removable machine module](removable-machine-module.md) |
| Antenna, GPS, radio, or coax path | [RF / GPS / radio](rf-gps-radio.md) |

Family-level depth behind the paths lives in the deep dives: [MIL-DTL-38999](../07-mil-dtl-38999.md), [MIL-DTL-26482](../mil-dtl-26482.md), [M12/M8](../08-m12.md), [DEUTSCH](../deutsch.md), and [Molex Micro-Fit 3.0](../micro-fit.md).

:::note

Still turning a vague need into search terms? Start with [How to Search for Connectors](../00-how-to-search-for-connectors.md), then come back here. Matching or replacing a connector you already have? Use the [identification workflow](../connector-identification.md).

:::
