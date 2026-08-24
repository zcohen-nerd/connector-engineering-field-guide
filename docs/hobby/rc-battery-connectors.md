---
id: rc-battery-connectors
title: "The RC Battery Connector Landscape"
description: "Identify the battery connector you're holding — Deans/T-plug, EC3/EC5, Traxxas, Tamiya-style, bullets, MR/MT trios, Anderson Powerpole — and the traps of a mixed-connector fleet."
slug: /hobby/rc-battery-connectors
sidebar_label: RC Battery Connectors
---

# The RC Battery Connector Landscape

The [XT page](xt-connectors.md) covers the XT30/60/90 ecosystem in depth. This page answers the question that comes right before it: **"what connector is on this battery?"** RC packs, chargers, ESCs, and vehicles ship with half a dozen incompatible power-connector ecosystems, most of them clone-heavy, and the fleet you inherit is usually mixed. Identify first; then standardize deliberately.

:::warning[Current claims on this page]

With one sourced exception (Anderson Powerpole, below), **no current ratings are asserted on this page**. Deans-style, EC-style, Traxxas-style, Tamiya-style, and bullet connectors are sold overwhelmingly as clones with marketing numbers; treat every printed or listed amp figure as unverified until you find the actual manufacturer document for the actual part in your hand. The [XT page](xt-connectors.md) shows what a *sourced* rating looks like — and how far conditions move it.

:::

## The identification table

| You're holding | ID marks | Where you meet it | Watch out |
|---|---|---|---|
| **Deans-style / "T-plug"** | Two flat blades in a T, red shell | Older LiPo packs, park flyers, the genuine article is the W.S. Deans "Ultra Plug" | "T-plug" listings are clones of varying blade thickness and spring force; a loose mate heats at max current |
| **EC3 / EC5 (and IC3 / IC5)** | Blue/black shell molded over 3.5 mm / 5 mm bullets | Horizon Hobby ecosystem (E-flite, Spektrum); IC-series are the newer Smart-telemetry versions marketed as EC-mateable | Shell is the polarization; the bullets inside are the contacts. Verify IC↔EC mating claims against Horizon's own documentation before mixing |
| **Traxxas-style** | Flat high-current blades in a keyed shell with a latch tab | Traxxas vehicles and packs | Proprietary ecosystem; clone "Traxxas-compatible" quality varies widely |
| **Tamiya-style** | White nylon 2-pin shell, one chamfered corner | Older NiMH packs, budget chargers, toy-grade vehicles | The classic upgrade-me connector: high-resistance reputation, loose fits, and polarity that must be verified per pack — the shell keying does not guarantee the wires inside |
| **Bare bullet trios (2–8 mm)** | Individual gold barrel connectors under heat-shrink, usually ×3 | Motor↔ESC three-wire connections; big packs use 6–8 mm singles (anti-spark AS150-style on large aircraft) | No housing means no polarization — motor leads are swappable by design, but battery leads are not; insulate every joint fully |
| **MR30 / MT30 / MT60-style trios** | Keyed three-pin housings over bullet contacts | Motor↔ESC where builders want keyed, one-action disconnects; same AMASS-originated ecosystem as XT[^amass] | Same clone caveats as XT; digits in the name are not verified ratings |
| **Anderson Powerpole (PP15/45)** | Genderless single-pole housings that dovetail side-by-side, contact visible in the face | Bench supplies, amateur radio, combat robotics, power distribution | See the sourced figures below — and note that "genderless" means *assembly convention*, not built-in polarization: your fleet's red/black stacking convention is the only thing preventing a reverse connection |
| **JST-RCY (red pair)** | Small red 2-pin latched pair | Light loads, small packs | Not a high-current connector — see the [families capsule](families.md) and [JST Is Not One Connector](jst-is-not-one-connector.md) |
| **XT30 / XT60 / XT90** | Yellow keyed shell, 2 bullet contacts, size steps | The de-facto standard for modern LiPo packs | The digits are *momentary* current per AMASS — the [XT page](xt-connectors.md) has the sourced table |

