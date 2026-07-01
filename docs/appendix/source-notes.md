---
title: Source Notes
slug: /appendix/source-notes
sidebar_label: Source Notes
sidebar_position: 2
---

# Source Notes — Connector Engineering Field Guide

This file tracks claims that should be verified against a primary source (a current manufacturer datasheet, the applicable standard, or a QPL listing) **before v1.0** — before relying on any of these values in released hardware. (The site is already public as a v0.1 review draft; these items gate the v1.0 "source verified" milestone, not initial publication.)

Every item below also appears as a `<!-- TODO: source/verify -->` comment at the relevant location in the guide. Numbers in the guide are presented as *examples requiring verification*, not as universal ratings.

## Source discipline (publication rules)

- Do **not** reproduce paid standards tables (the body text or tables of MIL-DTL or IEC documents) in this guide or derivatives. Reference and link instead.
- Do **not** copy proprietary catalog tables verbatim. Verify against public manufacturer datasheets and summarize in your own words.
- Manufacturer, standard, trademark, and connector-family names remain property of their owners; used here for identification and education only.

## Claims to verify

### MIL-DTL-38999
- [x] **Part-number decoder example (`D38999/26WE26PN`)** — **confirmed** against Amphenol's Series III "How to order" (catalog AC38907): `/26` = straight plug, `W` = olive-drab cadmium-plated aluminum, `E` = shell size 17, `P` = pin, `N` = normal; arrangement `17-26` exists. Retained the caveat that schemas differ between manufacturers. (Issue #3)
- [x] **Series I/II/III/IV coupling descriptions** — Series III **confirmed** against the Amphenol Tri-Start Series III catalog (threaded Tri-Start / Acme, scoop-proof, self-locking / anti-decoupling). Series I/II (bayonet / low-profile bayonet) and IV (breech-lock) retained as the standard MIL-DTL-38999 definitions; Series III language kept conditional. (Issue #4)
- [x] **Shell sizes, approximate OD, and "typical contact range"** in Section 7.3 — **confirmed/adjusted** against the Amphenol Series III dimensional tables: straight-plug coupling-nut OD runs ~22 mm (size 9) to ~48 mm (size 25) and is shell-style-dependent. Values kept as orientation aids; added a note that OD depends on shell style and the drawing controls. (Issue #5)
- [x] **Contact-size / current example table** (Sections 7.5 and A2: 22D≈3 A, 20≈5 A, 16≈10 A, 12≈17 A) — **confirmed** against the Glenair *MIL-DTL-38999 Contact Performance Specifications* (Class H/N/Y test currents 22D=3 A, 20=5 A, 16=10 A, 12=17 A; also matches Amphenol's contact-rating table). Kept the "test current, not continuous rating" caveat. (Issue #6)
- [x] **Keying positions (N, A, B, C, D, E)** — **confirmed** against the Amphenol Series III catalog: "Master Key/Keyway Position" table (p. 7) lists positions N, A, B, C, D, E, and the ordering page states "Use N for normal" (p. 31). (Issue #7)
- [x] **High-current guidance** (size 12 only where derating supports the load; size 8/larger or HCP/RADSOK for higher current) — **confirmed** that Amphenol's High-Power 38999 / RADSOK contacts (~70–250 A per contact) provide dedicated high-current paths, and size 8/10-power contacts appear in the standard arrangement chart. The derating-aware and no-paralleling-without-review cautions are kept as engineering heuristics, not fixed ratings. (Issue #8)

### MIL-DTL-24308 (D-sub)
- [x] **"Standard D-sub is non-environmental"** statement — **confirmed** against MIL-DTL-24308G (DLA): standard D-subs are nonenvironmental, polarized-shell, rack-and-panel; ruggedized/environmental variants are separately specified. (Issue #9)

### MIL-DTL-83513 (Micro-D)
- [x] **Pitch and contact-arrangement statements** — **confirmed** against Glenair's MIL-DTL-83513 performance spec: contacts on .050 in (1.27 mm) centers, 3.0 A per contact. Pitch/current now stated with a source; exact contact arrangements still left to the catalog. (Issue #10)

### M12 (IEC 61076-2-x)
- [x] **Standards mapping** — **confirmed** via IEC listings: 61076-2-101 (A/B/D signal/data), 61076-2-109 (X- and H-coding, data ≤ 500 MHz), 61076-2-111 (power, codings E/F/K/L/M/S/T). Cited on the M12 deep dive; no IEC table text reproduced. (Issue #11)
- [x] **A-coded "~4 A class"** — **confirmed**: IEC 61076-2-101 specifies up to 4 A per contact for M12 screw-locking signal/power connectors. Kept the caveat that exact current is connector/cable/temperature dependent. (Issue #12)
- [ ] **D-coded vs X-coded Ethernet guidance** — confirm D-coded = 10/100BASE-TX, X-coded = GbE/10G-class against standards/manufacturer literature. D-coded is not obsolete; X-coded is not a blanket default.
- [ ] **Common coupling torque (~0.4–0.6 N·m)** — labeled as an example; confirm against the specific connector's datasheet.

### JST
- [ ] **Family pitch/current statements** (XH 2.5 mm, PH 2.0 mm, GH 1.25 mm, SH 1.0 mm, VH 3.96 mm, EH/ZH; VH "higher-current in some configurations") — confirm against JST datasheets for each series. "JST" alone is not a specification.

### Consumer I/O
- [ ] **USB-C mating-cycle expectation** — if an exact cycle count (e.g. 10,000) is ever added, attach a source. Current guide states "high mating-cycle expectations" without a number and warns cycle life ≠ ruggedness.
- [ ] **HDMI** — no cycle rating quoted; keep it that way unless sourced.

### IP ratings (IEC 60529 / ISO 20653)
- [ ] **IP definitions table** (IP54/65/67/68/69K) — confirm wording against IEC 60529; do not reproduce the standard's table.
- [ ] **IP69K → ISO 20653 (DIN 40050-9 lineage) distinction** — confirm the "K" suffix origin and the IPx9 relationship; keep IP69K out of "IEC 60529" attribution.
- [ ] **IP67 ≈ 1 m / 30 min** — labeled "per standard test"; confirm exact test condition wording against IEC 60529.

### General
- [ ] Any remaining current, voltage, mating-cycle, temperature, insulation-resistance, contact-resistance, wire-gauge, pitch, or contact-count number should be source-backed, labeled as an example, or replaced with cautious wording before v1.0.

## Intentional engineering heuristics (not hard facts)

These are deliberately presented as design heuristics / judgment, not as standards-backed rules:

- **Spare-position guidance** (Section 4) — "add spares where feasible and justified" replaces any fixed percentage. Explicitly a heuristic; shell size, weight, cost, sealing plugs, and program requirements may override.
- **Conservative current derating margin** (Sections 4 and 10) — "use a conservative margin and the manufacturer derating curve" rather than a fixed percentage.
- **Mating-cycle service-life margin** (Sections 3/6) — "service life with margin below the rated cycles" rather than a fixed multiplier.
- **Locking-mechanism preference** (Section 4) — "threaded/self-locking is *often* preferred for severe vibration" is judgment, not an absolute; bayonet is not categorically rejected.
- **Series III as the *often*-default 38999 choice** (Section 7.2) — a common-practice heuristic, conditioned on size/mating-speed/legacy/customer/program requirements.
- **Bench-to-product transition rule of thumb** (Section 12.3) — a judgment checklist, not a spec.