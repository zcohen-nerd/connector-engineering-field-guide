---
id: image-opportunities
title: Image Opportunities
description: "Original-photo and original-diagram opportunities that would materially improve the Connector Field Guides without using uncertain third-party imagery."
slug: /image-opportunities
sidebar_label: Image Opportunities
---

# Image Opportunities

These are deliberate gaps, not a request to fill every page. Each item would be more accurate and useful as original photography or original line art than as a visually similar borrowed image.

## Technical review of diagrams

Treat SVG labels, alt text, and captions as technical claims. When a related paragraph changes, review all three against the same source and configuration. Mark schematics as not to scale; responsive images cannot promise physical “actual size.” Check revised labels for clipping at the normal display width.

## Added diagrams (2026-10-05)

- **Pinout viewing orientation:** fictional numbered contacts viewed from opposite ends, embedded in the [ICD template](../tools/connector-icd-template.md#pinout) and [cable-drawing template](../tools/cable-drawing-template.md#cable-endpoints).
- **Three sealing boundaries:** separate mating, rear-entry, and panel seals, with an unmated/capped check, embedded in [Connector Anatomy](../engineering/guide/05-connector-anatomy.md#check-each-sealing-boundary) and the [sealed-enclosure decision path](../decision-paths/sealed-enclosure-feedthrough.md#specs-to-check).
- **Barrel-plug mismatch cutaways:** the central socket/pin interface in a matched pair and both mismatch directions, embedded in [Barrel Jacks](../hobby/barrel-jacks.md#1-the-size-system-two-diameters-both-mandatory).
- **Shield termination comparison:** a circumferential bond versus a pigtail, embedded in [Connector Anatomy](../engineering/guide/05-connector-anatomy.md#57-emi-shielding-and-bonding).
- **DEUTSCH contact removal:** face-actuated release followed by rearward withdrawal, embedded in the [DEUTSCH service procedure](../engineering/families/deutsch.md#dtdtmdtp-contact-removal).
- **Return/reference/shield roles:** separate functional sketches, embedded in the [ICD template](../tools/connector-icd-template.md#electrical-limits) and [selection packet](../examples/connector-selection-packet.md#5-pinout).

- **Shielding noise paths:** capacitive, inductive and shared-return mechanisms, embedded in the [shielding guide](../engineering/topics/shielding-and-grounding.md#2-what-shielding-helps-and-what-it-does-not-fix).
- **Shield endpoint bonds:** one direct, both direct and direct-plus-capacitive alternatives, embedded in the [shielding guide](../engineering/topics/shielding-and-grounding.md#4-one-end-both-ends-or-a-hybrid-bond).

The original-photo opportunities below remain open; these schematics do not replace hardware identification or workmanship photographs.

## Added photographs (2026-10-05)

- **PH-style board header:** licensed right-angle header photo on [JST-PH](../hobby/jst-ph.md#how-to-identify-it). The battery-pigtail/board-port pair remains open.
- **Housings, contacts, and tooling:** licensed Molex disk-drive power flat-lay on [Buying Mating Parts](../hobby/buying-mating-parts.md#real-housings-contacts-and-tooling). A board header and contacts on carrier strip remain open.
- **Braid and foil layers:** licensed cut-cable photo in the [shielding guide](../engineering/topics/shielding-and-grounding.md#6-foil-braid-drain-wire-and-shield-coverage). It does not replace the real 360°/pigtail comparison below.
- **Thermal damage:** licensed ferrule macro on [Red Flags](../engineering/guide/11-red-flags.md#what-thermal-damage-looks-like). Bent-pin, thread-damage, corrosion, and open-barrel inspection sets remain open.
- **Micro-D scale comparison:** existing licensed Micro-D/DE-9 photo reused on [Standards and Families](../engineering/guide/03-connector-standards-and-families.md#31-at-a-glance-family-comparison).

Provenance, license, use, and modifications are recorded in [Image Attributions](../shared/image-attributions.md).

## MIL-DTL-26482 bayonet pair

**Page / section:** [MIL-DTL-26482](../engineering/families/mil-dtl-26482.md), §1 and §5  
**Suggested photo:** A mated and partially demated Series 2 plug/receptacle pair, with the three bayonet studs and coupling-ring ramp visible. Include the wire end and a rear-release contact/tool in a second, clearly separate frame.  
**Why it helps:** The guide explains the crucial distinction between a bayonet and a threaded coupling, then warns that Series 1 and Series 2 tools and contacts differ. One controlled photo sequence can make both points without guessing from an unrelated circular connector.  
**Framing / annotation:** Shoot square-on at the mating interface; annotate only the three studs, ramp, and series/termination identification after the exact hardware is confirmed.

## Sealed-cavity hardware

**Page / section:** [Connector Anatomy](../engineering/guide/05-connector-anatomy.md), §5.5; [DEUTSCH Deep Dive](../engineering/families/deutsch.md), §5  
**Suggested photo:** Macro view of a confirmed sealed connector with one correctly sized wire seal, one cavity plug, and one intentionally empty but plugged cavity; include the rear grommet.  
**Why it helps:** The leak path and unused-cavity rule are hard to appreciate in a shell-only image.  
**Framing / annotation:** Use an unambiguous cutaway or rear view, with arrows only to the seal, plug, and cable jacket—not to infer an IP rating.

## Open-barrel crimp inspection set

**Page / section:** [Crimping Without Losing Your Mind](../hobby/crimping.md), “The rules”  
**Suggested photo:** A consistent macro set showing one accepted crimp and three distinct defects: insulation in conductor wings, a stray strand, and excessive strip length.  
**Why it helps:** The existing original diagram explains geometry; real surface texture and deformation are the missing inspection skill.  
**Framing / annotation:** Photograph the same contact family and wire gauge under diffuse light, with a scale and a verified tooling/contact callout. Do not label a crimp “good” without an applicable acceptance criterion.

## 360-degree shield termination versus pigtail

**Page / section:** [Connector Anatomy](../engineering/guide/05-connector-anatomy.md), §5.7  
**Suggested photo:** Two otherwise comparable backshell terminations: one with a circumferential shield band and one short pigtail.  
**Why it helps:** This is a frequent EMC failure mode whose geometry becomes immediately obvious in a real assembly.  
**Framing / annotation:** Keep the shell, braid exposure, clamp, and shield path in focus; identify the build as an illustrative training assembly, not a qualified design.

## Service damage reference set

**Page / section:** [Red Flags](../engineering/guide/11-red-flags.md)  
**Suggested photo:** Separate, clearly identified macro images of bent pins, thread damage, and corrosion/contamination on known connector hardware.  
**Why it helps:** A small, curated reference set would make inspection and triage more concrete than generic damage imagery.  
**Framing / annotation:** One failure mechanism per image, with a scale; avoid assigning a cause unless it is documented for that specimen.
