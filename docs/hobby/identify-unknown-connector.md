---
id: identify-unknown-connector
title: "How to Identify an Unknown Connector"
description: "A practical workflow for identifying mystery connectors — photos, position count, pitch measurement, connection type, latch, contacts, and drawing comparison."
slug: /hobby/identify-unknown-connector
sidebar_label: Identify an Unknown Connector
---

# How to Identify an Unknown Connector

The mystery connector — on a salvaged board, a prewired LED string, a drone part, a used printer — is the classic hobby problem. Here is the workflow that actually resolves it, instead of an hour of scrolling lookalike photos.

## The workflow

1. **Take clear photos from multiple angles** — mating face, side (latch profile), wire entry, and next to a ruler. You'll reuse them for searching and for asking others.
2. **Count positions.** Total cavities, including unloaded ones.
3. **Measure the pitch with calipers** — center-to-center between adjacent contacts. Measure across the full row and divide, per [Pitch: The Number That Saves You](pitch.md).
4. **Determine the connection type:**
   - **wire-to-board** — housing on wires, header on a PCB
   - **wire-to-wire** — two cable halves mate in-line
   - **board-to-board** — stacking/mezzanine, no wires
   - **panel/feedthrough** — mounted through an enclosure wall
5. **Identify the latch/friction/keying** — positive snap latch? friction only? polarizing bump or chamfer? Latch geometry separates lookalike families.
6. **Identify whether the contacts are pins or sockets** — look into the mating face.
7. **Separate housing gender from contact gender.** A "female" housing can hold pin contacts and vice versa — families define both independently, and listings confuse them constantly.
8. **Measure housing dimensions** — overall width/height/depth help discriminate between families with the same pitch.
9. **Look for molded markings** — manufacturer logos, series letters, or cavity numbers molded into the plastic are the fastest positive ID.
10. **Search by pitch + positions + type + latch** — not by what it looks like.
11. **Compare manufacturer drawings, not just photos.** Photos lie about scale; a dimensioned drawing either matches your calipers or it doesn't.
12. **Buy test samples before committing** to a bulk order or wiring a whole project.

## Search query examples

```text
2 pin 2.0mm locking wire to board connector
3 pin JST-SM LED connector
4 pin 1.25mm JST GH cable
2.54mm dupont housing crimp terminal
JST PH 2 pin battery connector datasheet
```

:::warning[Search results can be wrong]

Marketplace listings routinely mislabel series, round pitches, and reuse stock photos of different connectors. Treat search results as candidates to verify against a manufacturer drawing — never as identification.

:::

Related: the [shared identification workflow](../connector-identification.md) (the short version both tracks use) · [The Big Idea](big-idea.md) · [Common Hobby Connector Families](families.md) · the engineering track's [How to Search for Connectors](../00-how-to-search-for-connectors.md) for the datasheet-driven version of this skill.
