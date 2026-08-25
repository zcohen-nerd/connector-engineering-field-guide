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
| **Push-in / cage-clamp spring** | Spring presses the conductor against a busbar | Modern DIN-rail and PCB blocks | Vibration-tolerant, torque-free — but stranded wire wants a ferrule to push in |
| **Lever (Wago-style)** | Operator-actuated spring | Field splices, lighting | The sourced anchor for the class: WAGO's own 221 family page rates it 32 A / 450 V over 0.2–4 mm²[^wago221] — clone levers inherit none of that |
| **Pluggable two-part** | Any of the above, in a header-and-plug pair | Motor drivers, industrial PCBs | The unplug-to-service upgrade — and home of the pitch trap below |

![Line diagram comparing three terminal clamp mechanisms in cross-section — rising clamp, direct screw, and spring cage — plus a ferruled stranded wire](/img/diagrams/hobby-terminal-clamps.svg)

*Three ways to squeeze a wire, and the ferrule that gives stranded wire a solid, clampable end. The mechanism decides whether the screw touches your conductor.*

## 2. The numbers nobody reads

- **Pitch, again.** PCB terminal blocks and pluggable headers come in pitch families — 5.08 mm (0.2"), 5.0 mm, 3.81 mm, 3.5 mm, 2.54 mm — and pitch tracks the voltage class: wider spacing, more creepage, higher rating. The [measure-don't-eyeball rule](pitch.md) applies with teeth here, because **5.0 mm and 5.08 mm pluggable halves will visually "fit" and bind or mis-seat across enough positions** — the classic lookalike trap at power level.
- **The gauge range is a range** — a minimum *and* a maximum, and often different for solid, stranded, and fine-stranded wire classes. A 24 AWG signal wire in a clamp sized for 12 AWG is retention theater.
- **Strip length is printed on the block** (or its datasheet) for a reason: too short clamps insulation, too long leaves bare wire exposed above the clamp.
- **Torque is a specification, not a feeling.** Real terminal blocks publish a tightening torque; under-torqued joints heat, over-torqued ones damage strands or the block. Industrial practice re-torques power terminals after the first thermal cycles — screws relax as conductors creep. Get the number from the exact datasheet.
- **One conductor per clamp point** unless the datasheet explicitly rates two — and two-wire ratings usually require same gauge, same type.
- **Vibration prefers springs.** Screws loosen under vibration unless retorqued or locked; spring and cage-clamp styles hold by design — the reason modern machine wiring went push-in.

## 3. Ferrules — the missing part of every stranded-wire clamp

A ferrule (bootlace ferrule, per the DIN 46228 style system) is a crimped tin-plated sleeve that turns a bundle of strands into one solid, square-shouldered pin. That's what a clamp is designed to grip. Ferrules stop strand splay and whiskering, survive re-termination, and give spring/push-in blocks something to actually push against. Two disciplines:

- **Crimp them properly** — a ferrule crimper with the right die, the same crimp seriousness as [everything else](crimping.md).
- **Don't trust the color.** Ferrule color-coding exists in *competing* systems (the French and German codes assign different colors to the same sizes) — read the printed size, not the sleeve color.

![A ferrule crimper beside assorted wire ferrules and a cable with ferrule-terminated conductors](/img/photos/ferrules-and-crimper.jpg)

*The ferrule kit and its crimper — the stranded wire's ticket into any clamp. Photo: [Simon A. Eugster](https://commons.wikimedia.org/wiki/File:Wire_ferrules_with_and_without_insulation.jpg), CC BY-SA 3.0, via Wikimedia Commons.*

## 4. The rule: never tin stranded wire before clamping

Soldering the end of a stranded wire and putting it under a screw feels tidy and is a **long-established prohibition** in wiring practice: solder is soft and *cold-flows* under sustained clamp pressure, so the joint the screw made on day one slowly relaxes into a loose, high-resistance joint — the failure arrives months later, as heat, in the exact spot carrying your power. Bare stranded wire in a rising clamp, or a **crimped ferrule**, is the correct end. (Mechanism widely documented across wiring codes and manufacturer guidance; a first-party manufacturer citation is tracked as an open source target in [Hobby Source Notes](hobby-source-notes.md).)

## 5. Traps

- **Tinned wire under a clamp** — see above; the tidy-looking one is the fire risk.
- **Stray strands.** One whisker outside the clamp is a short waiting for a neighbor. Twist, ferrule, inspect.
- **Terminal blocks are not strain relief.** The clamp holds the conductor electrically; the *cable* needs its own anchor before the block, always.
- **The 5.0 vs 5.08 pluggable mismatch** — measure across all positions ÷ (N−1), per the [pitch page](pitch.md).
- **"12 A" clone blocks.** Marketplace terminal strips carry ratings with nothing behind them — the same [kit skepticism](connector-kits.md) applies to green blocks as to connectors.
- **Re-stripping into the same clamp forever.** Clamps have finite re-termination cycles too; when the block's had a hard life, replace it.
- **Mains voltage.** The moment a terminal block carries mains, you've left this guide's lane: enclosure, creepage, touch protection, and local electrical code govern — not hobby judgment.

## 6. When to move to the engineering track

Field-serviceable distribution done right — DIN-rail terminal blocks in an enclosure with documented torque and wire prep — is the professional version of this page: see [§12.3](../12-consumer-hobby-prototype-connectors.md), [terminal blocks in the family map](../03-connector-standards-and-families.md), and, when the wiring leaves the bench, [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md).

## Source status

Lever-class figures are cited to WAGO's own 221 family page.[^wago221] Clamp-style anatomy, strip-length/gauge-range/one-wire rules, and the pitch families are identification- and process-level, deferring numbers to the exact block's datasheet throughout. The never-tin rule is stated with its mechanism as established practice — a first-party manufacturer document remains an open source target, as do representative torque-class figures; both tracked in [Hobby Source Notes](hobby-source-notes.md). DIN 46228 is named as the ferrule style system without reproducing its tables.

## Sources

[^wago221]: WAGO, *221 Series* installation connector family page — lever-actuated splicing connectors rated at a 32 A / 450 V class across 0.2–4 mm² solid and fine-stranded conductors (0.2–2.5 mm² stranded); tool-free lever operation. Genuine-family figures only; "Wago-style" clones are not covered. <https://www.wago.com/gb/products/electrical-interconnections/discover-installation-terminal-blocks-and-connectors/221>
