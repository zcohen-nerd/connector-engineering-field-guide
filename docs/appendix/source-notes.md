---
title: Source Notes
description: "Source-verification notes and citations behind the guide's technical claims — the manufacturer datasheets and standards each one rests on, with status."
slug: /appendix/source-notes
sidebar_label: Source Notes
---

# Source Notes — Connector Engineering Field Guide

This file tracks claims that should be verified against a primary source (a current manufacturer datasheet, the applicable standard, or a QPL listing) **before v1.0** — before relying on any of these values in released hardware. (The site is public as a v0.5 beta; these items gate the v1.0 "source verified" milestone, not initial publication.)

Each item below originally corresponded to a `<!-- TODO: source/verify -->` marker in the guide; the markers were removed as items were verified and cited inline (the citations live in each page's Sources section, and in the `## Sources` section of the canonical `Source/connector-engineering-field-guide.md`). The two open items below remain unverified. Numbers in the guide are presented as *examples requiring verification*, not as universal ratings.

## v0.5 content additions (2026-07-06)

The v0.5 release added three decision paths (rugged-on-a-budget, removable machine module, RF/GPS/radio), a [MIL-DTL-26482 mini deep dive](../mil-dtl-26482.md), and a [worked Connector Selection Packet](../examples/connector-selection-packet.md). Source-discipline decisions for these:

- **The decision paths and the worked example are site-only and intentionally qualitative.** They introduce **no new exact ratings**. Where a number matters they point to the already-sourced tables in [§3](../03-connector-standards-and-families.md) and the [comparison matrix](../tools/connector-comparison-matrix.md) with their caveats intact, or use placeholder values clearly labeled as examples.
- **The MIL-DTL-26482 mini deep dive is supplemental site-only material, not a canonical numbered section**, so it has no `Source/` counterpart. Its family-level figures (3-point bayonet, ≥ 500 mating cycles, 600 V Class I / 1000 V Class II, contact sizes 20/16/12) reuse the Aero-Electric MIL-DTL-26482 Series 2 catalog already cited in §3 and the comparison matrix. The Series 1 vs Series 2 termination distinction (solder / front-release vs. rear-release crimp; contacts and tooling not interchangeable) is newly cited to ConnectorSupplier / Bishop & Associates. Temperature classes are kept qualitative.
- **RF/GPS/radio** asserts no per-family frequency or power numbers; 50 Ω vs. 75 Ω is stated as an application convention, not a rating.

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
- [x] **D-coded vs X-coded Ethernet guidance** — **confirmed**: X-coded per IEC 61076-2-109 (Cat 6A, up to 10 Gbit/s); D-coding is the 4-pin coding in IEC 61076-2-101 used for 10/100BASE-TX. D-coded is not obsolete; X-coded is not a blanket default. Cited on the M12 deep dive. (Issue #13)
- [x] **Common coupling torque** — **confirmed/corrected**: Turck's M12 cordset datasheet (RK 4.5T-5, per IEC 61076-2-101) specifies **0.8–1.0 N·m**, higher than the guide's former "0.4–0.6 N·m." Reworded to say coupling torque is manufacturer-specific and varies, with Turck as the sourced example; the cable-drawing/ICD worked-example torque notes were updated to match. (Issue #14)

### JST
- [x] **Family pitch/current statements** — **confirmed** against JST datasheets: XH = 2.5 mm / 3 A, VH = 3.96 mm / up to 10 A (AWG #16); other series per JST's published pitches (PH 2.0, GH 1.25, SH 1.0, EH 2.5, ZH 1.5 mm). Added the sourced VH current; kept the "JST alone is not a specification" framing. (Issue #15)

### Consumer I/O
- [x] **USB-C mating-cycle expectation** — **confirmed**: the USB Type-C specification specifies 10,000-cycle durability (vs ~1,500 for USB Type-A). Added the sourced number, with the "cycle life ≠ ruggedness" warning preserved. (Issue #16)
- [ ] **HDMI** — no cycle rating quoted; keep it that way unless sourced.

### IP ratings (IEC 60529 / ISO 20653)
- [x] **IP definitions table** (IP54/65/67/68/69K) — **confirmed** against IEC 60529 (and ISO 20653 for IP69K); wording only, no standard table reproduced. (Issue #17)
- [x] **IP69K → ISO 20653 (DIN 40050-9 lineage) distinction** — **confirmed**: IP69K originates from ISO 20653 (formerly DIN 40050-9); the "K" is not part of IEC 60529, which added the close IPx9 equivalent in its 2013 edition. (Issue #17)
- [x] **IP67 ≈ 1 m / 30 min** — **confirmed** against IEC 60529 (second characteristic numeral 7 = temporary immersion, tested at 1 m depth for 30 min). (Issue #17)

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