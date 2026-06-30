---
id: index
title: Connector Engineering Field Guide
slug: /
sidebar_label: Home
sidebar_position: 1
---

# Connector Engineering Field Guide

*Practical connector selection for rugged, industrial, military-style, and electromechanical systems.*

:::note[v0.1 Public Review Draft]

Technical corrections welcome with sources.

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

Use this table to get to a reasonable starting family before you disappear into catalogs and datasheets. If you are still trying to figure out how to search, start with [How to Search for Connectors](00-how-to-search-for-connectors.md).

| I need... | Start with... | Then check... |
| --- | --- | --- |
| A sealed industrial sensor cable | M8 or M12 A-coded | pinout, current, IP rating, torque, cable OD, vibration |
| Rugged Ethernet outside an enclosure | M12 D-coded, M12 X-coded, or sealed/rugged RJ45 | data rate, shielding, cable category, sealing, latch protection |
| Internal PCB power harness | Micro-Fit, Mini-Fit, Nano-Fit, TE/Harwin/JST family as appropriate | current, wire gauge, latch, TPA, tooling, vibration |
| High-current DC power | Anderson SB, industrial rectangular power insert, high-current circular, 38999 power contacts where appropriate | derating, wire gauge, loaded contacts, heat rise, touch safety |
| Defense/rugged external payload interface | MIL-DTL-38999, MIL-DTL-26482, or similar rugged circular | shell size, insert arrangement, contacts, backshell, keying, caps |
| Compact high-reliability internal interface | Micro-D or other high-reliability compact connector | current, tooling, assembly process, service model |
| Debug or service access | Protected USB-C, keyed shrouded header, Tag-Connect, Micro-D, D-sub, sealed service connector | access level, ESD, mating cycles, pin protection, documentation |
| Removable machine module | Industrial rectangular / Han-style connector or 38999 hybrid | mixed power/signal/data, serviceability, keying, ground-first sequencing |
| RF/GPS/radio path | SMA, TNC, N-Type, BNC, MCX, SMP/SMPM, or coax contacts in a hybrid connector | impedance, frequency, cable, torque, shielding |

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
- [MIL-DTL-38999 deep dive](07-mil-dtl-38999.md)
- [M12 deep dive](08-m12.md)
- [Practical checklist](10-selection-checklist.md)
- [Hands-on exercises](13-hands-on-exercises.md)

## Source discipline

The canonical guide source remains in `Source/connector-engineering-field-guide.md`, and the source-verification backlog remains in `Source/source-notes.md`. This website is the structured, Markdown-first presentation of that material. Datasheets, applicable standards, customer requirements, and qualified program requirements always win.
