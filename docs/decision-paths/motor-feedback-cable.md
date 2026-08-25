---
id: motor-feedback-cable
title: "Pick connectors for motor power + feedback cabling"
description: "Pick connectors for servo/motor cabling: M23 power and signal circulars, M17/M40 siblings, quick-lock couplings, drive-ecosystem cordsets, and the EMC discipline that decides success."
slug: /decision-paths/motor-feedback-cable
sidebar_label: Motor + feedback cable
---

# Pick connectors for motor power + feedback cabling

A servo or motion axis usually needs **two electrical interfaces at the motor**: a power connection carrying the drive's switched output (plus brake and thermal wires), and a feedback connection carrying the encoder or resolver signals that the whole control loop depends on. The connector family here is largely chosen *for* you — servo motors ship with their receptacles installed, and drive ecosystems sell matched cordsets — so this path is less "pick a family" and more "recognize the family, buy the right halves, and don't sabotage the EMC."

:::note[Deliberately number-free]

Pin counts, currents, and voltage classes below are family-level orientation; every figure that matters comes from the motor's connection diagram, the drive manufacturer's cable specification, and the exact connector datasheet. When this page and the drive manual disagree, the drive manual wins — servo cabling is one of the places where the manufacturer's wiring guide is effectively part of the control design.

:::

## Use this when

- Connecting a **servo/stepper motor to its drive** — power, brake, thermal, and encoder/resolver feedback.
- Specifying the **extension or replacement cable** for an axis, a drag chain, or a robot joint.
- Designing a machine where **motors are field-replaceable** and the cable set must disconnect at the motor.

## Avoid this when

- The motor is small enough that the ecosystem uses **M12-class connectors** for both power and feedback — see the [industrial sensor path](industrial-sensor.md) and [M12 deep dive](../08-m12.md); the same discipline applies at smaller scale.
- The motor wires into a **terminal box** with glands and no disconnect — that's a wiring-practice problem, not a connector selection.
- A program requires **mil-spec hardware** — see [defense/rugged external I/O](defense-rugged-external-io.md).
- It's a hobby servo lead — [hobby track, servo connectors](../hobby/servo-connectors.md).

## Families to start with

