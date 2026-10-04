---
id: connector-selection-packet
title: "Worked Example: Connector Selection Packet"
description: "An illustrative connector selection packet for a rugged field-robot module — requirements, decision matrix, architecture, pinout, BOM, cable notes, ICD, and review."
slug: /examples/connector-selection-packet
sidebar_label: Selection Packet
---

# Worked Example: Connector Selection Packet

This is a packet structure for an interface design review. It demonstrates the reasoning and required artifacts, but its placeholder parts, electrical limits, and qualification evidence remain open. It is not a buildable or released design. It ties together the [selection workflow](../engineering/guide/04-connector-selection-workflow.md), the [rugged-on-a-budget](../decision-paths/rugged-on-a-budget.md) and [removable machine module](../decision-paths/removable-machine-module.md) decision paths, and every template under [Tools & Templates](../tools/index.md).

:::warning[Read this as reasoning, not a shopping list]

This example teaches *how to decide and document*, not what to buy. Part numbers like `J1`, `P1`, and `CONTACT-SIZE16-SKT-EXAMPLE` are placeholders. In a real project, replace every one with an exact, datasheet-verified P/N and size every current against the manufacturer's derating curve. None of the example ratings below is yours to reuse.

:::

## Scenario

A small outdoor field robot has a **removable sensor/control module**. When the module is pulled for service, its harness must disconnect cleanly at the module boundary. The interface must handle:

- **24 VDC power input** to the module
- Several **low-current discrete I/O** lines
- One **CAN** differential pair
- A **chassis / shield** strategy
- **Sealed** external connection, **outdoor splash/dust** exposure, **moderate vibration**
- A **technician-serviceable** harness
- **No** formal MIL-DTL / QPL requirement
- A **budget-sensitive** prototype-to-small-production path

## 1. Requirements summary

| Item | Value / decision | Notes |
| --- | --- | --- |
| Subsystem boundary | Robot chassis harness ↔ removable module | One clean disconnect at the module face |
| Environment | Outdoor, dust + splash, moderate vibration | Target sealed when mated; capped when unmated |
| Power | 24 VDC nominal input | Size current against the contact derating curve — *not assumed here* |
| Discrete I/O | Two 24 V-class discrete inputs and one sinking discrete output; thresholds/current limits TBD | Direction defined relative to the module; interface circuits require verification |
| Data | One CAN pair | Twisted pair; bus termination is a system property, not a connector feature |
| Shield / chassis | Cable shield + chassis-ground strategy | Defined in the pinout and cable notes |
| Service model | Technician-serviceable, field | DT/DTM/DTP: mating-face release after wedge removal, rear withdrawal; approved hand tooling |
| Production posture | Prototype → small production | Low tooling cost, easy sourcing, second source available |
| Constraints | No MIL/QPL requirement; budget-sensitive | Drives toward sealed automotive, away from mil circulars |

## 2. Connector family candidates

At least three families are worth a look before committing:

- **Sealed automotive (Deutsch DT / DTM / DTP)** — sealed, hand-crimpable, cheap, ubiquitous. See [rugged-on-a-budget](../decision-paths/rugged-on-a-budget.md) and the [DEUTSCH Deep Dive](../engineering/families/deutsch.md).
- **M12 (A-coded + a separate coded connector for CAN)** — clean COTS ecosystem, molded cordsets. See [industrial sensor](../decision-paths/industrial-sensor.md).
- **MIL-DTL-38999** — rugged and configuration-controlled, but overkill here. See the [38999 deep dive](../engineering/families/07-mil-dtl-38999.md).
- **Industrial rectangular / Han-style** — great for serviceable modules, but large for a small robot. See [removable machine module](../decision-paths/removable-machine-module.md).

## 3. Decision matrix

Qualitative scoring — no fake precision. `+` favorable, `~` acceptable/depends, `−` unfavorable for *this* job.

