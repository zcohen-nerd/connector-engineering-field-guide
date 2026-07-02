---
id: rugged-ethernet
title: "Pick a connector for rugged Ethernet"
description: "Pick a connector for rugged Ethernet: M12 D-coded vs X-coded vs sealed RJ45, data-rate and shielding decisions, and the mis-coding traps that bite."
slug: /decision-paths/rugged-ethernet
sidebar_label: Rugged Ethernet
---

# Pick a connector for rugged Ethernet

Ethernet that has to leave a protected enclosure, run along a machine, or survive an industrial environment.

## Use this when

- You are carrying Ethernet outdoors, on a moving machine, or through a dirty/wet area.
- You need sealing, a positive latch, and a defined cable-assembly rating.

## Avoid this when

- The link stays inside a clean, protected cabinet — a standard RJ45 patch lead may be fine.
- The interface isn't actually Ethernet (fieldbus/CAN belongs on an [industrial sensor](industrial-sensor.md)-style A-coded connector).

## Families to start with

- **M12 D-coded** — commonly used for 10/100BASE-TX industrial Ethernet. Not obsolete; the right choice at 10/100.
- **M12 X-coded** — 8-pin, shielded; used for GbE/10G-class industrial Ethernet.
- **Sealed / rugged RJ45** — only where it is genuinely protected and the connector system is rated for it.

See the [M12 deep dive](../08-m12.md) for the D-coded vs. X-coded distinction.

## Search terms

- `M12 X-coded shielded Ethernet panel mount sealed`
- `M12 D-coded 10/100 Ethernet connector`
- `rugged RJ45 sealed panel mount Ethernet`

## Specs to check

- **Data rate** vs. coding — D-coded for 10/100, X-coded for gigabit-class. Match the connector to the rate you actually run.
- **Cable category and shielding** — the connector *and* the cable assembly both have to support the rate.
- **Sealing** of the complete mated assembly, and **latch protection**.
- The overall **connector/cable-assembly rating**, not just the connector in isolation.

## Parts people forget

- **Shielded cable** matched to the connector, and the **shell/shield bond**.
- The **mating cordset** and a **cap** for the unmated side.

See [What People Forget](../what-people-forget.md).

## Common traps

- Using **D-coded for GbE** (D-coded is 10/100 — use X-coded for gigabit-class).
- Running **unshielded cable on an X-coded** link, or terminating with no shell bond.
- Putting a **consumer RJ45 outdoors** and calling it rugged.

## Questions to ask a vendor/FAE

- Is this connector *and cable assembly* rated for my data rate (10/100 vs. GbE/10G)?
- What cable category and shielding are required?
- Is the IP rating stated for the mated assembly, and is the unmated side sealed only when capped?
- How is the shield/shell bonded through the connector?

## Example documentation bundle

- A [selection table](../tools/connector-comparison-matrix.md) row capturing the data rate and coding decision.
- A source-controlled **pinout** (including shield assignment).
- A [cable drawing](../tools/cable-drawing-template.md) and [ICD entry](../tools/connector-icd-template.md).

Related: [Decision Examples](../09-decision-examples.md) · [M12 deep dive](../08-m12.md).
