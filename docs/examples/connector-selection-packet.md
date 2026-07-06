---
id: connector-selection-packet
title: "Worked Example: Connector Selection Packet"
description: "A fully worked connector selection packet for a rugged field-robot module — requirements, decision matrix, architecture, pinout, BOM, cable notes, ICD, and review."
slug: /examples/connector-selection-packet
sidebar_label: Selection Packet
---

# Worked Example: Connector Selection Packet

This is what "done" looks like: one interface taken from a loose requirement all the way to a documented, buildable, reviewable packet. It ties together the [selection workflow](../04-connector-selection-workflow.md), the [rugged-on-a-budget](../decision-paths/rugged-on-a-budget.md) and [removable machine module](../decision-paths/removable-machine-module.md) decision paths, and every template under [Tools & Templates](../tools/index.md).

:::warning[Read this as reasoning, not a shopping list]

This example teaches *how to decide and document*, not what to buy. Part numbers are placeholders like `J1`, `P1`, and `CONTACT-SIZE16-SKT-EXAMPLE`. A real project replaces every placeholder with an exact, datasheet-verified P/N, and sizes every current against the manufacturer's derating curve. No rating below is asserted for you.

:::

## Scenario

A small outdoor field robot has a **removable sensor/control module**. When the module is pulled for service, its harness must disconnect cleanly at the module boundary. The interface must handle:

- **24 VDC power input** to the module
- Several **low-current discrete I/O** lines
- One **CAN** (or RS-485) differential pair
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
| Discrete I/O | Several low-current lines | Direction defined per signal in the pinout |
| Data | One CAN / RS-485 pair | Twisted pair; bus termination is a system property, not a connector feature |
| Shield / chassis | Cable shield + chassis-ground strategy | Defined in the pinout and cable notes |
| Service model | Technician-serviceable, field | Rear-release crimp contacts, hand-tool crimpable |
| Production posture | Prototype → small production | Low tooling cost, easy sourcing, second source available |
| Constraints | No MIL/QPL requirement; budget-sensitive | Drives toward sealed automotive, away from mil circulars |

## 2. Connector family candidates

At least three families are worth a look before committing:

- **Sealed automotive (Deutsch DT / DTM / DTP)** — sealed, hand-crimpable, cheap, ubiquitous. See [rugged-on-a-budget](../decision-paths/rugged-on-a-budget.md).
- **M12 (A-coded + a separate coded connector for CAN)** — clean COTS ecosystem, molded cordsets. See [industrial sensor](../decision-paths/industrial-sensor.md).
- **MIL-DTL-38999** — rugged and configuration-controlled, but overkill here. See the [38999 deep dive](../07-mil-dtl-38999.md).
- **Industrial rectangular / Han-style** — great for serviceable modules, but large for a small robot. See [removable machine module](../decision-paths/removable-machine-module.md).

## 3. Decision matrix

Qualitative scoring — no fake precision. `+` favorable, `~` acceptable/depends, `−` unfavorable for *this* job.

| Candidate | Why it fits | Why it may not fit | Tooling / assembly | Sealing / serviceability | Cost / availability | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| **Deutsch DT/DTM/DTP** | Sealed, cheap, hand-crimpable, rear-serviceable; power + signal covered by one family | Not a mil ecosystem; no EMI backshell ecosystem | `+` low-cost hand tools | `+` IP67/IP68 sealed, rear-release serviceable | `+` cheap, widely stocked, second-sourced | **Selected** |
| **M12 (A-coded + CAN-coded)** | Clean COTS, molded cordsets, sealed | Two+ connectors for this mix; per-connector pin/current limits; more connectors on the panel | `~` cordsets easy; field-wireable fiddly | `+` IP67 sealed when mated | `~` low-cost but more connectors | Backup |
| **MIL-DTL-38999** | Rugged, keyed, config-controlled | Cost, tooling, lead time all unjustified with no requirement driving them | `−` positioner/insert tooling | `+` sealed, but far beyond need | `−` expensive, long lead | Rejected |
| **Industrial rectangular / Han** | Serviceable, mixed media in one housing | Too large/heavy for a small robot module | `~` insert tooling | `+` serviceable | `~` mid cost, bulky | Rejected |

