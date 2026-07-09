---
id: rf-gps-radio
title: "Pick a connector for an RF, GPS, or radio path"
description: "Pick a connector for an RF, GPS, or radio path: SMA, TNC, N, BNC and coax-contact orientation — impedance, frequency, torque, and shielding as a system, not pin count."
slug: /decision-paths/rf-gps-radio
sidebar_label: RF / GPS / radio
---

# Pick a connector for an RF, GPS, or radio path

Antenna, GPS, radio, timing, RF test, or video/broadcast coax — a controlled-impedance signal that has to keep its impedance and shielding intact. The goal of this page is to keep a non-RF engineer from treating an RF line like ordinary signal wiring. It is **orientation-level**, not an RF design course.

:::warning

If the frequency, power, or environment is high enough to be risky — precision microwave, high-power transmit, tight link budgets — an **RF engineer should own the connector, cable, and launch design**. This page helps you route the interface and ask the right questions, not close a microwave design.

:::

## Use this when

- The interface carries **GPS, an antenna, a radio, RF test, timing, video/broadcast coax**, or any other controlled-impedance signal.
- The connector and cable must **preserve impedance and shielding**.
- A **panel feedthrough** or **rugged payload** connection needs an RF path alongside its other signals.

## Avoid this when

- The signal is **ordinary low-speed discrete/analog** wiring — use the normal [selection workflow](../04-connector-selection-workflow.md).
- The interface is **Ethernet over twisted pair** — see [Rugged Ethernet](rugged-ethernet.md).
- The design needs **detailed RF launch design, microwave performance, or precision test-fixture work** beyond this guide.

## Families to start with

