---
id: internal-pcb-harnessing
title: "Pick a connector for internal PCB harnessing"
description: "Pick a connector for internal PCB harnessing: Micro-Fit, JST-GH and kin — latches, TPA, crimp tooling, and keeping hobby parts inside their ratings."
slug: /decision-paths/internal-pcb-harnessing
sidebar_label: Internal PCB harnessing
---

# Pick a connector for internal PCB harnessing

This is the wiring that stays inside the box: power and signals leaving a PCB for fans, switches, motors, batteries, or another assembly. The enclosure protects it from weather, but vibration, bad latches, contact choice, tooling, and service mistakes can still ruin your day.

## Use this when

- The connection is internal and protected by the enclosure.
- You want positive latches, polarization, and (in volume) secondary locks — not loose header pins.

## Avoid this when

- The boards mount rigidly to each other and could **plug together directly** — see [Board-to-board](board-to-board.md); a harness between rigidly-coupled boards is often the worse answer.
- The interface is external, sealed, or rugged — treat it as a [sealed feedthrough](sealed-enclosure-feedthrough.md) or [defense/rugged I/O](defense-rugged-external-io.md) unless the family is specifically sealed, latched, or potted; for budget sealed field wiring, the middle ground is [rugged-on-a-budget](rugged-on-a-budget.md).

## Families to start with

- **[Molex Micro-Fit](../micro-fit.md)** (and Mini-Fit / Nano-Fit) for internal power — its deep dive covers the Fit ladder, the terminal-set current, and the 30-cycle gotcha.
- **PicoBlade / [JST-GH](../hobby/jst-gh.md)** and similar for signal — and note they are *different* 1.25 mm families that do not intermate; the GH page carries the lookalike table.
- **TE** and **Harwin** families where their ratings and latches fit.

![Line diagram of the Molex Fit family at relative pitch scale, plus wire-to-board, wire-to-wire, and panel-mount arrangements](/img/diagrams/micro-fit-ladder.svg)

*One internal-power ecosystem can cover several physical jobs, but the similar-looking Fit families sit at different pitches and do not intermate. Measure and select the exact family before choosing the contact and tooling.*

These are not "hobby" parts — professional versions have latches, polarization, secondary locks (TPA), and defined ratings. The dividing line is the specific family and rating, not the brand (see [Major Connector Categories](../02-major-connector-categories.md)).

## Search terms

- `Micro-Fit wire-to-board latching connector crimp housing`
- `JST GH 1.25mm wire-to-board connector`

## Specs to check

- **Current** and **wire gauge** vs. the contact.
- **Latch** and **TPA / secondary lock** availability.
- **Vibration** exposure and whether the latch/lock is adequate.
- **Tooling** — the correct crimp tool and contacts for the exact family.
- **Keying / polarization**, especially in volume production.

## Parts people forget

- **Crimp tooling** and the correct **contacts** for the family.
- The **TPA / secondary lock** and a **keyed housing**.

See [What People Forget](../what-people-forget.md).

## Common traps

- Pushing a hobby connector **beyond its rating**.
- Loose 0.1″ headers or bare solder joints where a latched, keyed housing belongs.
- No keying in volume production, so assemblies get cross-plugged.

## Questions to ask a vendor/FAE

- What is the current/voltage rating of this exact family and contact?
- What crimp tool and contact part numbers are required?
- Is a TPA / secondary lock and a keyed/polarized housing available?

## Example documentation bundle

- A [selection table](../tools/connector-comparison-matrix.md) row for the harness.
- A source-controlled **pinout** with keying noted.
- A [cable drawing](../tools/cable-drawing-template.md) and, for a controlled internal interface, an [ICD entry](../tools/connector-icd-template.md).

Related: [Decision Examples](../09-decision-examples.md) · [Consumer / Hobby / Prototype connectors](../12-consumer-hobby-prototype-connectors.md) · for quick prototyping with pre-crimped leads and kit parts, the hobby track's [Crimping](../hobby/crimping.md) and [Marketplace Kits](../hobby/connector-kits.md) pages.
