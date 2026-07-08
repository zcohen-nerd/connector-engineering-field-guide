---
id: xt-connectors
title: "XT30, XT60, and XT90"
description: "The keyed DC power connector ecosystem of RC and hobby battery wiring — sizing by calculation not digits, clone quality, soldering, and safety limits."
slug: /hobby/xt-connectors
sidebar_label: XT30 / XT60 / XT90
---

# XT30, XT60, and XT90

## What people call it

XT connectors, battery connectors, LiPo connectors, "the yellow ones."

## What it actually is

A **keyed, polarized DC power connector ecosystem** commonly sold under XT30 / XT60 / XT90 names in RC and hobby battery wiring — solder-cup bullet-style contacts in a keyed nylon shell, sized XT30 → XT60 → XT90. The digits loosely track a size/current class **in common usage**, but they are not a design rating unless taken from actual manufacturer documentation. Exact manufacturer, genuine-vs-clone status, current rating, wire gauge, and temperature limits must be verified from the actual part documentation.

## Where it shows up

Battery packs, RC vehicles and drones, portable power, hobby robots, bench power leads, e-bike-adjacent DIY (where the stakes rise fast — see below).

## How to identify it

Keyed trapezoid-ish shell with two (or, in XT90 variants, sometimes anti-spark) bullet contacts; size steps visibly between the three. Genuine parts are commonly attributed to AMASS as originator — treat that as *common usage, unverified here* — and clones are everywhere; contact plating, shell material, and fit vary with them.

## What to buy

Matched male/female pairs from a supplier you can name, sized from **calculated** current, plus quality heat-shrink. Soldering is the termination: tin the cup, tin the wire, one clean joint, insulate — a cold joint or wicked-stiff wire at the exit is the standard failure. Strain relief and no exposed metal are part of the job ([crimping-page discipline applies in spirit](crimping.md), soldered edition).

:::warning[XT connectors are power connectors, not magic safety devices]

XT-class connectors are useful for hobby DC power, but they are not automatically sealed, touch-safe, load-break rated, or safe to unplug under load. Size them from calculated current, wire gauge, genuine/source-backed ratings, fusing, and service conditions.

:::

## Common traps

- **Sizing by digits.** "60 means 60 A" is marketplace folklore — size from the calculation and the actual part's documentation.
- **Clone roulette** — a loose clone-to-genuine mate heats at exactly the moment of max current.
- **Unplugging under load** — battery DC arcs; plan a switch/de-energize step, and consider anti-spark variants for high-capacity packs (verify the exact part's provision).
- **No fuse.** A battery can deliver enormous fault current; fuse near the source ([power vs signal](power-vs-signal.md)).
- **Exposed energized contacts** on the live half — male pins on the battery side are a short circuit waiting for a wrench.

## Source status

Deliberately qualitative: no current figure on this page is a rating. Manufacturer documentation for the XT ecosystem is a named target in [Hobby Source Notes](hobby-source-notes.md) — until cited, treat every XT number you meet as unverified.

## When to move to the engineering track

Higher-energy packs, fielded systems, or anything where the energized-connector questions (load-break, touch safety, fault current, inrush) need documented answers — go straight to the [high-current DC path](../decision-paths/high-current-dc-power.md) and its safety warning, and [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md).