## 4. Selected architecture

**Split into two sealed connectors from the same family: one power, one signal + data.** Both Deutsch-class for common tooling.

- **J1 / P1 — Power** (small pin count, larger contacts sized for the 24 VDC feed and its return).
- **J2 / P2 — Signal + CAN** (discrete I/O plus the CAN pair on a smaller-contact housing).

**Why split rather than one mixed connector?**

- **Segregation** — keeps the 24 VDC power path away from low-level discrete and the CAN pair, reducing coupling and simplifying the shield story.
- **Serviceability** — power and signal harnesses can be built, tested, and replaced independently.
- **Smaller, cheaper housings** — two small sealed connectors are easier to route, seal, and hand-crimp than one dense mixed one.
- **Failure isolation** — one large connector is a single point of failure and a heavy, stiff cable; two smaller ones de-risk both.

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
| 6 | SIGNAL_RTN / shield drain | Reference | Signal gauge | Shield drain — bond one end | See cable notes for shield termination |

## 6. BOM checklist

Every line is a real orderable item. Placeholders must become exact P/Ns.

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
- **Shield termination** — bond the shield drain at the **chassis end only** (single-point) unless an EMC analysis calls for both ends; document which end. See [EMI, shielding, and bonding (§5.7)](../05-connector-anatomy.md#57-emi-shielding-and-bonding).
- **Cable OD** — must fall inside each connector's seal/gland range or the seal and strain relief do not work.
- **Bend radius** — respect the cable's minimum bend radius at the connector exit; pick a straight vs. right-angle backshell/boot accordingly.
- **Label scheme** — both ends of every wire and both connector shells (`J1`/`P1`, `J2`/`P2`).
- **Continuity test** — point-to-point continuity and correct pinout on every built harness.
- **Pull-test / inspection** — crimp pull-test to the contact spec and a visual crimp inspection criterion.

The template for this is the [cable drawing template](../tools/cable-drawing-template.md).

## 8. ICD entry

- **Interface name:** Module boundary — Power (J1/P1) and Signal+CAN (J2/P2)
- **Connector role:** Receptacles `J1`/`J2` on the module; plugs `P1`/`P2` on the chassis harness
- **Mating pair:** `J1`↔`P1`, `J2`↔`P2` — *keyed/coded so P1 cannot mate J2*
- **Pinout:** per §5 above (source-controlled)
- **Voltage / current class:** 24 VDC nominal; per-contact current sized against the derating curve *(verify)*
- **Signal definitions:** discrete I/O directions per pinout; CAN_H/CAN_L differential pair
- **Shield / chassis treatment:** shield drain bonded at chassis end; module chassis-ground path defined
- **Environmental assumptions:** sealed (target IP67-class) when mated and locked; unmated only when capped *(verify the exact family/assembly rating)*
- **Service / cap note:** dust caps on both unmated receptacles; rear-release crimp for field repair
- **Revision control:** this ICD and the pinout are rev-controlled; changes go through the interface owner

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
- [ ] **Power/signal segregation** and **shield termination** reviewed

Run the full [design review checklist](../tools/design-review-checklist.md) before sign-off.

## 10. What would change if…

- **A formal defense / QPL requirement appears** → reconsider [MIL-DTL-38999](../07-mil-dtl-38999.md) (or [26482](../mil-dtl-26482.md) where a bayonet fits); the sealed-automotive choice no longer satisfies the requirement.
- **Ethernet is added** → add a [rugged Ethernet](../decision-paths/rugged-ethernet.md) path (M12 D/X-coded or sealed RJ45); do not try to run gigabit on the discrete signal connector.
- **RF / GPS is added** → use the [RF/GPS/radio path](../decision-paths/rf-gps-radio.md) — a coax contact or a separate coax bulkhead, not a spare signal pin.
- **Current increases significantly** → revisit contact size, the derating curve, and possibly a dedicated/split power connector.
- **Production volume increases** → revisit tooling (applicator vs. hand crimp), second sources, keyed variants, and assembly inspection sampling.

---

Templates for each artifact above live under [Tools & Templates](../tools/index.md). For the family-selection reasoning behind the choice, start at [rugged-on-a-budget](../decision-paths/rugged-on-a-budget.md).
