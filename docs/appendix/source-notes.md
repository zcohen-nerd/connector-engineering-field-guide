---
title: Source Notes
slug: /appendix/source-notes
sidebar_label: Source Notes
sidebar_position: 2
---

# Source Notes — Connector Engineering Field Guide

This file tracks claims that should be verified against a primary source (a current manufacturer datasheet, the applicable standard, or a QPL listing) **before public/open-source release** or before any of these values is used in released hardware.

Every item below also appears as a `<!-- TODO: source/verify -->` comment at the relevant location in the guide. Numbers in the guide are presented as *examples requiring verification*, not as universal ratings.

## Source discipline (publication rules)

- Do **not** reproduce paid standards tables (the body text or tables of MIL-DTL or IEC documents) in this guide or derivatives. Reference and link instead.
- Do **not** copy proprietary catalog tables verbatim. Verify against public manufacturer datasheets and summarize in your own words.
- Manufacturer, standard, trademark, and connector-family names remain property of their owners; used here for identification and education only.

## Claims to verify

### MIL-DTL-38999
- [ ] **Part-number decoder example (`D38999/26WE26PN`)** — confirm each field (`/26` straight plug, `W` finish class, `E` → shell size 17, `26` arrangement, `P` pin, `N` normal) against a specific manufacturer's published decoder (e.g. Amphenol Aerospace). Note explicitly that schemas differ between Amphenol / Glenair / Souriau / ITT Cannon / TE / Eaton.
- [ ] **Series I/II/III/IV coupling descriptions** (bayonet / low-profile bayonet / Tri-Start triple-start thread / breech-lock) — confirm against the MIL-DTL-38999 spec and manufacturer literature.
- [ ] **Shell sizes, approximate OD, and "typical contact range"** in Section 7.3 — approximate OD figures and contact-range orientation values need a manufacturer source; they are labeled as orientation aids, not selection rules.
- [ ] **Contact-size / current example table** (Sections 7.5 and A2: 22D≈3 A, 20≈5 A, 16≈10 A, 12≈17 A) — these are example *test* currents from a manufacturer contact-performance spec, not continuous ratings. Confirm against the specific AS39029 contact datasheet for the contact P/N actually used.
- [ ] **Keying positions (N, A, B, C, D, E)** — confirm against the manufacturer catalog for the specific connector.
- [ ] **High-current guidance** (size 12 only where derating supports the load; size 8/larger or HCP/RADSOK for higher current) — confirm contact current curves and the no-paralleling-without-review caution against the manufacturer derating data.

### MIL-DTL-24308 (D-sub)
- [ ] **"Standard D-sub is non-environmental"** statement — confirm against MIL-DTL-24308 scope. Note that ruggedized/environmental variants exist.

### MIL-DTL-83513 (Micro-D)
- [ ] **Pitch and contact-arrangement statements** — confirm fine-pitch and arrangement ranges against the spec / manufacturer catalog before stating any specific numbers. Current guide avoids exact contact counts pending verification.

### M12 (IEC 61076-2-x)
- [ ] **Standards mapping** — confirm IEC 61076-2-101 (A/B/D), 61076-2-109 (X-coded), 61076-2-111 (S/T/K/L power) reference numbers and current editions. Do not reproduce IEC tables.
- [ ] **A-coded "~4 A class"** — confirm the typical A-coded current class against catalog/standard scope; emphasize it is connector/cable/temperature dependent.
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
- [ ] Any remaining current, voltage, mating-cycle, temperature, insulation-resistance, contact-resistance, wire-gauge, pitch, or contact-count number should be source-backed, labeled as an example, or replaced with cautious wording before release.

## Intentional engineering heuristics (not hard facts)

These are deliberately presented as design heuristics / judgment, not as standards-backed rules:

- **Spare-position guidance** (Section 4) — "add spares where feasible and justified" replaces any fixed percentage. Explicitly a heuristic; shell size, weight, cost, sealing plugs, and program requirements may override.
- **Conservative current derating margin** (Sections 4 and 10) — "use a conservative margin and the manufacturer derating curve" rather than a fixed percentage.
- **Mating-cycle service-life margin** (Sections 3/6) — "service life with margin below the rated cycles" rather than a fixed multiplier.
- **Locking-mechanism preference** (Section 4) — "threaded/self-locking is *often* preferred for severe vibration" is judgment, not an absolute; bayonet is not categorically rejected.
- **Series III as the *often*-default 38999 choice** (Section 7.2) — a common-practice heuristic, conditioned on size/mating-speed/legacy/customer/program requirements.
- **Bench-to-product transition rule of thumb** (Section 12.3) — a judgment checklist, not a spec.