---
id: hobby-index
title: Hobby Connector Field Guide
description: "A practical map through hobby connector chaos — identify mystery connectors, decode JST naming, buy the right mating parts, crimp, and dodge the traps."
slug: /hobby
sidebar_label: Hobby Guide Home
---

# Hobby Connector Field Guide

*A practical map through hobby connector chaos: identify, choose, buy, crimp, and avoid the common traps.*

Hobby connector information is messy. Product listings misuse names, photos lie, clone parts blur family boundaries, and "JST" often means almost nothing by itself. This guide is a practical map for identifying, choosing, buying, and crimping connectors for maker, student, 3D printer, LED, RC, sensor, and small-robot projects.

:::note[Introduced v0.8, expanded v0.9]

This track is still growing — the core pages and the first family deep-pages are in place, and more are on the [roadmap](hobby-source-notes.md). The [Professional / Industrial guide](../engineering-home.md) is the longer-established track, and its foundational material (what connectors actually do, anatomy, crimping discipline) applies here too.

:::

## The workflow that actually works

Hobby connector names are messy, product photos and marketplace titles are not reliable, and "JST" by itself is not enough information. When you face any connector question, run this sequence instead of guessing:

1. **Identify the connector family** — not "it looks like a JST," the actual family/series. ([How to identify an unknown connector](identify-unknown-connector.md))
2. **Measure the pitch** with calipers. ([Pitch: the number that saves you](pitch.md))
3. **Count positions.**
4. **Determine the connection type** — wire-to-board, wire-to-wire, or board-to-board.
5. **Identify the latch/keying** — positive latch, friction fit, polarization bumps.
6. **Identify the housing and the terminal/contact separately** — they are different part numbers, and both must match the family.
7. **Verify against a drawing or datasheet** — not a listing photo.
8. **Buy samples before committing** a whole project or a bulk order.

:::warning

A connector that fits is not automatically the right connector. Check pitch, family, latch, contact, wire gauge, current, polarity, and mating part before using it in a project.

:::

## Start with these

- [The Big Idea: Connector Families, Not Connector Vibes](big-idea.md)
- [How to Identify an Unknown Connector](identify-unknown-connector.md)
- [JST Is Not One Connector](jst-is-not-one-connector.md)
- [Common Hobby Connector Families](families.md) — including [JST-SM and LED string connectors](jst-sm-led-connectors.md)
- [Power vs Signal Connectors](power-vs-signal.md) and [Crimping Without Losing Your Mind](crimping.md)
- [Amazon/eBay/AliExpress Connector Kits](connector-kits.md) and [Buying the Right Mating Parts](buying-mating-parts.md)
- [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md)

## What this guide covers

- JST-family and JST-style connectors — and why "JST" alone names a manufacturer's ecosystem, not one connector
- Dupont / 0.1 inch headers
- Qwiic, STEMMA QT, Grove, and dev-board ecosystems
- LED string and strip connectors, including JST-SM-style connectors
- RC power connectors such as XT30, XT60, XT90
- Servo connectors
- Screw terminals and spring terminals
- USB and barrel jack power
- Crimping, pre-crimped leads, and connector kits
- Identifying unknown connectors

## What this guide does not do

- It does not replace datasheets.
- It does not guarantee clone compatibility.
- It does not make marketplace current ratings trustworthy.
- It does not certify connectors for fielded, safety-critical, outdoor, automotive, marine, or production systems.
- When a project becomes fielded or customer-facing, use the [Professional / Industrial guide](../engineering-home.md).

:::warning[The one habit that prevents most hobby connector pain]

Never trust a listing title or a photo. Verify **pitch, latch, housing, contact, and the datasheet drawing** before buying — a connector that *fits* can still be electrically or mechanically wrong, and "JST-compatible" does not mean genuine JST.

:::

## Where the hobby and engineering tracks meet

The core mental model is the same in both tracks: a connector is a *controlled interface*, not just "a plug with enough pins." When your project starts carrying real battery power, going outdoors, riding on a vehicle, or being built by someone else, that's your cue to graduate specific interfaces to the engineering track — start with [rugged on a budget](../decision-paths/rugged-on-a-budget.md) and the [energized-connector safety warning](../decision-paths/high-current-dc-power.md).
