# Connector Selection - Think in This Order

Connector selection is multi-variable optimization. An excellent choice on 12 of 13 criteria that fails the 13th is still wrong. Work the steps in order - do not start from a connector you like.

## Step 1: Define the Interface

Before picking a family, write down: What crosses this boundary (power / signal / data / RF / fiber / fluid)? Internal or external? User-, technician-, or factory-accessible? Disconnected often? Safety-critical? Does it cross an environmental boundary? Must it be mated/unmated under power?

## Step 2: Electrical Requirements

| Criterion | What to evaluate | Common mistake |
| --- | --- | --- |
| Voltage | Use the specified AC and DC working-voltage ratings; account for RMS/peak, transients, creepage/clearance, pollution degree, altitude, and the applicable safety standard | Using DC rating on an AC circuit; ignoring transients/peak |
| Current | Per-contact rating at temperature, bundle-derated per the manufacturer's derating curve. Apply a conservative design margin. | Using max rating with no thermal/bundle derating |
| Signal type | Discrete, analog, thermocouple, encoder, CAN, `RS-485`, Ethernet, RF - each has different needs | Mixing high-current power and mV analog in one insert |
| Pin count | Required + shields + spares + growth. Design in 20-25% spares. | Filling every contact, then re-engineering for one more pin |
| Contact size | Drives both current capacity and wire-gauge range | Cramming 20 AWG into a contact rated 22-28 |
| Wire gauge | Work forward: current -> gauge -> contact size -> connector series | Working backward from an available connector |
| Shielding / EMI | 360 deg backshell shield termination vs. pigtail; per-group shields | Pigtail terminations; shield grounded one end only without reason |
| Isolation | Segregate noisy motor/power lines from low-level analog/data | Routing PWM motor lines next to encoder feedback in one insert |

!!! tip
    Current rating is not one number. It depends on contact size, number of loaded contacts, ambient temperature, wire gauge, enclosure heat, and acceptable temperature rise. Always consult the manufacturer's derating curve for a fully-loaded connector.

## Step 3: Mechanical / Environmental Requirements

| Criterion | Questions to answer |
| --- | --- |
| IP rating | Sealed mated? Unmated (capped)? Panel-mount sealing? At what depth/duration for IP68? |
| Vibration / shock | `MIL-STD-810` category? Positive locking? Anti-decoupling? Strain relief? |
| Mating cycles | Production-only? Test? Field service? Daily? (service life x 1.5 < rated cycles) |
| Keying | Can two similar cables be swapped accidentally? Use alternate keying. |
| Locking | Threaded (best vibration), bayonet (fast), push-pull, latch, jackscrews |
| Mounting | Cable plug, panel receptacle, jam nut (compact, can rotate), flange (rigid, better gasket control), PCB |
| Backshell | Straight / angled; shielded / unshielded; environmental; strain relief - not optional |
| Cable jacket | OD range vs. gland/clamp range; material; temperature; chemical exposure |
| Serviceability | Can a technician reach it with gloves and the right tool, from the needed side? |
| Availability | Can procurement actually buy it in time? QPL / COTS / commercial-equivalent? |
| Documentation | Can you fully define it in drawing, BOM, ICD, and assembly procedure? |

## Step 4: Production Reality (the step beginners skip)

This is where the technically perfect connector turns out to be dead on arrival. Ask:

| Who crimps it? | What tool is required? | Is the crimp tool calibrated? |
| --- | --- | --- |
| Are contacts removable? | Insertion/extraction tools available? | Are spare contacts stocked? |
| Are mating caps stocked? | QPL-qualified, COTS, or equivalent? | Is there a second source? |
| Lead time vs. schedule? | Strip length / crimp spec defined? | Inspection / pull-test plan? |
