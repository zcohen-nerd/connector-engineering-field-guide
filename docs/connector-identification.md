---
id: connector-identification
title: "Connector Identification Workflow"
description: "The shared eleven-step workflow both guide tracks use to identify any connector — from use case and pitch measurement to drawing verification and samples."
slug: /connector-identification
sidebar_label: Identification Workflow
---

# Connector Identification Workflow

This is the short version of the identification process both tracks use. Whether the mystery part came off a cheap LED string or a fielded harness, the steps are the same. Only the stakes — and the amount of paperwork — change.

1. **Identify the use case and risk level.** Bench prototype or fielded hardware? That decides how much of this list is negotiable — and [which track you're in](hobby-or-professional.md).
2. **Count positions** — every cavity, loaded or not.
3. **Measure the pitch** with calipers, across the full row ÷ (N−1). See [Pitch: The Number That Saves You](hobby/pitch.md).
4. **Determine the connection type** — wire-to-board, wire-to-wire, board-to-board, or panel/feedthrough.
5. **Identify the latch, keying, and polarization** — friction vs. positive latch, polarizing features.
6. **Identify the housing and the contacts separately** — separate part numbers, independent genders ([glossary](glossary.md)).
7. **Check the wire gauge and insulation range** the contacts actually support.
8. **Check current, voltage, environment, and mating cycles** against the application — from a datasheet, not a listing ([ratings are system-level](appendix/quick-reference-tables.md)).
9. **Find the exact mating part** from the family drawing. See [Buying the Right Mating Parts](hobby/buying-mating-parts.md).
10. **Verify with the datasheet drawing or standard** — dimensions against your calipers, not photos against your memory.
11. **Buy samples or test-fit before committing** — before the bulk order on the hobby side, before release on the engineering side.

![Diagram of a four-position connector with the preferred full-row center-to-center pitch measurement divided by the number of intervals](/img/diagrams/hobby-pitch-measurement.svg)

*Measure across several contact centers, then divide by the number of intervals. This averages the measurement error that makes adjacent-pair caliper readings misleading.*

:::note[Going deeper]

- **Hobby track:** the full [How to Identify an Unknown Connector](hobby/identify-unknown-connector.md) — photos, molded markings, search-query patterns, and marketplace skepticism.
- **Engineering track:** [How to Search for Connectors](00-how-to-search-for-connectors.md) for requirement-driven search, and [Reading Datasheets](06-reading-datasheets.md) for what to do once you find the drawing.

:::
