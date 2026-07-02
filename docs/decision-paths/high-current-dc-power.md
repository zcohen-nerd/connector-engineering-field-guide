---
id: high-current-dc-power
title: "Pick a connector for high-current DC power"
description: "Pick a connector for high-current DC power: Anderson SB, Han power inserts, 38999 power contacts — derating curves, touch safety, and paralleling cautions."
slug: /decision-paths/high-current-dc-power
sidebar_label: High-current DC power
---

# Pick a connector for high-current DC power

Motors, batteries, heaters, PDUs — connections where current, heat rise, and touch safety dominate the decision.

## Use this when

- You are moving real DC power and the current, not the pin count, is the hard constraint.
- Heat rise, derating, and touch safety matter.

## Avoid this when

- You are mixing low-level signals into the same insert without an isolation plan — segregate them, or use a hybrid arrangement designed for it.
- The load is small enough that a sensor-class connector already covers it.

## Families to start with

- **Anderson SB** for battery/robot power quick-disconnects — great current density, but unsealed, unshielded, and genderless; add a boot or choose a sealed family for external/environmental interfaces.
- **Industrial rectangular / Han-style power** inserts.
- **High-current circular** connectors.
- **MIL-DTL-38999 size 12** *only where the derating supports the load*, or **size 8 / larger** and **dedicated power contacts** (e.g. HCP/RADSOK) for higher current.

See [Quick-Reference A3](../appendix/quick-reference-tables.md) and [Decision Examples](../09-decision-examples.md).

## Search terms

- `Anderson SB power connector`
- `Han power module insert high current`
- `38999 size 8 power contact`

## Specs to check

- **Contact current rating at temperature**, bundle-derated per the manufacturer's **derating curve** — current is never one number (see [Selection Workflow §2](../04-connector-selection-workflow.md)).
- **Wire gauge**, **number of loaded contacts**, **ambient temperature**, **heat rise**, and **duty cycle**.
- **Touch safety** on the energized side (recessed sockets / touch-safe contacts).

## Parts people forget

- Actually pulling the **derating curve** for a fully-loaded connector.
- **Touch-safe / recessed** contacts on the energized/source side.
- The correct **contact size** and crimp tooling.

See [What People Forget](../what-people-forget.md).

## Common traps

- **Paralleling contacts** to reach a current unless the manufacturer/application explicitly supports it and the design is reviewed.
- Undersizing the contact, or judging safe current from **contact size alone**.
- Treating a hobby power connector (XT60/90) as an IP-rated professional solution.

## Questions to ask a vendor/FAE

- What is the derating curve for a fully-loaded connector at my ambient temperature?
- What is the continuous current for this exact contact P/N and wire gauge?
- Are dedicated power contacts (e.g. HCP/RADSOK) available, and is paralleling supported for this product?
- What is the touch-safety / finger-proofing story on the energized side?

## Example documentation bundle

- A [selection table](../tools/connector-comparison-matrix.md) row that records the derating assumption.
- A source-controlled **pinout** marking source/load direction.
- A [cable drawing](../tools/cable-drawing-template.md) and [ICD entry](../tools/connector-icd-template.md) capturing current, wire gauge, and torque.

Related: [Decision Examples](../09-decision-examples.md) · [Selection Workflow](../04-connector-selection-workflow.md).
