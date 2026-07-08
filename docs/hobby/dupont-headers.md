---
id: dupont-headers
title: "Dupont / 0.1 Inch Headers"
description: "The breadboard-jumper ecosystem: what 'Dupont' actually names, where the 2.54 mm header world works brilliantly, and where its friction fit betrays you."
slug: /hobby/dupont-headers
sidebar_label: Dupont / 0.1" Headers
---

# Dupont / 0.1 Inch Headers

## What people call it

"Dupont," jumper wires, breadboard wires, "2.54 mm connectors," male/female jumpers, GPIO jumpers.

## What it actually is

The generic **0.1 inch (2.54 mm)** pin-header ecosystem: square 0.025 in posts, friction-fit crimp sockets, and snap-together plastic housings in single and multi-position formats. "Dupont" is a **hobby/marketplace folk name** — a historical company reference, not a current manufacturer specification — so no drawing governs what a kit sells you, and housing/contact quality varies kit to kit.

## Where it shows up

Breadboards, Arduino-style headers, Raspberry Pi GPIO jumper wiring, dev-board experiments, bench prototypes, test leads — anywhere speed of rewiring beats permanence.

## How to identify it

2.54 mm pitch ([measure it](pitch.md) — 2.5 mm lookalikes exist), square pins, rectangular black housings with removable crimp contacts. **Female socket jumpers** slide over pins; **male pin jumpers** plug into breadboards/sockets. **Single housings** carry one contact and can be re-shuffled freely; **multi-position housings** (1×N, 2×N) gang contacts but only fit matching header layouts — contacts can usually be extracted and re-housed.

## What to buy

For bench use: pre-made jumper assortments (M-M, M-F, F-F) from a reputable supplier beat crimping your own. For semi-permanent internal wiring, step up to a latched family instead ([internal PCB harnessing](../decision-paths/internal-pcb-harnessing.md)). If you do crimp: housings and contacts are separate purchases, and [the crimping rules](crimping.md) apply.

:::warning[Dupont is a bench connector, not a retention strategy]

Dupont-style jumpers are excellent for breadboards and quick experiments. They have little retention, little polarization, no sealing, and inconsistent kit quality. Do not rely on them where vibration, high current, repeated service, or other people's hands are involved.

:::

## Common traps

- **Power through jumpers.** Thin kit wire plus a friction contact is a voltage-drop and heat generator — treat Dupont as a signal-and-milliamps connector and use real [power wiring](power-vs-signal.md) for anything that works for a living.
- **No polarization** — nothing stops a reversed or offset connection except your attention. Shrouded/keyed headers exist for a reason ([glossary](../glossary.md)).
- **Vibration walks them off.** The first bumpy ride disconnects them; there is no latch.
- **Kit-to-kit inconsistency** — retention force and plating vary; a loose contact is an intermittent, not a failure you'll find quickly.

## Source status

No governing manufacturer drawing exists for the generic ecosystem — that's the point of this page. Pitch (0.1 in = 2.54 mm) is definitional; everything else (current, retention, plating) is per the *actual* kit or the genuine header family you substitute. See [Hobby Source Notes](hobby-source-notes.md).

## When to move to the engineering track

The moment the wiring leaves the bench: vibration, current, outdoor exposure, or someone else servicing it. Start with [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md) and the [internal PCB harnessing path](../decision-paths/internal-pcb-harnessing.md) for latched, specified replacements.
