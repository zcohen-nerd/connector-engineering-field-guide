---
id: rugged-on-a-budget
title: "Pick a connector for rugged-on-a-budget field wiring"
description: "Pick a connector for rugged-on-a-budget field wiring: sealed automotive families (Deutsch, Superseal, MX150, Metri-Pack) before you jump from hobby parts to 38999."
slug: /decision-paths/rugged-on-a-budget
sidebar_label: Rugged on a budget
---

# Pick a connector for rugged-on-a-budget field wiring

The gap between hobby connectors and mil-spec circulars is where most field-robotics wiring actually lives. Sealed automotive and off-road families give you real IP67/IP68 sealing and vibration life without the cost, tooling, and lead time of MIL-DTL-38999 — *as long as you treat them with the same discipline you would give any sealed connector.*

:::note

These are not "toy" connectors. Deutsch, Superseal, MX150, and Metri-Pack are professional automotive/off-road/industrial families that survive mud, vibration, and weather on vehicles for years. For a robot or a field enclosure, they are usually a far better answer than reaching for the JST, Dupont, or XT parts already on the bench.

:::

## Use this when

- The system needs **better-than-hobby reliability** — exposure to dirt, vibration, splash, outdoor use, vehicle/robot motion, or repeated field handling.
- The interface is mostly **discrete power and signal wiring** — not high-speed Ethernet, RF, or fiber.
- You need **sealed, crimped wire-to-wire or wire-to-panel** connections you can build and service with hand tools.
- **Budget, tooling, availability, or schedule** does not justify MIL-DTL-38999, and no one is requiring it.

## Avoid this when

- A customer or program **specifically requires MIL-DTL / QPL** hardware, EMI backshell continuity, 360° shield termination, high-density mixed inserts, or coax/twinax/fiber contacts — see [Defense / rugged external I/O](defense-rugged-external-io.md).
- You need **Ethernet** ([Rugged Ethernet](rugged-ethernet.md)), an **[RF/GPS/radio path](rf-gps-radio.md)**, or fiber.
- The interface is **internal and protected** and does not need sealing — see [Internal PCB harnessing](internal-pcb-harnessing.md).
- You need a panel-mounted, mixed-signal, high-density, configuration-controlled **defense/aero external interface**.

## Families to start with

- **Deutsch DT / DTM / DTP** — genderless wedgelock housings, hand-crimpable, ubiquitous in off-road and automotive. Rough split: **DTM** for small signal, **DT** for mid-range, **DTP** for power.
- **TE AMP Superseal 1.5 / AMPSEAL** — compact sealed inline connectors; AMPSEAL covers higher pin counts.
- **Molex MX150 / MX150L** — sealed signal-to-power system for industrial/automotive use.
- **Aptiv (Delphi) Metri-Pack** — long-standing automotive terminal system in sealed and unsealed variants, sized by terminal series (150/280/480/630…).

Family-level sealing and current figures for these live in the sourced [sealed automotive table (§3.2)](../03-connector-standards-and-families.md#32-sealed-automotive-connector-families) — read them as orientation, then verify the exact series datasheet. Don't over-shop brands: pick one family that covers your current range and stock it.

## Search terms

- `Deutsch DT sealed connector 2 pin 4 pin`
- `Deutsch DTM sensor connector`
- `Deutsch DTP power connector`
- `AMP Superseal 1.5 sealed connector`
- `Molex MX150L sealed power connector`
- `Metri-Pack sealed connector`

## Specs to check

- **Wire seal range vs. your wire OD**, and the correct contact + crimp for that gauge. This is the single most common cause of a "sealed" connector that leaks.
- **What the sealing claim covers** — mated vs. unmated, and the housing vs. the complete, correctly-assembled connection.
- **Current per contact** from the series datasheet *at your temperature and loaded-contact count* — not from a marketplace listing.
- **Latch / wedgelock / secondary lock (TPA)** presence and positive engagement.
- **Cavity count**, and whether every unused cavity has a **sealing plug**.
- **Cable jacket** compatibility with the seal and any strain relief.

## Parts people forget

- **Cavity / seal plugs** for every unused position — an unplugged cavity is an open hole in a "sealed" connector.
- The **wedgelock / secondary lock** — some ship separately from the housing.
- The **correct crimp tool** and an **extraction tool**.
- **Both halves and the contacts** — pins and sockets are separate line items from the housings.

See [What People Forget](../what-people-forget.md) for the full list.

## Common traps

- **"IP-rated family" does not mean every assembly is sealed.** Sealing depends on the right seal, contact, crimp, cavity plugs, secondary lock, compatible cable, *and* the correct assembly process. Get one wrong and that cavity leaks.
- **Cheap marketplace "kits"** with unknown contact plating, weak housings, poor seals, and dubious crimp terminals. Buy known contacts from a real distributor and inspect them.
- **Treating hand-crimpable as "no tool needed."** Hand-crimpable means the *correct hand tool* and an inspection criterion — not pliers and hope.
- **Defaulting to hobby connectors out of habit.** A Deutsch DT costs a little more than a Dupont header and survives an environment that will kill the header in a season.

:::warning

A sealed automotive family is *not* a substitute for MIL-DTL-38999 where qualification, an EMI backshell ecosystem, high-density mixed inserts, or extreme environments are actually required. "Rugged on a budget" is the right call when nothing is *forcing* mil-spec — not a way to dodge a real requirement.

:::

## Questions to ask a vendor/FAE

- What is the exact **contact P/N and crimp tool/die** for my wire gauge, and what is the inspection criterion for a good crimp?
- Which **seal and cavity plug** match my wire OD and cavity size?
- Is the **IP rating** stated for the fully mated, correctly-assembled connection, and under what test?
- Does the housing ship **with the wedgelock / secondary lock**, or is it a separate order?
- What is the **temperature-derated current** for my contact and wire gauge?

## Example documentation bundle

- A [comparison-matrix](../tools/connector-comparison-matrix.md) row: requirement, candidate families, and choice.
- A source-controlled **pinout** with cavity assignments, **contact P/Ns**, **seal plugs**, and **wedgelocks** all called out.
- A [cable drawing](../tools/cable-drawing-template.md), an [ICD entry](../tools/connector-icd-template.md), and a **crimp/assembly note** with the tool and inspection criteria.

The fully worked version of this — requirements through review checklist — is the [Connector Selection Packet](../examples/connector-selection-packet.md).

Related: [Sealed automotive families (§3.2)](../03-connector-standards-and-families.md#32-sealed-automotive-connector-families) · [Consumer/hobby vs. production](../12-consumer-hobby-prototype-connectors.md) · [Selection Workflow](../04-connector-selection-workflow.md) · [Practical Checklist](../10-selection-checklist.md).
