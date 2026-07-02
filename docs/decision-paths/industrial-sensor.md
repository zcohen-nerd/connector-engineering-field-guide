---
id: industrial-sensor
title: "Pick a connector for an industrial sensor"
description: "Pick a connector for an industrial sensor: M12 A-coded and M8 starting points, the specs that decide it, common traps, and the documentation bundle."
slug: /decision-paths/industrial-sensor
sidebar_label: Industrial sensor
sidebar_position: 1
---

# Pick a connector for an industrial sensor

A sealed cable to a DC sensor or actuator in factory or field automation — the most common industrial connector job there is.

## Use this when

- You are wiring a DC sensor, actuator, or IO-Link device.
- The connection lives in a factory or field environment and needs sealing and a positive coupling.
- You want a standard, easily-sourced ecosystem with molded cordsets available.

## Avoid this when

- You need gigabit-class Ethernet — see [Rugged Ethernet](rugged-ethernet.md).
- You need real power delivery — see [High-current DC power](high-current-dc-power.md).
- The connection is internal to a PCB — see [Internal PCB harnessing](internal-pcb-harnessing.md).

## Families to start with

- **M12 A-coded** — 4-pin A-coded is extremely common for basic DC sensors; 3/4/5/8-pin variants cover most sensor/actuator/IO-Link needs.
- **M8** — for small sensors where an M12 is physically too large (less current, fewer pins, smaller cable).

See the [M12 deep dive](../08-m12.md) for coding and pinout detail.

## Search terms

- `M12 A-coded 4-pin panel mount sealed sensor connector`
- `M8 sensor connector molded cordset`

## Specs to check

- Exact **coding** and **pinout** — not all 4-pin M12 pinouts are the same.
- **Current** per contact — A-coded connectors are commonly in a low-single-digit-amp class, but the exact figure is connector/cable/temperature dependent; confirm the datasheet (see [M12 §8.1](../08-m12.md)).
- **IP rating** of the *complete, mated* assembly — and whether the unmated panel side is sealed only when capped.
- **Coupling torque** — an example value only; use the manufacturer's number and a torque tool.
- **Cable OD** vs. the gland range, and **vibration** requirement.

## Parts people forget

- The **mating cordset / connector** (both halves).
- A **cap** for the unmated panel connector.
- The **torque spec and tool**.

See [What People Forget](../what-people-forget.md) for the full list.

## Common traps

- Assuming all 4-pin M12 pinouts are identical (they aren't).
- Using an A-coded port where the application actually needs D-, X-, or a power coding.
- Assuming the IP rating applies while the connector is unmated.

## Questions to ask a vendor/FAE

- What is the exact mating part, and is it available as a molded cordset in the lengths I need?
- What is the cable OD range for the field-wireable version?
- Is the IP rating stated mated, unmated, capped, or panel-mounted?
- What coupling torque is specified?
- What alternate coding/keying options exist so adjacent cables can't be swapped?

## Example documentation bundle

- A [connector selection table](../tools/connector-comparison-matrix.md) row with the requirement, candidates, and choice.
- A source-controlled **pinout**.
- A [cable drawing](../tools/cable-drawing-template.md) and an [ICD entry](../tools/connector-icd-template.md).

Related: [Decision Examples](../09-decision-examples.md) · [Selection Workflow](../04-connector-selection-workflow.md).
