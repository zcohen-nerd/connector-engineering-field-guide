---
id: board-to-board
title: "Pick a connector for board-to-board stacking"
description: "Pick a board-to-board connector: stacking headers, shrouded pairs, fine-pitch mezzanine, card edge, and DIN 41612 backplane — stack height, support, and the traps."
slug: /decision-paths/board-to-board
sidebar_label: Board-to-board
---

# Pick a connector for board-to-board stacking

No wires here: two boards plug straight into each other as a stack, mezzanine pair, or card and backplane. The spec that sneaks up on people is **mated stack height**—the exact distance between the boards after mating. Most families offer several heights behind nearly identical part numbers, so “same series” does not mean “same mechanical fit.”

:::note[Basic orientation, deliberately number-free]

This is the basic map, from hobby stacking headers through industrial mezzanine pairs and classic backplanes. There are no current, cycle, or dimensional values here; those come from the exact family's height tables, per-pin ratings, and tolerance data. Once impedance-controlled mezzanine or modern backplane signal integrity enters the conversation, you've crossed into high-speed design. Bring the manufacturer's SI documentation and the right specialist with you.

:::

## Use this when

- Two PCBs mount **rigidly, parallel (or perpendicular), and permanently-ish** to each other — a daughtercard, a module on a carrier, a display on a controller, a card in a rack.
- The interconnect density or repeatability of a direct board joint beats running a [wire harness](internal-pcb-harnessing.md) between the boards.
- The assembly comes apart for service **occasionally**, not daily — board-to-board families are mostly low-cycle.

## Avoid this when

- The boards move relative to each other, can't hold tight coplanarity, or live in different mechanical assemblies — use a short **FFC/FPC jumper or a wire-to-board harness** instead ([internal PCB harnessing](internal-pcb-harnessing.md)); a flex bridge forgives what a rigid stack cannot.
- The interface is **external, sealed, or field-serviced** — that's a panel connector problem ([sealed feedthrough](sealed-enclosure-feedthrough.md), [defense/rugged I/O](defense-rugged-external-io.md)).
- The joint sees **severe vibration with no mechanical support plan** — §2's caution applies: a board-to-board connector without standoffs or rails is a fretting experiment.
- You need **frequent mating** (a dock, a test interface) — check cycle ratings first; consider pogo/spring-pin docking or a [debug/service port](debug-service-port.md) architecture instead.

## Families to start with

- **0.1 in / 2.54 mm stacking headers** — the Arduino-shield / Raspberry Pi-HAT pattern: female socket strips plus long-tail stackable headers. Cheap, everywhere, friction-fit, and **unpolarized** — fine for bench and maker stacks, with the same offset/reversal traps as their [Dupont cousins](../hobby/dupont-headers.md).
- **Shrouded / keyed header pairs (2.54 mm class)** — the production upgrade: polarization and pin protection for the same job.
- **2 mm and 1.27 mm pin/socket strips** — the density step between 0.1 in and true fine pitch; PC/104-heritage stacks live here.
- **Fine-pitch mezzanine systems** — defined mated-height SMT pairs with alignment features: Hirose DF40-class, Molex SlimStack, Samtec's mezzanine ranges, and TE/Harwin equivalents. This is the modern SBC/module standard — and where the mated-height table and pick-the-pair discipline matter most.
- **Card edge** — the connector lives on one board and mates with **plated fingers on the other** (PCIe/M.2-style, legacy gold-finger cards). Cheapest possible second half; cycle life and reliability ride on the finger plating and bevel.
- **DIN 41612 / IEC 60603-2 (Eurocard/backplane class)** — the classic rack card-to-backplane pin-and-socket family; still everywhere in industrial and legacy systems. Press-fit (compliant-pin) termination is common on backplanes.
- **Pogo / spring-pin arrays** — compressible contacts for docking, test fixtures, and battery-style interfaces; a different mechanical philosophy (sliding/compressing wipe, external retention required).

![Side view of two stacked PCBs joined by a mezzanine connector pair, with standoffs at both ends carrying the mechanical load and the mated stack height dimensioned](/img/diagrams/board-to-board-stack.svg)

*The two rules in one picture: the standoffs carry the load, and the connector pair is ordered to the mated stack height.*

