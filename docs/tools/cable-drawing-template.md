---
id: cable-drawing-template
title: Cable Drawing Template
description: "A cable drawing template with conductor schedule, shields, labels, and test requirements — plus a worked, sourced M12 A-coded sensor cable example."
slug: /tools/cable-drawing-template
sidebar_label: Cable Drawing Template
---

# Cable Drawing Template

This is the blank version of [Exercise 6](../engineering/guide/13-hands-on-exercises.md). Fill it in until somebody other than you can build and test the cable without guessing.

## Cable endpoints

- Connector A:
- Connector B:
- Endpoint drawings: each mating face labeled with connector identity, pin/socket contacts, pin 1, key orientation, and view direction:
- Referenced ICD / schematic P/N and revision:

![The same fictional keyed four-contact connector from its mating face and wire-entry side, with mirrored positions but unchanged contact numbers.](/img/diagrams/connector-pinout-views.svg)

*One connector viewed from opposite ends, with the key held at the top. The numbering is fictional; check each mating half against its own manufacturer drawing rather than copying this layout.*

## Conductor schedule

| Wire | Color | Gauge | Twisted pair | Shield / drain treatment | End A | End B | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## Cable construction

- Cable jacket:
- Labels:
- Nominal cable and breakout lengths, measurement datums, and tolerances:
- Measurement state (straightened/slack, connector reference faces, included boots):
- Pair IDs with both conductor members and allowed untwist at each termination:
- Spare conductors and unused cavities (insulated, terminated, or plugged):
- Notes:

## Test requirements

- Continuity (per-net maximum resistance and test method):
- Unintended shorts (all isolated net pairs and each net to shield/shell/chassis, limits and method):
- Pinout verification:
- Shield / drain verification:
- Contact seating/secondary-lock inspection procedure:
- Controlled retention or destructive crimp pull-test requirement, sample basis, force/rate, and governing source:
- Test requirement IDs, instrument limits, and result-record location:
- Crimp spec / strip length reference (from the contact application spec):
- Workmanship / acceptance standard (e.g. IPC/WHMA-A-620 class, or the program/customer equivalent):
- Additional test requirements:

## Shield strategy (if shielded)

- Shield required: yes / no
- Shield type: braid / foil / drain / combination
- Shield termination: one end / both ends / 360° backshell / capacitive / other
- Bond at End A (location, method, hardware, insulation/isolation):
- Bond at End B (location, method, hardware, insulation/isolation):
- Signal common / chassis / FE / PE connections or isolation, schematic reference:
- Connector shell bonded to chassis: yes / no / not applicable
- EMC requirement or rationale (noise problem, frequency range of concern):
- Test / verification method:
- Grounding owner / reviewer:

## Source / evidence tracking

| Claim / value relied on | Source document | Rev / date | Requirement type | Verification status | Verified by / date | Open questions / risk if wrong |
| --- | --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | customer / standard / manufacturer / internal / assumption | verified / assumed / example / TBD | TBD | TBD |

---

## Worked example — M12 A-coded sensor cable

A double-ended M12 A-coded sensor cordset. Family-level electrical, coding, and sealing values are sourced below; project- and vendor-specific fields (exact part number, length, cable OD) are marked *illustrative* — fill them from the parts you actually buy. See the matching [ICD worked example](connector-icd-template.md).

### Cable endpoints

- Connector A: M12 A-coded, 4-pin, **female** (socket), straight — to the sensor's device port
- Connector B: M12 A-coded, 4-pin, **male** (pin), straight — to the panel receptacle

### Conductor schedule

| Wire | Color | Gauge | Twisted pair | Shield / drain | End A pin | End B pin | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Brown (BN) | 22 AWG (0.34 mm²) | — | — | 1 | 1 | L+ (24 VDC nominal) |
| 2 | White (WH) | 22 AWG (0.34 mm²) | — | — | 2 | 2 | Signal — per device datasheet |
| 3 | Blue (BU) | 22 AWG (0.34 mm²) | — | — | 3 | 3 | L− (0 V) |
| 4 | Black (BK) | 22 AWG (0.34 mm²) | — | — | 4 | 4 | Signal — per device datasheet |

Wire colours follow the common A-coded 4-pin convention; confirm pin functions against the device datasheet and the cordset drawing.

### Cable construction

- Cable jacket: PUR, Ø ≈ 5–6 mm *(illustrative — must fall inside the gland/clamp range for a field-wireable connector)*
- Labels: both ends, per drawing
- Nominal length and end-face datums: TBD; ±25 mm tolerance is illustrative and unusable without those definitions
- Notes: A-coded is rated ≤ 4 A per contact and ≤ 250 V (IEC 61076-2-101);[^iec101] IP67 applies only when mated and correctly torqued[^m12seal]

### Test requirements

- Continuity: pin 1→1, 2→2, 3→3, 4→4; resistance limit and method TBD
- Unintended shorts: all other pin pairings and pins to any shell/shield; limits and method TBD
- Pinout verification: against the schedule above
- Shield / drain verification: n/a (unshielded); add if a shielded variant is used
- Workmanship / acceptance: IPC/WHMA-A-620 or the program/customer equivalent — molded cordset, incoming inspection *(illustrative)*
- Additional: insulation resistance; coupling-torque check[^m12seal]

### Shield strategy / evidence

- Shield: none (unshielded A-coded sensor cordset); revisit with an EMC rationale if a shielded variant is used
- Evidence: family electrical/coding/sealing values — IEC 61076-2-101 listing + M12 torque example, **verified** (Sources below); all fields marked *(illustrative)* — **example-only**, replace from the parts you actually buy

## Sources

[^iec101]: IEC 61076-2-101 (M12 circular connectors with screw-locking, A/B/D coding) — 2- to 17-way; up to 250 V and up to 4 A per contact; data ≤ 100 MHz. <https://webstore.iec.ch/en/publication/77773>

[^m12seal]: An M12 IP rating applies to the complete, correctly-mated and -torqued assembly (both ends), not the unmated connector. Coupling torque is manufacturer-specified and varies (e.g. Turck specifies 0.8–1.0 N·m) — treat any single figure as an example and use the manufacturer's value with a torque tool. See the [M12 Deep Dive §8.3](../engineering/families/08-m12.md).