- **SMA** — small threaded workhorse for many antenna/GPS/board-edge RF lines. *(Watch for **RP-SMA**, a reverse-polarity variant common on consumer Wi-Fi gear — it does not mate with standard SMA. Confirm which one you have.)*
- **TNC** — a threaded, more vibration-tolerant cousin of the BNC.
- **N-type** — larger, rugged, weatherproof-capable; common on radios and base-station/antenna lines.
- **BNC** — quick bayonet; common for test, video, and legacy RF. Exists in **both 50 Ω and 75 Ω** variants that look alike but are not interchangeable.
- **MCX / MMCX** — snap-on miniatures for tight spaces (e.g. GPS modules).
- **SMP / SMPM** — board-to-board / blind-mate miniatures for dense, high-frequency assemblies.
- **Coax contacts inside a MIL-DTL-38999 or other hybrid connector** — for a rugged payload, one coax contact in an existing hybrid insert may beat a separate coax bulkhead. See [38999 §7.6](../07-mil-dtl-38999.md#76-coax-twinax-and-quadrax-in-a-38999).

![Two antenna connectors side by side, one with a center socket and one with a center pin, otherwise identical](/img/photos/sma-vs-rpsma.jpg)

*The RP-SMA trap in one frame: standard SMA and reverse-polarity RP-SMA differ only in which side carries the center pin — the shells and threads look identical, and they do not mate. Photo: [Fckw kyle](https://commons.wikimedia.org/wiki/File:Sma_and_rp-sma.jpg), public domain, via Wikimedia Commons.*

![A BNC male connector on a cable, showing the bayonet slots in the coupling ring](/img/photos/bnc-male.jpg)

*BNC male: the bayonet slots in the coupling ring are the giveaway — quick quarter-turn mating, and remember 50 Ω and 75 Ω versions look alike. Photo: [Krzysztof Burghardt](https://commons.wikimedia.org/wiki/File:BNC_connector_%28male%29.jpg), CC BY-SA 3.0, via Wikimedia Commons.*

## Search terms

- `SMA connector 50 ohm RG316 crimp bulkhead`
- `TNC vs BNC RF connector vibration`
- `N-type bulkhead antenna connector weatherproof`
- `BNC 50 ohm vs 75 ohm difference`
- `MMCX GPS antenna connector`
- `MIL-DTL-38999 coax contact insert arrangement`

## Specs to check

- **Impedance** — 50 Ω or 75 Ω — matched across connector, cable, and terminations. **50 Ω** dominates RF/microwave/GPS/comms; **75 Ω** dominates video/broadcast. Do not mix visually similar variants.
- **Frequency** of the exact connector *and cable together* — a family name is not a frequency rating.
- **Power handling** for transmit paths (part-specific).
- **Cable compatibility** — the exact coax the connector is designed to terminate (e.g. RG316, RG174, LMR-class), and the correct crimp/clamp.
- **Mating torque** where the connector specifies one (common on threaded RF interfaces) — use a torque wrench.
- **Environment** — weatherproofing, sealing, and caps for outdoor/panel use.

## Minimum RF connector decision fields

Capture these before you choose — they are decision-support fields, not ratings. If you can't fill a row, that's the row that bites later.

:::caution

RF connector selection is not only mechanical fit. Frequency range, impedance control, launch geometry, cable assembly quality, bend radius, torque, return loss, insertion loss, and environmental sealing can dominate performance.

:::

| Field | Record |
|---|---|
| Signal / function | GPS / antenna / radio TX/RX / timing / video / test |
| Frequency range | per the link design |
| Characteristic impedance | 50 Ω / 75 Ω — matched across connector, cable, termination |
| Connector family | SMA / TNC / N / BNC / MCX/MMCX / SMP/SMPM / coax contact in a hybrid |
| Cable type | the exact coax the connector is designed to terminate |
| Insertion loss budget | dB at frequency, from the link budget |
| Return loss / VSWR requirement | per system requirement |
| Power at frequency | transmit paths — part-specific |
| Environmental sealing | rating + test condition, if external |
| Mate-cycle expectation | service model |
| Torque requirement | value + torque wrench, per datasheet |
| Vibration / strain relief | boot/backshell/support strategy |
| Connector saver required | yes / no |
| Test equipment interface | what the port must mate with in test |
| RF owner / reviewer | who signs off |
| Source document / datasheet | identifier + revision/date |

## Parts people forget

- The **matching cable and the correct crimp/clamp tooling** for that exact coax.
- A **torque wrench** for threaded RF interfaces that specify a mating torque.
- **Connector savers** on high-cycle test ports, so wear lands on a cheap sacrificial adapter.
- **Weather caps / protective caps** — contamination on an RF interface degrades performance and can damage the mating face.
- **Bulkhead hardware and a panel gasket** for feedthroughs.

See [What People Forget](../what-people-forget.md).

## Common traps

- **Selecting by pin count / "it fits."** RF selection is impedance, frequency, power, cable compatibility, shielding, environment, and service model — the connector, cable, termination, launch geometry, and panel transition are one system.
- **Mixing 50 Ω and 75 Ω** BNCs (or SMA/RP-SMA) because they look alike.
- **Skipping the torque wrench** on threaded RF connectors — over- or under-torque both degrade the match and can damage the interface.
- **Long shield pigtails** at the panel transition — inductive, and they radiate. Keep the shield/ground path short and circumferential; see [EMI, shielding, and bonding (§5.7)](../05-connector-anatomy.md#57-emi-shielding-and-bonding).
- **Assuming a family frequency ceiling.** As a rough ordering, SMA-class connectors are generally used at higher frequencies than N/TNC/BNC families — but the exact ceiling is part- and cable-specific, so read the datasheet.

## Questions to ask a vendor/FAE

- What is the **impedance and frequency rating** of this exact connector **on the cable I'm using**?
- What **crimp/clamp tool and die** does this connector-cable combination require?
- Is a **mating torque** specified, and what is it?
- For a bulkhead: what **panel thickness, cutout, and gasket** achieve the sealing I need?
- Is there a **coax-contact option** for my existing hybrid connector instead of a separate bulkhead?

## Example documentation bundle

- A [comparison-matrix](../tools/connector-comparison-matrix.md) row capturing impedance, frequency, cable, and environment — not just the connector name.
- A source-controlled **cable/RF interface definition**: connector, cable type, impedance, torque, and shielding/bond, in the [ICD](../tools/connector-icd-template.md).
- A [cable drawing](../tools/cable-drawing-template.md) note for the coax, its termination, and the panel transition.

Related: [RF connectors — a brief orientation (§2)](../02-major-connector-categories.md#rf-connectors--a-brief-orientation) · [EMI, shielding, and bonding (§5.7)](../05-connector-anatomy.md#57-emi-shielding-and-bonding) · [Coax/twinax in a 38999 (§7.6)](../07-mil-dtl-38999.md#76-coax-twinax-and-quadrax-in-a-38999) · [Defense / rugged external I/O](defense-rugged-external-io.md) · [Practical Checklist](../10-selection-checklist.md).
