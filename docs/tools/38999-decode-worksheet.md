---
id: decode-38999-worksheet
title: 38999 Part-Number Decode Worksheet
description: "A fill-in worksheet for decoding a D38999 part number field by field against the specific manufacturer's catalog — with the worked example from §7.8."
slug: /tools/38999-decode-worksheet
sidebar_label: 38999 Decode Worksheet
---

# 38999 Part-Number Decode Worksheet

The [MIL-DTL-38999 deep dive](../07-mil-dtl-38999.md) explains the reasoning and works through an example. This page strips that down to a worksheet for *your* part number and *your* manufacturer's catalog.

:::warning[Read this before decoding]

A **military D38999 PIN has standardized fields** defined by the applicable specification and slash sheet; those fields do not change meaning with the supplier. Manufacturers also sell proprietary series, options, and accessory numbers with their own schemas. Identify which system you are decoding, then cross-check the military PIN against the controlling documents and the manufacturer's catalog. Physical mating, specification conformance, and qualification/source approval are separate checks. When qualification matters, verify the exact manufacturer, item, and status in the applicable QPD/QPL or program-approved source.

:::

## The worksheet

Example column decoded per the manufacturer catalog cited in [§7.8](../07-mil-dtl-38999.md)[^amphenolcat] — these military fields have standardized meanings; proprietary vendor part numbers require their own decoder. Fill in the last two columns from the catalog you are actually buying against, and record the catalog document + revision at the bottom.

| Field | Example: `D38999/26WE26PN` | Meaning in the example's decoder | **Your part number** | **Meaning per your catalog** |
|---|---|---|---|---|
| Base spec + shell style | `D38999/26` | Series III; `/26` = straight plug per the military slash sheet | | |
| Finish / material class | `W` | Corrosion-resistant olive-drab cadmium-plated aluminum (military class W) | | |
| Shell-size letter | `E` | Maps through the catalog to shell size 17 | | |
| Insert arrangement | `26` | Read **with** the shell size: full designation **17-26** | | |
| Contact type | `P` | P = pin, S = socket | | |
| Polarization / keying | `N` | N = normal (positions N, A, B, C, D, E) | | |

**Read it as linked fields:** the shell-size letter gives the shell size, and the trailing number is the insert arrangement *within* that shell size. The arrangement number alone is not the full insert arrangement — the same number means different things in different shell sizes, so always pair them.

![Six connector faces with the master keyway fixed at top and the minor keyways rotated to positions N, A, B, C, D, and E](/img/diagrams/d38999-keying-positions.svg)

*Keying positions: the master keyway stays fixed; the minor keyways rotate per position. Angles differ by shell size — decode from the catalog.*

## Record with the decode

- [ ] Manufacturer and catalog/decoder document, **with revision/date**
- [ ] Full insert-arrangement designation (shell size **+** arrangement), from the arrangement drawing
- [ ] Contacts included or ordered separately ("less-contact" part numbers exist — [§7.9](../07-mil-dtl-38999.md))
- [ ] Keying position documented in the [ICD](connector-icd-template.md) — don't rely on technician memory
- [ ] QPL/QPD status of the exact part number, where qualification matters

:::note

This is a working tool, not a standard. The manufacturer's catalog, the applicable specification, and program requirements always win.

:::

## Sources

[^amphenolcat]: Amphenol (Interconnect India), *MIL-DTL-38999 Series III* catalog (AC38907, Rev 03/17). "How to order" (p. 31): `D38999/` = Series III; shell style `26` = straight plug (`20` = wall-mount receptacle, `24` = jam-nut receptacle); service class `W` = corrosion-resistant olive-drab cadmium-plated aluminum; shell-size letters `A`=9 … `E`=17 … `J`=25; contact type `P` = pin, `S` = socket. Master key/keyway positions **N** (normal), A, B, C, D, E (p. 7). <https://amphenol-in.com/wp-content/uploads/2024/12/MIL-38999-Sr-III-AC38907-0317.pdf>
