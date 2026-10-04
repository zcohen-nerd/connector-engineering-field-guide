---
id: rugged-control-box
title: "Worked Example: Rugged Control Box"
description: "Exercise 1 architecture study: selecting and documenting the 24 VDC, Ethernet, CAN, sensor, motor, and service-port connectors for a small sealed enclosure — candidates, rejections, pinout discipline, and the remaining release decisions."
slug: /examples/rugged-control-box
sidebar_label: Rugged Control Box
---

# Worked Example: Rugged Control Box

This architecture study develops [Exercise 1](../engineering/guide/13-hands-on-exercises.md): a small sealed control box with 24 VDC input, Ethernet, CAN, four sensors, one motor output, and a debug port. We'll run each interface through the [decision paths](../decision-paths/index.md), then turn the result into the kind of paperwork the [templates](../tools/index.md) expect.

:::info[Illustrative composite — not a case report]

The box below is a teaching scenario built on Exercise 1, not a report of any single project. The *reasoning* is the point, and every connector fact is stated by reference to the deep dives and decision paths, which carry the sources.

:::

:::warning[Read this as reasoning, not a shopping list]

Like the [Selection Packet](connector-selection-packet.md) and the [M12 example](m12-sensor-interface.md), this page teaches *how to decide and document*. Part numbers, counts, and lengths marked `J-` or `TBD` are placeholders. A real project replaces every one with an exact, datasheet-verified value. Don't carry any rating from this example into your hardware.

:::

## Scenario

A shoebox-class sealed controller mounted on a machine frame in a light-industrial bay: splash and dust, occasional washdown mist nearby, no submersion. It powers from the plant's 24 VDC supply, talks Ethernet to the line controller, sits on a small CAN segment with two other nodes, reads four DC sensors on the frame, drives one small 24 VDC gearmotor, and needs a service port a technician can reach without opening the enclosure. Cables are unplugged whenever the frame section is serviced — by whoever is on shift.

The quiet headline decision: **every interface below lands on one circular family (M12-class), on purpose.** This can simplify sourcing, but the exact coding, assembly, seal, and torque requirements still differ. Nine similar ports create a wrong-port risk that labels alone cannot close. The mating matrix below is a release gate, not a claim that the present placeholders are safe to build.

## Requirements

| Interface | Requirement | Notes |
| --- | --- | --- |
| 24 VDC input | Box supply, current TBD from the power budget (assumed within a power-coded M12 class below — verify against the exact datasheet) | Plant 24 VDC distribution; source-side protection TBD |
| Ethernet | One run to the line controller; rate TBD from the controller spec — **10/100 assumed below, to be confirmed** | Shielded run, washdown-adjacent |
| CAN | Multi-drop segment, this box + 2 nodes; bus power TBD | Termination location must be designed, not discovered ([§8.5](../engineering/families/08-m12.md)) |
| Four sensors | Discrete DC sensors on the frame, per-circuit current TBD vs. exact part ratings | Swapped by shift technicians — unplug/replug service model |
| Motor output | One small 24 VDC gearmotor, stall current TBD from the motor datasheet | No separate feedback run in this scenario |
| Debug / service port | Reachable without opening the box; sealed when unused; low mating-cycle duty | Used a few times a year, capped otherwise |
| Environment (all) | Sealed-when-mated target per plant spec (exact IP class TBD); unmated state must also be protected | Caps are part of the design, not an accessory |

## Connector selection table

