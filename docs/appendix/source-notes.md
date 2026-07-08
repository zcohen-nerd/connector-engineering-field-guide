---
title: Source Notes
description: "Source-status dashboard for the guide's technical claims — what is verified, what is engineering judgment, what is example-only, and what still needs sourcing."
slug: /appendix/source-notes
sidebar_label: Source Notes
---

# Source Notes — Source-Status Dashboard

**Status: v0.9 Beta — Hobby Guide Expansion + Two-Track Polish**

This page is the guide's transparency layer. Every technical statement in the guide falls into one of four buckets, and this page says which: **verified claims** (backed by a named public source), **engineering heuristics** (deliberate judgment, not specification), **example-only values** (teaching aids, never design authority), and an explicit **needs-source-before-v1.0 backlog**.

:::note

This guide is an educational engineering reference. Always verify ratings, qualifications, tooling, and environmental limits against current datasheets, governing standards, qualified-products listings, and program/customer requirements.

:::

Release history lives in the repository `CHANGELOG.md`. v0.7 added source hierarchy guidance, evidence fields in templates, tighter sealed-automotive language, system-level rating warnings, shield-termination nuance, and RF/fiber decision fields. v0.8 split the site into hobby and professional tracks.

## Hobby connector source status

<!-- Hobby per-topic status lives ONLY in hobby/source-notes. Do not duplicate here. -->

The [Hobby Connector Field Guide](../hobby/index.md) (introduced v0.8, expanded v0.9) is **site-only material** with no `Source/` counterpart. Its per-topic source status — what is verified, what is example-only, and what still needs a source — is tracked in exactly one place: **[Hobby Source Notes](../hobby/source-notes)**, the authoritative tracker for that entire track. This dashboard intentionally carries no per-topic hobby detail; if a hobby claim's status matters to you, that page is the record.

## Source hierarchy

When two sources disagree — or when deciding what counts as design authority — work down this order (also on [Reading Datasheets §6.1](../06-reading-datasheets.md)):

1. **Program / customer / contract requirement**
2. **Governing standard, current edition** (record the edition/date checked)
3. **QPD/QPL listing**, where qualification matters (exact manufacturer, part number, slash sheet)
4. **Manufacturer documentation** (datasheet, drawing, application spec, installation instruction — at a recorded revision)
5. **Distributor pages** — availability, pricing, lead time, packaging, and lifecycle hints only

Distributor pages are useful for discovery, pricing, lead time, packaging, and availability. They are not design authority for ratings, qualification, tooling, sealing, mating cycles, or safety limits. For engineering release, verify against the governing requirement, current standard, QPD/QPL listing where applicable, and the exact manufacturer documentation. Citations below that are distributor-hosted copies of manufacturer/DLA documents are noted as such; citations that are distributor *listings* are flagged for replacement in the backlog.

## 1. Verified claims

Statements backed by a credible public source. "Verified" means the claim matches the cited source as of the date checked — it does **not** mean the value applies to your exact part number, and sources get revised. Inline citations live in each page's Sources section.

