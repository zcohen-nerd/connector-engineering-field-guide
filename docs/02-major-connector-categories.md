---
id: 02-major-connector-categories
title: "2. Major Connector Categories"
slug: /02-major-connector-categories
sidebar_label: Major Connector Categories
sidebar_position: 2
---

# 2. Major Connector Categories

Scope your search by category before diving into specific families. Each category optimizes for different axes.

| Category | Typical use | Rugged / professional examples | Less suitable when |
|---|---|---|---|
| Circular | External harnesses, sensors, payloads, field I/O | MIL-DTL-38999, MIL-DTL-26482, M12, M8 | You need dense rectangular modularity or DIN-rail service |
| Rectangular | Industrial machines, panels, removable modules | Industrial rectangular / Han-style, D-sub, Micro-D | You need cylindrical sealing or compact cable routing |
| Board-to-board | PCB stacking, mezzanine, backplanes | Samtec, TE, Molex high-speed mezzanine | Vibration exists without mechanical support |
| Board-to-wire | Internal PCB harnessing | Molex Micro-Fit / Mini-Fit / Nano-Fit, TE, Harwin, JST (various) | External rugged interface unless sealed / latched / potted |
| Wire-to-wire | Internal splices, replaceable assemblies | Molex sealed families, TE/Deutsch, Amphenol AT/ATP | High-service external panel connection unless designed for it |
| RF / coax | Antennas, GPS, radios, radar, video, test | SMA, TNC, N-Type, BNC, SMP/SMPM, MCX | Ordinary discrete wiring / uncontrolled impedance |
| High-current power | Motors, batteries, heaters, PDUs | Anderson SB, Amphenol/TE high-current, 38999 power inserts, Han-style power | Mixed low-level signals without isolation planning |
| Fiber / data | Long-distance data, EMI immunity, bandwidth | LC, ST, expanded-beam rugged fiber, M12 Ethernet | Dirty field environments without cleaning discipline |
| Hybrid | Power + signal + data + coax/fiber/fluid in one | 38999 hybrid inserts, Han-Modular | Simple low-cost harnesses where separate connectors are cleaner |

:::note[Often overlooked]

Board-to-wire connectors like Molex Micro-Fit, Mini-Fit, Mega-Fit, and sealed Squba are not "hobby" parts. Professional versions have positive latches, polarization, secondary locks (TPA — Terminal Position Assurance, a secondary lock that confirms every contact is fully seated before the connector can mate), defined current/voltage ratings, and sealed variants. The dividing line is the specific family and rating, not the brand.

:::

## Fiber connectors — a brief orientation

The category table lists fiber for completeness, but optical connectors are their own discipline, and this guide keeps them at orientation level:

- **Datacom / indoor:** LC and SC dominate structured cabling and equipment — ceramic ferrules, polished endfaces, clean-before-mate discipline.
- **Rugged / military:** *expanded-beam* connectors (including expanded-beam MIL-DTL-38999 variants) tolerate dust and vibration better than physical-contact ferrules; **ARINC 801** termini and **MIL-DTL-38999 fiber slash sheets** place optical contacts into the same rugged circular shells used for copper.
- **What drives selection:** endface cleanliness, alignment/insertion loss, bend radius, and single- vs. multi-mode — not the mechanical envelope.

A full fiber deep-dive is **out of scope for v1** of this guide; treat this as a pointer and work from the connector/fiber manufacturer and the applicable standard.

---