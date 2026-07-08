---
id: design-review-checklist
title: Design Review Checklist
description: "A connector design-review checklist: readiness checks, a red-flag scan table, and a risk summary format for catching connector problems before release."
slug: /tools/design-review-checklist
sidebar_label: Design Review Checklist
---

# Design Review Checklist

Based on [Sections 10](../10-selection-checklist.md) and [11](../11-red-flags.md) of the guide.

## Readiness checks

- [ ] Interface definition is complete
- [ ] Electrical limits are defined and sourced where required
- [ ] Every rating/requirement is traced to a source document + revision, with verification status marked (verified / assumed / example / TBD)
- [ ] Assumptions are explicitly listed with the risk if each is wrong
- [ ] Current derating and wire-gauge compatibility are reviewed
- [ ] Locking, strain relief, and backshell strategy are defined
- [ ] Sealing and unmated protection are addressed
- [ ] Keying and mis-mate prevention are addressed
- [ ] Load-break / hot-plug / mate-under-power status recorded from the datasheet for every power-carrying interface (never assumed)
- [ ] Tooling and assembly process are defined
- [ ] Workmanship/acceptance standard identified (e.g. IPC/WHMA-A-620 or the program/customer equivalent)
- [ ] Documentation package exists (BOM, pinout, cable drawing, ICD)

## Red-flag scan

| Red flag | Status | Notes |
| --- | --- | --- |
| Pin-count-only selection avoided | TBD |  |
| Power and signal segregation reviewed | TBD |  |
| Backshells included where needed | TBD |  |
| Tooling identified | TBD |  |
| Dust caps / dummy plugs included where needed | TBD |  |
| Torque specs documented | TBD |  |
| Wire seal sizing checked | TBD |  |
| Mating connector included in BOM | TBD |  |
| Load-break / mate-under-power status verified, not assumed | TBD |  |
| Ratings traced to manufacturer/standard documents, not distributor listings | TBD |  |
| Shield strategy documented with rationale (not a default) | TBD |  |
| Touch safety when unmated addressed for power paths | TBD |  |
| Fusing / fault current / inrush documented for power paths | TBD |  |
| Service access reviewed | TBD |  |
| Cable labels / identification defined | TBD |  |

## Risk summary

| Connector / interface | Risk | Severity (H/M/L) | Corrective action |
| --- | --- | --- | --- |
| TBD | TBD | TBD | TBD |
| TBD | TBD | TBD | TBD |
