---
id: connector-selection-checklist
title: Connector Selection Checklist
description: "A copy-ready connector selection checklist covering interface definition, electrical, mechanical and environmental, manufacturing, and documentation."
slug: /tools/connector-selection-checklist
sidebar_label: Selection Checklist
---

# Connector Selection Checklist

Based on [Section 10 — Practical Selection Checklist](../10-selection-checklist.md).

## Interface definition

- [ ] What subsystem boundary is this?
- [ ] Internal or external?
- [ ] Technician-serviceable or factory-only?
- [ ] Must it be disconnected under power?
- [ ] How often mated/unmated over service life?
- [ ] Is wrong mating dangerous?

## Electrical

- [ ] Voltage rating + transients/peak checked
- [ ] Current per contact at temperature checked
- [ ] Bundle/thermal derating applied
- [ ] Wire gauge compatible with contact barrel
- [ ] Signal type identified; high-speed/RF flagged
- [ ] Shields/grounds assigned
- [ ] Power and signal segregation considered
- [ ] Load-break / hot-plug / mate-under-power status recorded from the datasheet (yes / no / explicitly prohibited / not specified)
- [ ] For power interfaces: touch safety when unmated, fuse/overcurrent protection, available fault current, and inrush/precharge documented
- [ ] Spare positions added where feasible and justified

## Mechanical / environmental

- [ ] IP rating verified for the complete assembly
- [ ] Mated and unmated (capped) sealing considered
- [ ] Vibration/shock requirement and locking matched
- [ ] Cable strain relief defined; backshell selected
- [ ] Cable jacket OD compatible with gland/clamp
- [ ] Wire seal range matches wire OD
- [ ] Bend radius and cable exit angle checked
- [ ] Panel thickness/cutout checked
- [ ] Mating sequence considered for hybrids where available
- [ ] Torque specs identified
- [ ] Dust caps / dummy plugs on BOM

## Manufacturing

- [ ] Crimp contacts and correct crimp tool identified
- [ ] Positioner/die and insert/extract tools identified
- [ ] Assembly instructions and inspection criteria defined (acceptance per IPC/WHMA-A-620 or the program/customer equivalent)
- [ ] Pull-test / continuity test plan defined
- [ ] Supplier availability and lead time checked
- [ ] Second source / QPL considered

## Documentation / configuration control

- [ ] Connector, mate, contact, backshell, cap, gasket part numbers
- [ ] Pinout table + cable drawing + harness drawing
- [ ] ICD entry written
- [ ] Key position unique across differing pinouts
- [ ] Rev-controlled BOM + labeling scheme
