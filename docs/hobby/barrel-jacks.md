---
id: barrel-jacks
title: "Barrel Jacks and Polarity Traps"
description: "The barrel jack deep dive nobody wrote: OD × ID size pairs, the polarity symbol decoded, the switched pin, real ratings vs folklore, and the traps that kill gear."
slug: /hobby/barrel-jacks
sidebar_label: Barrel Jacks
---

# Barrel Jacks and Polarity Traps

The barrel jack is the most-plugged, least-specified connector on your bench. Every wall adapter, router, guitar pedal, LED strip kit, and dev board uses one, and almost none of them tell you the three things that actually define the interface: **two diameters, a polarity, and a rating**. There is no single governing standard for "the barrel jack" — it's a family of coaxial DC power connectors where the numbers are everything.

![A panel-mount barrel jack facing a 5.5 by 2.5 millimeter barrel plug, center pin visible](/img/photos/barrel-jack-pair.jpg)

*A 5.5 × 2.5 mm pair face to face — coaxial plug (outer sleeve + inner socket) meeting the jack's center pin. Every dimension here has a number, and the label rarely tells you any of them. Photo: [Martin Meise](https://commons.wikimedia.org/wiki/File:Hohlstecker_und_Hohlbuchse_5,5x2,5.jpg), CC BY-SA 3.0, via Wikimedia Commons.*

## 1. The size system: two diameters, both mandatory

A barrel size is a **pair**: the plug's outer sleeve diameter (OD) and its inner socket diameter (ID), which must swallow the jack's center pin. "5.5 mm barrel" is half an identification. The pairs you'll actually meet:

| Size (OD × ID) | Where you meet it |
|---|---|
| **5.5 × 2.1 mm** | *The* hobby/router/CCTV default; most 9–12 V wall adapters |
| **5.5 × 2.5 mm** | The same shell with a fatter pin — chargers, higher-current adapters, some SBCs |
| **4.75 × 1.7 mm** / **4.0 × 1.7 mm** | Small electronics, older laptops, some Pi-era supplies |
| **3.5 × 1.35 mm** | Compact devices, USB-to-barrel leads |
| **2.35 × 0.7 mm** class | Tiny portable gear |
| **EIAJ classes** | Japan's EIAJ RC-5320A defines a family of plug sizes tied to voltage classes (the yellow-insulator tips you see on some equipment) — a rare attempt to make size mean something |

Measure **both** numbers — the same discipline as [pitch](pitch.md) — and confirm them against the mating drawings. For the common 5.5 mm-OD variants:

| Plug inner socket (bore) | Jack center-pin size class | Mismatch |
|---|---|---|
| 2.5 mm ID | 2.1 mm class | The larger bore may fit over the smaller pin but make loose or intermittent contact |
| 2.1 mm ID | 2.5 mm class | The smaller bore normally cannot accept the larger pin; do not force it |

These are nominal size classes; actual pin dimensions, spring contacts, and tolerances come from the drawings. "It fits" is not identification.

![Enlarged central contact sections compare a documented matching barrel pair, a larger plug socket on a smaller jack pin, and a smaller socket blocked by a larger pin.](/img/diagrams/hobby-barrel-fit.svg)

*Teal shapes show the plug’s central socket contact; navy shows the jack pin. Only the center-contact interface is shown; outer sleeves and insulation are omitted. These are nominal size classes, not exact pin dimensions or scale drawings. Confirm center-pin geometry, socket contacts, tolerances, and insertion length in the exact mating drawings.*

## 2. The polarity symbol — decode it, then meter it anyway

That little glyph on the wall adapter is the whole polarity contract:

![Line diagram decoding the DC polarity symbol: center dot joined to plus for center-positive, and the reversed center-negative version, with a note to verify with a meter](/img/diagrams/hobby-barrel-polarity.svg)

*The center dot is the pin, the outer arc is the sleeve; whichever one connects to “+” is the live one. Left: center-positive (the common convention). Right: center-negative (the guitar-pedal world). The symbol is the contract — the meter is the proof.*

Center-positive is the common convention — but it is **only a convention**: Same Sky's own selection guide states plainly that reversing the assignment is acceptable practice,[^ssguide] and one large ecosystem (9 V guitar pedals) standardized on center-negative. Two identical-looking 5.5 × 2.1 adapters can be electrical opposites. Before a barrel plug ever touches a device you care about: decode the symbol on both the adapter and the device, then **verify with a meter** — check meter mode, leads, polarity, and probe contact before trusting the reading.