![Line diagram of six RC battery connector silhouettes: Deans T-blades, EC-style bullet shell, Traxxas-style, Tamiya-style, bare bullet, and Powerpole](/img/diagrams/hobby-rc-battery-id.svg)

*Face-on ID silhouettes — shape and blade/bullet geometry are the fastest tell. Schematic only; sizes not to scale between connectors.*

## The one sourced row: Anderson Powerpole

Anderson Power Products' PP15/45 Powerpole family is the documented outlier in this landscape: **15 A, 30 A, and 45 A contacts all share the same genderless housing**, covering #20 through #10 AWG, with the series rated up to 55 A per pole per Anderson's datasheet — and housings dovetail together so you build multi-pole connectors from single poles.[^pp1545] That's why bench supplies and radio shacks standardize on it. The trap is the flip side of genderless: nothing but your **assembly convention** (the agreed red/black stacking arrangement) polarizes the connection, so document the convention and check it before connecting anything that matters.

## Traps

- **The adapter drawer.** A mixed fleet breeds adapters, and every adapter is two more connections, more resistance, and a hiding place for a bad joint — right in the highest-current path you own. Standardize the fleet on one ecosystem (calculated against your loads) and re-terminate; keep adapters for the charger bench, not the vehicle.
- **Unplugging under load.** Battery DC arcs. Same rule as everywhere in both guides: de-energize first, and prefer anti-spark variants on high-capacity packs. See [power vs signal](power-vs-signal.md) and the [energized-connector warning](../decision-paths/high-current-dc-power.md).
- **Solder joints are the connector.** Most of these families use solder tabs or cups. A cold joint or wicked-stiff wire at the tab fails before the connector does — strain-relieve with heat-shrink past the joint, every time.
- **Polarity is your job.** Tamiya-style shells and bare bullets carry no trustworthy polarity convention, and even keyed shells only guarantee *orientation*, not that the pack was wired correctly. Meter the pack before its first connection to anything expensive.
- **Clone roulette, again.** Blade thickness, bullet spring force, plating, and shell fit vary between clones of every family here. Buy matched pairs from one source and inspect the mate.

## When to move to the engineering track

Fielded vehicles, bigger packs, or anything where load-break, touch safety, and fault current need documented answers: the [high-current DC path](../decision-paths/high-current-dc-power.md) (where Powerpole's bigger sibling, the Anderson SB family, lives), [rugged on a budget](../decision-paths/rugged-on-a-budget.md) for sealed vehicle wiring, and [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md).

## Source status

Anderson PP15/45 figures are cited to Anderson's own datasheet.[^pp1545] The MR/MT ecosystem attribution follows the AMASS sourcing on the [XT page](xt-connectors.md).[^amass] Everything else on this page is identification-level and deliberately rating-free — Deans (W.S. Deans), EC/IC (Horizon Hobby), and Traxxas publish limited public spec documentation, and clones dominate the market; source targets are tracked in [Hobby Source Notes](hobby-source-notes.md).

## Sources

[^pp1545]: Anderson Power Products, *Powerpole® PP15/45 Series* datasheet — the smallest Powerpole housings; 15 A / 30 A / 45 A wire and PCB contacts share the same housings; wire sizes #20 AWG (0.5 mm²) through #10 AWG (6 mm²); rated up to 55 A per pole; genderless housings with dovetails for stacking multi-pole arrangements. <https://www.andersonpower.com/content/dam/app/ecommerce/product-pdfs/pp/ds-pp1545.pdf>

[^amass]: Amass Connectors — official manufacturer site of Changzhou Amass Electronics (originator of the XT series; its catalog also covers the MR/MT motor-trio ecosystem). Ratings for genuine AMASS XT parts are sourced on the [XT page](xt-connectors.md). <https://www.amassconnectors.com/>
