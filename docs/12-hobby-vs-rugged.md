# Hobby/Prototype vs. Production/Rugged

The point is not that hobby connectors are bad. They are optimized for cost and ease, not environmental control, vibration, serviceability, EMI, or configuration control. Know which world you are in.

| Prototype choice | Professional / rugged equivalent | Why |
| --- | --- | --- |
| Dupont jumpers | Locking keyed wire-to-board: Micro-Fit, Nano-Fit, Harwin, Omnetics | Retention, polarization, repeatability |
| JST-XH exposed externally | Sealed `M8`/`M12`, sealed circular, sealed wire-to-wire | Environmental protection |
| USB-C exposed service port | Sealed service connector, internal USB behind cover, `M12` Ethernet | Robustness and sealing |
| RJ45 exposed outdoors | `M12` D/X-coded or sealed industrial RJ45 | Vibration / water protection |
| Screw terminals on dangling wires | DIN-rail terminal blocks inside an enclosure | Serviceability and safety |
| Random barrel jack | Locking power connector or sealed circular | Retention and current rating |
| Header pins for debug | Keyed shrouded header, Tag-Connect, `Micro-D`, protected port | Misplug prevention and durability |
| XT60/XT90 battery connectors | Anderson SB, HC circular, 38999 power contacts | IP rating, cycle life, professional qualification |

## 12.1 Dupont Connectors

"Dupont" is the shop nickname for the 2.54 mm (0.1-inch) pitch crimp-pin jumper connectors found on every breadboard and dev board. The name is historical and not a real product line; what people actually mean is a generic 0.1-inch pin-and-socket housing on individually crimped contacts. They exist because they mate with the universal 0.1-inch header - which is why they are everywhere in prototyping.

| Property | Reality |
| --- | --- |
| Retention | Friction only. No latch, no lock. Pulls off under almost any cable load or vibration. |
| Polarization | Effectively none. A row of identical housings can be plugged in shifted by one pin or reversed. |
| Crimp quality | Notoriously inconsistent - the cheap crimp tools and loose tolerances produce intermittent contacts. |
| Current / environment | Low current, no sealing, no strain relief. Contacts back out of the housing over time. |

Use them for bench prototyping, throwaway test rigs, and signals you can re-seat by hand. Never use them for anything that ships, moves, vibrates, or needs to be reliable. The professional replacement is a latching, keyed, positively-retained wire-to-board family such as Molex Micro-Fit / Nano-Fit, JST PH/GH with a real crimp, Harwin, or Omnetics.

## 12.2 The JST Series - Not One Connector

<!-- TODO: verify source/citation -->

"JST" is a manufacturer, not a connector. JST makes dozens of distinct series with very different pitch, current, locking, and quality. Saying "use a JST" is like saying "use a screw" - the series matters enormously. The common ones an intern will meet:

| Series | Pitch | Typical use | Notes for professional work |
| --- | --- | --- | --- |
| XH | 2.5 mm | Hobby battery balance leads, dev boards | Friction lock only (no positive latch). Fine for prototypes; not for vibration or anything shipping. |
| PH | 2.0 mm | Small Li-ion packs, internal signal | Friction lock. Compact, common, OK for low-stress internal connections; still no positive latch. |
| GH | 1.25 mm | Small internal signal, sensors | Has a positive lock variant (GHR). Better retention than PH/XH for tight internal harnesses. |
| SH | 1.0 mm | Very small board-to-wire (for example, Qwiic-style) | Tiny, fragile, signal-only. Friction lock. Easy to damage during rework. |
| VH | 3.96 mm | Higher-current internal power | Largest common JST; higher current. Friction lock; verify rating vs. your load. |
| EH / ZH | 2.5 / 1.5 mm | General signal | Mid-tier signal series; check the datasheet for lock style and current. |

The professional read: JST also makes genuinely rugged, sealed, locking automotive/industrial series - so JST is not automatically hobby-grade. The dividing line is the specific series and whether it has a positive lock, keying, a verified crimp, and the current/seal rating your application needs. A GHR with a proper crimp tool is a legitimate internal-harness choice; an XH on a vibrating motor lead is a field failure waiting to happen.

## 12.3 Other Commonly-Confused Prototype Connectors

| Connector | What it really is | Professional caution |
| --- | --- | --- |
| IDC ribbon (2.54 mm) | Mass-terminated ribbon header (for example, classic 10/16/40-pin) | Convenient internal use; no strain relief or sealing. Fine inside a box, never as an external interface. |
| Barrel jack (DC power) | Friction-fit coaxial power plug | No retention, no polarization guarantee, poor current rating. Replace with a locking/sealed power connector for any real product. |
| Screw terminal block (PCB) | Wire clamped by a screw on the board edge | Loosens under vibration; not a quick-disconnect. Use a proper latching connector or move clamping into an enclosure terminal block. |
| Phoenix-style pluggable terminal | Pluggable 2-part screw/spring terminal block | Legitimate for panel/field wiring inside enclosures. Not sealed or vibration-rated on its own - house it appropriately. |

!!! tip
    Rule of thumb for the bench-to-product transition: when a connector leaves the lab, ask whether it latches, keys, retains its contacts, survives vibration, and seals to the environment it will live in. If any answer is no and the application needs it, upgrade the connector - do not ship the prototype part. And as always: the manufacturer datasheet and the applicable standard outrank anything in this guide.
