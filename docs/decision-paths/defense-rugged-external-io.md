---
id: defense-rugged-external-io
title: "Pick a connector for defense/rugged external I/O"
description: "Pick a connector for defense or rugged external I/O: MIL-DTL-38999 and 26482 starting points — insert arrangements, backshells, keying, and dust caps."
slug: /decision-paths/defense-rugged-external-io
sidebar_label: Defense / rugged external I/O
---

# Pick a connector for defense/rugged external I/O

Harsh-environment external I/O on defense or aerospace hardware — vibration, sealing, EMI, and configuration control all in play.

## Use this when

- The interface is external on rugged/defense/aero hardware.
- Vibration, sealing, EMI backshells, keying, and config control all matter.

## Avoid this when

- It is low-cost commercial gear or a casual prototype — the cost, tooling, and part-number discipline aren't justified.

## Families to start with

- **MIL-DTL-38999** — Series III is often the default for new harsh-environment designs (threaded, scoop-proof, anti-decoupling), subject to size/mating-speed/legacy/customer/program requirements.
- **MIL-DTL-26482** — smaller/cheaper rugged circular with a fast bayonet, where its ratings fit.
- **Micro-D** for compact high-reliability *internal* runs alongside the external circulars.

See the [MIL-DTL-38999 deep dive](../07-mil-dtl-38999.md) and [Standards and Families](../03-connector-standards-and-families.md).

## Search terms

- `MIL-DTL-38999 Series III shell size insert arrangement backshell`
- `MIL-DTL-26482 bayonet circular connector`

## Specs to check

- **Shell size** and **insert arrangement** — always pull the arrangement drawing; a pin count alone is insufficient.
- **Contacts** (AS39029 crimp), **contact retention**, and whether contacts ship with the connector.
- **Backshell**, **shield termination**, **keying/polarization**, **service class**, and **dust caps**.
- Coupling **engagement and torque** where specified.

## Parts people forget

- The **backshell**, the **contacts + crimp tooling**, and **dust caps**.
- **Alternate keying** across similar same-shell connectors.
- A documented **torque / assembly procedure**.

See [What People Forget](../what-people-forget.md).

## Common traps

- Assuming **all 38999s intermate** — series, keying, and insert must all match.
- Relying on a **bayonet coupling** in severe vibration unless the specific connector is qualified for that profile with an appropriate anti-decoupling/retention strategy.
- **Wrong crimp tool**, no rear seal, exposed live pins on the energized side, or the **same key on different pinouts**.

## Questions to ask a vendor/FAE

- Are contacts included or ordered separately, and what crimp tool/positioner is required?
- What backshell and strain relief are compatible?
- What alternate keying/polarization options exist?
- What is the qualification / QPL status for my requirement?

## Example documentation bundle

- A [selection table](../tools/connector-comparison-matrix.md) row and a full interface definition: connector, mate, contacts, backshell, cap.
- A source-controlled **pinout** with keying documented in the [ICD](../tools/connector-icd-template.md).
- A [cable drawing](../tools/cable-drawing-template.md) and a torque/assembly note.

Related: [MIL-DTL-38999 deep dive](../07-mil-dtl-38999.md) · [Decision Examples](../09-decision-examples.md) · [Rugged Control Box example](../examples/rugged-control-box.md).
