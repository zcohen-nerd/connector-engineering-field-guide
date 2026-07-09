# Photo Backlog — where real photographs beat line art

Full-site image audit (2026-07-09, all 66 pages). The images pass of 2026-07 put a visual on every connector *family* page — 11 licensed photos plus 8 house-style line-art ID cards. This document is the follow-up: every place a **real photograph** would materially help, why, and how to source it. Companion to [HOBBY_VISUAL_BACKLOG.md](HOBBY_VISUAL_BACKLOG.md) (line-art backlog + OG card).

## Ground rules (same as the images pass)

- **Never manufacturer marketing photography.** The site publishes publicly; manufacturer photos are copyrighted. See `docs/usage-and-attribution.md` → "Photographs and diagrams."
- **Acceptable sources:** (1) your own bench photos — cleanest option, covered by the repo's CC BY 4.0 docs license, no external credit needed; (2) Wikimedia Commons / Flickr under CC BY, CC BY-SA, CC0, or public domain — verify the license on the file page, credit photographer + license + source link in the caption.
- **Never screenshot marketplace listings** (relevant to `bad-listing-examples.md`) — listing photos are someone's copyright even when the listing is dishonest.
- **Conventions:** files in `static/img/photos/`, kebab-case names, ≤1280 px long edge, JPG. Every image gets descriptive alt text plus an italic caption line; Commons/Flickr captions end with `Photo: [Name](file-page-url), LICENSE, via Wikimedia Commons.`

**Sourcing-status legend:** `BENCH` = photograph your own parts (Commons searched and empty, or the shot is inherently a process shot) · `COMMONS` = an acceptable licensed candidate was found (linked) · `UNSEARCHED` = not yet checked on Commons/Openverse.

---

## P1 — photos are the teaching content (highest impact)

These are the how-to pages. Line art can show *geometry*; it cannot show surface finish, deformation, marketplace reality, or technique — which is exactly what these pages teach.

| Page | Photo(s) needed | Why a photo, not an SVG | Sourcing |
|---|---|---|---|
| [crimping.md](../docs/hobby/crimping.md) | Macro set of open-barrel crimps: one good crimp (bell mouth, conductor wings rolled, insulation wings gripping) beside 2–3 failures (under-crimped, wings on insulation, over-crimped/cracked). Plus a pull test in progress. | Crimp quality *is* visual texture — metal deformation can't be conveyed in line art. This is the single highest-value photo set on the site. | BENCH for the crimp-quality macros. **Partially done 2026-07:** ratcheting-crimper photo (`crimper-ratchet-awg.jpg`, Smial CC BY-SA 2.0 DE) and ferrule spread (`ferrules-and-crimper.jpg`, Simon A. Eugster CC BY-SA 3.0) now on the page |
| [pitch.md](../docs/hobby/pitch.md) | Calipers measuring across a full row of a real 4-pos JST housing, readout visible; ideally one frame each on XH and PH to show 2.5 vs 2.0. | The page's whole argument is "measure, don't eyeball" — showing the technique on a real part closes the loop. The existing SVG (keep it) explains the ÷(N−1) math. | BENCH (Commons has generic caliper shots, none on a connector) |
| [identify-unknown-connector.md](../docs/hobby/identify-unknown-connector.md) + [connector-identification.md](../docs/connector-identification.md) | A worked example: one "mystery connector" shot the way the workflow teaches — top, side, mating face, contact close-up, next to a mm scale. 4-photo strip. | The page instructs readers to photograph connectors; it should model what good ID photos look like. | BENCH |
| [connector-kits.md](../docs/hobby/connector-kits.md) | A real marketplace assortment kit: open box of mixed housings/contacts, plus a macro of two near-identical housings from the same kit that are different series. | The kit-chaos argument lands instantly with one honest photo of the reality being described. | BENCH |
| [buying-mating-parts.md](../docs/hobby/buying-mating-parts.md) + [glossary.md](../docs/glossary.md) / [big-idea.md](../docs/hobby/big-idea.md) | The "three purchases" trio: board header + empty housing + loose crimp contacts **on carrier-strip tape**, one frame. Reusable across all three pages. | Carrier-strip contacts are a genuine surprise to beginners; the housing-vs-contact SVG (keep) shows the concept, the photo proves it. | BENCH |
| [05-connector-anatomy.md](../docs/05-connector-anatomy.md) | A rugged connector disassembled left-to-right: backshell, shell, insert, contacts, seal/grommet. A field-wireable M12 works and is cheap; a 38999 with backshell would be spectacular. | Anatomy is exactly the page where "here are the real parts, in order" beats any diagram. Keep the two existing SVGs as the schematic layer. | BENCH |

## P2 — family/ID gaps and decision-path illustrations

