# Hobby Track — Visual Backlog

> Line-art backlog for the hobby track. For the site-wide **photograph** wishlist (where real photos beat SVGs, with sourcing status), see [photo-backlog.md](photo-backlog.md).

Prioritized visuals for the hobby track (and one shared item). Style: match the existing simple line-art SVGs under `static/img/diagrams/` (white card, `#d0d7de` border, `#102040` navy line work, Arial). Added in v0.9; items 1–2 shipped in the same pass.

| # | Visual | Status | Notes |
|---|---|---|---|
| 0 | **OG/social card update** (`static/img/og-card.png`) | **Done (audit-2026-08)** — source `scripts/assets/og-card.svg`, rendered via `npm run og-card` (`scripts/render-og-card.mjs`, sharp) | Two-track card: "Connector Field Guides" / "Hobby connectors + professional hardware interfaces." / "A zcohen-nerd technical guide" badge, brand tokens only. `themeConfig.image` unchanged; og:image meta verified in the built site. |
| 1 | Pitch measurement diagram | **Done (v0.9)** — `hobby-pitch-measurement.svg` | Embedded in `docs/hobby/pitch.md` |
| 2 | Housing vs contact diagram | **Done (v0.9)** — `hobby-housing-vs-contact.svg` | Embedded in `docs/hobby/buying-mating-parts.md` |
| 3 | JST-XH vs PH vs SH vs GH comparison silhouettes | Partly covered (images pass, 2026-07) | Per-series ID cards now exist (`hobby-jst-xh-id.svg`, `-ph-`, `-sh-`, `-sm-`) with cross-size hints; a single to-scale side-by-side silhouette sheet is still worth doing |
| 4 | JST-SM inline connector diagram | **Done (images pass, 2026-07)** — `hobby-jst-sm-id.svg` | Embedded in `docs/hobby/jst-sm-led-connectors.md` |
| 5 | Good vs bad open-barrel crimp diagram | TODO | Conductor/insulation wings right vs. wrong; pairs with `crimping.md` |
| 6 | Power vs signal connector decision sketch | TODO | Current path vs. signal path visual for `power-vs-signal.md` |
| 7 | LED power injection connector warning diagram | TODO | Data pigtail vs. injection wiring; pairs with `jst-sm-led-connectors.md` |
| 8 | Contact-interface film sketch (shared item, engineering track) | TODO | Two cross-sections: tin contact with oxide film / fretting debris in the contact zone vs. gold-to-gold metal contact; pairs with `docs/low-level-signal-contacts.md` §1/§5 |
| 9 | Qualification-sequence flow sketch (engineering track) | TODO | Sample groups flowing through exposure→re-measure sequences (baseline → exposure group → re-measure), with the "order comes from the governing spec" caption; pairs with `docs/tools/connector-qualification-template.md` §3/§5 |
| 10 | Lifecycle-state flow sketch (engineering track) | TODO | Active → NRND → EOL/LTB window → obsolete, annotated with the decision each state forces (record alternates / stop new designs / bridge-buy-or-redesign / broker-scrutiny); pairs with `docs/lifecycle-and-procurement.md` §1 |

## Images pass (2026-07)

Every family deep page now carries at least one visual: a licensed Commons/Flickr photograph (credited in-caption, see `docs/usage-and-attribution.md`) and/or a line-art ID card in the house style. New ID cards: `hobby-dupont-id.svg`, `hobby-jst-xh-id.svg`, `hobby-jst-ph-id.svg`, `hobby-jst-sh-id.svg`, `hobby-jst-sm-id.svg`, `hobby-xt-id.svg`, `d38999-profile.svg`, `mil26482-bayonet.svg`. New photos under `static/img/photos/`. Remaining gaps (no acceptable licensed photo found): JST-PH, MIL-DTL-26482, Micro-Fit/Micro-D product shots — line art only for now.
