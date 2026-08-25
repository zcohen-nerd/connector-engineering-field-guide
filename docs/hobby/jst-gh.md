---
id: jst-gh
title: "JST-GH"
description: "The 1.25 mm JST GH series: the Pixhawk/drone locking standard — datasheet figures, why flight controllers abandoned DF13 for it, and how to tell it from SH and PicoBlade lookalikes."
slug: /hobby/jst-gh
sidebar_label: JST-GH
---

# JST-GH

The GH is the smallest connector most hobbyists will ever *like*: a 1.25 mm-pitch wire-to-board family whose defining feature is a **positive latch with an audible click** — on a connector barely wider than a grain of rice. That latch is why the drone world standardized on it, and the standardization is why "GH" is one of the few small-connector names a marketplace listing might actually mean.

## What people call it

GH, "Pixhawk connector," "drone cable," "JST 1.25" (dangerously incomplete — see the lookalikes below), GHR (the housing part-number prefix).

## What it actually is

The genuine JST **GH series**: 1.25 mm pitch, wire-to-board, **2–15 circuits**, with a locking housing that clicks over the header shroud. Rated **1 A (AWG #26)** and **50 V**, wire range **AWG #30–26**, per the official JST datasheet[^jst-gh] — a *signal-class* family: sensors, GPS, telemetry, CAN, I2C, UART, not power runs. Housings are GHR-*xx*V-S; contacts and shrouded (typically surface-mount) headers are GH-specific line items.

## Why drones standardized on it

The **Pixhawk Connector Standard (DS-009)** — the interface standard behind the Pixhawk/PX4/ArduPilot flight-controller ecosystem — specifies the JST GH series as its connector, defining standard ports (GPS, telemetry, CAN, power and so on) around it.[^pixhawk] That decision is a compact case study in [connector selection](big-idea.md):

- **The predecessor was a friction fit.** Earlier Pixhawk-era boards used 1.25 mm Hirose **DF13** headers — small, but with no positive latch. On machines that are one unplugged GPS lead away from a flyaway, friction retention was the wrong bet, and the ecosystem moved to the latched GH.[^pixhawk]
- **A latch you can hear.** The GH's click is a verifiable assembly state on a connector too small to inspect visually in a crowded frame.
- **Standard ports, standard cables.** Because DS-009 defines port pinouts, off-the-shelf GH cables interconnect gear from different vendors — the whole point of a connector *standard* rather than merely a connector.

The honest caveat carried by the standard's own ecosystem: **not every board with GH connectors follows DS-009 pinouts.** Verify the flight controller's documentation before trusting a cable that "fits" — fitting was never the question.[^pixhawk]

## How to identify it — the 1-point-something lookalikes

Measure the [pitch](pitch.md), then find the latch. The small-pitch crowd is where "looks right" fails hardest:

| Family | Pitch | Retention | The tell |
|---|---|---|---|
| **JST SH** | 1.0 mm | friction | smaller than GH; no latch arm — the [Qwiic/STEMMA QT connector](jst-sh-qwiic-stemma.md) |
| **JST GH** | 1.25 mm | **positive latch** | the fold-over latch arm on the housing top, and the click |
| **Molex PicoBlade-style** | 1.25 mm | friction | same pitch as GH, **different family** — no latch, different housing/contact geometry |
| **JST ZH** | 1.5 mm | friction | the next size up; see [JST Is Not One Connector](jst-is-not-one-connector.md) |

The PicoBlade row is the expensive one: **pitch match is not family match.** "JST 1.25" and "PicoBlade" listings are routinely mixed in drone-cable storefronts, the two do not intermate, and a forced mismatch on a flight controller is a bad day with a serial number. Match the family by drawing, not by measuring alone.

![Line diagram comparing SH, GH, and PicoBlade-style housings, with the GH latch arm highlighted and pitch callouts](/img/diagrams/hobby-jst-gh-id.svg)

*The lineup that causes the trouble: SH is smaller, PicoBlade is the same size — the GH's latch arm is the tell.*

## What to buy

- **Pre-crimped GH leads first.** GH contacts are in the same tiny-terminal class as SH — the [pre-crimped-leads rule](crimping.md) applies at full strength, and DS-009-pinout cable sets are a standard drone-shop item.
- Housings (GHR-*xx*V-S), GH contacts, and headers are **separate, GH-specific line items** from authorized distributors — [the mating-parts rules](buying-mating-parts.md) apply, and nothing from the kit drawer substitutes.
- Marketplace "Pixhawk cables" get the standard [listing skepticism](bad-listing-examples.md): verify family *and* pinout, because a correct connector wired in a vendor-specific order is the sneakiest failure in the ecosystem.

## Common traps

- **A fitting cable with the wrong pinout.** The GH standardization makes cables interchangeable *only* where boards actually follow DS-009 — check the manual's pinout table, every time.[^pixhawk]
- **Power through a signal family.** 1 A at AWG #26 is the datasheet ceiling[^jst-gh] — motor power, servo rails, and high-current video gear belong on power connectors ([XT-class](xt-connectors.md) and friends), with GH carrying the data.
- **Confusing it with SH or PicoBlade** — the table above; the latch arm is the tell.
- **Wire fatigue at the housing.** The latch holds, so #30–26 wire takes the vibration instead — strain-relieve harness runs on anything that flies, and tug-test crimped leads before they're zip-tied in.

## When to move to the engineering track

GH is genuinely good — latched, specified, standardized — which makes it the hobby track's best demonstration of *why* those properties matter. When the environment adds sealing, field service, or crash-level abuse, the same logic scales up: [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md), then the engineering track's [internal PCB harnessing path](../decision-paths/internal-pcb-harnessing.md) for the latched-family menu one weight class up.

## Source status

Pitch, circuit span, latch, and the 1 A / 50 V / AWG #30–26 figures are sourced to the official JST GH datasheet;[^jst-gh] the Pixhawk standardization on GH, the DS-009 port framework, and the DF13-predecessor history to the Pixhawk standards document and the Dronecode connector-workgroup documentation.[^pixhawk] Genuine-part figures only — "GH-style" and "Pixhawk cable" marketplace parts inherit nothing. PicoBlade-distinction guidance is identification-level. Tracked in [Hobby Source Notes](hobby-source-notes.md).

## Sources

[^jst-gh]: JST GH series datasheet, official JST PDF — 1.25 mm pitch, wire-to-board with a positive outer latch; 2–15 circuits; 1.0 A AC/DC (AWG #26), 50 V, wire range AWG #30–26. <https://www.jst-mfg.com/product/pdf/eng/eGH.pdf>

[^pixhawk]: Pixhawk Standards, *DS-009 Pixhawk Connector Standard* — the Pixhawk ecosystem's connector standard, specifying the JST GH series and standard port definitions. <https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf>; Dronecode connector-workgroup documentation — GH's latch-lock-at-small-size rationale, the earlier DF13-based boards it replaced, and the caveat that GH-equipped boards do not all follow the standard's pinouts. <https://wiki.dronecode.org/workgroup/connectors/start>