| Interface | Requirement summary | Candidate families | Selected family | Status |
| --- | --- | --- | --- | --- |
| J1 — 24 VDC input | Sealed DC power inlet | M12 power-coded; bare cable gland; [DT-style](../engineering/families/deutsch.md) | **M12 L-coded candidate ([§8.1](../engineering/families/08-m12.md)); exact device and cordset TBD** | Pending power budget |
| J2 — Ethernet | Sealed industrial Ethernet | M12 D-coded; M12 X-coded; sealed RJ45 | **M12 D-coded, 4-pin ([§8.1](../engineering/families/08-m12.md))** | Pending rate confirmation |
| J3 — CAN | Sealed multi-drop fieldbus drop | M12 A-coded 5-pin; hardwired gland | **M12 A-coded, 5-pin ("some CAN" rides A-coded — [§8.1](../engineering/families/08-m12.md)); topology per [§8.5](../engineering/families/08-m12.md)** | Candidate; exact mate and pinout open |
| J4–J7 — Sensors | Four sealed DC sensor circuits | M12 A-coded 4-pin; M8; glands into a junction box | **M12 A-coded, 4-pin ([Industrial sensor path](../decision-paths/industrial-sensor.md))** | Candidate; exact mate and pinout open |
| J8 — Motor output | Sealed small-motor DC power | M12 power-coded; [M23-class](../decision-paths/motor-feedback-cable.md); DT-style | **M12 T-coded candidate, distinct from J1; no shared power-cordset type** | Pending stall-current check |
| J9 — Debug/service | Sealed, occasional-use service port | Sealed M12 A-coded 8-pin; USB-C behind a cover; Micro-D behind a hatch | **M12 A-coded, 8-pin, with a chained screw cap ([Debug/service path](../decision-paths/debug-service-port.md))** | Candidate; exact mate and pinout open |

## Rejected connectors

