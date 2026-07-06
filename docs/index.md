---
id: index
title: Connector Engineering Field Guide
description: "Practical connector selection for rugged, industrial, and military-style systems — from picking a sane starting family to a fully documented interface."
slug: /
sidebar_label: Home
---

# Connector Engineering Field Guide

*Practical connector selection for rugged, industrial, military-style, and electromechanical systems.*

:::note[v0.5 Public Beta]

Technical corrections welcome with sources. This guide is still educational and beta-status; verify all ratings, part numbers, tooling, qualification status, and assembly instructions against the applicable datasheet, standard, and program requirements.

:::

Picking connectors is harder than it should be. The information is scattered across datasheets, standards, catalogs, vendor naming systems, and tribal knowledge. This guide exists to help engineers who are not connector specialists figure out what connector family to start with, what specifications actually matter, what mistakes to avoid, and how to turn "I need a plug here" into a buildable, documented interface.

The goal is not to make you a connector expert. The goal is to help you classify the interface, choose a sane connector family to investigate first, understand what specs matter, avoid common traps, and document the interface properly.

:::note[Core mental model]

A connector is a *controlled interface between subsystems*. It carries power, signals, and data; survives the environment; defines the service boundary; and becomes a configuration-controlled item in your released design baseline.

:::

:::warning[Disclaimer]

This guide is educational and intended to teach engineering judgment. It is **not** a substitute for applicable standards, manufacturer datasheets, safety requirements, customer specifications, qualification requirements, or program-specific design rules. Exact connector ratings, part numbers, tooling, assembly instructions, and qualification status must be verified before use in released hardware. **When this guide conflicts with a datasheet, applicable standard, customer requirement, or qualified program requirement, the datasheet / standard / customer requirement wins.**

:::

## Start Here: Pick a Connector

Use these cards to get to a reasonable starting family before you disappear into catalogs and datasheets. If you are still trying to figure out how to search, start with [How to Search for Connectors](00-how-to-search-for-connectors.md).

<div class="cn-card-grid">
<div class="cn-card"><div class="cn-card-title">A sealed industrial sensor cable</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> M8 or M12 A-coded</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> pinout, current, IP rating, torque, cable OD, vibration</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/industrial-sensor">Industrial sensor</a></div></div>
<div class="cn-card"><div class="cn-card-title">Rugged Ethernet outside an enclosure</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> M12 D-coded, M12 X-coded, or sealed/rugged RJ45</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> data rate, shielding, cable category, sealing, latch protection</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/rugged-ethernet">Rugged Ethernet</a></div></div>
<div class="cn-card"><div class="cn-card-title">Internal PCB power harness</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> Micro-Fit, Mini-Fit, Nano-Fit, TE/Harwin/JST family as appropriate</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> current, wire gauge, latch, TPA, tooling, vibration</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/internal-pcb-harnessing">Internal PCB harnessing</a></div></div>
<div class="cn-card"><div class="cn-card-title">Better-than-hobby field wiring on a budget</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> Sealed automotive — Deutsch DT/DTM/DTP, Superseal, MX150, Metri-Pack</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> wire seal range, correct contact/crimp, cavity plugs, wedgelock/secondary lock</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/rugged-on-a-budget">Rugged on a budget</a></div></div>
<div class="cn-card"><div class="cn-card-title">High-current DC power</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> Anderson SB, industrial rectangular power insert, high-current circular, 38999 power contacts where appropriate</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> derating, wire gauge, loaded contacts, heat rise, touch safety, sealing (Anderson SB is unsealed/genderless — add a boot outdoors)</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/high-current-dc-power">High-current DC power</a></div></div>
<div class="cn-card"><div class="cn-card-title">Defense/rugged external payload interface</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> MIL-DTL-38999, MIL-DTL-26482, or similar rugged circular</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> shell size, insert arrangement, contacts, backshell, keying, caps</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/defense-rugged-external-io">Defense / rugged external I/O</a></div></div>
<div class="cn-card"><div class="cn-card-title">Compact high-reliability internal interface</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> Micro-D or other high-reliability compact connector</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> current, tooling, assembly process, service model</div><div class="cn-card-row"><span class="cn-card-label">Deep dive</span> <a href="03-connector-standards-and-families">Micro-D in Standards &amp; Families</a></div></div>
<div class="cn-card"><div class="cn-card-title">Debug or service access</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> Protected USB-C, keyed shrouded header, Tag-Connect, Micro-D, D-sub, sealed service connector</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> access level, ESD, mating cycles, pin protection, documentation</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/debug-service-port">Debug / service port</a></div></div>
<div class="cn-card"><div class="cn-card-title">Removable machine module</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> Industrial rectangular / Han-style connector or 38999 hybrid</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> mixed power/signal/data, serviceability, keying, ground-first sequencing</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/removable-machine-module">Removable machine module</a></div></div>
<div class="cn-card"><div class="cn-card-title">RF/GPS/radio path</div><div class="cn-card-row"><span class="cn-card-label">Start with</span> SMA, TNC, N-Type, BNC, MCX, SMP/SMPM, or coax contacts in a hybrid connector</div><div class="cn-card-row"><span class="cn-card-label">Then check</span> impedance, frequency, cable, torque, shielding</div><div class="cn-card-row"><span class="cn-card-label">Path</span> <a href="decision-paths/rf-gps-radio">RF / GPS / radio</a></div></div>
</div>

