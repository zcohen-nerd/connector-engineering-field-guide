---
id: 13-hands-on-exercises
title: "13. Hands-On Learning Exercises"
description: "Eight hands-on connector exercises with real deliverables — selection tables, pinouts, part-number decoding, cable drawings, ICD entries, and risk reviews."
slug: /13-hands-on-exercises
sidebar_label: Hands-On Exercises
sidebar_position: 13
---

# 13. Hands-On Learning Exercises

Connector knowledge is built by doing. Each exercise produces a deliverable that demonstrates real competence.

Use [How to Search for Connectors](00-how-to-search-for-connectors.md) as a starting point for Exercise 2 and Exercise 3 so your search terms and filters are deliberate before you start comparing families or decoding real parts.

## Exercise 1 — Rugged control box connector set

**Scenario:** Design the external connector interface for a small sealed enclosure: 24 VDC input, Ethernet, CAN, four sensors, one motor output, one debug/service port.

**Deliverable:** connector family selection table, pinout, cable list, backshell/cap list, and a justification column for every decision.

**Related guide pages:** [Selection Workflow](04-connector-selection-workflow.md) · [Decision Paths](decision-paths/index.md) · [Rugged Control Box example](examples/rugged-control-box.md) · [Selection Checklist](tools/connector-selection-checklist.md)

## Exercise 2 — Connector comparison matrix

**Scenario:** Compare 38999 Series III, 26482, M12 A-coded, M12 X-coded, D-sub, Micro-D, an industrial rectangular/Han-style connector, and Molex Micro-Fit across: environment, pin count, current, sealing, tooling, cost, lead time, serviceability, common mistakes.

**Deliverable:** a scored comparison matrix plus a recommendation paragraph for a stated application.

**Related guide pages:** [Standards and Families](03-connector-standards-and-families.md) · [Comparison Matrix template](tools/connector-comparison-matrix.md)

## Exercise 3 — Decode three real 38999 part numbers

**Scenario:** Pull three real manufacturer part numbers and decode series, shell style, service class, shell size, insert arrangement, contact gender, keying, termination, and compatible backshell. Verify against the catalog.

**Deliverable:** a decoded part-number table (all fields resolved) + a short BOM for one complete assembly.

**Related guide pages:** [MIL-DTL-38999 Deep Dive](07-mil-dtl-38999.md)

## Exercise 4 — Design a pinout

**Scenario:** 12-pin rugged connector: 24 V, return, CAN-H, CAN-L, shield, two discrete inputs, two discrete outputs, one analog input, spares. Keep noisy lines away from analog, assign the shield intentionally, define source/load direction, mark every spare as RESERVED.

**Deliverable:** a pinout table with a rationale section on power/signal separation and contact-size choices.

**Related guide pages:** [Selection Workflow §2](04-connector-selection-workflow.md) · [Connector Anatomy](05-connector-anatomy.md)

## Exercise 5 — Select backshell and strain relief

**Scenario:** For your Exercise 4 connector as a 38999 plug: choose straight vs. 90°, shielded vs. unshielded, environmental backshell, cable OD range, shield termination method, and boot/strain relief.

**Deliverable:** a backshell selection table with entry angle, cable OD, shield method, material, part number, and source.

**Related guide pages:** [Connector Anatomy](05-connector-anatomy.md) · [MIL-DTL-38999 §7.1](07-mil-dtl-38999.md)

## Exercise 6 — Create a cable drawing

**Scenario:** Using your pinout: connector A, connector B, wire gauge, wire color, shield/drain treatment, twisted pairs, cable jacket, pinout, labels, length tolerance, notes, test requirements.

**Deliverable:** an actual cable drawing (hand sketch or CAD), formatted like a real engineering drawing.

**Related guide pages:** [Cable Drawing template](tools/cable-drawing-template.md) · [Connector Anatomy](05-connector-anatomy.md)

## Exercise 7 — Write an ICD entry

**Scenario:** For one external interface: connector P/N, mating connector, mechanical location, pinout, electrical limits, shielding, mating-cycle expectation, environmental assumptions, cable requirements, torque, dust-cap P/N, assembly notes.

**Deliverable:** a one-page ICD section formatted to engineering document standards.

**Related guide pages:** [Connector ICD template](tools/connector-icd-template.md) · [Practical Checklist](10-selection-checklist.md)

## Exercise 8 — Connector risk review on a real design

**Scenario:** Take any design you can access. Apply the Section 10 checklist to every external connector; flag every Section 11 red flag.

**Deliverable:** a connector risk table — connector, risk, severity (H/M/L), recommended corrective action.

**Related guide pages:** [Practical Checklist](10-selection-checklist.md) · [Red Flags](11-red-flags.md) · [Design Review Checklist](tools/design-review-checklist.md)

---
