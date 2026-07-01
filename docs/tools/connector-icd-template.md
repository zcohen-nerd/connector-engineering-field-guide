---
id: connector-icd-template
title: Connector ICD Template
slug: /tools/connector-icd-template
sidebar_label: Connector ICD Template
sidebar_position: 4
---

# Connector ICD Template

Based on [Exercise 7](../13-hands-on-exercises.md).

## Interface identification

- Interface name:
- System / subsystem boundary:
- Revision:
- Owner:

## Connector definition

- Connector P/N:
- Mating connector P/N:
- Contact P/Ns:
- Backshell P/N:
- Dust cap P/N:
- Keying / polarization:

## Pinout

| Pin | Signal | Source / load | Notes |
| --- | --- | --- | --- |
| TBD | TBD | TBD | TBD |
| TBD | TBD | TBD | TBD |

## Electrical limits

- Working voltage:
- Current per contact:
- Contact size / wire gauge:
- Shielding:

## Environmental assumptions

- Internal or external:
- Sealing target:
- Vibration / shock:
- Mating cycles:

## Assembly / cable requirements

- Torque / assembly notes:
- Cable requirements:
- Test / inspection requirements:

---

## Worked example — M12 A-coded sensor drop

An ICD entry for a 4-pin A-coded M12 sensor interface. Family-level electrical, coding, and sealing values are sourced below; vendor part numbers and project values are marked *illustrative*. The cable for this interface is worked out in the [cable drawing example](cable-drawing-template.md).

### Interface identification

- Interface name: Sensor drop S1
- System / subsystem boundary: field sensor ↔ controller enclosure
- Revision: A *(illustrative)*
- Owner: *(project)*

### Connector definition

- Connector P/N: M12 A-coded 4-pin female cordset — *vendor P/N illustrative*
- Mating connector P/N: sensor device M12 A-coded 4-pin male port
- Contact P/Ns: molded cordset (no removable contacts)
- Backshell P/N: molded strain relief (or cable gland for a field-wireable connector)
- Dust cap P/N: M12 protective cap — *illustrative*
- Keying / polarization: A-coded[^iec101]

### Pinout

| Pin | Signal | Source / load | Notes |
| --- | --- | --- | --- |
| 1 | L+ (24 VDC nominal) | Source | Brown |
| 2 | Signal | Per device | White |
| 3 | L− (0 V) | Source | Blue |
| 4 | Signal | Per device | Black |

Pin functions follow the device datasheet; colours per the common A-coded convention.

### Electrical limits

- Working voltage: ≤ 250 V per contact (IEC 61076-2-101); application 24 VDC[^iec101]
- Current per contact: ≤ 4 A (IEC 61076-2-101); application per sensor (typically well under 1 A)[^iec101]
- Contact size / wire gauge: ≈ 22 AWG / 0.34 mm² *(illustrative)*
- Shielding: unshielded (typical A-coded sensor); shielded variant if EMI requires

### Environmental assumptions

- Internal or external: external field drop
- Sealing target: IP67 when mated and torqued; unmated only when capped[^m12seal]
- Vibration / shock: per application
- Mating cycles: per datasheet (screw-lock; commonly ≥ 100)

### Assembly / cable requirements

- Torque / assembly notes: coupling torque per datasheet (e.g. Turck specifies 0.8–1.0 N·m) — verify[^m12seal]
- Cable requirements: PUR jacket, OD within the gland range; see the [cable drawing example](cable-drawing-template.md)
- Test / inspection requirements: continuity, insulation resistance, coupling-torque check

## Sources

[^iec101]: IEC 61076-2-101 (M12 circular connectors with screw-locking, A/B/D coding) — 2- to 17-way; up to 250 V and up to 4 A per contact; data ≤ 100 MHz. <https://standards.globalspec.com/std/1519301/iec-61076-2-101>

[^m12seal]: An M12 IP rating applies to the complete, correctly-mated and -torqued assembly, not the unmated connector. Coupling torque is manufacturer-specified and varies (e.g. Turck specifies 0.8–1.0 N·m) — treat any single figure as an example and use the manufacturer's value with a torque tool. See the [M12 Deep Dive §8.3](../08-m12.md).