| Claim / content area | Source type | Source / reference | Used in | Notes |
| --- | --- | --- | --- | --- |
| 38999 part-number decoder example (`D38999/26WE26PN`) | Manufacturer catalog | Amphenol Series III (AC38907) | [38999 §7.8](../07-mil-dtl-38999.md) | Schemas differ between manufacturers |
| 38999 Series III coupling (Tri-Start thread, scoop-proof, self-locking) | Manufacturer catalog | Amphenol Series III (AC38907) | [38999 §7.2](../07-mil-dtl-38999.md) | Series I/II/IV are the standard definitions |
| 38999 shell sizes & approximate ODs | Manufacturer catalog | Amphenol dimensional tables | [38999 §7.3](../07-mil-dtl-38999.md) | Orientation aids; OD is shell-style-dependent |
| 38999 contact *test* currents (22D≈3 A, 20≈5 A, 16≈10 A, 12≈17 A) and the separate free-air carrying rating | Manufacturer spec | Glenair MIL-DTL-38999 contact performance spec | [38999 §7.5](../07-mil-dtl-38999.md), [Quick-Ref A2](quick-reference-tables.md), [matrix](../tools/connector-comparison-matrix.md) | Test currents ≠ continuous ratings; derating curve controls |
| 38999 keying positions (N, A–E) | Manufacturer catalog | Amphenol Series III (AC38907) | [38999 §7.7–7.8](../07-mil-dtl-38999.md) | |
| High-power 38999 / RADSOK contacts (~70–250 A class) | Manufacturer page | Amphenol Aerospace | [Quick-Ref A3](quick-reference-tables.md), [high-current path](../decision-paths/high-current-dc-power.md) | Derating data still controls; no casual paralleling |
| MIL-DTL-26482 Series 2 family (3-point bayonet, ≥500 cycles, 600 V Cl. I / 1000 V Cl. II, contacts 20/16/12) | Manufacturer catalog | Aero-Electric / Amphenol 26482 Series 2 | [26482 mini deep dive](../mil-dtl-26482.md), [§3](../03-connector-standards-and-families.md), [matrix](../tools/connector-comparison-matrix.md) | Family-level orientation only |
| 26482 Series 1 vs Series 2 termination/tooling split | Industry reference | ConnectorSupplier / Bishop & Associates | [26482 mini deep dive](../mil-dtl-26482.md) | Temperature classes deliberately kept qualitative |
| Standard D-sub is non-environmental rack-and-panel | Military spec | MIL-DTL-24308G (DLA) | [§3](../03-connector-standards-and-families.md), [matrix](../tools/connector-comparison-matrix.md) | Ruggedized variants separately specified |
| Micro-D .050 in (1.27 mm) centers, 3 A per contact | Manufacturer spec | Glenair MIL-DTL-83513 performance spec | [§3](../03-connector-standards-and-families.md), [matrix](../tools/connector-comparison-matrix.md) | |
| M12 standards mapping: IEC 61076-2-101 (A/B/D), -109 (X/H), -111 (power) | Standard listings | IEC webstore (direct) | [M12 §8](../08-m12.md) | Edition-specific; record the edition checked. Citations moved from GlobalSpec to the IEC webstore (audit 2026-07); -111 scope figures verified against the 2025 edition abstract |
| M12 A-coded ≤4 A / ≤250 V class | Standard listing | IEC 61076-2-101 | [M12 §8.1](../08-m12.md), [tools](../tools/cable-drawing-template.md) | Exact rating is connector/cable/temperature dependent |
| M12 D-coded (10/100) vs X-coded (GbE/10G) roles | Standard listings | IEC 61076-2-101 / -109 | [M12 §8.1](../08-m12.md), [Rugged Ethernet](../decision-paths/rugged-ethernet.md) | |
| M12 coupling-torque example (0.8–1.0 N·m) | Manufacturer datasheet | Turck RK 4.5T-5 | [M12 §8.3](../08-m12.md), [tools](../tools/connector-icd-template.md) | Example only — torque is manufacturer-specified |
| M12 K-coding = 4+PE, 630 V AC class configuration | Manufacturer page | binder M12 K-coded family | [M12 §8.1](../08-m12.md) | Example configuration per IEC 61076-2-111; current varies by vendor |
| M12 L-coding = 4+FE (12 A/16 A, 63 V DC class); T-coding = 4 contacts (12 A, 63 V DC class) | Manufacturer pages | binder M12 L-coded / T-coded families | [M12 §8.1](../08-m12.md) | Example configurations per DIN EN 61076-2-111 (audit 2026-07); verify the exact datasheet |
| M8 detail spec is IEC 61076-2-104 (screw/snap locking) | Standard listing | IEC 61076-2-104:2026 (IEC webstore) | [M12 §8.6](../08-m12.md) | Scope details are edition-specific — the 2026 edition describes 3- to 12-way; the superseded 2014 edition characterized 3- to 5-way (audit 2026-07) |
| JST series datasheets — XH, PH, SH, GH, SM, RCY (and VH): pitches + headline ratings | Manufacturer datasheets | Official JST series PDFs (jst-mfg.com) | [§12](../12-consumer-hobby-prototype-connectors.md), [hobby JST page](../hobby/jst-is-not-one-connector.md) | Genuine-part figures only; clones not covered; "JST" alone is not a specification |
| USB-C 10,000-cycle durability (vs ~1,500 USB-A) | Public standard | USB Type-C spec Release 2.5 (USB-IF document library) | [§12](../12-consumer-hobby-prototype-connectors.md), [Quick-Ref A4](quick-reference-tables.md) | Cycle life ≠ ruggedness. Citations now point to the USB-IF document library, with the Mouser-hosted datasheet relabeled as a vendor secondary (audit 2026-07) |
| IP code definitions; IP67 = 1 m/30 min; IP69K origin in ISO 20653 | Standards | IEC 60529 / ISO 20653 | [Quick-Ref A1](quick-reference-tables.md) | Wording only; no standard tables reproduced |
| Deutsch DT/DTM/DTP sealing (IP68) and current classes | Manufacturer pages | TE Connectivity | [§3.2](../03-connector-standards-and-families.md), [budget path](../decision-paths/rugged-on-a-budget.md) | Family-level; verify the exact series datasheet |
| AMP Superseal 1.5 (IP67, ~14 A class) | Manufacturer page | TE Connectivity | [§3.2](../03-connector-standards-and-families.md) | |
| Molex MX150/MX150L (≥IP67; up to ~30–40 A by gauge) | Manufacturer document | Molex | [§3.2](../03-connector-standards-and-families.md) | |
| Metri-Pack series system (sealed & unsealed, series by blade size) | Manufacturer datasheet | Aptiv Metri-Pack Connection System | [§3.2](../03-connector-standards-and-families.md) | Figures deliberately qualitative |
| Han E insert (16 A, 500 V, 500 cycles); Han HMC 10,000+ cycles | Manufacturer product pages | HARTING b2b product page (Han E 09330162601) / HARTING (Han HMC) | [matrix](../tools/connector-comparison-matrix.md), [Quick-Ref A4](quick-reference-tables.md) | Manufacturer-direct as of audit 2026-07; the 6–48 contacts-per-insert family span still traces to a distributor listing and is labeled as such. Insert/hood/assembly define the interface |
| Micro-Fit 3.0: 8.5 A max "determined by terminal used"; 10.0 A RMF terminal offered | Manufacturer document | Molex 987650-5984 Rev. 5 | [matrix](../tools/connector-comparison-matrix.md) | RMF = Reduced Mating Force; terminal P/N sets current |
| Mil-contact "50 µin class" gold plating | Manufacturer spec | Glenair contact materials spec | [§5.1](../05-connector-anatomy.md) | ASTM B488 over QQ-N-290 nickel |
| 500-cycle durability across 38999 / 26482 / 83513 / 24308 | Specs/catalogs | Amphenol, Aero-Electric, Glenair, MIL-DTL-24308G | [Quick-Ref A4](quick-reference-tables.md) | Per-family documents cited on the page |
| Shield-pigtail inductance ~10 nH per cm | Textbook rule of thumb | Ott, *Electromagnetic Compatibility Engineering* | [§5.7](../05-connector-anatomy.md) | Explicitly a rule of thumb |
| IPC/WHMA-A-620, *Requirements and Acceptance for Cable and Wire Harness Assemblies*, as the general harness workmanship/acceptance reference | Industry standard | IPC/WHMA (Revision F, 2025, current as of this writing) | [Workflow §4](../04-connector-selection-workflow.md), [tools](../tools/cable-drawing-template.md) | Program/customer requirements and the manufacturer application spec control |

