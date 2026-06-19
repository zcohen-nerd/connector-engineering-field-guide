# Connector Anatomy

| Part | Purpose |
| --- | --- |
| Shell | Outer body: structure, mating interface, shielding path, environmental protection, ground reference |
| Insert | Insulating body holding contacts in the correct arrangement; provides voltage isolation |
| Contacts | Conductive elements carrying current/signal |
| Contact size | Physical size; drives current capacity and wire-gauge compatibility |
| Crimp contacts | Preferred in rugged harnesses; repeatable if correct tooling used |
| Solder-cup contacts | Low-volume / lab; skill-dependent and strain-sensitive (see 5.4) |
| PCB contacts | Solder to board; PCB must not carry cable loads - needs mechanical support |
| Pin vs. socket | Contact gender (electrical), independent of plug/receptacle. Safety rule: the energized/source side should normally use recessed sockets or touch-safe contacts so live conductors are not exposed when unmated |
| Plug vs. receptacle | Connector body style (mechanical). Not the same as pin/socket - verify the part number |
| Jam-nut mount | Round panel hole, rear nut, compact, can rotate without an anti-rotation feature |
| Flange mount | Bolts to panel, rigid, repeatable alignment, better gasket compression control |
| Backshell | Rear accessory: strain relief, shield termination, sealing, cable exit angle |
| Strain relief | Transfers cable load to the connector body, not the contacts |
| Sealing gland | Compresses around cable jacket for environmental sealing |
| Wire seal / grommet | Per-contact silicone seal; stops moisture tracking along the wire into the body (see 5.5) |
| Keying / polarization | Prevents incorrect mating or rotational misalignment |
| Shield termination | Bonds cable shield to shell/backshell, ideally 360 deg low-impedance |
| Dust cap | Protects unmated connector from dirt, water, and pin damage |
| Dummy plug | Occupies unused ports to maintain sealing/configuration |
| Gaskets / O-rings | Seal the panel interface and/or the mating interface |

!!! note "Key Distinction"
    Pin/socket gender is electrical. Plug/receptacle is mechanical. Do not assume "plug = pins" or "receptacle = sockets." Verify the actual part number every time.

## 5.1 Contact Plating - The Decision Logic

| Plating | Application | Advantage | Limitation |
| --- | --- | --- | --- |
| Gold (50 microin min) | Low-current signals, mil-spec, dry circuits | Best oxidation resistance, lowest contact R | Cost; wears at very high cycle counts |
| Gold flash (3-15 microin) | Commercial, moderate signal | Low cost, fine for most signal uses | Flash wears through quickly at high cycles |
| Tin / tin-lead | Power contacts, internal harness | Cheap, good for larger current | Tin whiskers, fretting corrosion, not for dry circuits |
| Silver | High-current power, RF | Excellent conductivity | Tarnishes (insulating sulfide); needs wiping action |
| Nickel | Base layer, high-temp | Diffusion barrier, heat resistant | Higher contact R than gold; hard |

## 5.2 Termination Types

| Type | Description | Use case | Pro / con |
| --- | --- | --- | --- |
| Crimp | Wire compressed into barrel with calibrated die | All field/production rugged wiring | Most reliable; needs tooling; not reworkable in place |
| Solder cup | Solder joint in a cup behind the contact | Low-volume, lab, legacy mil | Reworkable; skill-sensitive; thermal risk to insert |
| IDC | Blade cuts through insulation | Mass-terminated ribbon, IDC D-sub | Fast, no strip; limited wire types/gauges |
| PCB through-hole / SMT | Solder tail to board | Board-mount headers, edge connectors | Board-integrated; reflow/hand solder; no field repair |
| Screw / cage clamp | Mechanical wire capture | Terminal blocks, panel wiring | Field-reworkable, no tooling; screw type backs out in vibration |

## 5.3 Jam Nut vs. Flange Mount

**Jam nut:** single hex nut clamps from behind the panel. Compact, simplest install, but can rotate under coupling torque unless an anti-rotation pin/keyway is present. Most common for circular connectors.

**Flange mount:** four bolts around the perimeter. Rigid, cannot rotate, excellent gasket sealing area, repeatable alignment (important for blind mate). Costs envelope.

## 5.4 Solder-Cup Quality - when it is right and how it fails

Both common guides dismiss solder cups as "skill-dependent" and move on. Here is the actual decision content:

### When solder cups are correct

Very low volume, lab/prototype rugged assemblies, hermetic connectors (where solder is the seal), or arrangements where the crimp tooling cost cannot be justified. Hermetic 38999 variants use solder contacts by design.

### What a good cup joint looks like

Wire fully bottomed in the cup, solder wetted to a concave fillet, no wicking up the stranding past the strip length, no cold/grainy surface, insulation clearance correct (not melted back, not crowding the cup).

### Common defects

Cold joints from insufficient heat; solder wicking that stiffens the wire and moves the flex point to a stress riser; overheating that deforms or melts the insert and shifts contact position; flux residue degrading insulation resistance.

!!! warning
    Solder cups have no built-in strain relief. The backshell cable clamp is doing all the mechanical work - a solder-cup assembly without a proper clamp will fatigue and crack at the cup.

## 5.5 Wire Seals - the silent IP-rating killer

!!! note "Often Overlooked"
    In sealed circular connectors, each contact cavity has a wire seal (grommet) sized for a specific wire-OD range. If your wire jacket OD is below the seal's range, the seal does not close around it - and the connector leaks at that cavity even though the shell, O-ring, and backshell are all perfect. Match wire OD to the seal range, and use sealing plugs in every unused cavity. An unused, unplugged cavity is an open hole into your sealed connector.

## 5.6 Mating Sequence and Blind Mate

On hybrid connectors, removable modules, and rack-and-panel interfaces, the order in which contacts engage matters and is a designable feature.

### Ground-first / power-last sequencing

Some connector families and contact systems support mating sequence through staggered (longer/shorter) contacts or specialized inserts, so that ground/chassis contacts mate first and break last, and power mates last (or signal before power, depending on the architecture). This prevents the electronics from being powered before a ground reference exists, which can cause latch-up, ground bounce, or resets. Use ground-first/last-break sequencing where the design requires it, but verify that staggered or sequenced contacts are actually available for your exact connector family, shell, and arrangement - it is not universal.

### Blind mate

When a module plugs into a chassis without the operator seeing the connector, you need a lead-in chamfer, connector float (radial compliance so the connector self-aligns), and pin-length stagger so misalignment damages nothing. Flange mounts with float are preferred over jam nuts here.
