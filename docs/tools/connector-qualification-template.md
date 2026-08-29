---
id: connector-qualification-template
title: Connector Qualification Plan Template
description: "A design-level qualification plan skeleton for a connector configuration: first article, a test matrix (continuity, low-level contact resistance, IR/DWV, thermal rise, shield bond, vibration, sealing, mating cycles), evidence capture, and requalification triggers — deliberately without acceptance values."
slug: /tools/connector-qualification-template
sidebar_label: Qualification Plan Template
---

# Connector Qualification Plan Template

The design-level counterpart of the [Harness Inspection Checklist](harness-inspection-checklist.md): where that page verifies *built units* against a released design, this one structures the evidence that the *design itself* — one documented connector configuration — does what the requirements claim. It is assembled from the guide's own material: [configuration control §1.5](../01-what-connectors-do.md), [Reading Datasheets §6](../06-reading-datasheets.md), the [derating discussion in §4](../04-connector-selection-workflow.md), and the [low-level contact page](../low-level-signal-contacts.md).

:::warning[What this template is — and is not]

This template tells you **what a qualification plan needs to contain and record**. It deliberately contains **no test values, durations, sample sizes, sequences, or acceptance criteria** — those come from the governing specification (the slash sheet or product specification, the program/customer standard, the applicable safety standard) and the contract, never from this page. It names common industry **test-method families** (the EIA-364 series)[^eia364] as orientation for what each test is called, not as a selection: the governing document picks the methods, revisions, conditions, and pass/fail limits. If you cannot name the document that defines "passing," that is finding #1 — stop and resolve it before spending samples.

:::

## 1. What is being qualified

