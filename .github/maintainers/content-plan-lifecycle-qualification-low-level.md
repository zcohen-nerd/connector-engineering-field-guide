# Content Plan — Lifecycle & Procurement Integrity · Qualification Plan Template · Low-Level Contact Design

Planning document for three content add-ons, audited against the v0.10 site layout. Companion to [visual-backlog.md](visual-backlog.md) and [photo-backlog.md](photo-backlog.md). Nothing in this file is published content; it is the work plan the implementation PRs execute.

**Status: all three phases shipped (2026-08).** This file is retained as the record of the plan and its per-phase hook tables; remaining follow-ups live where live work belongs — the source-notes §4 backlog (whitepaper hosting, EIA-364 anchors, the J-STD-046 window clause) and visual-backlog rows 8–10.

The three add-ons:

1. **Lifecycle and procurement integrity** — PCN/EOL handling, obsolescence, authorized distribution, counterfeit avoidance, approved alternates, vendor mixing, requalification.
2. **Connector qualification plan/template** — first article, continuity, insulation resistance/hipot, thermal rise, shield bond, vibration, sealing, mating cycles, evidence capture.
3. **Low-level contact design** — dry-circuit behavior, minimum wetting current, gold vs. tin, fretting, when a power-oriented contact is inappropriate for signals.

## Recommended sequence (and why)

| Phase | Add-on | Deliverable | Why this order |
|---|---|---|---|
| 1 | Low-level contact design | **Shipped (2026-08)** — `docs/low-level-signal-contacts.md` + all hooks; see the changelog's Unreleased→Added entry | Most self-contained. Establishes the glossary vocabulary (dry circuit, wetting current, low-level contact resistance) that Phase 2's test matrix references. |
| 2 | Qualification plan/template | **Shipped (2026-08)** — `docs/tools/connector-qualification-template.md` + all hooks; see the changelog's Unreleased→Added entry | Depends only on Phase 1 vocabulary. Its requalification-triggers table is what Phase 3's requalification section links to. |
| 3 | Lifecycle & procurement integrity | **Shipped (2026-08)** — `docs/lifecycle-and-procurement.md` + all hooks; see the changelog's Unreleased→Added entry | Largest integration surface (workflow, checklists, red flags, ICD, both tracks). Landing last means its links to the qualification template and low-level page resolve on day one — no dangling forward references in any phase. |

One PR per phase. Each PR is self-contained: new page, every hook edit, glossary entries, source-notes rows, changelog entry, and a passing build. No phase leaves a link pointing at a page that doesn't exist yet.

## Ground rules every phase follows

These are the repo's existing conventions ([CONTRIBUTING](../CONTRIBUTING.md), [Source Notes](../../docs/appendix/source-notes.md)), restated as a per-PR checklist:

- **Front-matter**: `id`, `title`, `description`, `slug`, `sidebar_label` on every new page, matching existing patterns.
- **Source discipline**: footnote citations (`[^tag]`) with a Sources section; standards named by title and cited at listing/abstract level — never reproduced; no exact numeric values unless cited to a named public source; unresolved claims carry `<!-- TODO: source/verify -->` instead of an invented citation.
- **Template discipline** (Phase 2 especially): templates structure *what to record*, never *what passes*. Acceptance values, test parameters, and sequences come from the governing spec/program — same warning admonition pattern as the [Harness Inspection Checklist](../../docs/tools/harness-inspection-checklist.md).
- **Authority disclaimer**: every new page carries the datasheet/standard/program-wins framing.
- **Integration**: new pages get wired in everywhere their topic already appears (the changelog documents this as the house habit) — sidebar, `engineering-home`, README rosters, category index pages, glossary "See" links, and the source-notes dashboard.
- **Tone**: practical, mentor-style, judgment-focused. Decision logic over vendor language.
- **Validation before finalizing**: `npm run typecheck` and `npm run build` (build catches broken links/anchors). Diagrams, if added, go through `npm run validate-images` (runs in prebuild) and follow the house SVG style; new diagram wishes are logged as rows in [visual-backlog.md](visual-backlog.md) rather than blocking the phase.
- **Changelog**: an `[Unreleased]` → Added entry (plus Changed for hook edits) in `docs/project/changelog.md`, in the repo's detailed style.

