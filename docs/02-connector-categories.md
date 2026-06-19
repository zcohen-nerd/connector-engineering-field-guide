# Major Connector Categories

Scope your search by category before diving into specific families. Each category optimizes for different axes.

| Category | Typical use | Rugged / professional examples | Avoid when |
| --- | --- | --- | --- |
| Circular | External harnesses, sensors, payloads, field I/O | `MIL-DTL-38999`, `MIL-DTL-26482`, `M12`, `M8` | You need dense rectangular modularity or DIN-rail service |
| Rectangular | Industrial machines, panels, removable modules | Harting HAN-style, `D-sub` | You need cylindrical sealing or compact cable routing |
| Board-to-board | PCB stacking, mezzanine, backplanes | Samtec, TE, Molex high-speed mezzanine | Vibration exists without mechanical support |
| Board-to-wire | Internal PCB harnessing | Molex Micro-Fit / Mini-Fit / Nano-Fit, TE, Harwin, JST-VH | External rugged interface unless sealed / latched / potted |
| Wire-to-wire | Internal splices, replaceable assemblies | Molex sealed families, TE/Deutsch, Amphenol AT/ATP | High-service external panel connection unless designed for it |
| RF / coax | Antennas, GPS, radios, radar, video, test | SMA, TNC, N-Type, BNC, SMP/SMPM, MCX | Ordinary discrete wiring / uncontrolled impedance |
| High-current power | Motors, batteries, heaters, PDUs | Anderson SB, Amphenol/TE HC, 38999 power inserts, HAN power | Mixed low-level signals without isolation planning |
| Fiber / data | Long-distance data, EMI immunity, bandwidth | LC, ST, expanded-beam rugged fiber, M12 Ethernet | Dirty field environments without cleaning discipline |
| Hybrid | Power + signal + data + coax/fiber/fluid in one | 38999 hybrid inserts, HAN-Modular | Simple low-cost harnesses where separate connectors are cleaner |

!!! note "Often Overlooked"
    Board-to-wire connectors like Molex Micro-Fit, Mini-Fit, Mega-Fit, and sealed Squba are not automatically "hobby" parts. Professional versions have positive latches, polarization, secondary locks (TPA), defined current/voltage ratings, and sealed variants. The dividing line is the specific family and rating, not the brand.
