---
id: 09-decision-examples
title: "9. Connector Decision Examples"
slug: /09-decision-examples
sidebar_label: Decision Examples
sidebar_position: 9
---

# 9. Connector Decision Examples

The reasoning is what transfers to your own problems. Use the quick map to jump to a scenario, then read the detail — families, the specs that decide it, what to reject and why, and the mistakes to avoid.

For a step-by-step walkthrough of the most common scenarios, see the [Decision Paths](decision-paths/index.md).

## Quick map

| Scenario | Families to consider |
|---|---|
| [Sensor cable on a robot](#sensor-cable-on-a-robot) | M12 A-coded; M8 for small sensors |
| [Motor power](#motor-power) | M12 L/T-coded, industrial rectangular, high-current circular, Anderson SB, 38999 (sized/derated) |
| [CAN bus](#can-bus) | M12 A-coded (CAN pinout); 38999 in defense |
| [Ethernet in a rugged enclosure](#ethernet-in-a-rugged-enclosure) | M12 D-coded (10/100), X-coded (GbE/10G); rugged RJ45 if protected |
| [External service port](#external-service-port) | Sealed service M12, Micro-D, 38999 maintenance; USB behind a cover |
| [Internal PCB harness](#internal-pcb-harness) | Molex Micro-Fit (power), PicoBlade/JST-GH (signal), TE, Harwin |
| [Sealed enclosure feedthrough](#sealed-enclosure-feedthrough) | 38999 jam-nut/flange, sealed M12 panel, hermetic/potted penetrator |
| [High-vibration military payload](#high-vibration-military-payload) | MIL-DTL-38999 Series III; Micro-D internal |
| [Removable control box](#removable-control-box) | Industrial rectangular / Han-Modular; 38999 size-23 hybrid; M12 bundle |
| [Test / debug port](#test--debug-port) | Keyed shrouded header, Tag-Connect, Micro-D, D-sub; 38999 if external |

## Sensor cable on a robot

- **Families to consider:** M12 A-coded; M8 for small sensors.
- **Specs that matter most:** IP, vibration, cable flex, pinout, current, replaceability.
- **Reject / why:** JST/XH externally — no sealing/locking.
- **Mistakes to avoid:** Ignoring bend radius and strain relief.

*See also: [Industrial sensor decision path](decision-paths/industrial-sensor.md).*

## Motor power

- **Families to consider:** M12 L/T-coded, industrial rectangular, high-current circular, Anderson SB, 38999 size 12 (only where derating supports the load) or size 8/larger / dedicated power contacts (HCP/RADSOK).
- **Specs that matter most:** Contact current rating, wire gauge, loaded-contact count, ambient temperature and derating curve, heat rise, duty cycle, touch safety.
- **Reject / why:** XT60/90 hobby — not IP/professional; small signal circular paralleled.
- **Mistakes to avoid:** Paralleling contacts unless the manufacturer/application explicitly supports it and the design is reviewed; undersizing the contact.

*See also: [High-current DC power decision path](decision-paths/high-current-dc-power.md).*

## CAN bus

- **Families to consider:** M12 A-coded (CAN pinout); 38999 in defense.
- **Specs that matter most:** Shielding, termination, pinout consistency, daisy-chain.
- **Reject / why:** USB connector — wrong ecosystem, not rugged.
- **Mistakes to avoid:** No termination plan; pigtail shields; can't T-tap a single drop.

## Ethernet in a rugged enclosure

- **Families to consider:** M12 D-coded (10/100), X-coded (GbE/10G); rugged RJ45 only if protected.
- **Specs that matter most:** Speed, shielding, IP, cable category, serviceability.
- **Reject / why:** Consumer RJ45 outdoors; D-coded for GbE.
- **Mistakes to avoid:** Unshielded cable on X-coded; no shell bond.

*See also: [Rugged Ethernet decision path](decision-paths/rugged-ethernet.md).*

## External service port

- **Families to consider:** Sealed service M12, Micro-D, 38999 maintenance; USB only behind a cover.
- **Specs that matter most:** Access level, dust cap, mating cycles, ESD, sealing.
- **Reject / why:** Bare USB-C on an exposed panel.
- **Mistakes to avoid:** Same keying as the operational port; no dust cap.

*See also: [Debug / service port decision path](decision-paths/debug-service-port.md).*

## Internal PCB harness

- **Families to consider:** Molex Micro-Fit (power), PicoBlade/JST-GH (signal), TE, Harwin.
- **Specs that matter most:** Current, latch, TPA, wire gauge, vibration, tooling.
- **Reject / why:** Loose 0.1″ headers; bare solder joints.
- **Mistakes to avoid:** Hobby connector beyond its rating; no keying in volume production.

*See also: [Internal PCB harnessing decision path](decision-paths/internal-pcb-harnessing.md).*

## Sealed enclosure feedthrough

- **Families to consider:** 38999 jam-nut/flange, sealed M12 panel, hermetic/potted penetrator if pressure.
- **Specs that matter most:** IP/depth, gasket, panel thickness, torque, internal termination.
- **Reject / why:** Standard IP67 for 3 atm; RTV as "sealing".
- **Mistakes to avoid:** Confusing IP67 with IP68; no unmated cap; undersized wire seal.

*See also: [Sealed enclosure feedthrough decision path](decision-paths/sealed-enclosure-feedthrough.md).*

## High-vibration military payload

- **Families to consider:** MIL-DTL-38999 Series III; Micro-D internal.
- **Specs that matter most:** Vibration, anti-decoupling, shielding, contact retention, service class.
- **Reject / why:** Reject consumer circular/RJ45; avoid bayonet coupling unless the specific connector is qualified for the vibration profile and has an appropriate anti-decoupling/retention strategy.
- **Mistakes to avoid:** Untorqued/under-engaged coupling; wrong crimp tool; no rear seal.

*See also: [Defense / rugged external I/O decision path](decision-paths/defense-rugged-external-io.md).*

## Removable control box

- **Families to consider:** Industrial rectangular / Han-Modular; 38999 size-23 hybrid; M12 bundle.
- **Specs that matter most:** Mixed power/signal, serviceability, panel space, latch robustness.
- **Reject / why:** Many unlabeled individual pigtails.
- **Mistakes to avoid:** No keying; no ground-first sequencing where needed; connectors too close for hands.

## Test / debug port

- **Families to consider:** Keyed shrouded header, Tag-Connect, Micro-D, D-sub; 38999 if external.
- **Specs that matter most:** Mating cycles, ESD, pin protection, access level.
- **Reject / why:** Tiny hobby connector for repeated lab use.
- **Mistakes to avoid:** Letting a debug port become an undocumented production interface.

*See also: [Debug / service port decision path](decision-paths/debug-service-port.md).*

---
