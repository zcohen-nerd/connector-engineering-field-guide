---
id: high-current-dc-power
title: "Pick a connector for high-current DC power"
description: "Pick a connector for high-current DC power: Anderson SB, Han power inserts, 38999 power contacts — derating curves, touch safety, and paralleling cautions."
slug: /decision-paths/high-current-dc-power
sidebar_label: High-current DC power
---

# Pick a connector for high-current DC power

Motors, batteries, heaters, PDUs — connections where current, heat rise, and touch safety dominate the decision.

:::danger[Energized connector safety]

A connector is not load-break, hot-plug, touch-safe, or safe to mate/unmate while energized unless the datasheet or governing standard explicitly says so. Many connectors are rated for current only when fully mated and are not intended to interrupt load current.

For high-energy systems — batteries, motor controllers, heaters, PDUs — document fuse protection, inrush/precharge behavior, touch safety, available fault current, and whether mating/unmating is permitted under power.

:::

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
- **Touch safety** on the energized side (recessed sockets / touch-safe contacts), and whether the connector is touch-safe **when unmated**.
- **Load-break / hot-plug / mate-under-power status** — yes / no / explicitly prohibited / not specified — from the datasheet, never assumed.
- **Fuse/overcurrent protection, available fault current, and inrush/precharge behavior** for the circuit the connector lives in.

## Parts people forget

- Actually pulling the **derating curve** for a fully-loaded connector.
- **Touch-safe / recessed** contacts on the energized/source side.
- The correct **contact size** and crimp tooling.

See [What People Forget](../what-people-forget.md).

## Common traps

- **Assuming a power connector can interrupt load current.** Most are rated for current only when fully mated; opening one under load can arc, weld or destroy the contacts, and injure the technician. If service requires disconnect under power, that capability must come from the exact datasheet — or from an upstream disconnect/contactor instead.
- **Paralleling contacts** to reach a current unless the manufacturer/application explicitly supports it and the design is reviewed.
- Undersizing the contact, or judging safe current from **contact size alone**.
- Treating a hobby power connector (XT60/90) as an IP-rated professional solution.

## Questions to ask a vendor/FAE

- What is the derating curve for a fully-loaded connector at my ambient temperature?
- What is the continuous current for this exact contact P/N and wire gauge?
- Are dedicated power contacts (e.g. HCP/RADSOK) available, and is paralleling supported for this product?
- What is the touch-safety / finger-proofing story on the energized side, mated and unmated?
- Is mating/unmating under power permitted for this connector? Is any load-break or hot-plug capability stated, and at what voltage/current?

## Example documentation bundle

- A [selection table](../tools/connector-comparison-matrix.md) row that records the derating assumption.
- A source-controlled **pinout** marking source/load direction.
- A [cable drawing](../tools/cable-drawing-template.md) and [ICD entry](../tools/connector-icd-template.md) capturing current, wire gauge, torque, and the **energized-work statement**: load-break/hot-plug status, mate/unmate-under-power permission, touch safety, fusing, fault current, and inrush/precharge — plus any required warning label or service procedure.

Related: [Decision Examples](../09-decision-examples.md) · [Selection Workflow](../04-connector-selection-workflow.md).
