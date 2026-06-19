# Connector Engineering Field Guide

*Practical connector selection for rugged, industrial, military-style, and electromechanical systems.*

!!! note "v0.1 Public Review Draft"
    Technical corrections welcome with sources.

!!! note "Core mental model"
    A connector is a *controlled interface between subsystems*. It carries power, signals, and data; survives the environment; defines the service boundary; and becomes a configuration-controlled item in your released design baseline.

!!! warning "Disclaimer"
    This guide is educational and intended to teach engineering judgment. It is **not** a substitute for applicable standards, manufacturer datasheets, safety requirements, customer specifications, qualification requirements, or program-specific design rules. Exact connector ratings, part numbers, tooling, assembly instructions, and qualification status must be verified before use in released hardware. **When this guide conflicts with a datasheet, applicable standard, customer requirement, or qualified program requirement, the datasheet / standard / customer requirement wins.**

## Who this is for

- Mechanical engineering interns
- Junior electromechanical / mechatronics engineers
- Robotics and controls engineers
- Small hardware teams
- Makers transitioning into professional hardware design

## What this guide is not

- Not a connector catalog
- Not a replacement for standards
- Not a manufacturer datasheet
- Not a qualification document

## Start here

- [What connectors actually do](01-what-connectors-do.md)
- [Connector selection workflow](04-connector-selection-workflow.md)
- [MIL-DTL-38999 deep dive](07-mil-dtl-38999.md)
- [M12 deep dive](08-m12.md)
- [Practical checklist](10-selection-checklist.md)
- [Hands-on exercises](13-hands-on-exercises.md)

## Source discipline

The canonical guide source remains in `Source/connector-engineering-field-guide.md`, and the source-verification backlog remains in `Source/source-notes.md`. This website is the structured, Markdown-first presentation of that material. Datasheets, applicable standards, customer requirements, and qualified program requirements always win.