Want a step-by-step walkthrough? Most of these scenarios now have a full [Decision Path](decision-paths/index.md) — including the new [rugged-on-a-budget](decision-paths/rugged-on-a-budget.md), [removable machine module](decision-paths/removable-machine-module.md), and [RF/GPS/radio](decision-paths/rf-gps-radio.md) paths. (The *compact high-reliability internal* card is the one scenario without a dedicated path — start from the [Micro-D coverage in Standards and Families](03-connector-standards-and-families.md).)

## Who this is for

- Mechanical engineering interns
- Junior electromechanical / mechatronics engineers
- Robotics and controls engineers
- Small hardware teams
- Makers transitioning into professional hardware design

## What this guide helps you do

- Classify the interface you are trying to build
- Pick a sane connector family to investigate first
- Know which specifications actually matter
- Avoid common beginner traps
- Turn a loose connector choice into a buildable, documented interface

## What this guide is not

- Not a connector catalog
- Not a replacement for standards
- Not a manufacturer datasheet
- Not a qualification document

## Use the guide

- [How to search for connectors](00-how-to-search-for-connectors.md)
- [What connectors actually do](01-what-connectors-do.md)
- [Connector selection workflow](04-connector-selection-workflow.md)
- [Decision paths](decision-paths/index.md) — scenario-based starting points
- [MIL-DTL-38999 deep dive](07-mil-dtl-38999.md) and [MIL-DTL-26482 mini deep dive](mil-dtl-26482.md)
- [M12 deep dive](08-m12.md)
- [Practical checklist](10-selection-checklist.md)
- [What people forget](what-people-forget.md)
- [Hands-on exercises](13-hands-on-exercises.md)
- [Tools & templates](tools/index.md) and worked examples: [Rugged Control Box](examples/rugged-control-box.md), [Connector Selection Packet](examples/connector-selection-packet.md)

## Source discipline

`Source/connector-engineering-field-guide.md` in the repository is the **canonical guide source** — the single source of truth for the 14 numbered guide sections and appendix on this site, kept in sync with the corresponding pages here (`00`–`14`, `appendix/`). The source-verification backlog is `Source/source-notes.md`. This website adds site-only material with no `Source/` equivalent — this home page, [Decision Paths](decision-paths/index.md), [Tools & Templates](tools/index.md), [Examples](examples/index.md), [What People Forget](what-people-forget.md), and the diagrams — but the guide's factual claims and citations are governed by `Source/`. If a numbered guide page here and `Source/` ever disagree on a fact, `Source/` wins and the page is due for a refresh. Datasheets, applicable standards, customer requirements, and qualified program requirements always win over both.
