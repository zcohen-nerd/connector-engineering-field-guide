---
id: 10-selection-checklist
title: "10. Practical Selection Checklist"
description: "A working connector-selection checklist: interface definition, electrical, mechanical and environmental, manufacturing, and documentation sign-off items."
slug: /10-selection-checklist
sidebar_label: Practical Checklist
---

# 10. Practical Selection Checklist

Use this at work. Adapt to your program; it is a working checklist, not a standard.

**Interface definition**
- [ ] What subsystem boundary is this?
- [ ] Internal or external?
- [ ] Technician-serviceable or factory-only?
- [ ] Must it be disconnected under power?
- [ ] How often mated/unmated over service life?
- [ ] Is wrong mating dangerous?

**Electrical**
- [ ] Voltage rating + transients/peak checked
- [ ] Current per contact *at temperature* checked
- [ ] Bundle/thermal derating applied (use a conservative margin and the manufacturer derating curve)
- [ ] Rating source (document + revision) recorded for the voltage/current values used
- [ ] Loaded-contact count, ambient temperature, termination type, allowable temperature rise, and margin rationale documented
- [ ] Wire gauge compatible with contact barrel
- [ ] Signal type identified; high-speed/RF flagged
- [ ] Shield strategy documented — type, termination points, and rationale (one-end vs. both-ends vs. 360° backshell is system- and frequency-dependent, not a universal rule)
- [ ] Power and signal segregation considered
- [ ] Load-break / hot-plug / mate-under-power status recorded from the datasheet (yes / no / explicitly prohibited / not specified — never assumed)
- [ ] For power interfaces: touch safety when unmated, fuse/overcurrent protection, available fault current, and inrush/precharge documented
- [ ] Spare positions added where feasible and justified (and sealed/documented)

**Mechanical / environmental**
- [ ] IP rating verified for the *complete* assembly
- [ ] Mated *and* unmated (capped) sealing considered
- [ ] Vibration/shock requirement and locking matched
- [ ] Cable strain relief defined; backshell selected
- [ ] Cable jacket OD compatible with gland/clamp
- [ ] Wire seal range matches wire OD; unused cavities plugged
- [ ] Bend radius and cable exit angle checked
- [ ] Panel thickness/cutout checked
- [ ] Mating sequence (ground-first) considered for hybrids, where available
- [ ] Torque specs identified
- [ ] Dust caps / dummy plugs on BOM

**Manufacturing**
- [ ] Crimp contacts and correct crimp tool identified
- [ ] Positioner/die and insert/extract tools identified
- [ ] Assembly instructions + inspection criteria defined (acceptance per IPC/WHMA-A-620 or the program/customer equivalent)
- [ ] Pull-test / continuity test plan defined
- [ ] Supplier availability and lead time checked
- [ ] Second source / QPL considered

**Documentation / configuration control**
- [ ] Connector, mate, contact, backshell, cap, gasket part numbers
- [ ] Pinout table + cable drawing + harness drawing
- [ ] ICD entry written
- [ ] Key position unique across differing pinouts
- [ ] Rev-controlled BOM + labeling scheme

Before sign-off, scan [What People Forget](what-people-forget.md) for the items most often left off. For a fully worked pass of this checklist against one interface, see the [Connector Selection Packet](examples/connector-selection-packet.md) example.

---