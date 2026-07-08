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
- [ ] Rating source (document + revision) recorded for the voltage/current values used
- [ ] Loaded-contact count, ambient temperature, termination type, allowable temperature rise, and margin rationale documented
- [ ] Wire gauge compatible with contact barrel
- [ ] Signal type identified; high-speed/RF flagged
- [ ] Shield strategy documented — type, termination points, rationale (one-end vs. both-ends vs. 360° is system/frequency-dependent, not a universal rule)
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

## Source / evidence tracking

Make the selection reviewable: every rating or requirement above should be traceable to a document, and assumptions should be visibly different from verified facts.

- Datasheet revision/date:
- Manufacturer drawing revision/date:
- Application specification revision/date:
- Qualified listing checked: yes / no / not applicable
- QPD/QPL reference (if applicable):
- Program/customer requirement reference:
- Derating curve checked: yes / no / not applicable
- Tooling/application spec checked: yes / no / not applicable

| Claim / value relied on | Source document | Rev / date | Requirement type | Verification status | Verified by / date | Open questions / risk if wrong |
| --- | --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | customer / standard / manufacturer / internal / assumption | verified / assumed / example / TBD | TBD | TBD |