| Candidate | Why it fits | Why it may not fit | Tooling / assembly | Sealing / serviceability | Cost / availability | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| **Deutsch DT/DTM/DTP** | Sealed, hand-crimpable, service access at both ends; power + signal covered by one family | Not a mil ecosystem; no EMI backshell ecosystem | `+` low-cost hand tools | `+` sealing per exact assembly; front-actuated release, rear withdrawal | `+` cheap, widely stocked, second-sourced | **Selected** |
| **M12 (A-coded + CAN-coded)** | Clean COTS, molded cordsets, sealed | Two+ connectors for this mix; per-connector pin/current limits; more connectors on the panel | `~` cordsets easy; field-wireable fiddly | `+` IP67 sealed when mated | `~` low-cost but more connectors | Backup |
| **MIL-DTL-38999** | Rugged, keyed, config-controlled | Cost, tooling, lead time all unjustified with no requirement driving them | `−` positioner/insert tooling | `+` sealed, but far beyond need | `−` expensive, long lead | Rejected |
| **Industrial rectangular / Han** | Serviceable, mixed media in one housing | Too large/heavy for a small robot module | `~` insert tooling | `+` serviceable | `~` mid cost, bulky | Rejected |

## 4. Selected architecture

**Split into two sealed connectors from the same family: one power, one signal + data.** Both DEUTSCH-class; confirm the tool, contact line, and positioner for each exact contact rather than assuming common tooling.

- **J1 / P1 — Power** (small pin count, larger contacts sized for the 24 VDC feed and its return).
- **J2 / P2 — Signal + CAN** (discrete I/O plus the CAN pair on a smaller-contact housing).

**Why split rather than one mixed connector?**

- **Segregation** — keeps the 24 VDC power path away from low-level discrete and the CAN pair, reducing coupling and simplifying the shield story.
- **Serviceability** — power and signal harnesses can be built, tested, and replaced independently.
- **Smaller, cheaper housings** — two small sealed connectors are easier to route, seal, and hand-crimp than one dense mixed one.
- **Failure isolation** — separate harnesses can simplify fault isolation and routing, but add interfaces and service actions. Compare those failure opportunities with the single-connector option.

The cost is **two disconnects instead of one** and **two caps** — acceptable here. If panel space were extremely tight, a single mixed connector with documented power/signal segregation would be the trade the other way.

## 5. Pinout

Generic signal names; contact sizes are *illustrative* and must be sized against the datasheet and derating curve.

**J1 / P1 — Power**

| Pin | Signal | Direction | Wire (class) | Shield / twist | Service notes |
| --- | --- | --- | --- | --- | --- |
| 1 | +24 VDC | Into module | Power gauge, sized to load + derating | — | Larger contact size |
| 2 | 24 V RTN (0 V) | From module | Power gauge, sized to load + derating | — | Larger contact size |

**J2 / P2 — Signal + CAN**

| Pin | Signal | Direction | Wire (class) | Shield / twist | Service notes |
| --- | --- | --- | --- | --- | --- |
| 1 | DISCRETE_IN_1 | Into module | Signal gauge | — | |
| 2 | DISCRETE_IN_2 | Into module | Signal gauge | — | |
| 3 | DISCRETE_OUT_1 | From module | Signal gauge | — | |
| 4 | CAN_H | Bidirectional | Twisted pair w/ pin 5 | Twisted pair; shielded | Keep pair together end-to-end |
| 5 | CAN_L | Bidirectional | Twisted pair w/ pin 4 | Twisted pair; shielded | |
| 6 | SIGNAL_RTN | Signal reference | Insulated signal conductor | Not the shield drain | Dedicated reference for the field-side CAN and discrete circuits |

### Return and shield architecture

For this illustration, choose **CAN**, with a module-side isolated field-I/O domain. CAN and the discrete interface circuits share SIGNAL_RTN in that domain; isolation separates it from the module's 24 V RTN and chassis. This is an architectural requirement, not a claim that a transceiver or isolator has already been selected.