## 2. Engineering heuristics

Deliberate engineering judgment — orientation, not specification. These are *intentionally* not sourced to a standard, because they are how experienced engineers work, not what a document mandates:

- **Do not choose by pin count first.** Classify the interface (boundary, environment, service model) before shopping. (§1, §4)
- **Connector selection is system design.** A connector is a controlled interface between subsystems, not "a plug with enough pins." (§1)
- **The connector is not just the shell.** Contacts, backshells, seals, cavity plugs, caps, strain relief, tooling, and drawings are all part of the interface. (§5, What People Forget)
- **Exact datasheets and program requirements beat family expectations.** Family-level values orient your search; the released design uses the exact part's numbers. (throughout)
- **Spare positions "where feasible and justified"** — not a fixed percentage; shell size, weight, sealing plugs, and program rules may override. (§4)
- **Conservative current-derating margin** below the manufacturer curve — not a fixed percentage. (§4, §10)
- **Service life with margin below rated mating cycles** — not a fixed multiplier. (§3, §6)
- **Threaded/self-locking coupling is *often* preferred for severe vibration** — judgment; bayonet is not categorically rejected where qualified. (§4, 26482 page)
- **38999 Series III as the *often*-default** for new harsh-environment designs — conditioned on size, mating speed, legacy, customer, and program requirements. (§7.2)
- **Bench-to-product transition rule of thumb** — a judgment checklist, not a spec. (§12.3)
- **Splitting power and signal connectors vs. one mixed connector** — a trade, argued per design. (Selection Packet example)
- **Shield-termination strategy** — system- and frequency-dependent judgment: one-end vs. both-ends vs. 360° backshell is documented per design with an EMC rationale, never applied as a universal rule. (§5.7, templates)
- **Ratings as screening values** — catalog/family figures screen candidates; the exact datasheet, derating curve, application spec, and program requirement set release values. (§3, §6, appendix, matrix)

