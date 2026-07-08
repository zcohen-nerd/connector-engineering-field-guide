# Connector Engineering Field Guide

**📖 Read the guides here → [zcohen-nerd.github.io/connector-engineering-field-guide](https://zcohen-nerd.github.io/connector-engineering-field-guide/)**

Two connector field guides, one site:

- **[Professional / Industrial Connector Field Guide](https://zcohen-nerd.github.io/connector-engineering-field-guide/engineering)** — practical connector selection for rugged, industrial, military-style, and electromechanical systems, written for engineers who are **not** connector specialists.
- **[Hobby Connector Field Guide](https://zcohen-nerd.github.io/connector-engineering-field-guide/hobby)** — a practical map through hobby connector chaos for makers, students, and dev-board projects: identify, choose, buy, crimp, and avoid the traps.

**Status:** v0.8 Beta — Two-Track Guide Structure · *A zcohen-nerd technical guide*

## Why this exists

Picking a connector is harder than it should be. The information you need is scattered across vendor catalogs, datasheets, standards, and tribal knowledge — and the part that looks right on a shelf can still leak, fret loose, or stall your build because a wedgelock or crimp tool never made it onto the BOM.

This guide's core idea: **a connector is a controlled interface between subsystems, not just "a plug with enough pins."** It helps you classify the interface, pick a sane family to investigate first, check the specs that actually matter, dodge the classic traps, and document the result so someone can actually build it.

## Who it's for

- Mechanical engineering interns and junior electromechanical/mechatronics engineers
- Robotics and controls engineers
- Small hardware teams
- Makers and student teams transitioning into professional hardware design

## What's inside

**🧭 [Decision Paths](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths)** — ten scenario walkthroughs that take "I need a plug here" to a documented choice: [industrial sensors](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/industrial-sensor), [rugged Ethernet](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/rugged-ethernet), [internal PCB harnessing](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/internal-pcb-harnessing), [rugged on a budget](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/rugged-on-a-budget), [high-current DC power](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/high-current-dc-power), [sealed feedthroughs](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/sealed-enclosure-feedthrough), [debug/service ports](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/debug-service-port), [defense/rugged external I/O](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/defense-rugged-external-io), [removable machine modules](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/removable-machine-module), and [RF/GPS/radio paths](https://zcohen-nerd.github.io/connector-engineering-field-guide/decision-paths/rf-gps-radio).

**🔍 Deep dives** — [MIL-DTL-38999](https://zcohen-nerd.github.io/connector-engineering-field-guide/07-mil-dtl-38999), [MIL-DTL-26482](https://zcohen-nerd.github.io/connector-engineering-field-guide/mil-dtl-26482), and [M12/M8](https://zcohen-nerd.github.io/connector-engineering-field-guide/08-m12), plus a [14-section core guide](https://zcohen-nerd.github.io/connector-engineering-field-guide/01-what-connectors-do) covering what connectors actually do, anatomy, datasheet reading, selection workflow, and red flags.

**🛠️ [Tools & Templates](https://zcohen-nerd.github.io/connector-engineering-field-guide/tools)** — a selection checklist, a [sourced comparison matrix](https://zcohen-nerd.github.io/connector-engineering-field-guide/tools/connector-comparison-matrix), cable drawing and ICD templates, and a design-review checklist, ready to copy into your own design package.

**📦 [Worked examples](https://zcohen-nerd.github.io/connector-engineering-field-guide/examples)** — including a complete [Connector Selection Packet](https://zcohen-nerd.github.io/connector-engineering-field-guide/examples/connector-selection-packet): requirements → decision matrix → architecture → pinout → BOM → cable notes → ICD → review checklist for a rugged field-robot module.

**📚 Quick help** — [How to search for connectors](https://zcohen-nerd.github.io/connector-engineering-field-guide/00-how-to-search-for-connectors), [What People Forget](https://zcohen-nerd.github.io/connector-engineering-field-guide/what-people-forget), a shared [glossary](https://zcohen-nerd.github.io/connector-engineering-field-guide/glossary), and [quick-reference tables](https://zcohen-nerd.github.io/connector-engineering-field-guide/appendix/quick-reference-tables).

**🔌 Hobby track** — [identifying mystery connectors](https://zcohen-nerd.github.io/connector-engineering-field-guide/hobby/identify-unknown-connector), [JST Is Not One Connector](https://zcohen-nerd.github.io/connector-engineering-field-guide/hobby/jst-is-not-one-connector), [JST-SM and LED strings](https://zcohen-nerd.github.io/connector-engineering-field-guide/hobby/jst-sm-led-connectors), [crimping](https://zcohen-nerd.github.io/connector-engineering-field-guide/hobby/crimping), [marketplace kits](https://zcohen-nerd.github.io/connector-engineering-field-guide/hobby/connector-kits), and [when hobby connectors are not enough](https://zcohen-nerd.github.io/connector-engineering-field-guide/hobby/when-hobby-is-not-enough).

## The one rule the guide never breaks

This guide is educational and judgment-focused. It is **not** a replacement for manufacturer datasheets, applicable standards, customer requirements, or qualification rules — and when it conflicts with any of those, **the datasheet / standard / customer requirement wins**. Ratings in the guide are cited, family-level orientation values, never a substitute for the exact part's datasheet.

## Contributing

Found an error or have a better source? Corrections are very welcome — [open an issue](https://github.com/zcohen-nerd/connector-engineering-field-guide/issues). Ground rules:

- Technical corrections need sources (a public datasheet, standard summary, or equivalent).
- No paid-standards tables, no verbatim catalog tables, no unsourced exact ratings.
- Practical decision logic beats vendor marketing.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full source-discipline rules. For contributors: `Source/connector-engineering-field-guide.md` is the canonical source of truth for the **professional guide's** 14 numbered sections and appendix — factual corrections land there first, and the matching `docs/` pages are refreshed from it. Decision paths, tools, examples, the entire hobby track (`docs/hobby/`), and the other site pages are site-only material under `docs/`.

## License

- **Content** (the guide text, `docs/`, `Source/`, templates, examples): [CC BY 4.0](LICENSE)
- **Code** (site configuration and build files): [MIT](LICENSE-CODE)

When reusing material, credit: *A zcohen-nerd technical guide by Zac Cohen.*

> GitHub may display a single license for the repository based on the `LICENSE` file. The dual-license split above is authoritative — content is CC BY 4.0, code is MIT.
