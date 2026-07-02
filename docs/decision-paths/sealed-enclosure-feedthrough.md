---
id: sealed-enclosure-feedthrough
title: "Pick a connector for a sealed enclosure feedthrough"
description: "Pick a connector for a sealed enclosure feedthrough: 38999 jam-nut or flange, sealed M12 panel mounts — gaskets, panel thickness, torque, and IP traps."
slug: /decision-paths/sealed-enclosure-feedthrough
sidebar_label: Sealed enclosure feedthrough
sidebar_position: 5
---

# Pick a connector for a sealed enclosure feedthrough

Passing power or signal through the wall of a sealed enclosure without breaking the seal.

## Use this when

- You need to get a circuit through a panel while keeping the box sealed.
- Panel sealing, gasket compression, and internal termination all matter.

## Avoid this when

- There is real pressure or submersion beyond an IP rating — you need a **hermetic or potted penetrator**, not a standard panel connector.

## Families to start with

- **MIL-DTL-38999 jam-nut or flange** panel receptacles for rugged sealed I/O.
- **Sealed M12 panel** receptacles for industrial sealed I/O.
- **Hermetic / potted penetrator** where pressure or gas-tightness is required.

See [Decision Examples](../09-decision-examples.md).

## Search terms

- `38999 jam nut receptacle sealed panel mount`
- `M12 panel mount sealed receptacle`
- `hermetic connector feedthrough`

## Specs to check

- **IP rating / depth** required, and for any IP68 claim the **manufacturer-stated depth and duration**.
- **Panel gasket / O-ring** and **panel thickness / cutout**.
- **Coupling and jam-nut torque**.
- **Internal termination** — how the circuit continues inside the box.
- **Wire seal** sizing and **unused-cavity plugs**.

## Parts people forget

- The **panel gasket / O-ring**.
- A **cap** for the unmated exterior connector.
- Correct **wire-seal sizing** and **sealing plugs** for unused cavities.

See [What People Forget](../what-people-forget.md).

## Common traps

- Confusing **IP67 with IP68** (IP67 ≈ 1 m / 30 min; IP68 = the manufacturer's stated depth/duration).
- Using a standard IP67 part where there is real pressure.
- Treating **RTV as "sealing"** instead of a rated gasket.
- No unmated cap; undersized wire seal defeating the whole connector's seal.

## Questions to ask a vendor/FAE

- Is the IP rating stated for the mated assembly, the unmated/capped connector, and the panel interface?
- For IP68, what exact depth and duration?
- What panel thickness range and cutout does the jam-nut/flange support?
- What gasket/O-ring and torque are specified?

## Example documentation bundle

- A [selection table](../tools/connector-comparison-matrix.md) row with the sealing target.
- A source-controlled **pinout** and the internal termination plan.
- A [cable drawing](../tools/cable-drawing-template.md) and [ICD entry](../tools/connector-icd-template.md) recording IP target, panel thickness, gasket, and torque.

Related: [Decision Examples](../09-decision-examples.md) · [Connector Anatomy §5.5–5.6](../05-connector-anatomy.md).
