---
id: 09-decision-examples
title: "9. Connector Decision Examples"
slug: /09-decision-examples
sidebar_label: Decision Examples
sidebar_position: 9
---

# 9. Connector Decision Examples

Scan the table for the quick map; the reasoning is what transfers to your own problems.

| Scenario | Families to consider | Specs that matter most | Reject / why | Mistakes to avoid |
|---|---|---|---|---|
| Sensor cable on a robot | M12 A-coded; M8 for small sensors | IP, vibration, cable flex, pinout, current, replaceability | JST/XH externally: no sealing/locking | Ignoring bend radius and strain relief |
| Motor power | M12 L/T-coded, industrial rectangular, high-current circular, Anderson SB, 38999 size 12 (only where derating supports the load) or size 8/larger / dedicated power contacts (HCP/RADSOK) | Contact current rating, wire gauge, loaded-contact count, ambient temperature and derating curve, heat rise, duty cycle, touch safety | XT60/90 hobby: not IP/professional; small signal circular paralleled | Paralleling contacts unless the manufacturer/application explicitly supports it and the design is reviewed; undersizing the contact |
| CAN bus | M12 A-coded (CAN pinout); 38999 in defense | Shielding, termination, pinout consistency, daisy-chain | USB connector: wrong ecosystem, not rugged | No termination plan; pigtail shields; can't T-tap a single drop |
| Ethernet in rugged enclosure | M12 D-coded (10/100), X-coded (GbE/10G); rugged RJ45 only if protected | Speed, shielding, IP, cable category, serviceability | Consumer RJ45 outdoors; D-coded for GbE | Unshielded cable on X-coded; no shell bond |
| External service port | Sealed service M12, Micro-D, 38999 maintenance; USB only behind cover | Access level, dust cap, mating cycles, ESD, sealing | Bare USB-C on exposed panel | Same keying as operational port; no dust cap |
| Internal PCB harness | Molex Micro-Fit (power), PicoBlade/JST-GH (signal), TE, Harwin | Current, latch, TPA, wire gauge, vibration, tooling | Loose 0.1" headers; bare solder joints | Hobby connector beyond its rating; no keying in volume production |
| Sealed enclosure feedthrough | 38999 jam-nut/flange, sealed M12 panel, hermetic/potted penetrator if pressure | IP/depth, gasket, panel thickness, torque, internal termination | Standard IP67 for 3 atm; RTV as "sealing" | Confusing IP67 with IP68; no unmated cap; undersized wire seal |
| High-vibration military payload | MIL-DTL-38999 Series III; Micro-D internal | Vibration, anti-decoupling, shielding, contact retention, service class | Reject consumer circular/RJ45; avoid bayonet coupling unless the specific connector is qualified for the vibration profile and has an appropriate anti-decoupling/retention strategy | Untorqued/under-engaged coupling; wrong crimp tool; no rear seal |
| Removable control box | Industrial rectangular / Han-Modular; 38999 size-23 hybrid; M12 bundle | Mixed power/signal, serviceability, panel space, latch robustness | Many unlabeled individual pigtails | No keying; no ground-first sequencing where needed; connectors too close for hands |
| Test / debug port | Keyed shrouded header, Tag-Connect, Micro-D, D-sub; 38999 if external | Mating cycles, ESD, pin protection, access level | Tiny hobby connector for repeated lab use | Letting a debug port become an undocumented production interface |

---