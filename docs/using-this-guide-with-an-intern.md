---
id: using-this-guide-with-an-intern
title: "How to Use This Guide with an Intern"
description: "A mentor's playbook: sequence the 30-day plan, exercises, decision paths, and templates into a connector-engineering onboarding program with real checkpoints."
slug: /using-with-an-intern
sidebar_label: Using with an Intern
---

# How to Use This Guide with an Intern

This site reads fine solo, but it was built with a second use in mind: handing a mechanical or mechatronics intern their first real electromechanical-interface work without either drowning them or letting them cargo-cult a connector choice. This page is the mentor's side of that: what to assign, in what order, and what to check.

The parts you'll orchestrate: the [30-day learning plan](14-thirty-day-learning-plan.md) (the spine), the [hands-on exercises](13-hands-on-exercises.md) (the reps), the [decision paths](decision-paths/index.md) (guided practice), the [templates](tools/index.md) (the deliverables), and [Source Notes](appendix/source-notes.md) (the discipline — see below, it's the most transferable thing here).

## Pick the entry point honestly

- **Intern coming from Arduino/maker projects?** Start them in the [Hobby track](hobby/index.md) for a day — [The Big Idea](hobby/big-idea.md), [JST Is Not One Connector](hobby/jst-is-not-one-connector.md), and [Hobby or Professional?](hobby-or-professional.md). It converts "I've wired stuff before" confidence into family-and-datasheet thinking fast, using hardware they recognize.
- **Intern going straight onto engineered hardware?** Start at [What Connectors Actually Do](01-what-connectors-do.md) and run the plan below.

## The four-week shape

Follow the [30-day plan](14-thirty-day-learning-plan.md) — it already sequences the reading. What it doesn't say is what the *mentor* does. Suggested overlay:

| Week | They read/do | They produce | You check |
|---|---|---|---|
| 1 — Fundamentals & anatomy | Plan week 1; [Identification Workflow](connector-identification.md) on 3 connectors from your own lab/shop | A one-page ID writeup per connector | Did they identify by *family + drawing*, or by vibes? ([Exercise](13-hands-on-exercises.md) habits start here) |
| 2 — Industrial | Plan week 2; the [Industrial sensor](decision-paths/industrial-sensor.md) and [Rugged Ethernet](decision-paths/rugged-ethernet.md) paths against a real or retired interface | [Comparison matrix](tools/connector-comparison-matrix.md) (Exercise 2) | Are criteria requirement-driven, or picked to justify the answer? |
| 3 — Military / rugged | Plan week 3; Exercise 3 (decode three real 38999 part numbers) with the [decode worksheet](tools/38999-decode-worksheet.md) | Filled worksheets, catalog cited | Did they pair shell size with arrangement, and record the catalog revision? |
| 4 — Design & documentation | Plan week 4; Exercises 4–7 on one interface you actually care about | Pinout, [cable drawing](tools/cable-drawing-template.md), [ICD entry](tools/connector-icd-template.md) | Run [Exercise 8](13-hands-on-exercises.md) — a risk review — on *their* packet, using the [design review checklist](tools/design-review-checklist.md) |

Compress or stretch as your program allows — the sequence matters more than the calendar.

## Teach the Source Notes discipline explicitly

The most portable thing on this site is not connector trivia; it's the habit codified in [Source Notes](appendix/source-notes.md): every technical claim is **verified against a named source, marked as judgment, or flagged as needing a source** — and example values are never design authority. Make the intern classify their own claims that way in every deliverable (the templates have evidence fields for exactly this). An intern who internalizes "which bucket is this number in, and what document controls it?" has learned something that outlives connectors.

Practical drill: when their pinout or matrix quotes a rating, ask *"verified, judgment, or example?"* and *"which document, which revision?"* — the same two questions the [source hierarchy](06-reading-datasheets.md) trains.

## Checkpoint questions that reveal understanding

Use these in week-end conversations; they're diagnostic, not gotcha:

- "What does this connector's *unmated* state have to survive?" ([What People Forget](what-people-forget.md))
- "What's the difference between the plug/receptacle split and the pin/socket split on this interface?" ([§5 Anatomy](05-connector-anatomy.md))
- "Which document wins if the datasheet and this guide disagree?" (If they hesitate, reread the [disclaimer](engineering-home.md) together.)
- "Who crimps this, with what tool, inspected to what standard?" ([§4 production reality](04-connector-selection-workflow.md))
- "Show me the trap on this page you'd most likely have fallen into." ([Red Flags §11](11-red-flags.md))

## Common intern failure modes this guide preempts

- **Choosing by catalog photo** → the [Identification Workflow](connector-identification.md) and the hobby track's [listing traps](hobby/bad-listing-examples.md).
- **Treating example values as ratings** → [Source Notes](appendix/source-notes.md), relentlessly.
- **A perfect connector nobody can build** → [§4's production-reality step](04-connector-selection-workflow.md).
- **Undocumented interfaces** → every exercise ends in a template for a reason; "done" means documented ([Examples](examples/index.md) show the target).

:::note

This page orchestrates material that lives elsewhere on the site; it introduces no technical claims of its own. The pages it links carry the sources — and the datasheet, applicable standard, and program requirements always win.

:::