- **M23 circulars — the servo workhorse.** A multi-manufacturer de-facto industrial standard (TE Intercontec, Phoenix Contact, binder, Hummel, and others) in two flavors you'll meet as a pair: **signal/feedback inserts** in the 17–19-pole class for encoders and resolvers, and **power inserts** with fewer, larger contacts (plus PE) for the drive output.[^m23fam] Shielded versions, IP67-class sealing when mated, threaded M23×1 coupling — or **quick-lock couplings** (SpeedTec-style) that replace multi-turn threading with a fraction-of-a-turn action, a real assembly-time win on machines with many axes.
- **M17 and M40 siblings** — the same philosophy scaled down (compact servos) and up (high-power axes). Verify insert compatibility per manufacturer; the shell size number is not the whole story.
- **Drive-brand cordsets** — every major drive ecosystem sells pre-molded, pre-tested motor and feedback cable sets to its own spec (shield termination, twisted pairs, drag-chain-rated jacket included). This is the [don't-fight-the-ecosystem](../examples/m12-sensor-interface.md) lesson again: a custom-built cable has to *earn* its place against a catalog cordset.
- **"One-cable" servo connections** — several ecosystems now run digital feedback inside the power cable (single-connector motors). Treat these as proprietary drive-ecosystem interfaces: follow the drive manufacturer's cable and connector spec exactly.
- **M12-class** for small motors/steppers, as above.

![Schematic of a servo motor connected to its drive by two separate shielded cables — power and feedback — with 360-degree shield termination at both ends and physical separation between the runs](/img/diagrams/motor-feedback-cabling.svg)

*The layout that works: two shielded cables, 360° shield termination at both ends per the drive manual, and physical separation between the switched power run and the feedback run.*

## Search terms

- `M23 servo motor power connector 6 pin PE shielded`
- `M23 signal connector 17 pin encoder feedback`
- `M23 speedtec quick lock servo cordset`
- `servo motor feedback cable drag chain rated`
- `[your drive brand] motor power cable [motor series]`

## Specs to check

- **The motor's connection diagram first.** The receptacles on the motor define series, inserts, keying, and pinout — you are buying the *mating* halves and cable, not choosing an interface.
- **Shield strategy per the drive manual** — servo power cables carry fast-switched PWM edges; expect a requirement for **360° shield termination at both ends** through metal backshells/glands, and follow it exactly. A pigtailed shield on a servo power cable is an EMC incident waiting for commissioning week ([§5.7](../05-connector-anatomy.md#57-emi-shielding-and-bonding)).
- **Separation of power and feedback** — separate cables, separated routing, crossings at right angles; the encoder pair's integrity is the axis's integrity.
- **Current and voltage class** for the power insert against the drive's continuous and peak output — plus **brake and thermal-sensor conductors**, which ride in the power cable in many ecosystems.
- **Cable construction** — drag-chain/continuous-flex rating, bend radius, jacket chemistry (oils/coolant), and the twisted/shielded pair construction the feedback protocol requires.
- **Coupling type and access** — threaded vs. quick-lock, and whether a hand fits the coupling nut in the installed position.
- **Keying between identical-looking connectors** on multi-axis machines — power vs. feedback are usually different inserts, but two adjacent axes are not.
- **Mated sealing rating and unmated caps** for washdown environments.

## Parts people forget

- **The feedback cable entirely** — the power cable gets ordered, the encoder cable gets discovered at commissioning.
- **Brake/thermal conductors** in the power cordset spec.
- **Drag-chain-rated cable** where the axis moves — standard cable fails in weeks.
- **The 360° backshell/gland hardware** that the shield spec assumes.
- **Dust caps** for open receptacles during machine build.

See [What People Forget](../what-people-forget.md).
- **Spare cordsets** for the maintenance stock — motors outlive cables in drag chains.

## Common traps

- **Building what you could buy.** Hand-terminating a 19-pole shielded feedback cable to beat a catalog cordset's price is usually a false economy — the cordset's shield termination and test are the product.
- **Feedback routed with power** in one bundle, tray, or chain compartment. The classic intermittent-position-fault generator.
- **Pigtailed shields** on servo power or feedback cables — see the shield discipline in [§5.7](../05-connector-anatomy.md#57-emi-shielding-and-bonding).
- **Assuming any M23 mates any M23.** Shell thread is not insert, keying, or shield-shell compatibility — match the manufacturer's mating chart, and treat cross-vendor intermating as a claim to verify.
- **Mixing feedback ecosystems** — encoder protocols, pinouts, and cable constructions differ per drive family even over the same connector shell.
- **Ignoring the drive manual's cable length and type limits** — feedback protocols and PWM output stages both carry cable constraints.

## Questions to ask a vendor/FAE

- Which **exact mating connector/cordset part numbers** match this motor's power and feedback receptacles (series, insert, keying, shield shell)?
- Is the cordset **drag-chain rated**, and to what bend radius and flex-cycle class?
- How is the **shield terminated** at each end, and does it meet the drive manufacturer's EMC wiring requirements?
- What are the **power insert's current/voltage ratings** against my drive's continuous and peak output, at my ambient?
- For quick-lock variants: is the coupling **vibration-rated** for this axis, and is it compatible with the motor's threaded receptacle?

## Example documentation bundle

- A [comparison-matrix](../tools/connector-comparison-matrix.md) row per axis class: motor series, power cordset P/N, feedback cordset P/N, length, chain rating.
- A [cable drawing](../tools/cable-drawing-template.md) or cordset spec reference with **shield termination called out at both ends**.
- An [ICD entry](../tools/connector-icd-template.md) per axis: connector series/inserts, pinouts by reference to the motor/drive documents, routing/separation rules.
- A [harness-inspection](../tools/harness-inspection-checklist.md) pass covering shield continuity and coupling torque/lock verification.

Related: [Industrial sensor](industrial-sensor.md) · [High-current DC power](high-current-dc-power.md) (and its energized-connector warning) · [Removable machine module](removable-machine-module.md) · [EMI, shielding, and bonding (§5.7)](../05-connector-anatomy.md#57-emi-shielding-and-bonding) · [M12 deep dive](../08-m12.md).

## Sources

[^m23fam]: M23 servo-connector ecosystem, family-level: signal/feedback connectors in the 17–19-pole class with shielded, IP67-rated options (binder M23 signal series); signal and power series in threaded M23×1 and SpeedTec-style quick-lock couplings for servo motor connections (TE Connectivity Intercontec 623/923-class series); M23 servo-drive and encoder-feedback cordsets (Phoenix Contact M23 circular range). <https://www.binder-connector.com/en/products/m23>, <https://www.te.com/en/products/brands/intercontec.html>, <https://www.phoenixcontact.com/en-us/products/circular-connectors> Pin counts and ratings vary by series and insert — verify the exact manufacturer documentation and the drive manual.
