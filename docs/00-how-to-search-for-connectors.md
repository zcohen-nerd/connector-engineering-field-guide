---
id: 00-how-to-search-for-connectors
title: How to Search for Connectors
description: "How to turn a vague connector need into useful search terms and filters — family, coding, sealing, termination — plus the questions to ask a vendor or FAE."
slug: /00-how-to-search-for-connectors
sidebar_label: How to Search for Connectors
---

# How to Search for Connectors

A connector search can go sideways before the first datasheet even opens. “Waterproof 12-pin plug” gets you a wall of unrelated parts, and starting from a brand name can hide better families. The fix is simple: describe the interface and the job, not just the shape in your head.

## Start with the interface, not the connector

Bad searches usually sound like this:

- waterproof connector
- 12 pin connector
- robot connector
- aviation plug
- JST connector

Better searches describe what you're actually building:

- environment
- connector family
- pin count
- coding/keying
- gender/body style
- termination
- mounting style
- current/voltage
- sealing requirement
- cable OD or wire gauge
- data type

Write down what crosses the boundary, who touches it, how often it gets disconnected, whether it has to keep water or dirt out, and what happens if somebody plugs in the wrong cable. That little bit of homework saves a lot of catalog wandering.

![Four connector-body examples showing that pin or socket contacts can appear in either a plug or a receptacle](/img/diagrams/pin-socket-plug-receptacle.svg)

*Search body style and contact gender separately. “Plug,” “receptacle,” “pin,” and “socket” describe different attributes; collapsing them into “male” or “female connector” throws away useful search information.*

## Search term patterns

Use search terms that combine the family, the use case, and one or two constraints:

- `M12 A-coded 4-pin panel mount sealed sensor connector`
- `M12 X-coded shielded Ethernet panel mount sealed`
- `MIL-DTL-38999 Series III shell size insert arrangement backshell`
- `Micro-Fit wire-to-board latching connector crimp housing`
- `sealed wire-to-wire connector positive lock automotive`
- `industrial rectangular modular connector power signal insert`
- `rugged RJ45 sealed panel mount Ethernet`
- `Tag-Connect programming header footprint`
- `coax SMA bulkhead connector impedance matched`

:::warning

Search terms only get you to the shortlist. The datasheet, applicable standard, and manufacturer documentation decide whether the part actually belongs in the design.

:::

## Useful filters

- connector family
- number of positions
- contact gender
- plug/receptacle body style
- termination style
- mounting style
- current per contact
- voltage rating
- wire gauge range
- cable OD range
- IP rating
- mating cycles
- operating temperature
- shielding
- keying/coding
- in-stock / lead time
- tooling required

## Search traps

- `JST` is not enough
- `aviation plug` is not a professional specification
- `waterproof` is not enough; look for IP rating and complete-assembly conditions
- `mil-spec` does not automatically mean environmentally sealed
- same pin count does not mean compatible
- `compatible` in a marketplace listing may not mean qualified or interchangeable
- a connector listing without the mating connector, contacts, backshell, cap, and tooling is not enough to release a design

## What to ask a vendor or FAE

- What is the exact mating part?
- Are contacts included or ordered separately?
- What crimp tool/positioner is required?
- What backshell or strain relief is compatible?
- What is the cable OD range?
- What is the derating curve for fully loaded connectors?
- Is the IP rating mated only, unmated, capped, or panel-mounted?
- What torque is required?
- What is the qualification status?
- Are there alternate keying/coding options?
- Is there a second source or QPL listing?

---

Starting from a physical mystery part instead of a requirement? Use the shared [Connector Identification Workflow](connector-identification.md) — or, for marketplace/maker parts, the hobby track's [How to Identify an Unknown Connector](hobby/identify-unknown-connector.md).
