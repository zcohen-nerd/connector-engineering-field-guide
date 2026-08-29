---
id: harness-inspection-checklist
title: Harness Inspection Checklist
description: "A build/incoming inspection pass for a finished connectorized harness: paperwork, crimp evidence, connector assembly, mechanical checks, electrical verification, and the record."
slug: /tools/harness-inspection-checklist
sidebar_label: Harness Inspection Checklist
---

# Harness Inspection Checklist

A structured pass over a finished (or incoming) connectorized harness, assembled from the guide's own checklists and trap lists: [Selection Workflow §4](../04-connector-selection-workflow.md), [Practical Checklist §10](../10-selection-checklist.md), the [38999 mistakes table §7.9](../07-mil-dtl-38999.md), and [What People Forget](../what-people-forget.md).

:::warning[What this checklist is — and is not]

This checklist tells you **what to look at**. It deliberately contains **no acceptance values** — no pull forces, crimp heights, torque numbers, or test voltages. What *passing* looks like comes from the workmanship/acceptance standard your program names (commonly **IPC/WHMA-A-620**, or the program/customer equivalent)[^a620] and from the **manufacturer's application specification for the exact contact system** — never from this page. If you don't know which acceptance standard and application spec apply, that is finding #1.

Scope note: this page is **build/incoming acceptance** — verifying units against a released design. Proving the *design itself* (first article, the qualification test matrix, evidence capture) is the [Connector Qualification Plan Template](connector-qualification-template.md)'s job.

:::

## 1. Paperwork first

- [ ] The governing **drawing / [cable drawing](cable-drawing-template.md)** is on hand, at the revision being built/inspected
- [ ] The **[ICD](connector-icd-template.md)** (or equivalent interface definition) is on hand, at revision
- [ ] The **workmanship/acceptance standard and class** the harness was built to is named on the drawing or work instruction ([§4](../04-connector-selection-workflow.md))
- [ ] The **manufacturer application specs** for each contact system used are identified
- [ ] Any **deviations/waivers** are recorded, not verbal

## 2. Crimp and contact evidence

Per the crimp design package §4 says the drawing should carry:

- [ ] The **exact contact P/N** used matches the drawing (not "equivalent-looking" — [hobby crimping](../hobby/crimping.md) explains why families don't transfer)
- [ ] **Wire gauge and insulation range** match what the contact and wire seal were specified for — undersized wire in a wire seal defeats the seal ([§7.9](../07-mil-dtl-38999.md))
- [ ] **One wire per crimp barrel** — a doubled-in second wire is an unqualified termination (and a defeated wire seal) unless the drawing cites the contact's own dual-wire specification; branches belong in splices or multi-wire-rated terminals ([crimping](../hobby/crimping.md), [§5.2](../05-connector-anatomy.md))
- [ ] The **approved crimp tool / positioner / die** was used and is in calibration ([§4](../04-connector-selection-workflow.md))
- [ ] **Visual inspection** performed per the named acceptance standard/class — remembering the trap: a crimp can pass visual and still fail in vibration ([§7.9](../07-mil-dtl-38999.md)); the application spec's inspection/pull-test requirement decides, not appearance
- [ ] **Pull-test or equivalent verification** performed if and as the drawing/application spec requires, and recorded

## 3. Connector assembly

From the [§7.9 mistakes table](../07-mil-dtl-38999.md) and [What People Forget](../what-people-forget.md):

- [ ] **Backshell** present, correct P/N, assembled per its instructions — strain relief, rear seal, shield termination all depend on it
- [ ] **Strain relief** engaged on the cable, not on individual conductors
- [ ] **Shield termination** matches the drawing's stated strategy (360° / pigtail / isolated — as documented, not as improvised)
- [ ] **Unused cavities** carry sealing plugs where the drawing requires them
- [ ] **Coupling / jam-nut torque** applied per the documented torque procedure — finger-tight is not a sealed, engaged mate ([What People Forget](../what-people-forget.md))
- [ ] **Caps/covers** present for connectors that ship or sit unmated ([§7.9](../07-mil-dtl-38999.md))

## 4. Mechanical checks

- [ ] **Keying/clocking** of each connector matches the ICD — same-key-different-pinout is an eventual mis-mate ([§7.9](../07-mil-dtl-38999.md))
- [ ] **Contact gender vs. the mating half** verified — gender is independent of plug/receptacle ([§7.9](../07-mil-dtl-38999.md))
- [ ] **Bend radius and cable exit** comply with the drawing ([§10](../10-selection-checklist.md))
- [ ] **Labels / identification** present and matching the rev-controlled labeling scheme ([§10](../10-selection-checklist.md))
- [ ] Overall length and breakout dimensions within drawing tolerance

## 5. Electrical verification

- [ ] **Continuity / pinout** verified against the ICD or wiring schedule — per the drawing's stated verification method ([cable drawing template](cable-drawing-template.md))
- [ ] **Shield / drain continuity** verified where the drawing requires it
- [ ] **Insulation resistance / hipot** performed *only if and as the program/drawing requires* — record the requirement source, parameters, and result; this checklist asserts no test values

## 6. The record

Echoing the evidence-fields convention used across the [templates](index.md):

| Item | Entry |
|---|---|
| Harness / assembly P/N + rev | TBD |
| Drawing + ICD revision inspected against | TBD |
| Acceptance standard + class applied | TBD |
| Application spec(s) for contact systems | TBD |
| Inspector / date | TBD |
| Deviations, findings, dispositions | TBD |

:::note

This is a working template, not a standard. IPC/WHMA-A-620 (or the program/customer equivalent), the applicable contract and drawing notes, and the manufacturer's application specification for the exact connector/contact/tooling system always control.[^a620]

:::

## Sources

[^a620]: IPC/WHMA-A-620, *Requirements and Acceptance for Cable and Wire Harness Assemblies* — the joint IPC/WHMA industry standard for cable and harness workmanship and acceptance (Revision F, 2025, is current as of this writing; verify the program-required revision). It is the general reference: the applicable contract, customer/program standard, and the manufacturer's application specification for the exact contact system always control. <https://shop.electronics.org/ipcwhma-a-620/ipcwhma-a-620-standard-only/Revision-f/english>
