---
id: big-idea
title: "The Big Idea: Connector Families, Not Connector Vibes"
description: "Hobby wiring goes wrong when connectors are chosen by looks. A connector family is a system — housing, contacts, pitch, latch, tooling — defined by a drawing."
slug: /hobby/big-idea
sidebar_label: The Big Idea
---

# The Big Idea: Connector Families, Not Connector Vibes

Most hobby connector pain comes from one habit: choosing connectors by **vibes** — "it looks like the one on the board," "it fits," "the listing said JST." This page replaces that habit with one idea that makes everything else in this guide click.

## A connector is a family, not a shape

A real connector **family** (or series) is a system defined by a manufacturer drawing:

- a **housing** with a specific pitch, latch geometry, and keying,
- matching **contacts** (terminals) with a specific wire-gauge and insulation range,
- specified **tooling** to crimp those contacts,
- a defined **mating part** — the other half, from the same family,
- and published limits — current, voltage, temperature, mating cycles — that apply to *that* system, assembled correctly.

Pick any one piece from a different family and the system quietly breaks: contacts that back out of the housing, latches that don't quite lock, "fits but intermittent" joints that fail when the project is on a shelf across the room.

## Why vibes fail

- **Lookalikes abound.** Several families share a near-identical white-nylon-with-a-latch aesthetic at slightly different pitches. Your eyes cannot tell 2.0 mm from 2.5 mm across a photo — [calipers can](pitch.md).
- **Marketplace names are folk names.** "Dupont" is a community name for a 0.1-inch header ecosystem; ["JST" is a manufacturer with dozens of series](jst-is-not-one-connector.md), not one connector. Listings use both loosely.
- **Fit is not compatibility.** A contact that slides into the wrong housing may not latch, may not seat to the right depth, and may not make the designed contact pressure. It will often *work at first*.
- **Clones blur the boundaries.** "JST-style" or "compatible" parts may mate with genuine parts, mate with each other, or neither — with no drawing to tell you which.

## The habit that replaces vibes

Before buying or committing: resolve the connector to a **family + series**, pull the **drawing or datasheet**, and confirm **pitch, positions, latch, housing P/N, contact P/N, wire range, and the mating part**. That's the whole trick. The [identification workflow](identify-unknown-connector.md) walks it step by step.

:::note

This is the same core mental model as the [engineering track](../01-what-connectors-do.md): a connector is a *controlled interface*, not "a plug with enough pins." Hobby projects just meet it in cheaper packaging.

:::