| Page | Photo(s) needed | Why | Sourcing |
|---|---|---|---|
| [jst-ph.md](../docs/hobby/jst-ph.md) | PH 2-pin battery pigtail beside a dev-board PH port (the archetypal 1S LiPo interface). | Only family deep-page with no photo; PH-vs-XH confusion is the page's core trap. | BENCH (Commons empty, searched 2026-07) |
| [jst-sm-led-connectors.md](../docs/hobby/jst-sm-led-connectors.md) | A real LED-string pigtail with its inline SM-style pair, both halves. | Page currently has line art only; "you've met this connector" deserves the actual sight. | BENCH (Commons empty for SM wire-to-wire) |
| [families.md](../docs/hobby/families.md) servo capsule + [power-vs-signal.md](../docs/hobby/power-vs-signal.md) | 3-pin servo lead (JR/Futaba-style) plugged onto header pins; signal/power/ground wire colors visible. | Robotics-heavy audience; servo leads are the most miswired hobby connector class. | **DONE 2026-07** — `servo-sg90-lead.jpg` (SG90 with lead + plug, Suyash Dwivedi CC BY-SA 4.0) on the families capsule. A plugged-onto-header shot remains a BENCH nice-to-have |
| [mil-dtl-26482.md](../docs/mil-dtl-26482.md) | Bayonet circular plug + receptacle showing the three studs and coupling-ring ramps. | Line art only today; the bayonet-vs-thread distinction is this page's identity. | BENCH / borrowed part (Commons empty, searched 2026-07) |
| [internal-pcb-harnessing.md](../docs/decision-paths/internal-pcb-harnessing.md) + §12 table | Molex Micro-Fit 3.0 mated pair (latch + TPA visible); JST-GH housing showing the latch arm. | The two most-recommended "upgrade from Dupont" families have no imagery anywhere on the site. | BENCH (Commons empty for both, searched 2026-07) |
| [03-connector-standards-and-families.md](../docs/03-connector-standards-and-families.md) or [debug-service-port.md](../docs/decision-paths/debug-service-port.md) | Micro-D pair — the .050" pitch density next to a normal D-sub for scale. | Micro-D is described repeatedly but never shown; density is its whole point. | BENCH / work part (Commons empty, searched 2026-07) |
| [rugged-on-a-budget.md](../docs/decision-paths/rugged-on-a-budget.md) | Deutsch DT 2- or 4-way wedgelock pair, close-up with the orange wedge visible; ideally one half opened showing wire seals. | The path's headline family; the §3 J1939 photo is an HD-series cousin, not DT. DT parts cost a few dollars. | BENCH (Commons search returns junk, 2026-07) |
| [rf-gps-radio.md](../docs/decision-paths/rf-gps-radio.md) | SMA mated pair + BNC male — two photos or one grouping. | RF path is text-only; connector recognition matters here (SMA vs RP-SMA trap). | **DONE 2026-07** — `sma-vs-rpsma.jpg` (Fckw kyle, PD) and `bnc-male.jpg` (Krzysztof Burghardt, CC BY-SA 3.0) on the page |
| [rugged-ethernet.md](../docs/decision-paths/rugged-ethernet.md) | M12 X-coded beside an 8P8C/RJ45 plug. | The "which one for GbE outdoors" comparison in one frame. | **DONE 2026-07** — `m12x-vs-rj45.webp` (Anordal, CC BY-SA 4.0); amateur lighting, replace if a cleaner shot appears |
| [families.md](../docs/hobby/families.md) barrel-jack capsule | 5.5 × 2.1/2.5 mm barrel plug + panel jack pair. | "Common sizes, not a standard" lands better with the real pair. | **DONE 2026-07** — `barrel-jack-pair.jpg` (Martin Meise, CC BY-SA 3.0) |
| [families.md](../docs/hobby/families.md) terminals capsule | WAGO-style lever connector with stranded wire; wire ferrules loose + crimped. | Terminal hygiene is hard to draw convincingly. | **DONE 2026-07** — `wago-221-lever.jpg` (Lucasbosch, CC BY-SA 4.0) on the capsule; ferrule spread went to crimping.md. PCB screw terminal itself: BENCH (Commons weak) |
| [families.md](../docs/hobby/families.md) IDC capsule | 2×5 IDC ribbon connector face + cable. | Quick recognition win. | **DONE 2026-07** — `idc-10-ribbon.jpg` (Retired electrician, CC0) |
| [what-people-forget.md](../docs/what-people-forget.md) | Flat-lay of the "forgotten BOM": dust caps, backshell, loose contacts, crimp tool + positioner, heat-shrink, torque tool. | The page is a list of physical things people forget to order — show them. | BENCH |
| [sealed-enclosure-feedthrough.md](../docs/decision-paths/sealed-enclosure-feedthrough.md) | Jam-nut receptacle with O-ring on a panel cutout, from the gasket side. | The O-ring/panel interface is the whole trap discussed. | UNSEARCHED / likely BENCH |
| [02-major-connector-categories.md](../docs/02-major-connector-categories.md) | One "family portrait" spread: circular, rectangular, D-sub, RF, power, board-to-wire connectors in a single frame with scale. | An orientation page; one group photo does what 1,000 words of category prose can't. | BENCH flat-lay for the full portrait. **Partially done 2026-07:** `rugged-circular-cir-pair.jpg` (ITT Cannon/VEAM CIR pair, public domain) now illustrates the circular category |
| [power-vs-signal.md](../docs/hobby/power-vs-signal.md) | A genuinely heat-damaged/browned connector (melted housing, discolored contact). | The consequence photo; nothing motivates derating like one melted housing. | BENCH if you have a casualty; UNSEARCHED on Commons ("melted connector") |

