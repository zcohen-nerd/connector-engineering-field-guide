---
id: hobby-or-professional
title: "Hobby or Professional?"
description: "When the hobby guide is enough and when to move to the professional track — decided by consequence of failure, environment, documentation, and who builds it."
slug: /hobby-or-professional
sidebar_label: Hobby or Professional?
---

# Hobby or Professional?

Both tracks teach the same core idea — a connector is a controlled interface. The difference is what happens when it fails, where it lives, and who has to build, inspect, or maintain it. Use this table when the [landing-page quick check](index.md) isn't enough.

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

The boundary is not about whether a connector is "fancy." It is about consequence of failure, environment, documentation, repeatability, and who has to build or maintain it.

:::

Two practical corollaries:

- **Judge interface by interface, not project by project.** A robot's I2C sensor cluster can stay on the hobby track while its battery interface and external cabling graduate — see [When Hobby Connectors Are Not Enough](hobby/when-hobby-is-not-enough.md).
- **"Maybe" rows usually mean "hobby parts, engineering discipline."** An outdoor LED decoration can keep hobby-class connectors *if* you apply the engineering questions — sealing condition, current calculation, strain relief — from the [selection workflow](04-connector-selection-workflow.md) or the [rugged-on-a-budget path](decision-paths/rugged-on-a-budget.md).

Start pages: [Hobby Connector Field Guide](hobby/index.md) · [Professional / Industrial Connector Field Guide](engineering-home.md).