## 3. Anatomy details nobody reads

- **The jack's third leg is a switch.** Most panel/PCB jacks have a **normally-closed switched contact** that opens when a plug is inserted — it exists to disconnect an internal battery when external power arrives. If your device dies on wall power, someone probably ignored pin 3. Check the datasheet's schematic, not just the footprint.[^ssguide]
- **The recessed contact is the safety feature.** One conductor exposed, one recessed — that geometry is why a live barrel plug is hard to short with a keychain.[^ssguide]
- **Pin diameter ≠ plug ID exactly.** The cited PJ-102A "2.1 mm-class" jack uses a 2.0 mm center pin for the matching plug — the class name and the drawing dimension differ, which is why you verify against the datasheet drawing, not the marketing size.[^pj102a]
- **Locking variants exist** (threaded-collar and snap types) — the answer to "the robot unplugged itself," short of graduating families entirely.
- **Length matters too.** Plug barrel lengths vary; a too-short plug on a deeply recessed jack mates on hope.

## 4. Ratings: per part number, never per "size"

There is no such thing as "a 5.5 × 2.1 is good for X amps." Current and voltage are rated **per part**, by the manufacturer, and they're often lower than folklore assumes: Same Sky's PJ-102A — as mainstream as a 5.5 × 2.1-class jack gets — is rated **2.5 A** per its own datasheet.[^pj102a] Marketplace listings routinely wave "5 A" at the same geometry with nothing behind it. The same skepticism the [kit decoder](connector-kits.md) teaches applies: the rating lives on the datasheet of the exact jack and plug you bought, and both halves plus the **wire** must carry the load. For real current, stop stretching barrels — see [power vs signal](power-vs-signal.md) and the [RC battery landscape](rc-battery-connectors.md).

## 5. Traps

- **Reversed polarity kills quietly.** Protection diodes are not guaranteed in hobby gear. Symbol → meter → then plug.
- **The 2.5 mm-bore plug on a 2.1 mm-class jack** — intermittent power that "works when you wiggle it," heating at the pin under load.
- **Same plug, different voltage.** The connector does not encode voltage (EIAJ's size-per-voltage-class scheme being the exception that proves it[^ssguide]). A 19 V laptop brick fits the same jack as your 5 V device.
- **Adapter current ≠ connector rating.** A 10 A-rated supply can serve a 1 A load without forcing 10 A through the jack. A 4 A load through a 2.5 A-rated jack exceeds its rating. Size the whole path for worst-case load and coordinate fault protection with the connector and wiring.
- **Worn tips.** Barrel jacks are friction contacts with finite cycles (rated per datasheet); an old, loose mate is high resistance right where the power comes in.
- **No strain relief.** The solder joints on a PCB jack are not a cable anchor — anchor the cord, or use a panel jack.

## 6. When a barrel jack is enough — and when it isn't

Enough: bench gear, wall-powered projects that live indoors, anything where a pulled plug is an inconvenience. Not enough: vibration, outdoor exposure, real current, or a plug-cycle-heavy service point — graduate to a locking/keyed power family ([XT-class](xt-connectors.md), [Powerpole](anderson-powerpole.md)) or, leaving the bench entirely, [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md) and the [budget path](../decision-paths/rugged-on-a-budget.md).

## Source status

Structure, polarity-convention, and switched/recessed-contact claims are cited to Same Sky's (formerly CUI Devices) own selection guide;[^ssguide] the representative rating to the Same Sky PJ-102A datasheet.[^pj102a] Size-pair identification is measurement-level; EIAJ RC-5320A is named as the standard defining size-per-voltage classes without reproducing its tables. Per-class EIAJ figures and any additional per-part ratings remain verify-per-datasheet; tracked in [Hobby Source Notes](hobby-source-notes.md).

## Sources

[^ssguide]: Same Sky (formerly CUI Devices), *How to Select a DC Power Connector* — barrel plug/jack structure (one exposed, one recessed conductor and why), the center-pin-power convention **and** the explicit acceptability of reversing it, switched-contact jack configurations, and manufacturer-specified current/voltage ratings. <https://www.sameskydevices.com/blog/how-to-select-a-dc-power-connector>

[^pj102a]: Same Sky, *PJ-102A* DC power jack datasheet — a representative 5.5 × 2.1 mm-class panel/PCB jack: 2.0 mm center pin, rated 2.5 A. <https://www.sameskydevices.com/product/resource/pj-102a.pdf>
