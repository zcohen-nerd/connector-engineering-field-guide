---
id: 11-red-flags
title: "11. Red Flags and Beginner Mistakes"
description: "Connector-selection red flags and common beginner mistakes — from pin-count-only picks to missing torque specs — with the field failure mode each causes."
slug: /11-red-flags
sidebar_label: Red Flags
---

# 11. Red Flags and Beginner Mistakes

Most connector failures aren't exotic. They're ordinary decisions that looked harmless in a meeting and turned into a bad crimp, a missing cap, an impossible service angle, or six weeks of lead-time pain. This is the fast scan for those decisions.

| Red flag | Why it's bad |
|---|---|
| Picking only by pin count | Ignores current, voltage, contact size, environment, tooling |
| Ignoring required rear hardware | Strain relief, shielding, or accessory sealing may be missing; verify integral seals separately |
| Ignoring tooling | Design may be impossible to build correctly |
| Mixing signal and power casually | Noise, safety, creepage, heating, service confusion |
| Bad shielding (pigtail) termination | Pigtails are inductive — raise impedance, radiate |
| No strain relief | Conductors fatigue and fail at the termination |
| No keying | Similar connectors get swapped; expensive mis-mates |
| Poor service access | Technicians damage connectors during maintenance |
| Hobby connectors outside their suitable environment | No sealing, weak latch, unknown vibration life |
| Not checking mating cycles | Test/service ports wear out early |
| Not checking lead time | Schedule failure despite a good design |
| Not documenting pinouts | Harnesses become tribal knowledge |
| Wrong powered gender | Exposed live pins → shock/short risk |
| No dust caps | Dirt/water/pin damage on unmated ports |
| Using spare pins randomly | Future maintainers inherit chaos |
| No cable labels | Debugging becomes painful |
| No mating connector in BOM | Procurement buys half an interface |
| No torque spec | Sealing and anti-vibration features compromised |
| Confusing IP67 with IP68 | IP67 ≈ 1 m / 30 min; IP68 = stated depth/duration — not interchangeable |
| Undersized wire in wire seal | Cavity leaks; whole connector seal defeated |
| Two wires doubled into a one-wire crimp barrel | Unqualified fill has unverified compression, retention, and sealing; one conductor may be loose — use a splice or a dual-wire-rated terminal ([crimping](../../hobby/crimping.md)) |
| No ground-first mating sequence where needed | Power-before-ground → latch-up, ground bounce, resets |
| Substituting "equivalent" parts without qualification | Plating/insert/thread/geometry can differ; not drop-in |
| Gold contacts mated to tin contacts | The mixed interface frets and builds tin oxide on the gold half — one plating class per mated pair ([low-level deep dive](../topics/low-level-signal-contacts.md)) |
| Low-level signals without contact-performance evidence | Power ratings alone do not establish low-level reliability; verify the exact interface after relevant exposures ([low-level deep dive](../topics/low-level-signal-contacts.md)) |
| No PCN/EOL monitoring on a released design | Notices go to customers of record; you learn about discontinuance from a failed order ([lifecycle](../topics/lifecycle-and-procurement.md)) |
| Broker purchase without traceability verification | Counterfeit exposure concentrates in scarce/obsolete parts ([lifecycle](../topics/lifecycle-and-procurement.md)) |
| Mixing manufacturers in one mated pair unverified | Outside QPL-class families, no drawing arbitrates the mate ([lifecycle](../topics/lifecycle-and-procurement.md)) |

Many of these reduce to an item that fell off the BOM or the drawing — see [What People Forget](what-people-forget.md).

---
