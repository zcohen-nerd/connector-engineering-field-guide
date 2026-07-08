---
id: decision-guide
title: "Hobby Connector Decision Guide"
description: "A scannable starting-point table for hobby projects — sensors, LEDs, batteries, servos, printers, power — with the caveat that decides each one."
slug: /hobby/decision-guide
sidebar_label: Decision Guide
---

# Hobby Connector Decision Guide

Starting points, not verdicts — each row assumes you'll [identify properly](identify-unknown-connector.md), [measure the pitch](pitch.md), and verify the exact part before committing. No current ratings are asserted here; that's the datasheet's job ([power vs signal](power-vs-signal.md)).

| You're wiring… | Start by looking at | The caveat that decides it |
|---|---|---|
| I2C sensors to a dev board | Qwiic / STEMMA QT (SH-style) ecosystem | stay inside one ecosystem; Grove is different |
| Breadboard / bench signals | Dupont 0.1 in jumpers | friction fit — bench only, not vibration |
| Small 1S battery to a board | JST-PH-class pigtail | **verify polarity against the board silkscreen** |
| 3D printer harness repair | match the printer's existing family (often XH-class) | measure pitch; buy the *same* series, genuine if possible |
| Addressable LED string data | the string's existing inline connector ([SM-style](jst-sm-led-connectors.md)) | data direction; buy spare prewired pigtail pairs |
| LED power injection | rated power wiring — terminals, ferrules, Wago-style, XT-class | calculate current first; not the data pigtail |
| RC battery / high-current DC | XT30/XT60/XT90 class by calculated current | datasheet rating, genuine parts, no unplugging under load |
| Servos | the servo-lead ecosystem | stall current, wire gauge, pin-order convention |
| Field-serviceable power distribution | screw/spring (Wago-style) terminals | gauge range, ferrules on stranded wire, strain relief |
| Wall-adapter power inlet | barrel jack or USB-C | barrel sizes/polarity vary; USB-C needs resistors/PD to deliver |
| Anything leaving the bench for the field | → [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md) | sealing, vibration, current, and other people |

For the family-by-family detail behind every row: [Common Hobby Connector Families](families.md).