## P3 — polish / nice-to-have

| Page | Photo(s) | Notes | Sourcing |
|---|---|---|---|
| [xt-connectors.md](../docs/hobby/xt-connectors.md) | XT30/60/90 trio in one frame showing the size steps | Complements the existing XT60 photo + ID card | BENCH (cheap parts) |
| [jst-xh.md](../docs/hobby/jst-xh.md) | Cleaner XH header + housing on neutral background | Current charger-port photo is warm-lit and cropped | BENCH |
| [debug-service-port.md](../docs/decision-paths/debug-service-port.md) | Tag-Connect cable/footprint or a recessed sealed USB-C service port | Niche but distinctive | BENCH (Commons empty for Tag-Connect) |
| [bad-listing-examples.md](../docs/hobby/bad-listing-examples.md) | Staged "bad listing photo" of your own parts (deliberately unhelpful angle) beside a corrected ID-quality shot | Never screenshot real listings — stage it with own parts | BENCH |
| [11-red-flags.md](../docs/11-red-flags.md), [examples/*](../docs/examples/index.md) | Cross-reference the crimp-failure photos from the P1 crimping set | No new shots needed — reuse | — |

## Where line art should stay (do not "upgrade" these to photos)

Schematic content is *better* served by the house SVGs — replacing these with photos would lose information:

- **Keying/coding geometry:** `d38999-keying-positions.svg`, `m12-coding-faces.svg` — photos can't show a keyway *family* at once.
- **Measurement math:** `hobby-pitch-measurement.svg` (÷ N−1) — pairs with, not replaced by, the caliper photo.
- **Concept schematics:** `hobby-housing-vs-contact.svg`, `pin-socket-plug-receptacle.svg`, `backshell-exploded.svg`, `38999-contact-sizes.svg`.
- **The 8 family ID cards** — they annotate what a photo can't (pitch arrows, trap callouts); pages should carry photo + card together where both exist.
- Tools/templates, checklists, source-notes, appendix tables, decision-path flows: text/table pages; no images warranted.

## Bench-photo shooting guide

One session with a parts drawer covers most of the BENCH items above:

1. Plain white or light-gray background (paper sweep), diffuse daylight or two lamps — avoid the warm single-bulb look.
2. Include a **mm scale or calipers** in at least one frame per subject; scale is half the identification value.
3. For each connector: mating face, side profile, and (if wire-to-board) the header — sharp focus on the mating face.
4. Shoot larger than needed and crop; export ≤1280 px JPG into `static/img/photos/`.
5. Macro crimp shots want the most light and a tripod/rested elbow; get closer than feels necessary.
6. Own photos need no external credit line — they fall under the repo's CC BY 4.0 documentation license (caption them normally, no "Photo:" credit required).

## Status snapshot (2026-07-09, updated after the Commons harvest pass)

- Pages with photos: 17 — Dupont, XH, SH/Qwiic, JST-hub ×2, XT60, 38999, M12, §3 ×2, high-current path, plus newly: §2 (CIR circular pair), crimping ×2 (ratchet crimper, ferrules), RF path ×2 (SMA/RP-SMA, BNC), rugged Ethernet (M12X vs RJ45), families ×4 (servo SG90, WAGO, barrel pair, IDC-10).
- Pages with line-art only: PH, SM/LED, 26482, plus all schematic pages above.
- Confirmed Commons gaps after two search passes (2026-07): JST-PH, JST-GH, JST-SM wire-to-wire, Micro-Fit 3.0, Micro-D, MIL-DTL-26482 bayonet, Deutsch DT (searches return junk), Tag-Connect, open-barrel crimp-quality macros, caliper-on-connector, marketplace kit shots, carrier-strip contacts, disassembled-connector anatomy, jam-nut/O-ring, melted-connector consequence shot. **These are the bench-photo list.**
- Also vetted and rejected: MS/5015-style Amphenol 16-pin (PD, usable spare but redundant with the CIR pair), RC-trainer cables (marginal for servo), Knipex ferrule 4-step sequence (dark; redundant with ferrule spread).
