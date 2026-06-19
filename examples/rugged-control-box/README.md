# Rugged Control Box Example

This example stays at the family-selection level from the source guide. It is a worked starting point for Exercise 1, not a released design.

## Scope

Small sealed enclosure with these external interfaces:

- 24 VDC input
- Ethernet
- CAN
- Four sensors
- One motor output
- One debug/service port

## Candidate Family Set

| Interface | Candidate family | Why it fits the guide |
| --- | --- | --- |
| 24 VDC input | `M12` L-coded or T-coded, or an industrial rectangular power interface if current grows | The source guide points power selection toward coded `M12` power variants for moderate industrial power and toward heavier rectangular / high-current families when current or service context demands more margin |
| Ethernet | `M12` X-coded for gigabit-class, `M12` D-coded for 10/100 | The source guide separates D-coded from X-coded by data rate and emphasizes shielding, sealing, and shell bonding |
| CAN | `M12` A-coded in industrial use, or 38999 in defense-style environments | The source guide treats CAN as a rugged field bus that depends on pinout discipline, shielding, and a real termination plan |
| Sensors | `M12` A-coded, or `M8` where the sensor is small and current is low | The source guide treats these as standard industrial sensor interfaces with good field-serviceability |
| Motor output | High-current circular, industrial rectangular, Anderson SB, or 38999 power contacts depending current and environment | The source guide warns against hobby battery connectors and pushes this choice toward current, inrush, touch safety, and wire-gauge reality |
| Debug/service | Sealed service `M12`, `Micro-D`, or a protected internal service connector behind a cover | The source guide emphasizes access control, dust caps, mating-cycle life, and avoiding consumer ports on exposed panels |

## Deliverables to Produce

- Connector family selection table
- Pinout for each external interface
- Cable list
- Backshell / cap list where applicable
- Justification column for every decision

## Review Questions

- Does each external interface need mated and unmated sealing?
- Where does keying matter because a wrong mate could damage equipment?
- Which interfaces need 360 deg shield termination?
- Which interfaces are likely to dominate tooling cost or lead time?