---

## Phase 1 — Low-Level Contact Design

### What exists today (audit)

- [§5 Connector Anatomy](../../docs/05-connector-anatomy.md) has the plating table (thick gold / gold flash / tin rows) with dry-circuit caveats — the deepest current treatment, three table rows.
- [§6 Reading Datasheets](../../docs/06-reading-datasheets.md) has one-line rows for plating, contact resistance ("critical for low-level signals; rises with cycles and fretting").
- [§1 What Connectors Do](../../docs/01-what-connectors-do.md) has fretting corrosion in the failure-modes table; the [glossary](../../docs/glossary.md) defines fretting and contact resistance.
- [Anderson Powerpole](../../docs/hobby/anderson-powerpole.md) has the site's best "wrong contact lane" argument (power system, undocumented dry-circuit behavior, "designing on vibes") — but it's family-specific.
- [hobby/power-vs-signal](../../docs/hobby/power-vs-signal.md) covers power-through-signal-connectors; the inverse (signals through power contacts) is not covered anywhere as a general rule.
- **Gap**: no page explains *why* — the film/dry-circuit mechanism, wetting current, gold-vs-tin as a physics decision, or a general test for "is this contact system appropriate for my signal?"

### New page: `docs/low-level-signal-contacts.md`

Professional-track supplemental page (unnumbered, like `deutsch.md` / `micro-fit.md`). Sidebar: `guideSidebar` → Guide category, immediately after `06-reading-datasheets` (it extends §5's plating table and §6's contact-resistance row; sits before the family deep dives that apply it). Suggested `id`/`slug`: `low-level-signal-contacts`.

Outline:

1. **The problem** — a contact that is fine at amps can be unreliable at milliamps/millivolts. Surface films (oxides, sulfides, contamination) dominate at low level; current/voltage that would punch through or fritt the film in a power circuit never does in a signal circuit.
2. **Dry circuit, defined** — operation/measurement at levels too low to break down surface films. Name EIA-364's low-level contact resistance method as the formalized version (method number and its open-circuit-voltage/current conditions cited at listing level, `<!-- TODO: source/verify -->` until checked — believed EIA-364-23, do not assert unverified).
3. **Minimum wetting current** — the relay/switch-world concept: the minimum load that keeps a film-forming contact reliable. Tin needs real current; gold has no practical minimum in clean conditions. Concept sourced to manufacturer relay/contact technical guides (Panasonic/Omron/TE all publish these publicly — verify and cite one; exact mA figures stay out unless cited).
4. **Gold vs. tin, mechanically** — why the §5 table says what it says: gold is noble (no insulating film) and works at low normal force; tin works *through* its oxide via high normal force + wipe forming a gas-tight interface, so it needs force, motion-free design, and non-dry-circuit levels. Gold flash vs. thicker gold (wear-through, porosity, cycle life — deepen the §5 row). **Never mate gold to tin** — dissimilar-metal fretting/galvanic behavior; candidate citations: TE's "Golden Rules: Guidelines for the Use of Gold on Connector Contacts" and its tin-contact companion whitepaper (both historically public; verify current URLs).
5. **Fretting, mechanism and mitigation** — micromotion → oxide debris accumulation → rising/intermittent resistance that "goes away" on re-mate; tin's special vulnerability; mitigations (gold, contact lubricant per manufacturer, anti-vibration coupling, strain relief so cable motion doesn't reach the interface). Links §1's failure table and the glossary entry.
6. **When a power-oriented contact is wrong for signals** — the Powerpole argument generalized into a test: *does the manufacturer publish low-level/dry-circuit contact resistance for this contact system?* If not, mV/µA signals are outside its documented lane. Cover the legitimate mixed case (families whose signal-size contacts are specified for it, e.g. gold-plated mil-circular contacts carrying both power and signal in one insert — kept qualitative) vs. the illegitimate one (tin power contacts "with room left over" carrying encoder/thermocouple/mV lines).
7. **What to check on the datasheet** — short table tying back to §6 (plating + thickness, low-level contact-resistance spec, normal force if published, cycle rating at that plating).
8. **Sources**.

