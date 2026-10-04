---
id: screw-terminals
title: "Screw Terminals, Spring Clamps, and Ferrules"
description: "The terminal-block deep dive: clamp styles compared, pitch and voltage classes, torque as a real spec, the ferrule discipline, and why you never tin stranded wire."
slug: /hobby/screw-terminals
sidebar_label: Screw Terminals & Ferrules
---

# Screw Terminals, Spring Clamps, and Ferrules

Terminal blocks are the connector nobody thinks of as a connector — which is exactly why they fail like one. Every power distribution board, motor driver, thermostat, and "no soldering required" kit clamps a wire somewhere, and the clamp is a real electromechanical interface with a gauge range, a torque spec, a wire-preparation rule, and failure modes that show up months later as heat. This page is the discipline the screw never tells you about.

## 1. The clamp-style map

"Screw terminal" is a family of clamping mechanisms, and the mechanism decides the rules:

| Style | How it clamps | Where you meet it | The thing to know |
|---|---|---|---|
| **Rising clamp / wire protector** | Screw lifts a pressure plate; the screw never touches the wire | Quality PCB blocks, DIN-rail blocks | The style to prefer — the plate spreads force and won't chew strands |
| **Direct/plate screw** | Screw tip bears on the conductor | Cheap PCB blocks, barrier strips | Screw rotation can birdcage stranded wire; ferrules earn their keep here |
| **Barrier strip** | Screw + captive wire or ring/spade lug | Older equipment, audio, mains-adjacent wiring | Really a lug interface — crimp rings/spades beat bare wire under a screw head |
| **Push-in spring** | Conductor insertion opens the spring for permitted wire preparations | Modern DIN-rail and PCB blocks | Direct insertion may require solid wire or an approved ferrule; use the actuator for fine-stranded wire where specified |
| **Actuated spring / cage clamp** | A lever or tool opens the spring before insertion | DIN-rail and PCB blocks, field splices | Many accept bare fine-stranded wire directly; check the exact terminal |
| **Lever (Wago-style)** | Operator-actuated spring | Field splices, lighting, power distribution | The one clamp class with deep genuine-part documentation — the full story, both size classes and both rating systems, in [§3 below](#3-lever-connectors-for-real-power-work) |
| **Pluggable two-part** | Any of the above, in a header-and-plug pair | Motor drivers, industrial PCBs | The unplug-to-service upgrade — and home of the pitch trap below |

![Line diagram comparing three terminal clamp mechanisms in cross-section — rising clamp, direct screw, and spring cage — plus a ferruled stranded wire](/img/diagrams/hobby-terminal-clamps.svg)

*Three ways to squeeze a wire, plus a ferrule for terminals that permit that preparation. The mechanism decides whether the screw touches your conductor.*

## 2. The numbers nobody reads

- **Pitch, again.** PCB terminal blocks and pluggable headers come in pitch families — 5.08 mm (0.2"), 5.0 mm, 3.81 mm, 3.5 mm, 2.54 mm — and pitch tracks the voltage class: wider spacing, more creepage, higher rating. The [measure-don't-eyeball rule](pitch.md) applies with teeth here, because **5.0 mm and 5.08 mm pluggable halves will visually "fit" and bind or mis-seat across enough positions** — the classic lookalike trap at power level.
- **The gauge range is a range** — a minimum *and* a maximum, and often different for solid, stranded, and fine-stranded wire classes. A 24 AWG signal wire in a clamp sized for 12 AWG is retention theater.
- **Strip length is printed on the block** (or its datasheet) for a reason: too short clamps insulation, too long leaves bare wire exposed above the clamp.
- **Torque is a specification, not a feeling.** Real terminal blocks publish a tightening torque; under-torqued joints heat, over-torqued ones damage strands or the block. Whether a connection needs scheduled inspection or re-tightening is also product-specific: some conventional screw connections require it, while self-locking designs are explicitly sold as maintenance-free.[^screw-maintenance] Get both the installation torque and the maintenance instruction from the exact manufacturer's documentation — never impose a generic re-torque schedule.
- **One conductor per clamp point** unless the datasheet explicitly rates two — and two-wire ratings usually require same gauge, same type.
- **Vibration often favors springs, but mechanism beats category.** Spring and cage-clamp styles maintain force as conductors move, while ordinary screw connections may relax. Some self-locking screw-terminal designs are also qualified for vibration and maintenance-free service.[^screw-maintenance] Select from the exact terminal's vibration data and maintenance instructions, not "spring good, screw bad" folklore.

## 3. Lever connectors for real power work

The lever class is the one corner of this page with deep, genuine-part documentation — which is exactly why it's the field-splice workhorse. The details that matter when a lever connector carries real current, per WAGO's own documentation:[^wago221][^wago221-6]

| | 221-4xx (4 mm² class) | 221-6xx (6 mm² class) |
|---|---|---|
| Conductors | 0.2–4 mm² solid/stranded, 0.14–4 mm² fine-stranded (24–12 AWG) | 0.5–6 mm², all conductor types (20–10 AWG) |
| IEC rating | up to 32 A / 450 V | 41 A / 450 V |
| UL rating — *same part* | 20 A / 600 V | 30 A / 600 V (UL 486C) |
| Temperature class | 85 °C surrounding air | 85 °C surrounding air |

Four things to internalize:

- **The 6 mm² line exists.** Most people only know the 4 mm² connectors; the 221-6xx family is the same mechanism scaled to 10 AWG and a 41 A IEC class — the difference between a lighting splice and actual power distribution.
- **The IEC and UL numbers differ on the identical part.** 32 A / 450 V and 20 A / 600 V describe the *same connector* under two certification regimes (EN 60664-based IEC characterization vs. the UL 486C listing). Design to the rating system your jurisdiction and inspection actually use — and check which system a listing is quoting before comparing parts.
- **The cited WAGO 221 accepts bare fine-stranded conductors.** Other actuated spring terminals can too. Direct push-in capability and ferrule acceptance depend on the exact terminal, conductor size, and preparation.
- **Carriers make it an installation.** WAGO's mounting-carrier and strain-relief accessories fix 221s in an enclosure — the difference between a loose splice and a serviceable distribution point. A lever connector is still not a junction box: the moment it's mains, enclosure and local code govern.

And once more for the back: these figures are for **genuine WAGO 221s** — marketplace "Wago-style" levers inherit none of them.

## 4. Ferrules — useful where the terminal permits them

A ferrule (bootlace ferrule, per the DIN 46228 style system) is a crimped sleeve that contains the wire strands. It can ease insertion and limit strand splay, but it is not required or permitted by every clamp. Verify ferrule acceptance, conductor range, sleeve length, crimp profile, and full insertion against the exact terminal's instructions. Ferrules can reduce the accepted conductor range or interfere with insertion when the collar or sleeve is wrong.[^ferrules] Two further disciplines:

- **Crimp them properly** — a ferrule crimper with the right die, the same crimp seriousness as [everything else](crimping.md).
- **Don't trust the color.** Ferrule color-coding exists in *competing* systems (the French and German codes assign different colors to the same sizes) — read the printed size, not the sleeve color.

![A ferrule crimper beside assorted wire ferrules and a cable with ferrule-terminated conductors](/img/photos/ferrules-and-crimper.jpg)

*The ferrule kit and its crimper — one wire preparation to verify against the exact terminal. Photo: [Simon A. Eugster](https://commons.wikimedia.org/wiki/File:Wire_ferrules_with_and_without_insulation.jpg), CC BY-SA 3.0, via Wikimedia Commons.*

## 5. The rule: never tin stranded wire before clamping

Soldering the end of a stranded wire and putting it under a screw feels tidy, but Phoenix Contact documents why it can loosen: the compressed solder/tin mass can fracture and change shape, and copper and solder expand differently during thermal cycling until the conductor is no longer clamped correctly.[^tinned-wire] The failure arrives later as a loose, high-resistance power joint. Use the conductor preparation the exact terminal permits — commonly bare stranded wire in a suitable rising clamp or a **properly crimped ferrule** — and tighten to the published specification.

![Opened mains plug with heat-damaged terminals and tinned stranded conductors at the screw connections](/img/photos/defective-tinned-wire-plug.jpg)

*A documented result of clamping tinned stranded wire: the connection loosened and heated inside this mains plug. This is a failure example, not a general-purpose assembly reference. Photo: [HansPL](https://commons.wikimedia.org/wiki/File:Defekter_Stecker_mit_verzinnter_Litze.jpg), released into the public domain, via Wikimedia Commons.*

## 6. Traps

- **Tinned wire under a clamp** — see above; the tidy-looking one is the fire risk.
- **Two conductors into one clamp point.** Same disease as [doubling wires into one crimp](crimping.md): clamps are specified for one prepared conductor unless the block's documentation says otherwise. Use a **twin ferrule** only when the terminal manufacturer permits that two-conductor preparation, wire sizes, and crimp geometry. Physical fit and combined cross-sectional area alone do not qualify it; otherwise use separate terminal positions or an approved splice.
- **Stray strands.** One whisker outside the clamp is a short waiting for a neighbor. Prepare as specified and inspect; do not add a ferrule by default.
- **Terminal blocks are not strain relief.** The clamp holds the conductor electrically; the *cable* needs its own anchor before the block, always.
- **The 5.0 vs 5.08 pluggable mismatch** — measure across all positions ÷ (N−1), per the [pitch page](pitch.md).
- **"12 A" clone blocks.** Marketplace terminal strips carry ratings with nothing behind them — the same [kit skepticism](connector-kits.md) applies to green blocks as to connectors.
- **Re-stripping into the same clamp forever.** Clamps have finite re-termination cycles too; when the block's had a hard life, replace it.
- **Mains voltage.** The moment a terminal block carries mains, you've left this guide's lane: enclosure, creepage, touch protection, and local electrical code govern — not hobby judgment.

## 7. When to move to the engineering track

Field-serviceable distribution done right — DIN-rail terminal blocks in an enclosure with documented torque and wire prep — is the professional version of this page: see [§12.3](../engineering/guide/12-consumer-hobby-prototype-connectors.md), [terminal blocks in the family map](../engineering/guide/03-connector-standards-and-families.md), and, when the wiring leaves the bench, [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md).

## Source status

Lever-class figures — both size classes, both rating systems — are cited to WAGO's own family and product pages.[^wago221][^wago221-6] The maintenance-free screw-design counterexample and the tinned-wire loosening mechanism are cited to Phoenix Contact.[^screw-maintenance][^tinned-wire] Clamp-style anatomy, strip-length/gauge-range/one-wire rules, and the pitch families are identification- and process-level, deferring numbers to the exact block's datasheet throughout. Representative torque-class figures remain an open source target in [Hobby Source Notes](hobby-source-notes.md). DIN 46228 is named as the ferrule style system without reproducing its tables.

## Sources

[^wago221]: WAGO, *221 Series* 4 mm² class (221-412 / -413 / -415) — lever splicing connectors for solid/stranded 0.2–4 mm² and fine-stranded 0.14–4 mm² conductors (24–12 AWG); IEC characterization up to 32 A / 450 V; UL rating 20 A / 600 V on the same parts; 85 °C surrounding-air class. Genuine-family figures only; "Wago-style" clones are not covered. Family pages: <https://www.wago.com/gb/products/electrical-interconnections/discover-installation-terminal-blocks-and-connectors/221>, <https://www.wago.com/us/splicing-connectors-221>

[^wago221-6]: WAGO, *221 Series* 6 mm² class (221-612 / -613 / -615) — the same lever mechanism for all conductor types 0.5–6 mm² (20–10 AWG); 41 A / 450 V IEC, 30 A / 600 V per the UL 486C listing; 85 °C surrounding-air class. WAGO product page (figures mirrored across distributor spec listings): <https://www.wago.com/global/installation-terminal-blocks-and-connectors/splicing-connector-with-levers/p/221-612>

[^screw-maintenance]: Phoenix Contact, *Terminal Blocks* — its Reakdyn screw-locking principle is described as maintenance-free and vibration-resistant, demonstrating why re-tightening requirements cannot be generalized across all screw terminals. Follow the exact terminal's installation and maintenance documentation. <https://www.phoenixcontact.com/en-us/products/terminal-blocks>

[^tinned-wire]: Phoenix Contact, *The Problems with Tinning Wires* — explains how compressed tin/solder can fracture and how differential thermal expansion can leave a tinned conductor loose in a screw-style terminal block; recommends ferrules and the proper screw specification as the alternative. <https://assets.phoenixcontact.com/file/a819277e-2077-48d0-a5c2-0e7183fef5d9/media/original?The_problems_with_tinning_wires_U004008A.pdf=>

[^ferrules]: WAGO, *Practical Tips: Ferrules* — conductor preparation, ferrule length/geometry, and product-specific limitations; bare conductors are the basis of many terminal approvals. <https://www.wago.com/global/industries/building-technology/electrical-installers/helpful-tips/ferrules>
