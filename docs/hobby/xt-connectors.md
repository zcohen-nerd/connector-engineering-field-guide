---
id: xt-connectors
title: "XT30, XT60, and XT90"
description: "The keyed DC power connector ecosystem of RC and hobby battery wiring — sourced AMASS ratings (the digits are momentary!), clone quality, and safety limits."
slug: /hobby/xt-connectors
sidebar_label: XT30 / XT60 / XT90
---

# XT30, XT60, and XT90

## What people call it

XT connectors, battery connectors, LiPo connectors, "the yellow ones."

## What it actually is

A **keyed, polarized DC power connector ecosystem** commonly sold under XT30 / XT60 / XT90 names in RC and hobby battery wiring — solder-cup bullet-style contacts in a keyed nylon shell, sized XT30 → XT60 → XT90. The originator is **Changzhou Amass Electronics (AMASS)**, which states on its manufacturer site that it is "the original creator of the XT series."[^amass] Marketplace parts may be genuine AMASS or clones of unknown quality — the ratings below describe **genuine AMASS parts only**.

## The sourced ratings — and the trap in the name

Per AMASS's own documentation, **the digits in the name are the *momentary* current, not the continuous rating.** Continuous ("rated") current is half or less:

| Family | Rated (continuous) current | Momentary current | Recommended cable |
|---|---|---|---|
| XT30 (XT30U) | 15 A[^amasscat] | 30 A[^amasscat] | 18 AWG[^amasscat] |
| XT60 (incl. U/H/L variants) | 30 A[^amasscat][^xt60e] | 60 A[^amasscat] | 12 AWG[^amasscat] |
| XT90 (XT90H; XT90S anti-spark) | 40 A[^amasscat] | 90 A[^amasscat] | 10 AWG[^amasscat] |

All per the same AMASS documentation: DC 500 V, gold-plated brass contacts, PA UL94 V0 housings, 1000 mating cycles, −20 °C to +120 °C.[^amasscat] Conditions matter enormously: AMASS's XT60E sheet shows the *same connector at the same 30 A* rising **27.8 °C above ambient with 12 AWG wire but 85 °C with 14 AWG**[^xt60e] — the wire is part of the rating. These are genuine-part figures under AMASS's test conditions, not clone promises and not your application's derating.

## Where it shows up

Battery packs, RC vehicles and drones, portable power, hobby robots, bench power leads, e-bike-adjacent DIY (where the stakes rise fast — see below).

## How to identify it

Keyed trapezoid-ish shell with two (or, in XT90 anti-spark variants, resistor-equipped) bullet contacts; size steps visibly between the three. Clones are everywhere; contact plating, shell material, and fit vary with them.

## What to buy

Matched male/female pairs from a supplier you can name, sized from **calculated** current, plus quality heat-shrink. Soldering is the termination: tin the cup, tin the wire, one clean joint, insulate — a cold joint or wicked-stiff wire at the exit is the standard failure. Strain relief and no exposed metal are part of the job ([crimping-page discipline applies in spirit](crimping.md), soldered edition).

:::warning[XT connectors are power connectors, not magic safety devices]

XT-class connectors are useful for hobby DC power, but they are not automatically sealed, touch-safe, load-break rated, or safe to unplug under load. Size them from calculated current, wire gauge, genuine/source-backed ratings, fusing, and service conditions.

:::

## Common traps

- **Sizing by digits.** "60 means 60 A continuous" is exactly wrong — per AMASS, 60 is the *momentary* figure and 30 A is the continuous rating.[^amasscat] Size from the calculation and the table above (genuine parts) or your actual part's documentation.
- **Undersized wire.** The temperature-rise data above shows the wire gauge changing the thermal outcome threefold at identical current.[^xt60e]
- **Clone roulette** — a loose clone-to-genuine mate heats at exactly the moment of max current, and the AMASS figures don't transfer.
- **Unplugging under load** — battery DC arcs; plan a switch/de-energize step, and consider the XT90S anti-spark variant for high-capacity packs (verify the exact part's provision).
- **No fuse.** A battery can deliver enormous fault current; fuse near the source ([power vs signal](power-vs-signal.md)).
- **Exposed energized contacts** on the live half — male pins on the battery side are a short circuit waiting for a wrench.

## Source status

Attribution and ratings are sourced: the originator claim from AMASS's manufacturer site,[^amass] and the ratings from AMASS-authored documentation — the product catalog and an XT60E spec sheet, both **manufacturer-authored PDFs hosted by distributors/resellers** (AMASS's own site publishes no spec tables; its catalog is available on request). Figures apply to genuine AMASS parts under AMASS's stated conditions; clones are not covered, and AMASS notes its data sheets "will change according with the test background."[^xt60e] Tracked in [Hobby Source Notes](hobby-source-notes.md).

## When to move to the engineering track

Higher-energy packs, fielded systems, or anything where the energized-connector questions (load-break, touch safety, fault current, inrush) need documented answers — go straight to the [high-current DC path](../decision-paths/high-current-dc-power.md) and its safety warning, and [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md).

## Sources

[^amass]: Amass Connectors — official manufacturer site of Changzhou Amass Electronics, which describes itself as "the original creator of the XT series." <https://www.amassconnectors.com/>

[^amasscat]: Changzhou Amass Electronics product catalog (manufacturer-authored PDF, distributor-hosted by LCSC) — XT30U: rated current (RC) 15 A, momentary current (MC) 30 A, cable spec 18 AWG; XT60/XT60U/XT60H/XT60L: RC 30 A, MC 60 A, 12 AWG; XT90H and XT90S (anti-spark): RC 40 A, MC 90 A, 10 AWG. All listed at DC 500 V, brass gold-plated contacts, PA UL94 V0, 1000 use times, −20 °C to 120 °C. <https://wmsc.lcsc.com/wmsc/upload/file/pdf/v2/lcsc/1811011630_Changzhou-Amass-Elec-XT30U-F_C99102.pdf>

[^xt60e]: Changzhou Amass Electronics, XT60E-M specification (manufacturer-authored PDF, reseller-hosted) — RC 30 A / MC 60 A, DC 500 V, recommended cable 12 AWG; temperature rise at 30 A: 27.8 °C (12 AWG) vs 85 °C (14 AWG); "Data sheet will change according with the test background." <https://www.shoptronica.com/ficheros/XT60E-M.pdf>