## 3. Example-only values

:::warning[Example values are not design ratings]

Example values are included to teach selection logic. They are not design ratings. Verify exact values against the current manufacturer datasheet, application specification, governing standard, and program/customer requirement.

:::

The following are always example-only, even where the family figure is verified above:

- Every number in the [comparison matrix](../tools/connector-comparison-matrix.md) and the [quick-reference tables](quick-reference-tables.md) (A1–A4) — representative family figures, never part ratings.
- The 38999 contact-size table's test currents — relative sizing aids; the derating curve controls design current. (§7.5, A2)
- The "70–80% at full load" derating illustration in [Workflow §2](../04-connector-selection-workflow.md) — a shape illustration, not a real curve.
- All worked-example fields marked *illustrative* in the [cable drawing](../tools/cable-drawing-template.md) and [ICD](../tools/connector-icd-template.md) templates (part numbers, cable OD, lengths, revision letters).
- Every placeholder (`J1`, `P1`, `CONTACT-SIZE16-SKT-EXAMPLE`) in the [Connector Selection Packet](../examples/connector-selection-packet.md) — reasoning scaffolding, not purchasable parts.
- Example pinouts and wire colours (e.g. the A-coded brown/white/blue/black convention) — confirm against the device datasheet.
- Voltage/current figures quoted from standard listings (4 A / 250 V A-coded, 16 A / 630 V power codings, 600/1000 V 26482 classes) — tied to the cited edition and configuration, not universal ratings.
- The RF and fiber minimum-decision-field tables (§2 and the RF path) — process aids listing what to capture; they assert no performance values.

## 4. Needs source before v1.0

The explicit backlog. These gate the v1.0 "source verified" milestone — they are the places where the guide currently relies on family-level sources, cautious wording, or no number at all, and where released-hardware use demands the exact document.

