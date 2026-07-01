---
id: what-people-forget
title: What People Forget
slug: /what-people-forget
sidebar_label: What People Forget
sidebar_position: 12
---

# What People Forget

A connector is never just the connector. The same items get left off BOMs, drawings, and orders over and over — and each one turns a good selection into a build that stalls, leaks, or fails in the field. Scan this list before you call an interface "done."

Everything here is covered in more depth elsewhere in the guide; this page just puts the usual suspects in one place.

## Parts that fall off the BOM

- **Mating connector** — order both halves. A receptacle without its plug is half an interface, and procurement will buy exactly what the BOM says. (See [Red Flags](11-red-flags.md).)
- **Contacts** — some part numbers ship without contacts ("less-contact" versions). Verify whether contacts are included or ordered separately, and match the correct crimp contacts. (See [MIL-DTL-38999 §7.1](07-mil-dtl-38999.md).)
- **Backshell** — strain relief, shield termination, sealing, and cable exit angle live here. It is not optional. (See [Connector Anatomy](05-connector-anatomy.md).)
- **Cap / dust cover** — an unmated connector needs protection from dirt, water, and pin damage. Put the cap P/N on the BOM. (See [Connector Anatomy](05-connector-anatomy.md).)
- **Sealing plugs** — every unused cavity in a sealed connector is an open hole. Plug it. (See [Wire seals §5.5](05-connector-anatomy.md).)

## Tooling and process

- **Crimp tooling** — the right calibrated crimp tool and positioner/die for the exact contact. A crimp that passes visual with the wrong tool still fails in vibration. (See [Selection Workflow §4](04-connector-selection-workflow.md).)
- **Insertion / extraction tools** — removable contacts need the matching insert/extract tool for build and repair. (See [Practical Checklist](10-selection-checklist.md).)
- **Torque procedure** — coupling and jam-nut torque affect sealing and anti-vibration performance. Finger-tight is not a sealed, engaged mate. (See [M12 §8.3](08-m12.md).)

## Specs that decide whether it fits

- **Cable OD / gland range** — the cable jacket OD must fall inside the backshell gland/clamp range or the seal and strain relief do not work. (See [Selection Workflow §4](04-connector-selection-workflow.md).)
- **Wire seal range** — each contact cavity's wire seal is sized for a wire-OD range. Undersized wire leaks at that cavity even if everything else is perfect. (See [Wire seals §5.5](05-connector-anatomy.md).)
- **Keying / polarization** — assign a unique key position across similar connectors so cables can't be swapped or mis-mated. (See [MIL-DTL-38999 §7.7](07-mil-dtl-38999.md).)

## Documentation and supply

- **Cable drawing** — wire schedule, colors, gauges, shields, pairs, labels, and test requirements, formatted like a real drawing. (See [Tools & Templates](tools/cable-drawing-template.md).)
- **ICD entry** — the interface control definition procurement and manufacturing build from. (See [Tools & Templates](tools/connector-icd-template.md).)
- **Source-controlled pinout** — a released, rev-controlled pinout, not tribal knowledge in someone's notebook. (See [Red Flags](11-red-flags.md).)
- **Lead time / second source** — a perfect connector with a 40-week lead time and no second source is a schedule failure. Check availability and QPL/second-source options early. (See [Selection Workflow §4](04-connector-selection-workflow.md).)

:::note

If you want a structured pass instead of a scan, the [Connector Selection Checklist](tools/connector-selection-checklist.md) and [Design Review Checklist](tools/design-review-checklist.md) fold every item above into a checkable sequence.

:::
