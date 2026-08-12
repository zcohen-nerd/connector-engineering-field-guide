---
id: m12-sensor-interface
title: "Worked Example: M12 Sensor Interface"
description: "A worked M12 selection for a sensor + industrial-Ethernet interface — A-coded and X-coded reasoning, candidates and rejections, pinout discipline, and the documentation bundle."
slug: /examples/m12-sensor-interface
sidebar_label: M12 Sensor Interface
---

# Worked Example: M12 Sensor Interface

One machine interface taken from "the sensors need to plug in somewhere" to a documented M12 architecture — the [Industrial sensor](../decision-paths/industrial-sensor.md) and [Rugged Ethernet](../decision-paths/rugged-ethernet.md) decision paths executed on a concrete (sanitized) system, with the [M12 deep dive](../08-m12.md) as the technical backbone.

:::info[Scaffold status — the reasoning narrative is being added]

The *structure* of this packet is complete and usable now. The sections marked **\[narrative to come\]** will be filled from a sanitized real-world A-coded/X-coded selection; until then they hold placeholders, not invented details. Everything factual on this page is stated by reference to the deep dive and decision paths, which carry the sources.

:::

:::warning[Read this as reasoning, not a shopping list]

Like the [Selection Packet](connector-selection-packet.md), this example teaches *how to decide and document*. Part numbers, counts, and lengths are placeholders (`J-`, `TBD`); a real project replaces every one with an exact, datasheet-verified P/N. No rating on this page is asserted for you.

:::

## Scenario

**\[narrative to come\]** — the sanitized system description: what the machine is, where it lives (washdown? outdoor? vibration?), how many sensor circuits, what the Ethernet run feeds, and who services it.

## 1. Requirements summary

| # | Requirement | Value | Source | Status |
|---|---|---|---|---|
| R1 | Environment (IP class, chemicals, temperature) | TBD | TBD | TBD |
| R2 | Sensor circuits (count, signal type, IO-Link?) | TBD | TBD | TBD |
| R3 | Data (rate, protocol, cable category) | TBD | TBD | TBD |
| R4 | Power (per-circuit current, distribution) | TBD | TBD | TBD |
| R5 | Service model (who unplugs what, how often) | TBD | TBD | TBD |

## 2. Candidates considered

The candidate set this example evaluates, per the decision paths' *families to start with*:

- **M12 A-coded** for the sensor/actuator circuits — the common industrial default the [Industrial sensor path](../decision-paths/industrial-sensor.md) starts from; codings and scope per [§8.1](../08-m12.md).
- **M12 D-coded vs. X-coded** for the Ethernet run — the data-rate decision [§8.1's D-vs-X note](../08-m12.md) exists to keep straight.
- **Rejected candidates and why** — **\[narrative to come\]**: what else was on the table (sealed RJ45? M8? hardwired glands?) and the concrete reasons each lost.

## 3. Decision matrix

Structure per the [comparison matrix template](../tools/connector-comparison-matrix.md); scoring **\[narrative to come\]**.

| Criterion | M12 A-coded (sensors) | Alternative | Notes |
|---|---|---|---|
| Environment / sealing | TBD | TBD | mated *and* unmated states |
| Electrical fit | TBD | TBD | per-circuit current vs. exact part rating |
| Ecosystem / sourcing | TBD | TBD | cordsets, second sources |
| Service model | TBD | TBD | tool-free? torque-controlled? |

## 4. Selected architecture

**\[narrative to come\]** — the as-selected interface list. The shape it will take:

| Ref | Interface | Family/coding | Why (link to reasoning) |
|---|---|---|---|
| J-1…J-*n* | Sensor circuits | M12 A-coded, TBD pins | [Industrial sensor path](../decision-paths/industrial-sensor.md) + R2 |
| J-*x* | Ethernet | M12 D- **or** X-coded, TBD | data-rate decision per [§8.1](../08-m12.md) + R3 |

## 5. Pinout and wiring discipline

**\[narrative to come\]** for the actual assignments. Standing rules that will govern them, from the deep dive:

- Pin assignments come from the device datasheet and the ICD — wire-color conventions (e.g. the common A-coded brown/white/blue/black scheme) are **example-only, never design authority** ([Source Notes](../appendix/source-notes.md)).
- Every value verifies against the exact part per [§8](../08-m12.md); record standard edition and datasheet revision.

## 6. Molded vs. field-wireable

Decision **\[narrative to come\]**, made with [§8.2's table](../08-m12.md): molded cordsets for production sealing/reliability vs. field-wireable for repair and custom lengths — and what that means for spares.

## 7. Documentation bundle

What "done" looks like for this interface, tying the [templates](../tools/index.md) together:

- [ ] Requirements table (above) with sources filled in
- [ ] [Comparison matrix](../tools/connector-comparison-matrix.md) with the real scoring
- [ ] Pinout + [cable drawing](../tools/cable-drawing-template.md) per run
- [ ] [ICD entries](../tools/connector-icd-template.md) — coding, torque, keying, mating-part references
- [ ] [M12 coding cheat sheet](../tools/m12-coding-cheat-sheet.md) checklist: standard edition + datasheet revision recorded
- [ ] [Harness inspection checklist](../tools/harness-inspection-checklist.md) run on the built cables

## 8. What would change if…

- **The Ethernet run needed GbE-class rates** — the D-vs-X decision flips; verify cable category and assembly rating per [§8.1](../08-m12.md).
- **A circuit outgrew the A-coded current class** — move that circuit to a power coding (L/T/S/K) per [§8.1](../08-m12.md), not to "probably fine."
- **The interface left the protected zone** — re-run the [sealed enclosure feedthrough path](../decision-paths/sealed-enclosure-feedthrough.md) for the panel side.

:::note

These examples illustrate *structure and process*, not a released design. The datasheet, applicable standard, and program requirements decide the actual values.

:::