| Priority | Item | Pages affected | Source needed | Risk if unsourced | Notes |
| --- | --- | --- | --- | --- | --- |
| High | Load-break / hot-plug / mate-under-load claims | [High-current DC](../decision-paths/high-current-dc-power.md), [Removable module](../decision-paths/removable-machine-module.md), §10, ICD template | Exact connector datasheet + governing standard statement per part | Arcing, shock, fire, destroyed contacts | New in v0.6: treat every connector as **not** load-break until the exact source says otherwise |
| High | Current ratings and derating curves (per exact part) | §4, §7.5, matrix, A2/A3, high-current path | Manufacturer derating curve for the exact contact P/N and loading | Overheating, insulation damage | Family figures verified; per-part verification is inherently per-design |
| High | IP67/IP68/IP69K sealing claims (per assembly) | §5.5, §8.3, A1, sealed-feedthrough & budget paths | Test condition + datasheet for the exact mated assembly | Water ingress in the field | IP definitions verified; per-assembly claims open |
| High | Crimp inspection / workmanship criteria (per contact system) | §4, §5.2, cable-drawing/ICD/design-review templates | IPC/WHMA-A-620 class selection + the manufacturer application spec for each contact/tool system | Latent crimp failures passing visual inspection | A-620 now named as the general reference; per-system specs open |
| Medium | Voltage ratings (incl. altitude/creepage effects) | §4, matrix, 26482 page | Exact datasheet + applicable safety standard | Insulation failure | Class figures are edition/configuration examples |
| Medium | Mating-cycle ratings (per part) | A4, §6, matrix | Exact datasheet | Wear-out, rising contact resistance | Family figures verified |
| Medium | Temperature ranges (per part/class) | matrix, §6, 26482 page | Exact datasheet / spec class | Derating and material errors | 26482 temp classes deliberately qualitative |
| Medium | Wire-gauge compatibility per contact | §4, §5.2, templates | Contact datasheet / application spec | Bad crimps, failed wire seals | |
| Medium | Contact-count / insert-arrangement examples | §7.3–7.4, matrix | Manufacturer insert-arrangement drawings | Mis-specified interfaces | Guide already says "always pull the drawing" |
| Medium | MIL-DTL qualification / QPL status statements | §4, §7, 26482 page | QPL listing for the exact P/N | Non-compliant hardware | The guide asserts no QPL status today — keep it that way until verified |
| Medium | M8/M12 IEC coding and standard references (current editions) | §8 | Current IEC edition text (61076-2-101/-104/-109/-111) | Stale scope claims | Citations now point to IEC webstore current-edition listings (-111:2025, -104:2026) as of audit 2026-07 — record edition/date checked; full standard text remains unreviewed (abstracts only) |
| Medium | Replace distributor-listing citations with manufacturer-direct documents | [matrix](../tools/connector-comparison-matrix.md), [Quick-Ref A4](quick-reference-tables.md) | Manufacturer/DLA-direct links | Orientation figures drift from the controlling document | Han E closed (audit 2026-07): matrix and A4 now cite HARTING's own product page. Distributor-hosted *copies* of manufacturer/DLA PDFs (Molex, Aptiv, MIL-DTL-24308G) remain acceptable interim citations; swap to manufacturer/DLA-direct links where practical |
| Low | RF & fiber connector performance values (frequency/power/loss per family) | [RF path](../decision-paths/rf-gps-radio.md), §2 | Exact part + cable/fiber datasheets | Degraded links | Intentionally number-free; v0.7 added decision-field tables instead of values |
| Low | Automotive sealed-connector environmental claims beyond IP (temp/vibration/fluids) | §3.2, budget path | Series application specifications | Environmental field failures | Only sealing/current classes cited today |
| Low | HDMI mating-cycle rating | §12 | Reputable public source | Minor | Intentionally unquoted; keep it that way unless sourced |
| Medium | Hobby-track source hardening | [Hobby track](../hobby/index.md) | Per the authoritative per-topic list in [Hobby Source Notes](../hobby/source-notes) | Makers treating placeholders as ratings | Per-topic status tracked only on that page |

## Source discipline (publication rules)

- Do **not** reproduce paid standards tables (the body text or tables of MIL-DTL or IEC documents) in this guide or derivatives. Reference and link instead.
- Do **not** copy proprietary catalog tables verbatim. Verify against public manufacturer datasheets and summarize in your own words.
- Standards change. Record the standard identifier, edition/date checked, and manufacturer datasheet revision used for the design.
- Manufacturer, standard, trademark, and connector-family names remain property of their owners; used here for identification and education only.
