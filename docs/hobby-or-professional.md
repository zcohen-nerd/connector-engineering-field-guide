---
id: hobby-or-professional
title: "Hobby or Professional?"
description: "When the hobby guide is enough and when to move to the professional track — decided by consequence of failure, environment, documentation, and who builds it."
slug: /hobby-or-professional
sidebar_label: Hobby or Professional?
---

# Hobby or Professional?

Both tracks start from the same idea: a connector is a controlled interface. The split comes down to what happens when it fails, where it lives, and who has to build or fix it. If the [quick check on the homepage](index.md) didn't settle it, use this table.

| Situation | Use hobby guide | Use professional guide |
|---|---|---|
| Breadboard/dev-board experiment | Yes | Optional |
| One-off desk project | Yes | Optional |
| Student lab project | Yes | Optional |
| LED decoration | Yes | Maybe |
| High-current LED installation | Maybe | Yes |
| Outdoor sensor | Maybe | Yes |
| Robot exposed to vibration | Maybe | Yes |
| Product for someone else | No | Yes |
| Customer-facing hardware | No | Yes |
| Safety-critical hardware | No | Yes |
| Harness drawing required | No | Yes |
| Inspection/acceptance required | No | Yes |
| Qualification/standard required | No | Yes |

:::note

The boundary isn't whether the connector looks “professional.” It's the consequence of failure, the environment, the documentation burden, and whether somebody other than you has to build or maintain it.

:::

Two useful rules fall out of that:

- **Judge one interface at a time.** A robot's I2C sensor cluster can stay on the hobby track while its battery connection and external cabling graduate. See [When Hobby Connectors Are Not Enough](hobby/when-hobby-is-not-enough.md).
- **“Maybe” usually means hobby parts with engineering discipline.** An outdoor LED decoration can keep hobby-class connectors *if* you do the real work—current calculation, sealing, strain relief, and a failure check—from the [selection workflow](04-connector-selection-workflow.md) or the [rugged-on-a-budget path](decision-paths/rugged-on-a-budget.md).

Start pages: [Hobby Connector Field Guide](hobby/index.md) · [Professional / Industrial Connector Field Guide](engineering-home.md).
