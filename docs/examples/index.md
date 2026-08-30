---
id: examples-index
title: "Examples"
description: "Worked connector examples derived from the guide's hands-on exercises — structure-first design packages you can adapt to your own project interfaces."
slug: /examples
sidebar_label: Overview
---

# Examples

These examples show the reasoning and paperwork, not magic numbers you can copy into your own design. Project-specific values stay `TBD` or are clearly marked as placeholders on purpose. The [Rugged Control Box](rugged-control-box.md) works through a whole external connector set, the [Connector Selection Packet](connector-selection-packet.md) takes a field-robot module to program-grade documentation, and the [M12 Sensor Interface](m12-sensor-interface.md) applies the sensor and Ethernet paths to one machine cell.

| Example | Shows | Based on |
|---|---|---|
| [Rugged Control Box](rugged-control-box.md) | Selecting and documenting the full external connector set for a small sealed enclosure — Exercise 1 worked end to end | [Exercise 1](../13-hands-on-exercises.md) |
| [Connector Selection Packet](connector-selection-packet.md) | A full worked packet for one rugged field-robot module — requirements → decision matrix → architecture → pinout → BOM → cable → ICD → review | [Rugged-on-a-budget](../decision-paths/rugged-on-a-budget.md) |
| [M12 Sensor Interface](m12-sensor-interface.md) | Selecting M12 codings for a sensor + industrial-Ethernet interface — candidates, rejections, and the service-model reasoning that decides it | [Industrial sensor](../decision-paths/industrial-sensor.md) + [M12 deep dive](../08-m12.md) |

:::note

Steal the structure, not the numbers. These aren't released designs, and they don't make ratings or part-number decisions for you. Your datasheets, standards, and program requirements still decide the real values.

:::
