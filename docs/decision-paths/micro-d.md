---
id: micro-d
title: "Pick a connector for a compact high-reliability internal interface"
description: "Pick a connector for a compact, weight-critical high-reliability internal interface: Micro-D (MIL-DTL-83513) — density, current limits, tooling, and service-model traps."
slug: /decision-paths/micro-d
sidebar_label: Micro-D / compact high-rel
---

# Pick a connector for a compact high-reliability internal interface

A dense, lightweight, high-reliability connection inside protected hardware — where size and weight matter more than field-service convenience.

## Use this when

- The interface lives **inside an enclosure or protected assembly** and space/weight are constrained.
- You need **high density and high reliability** — space/aero-style electronics, compact payloads, instrument internals.
- Signals dominate; currents are modest.

## Avoid this when

- The connector will be **mated/demated in dirty, wet, or field-service conditions** — Micro-D is an internal/protected family, not a dirty field-service one ([§3](../03-connector-standards-and-families.md)).
- You need **real current** — per-contact capability in this class is low; go to a larger family or dedicated power contacts ([high-current DC path](high-current-dc-power.md)).
- A cheaper, bigger connector would do — the density buys cost, delicacy, and assembly complexity you shouldn't pay for without a reason.

## Families to start with

- **Micro-D (MIL-DTL-83513)** — fine pitch (contacts on .050 in / 1.27 mm centers), lightweight, rugged, high-density; the family-level figures (≈3 A-class per contact, sea-level voltage rating) and their source live in [§3 Standards and Families](../03-connector-standards-and-families.md).[^microd]
- **MIL-grade D-sub (MIL-DTL-24308)** where you have the panel space and want cheaper, more forgiving hardware — see the comparison in [§3](../03-connector-standards-and-families.md).
- For an occasional-access programming/service flavor of this problem, see the [debug / service port path](debug-service-port.md) — Micro-D appears there too.

See [Decision Examples](../09-decision-examples.md).

## Search terms

- `MIL-DTL-83513 Micro-D connector catalog`
- `micro-d insert arrangement drawing`
- `micro-d backshell strain relief`

## Specs to check

- **Current per contact vs. your actual loads** — this is a signal-class family; check every loaded contact against the exact part's datasheet, not the family figure.
- **Voltage rating at your altitude** — the family figure cited in §3 is a sea-level rating; verify the exact part and condition.
- **Temperature range** for the exact part and termination style.
- **Contact arrangement** — exact arrangements vary by product; pull the manufacturer's drawing ([§3](../03-connector-standards-and-families.md)).
- **Termination and tooling** — what the assembly process requires, who performs it, and to which workmanship spec.
- **Mounting and keying** — board vs. panel vs. cable-to-cable, and how adjacent identical connectors are told apart.
- **Qualification** — if the program requires qualified parts, verify the exact part number's QPL status; "mil-style" is not qualification.

## Parts people forget

- **Backshell / strain relief** for the cable version — fine-gauge wire bundles need it most.
- The **mating half's** exact arrangement and gender — verify both halves, not just yours.
- **Savers / caps** for connectors that see repeated bench mating during development.
- The **assembly/tooling budget** — the connector is only part of the cost.

See [What People Forget](../what-people-forget.md).

## Common traps

- Treating Micro-D as a rugged *external* connector because it is "mil-spec" — the spec covers a compact high-reliability family, not dirty field service ([§3](../03-connector-standards-and-families.md)).
- Running **power** through a density-optimized signal connector.
- Ignoring **assembly complexity** until production — delicate, fine-pitch hardware punishes improvised processes.
- Choosing it where a standard D-sub or a small rectangular family would do the job for less.

## Questions to ask a vendor/FAE

- What termination styles and tooling does this arrangement require, and what does the application/assembly spec say?
- What are the exact per-contact current and voltage ratings for this part, at my temperature and altitude?
- What keying/polarization options exist for several identical connectors side by side?
- What is the QPL status of this exact part number, if qualification matters on my program?

## Example documentation bundle

- A [comparison matrix](../tools/connector-comparison-matrix.md) row against a MIL-grade D-sub and one rectangular alternative.
- A source-controlled **pinout** and an [ICD entry](../tools/connector-icd-template.md) recording arrangement, keying, and the assembly spec.
- A [cable drawing](../tools/cable-drawing-template.md) if it's the cable version — including strain relief and backshell.

Related: [§3 Standards and Families](../03-connector-standards-and-families.md) · [Debug / service port](debug-service-port.md) · [What People Forget](../what-people-forget.md).

## Sources

[^microd]: Glenair, *Micro-D Performance Specifications* (MIL-DTL-83513) — contacts on .050 in (1.27 mm) centers, 3.0 A continuous per contact (−55 to +150 °C), 600 V rms at sea level. <https://www.glenair.com/micro-d/pdf/micro-d-specifications.pdf>