### Hooks into existing pages

| File | Edit |
|---|---|
| `sidebars.ts` | Add after `'06-reading-datasheets'` |
| `docs/05-connector-anatomy.md` | Plating table gains a "full story:" pointer to the new page |
| `docs/06-reading-datasheets.md` | Contact-resistance row gains the pointer |
| `docs/01-what-connectors-do.md` | Fretting row gains the pointer |
| `docs/glossary.md` | New entries: **Dry circuit**, **Wetting current**; extend **Contact resistance** and **Fretting** "See" links to the new page |
| `docs/11-red-flags.md` | New rows: gold mated to tin; dry-circuit/mV signals on tin or power-class contacts |
| `docs/hobby/power-vs-signal.md` | New short section "The other direction: tiny signals through big contacts" + link to the pro page (mirrors the page's existing escalation link pattern) |
| `docs/hobby/anderson-powerpole.md` | "Wrong answer for signal" section links the new page as the general rule |
| `docs/decision-paths/debug-service-port.md`, `industrial-sensor.md`, `motor-feedback-cable.md` | One-line cross-links where low-level signals (mV sensors, encoder lines) are already discussed |
| `docs/engineering-home.md` + `README.md` | Deep-dive/roster lines gain the page |
| `docs/appendix/source-notes.md` | Rows: verified (whatever gets cited), heuristics ("no published low-level spec = outside the lane"), needs-source backlog for any TODO left |
| `docs/project/changelog.md` | Added + Changed entries |
| `.github/maintainers/visual-backlog.md` | New row: film-on-contact-surface / dry-circuit sketch (house line-art style) — nice-to-have, not blocking |

### Definition of done

New page live in sidebar with zero unsourced numeric claims; every hook edit landed; glossary/source-notes/changelog updated; `npm run build` and `npm run typecheck` clean.

---

## Phase 2 — Connector Qualification Plan / Template

### What exists today (audit)

- [Harness Inspection Checklist](../../docs/tools/harness-inspection-checklist.md) covers **build/incoming acceptance** of a finished harness — the closest sibling and the style model (structure without acceptance values; IPC/WHMA-A-620 named as the governing-standard example).
- The [ICD template](../../docs/tools/connector-icd-template.md) has a one-line "Test / inspection requirements" row; the [Rugged Control Box](../../docs/examples/rugged-control-box.md) example points its test requirements at the harness checklist.
- **Gap**: nothing covers **design-level qualification** — proving a connector *configuration* once, before build acceptance ever applies. First article, IR/hipot, thermal rise, vibration, sealing, and durability appear only as scattered vocabulary. The design-review checklist never asks "does qualification evidence exist?"

### New page: `docs/tools/connector-qualification-template.md`

Tools & Templates category, appended after `harness-inspection-checklist` (the two form a design-qualification / build-acceptance pair). Suggested `id`: `connector-qualification-template`. Carries the harness checklist's warning-admonition pattern up front: **this template contains no test values, sequences, sample sizes, or acceptance criteria** — those come from the governing spec (slash sheet, program standard, manufacturer spec) and the page structures the plan and the record, nothing more.

Outline:

1. **What is being qualified** — the configuration block: qualification attaches to the *documented system* (connector + exact contact P/Ns + plating + wire + seal + backshell + tooling + torque), not to a family name. One config table with rev-controlled fields (echoes the evidence-fields convention).
2. **Qualification vs. acceptance** — design-proving once per configuration vs. per-unit verification; when family-level qualification (QPL/QPD listing) already carries the load and program-level evidence is or isn't additionally required. Links the harness checklist as the acceptance-side counterpart.
3. **Plan header** — governing documents (named, at revision), sample allocation, test sequence rationale (sequences matter — durability before sealing changes the result — but the *actual* sequence is the governing spec's, and the template says so instead of prescribing one).
4. **First article** — FAI as drawing-vs-part verification before any performance test; name SAE AS9102 as the aerospace formalization (cited at listing level); record fields for the FAI report.
5. **Test matrix** — one row per requested test, each with *what it verifies*, *typical method family*, and *what to record* — never values. Candidate method citations are the EIA-364 series (the connector test-method family — cite each by number+title at ECIA listing level, verify numbers before publishing; believed: -09 durability, -20 DWV, -21 IR, -23 low-level contact resistance, -28 vibration, -70 temperature rise vs. current — all `<!-- TODO: source/verify -->` until checked):
   - Continuity / wiring correctness
   - Low-level contact resistance (links Phase 1's page for *why* dry-circuit conditions exist)
   - Insulation resistance, then dielectric withstand (hipot) — links the glossary DWV entry ("survivable overvoltage, not working voltage")
   - Thermal rise / current-temperature — links §4's derating-curve section
   - Shield bond — termination resistance at build level vs. transfer-impedance-class methods at design level, kept qualitative
   - Vibration — fixturing, monitoring for discontinuities during (not just after) exposure
   - Sealing — IP verification per IEC 60529 (already cited in the repo) and program immersion/pressure requirements
   - Durability / mating cycles — wear + post-durability re-test of the electrical parameters above
6. **Evidence capture** — the record table: per test, requirement source, method + revision, sample IDs, data location, pass/fail authority, witness/date, deviations; retention statement. This is the section the whole template exists for.
7. **Requalification triggers** — a short table of events that void or reopen evidence (manufacturer change, plating/material change, PCN affecting form/fit/function, tooling change, alternate substitution, new environment). Written self-contained in this phase; Phase 3's lifecycle page will link here.
8. **Sources**.

### Hooks into existing pages

| File | Edit |
|---|---|
| `sidebars.ts` | Add to Tools & Templates after `'tools/harness-inspection-checklist'` |
| `docs/tools/index.md` | New table row (Use it to / Based on: Workflow §4 + Reading Datasheets §6 + harness checklist) |
| `docs/tools/harness-inspection-checklist.md` | Scope note: build acceptance here, design qualification there (two-way link) |
| `docs/tools/design-review-checklist.md` | New row: qualification evidence exists for this exact configuration (or is planned) |
| `docs/tools/connector-icd-template.md` | Test/inspection-requirements row links the template |
| `docs/examples/rugged-control-box.md` | Test-requirements line gains the qualification link beside the harness checklist |
| `docs/glossary.md` | New entries: **First article inspection (FAI)**, **Qualification vs. acceptance testing**; DWV entry gains a "See" link |
| `docs/10-selection-checklist.md` + `docs/tools/connector-selection-checklist.md` | New checkbox: qualification approach identified (family-level QPL vs. program-level plan) — keep the two files in sync as they are today |
| `docs/engineering-home.md` + `README.md` | Tools rosters gain the template |
| `docs/appendix/source-notes.md` | Rows for each standard cited; needs-source rows for any method number left TODO |
| `docs/project/changelog.md` | Added + Changed entries |
| `.github/maintainers/visual-backlog.md` | Optional row: qualification-sequence flow sketch (sample groups through test sequences) |

### Definition of done

Template publishes with **zero acceptance values**; every EIA-364/AS9102/IEC citation verified or explicitly TODO'd; both-direction links with the harness checklist; hooks, glossary, source-notes, changelog landed; build clean.

---

## Phase 3 — Lifecycle & Procurement Integrity

### What exists today (audit)

- [What People Forget](../../docs/what-people-forget.md) → "Documentation and supply" has the lead-time/second-source bullet; [§10](../../docs/10-selection-checklist.md) and the [selection-checklist template](../../docs/tools/connector-selection-checklist.md) have "availability and lead time" + "second source / QPL" checkboxes. That's the entire lifecycle story today.
- [Red Flags §11](../../docs/11-red-flags.md) has "Substituting 'equivalent' parts without qualification" and "Not checking lead time."
- The hobby track owns the clone-vs-genuine problem well ([buying-mating-parts](../../docs/hobby/buying-mating-parts.md), [connector-kits](../../docs/hobby/connector-kits.md), [Micro-Fit's clone warning](../../docs/micro-fit.md)) — authorized-distributor guidance exists there, framed as hobby advice.
- The [MC4 no-brand-mixing caution](../../docs/decision-paths/high-current-dc-power.md) and the [motor-feedback path's cross-vendor verify-flag](../../docs/decision-paths/motor-feedback-cable.md) are the only vendor-mixing coverage.
- **Gap**: no PCN/EOL handling, no obsolescence management, no counterfeit-avoidance discipline, no approved-alternates process, no requalification linkage, and the ICD/design-review templates carry **no lifecycle or alternates fields at all** (verified by audit).

### New page: `docs/lifecycle-and-procurement.md`

Professional-track supplemental page. Sidebar: `guideSidebar` → Guide category, immediately after `'11-red-flags'` (red flags → supply integrity is a natural pairing; both are "how good selections die"). Suggested `id`/`slug`: `lifecycle-and-procurement`.

Outline:

1. **The part you picked will change** — lifecycle states (active → not-recommended-for-new-design → EOL/last-time-buy → obsolete); where the signals appear. Restate the source-hierarchy rule: distributor lifecycle flags are *hints*, the manufacturer notice is the record ([Source Notes → hierarchy](../../docs/appendix/source-notes.md)).
2. **PCN and EOL notices** — what a Product/Process Change Notification is vs. a discontinuance notice; last-time-buy / last-ship dates; the trap that notices flow to *customers of record through authorized channel* — buy through a broker and nobody tells you. A minimal notice-handling loop (who receives, who disposition-reviews, where the record lives). Name JEDEC JESD46/JESD48 as the semiconductor-world formalization that the practice generalizes from — worded carefully as context, not as a connector requirement (`<!-- TODO: source/verify -->` scope).
3. **Obsolescence management** — reactive vs. proactive; design-time hedges the guide already argues for (standards-based multi-source families per [§3](../../docs/03-connector-standards-and-families.md), second sources, QPL/QPD status monitoring via DLA for mil families). Name the public DoD DMSMS guidebook (SD-22) and IEC 62402 (obsolescence management) at listing level as the formal references.
4. **Authorized distribution and counterfeit avoidance** — authorized/franchised vs. independent/broker; traceability and certificate-of-conformance chains; the risk correlation the section turns on: *counterfeit exposure spikes exactly when parts go scarce or obsolete — the moment brokers become tempting*. Name SAE AS5553 (organizations) and AS6081 (distributors) at listing level; GIDEP/ERAI as the alert ecosystems. Deliberately **no** incoming-inspection how-to (out of the guide's lane; the standards own it). Two-way link with the hobby track: clone-vs-genuine is the same problem at hobby stakes.
5. **Approved alternates** — alternates are approved *at design time and recorded*, not improvised when the line is down; what "equivalent" must mean (form/fit/function *and* plating, insert material, qualification basis); QPL slash-sheet families as the case where multi-manufacturer alternates are the design intent — with the caveat that program/customer approval still controls.
6. **Vendor mixing** — mixing manufacturers within one mated pair: designed-in for QPL mil families (still verify program rules), explicitly dangerous for proprietary commercial families and connector "compatibles" — link the existing MC4 caution and motor-feedback verify-flag as the worked instances. Rule: mixing is an ICD-recorded design decision, never a procurement improvisation.
7. **Requalification** — when a PCN, alternate, or vendor change reopens qualification evidence; links Phase 2's requalification-triggers table as the working tool.
8. **Sources**.

### Hooks into existing pages

| File | Edit |
|---|---|
| `sidebars.ts` | Add after `'11-red-flags'` |
| `docs/04-connector-selection-workflow.md` | Step 4 (production reality) gains a lifecycle/PCN/alternates bullet + link |
| `docs/06-reading-datasheets.md` | Table gains a lifecycle-status row (is the part active? datasheet at current rev?) |
| `docs/what-people-forget.md` | "Documentation and supply" gains PCN/EOL-monitoring and approved-alternates bullets |
| `docs/11-red-flags.md` | New rows: no PCN/EOL monitoring on released designs; broker purchase without traceability; mixing manufacturers in a mated pair without verification |
| `docs/10-selection-checklist.md` + `docs/tools/connector-selection-checklist.md` | New checkboxes: lifecycle status checked; alternates identified and documented; authorized source identified (both files, kept in sync) |
| `docs/tools/design-review-checklist.md` | New rows: supply integrity (lifecycle status, alternates on record, sourcing channel) |
| `docs/tools/connector-icd-template.md` | New field: approved alternates (P/N + approval basis) |
| `docs/glossary.md` | New entries: **PCN**, **EOL / last-time buy**, **NRND**, **Obsolescence / DMSMS**, **Authorized distributor**, **Broker**, **Traceability / CoC**, **Requalification** |
| `docs/decision-paths/defense-rugged-external-io.md` | Cross-link (QPL/DMSMS is native territory there) |
| `docs/decision-paths/high-current-dc-power.md` + `motor-feedback-cable.md` | MC4/vendor-mixing mentions gain the link to the general rule |
| `docs/hobby/buying-mating-parts.md` + `when-hobby-is-not-enough.md` | Short "the professional version of this problem" pointers (two-way with §4 of the new page) |
| `docs/hobby/hobby-source-notes.md` | Row only if any new hobby-side claim is added (aim for zero) |
| `docs/engineering-home.md` + `README.md` | Rosters gain the page |
| `docs/appendix/source-notes.md` | Verified rows (SD-22, standards listings), heuristics rows (alternates-at-design-time rule), needs-source rows for TODOs |
| `docs/project/changelog.md` | Added + Changed entries |
| `.github/maintainers/visual-backlog.md` | Optional row: lifecycle-state flow diagram (active → NRND → LTB → obsolete) |

### Definition of done

Page live with all standards cited at listing level or TODO'd; all template/checklist hooks landed (ICD alternates field, design-review supply rows, both selection checklists in sync); hobby two-way links in place; glossary/source-notes/changelog updated; build clean.

---

## Sourcing summary (verify while drafting — never publish unverified)

| Claim area | Candidate public source | Phase |
|---|---|---|
| Low-level/dry-circuit contact resistance method + conditions | EIA-364 method listing (ECIA) — believed -23 | 1, 2 |
| Wetting/minimum-current concept | Manufacturer relay/contact technical guide (Panasonic, Omron, or TE — all publish publicly) | 1 |
| Gold-tin mixed-mating prohibition, gold-flash wear | TE/AMP contact-plating whitepapers ("Golden Rules" + tin companion) | 1 |
| Connector test-method families (durability, DWV, IR, vibration, thermal rise) | EIA-364 series listings — believed -09/-20/-21/-28/-70 | 2 |
| FAI formalization | SAE AS9102 listing | 2 |
| IP verification | IEC 60529 (already cited in repo) | 2 |
| Harness acceptance counterpart | IPC/WHMA-A-620 (already cited in repo) | 2 |
| PCN/discontinuance formalization | JEDEC JESD46 / JESD48 (free public standards) | 3 |
| Obsolescence/DMSMS management | DoD SD-22 guidebook (public), IEC 62402 listing | 3 |
| Counterfeit avoidance | SAE AS5553 / AS6081 listings; GIDEP + ERAI program pages | 3 |
| QPL/QPD status | DLA Land and Maritime QPD pages (already the repo's pattern for mil families) | 3 |

Anything that can't be verified during drafting ships as an honest needs-source row per the house rule — a TODO beats an invented citation.
