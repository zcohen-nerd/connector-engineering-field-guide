---
id: pitch
title: "Pitch: The Number That Saves You"
description: "Pitch — the center-to-center contact spacing — is the single most useful number for identifying hobby connectors. How to measure it right with calipers."
slug: /hobby/pitch
sidebar_label: Pitch
---

# Pitch: The Number That Saves You

**Pitch is the center-to-center spacing between adjacent contacts.** It is the single most discriminating, easiest-to-measure number on any connector — and measuring it correctly resolves most "which family is this?" questions before they start.

## Why pitch matters

- Common hobby pitches include **2.54 mm (0.1 in), 2.5 mm, 2.0 mm, 1.5 mm, 1.25 mm, and 1.0 mm** — and several families exist at *each* of them.
- **Pitch alone does not identify a connector** — it narrows the field so latch, housing, and drawing comparison can finish the job.
- **Photos are unreliable** for pitch. A 2.0 mm and a 2.5 mm housing look identical on a phone screen; the parts will not mate.
- **Inch/mm confusion matters**: 2.54 mm is 0.1 inch; 2.5 mm is not. They differ by only 0.04 mm per position — invisible on 2 pins, binding and contact misalignment across 10.
- **2.5 mm and 2.54 mm are not always interchangeable**, and clone listings often round one to the other. Assume nothing; measure and check the drawing.

## How to measure it right

Measuring one gap between two small contacts multiplies your caliper error. Spread the error across the row instead:

> **For N contacts, measure from the center of the first contact to the center of the last contact, then divide by N−1.**

Example: for a 4-position connector, measure center-to-center from contact 1 to contact 4 and divide by 3. A first-to-last reading of 7.5 mm ÷ 3 = 2.5 mm pitch; 7.62 ÷ 3 = 2.54 mm. The full-row measurement is what separates those two cleanly.

![Diagram: a four-position connector with a discouraged single-gap measurement above and the preferred full-row center-to-center measurement below, divided by N minus one](/img/diagrams/hobby-pitch-measurement.svg)

*One gap hides caliper error inside a small number; the full row spreads it thin.*

Practical tips:

- Measure the **contacts or cavities**, not the housing edges.
- On a header, measuring **pin 1 outside-edge to pin N outside-edge** also works: that equals the center-to-center distance because the pin widths cancel (half a pin on each end).
- If you can't get calipers on the mating face, measure the solder tails on the board side.
- Cross-check the *total* row length against the candidate family's drawing — drawings dimension exactly this.

Related: [How to Identify an Unknown Connector](identify-unknown-connector.md) · [JST Is Not One Connector](jst-is-not-one-connector.md) — where a 0.5 mm pitch difference is the whole story.
