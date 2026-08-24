---
id: deutsch-decode-worksheet
title: DEUTSCH Decode & Tooling Worksheet
description: "A fill-in worksheet for decoding a DEUTSCH DT-family part number and picking the matching contact line and crimp tooling — with the worked example from the deep dive."
slug: /tools/deutsch-decode-worksheet
sidebar_label: DEUTSCH Decode Worksheet
---

# DEUTSCH Decode & Tooling Worksheet

Based on [§7 (part-number decode)](../deutsch.md#7-decoding-a-part-number-worked-example) and [§4 (the contact-system trap)](../deutsch.md#4-the-contact-system-trap-solid-vs-stamped-and-formed) of the DEUTSCH deep dive — the reasoning and caveats live there; this page turns them into a form you fill in against *your* part number and TE's current literature.

:::warning[Read this before decoding]

Plug/receptacle does **not** tell you pin/socket — a DT06 *plug* carries *sockets*. Trailing suffix codes are **housing modifications** (color, enhanced seal retention, shrouds and boot adapters, molded-in resistors, keying) that change the part meaningfully — decode them against TE literature, never by pattern-matching a lookalike listing. Amphenol Sine's AT/ATM/ATP lines are marketed as intermateable equivalents, and anonymous marketplace "Deutsch-style" kits exist — treat every cross-vendor or unbranded part as a compatibility claim to verify.[^dtds][^atseries]

:::

## The worksheet — DT family

Example column decoded per the TE literature cited on the [deep dive](../deutsch.md)[^dtds] — verify each field against the catalog you are actually buying from, and record the document + revision at the bottom.

| Field | Example: `DT06-3S` + `W3S` | Meaning in the example | **Your part number** | **Meaning per your catalog** |
|---|---|---|---|---|
| Series | `DT` | DT family (DTM, DTP, DTHD, DRC follow the same logic) | | |
| Shell half | `06` | **DT06 = plug** (takes **socket** contacts); **DT04 = receptacle** (takes **pin** contacts) | | |
| Cavity count | `3` | Three cavities | | |
| Contact gender accepted | `S` | S = sockets, P = pins | | |
| Modification suffix | *(none)* | Housing variant codes (e.g. `-E008`, `-P006`, `-CE05`-style) — color, seal, shroud, resistor, keying; decode per TE literature | | |
| Wedgelock | `W3S` | W + cavity count + half (S = plug side, P = receptacle side) — a separate line item | | |

**The heavy circulars follow their own prefix logic:** **HD34** = HD30-series receptacle, **HD36** = HD30-series plug; **HDP24 / HDP26** = the HDP20-series equivalents; then shell size and insert arrangement (an 18-shell 14-cavity arrangement reads `18-14`).[^hd30]

## The tooling selector — which contact line do you hold?

The same housings accept two contact lines that **do not share crimp tooling**. Identify the line before you order the tool.[^dtool]

| You have… | Part-number series | Correct tooling class |
|---|---|---|
| Solid (machined-barrel) contacts | 0460 (pins) / 0462 (sockets) | Solid-barrel indent tool — e.g. the HDT-48-00 hand tool, sizes 20/16/12 **only** |
| Stamped-and-formed contacts (often on carrier strip) | 1060 (pins) / 1062 (sockets) | Stamped-contact tooling — the solid-barrel tool does **not** produce a valid crimp |

## Record with the decode

- [ ] TE catalog/datasheet document used, **with revision/date**
- [ ] Contacts for **both halves** (pins *and* sockets), from **one** contact line, with plating matched across the interface
- [ ] The correct **crimp tool for that contact line**, with the manufacturer's crimp inspection criterion
- [ ] **Wedgelock per half** (W-series part numbers) — on the BOM, not assumed in the bag
- [ ] **Sealing plugs** counted for every unused cavity
- [ ] **Seal range vs. wire insulation OD** checked per cavity (thin-insulation wire defeats the seal)
- [ ] **Keying** on same-size neighbors, documented in the [ICD](connector-icd-template.md)
- [ ] For second-source (AT-series) or mixed-vendor interfaces: compatibility verified against **both** manufacturers' documentation

:::note

This is a working tool, not a standard. TE's current literature, the exact datasheet, and program requirements always win.

:::

## Sources

[^dtds]: TE Connectivity, *DEUTSCH DT* datasheet (ICT series literature) — DT04/DT06 receptacle/plug and W-series wedgelock part-number structure, with suffix codes for housing modifications. <https://www.te.com/content/dam/te-com/documents/industrial-and-commercial-transportation/global/ict-deutsch-DT-ds-a4-en-0224.pdf>

[^hd30]: TE Connectivity, *DEUTSCH HD30 & HDP20 Connectors* catalog — HD34/HD36 and HDP24/HDP26 receptacle/plug part-number prefixes; shell sizes 18 and 24 with insert arrangements from 2 to 47 cavities. <https://www.te.com/content/dam/te-com/documents/industrial-and-commercial-transportation/global/ict-hd30-hdp20-cat-a4-en.pdf>

[^dtool]: DEUTSCH contact lines and tooling — solid (machined) contacts in the 0460 (pin) / 0462 (socket) part-number series vs. stamped-and-formed in 1060 / 1062; the HDT-48-00 hand crimp tool serves **solid** contacts in sizes 20/16/12 only. DeutschConnector.com crimp tool selection guide; RS Components HDT-48-00 listing. <https://www.deutschconnector.com/technical/deutsch_connector_crimp_guide/>, <https://int.rsdelivers.com/product/deutsch/hdt-48-00/deutsch-hand-crimp-tool-for-dt-solid-contacts/0425973>

[^atseries]: Amphenol Sine Systems AT / ATM / ATP series — marketed as intermateable, interchangeable equivalents of DEUTSCH DT / DTM / DTP; verify compatibility for any mixed-vendor interface against both manufacturers' documentation. <https://www.amphenol-sine.com/atm-series>