## Search terms

- `board to board connector mated height 8mm 0.8mm pitch`
- `stackable header extra long pins 2.54mm`
- `mezzanine connector pair receptacle header stack height`
- `DIN 41612 connector 64 pin type B backplane`
- `card edge connector 2.54mm gold finger`
- `spring loaded pogo pin connector board`

## Specs to check

- **Mated stack height, from the manufacturer's height table** — and that your two part numbers are the *matched pair* for that height. Same family, wrong height code = no mate, or a stressed one.
- **Polarization / anti-offset** — can the boards assemble shifted by one row or rotated? Unpolarized strips can; keyed and shrouded families can't.
- **Alignment capture** — self-alignment range, guide features, or guide pins, especially where the stack assembles blind.
- **Mating cycles** — often low, and lower as pitch shrinks. Match to the service model, with margin.
- **Per-pin current and the power strategy** — signal contacts are not power contacts; families offer dedicated power pins or you allocate (and derate) groups per the datasheet.
- **Tolerance stack** — PCB thickness, standoff length, connector height, and coplanarity across *both* boards must close so the pair neither bottoms out nor barely wipes.
- **Vibration and the support plan** — standoffs/rails/wedge-locks sized so the connector carries **signals, not structure**.
- **Signal-integrity boundary** — fast lanes (high-speed serial, RF on board) need the family's impedance-controlled variants and the manufacturer's SI data; that's your cue that "basic" is over.

## Parts people forget

- **Standoffs and their screws** — they are part of the interface, not shop supplies; put the length and torque on the drawing.
- **Both halves, as a pair** — header *and* receptacle, same series, same height code, on the BOM together.
- **Guide pins / chamfered leads** where assembly is blind.
- **Board keep-outs and land patterns** per the manufacturer drawing — including keep-outs under the mated connector on both boards.
- **Spares for fine-pitch parts during development** — rework kills them faster than service does.

See [What People Forget](../what-people-forget.md).

## Common traps

- **The connector as the only mechanical support.** It will work on the bench and fret, fatigue, or crack solder joints in the field. Standoffs first, connector second.
- **Two catalogs, one wrong height.** Mixed mated heights across "the same" family is the classic board-respin discovery.
- **Unpolarized stacks assembled offset or reversed** — the Dupont trap at board scale; keying or asymmetric mounting prevents it.
- **Card-edge cycles assumed free.** The mating half is plated fingers; plating spec, bevel, and cycle expectations belong in the design, not in hope.
- **Tolerance stack never closed.** Coplanarity and standoff math decide whether fine-pitch contacts actually wipe; the datasheet's tolerance section is load-bearing reading.
- **Treating a stack joint as a service disconnect.** Low-cycle families in a pull-it-weekly role wear out early — see the service-model logic in [§1](../01-what-connectors-do.md).

## Questions to ask a vendor/FAE

- Which **part-number pair** gives my required mated height, and what is the height tolerance?
- What is the **effective wipe length** at worst-case tolerance stack, and the recommended coplanarity budget?
- What are the **mating-cycle rating** and the per-pin **current at my loaded-contact count and temperature**?
- What **alignment capture range** does the family provide, and are guide hardware or polarization options available?
- For fast lanes: is there an **impedance-controlled variant**, and where is the SI documentation?

## Example documentation bundle

- A [comparison-matrix](../tools/connector-comparison-matrix.md) row: requirement, candidate families, choice.
- An assembly drawing calling out **both connector P/Ns, the mated stack height, standoff length/torque, and guide hardware**.
- An [ICD entry](../tools/connector-icd-template.md) for the board interface: pinout, power-pin allocation, keep-outs, mate/unmate procedure, cycle budget.
- A [design-review](../tools/design-review-checklist.md) pass covering the tolerance stack and the mechanical-support plan.

Related: [Internal PCB harnessing](internal-pcb-harnessing.md) (the wire alternative) · [Micro-D / compact high-rel](micro-d.md) · [Connector Anatomy (§5)](../05-connector-anatomy.md) · [Major Connector Categories (§2)](../02-major-connector-categories.md) · [Identification Workflow](../connector-identification.md).
