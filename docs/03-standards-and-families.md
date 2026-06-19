# Connector Standards and Families

<!-- TODO: verify source/citation -->

!!! note
    Always verify against the current version of the applicable standard and the manufacturer's datasheet. Standards get revised; part-number schemas vary between manufacturers. What follows is a framework for thinking, not a substitute for the source document. When this guide and a manufacturer datasheet or standard disagree, the datasheet or standard wins. `MIL-DTL-38999` covers miniature high-density environmental circular connectors with removable crimp or hermetic solder contacts. `M12` connectors are covered by the `IEC 61076-2-x` family, including `IEC 61076-2-101` for common A/B/D codings, `IEC 61076-2-109` for X-coded, and `IEC 61076-2-111` for power codings.

## 3.1 At-a-Glance Family Comparison

### Part A - Application, strengths, weaknesses

| Family | Used for | Strengths | Weaknesses |
| --- | --- | --- | --- |
| `MIL-DTL-38999` | Aero/defense rugged external I/O | Sealing, density, keying, EMI backshell ecosystem, crimp contacts | Expensive, part-number traps, tooling-heavy |
| `MIL-DTL-26482` | Rugged circular mil/industrial I/O | Smaller/cheaper than 38999, fast bayonet, common; Series I/II variants vary by P/N | Less dense, fewer modern high-speed options than 38999 |
| `M12` | Industrial sensors, Ethernet, IO-Link, CAN | Standard ecosystem, molded cables, IP-rated, easy sourcing | Coding/pinout confusion, limited pins/current |
| `M8` | Compact sensors, small actuators | Small, common sensor connector | Less current, fewer pins, more fragile |
| `D-sub` / `MIL-DTL-24308` | Rack/panel, test, legacy serial/control | Cheap, common, many accessories, good density | Non-environmental unless ruggedized; screws loosen |
| `Micro-D` / `MIL-DTL-83513` | Space/aero, compact high-reliability | Very high density, light, rugged, small (1.27 mm pitch) | Expensive, delicate, assembly complexity, low current |
| Terminal blocks | Control panels, DIN-rail, service wiring | Easy troubleshooting, modular, field-friendly | Not quick-disconnect; needs enclosure |
| Harting HAN-style | Machinery, removable modules, mixed P/S/D | Modular inserts, high current, robust housings | Large, many options, not mil-qualified |
| RF / coax | Antennas, RF, GPS, radar, timing | Controlled impedance, shielding, frequency-rated | Must match cable/impedance/torque/frequency |

### Part B - Cost, when to consider, when to avoid

| Family | Cost | Consider when | Avoid / prefer-alternative when |
| --- | --- | --- | --- |
| `MIL-DTL-38999` | High | Harsh environment, vibration, defense/aero, configuration control | Low-cost commercial gear, casual prototypes |
| `MIL-DTL-26482` | Med-High | Rugged but not extreme; legacy compatibility; moderate pins | Prefer 38999 Series III when you need threaded/self-locking coupling, higher density, or the modern defense ecosystem |
| `M12` | Low-Med | Factory automation, sensors, field I/O | Mil-spec qualification, very high pin count, high power (unless correctly coded) |
| `M8` | Low-Med | Small sensors, limited current, tight space | Rugged power, heavy cable, high vibration |
| `D-sub` / `MIL-DTL-24308` | Low-Med | Internal panels, lab gear, legacy interfaces | Wet/dirty external use without a rugged strategy |
| `Micro-D` / `MIL-DTL-83513` | High | Space/weight-constrained high-reliability systems | Field-serviceable dirty environments, high current |
| Terminal blocks | Low-Med | Industrial panels, power distribution | External rugged harness disconnects |
| Harting HAN-style | Med-High | Machine sections, removable boxes, mixed interfaces | Small payloads, aero weight-sensitive systems |
| RF / coax | Low-High | Any real RF path | Discrete wiring / uncontrolled impedance |

## Two Specific Clarifications Worth Internalizing

- `MIL-DTL-24308` D-subs are explicitly non-environmental, polarized rack-and-panel connectors. "Mil-spec" does not mean "rugged outdoor" - read what the spec actually covers.
- `Micro-D` (`MIL-DTL-83513`) uses 0.050-inch (1.27 mm) center contacts in arrangements from 9 to 130+ contacts, with wire, PCB, solder-cup, and flex terminations. Density and weight are the whole point; current capacity is not.
