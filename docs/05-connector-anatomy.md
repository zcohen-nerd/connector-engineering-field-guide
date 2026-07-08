---
id: 05-connector-anatomy
title: "5. Connector Anatomy"
description: "The physical parts of a connector — shell, insert, contacts, backshell, seals, strain relief — and what each one actually does in a rugged interface."
slug: /05-connector-anatomy
sidebar_label: Connector Anatomy
---

# 5. Connector Anatomy

| Part | Purpose |
|---|---|
| Shell | Outer body: structure, mating interface, shielding path, environmental protection, ground reference |
| Insert | Insulating body holding contacts in the correct arrangement; provides voltage isolation |
| Contacts | Conductive elements carrying current/signal |
| Contact size | Physical size; drives current capacity *and* wire-gauge compatibility |
| Crimp contacts | Preferred in rugged harnesses; repeatable *if* correct tooling is used |
| Solder-cup contacts | Low-volume / lab; skill-dependent and strain-sensitive (see 5.4) |
| PCB contacts | Solder to board; PCB must not carry cable loads — needs mechanical support |
| Pin vs. socket | Contact *gender* (electrical), independent of plug/receptacle. Safety rule: the energized/source side should normally use recessed sockets or touch-safe contacts so live conductors aren't exposed when unmated |
| Plug vs. receptacle | Connector *body* style (mechanical) — not the same as pin/socket; verify the part number |
| Jam-nut mount | Round panel hole, rear nut, compact, can rotate without an anti-rotation feature |
| Flange mount | Bolts to panel, rigid, repeatable alignment, better gasket compression control |
| Backshell | Rear accessory: strain relief, shield termination, sealing, cable exit angle |
| Strain relief | Transfers cable load to the connector body, not the contacts |
| Sealing gland | Compresses around the cable jacket for environmental sealing |
| Wire seal / grommet | Per-contact seal; *helps prevent moisture tracking along the wire into the body when correctly sized and assembled* (see 5.5) |
| Keying / polarization | Prevents incorrect mating or rotational misalignment |
| Shield termination | Bonds cable shield to shell/backshell, ideally 360° low-impedance |
| Dust cap | Protects an unmated connector from dirt, water, and pin damage |
| Dummy plug | Occupies unused ports to maintain sealing/configuration |
| Gaskets / O-rings | Seal the panel interface and/or the mating interface |

:::note[Key distinction]

Pin/socket gender is *electrical*. Plug/receptacle is *mechanical*. Do not assume "plug = pins" or "receptacle = sockets." Verify the actual part number every time.

:::

![Four schematic connectors showing that pin or socket contacts can appear in either a plug or a receptacle body](/img/diagrams/pin-socket-plug-receptacle.svg)

*All four combinations exist — gender and body style are independent selections on the part number.*

## 5.1 Contact plating — the decision logic

| Plating | Application | Advantage | Limitation |
|---|---|---|---|
| Gold (thicker, e.g. 50 µin class[^goldplate]) | Low-current signals, mil-spec, dry circuits | Excellent oxidation resistance, low contact resistance | Cost; wears at very high cycle counts |
| Gold flash (thin) | Commercial, moderate signal | Lower cost; suitable for some commercial signal applications | Thin flash wears through with cycling; not equivalent to thicker gold for high-cycle or harsh-service dry-circuit applications |
| Tin / tin-lead | Power / internal harness contacts | Inexpensive, good for larger current | Common for power/internal use but more vulnerable to fretting and oxidation in low-level/dry circuits. **Pure tin** can raise tin-whisker concerns in some applications; **tin-lead** and other finishes have different tradeoffs and may be restricted by environmental/regulatory requirements. Verify plating requirements for the program. |
| Silver | High-current power, RF | Excellent conductivity | Can tarnish or form sulfide films that increase contact resistance depending on environment, contact force, and wiping action |
| Nickel | Base layer, high-temp | Diffusion barrier, heat resistant | Higher contact resistance than gold; hard |

## 5.2 Termination types

| Type | Description | Use case | Pro / con |
|---|---|---|---|
| Crimp | Wire compressed into barrel with calibrated die | All field/production rugged wiring | Most reliable; needs tooling; not reworkable in place |
| Solder cup | Solder joint in a cup behind the contact | Low-volume, lab, legacy mil, hermetic | Reworkable; skill-sensitive; thermal risk to insert |
| IDC | Blade cuts through insulation | Mass-terminated ribbon, IDC D-sub | Fast, no strip; limited wire types/gauges |
| PCB through-hole / SMT | Solder tail to board | Board-mount headers, edge connectors | Board-integrated; reflow/hand solder; no field repair |
| Screw / cage clamp | Mechanical wire capture | Terminal blocks, panel wiring | Field-reworkable, no tooling; retention depends on the system (see Section 10) |

**Front-release vs. rear-release** describes how a removable crimp contact is retained in the insert and which side the tool works from. *Rear-release* contacts (the common MIL-DTL-38999 arrangement) are held by a retention clip in the insert; the insertion/extraction tool enters from the **rear** (wire side), and the contact is installed and removed rearward — convenient for field repair without disturbing the mating face. *Front-release* contacts are unlatched by a tool entering the **mating face**, though the contact is still withdrawn out the rear. Match the tool to the retention type: the wrong tool, or working from the wrong end, bends the retention fingers, damages the insert, or leaves a contact unretained.