| Path | Chassis-harness end | Module end | Design intent |
|---|---|---|---|
| J1 pin 2: 24 V RTN | Power-source return | Module power return | Normal module power current stays in J1 |
| J2 pin 6: SIGNAL_RTN | Defined field-bus/discrete common | Isolated field-I/O common | Insulated reference conductor; no module-side tie to J1 return or chassis |
| CAN_H / CAN_L | CAN bus pair | Isolated CAN transceiver field side | Preserve pair; define termination and common-mode limits |
| Discrete pins 1–3 | Field I/O referenced to SIGNAL_RTN | Isolated input/output circuits | Two inputs and a sinking output; define thresholds, source/load currents, and off-state behavior |
| Cable shield | Chassis-entry shield clamp | Module-entry shield clamp | Proposed chassis bonds at both ends; no shield-drain contact in J2 |
| Enclosure bond | Machine/chassis bond network | Dedicated enclosure bond | Do not use SIGNAL_RTN or the shield as a protective bonding conductor |

The plastic signal connector does not provide a metal backshell shielding path. The proposed external shield clamps and enclosure bonds need their own drawing and service procedure. Verify equipotential bonding, possible shield currents, and EMC performance; a CAN bit rate alone is not a shielding rationale. Define isolation working voltage, transient/fault withstand, and the field-side power arrangement before selecting components.

**Release remains blocked** until the schematic identifies every intentional common-to-chassis connection and demonstrates normal and fault return paths, including external-I/O backfeed. Pin 6 must not become a second module power return when J1 is disconnected.

## 6. BOM checklist

Every required line must become a real orderable item. The placeholders below are not part numbers.

| Item | J1/P1 (power) | J2/P2 (signal + CAN) |
| --- | --- | --- |
| Connector body (receptacle) | `J1-RCPT-EXAMPLE` | `J2-RCPT-EXAMPLE` |
| Mating connector (plug) | `P1-PLUG-EXAMPLE` | `P2-PLUG-EXAMPLE` |
| Contacts (pins/sockets) | `CONTACT-SIZE16-*-EXAMPLE` | `CONTACT-SIZE20-*-EXAMPLE` |
| Wedgelock / secondary lock (TPA) | as applicable | as applicable |
| Cavity / sealing plugs | for every unused cavity | for every unused cavity |
| Rear seal / grommet / strain relief | per family | per family |
| Dust cap (unmated protection) | `CAP-J1-EXAMPLE` | `CAP-J2-EXAMPLE` |
| Crimp tool + die/positioner | for contact size | for contact size |
| Extraction tool | for the retention system | for the retention system |
| Cable | power cable | shielded cable w/ a twisted pair |
| Labels / heat-shrink markers | both ends | both ends |
| Boot / heat-shrink (if used) | as needed | as needed |

## 7. Cable drawing notes

- **Wire gauge** — power conductors sized to the load *and* the contact derating curve; signal conductors per the contact and signal.
- **Pair twisting** — CAN_H/CAN_L a maintained twisted pair end-to-end; do not split the pair through the connector transition.
- **Shield termination** — external chassis-entry clamps at both ends are the proposed topology in §5; no drain wire shares J2 pin 6. Detail clamp hardware, bonds, insulation, and service disconnection. Verify the choice against the system's interference spectrum and bonding network; see [§5.7](../engineering/guide/05-connector-anatomy.md#57-emi-shielding-and-bonding).
- **Seal dimensions** — DT/DTM/DTP rear grommets seal each wire's insulation OD. Verify every populated cavity and sealing plug. Separately check overall cable OD against any boot, gland, clamp, or strain-relief accessory.
- **Bend radius** — respect the cable's minimum bend radius at the connector exit; pick a straight vs. right-angle backshell/boot accordingly.
- **Label scheme** — both ends of every wire and both connector shells (`J1`/`P1`, `J2`/`P2`).
- **Electrical test** — verify point-to-point continuity and absence of unintended shorts between all isolated nets and between nets, shield, and shell/chassis; use defined limits and protect connected electronics.
- **Retention and workmanship** — inspect crimps, contact seating, and installed wedgelocks. Distinguish the manufacturer's gentle seating check from controlled retention tests and destructive crimp pull tests on specified samples.

The template for this is the [cable drawing template](../tools/cable-drawing-template.md).

## 8. ICD entry

