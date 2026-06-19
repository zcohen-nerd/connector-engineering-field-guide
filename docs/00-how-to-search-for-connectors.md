# How to Search for Connectors

Connector selection often goes wrong before the datasheet even opens. The search terms are too vague, too brand-specific, or too focused on shape instead of function. This page is about turning a loose need into useful search terms and filters.

## Start with the interface, not the connector

Bad searches usually start with vague phrases such as:

- waterproof connector
- 12 pin connector
- robot connector
- aviation plug
- JST connector

Better searches describe the interface you are trying to build:

- environment
- connector family
- pin count
- coding/keying
- gender/body style
- termination
- mounting style
- current/voltage
- sealing requirement
- cable OD or wire gauge
- data type

Start by writing down what crosses the boundary, who touches it, how often it is mated, whether it crosses an environmental boundary, and what would go wrong if the wrong cable were plugged in.

## Search term patterns

Use search terms that combine the family, the use case, and one or two constraints:

- `M12 A-coded 4-pin panel mount sealed sensor connector`
- `M12 X-coded shielded Ethernet panel mount sealed`
- `MIL-DTL-38999 Series III shell size insert arrangement backshell`
- `Micro-Fit wire-to-board latching connector crimp housing`
- `sealed wire-to-wire connector positive lock automotive`
- `industrial rectangular modular connector power signal insert`
- `rugged RJ45 sealed panel mount Ethernet`
- `Tag-Connect programming header footprint`
- `coax SMA bulkhead connector impedance matched`

!!! warning
    Search terms are only a starting point. The datasheet, applicable standard, and manufacturer documentation still decide whether the part is suitable.

## Useful filters

- connector family
- number of positions
- contact gender
- plug/receptacle body style
- termination style
- mounting style
- current per contact
- voltage rating
- wire gauge range
- cable OD range
- IP rating
- mating cycles
- operating temperature
- shielding
- keying/coding
- in-stock / lead time
- tooling required

## Search traps

- `JST` is not enough
- `aviation plug` is not a professional specification
- `waterproof` is not enough; look for IP rating and complete-assembly conditions
- `mil-spec` does not automatically mean environmentally sealed
- same pin count does not mean compatible
- `compatible` in a marketplace listing may not mean qualified or interchangeable
- a connector listing without the mating connector, contacts, backshell, cap, and tooling is not enough to release a design

## What to ask a vendor or FAE

- What is the exact mating part?
- Are contacts included or ordered separately?
- What crimp tool/positioner is required?
- What backshell or strain relief is compatible?
- What is the cable OD range?
- What is the derating curve for fully loaded connectors?
- Is the IP rating mated only, unmated, capped, or panel-mounted?
- What torque is required?
- What is the qualification status?
- Are there alternate keying/coding options?
- Is there a second source or QPL listing?