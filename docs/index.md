---
id: index
title: Connector Field Guides
description: "Two connector field guides — a hobby track for makers and dev-board projects, and a professional track for engineered, fielded, production hardware."
slug: /
sidebar_label: All Guides
---

# Connector Field Guides

*Practical connector selection without the folklore, forum archaeology, and "looks close enough" nonsense.*

Two guides, one site. Pick the one that matches what you're building. They cross-link where it matters, and they both follow the same rule: **the datasheet, standard, and requirement always win over anything written here.**

:::note[v1.0 — Source-Verified Release]

The source-verification milestone shipped with v1.0; the guide is continuously reviewed after it. [Source Notes](appendix/source-notes.md) is the standing record of what is verified, what is engineering judgment, and what you still owe your own hardware. Corrections — with sources — are welcome.

:::

<div class="cn-home-gallery" aria-label="Examples of connector topics covered by the field guides">
<a class="cn-home-gallery-item" href="hobby/families">
<img src="img/photos/zif-connector-ffc.jpg" alt="Two flat-flex cables with exposed contacts in front of matching ZIF board connectors" />
<span class="cn-home-gallery-copy"><strong>Board-level</strong><small>FFC / ZIF identification</small></span>
<span class="cn-home-gallery-credit">Zeroping · CC0</span>
</a>
<a class="cn-home-gallery-item" href="decision-paths/micro-d">
<img src="img/photos/micro-d-and-de9-comparison.jpg" alt="A compact Micro-D connector beside a larger DE-9 connector for scale" />
<span class="cn-home-gallery-copy"><strong>Compact, high-density</strong><small>Micro-D selection</small></span>
<span class="cn-home-gallery-credit">Andree.sk · CC BY-SA 4.0</span>
</a>
<a class="cn-home-gallery-item" href="decision-paths/industrial-sensor">
<img src="img/photos/m12-m8-family.jpg" alt="M12 and M8 industrial sensor cordsets and panel receptacles" />
<span class="cn-home-gallery-copy"><strong>Industrial sensor</strong><small>M12 / M8 interfaces</small></span>
<span class="cn-home-gallery-credit">Riep. · CC BY-SA 4.0</span>
</a>
<a class="cn-home-gallery-item" href="decision-paths/sealed-enclosure-feedthrough">
<img src="img/photos/cable-gland-disassembled.webp" alt="A disassembled cable gland showing its body, seal, washer, and compression nut" />
<span class="cn-home-gallery-copy"><strong>Sealed feedthrough</strong><small>Cable-entry construction</small></span>
<span class="cn-home-gallery-credit">Leotard · CC0</span>
</a>
</div>

<p class="cn-home-gallery-note">Four interfaces, four different jobs. Follow a panel into the relevant guide, or see the complete <a href="image-attributions">image attribution register</a>.</p>

<div class="cn-card-grid">
<div class="cn-card cn-card--hobby">
<div class="cn-card-kicker">Maker / Hobby</div>
<div class="cn-card-title">Hobby Connector Field Guide</div>
<div class="cn-card-row">For makers, students, Arduino/Raspberry Pi/ESP32/Pico projects, 3D printers, RC, LEDs, sensors, small robots, home automation, and prototype wiring.</div>
<div class="cn-card-row"><span class="cn-card-label">Learn to</span> identify mystery connectors · untangle JST-family confusion · choose connectors for sensors, LEDs, batteries, servos, and dev boards · buy the right mating parts · crimp without losing your mind · know when hobby connectors are not enough</div>
<a class="cn-card-button" href="hobby">Enter the Hobby Guide →</a>
</div>
<div class="cn-card cn-card--engineering">
<div class="cn-card-kicker">Engineering / Production</div>
<div class="cn-card-title">Professional / Industrial Connector Field Guide</div>
<div class="cn-card-row">For electromechanical systems, industrial equipment, robotics platforms, sealed enclosures, released harnesses, design reviews, and production hardware.</div>
<div class="cn-card-row"><span class="cn-card-label">Covers</span> requirements and ratings · environment and derating · standards and qualification · cable drawings and connector ICDs · tooling and workmanship · lifecycle and field-service risk</div>
<a class="cn-card-button" href="engineering">Enter the Engineering Guide →</a>
</div>
</div>

## Not sure?

| Question | Hobby guide | Engineering guide |
|---|---|---|
| Is this a breadboard/dev-board project? | Yes | Maybe |
| Is this going outside, on a vehicle, or into fielded equipment? | Maybe | Yes |
| Is failure annoying but safe? | Yes | Maybe |
| Is failure expensive, dangerous, or customer-facing? | No | Yes |
| Are you buying connector kits online? | Yes | Maybe |
| Are you making released drawings, ICDs, or harness documentation? | No | Yes |
| Does someone else need to build, inspect, or maintain it? | Maybe | Yes |

Still torn? Read [Hobby or Professional?](hobby-or-professional.md). The real dividing line is what failure costs, where the hardware lives, and how tightly it has to be documented—not how fancy the connector looks.

Both tracks share the [Source Notes](appendix/source-notes.md)—where the site shows its work—the [Glossary](glossary.md), and the [Connector Identification Workflow](connector-identification.md).

Onboarding someone? [How to Use This Guide with an Intern](using-this-guide-with-an-intern.md) turns the reading, exercises, and templates into a four-week plan you can actually run.