- **Interface name:** Module boundary — Power (J1/P1) and Signal+CAN (J2/P2)
- **Connector role:** Receptacles `J1`/`J2` on the module; plugs `P1`/`P2` on the chassis harness
- **Mating pair:** `J1`↔`P1`, `J2`↔`P2` — *physical non-intermateability to be established with exact housing/key/contact selections*
- **Pinout:** per §5 above (source-controlled)
- **Voltage / current class:** 24 VDC nominal; per-contact current sized against the derating curve *(verify)*
- **Signal definitions:** isolated 24 V-class discrete I/O and CAN per §5; thresholds, common-mode limits, termination, and isolation specifications remain open
- **Shield / chassis treatment:** external shield clamps to chassis at both ends; separate insulated SIGNAL_RTN in the isolated field-I/O domain. Bond hardware, EMC evidence, and fault analysis remain open (§5)
- **Environmental assumptions:** sealed (target IP67-class) when mated and locked; unmated only when capped *(verify the exact family/assembly rating)*
- **Service / cap note:** environment-rated caps as required on unmated ports; DT/DTM/DTP repair needs mating-face wedgelock/release access and rear contact withdrawal ([procedure](../engineering/families/deutsch.md#dtdtmdtp-contact-removal))
- **Revision control:** this ICD and the pinout are rev-controlled; changes go through the interface owner
- **Source / evidence tracking:** every rating in the released version cites its datasheet + revision, the derating basis, and — because this packet is a teaching example — every placeholder is marked **example-only** (verification status: example). Family-level figures trace to the sourced [§3.2 table](../engineering/guide/03-connector-standards-and-families.md#32-sealed-automotive-connector-families); nothing here is a verified part rating

Use the [ICD template](../tools/connector-icd-template.md) for the full form.

## 9. Design review checklist

- [ ] **Current derating** checked against the contact's derating curve at temperature (not the headline number)
- [ ] **Wire seal range** matches every wire OD; **cable OD** inside the gland/seal range
- [ ] **Unused cavities plugged** on both connectors
- [ ] **Torque / assembly procedure** defined (coupling, backshell, and crimp)
- [ ] **Correct crimp tooling** and extraction tool identified for each contact size
- [ ] **Cable exit / bend radius** checked; straight vs. right-angle boot chosen
- [ ] **Keying / polarization** prevents cross-mating P1↔J2
- [ ] **Mating connectors and dust caps** on the BOM
- [ ] **Source-controlled pinout** exists and matches the harness
- [ ] **Power/signal segregation**, **isolation**, and **shield termination** reviewed; schematic traces all normal/fault returns and external-I/O backfeed
- [ ] **Electrical levels and limits** defined for each discrete and CAN signal; mating-face pin drawings attached
- [ ] **Load-break / mate-under-power status** recorded from the datasheet — for this module: de-energize the 24 V feed and external I/O sources before disconnect; check for backfeed; sealed automotive families are not load-break rated unless the exact datasheet says so
- [ ] **Workmanship/acceptance standard** named (IPC/WHMA-A-620 or the program/customer equivalent) along with the crimp tool and inspection criteria

Run the full [design review checklist](../tools/design-review-checklist.md) before sign-off.

## 10. What would change if…

- **A formal defense / QPL requirement appears** → reconsider [MIL-DTL-38999](../engineering/families/07-mil-dtl-38999.md) (or [26482](../engineering/families/mil-dtl-26482.md) where a bayonet fits); the sealed-automotive choice no longer satisfies the requirement.
- **Ethernet is added** → add a [rugged Ethernet](../decision-paths/rugged-ethernet.md) path (M12 D/X-coded or sealed RJ45); do not try to run gigabit on the discrete signal connector.
- **RF / GPS is added** → use the [RF/GPS/radio path](../decision-paths/rf-gps-radio.md) — a coax contact or a separate coax bulkhead, not a spare signal pin.
- **Current increases significantly** → revisit contact size, the derating curve, and possibly a dedicated/split power connector.
- **Production volume increases** → revisit tooling (applicator vs. hand crimp), second sources, keyed variants, and assembly inspection sampling.

---

Templates for each artifact above live under [Tools & Templates](../tools/index.md). For the family-selection reasoning behind the choice, start at [rugged-on-a-budget](../decision-paths/rugged-on-a-budget.md).
