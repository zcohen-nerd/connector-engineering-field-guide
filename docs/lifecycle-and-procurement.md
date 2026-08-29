---
id: lifecycle-and-procurement
title: "Lifecycle and Procurement Integrity"
description: "Keeping a released connector interface buildable and trustworthy over years — PCN/EOL handling, obsolescence management, authorized distribution, counterfeit avoidance, approved alternates, vendor mixing, and requalification."
slug: /lifecycle-and-procurement
sidebar_label: Lifecycle & Procurement
---

# Lifecycle and Procurement Integrity

The [selection workflow](04-connector-selection-workflow.md) ends with a released design. The part, unfortunately, doesn't hold still after that: manufacturers change platings and factories, discontinue series, and quote 40-week lead times; distributors run dry; lookalikes appear exactly when the genuine article gets scarce. This page is about keeping a released interface **buildable and trustworthy for years** — the discipline that connects [Production reality (§4, Step 4)](04-connector-selection-workflow.md), [What People Forget](what-people-forget.md), and the [red flags](11-red-flags.md) about lead time and casual substitution into one loop.

## 1. The part you picked will change

Connector products move through a lifecycle, whether or not anyone tells you:

| State | What it means for a released design |
|---|---|
| **Active** | Buy normally — and this is when to record alternates ([§5](#5-approved-alternates)), while there's no pressure |
| **NRND** (not recommended for new designs) | Existing designs are still supported, but the clock is running; new designs should look elsewhere |
| **EOL / discontinuance announced** | A last-time-buy (LTB) window with final-order and final-ship dates — the decision point for a bridge buy, an alternate, or a redesign |
| **Obsolete** | The authorized channel dries up; whatever you buy now needs the scrutiny of [§4](#4-authorized-distribution-and-counterfeit-avoidance) |

![Flow schematic of connector lifecycle states — active, NRND, EOL announced with its last-time-buy window, and obsolete — each annotated with the decision it forces, from recording alternates calmly through bridge-buy-or-redesign to per-lot broker scrutiny](/img/diagrams/lifecycle-states.svg)

*Each state forces a decision, and the cheap ones come early. The LTB window is the last point where the choice is yours rather than the broker market's.*

Two places the state shows up, in [source-hierarchy](06-reading-datasheets.md) order: the **manufacturer's notice** is the record; **distributor lifecycle flags** are useful early hints and nothing more — the same rule as every other distributor-page datum. A released design should also record *when* its datasheets were last checked: a part can go NRND under a design that nobody is watching.

## 2. PCN and EOL notices

Manufacturers communicate change through two instruments:

- A **PCN** (product/process change notification) says the part is changing — material, plating, mold, manufacturing site, marking — while keeping its part number. Most PCNs are harmless to most users. The ones that aren't are the ones that touch *your* qualified configuration: a plating change is a [low-level](low-level-signal-contacts.md) and [requalification](#7-requalification) question, not an FYI.
- A **discontinuance / EOL notice** says the part is going away, and names the last-order and last-ship dates.

The electronics industry formalized both practices jointly — JEDEC, ECIA (the connector industry's own association among them), and IPC publish J-STD-046 for change notification and J-STD-048 for discontinuance — and manufacturers issue notices under their own policies in the same shape, with the same traps.[^jedec] Two traps in particular:

:::warning[Nobody is obligated to chase you]

**Notices flow to customers of record, through the authorized channel.** Buy through a broker, or through an unregistered account, and the notice for your part goes to someone else. And under the industry notification standard, **silence is acceptance**: lack of acknowledgement of a PCN within 30 days of its delivery constitutes acceptance of the change — and even an acknowledged notice is deemed accepted if nothing further is said within the 90-day review period.[^jedec] Read what each notice actually states; suppliers set their own terms, and the clock starts at delivery, not at reading.

:::

The minimal handling loop for a real program — three answers, written down:

1. **Who receives?** A named inbox (not a person who might leave) registered with each manufacturer or authorized distributor on the BOM.
2. **Who dispositions?** Each notice gets reviewed against the released configuration ([§1.5](01-what-connectors-do.md)) and its [qualification evidence](tools/connector-qualification-template.md): no impact / delta evidence needed / alternate or LTB decision needed.
3. **Where is it recorded?** Disposition and rationale in the program record, at revision — the same discipline as every other [evidence field](tools/connector-qualification-template.md).

## 3. Obsolescence management

There are two postures. **Reactive**: the line is down, the part is gone, and the options are whatever brokers have left. **Proactive**: the design assumed from day one that parts die, so obsolescence is an event with a procedure instead of an emergency. The DoD's public DMSMS guidebook (SD-22) and IEC 62402 are the formal treatments — worth knowing about even for programs that will never cite them, because they name the practice.[^dmsms]

The proactive hedges are ones this guide already argues for, now with their lifecycle rationale attached:

- **Standards-based, multi-source families** ([§3](03-connector-standards-and-families.md)) — a part defined by a slash sheet or IEC standard with multiple qualified manufacturers is structurally harder to lose than a single-vendor catalog item.
- **Second source considered** ([§10](10-selection-checklist.md)) — upgraded here to *recorded*: name the second source and its qualification basis at design time ([§5](#5-approved-alternates)).
- **QPL/QPD status watched** for mil families — listings change; the [QPL](glossary.md) that justified the choice is a living document.
- **Lifecycle status as a selection input** ([§6](06-reading-datasheets.md)) — an NRND part is a poor foundation for a new ten-year design no matter how good its datasheet looks.

When an EOL lands anyway, the resolution ladder is the standard one — confirm real demand, evaluate approved alternates, price a bridge/LTB buy against redesign, and record which rung was taken and why. Quantities and economics are program-specific; the point is that the ladder exists *before* the notice does.

## 4. Authorized distribution and counterfeit avoidance

The distribution world has three tiers, and the differences are contractual, not cosmetic:

- **Authorized / franchised distributors** sell under agreement with the manufacturer: parts arrive with full **traceability** to the factory, the manufacturer's warranty applies, and PCN/EOL notices flow ([§2](#2-pcn-and-eol-notices)). This is the default channel for released hardware — the hobby track has been saying the [same thing](hobby/buying-mating-parts.md) about genuine parts all along.
- **Independent distributors / brokers** buy and sell outside that agreement. They serve a real function — sourcing obsolete and allocated parts — and the serious ones operate under counterfeit-avoidance controls (the AS6081 class). But traceability is now something to *verify per lot*, not something the channel guarantees.
- **Marketplace and unknown-provenance sellers** — for released hardware, this tier is not a procurement channel at all.

The structural fact that makes this a lifecycle topic: **counterfeit exposure concentrates exactly where [§1](#1-the-part-you-picked-will-change)–[§3](#3-obsolescence-management) end** — scarce, allocated, and obsolete parts, bought under schedule pressure, from whoever still claims stock. That correlation is the reason the aerospace/defense world built a standards family for it: AS5553 for organizations, AS6081 for independent distribution (AS6496 covers authorized distribution), plus the GIDEP alert system and the ERAI reporting database for sharing what's been caught.[^counterfeit] Deliberately out of this page's lane: incoming counterfeit *inspection* techniques — that is those standards' territory, done by people equipped for it.

For connectors specifically, the everyday version of the problem is less "remarked flatpack" and more the **clone**: the [Micro-Fit-style kit terminal](micro-fit.md), the ["JST-compatible" housing](hobby/jst-is-not-one-connector.md), the GX-style "aviation connector" — parts that imitate a family without its drawing, spring alloy, or plating. The hobby track documents that world as a knowing choice for prototypes; on released hardware, an unchosen clone in the BOM is a counterfeit problem wearing a friendlier name.

## 5. Approved alternates

The time to qualify a substitute is **while the primary is still buyable** — an alternate chosen calmly at design time is engineering; the same decision at 2 a.m. during a line-down is the [red flag §11](11-red-flags.md) about "equivalent" parts. For each alternate, record in the [ICD](tools/connector-icd-template.md):

- The alternate P/N and manufacturer, and **what "equivalent" was verified to mean** — form/fit/function *plus* the quiet dimensions: plating class ([gold-to-tin is a defect](low-level-signal-contacts.md), not a substitution), insert/housing material, seal and wire ranges, **tooling** (an alternate contact with different crimp tooling is a different production line), and qualification basis.
- **Who approved it** and under what evidence — analysis, delta testing, or full [qualification](tools/connector-qualification-template.md).

Mil-spec **QPL families are the institutional version of this**: multiple manufacturers qualified to one slash sheet, interchangeable by design intent — which is much of why [§3](03-connector-standards-and-families.md) favors standards-based families. Program and customer rules still control (some programs approve specific QPL sources, not the list), so even here the alternate is *recorded and approved*, not assumed.

## 6. Vendor mixing

A separate question from alternates: may the **two halves of one mated pair** come from different manufacturers?

- **QPL mil families:** intermateability across qualified sources is the design intent of the specification system — and programs still commonly require verification or restrict sources, so the mix is recorded and approved like any alternate ([§5](#5-approved-alternates)).
- **Standards-based commercial families** (M12-class and similar): cross-vendor mating is normal practice, with the same record-it discipline.
- **Proprietary families and their "compatibles":** no drawing arbitrates the mate. The guide already carries the worked instances — the [MC4-style no-brand-mixing warning](decision-paths/high-current-dc-power.md), the [DEUTSCH-equivalent verify-before-mixing flag](deutsch.md), the clone-kit chaos of the [hobby track](hobby/connector-kits.md). Treat every "compatible with" claim as unverified until tested and recorded.

The rule that covers all three cases: **vendor mixing is a design decision, recorded in the [ICD](tools/connector-icd-template.md) with its verification basis — never a procurement improvisation.** If purchasing can silently change which manufacturer's half arrives, the interface is not configuration-controlled ([§1.5](01-what-connectors-do.md)).

## 7. Requalification

Everything above funnels into one question: **is the qualification evidence still about the parts being built?** A PCN touching form, fit, function, or process; an approved alternate entering production; a manufacturer, site, or plating change; a broker lot with thin traceability — each reopens the evidence question. The [Qualification Plan Template's trigger table (§7)](tools/connector-qualification-template.md) is the working tool: the governing spec and program decide the answer (analysis, delta test, or full re-run), but the question is never optional, and [§1.5](01-what-connectors-do.md)'s rule stands — substitution requires formal change control, not a purchasing footnote.

## Source status

The standards and programs named here — the JEDEC notice lineage, SD-22, IEC 62402, AS5553/AS6081, GIDEP, ERAI — are cited at listing/program level for what they are and the practice they formalize; no requirement text is reproduced, and none of them is asserted as applying to your program (your contract decides). The lifecycle-state model, the notice-handling loop, the alternates-at-design-time rule, and the vendor-mixing rule are engineering judgment, tracked as heuristics in [Source Notes](appendix/source-notes.md).

## Sources

[^jedec]: J-STD-046A, *Customer Notification Standard for Product/Process Changes by Electronic Product Suppliers* — joint JEDEC/ECIA/IPC standard, November 2025 (revision of J-STD-046, July 2016). §4.2.3.1: customers should acknowledge a PCN within 30 days of its delivery, and lack of acknowledgement within 30 days constitutes acceptance of the change; §4.2.3.2: after acknowledgement, lack of additional response within the 90-day period likewise constitutes acceptance. Verified against the standard text (audit 2026-08); clauses paraphrased, no further text reproduced. Free download with registration: <https://www.jedec.org/standards-documents/docs/j-std-046>. Discontinuance counterpart: J-STD-048 (successor to JESD48): <https://www.jedec.org/standards-documents/docs/j-std-048>.

[^dmsms]: SD-22, *Diminishing Manufacturing Sources and Material Shortages (DMSMS): A Guidebook of Best Practices* — the DoD Defense Standardization Program's public DMSMS guidebook, maintained under DoDI 4245.15 (DAU tool page: <https://www.dau.mil/tools/t/SD-22-Diminishing-Manufacturing-Sources-and-Material-Shortages-(DMSMS)-Guidebook>). IEC 62402:2019, *Obsolescence management* — requirements and guidance for an obsolescence management plan (IEC webstore listing: <https://webstore.iec.ch/en/publication/59531>).

[^counterfeit]: Counterfeit-avoidance standards family, named at listing level: SAE AS5553, *Counterfeit Electrical, Electronic, and Electromechanical (EEE) Parts; Avoidance, Detection, Mitigation, and Disposition* — for organizations that integrate EEE parts (<https://saemobilus.sae.org/standards/as5553-counterfeit-electronic-parts-avoidance-detection-mitigation-disposition>; record the current revision when you check); SAE AS6081A (2023), the independent-distribution counterpart (<https://saemobilus.sae.org/standards/as6081a-counterfeit-electrical-electronic-electromechanical-eee-parts-avoidance-detection-mitigation-disposition-independent-distribution>); AS6496 covers authorized distribution. Alert/reporting ecosystems: GIDEP, the Government-Industry Data Exchange Program (<https://www.dsp.dla.mil/Programs/GIDEP/>), and the ERAI reporting database (<https://www.erai.com/>).