| Interface | Rejected option | Why rejected |
| --- | --- | --- |
| 24 VDC input | Cable gland + hardwired tail | Fails the service model — every box swap becomes a wiring job, done by whoever is on shift; a gland is the right answer only for a run that never unplugs, and this run *does* unplug during service |
| 24 VDC input | [MIL-DTL-38999](../engineering/families/07-mil-dtl-38999.md) | No program requirement to justify the cost/lead-time class ([defense path](../decision-paths/defense-rugged-external-io.md) logic in reverse) |
| 24 VDC / motor | M12 K-coded | AC power coding ([§8.1](../engineering/families/08-m12.md)) — wrong lane for a 24 VDC system |
| 24 VDC / motor | A-coded pins doing power duty | A-coded connectors can carry power within their exact ratings. Here the supply and stall-current budgets remain open; retain the power-coded candidates until those budgets are checked |
| Ethernet | M12 X-coded "to be safe" | D-coded is the simpler candidate for the assumed 10/100 link. X-coded can also support lower rates where the equipment, cordset ecosystem, or upgrade plan justifies it |
| Ethernet | Sealed/rugged RJ45 | Workable, but breaks the one-family standardization and adds a second seal/latch system to maintain ([Rugged Ethernet path](../decision-paths/rugged-ethernet.md) checklist concerns) |
| Sensors | M8 | Viable technically; rejected as a standardization decision — one shell size across the box (same reasoning as the [M12 example](m12-sensor-interface.md)) |
| Sensors | Glands into a junction box | Service model again — sensor swaps become enclosure work inside a sealed box; the [M12 example](m12-sensor-interface.md) rejects glands on the same grounds |
| Motor output | [M23-class](../decision-paths/motor-feedback-cable.md) | Right family for a real servo axis with feedback; oversized for one small DC gearmotor — becomes the answer if the motor grows (see "What would change") |
| All sealed runs | [DT-style sealed automotive](../engineering/families/deutsch.md) | Good parts in their lane ([budget path](../decision-paths/rugged-on-a-budget.md)); rejected because the industrial cordset ecosystem here is M12 — fighting the ecosystem means custom pigtails |
| Debug/service | Bare USB-C on the panel | The [debug path](../decision-paths/debug-service-port.md) allows USB-C *only behind a cover*; a bare consumer port on a washdown-adjacent panel fails [§12.4's boundary](../engineering/guide/12-consumer-hobby-prototype-connectors.md) |

## Pinout

Assignments below are **illustrative structure only** — every pin function, and especially every wire color, is verified against the exact device/cordset datasheet and recorded in the ICD before release. Wire-color conventions are example-only, never design authority ([Source Notes](../appendix/source-notes.md)).

| Connector | Pin | Signal | Direction | Notes |
| --- | --- | --- | --- | --- |
| J1 (24 VDC in) | TBD from selected L-coded device drawing | Supply circuit(s), associated returns, and FE per that device | In | Separate circuit assignments; no contact paralleling or current-sharing credit |
| J2 (Ethernet) | 1–4 | TX+ / RX+ / TX− / RX− per the D-coded cordset datasheet | Bidir | Shield continuity per [§5.7](../engineering/guide/05-connector-anatomy.md); category per the cordset spec |
| J3 (CAN) | 1–5 | Shield / bus power / bus return / CAN_H / CAN_L per the device and protocol documentation | Bidir | Multi-drop: this port is one *drop* — T-piece and end-termination per [§8.5](../engineering/families/08-m12.md) |
| J4–J7 (sensors) | 1–4 | +V / signal / 0 V (+ spare or second signal) per each sensor datasheet | In | Same discipline as the [M12 example](m12-sensor-interface.md) |
| J8 (motor) | TBD from selected T-coded assembly drawing | One motor feed and its return; remaining positions per approved assembly | Out | One contact per current path; stall/fault current and unused-position treatment must be verified |
| J9 (service) | 1–8 | UART TX/RX, boot/enable strap, logic ground, reserved | Bidir | Logic-level only — no power export; capped when unused |

### Power pinout release gate

The table above allocates functions; it is **not a numbered wiring instruction**. Coding is not permission to parallel contacts. For J1, select the exact L-coded device and cordset, then preserve its distinct supply/return and FE assignments. For example, Schmalz's L-coded device documentation distinguishes sensor and actuator supplies and their returns; it does not describe two interchangeable positive and two interchangeable return contacts.[^lcodedexample] For J8, select a T-coded assembly whose individual current paths support the motor's load, stall, and protection-clearing conditions.

Before a cable can be built, attach mating-face drawings showing pin numbers, pin 1, key orientation, contact gender, and the two ends' wire mapping. Record current and fault duty **per contact**. Neither connector is released while these fields remain TBD.

### Port-to-cable mating review

The proposed contact genders below are architecture choices, not checked part selections. “Plug” and “receptacle” describe housings; pin/socket describes the contacts. Verify both in the exact drawings.

| Port | Intended cable | Proposed panel contacts / cable contacts | Coding and positions | Status |
|---|---|---|---|---|
| J1 supply | P1 plant supply | Pins / sockets; live cable contacts recessed | L, per selected device including FE | Open |
| J2 Ethernet | P2 controller | Sockets / pins | D, 4 | Open |
| J3 CAN | P3 bus drop | Pins / sockets; confirm bus ecosystem | A, 5 | Open |
| J4–J7 sensors | P4–P7 respective sensors | Sockets / pins | A, 4 | Open |
| J8 motor | P8 motor | Sockets / pins; driven panel contacts recessed | T, per selected assembly | Open |
| J9 debug | P9 service cable | Sockets / pins | A, 8 | Open |

Every cable class is compared with every panel class below. The sensor group represents all four cables and all four ports, including their 12 unintended permutations.

| Cable → panel | J1 | J2 | J3 | J4–J7 | J8 | J9 |
|---|---|---|---|---|---|---|
| P1 supply | Intended | Block | Block | Block | Block | Block |
| P2 Ethernet | Block | Intended | Block | Block | Block | Block |
| P3 CAN | Block | Block | Intended | Check A | Block | Check A |
| P4–P7 sensors | Block | Block | Check A | Function check | Block | Check A |
| P8 motor | Block | Block | Block | Block | Intended | Block |
| P9 debug | Block | Block | Check A | Check A | Block | Intended |

- **Intended:** confirm the complete mating pair, wiring, ratings, and permitted service state.
- **Block:** different coding is the intended mechanical exclusion. Verify exact parts and any adapters; do not treat this matrix as test evidence.
- **Check A:** position count and proposed gender alone are not proof of exclusion. Check drawings and actual samples. A possible mate must be electrically safe under its resulting pin mapping, or the architecture must change.
- **Function check:** identical sensor ports can accept the wrong sensor. Establish whether each swap is harmless. Where it can command hazardous motion, use physical exclusion or a validated identification/interlock strategy before enabling the motor; labels and a service checklist alone do not establish safety.

For each unintended mate, record the physical result, resulting net connections, electrical consequence, mitigation, and verification evidence. Wrong supply-to-motor connection could energize the motor or backfeed the controller; incompatible A-coded mappings could put supply voltage on data or logic. These are design risks to resolve, not proven faults in unspecified parts.

## Cable drawing

One row class per run; the [cable drawing template](../tools/cable-drawing-template.md) carries the full per-cable version with evidence columns.

| Wire | Gauge | Color | Pair / shield | End A | End B | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| J1 power conductors | Per cordset spec (sized to the power budget) | Per cordset — recorded, not assumed | Unshielded power | J1 plug (molded) | Plant 24 VDC drop | Verify current at temperature vs. the exact assembly |
| J2 Ethernet | Per cordset category spec | — | Shielded, pairing per spec | J2 plug (molded) | Line controller | Shield termination both ends per [§5.7](../engineering/guide/05-connector-anatomy.md) |
| J3 CAN drop | Per CAN cable spec | — | Shielded pair + power | J3 plug | Bus T-piece | Drop length within protocol limits ([§8.5](../engineering/families/08-m12.md)) |
| J4–J7 sensor runs | Per cordset spec | — | Unshielded | Sensor M12 | J4–J7 | Off-the-shelf molded cordsets, stocked lengths |
| J8 motor run | Sized to stall current | — | Per motor/EMC needs | J8 plug | Motor leads | Anchored against gearmotor vibration |

- Cable jacket: oil-resistant per the plant environment spec; drag-chain-rated only where a run actually moves (none in this scenario — record that, too)
- Labels: every cable labeled at both ends with the J-number; label spec in the ICD
- Length tolerance: per the cable drawing template's tolerance field, set from routing reality, not guessed
- Test requirements: continuity + hipot/IR per the [harness inspection checklist](../tools/harness-inspection-checklist.md) and the acceptance standard the program names; design-level qualification evidence, where the program requires it, structured per the [qualification plan template](../tools/connector-qualification-template.md)

## Backshell / cap notes

Molded cordsets carry their own strain relief and sealing, so this box needs no field backshells — the accessory budget goes to caps and torque instead.

| Interface | Accessory | Notes |
| --- | --- | --- |
| All receptacles | Sealing screw caps, chained | The unmated state is part of the sealing design ([§8.3](../engineering/families/08-m12.md)); verify the receptacle's unmated rating; exposed contacts and the panel penetration are separate sealing boundaries |
| J9 service port | Cap **plus** a log discipline | The port is capped 360 days a year — the cap *is* the interface most of the time |
| All | Torque per each part's datasheet | Coupling-torque values are manufacturer-specified ([§8.3](../engineering/families/08-m12.md)); finger-tight is not a spec |
| CAN segment | Terminating M12 plug at each bus end | Termination lives at the bus ends, not "wherever" — [§8.5](../engineering/families/08-m12.md) |

## ICD entry

One worked entry (J2) in the [ICD template's](../tools/connector-icd-template.md) shape; the real package carries one per interface.

- Interface name: `J2-RCB-ETH` — control box to line controller, industrial Ethernet
- Connector P/N: `TBD` — M12 D-coded 4-pos panel receptacle, front-mount, shielded
- Mating connector P/N: `TBD` — molded D-coded cordset, shielded, length per routing
- Contact P/Ns: n/a (molded assembly) — field-repair kit P/N `TBD`, temporary-article rule per the [M12 example §6](m12-sensor-interface.md)
- Backshell P/N: n/a (molded); panel-side sealing per receptacle datasheet
- Dust cap P/N: `TBD`, chained
- Keying / polarization: D-coding is the key ([§8.1](../engineering/families/08-m12.md)); no same-coding neighbor on this panel face
- Electrical limits: per the exact receptacle/cordset datasheets — recorded here with revision, never quoted from memory
- Shielding: 360° continuity through the receptacle to the enclosure bond point ([§5.7](../engineering/guide/05-connector-anatomy.md))
- Environmental assumptions: sealed-when-mated per the exact assembly's tested rating; capped when unmated; plant spec `TBD` governs
- Mating cycles: per datasheet ([A4](../appendix/quick-reference-tables.md) carries the family-level orientation)
- Torque / assembly notes: coupling torque per datasheet; torque tool `TBD`; record value + tool in the build record
- Cable requirements: category/shield per the cordset spec; bend radius per datasheet; no drag-chain duty
- Test / inspection requirements: [harness inspection checklist](../tools/harness-inspection-checklist.md) + program acceptance standard

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Nine same-size circular connectors (six interface types) on one small box — wrong-port mating attempts | Close every cell of the port-to-cable mating review above; verify actual parts and resulting net connections. Labels and panel photos supplement mechanical or electrical mitigation |
| A-coded pins drafted into power duty during a "quick fix" | Verify actual load, fault duty, and assembly ratings; do not infer suitability or exclusion from A-coding alone ([§8.1](../engineering/families/08-m12.md)) |
| CAN termination forgotten or duplicated | Terminating plugs are BOM line items with J-numbers, not accessories; topology drawing in the package ([§8.5](../engineering/families/08-m12.md)) |
| Receptacles left uncapped after service | Chained caps; capped-state photo in the close-out checklist; the service port's cap logged like a tool |
| Motor stall current outgrows the selected power coding | Stall check is a release gate (requirements table); escalation path pre-named (M23-class — see below) |
| Ethernet rate requirement changes after release | The D-vs-X decision and its trigger are recorded ([§8.1](../engineering/families/08-m12.md)) — a rate change reopens J2, not a debate |
| Cordset vendor change alters pinout/wire colors | Colors are example-only by rule; the ICD pins functions to *pin numbers* with datasheet revisions ([Source Notes](../appendix/source-notes.md)) |

## What would change if…

- **The power budget outgrows the M12 power class** — J1/J8 move up a family (the [high-current path](../decision-paths/high-current-dc-power.md) takes over, derating curve first), and the one-family standardization is consciously traded away, in writing.
- **The motor becomes a servo axis** — feedback appears, and the whole J8 question transfers to the [motor + feedback cable path](../decision-paths/motor-feedback-cable.md): drive-ecosystem cordsets, M23-class connectors, and the EMC discipline that comes with them.
- **The box moves into direct washdown** — re-verify every mated *and unmated* rating against the plant spec ([§8.3](../engineering/families/08-m12.md)) and re-run the [sealed enclosure feedthrough path](../decision-paths/sealed-enclosure-feedthrough.md) for the panel itself.
- **A defense/aero customer appears** — the requirement set, not preference, moves the external interfaces toward [38999-class](../decision-paths/defense-rugged-external-io.md) hardware, and the [Selection Packet](connector-selection-packet.md) shows what that documentation grade looks like.
- **Someone proposes one big multipole for everything** — that's the [removable machine module path's](../decision-paths/removable-machine-module.md) problem statement; run it honestly before deciding: use the path for the service reality, and [§5's anatomy](../engineering/guide/05-connector-anatomy.md) for the blind-mate and float mechanics a docking interface leans on.

## Documentation bundle

The following items remain open in this study. Complete them before treating it as a released design:

- [ ] Requirements table with sources and status closed out
- [ ] Port-to-cable mating matrix closed with exact parts, consequences, and evidence
- [ ] J1/J8 numbered pinouts and per-contact normal/stall/fault-current budgets closed without unapproved paralleling
- [ ] [Comparison matrix](../tools/connector-comparison-matrix.md) rows for the contested decisions (J1 power coding, J2 D-vs-X)
- [ ] Pinout + [cable drawing](../tools/cable-drawing-template.md) per run, evidence columns filled
- [ ] [ICD entry](../tools/connector-icd-template.md) per interface (J1–J9), datasheet revisions recorded
- [ ] [Design review checklist](../tools/design-review-checklist.md) pass — the caps, torque, and termination rows are the ones this box lives or dies by
- [ ] [Harness inspection checklist](../tools/harness-inspection-checklist.md) on the built cables

:::note

These examples illustrate *structure and process*, not a released design. The datasheet, applicable standard, and program requirements decide the actual values.

:::

[^lcodedexample]: Schmalz, *SCTSi IOL* operating instructions, §8.6, L-coded power connection (device-specific example, not a universal pinout). <https://pimmedia.schmalz.com/MAM_Library/Dokumente/Bedienungsanleitung/30/3030/303001/30300101598/dd27ee2a2ed2_BAL_30.30.01.01598_en-EN.pdf>