## 5.3 Jam nut vs. flange mount

- **Jam nut:** single hex nut clamps from behind the panel. Compact, simplest install, but can rotate under coupling torque unless an anti-rotation pin/keyway is present. Common for circular connectors.
- **Flange mount:** bolts around the perimeter. Rigid, cannot rotate, excellent gasket sealing area, repeatable alignment (important for blind mate). Consumes more panel envelope.

## 5.4 Solder-cup quality — when it's right and how it fails

Solder cups are often dismissed as "skill-dependent," but here's the actual decision content:

- **When solder cups are correct:** very low volume, lab/prototype rugged assemblies, hermetic connectors (where solder is part of the seal), or arrangements where crimp tooling cost can't be justified.
- **What a good cup joint looks like:** wire fully bottomed in the cup, solder wetted to a concave fillet, no wicking up the stranding past the strip length, no cold/grainy surface, insulation clearance correct.
- **Common defects:** cold joints from insufficient heat; solder wicking that stiffens the wire and moves the flex point to a stress riser; overheating that deforms the insert and shifts contact position; flux residue degrading insulation resistance.

:::warning

Solder cups have no built-in strain relief. The backshell cable clamp is doing all the mechanical work — a solder-cup assembly without a proper clamp will fatigue and crack at the cup.

:::

## 5.5 Wire seals — the silent IP-rating killer

:::note[Often overlooked]

In sealed circular connectors, each contact cavity has a wire seal (grommet) sized for a specific wire-OD range. If your wire jacket OD is below the seal's range, the seal does not close around it — and the connector leaks at that cavity even though the shell, O-ring, and backshell are all perfect. Match wire OD to the seal range, and use sealing plugs in every unused cavity. An unused, unplugged cavity is an open hole into your sealed connector.

:::

## 5.6 Mating sequence and blind mate

- **Ground-first / power-last sequencing:** some connector families and contact systems support mating sequence through staggered (longer/shorter) contacts or specialized inserts, so that ground/chassis contacts mate first and break last, and power mates last (or signal before power, depending on architecture). This prevents the electronics from being powered before a ground reference exists, which can cause latch-up, ground bounce, or resets. Use it where the design requires it, but verify that staggered or sequenced contacts are actually available for your exact connector family, shell, and arrangement — it is not universal.
- **Blind mate:** when a module plugs into a chassis without the operator seeing the connector, you need a lead-in chamfer, connector float (radial compliance so the connector self-aligns), and pin-length stagger so misalignment damages nothing. Flange mounts with float are preferred over jam nuts here.

## 5.7 EMI, shielding, and bonding

Connector shielding is a *system* property: it depends on maintaining a continuous, low-impedance path from cable shield → backshell → shell → mating shell → chassis. The pieces:

- **Cable-shield termination:** a 360° circumferential termination (an EMI backshell with a conductive band or spring) keeps shield impedance low across frequency. A **pigtail** — the shield gathered into a short wire to a pin or lug — is the common failure.
- **Shell-to-shell continuity:** the mated shells must actually conduct (grounding fingers/springs, clean conductive plating), or the shield path is broken at the interface.
- **Backshell bonding & finishes:** the backshell must bond to the shell; conductive finishes and, where needed, EMI gaskets maintain continuity around the joint. A non-conductive finish (e.g. some anodize) breaks it.

**Termination strategy is system- and frequency-dependent.** Do not treat "ground one end only" or "ground both ends" as a universal rule. A single-point bond is a common tactic against low-frequency ground loops, while high-frequency shielding effectiveness commonly relies on bonding at both ends through 360° terminations (the classic EMC-textbook treatment — see Ott) — but the right answer depends on the noise problem being controlled, the frequency range of concern, and the chassis/reference structure. Document the shield strategy, the problem it controls, the frequency range, the reference structure, and the EMC requirement or test rationale — and verify the connector, backshell, cable braid, strain relief, and enclosure bond as one shielding system.

![Exploded view of connector shell, rear seal, 360-degree shield band, backshell, cable clamp, boot, and cable, annotated with the shield path and the mechanical load path](/img/diagrams/backshell-exploded.svg)

*The rear hardware has two jobs: bond the shield 360° into the shell, and carry cable load through the clamp and backshell so the contacts never see it.*

**Why a pigtail is bad:** it turns the shield connection into a small series **inductor**, and inductive impedance rises with frequency (Z ≈ 2πfL). The standard EMC rule of thumb is ~10 nH *per centimeter* of pigtail (see e.g. Ott, *Electromagnetic Compatibility Engineering*) — so even a 1 cm pigtail is ≈ 2 Ω at 30 MHz and tens of ohms by a few hundred MHz, and real pigtails are usually longer. That impedance lets shield current develop a voltage and re-radiate — the mechanism behind the guide's repeated "pigtails are inductive / pigtails radiate" caution.

## Sources

[^goldplate]: The "50 µin class" figure is the common mil-contact standard: Glenair's MIL-DTL-38999 contact materials specification lists pin/socket contacts as 50 microinches minimum gold per ASTM B488 over 50–100 µin nickel per QQ-N-290; Glenair's MIL-DTL-83513 Micro-D materials spec states the same 50 µin minimum gold over nickel underplate. <https://www.glenair.com/mil-dtl-38999/pdf/contact-performance-spec.pdf>

---