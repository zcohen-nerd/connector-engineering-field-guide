---
id: 04-connector-selection-workflow
title: "4. Connector Selection — Think in This Order"
description: "The connector selection order that works: define the interface, then electrical requirements, mechanical and environmental limits, then production reality."
slug: /04-connector-selection-workflow
sidebar_label: Selection Workflow
sidebar_position: 4
---

# 4. Connector Selection — Think in This Order

Connector selection is multi-variable optimization. An excellent choice on most criteria that fails one critical criterion is still wrong. Work the steps in order — don't start from a connector you like.

If you are still trying to turn a vague need into useful search terms, start with [How to Search for Connectors](00-how-to-search-for-connectors.md) before you begin narrowing families.

## Step 1: Define the interface

Before picking a family, write down: What crosses this boundary (power / signal / data / RF / fiber / fluid)? Internal or external? User-, technician-, or factory-accessible? Disconnected often? Safety-critical? Does it cross an environmental boundary? Must it be mated/unmated under power?

## Step 2: Electrical requirements

| Criterion | What to evaluate | Common mistake |
|---|---|---|
| Voltage | Use the specified AC and DC working-voltage ratings; account for RMS/peak, transients, creepage/clearance (creepage = shortest path along a surface between two conductors; clearance = shortest through-air gap), pollution degree, altitude, and the applicable safety standard | Using DC rating on an AC circuit; ignoring transients/peak |
| Current | Per-contact rating *at temperature*, bundle-derated per the manufacturer's derating curve. Apply a conservative design margin. | Using max rating with no thermal/bundle derating |
| Signal type | Discrete, analog, thermocouple, encoder, CAN, RS-485, Ethernet, RF — each has different needs | Mixing high-current power and mV analog in one insert |
| Pin count | Required + shields + spares + growth (see spare-capacity note below) | Filling every contact, then re-engineering for one more pin |
| Contact size | Drives both current capacity and wire-gauge range | Cramming wire that's out of the contact's range |
| Wire gauge | Work forward: current → gauge → contact size → connector series | Working backward from an available connector |
| Shielding / EMI | 360° backshell shield termination vs. pigtail; per-group shields | Pigtail terminations; shield grounded one end only without reason |
| Isolation | Segregate noisy motor/power lines from low-level analog/data | Routing PWM motor lines next to encoder feedback in one insert |

:::note[Spare capacity]

Add spare positions where feasible and justified. Unused cavities must still be sealed, documented, and configuration-controlled. Spare capacity is useful in expandable systems, but shell size, sealing plugs, weight, cost, panel space, and customer/program requirements may override it. <!-- engineering heuristic, not a hard rule -->

:::

:::note[Current rating is not one number]

It depends on contact size, number of loaded contacts, ambient temperature, wire gauge, enclosure heat, and acceptable temperature rise. Always consult the manufacturer's derating curve for a fully-loaded connector.

:::

### How to read a derating curve

A contact-current derating curve plots the **allowable current per contact** (often as a percent of the single-contact rating) against the **number of energized contacts**, at a stated ambient temperature. To use it: find your loaded-contact count on the x-axis, read the allowable percentage (or current) for your ambient, apply it to every current-carrying contact, and keep a design margin below that.

*Illustrative only — use the manufacturer's actual curve:* a contact good for its full rating with a single pin energized might be derated to roughly 70–80% in a fully-loaded insert, and lower again at elevated ambient.

**Why fully-loaded is worse:** every energized contact dissipates I²R heat, and closely packed contacts warm each other (mutual heating), so the whole insert runs hotter and each contact must carry *less* to stay within its temperature limit. The falloff steepens as the loaded-contact count and ambient rise — which is exactly why "current rating is not one number."

## Step 3: Mechanical / environmental requirements

| Criterion | Questions to answer |
|---|---|
| IP rating | Sealed mated? Unmated (capped)? Panel-mount sealing? At what depth/duration for IP68? |
| Vibration / shock | Test category? Positive locking? Anti-decoupling? Strain relief? |
| Mating cycles | Production-only? Test? Field service? Daily? (service life with margin below the rated cycles) |
| Keying | Can two similar cables be swapped accidentally? Use alternate keying. |
| Locking | Threaded/self-locking is often preferred for severe vibration; bayonet is fast; push-pull/latch/jackscrews depend heavily on application, qualification, retention, and service needs |
| Mounting | Cable plug, panel receptacle, jam nut (compact, can rotate), flange (rigid, better gasket control), PCB |
| Backshell | Straight / angled; shielded / unshielded; environmental; strain relief — not optional |
| Cable jacket | OD range vs. gland/clamp range; material; temperature; chemical exposure |
| Serviceability | Can a technician reach it with gloves and the right tool, from the needed side? |
| Availability | Can procurement actually buy it in time? QPL / COTS / commercial-equivalent? |
| Documentation | Can you fully define it in a drawing, BOM, ICD, and assembly procedure? |

## Step 4: Production reality (the step beginners skip)

This is where the technically perfect connector turns out to be dead on arrival. Ask: Who crimps it? What tool is required? Is the crimp tool calibrated? Are contacts removable? Insertion/extraction tools available? Spare contacts stocked? Mating caps stocked? QPL-qualified, COTS, or equivalent? Second source? Lead time vs. schedule? Strip length / crimp spec defined? Inspection / pull-test plan?

Two procurement traps in particular: crimp contacts are often sold only in minimum order quantities (bags of ~100), and the connector, its contacts, the backshell, and the crimp tooling each carry *independent* lead times — order them together and early, not as an afterthought.

The items that most often fall off the BOM or the drawing at this step are collected in [What People Forget](what-people-forget.md).

---