Qualification attaches to a **documented configuration**, not a family name. "38999 is qualified" is a statement about a specification; *your* evidence is about one specific stack of part numbers, materials, and processes — and it stops applying when any of them changes ([§7](#7-requalification-triggers)).

| Configuration item | Entry |
|---|---|
| Connector P/N + rev (and mating half P/N + rev) | TBD |
| Contact P/Ns, **plating + thickness** | TBD |
| Wire types, gauges, insulation ODs | TBD |
| Wire seals / sealing plugs / interfacial seals | TBD |
| Backshell P/N + shield termination method | TBD |
| Crimp tool / positioner / die (+ calibration basis) | TBD |
| Torque values + procedure reference | TBD |
| Assembly instruction / application spec + rev | TBD |
| Manufacturer + manufacturing site (where known) | TBD |

## 2. Qualification vs. acceptance — decide which job this is

- **Qualification** proves a configuration once (or per the governing spec's retention rules): samples may be consumed, sectioned, or destroyed, and the output is a report the program keeps.
- **Acceptance** verifies every unit or lot at build/incoming — the [Harness Inspection Checklist](harness-inspection-checklist.md)'s territory, under the named workmanship standard (commonly IPC/WHMA-A-620 or the program equivalent).

Where the family already carries qualification — a [QPL/QPD-listed](../glossary.md) mil-spec part used inside its qualified envelope — the program may need no new performance testing, only the configuration record and first article. Where the configuration is novel (a COTS family with no published data for your duty, an unusual wire/seal/backshell stack, a customer flow-down demanding program-level evidence), the matrix in [§5](#5-test-matrix) is the work. **Record which case applies and who decided** — that decision is itself qualification evidence.

## 3. Plan header

| Field | Entry |
|---|---|
| Configuration under test (per [§1](#1-what-is-being-qualified)) + plan rev | TBD |
| Governing document(s) defining methods + acceptance criteria, each at revision | TBD |
| Pass/fail authority (who dispositions results) | TBD |
| Sample allocation: how many, in which test groups | TBD |
| **Test sequence source** — which document's qualification table sets the order/grouping | TBD |
| Witness / quality involvement required | TBD |
| Where the data and report will live (record system) | TBD |

:::note[Sequence matters — which is why this template doesn't provide one]

Test order changes results: durability cycles before a sealing test ages the seal the way service will; vibration before contact-resistance measurement is a different question from vibration after. Governing specifications define qualification **sequences and sample groups** for exactly this reason. Take the sequence from the governing document and record which one — don't improvise an order, and don't let this template's row order below be mistaken for one.

:::

## 4. First article

Before performance data means anything, verify that the articles being tested **are** the configuration in [§1](#1-what-is-being-qualified): dimensions, materials, plating, markings, and assembly per the complete drawing package. Performance results from samples that don't match the drawings are not qualification evidence — they are data about some other design. Aerospace and defense programs formalize this as First Article Inspection per SAE AS9102 (Revision C at this writing); other programs use their QMS equivalent.[^as9102]

| Field | Entry |
|---|---|
| FAI / first-article report reference | TBD |
| Part + drawing package revisions inspected against | TBD |
| Disposition (full/partial approval; open nonconformances) | TBD |
| Inspector / date | TBD |

## 5. Test matrix

One row per requested proof. **Common method family** names the EIA-364-series procedure the industry typically uses,[^eia364] so you can recognize it in product specs and quote requests — the governing spec decides what actually applies. Every electrical row assumes a recorded **baseline before exposure** and re-measurement **after** each exposure group: cycles, vibration, and immersion prove nothing until you re-measure what they changed.

| Test | What it proves | Common method family | Record |
|---|---|---|---|
| Continuity / wiring correctness | Every path lands per the pinout; the baseline for everything after | Point-to-point verification per the drawing's stated method | Method, instrument, per-path results |
| Low-level contact resistance | The interface works at **signal** levels — measured without breaking down films ([why](../low-level-signal-contacts.md)) | EIA-364-23 (LLCR) | Per-contact values, baseline + after each exposure group |
| Insulation resistance | Leakage through the insulator; the first number to drop with moisture ([§6](../06-reading-datasheets.md)) | EIA-364-21 | Test voltage/duration per governing spec, per-circuit values |
| Dielectric withstand (hipot) | Survives the specified overvoltage — *not* the working voltage ([glossary](../glossary.md)) | EIA-364-20 | Levels, ramp/dwell per governing spec, leakage/breakdown events |
| Thermal rise at current | Temperature rise vs. load matches the derating basis ([§4](../04-connector-selection-workflow.md)) | EIA-364-70 | Loading pattern, ambient, rise per contact group |
| Shield bond | The shield path conducts as designed — strategy per [§5.7](../05-connector-anatomy.md) | Bond-resistance check per the drawing; EMI shielding effectiveness (EIA-364-66 class) where the program requires it | Method, measurement points, values |
| Vibration | The mated pair survives the environment **while working** — monitored for discontinuities *during* exposure, not just inspected after | EIA-364-28, with discontinuity monitoring (EIA-364-46 class) | Profile source, fixturing, monitoring setup, any discontinuity events |
| Sealing | The mated (and, if claimed, capped-unmated) assembly meets its ingress claim | IP verification per IEC 60529 ([A1](../appendix/quick-reference-tables.md)); program immersion/pressure requirements | Condition tested (mated/capped), depth/duration source, post-test IR |
| Durability (mating cycles) | The contact system survives its service-life cycles — then **re-passes** the electrical rows above | EIA-364-09, followed by re-measurement | Cycle count source, lubrication state, post-cycle LLCR/IR/DWV |

## 6. Evidence capture

The reason this template exists. A qualification that isn't recorded to be findable, at revision, with its authority named, will be re-run — or worse, trusted without basis.

| Field (per test) | Entry |
|---|---|
| Requirement source (document + rev + paragraph) | TBD |
| Method + revision actually used | TBD |
| Sample IDs + their [§1](#1-what-is-being-qualified) configuration | TBD |
| Baseline data location | TBD |
| Result data location | TBD |
| Pass/fail authority + disposition | TBD |
| Witness / date | TBD |
| Deviations, anomalies, dispositions | TBD |

Anomalies that were observed and explained get **recorded with their disposition** — never quietly dropped. The report lives in the program's record system at a controlled revision, alongside the [ICD](connector-icd-template.md) and drawings it supports — not in someone's inbox.

## 7. Requalification triggers

Evidence is attached to the [§1](#1-what-is-being-qualified) configuration. Each of these events reopens the question — *the governing spec and program decide the answer* (full re-test, delta testing, or analysis), but the question itself is not optional:

| Trigger | The question to answer |
|---|---|
| Manufacturer or manufacturing-site change | Is this still the article that was qualified? |
| Contact, plating, or material change | Do the electrical rows (especially [LLCR](../low-level-signal-contacts.md)) still hold? |
| Crimp tool / die / process change | Does the termination still meet the application spec's evidence? |
| Wire, seal, or backshell substitution | Do sealing and strain-relief results still apply? |
| A manufacturer change notice (PCN) affecting form/fit/function | What does the notice change relative to [§1](#1-what-is-being-qualified)? ([Lifecycle & Procurement §2](../lifecycle-and-procurement.md) covers the notice-handling loop) |
| "Equivalent" or alternate part substitution | [Red flag §11](../11-red-flags.md) — not drop-in until the evidence says so |
| New environment beyond the tested envelope | Which exposure rows were never run at these levels? |

:::note

This is a working template, not a standard. The governing specification's qualification tables, the applicable safety and workmanship standards, the manufacturer's product and application specifications, and program/customer requirements always control — this page only keeps you from leaving a hole in the plan or the record.

:::

## Sources

[^eia364]: EIA-364 series — the connector industry's electrical/mechanical/environmental test procedures (ECIA), individual methods DoD-adopted (e.g. the DLA-hosted EIA-364-23 adoption notice: <https://landandmaritimeapps.dla.mil/Downloads/MilSpec/Docs/EIA/eia364-23.pdf>). Methods named on this page, cited at listing level: EIA-364-09 (durability), EIA-364-20 (dielectric withstanding voltage), EIA-364-21 (insulation resistance; listing: <https://standards.globalspec.com/std/14315534/eia-364-21>), EIA-364-23 (low-level contact resistance — see the [low-level page](../low-level-signal-contacts.md)'s citations), EIA-364-28 (vibration), EIA-364-46 (microsecond discontinuity), EIA-364-66 (EMI shielding effectiveness; listing: <https://standards.globalspec.com/std/1869907/EIA-364-66>), EIA-364-70 (temperature rise versus current; listing: <https://standards.globalspec.com/std/14388904/eia-364-70d>). Family index as carried by an accredited test laboratory, labeled as a lab listing: <https://www.desolutions.com/testing-services/test-standards/eia-364>. Method identities only — no test conditions or tables are reproduced here; the governing specification selects methods and revisions.

[^as9102]: SAE AS9102C, *Aerospace Series — First Article Inspection Requirements* (2023) — the aviation/space/defense FAI formalization, named here at listing level: <https://www.sae.org/standards/content/as9102c/>. The program's quality system decides the applicable FAI form and flow-downs.
