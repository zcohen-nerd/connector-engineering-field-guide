---
id: jst-sm-led-connectors
title: "JST-SM and LED String Connectors"
description: "The inline JST-SM-style connector on LED strings and pixels: identification, polarity, clone ambiguity, current limits, and when power needs real connectors."
slug: /hobby/jst-sm-led-connectors
sidebar_label: JST-SM & LED Strings
---

# JST-SM and LED String Connectors

If you've bought an addressable LED string, LED pixels, a strip with a pigtail, or almost any prewired low-voltage lighting harness, you've met this connector: a small inline **wire-to-wire** connector, usually 2-, 3-, or 4-pin, that marketplaces call **JST-SM**, **SM**, "LED connector," "2/3/4-pin LED connector," or just "JST-style."

It deserves its own page because it is everywhere in LED work — and because almost everything about it, from the name to the rating, needs verification.

## What you're actually looking at

- **JST-SM is commonly seen as an inline wire-to-wire family/style** in hobby LED wiring — one half on the string, the pigtail half on your controller.
- **Genuine JST SM series, clone parts, and "compatible style" parts circulate interchangeably** in listings and may not be equivalent — latch engagement, contact fit, and dimensions can differ. Verify **pitch, latch geometry, housing shape, contact style, wire gauge, and pin count** against a drawing, not the product title. *(Exact SM series pitch/ratings: source needed — verify the JST SM datasheet.)*
- **Many LED pigtails are sold pre-crimped/prewired.** This is usually the sane choice — buying matching prewired pigtail pairs beats hand-crimping small wire-to-wire contacts. See [Crimping](crimping.md).
- **Verify polarity and pinout every time.** LED conventions like power/data/ground are common, but **wire colors and pin order are not guaranteed** — red is not always positive, and data direction matters on addressable strings (they have an input end and an output end).
- **Do not assume waterproofing.** An outdoor-rated LED product does not make its little inline connector sealed — many are open connectors heat-shrunk or left bare. Sealing, if any, has a stated condition.
- **Do not assume a current rating from appearance or product title.** "LED connector" is not a rating.

:::warning[LED connector trap]

The small inline connector that came on an LED string may be fine for that string, but that does not automatically make it appropriate for power injection, longer runs, outdoor exposure, or higher-current loads. Calculate current and choose the connector/wire system intentionally.

:::

## Power injection is a different job

Addressable LED runs of any length need power injected in parallel — and that current does **not** belong on the little data-string connector. For power injection and supply wiring, use appropriately rated hardware chosen on purpose: rated power connectors, distribution blocks, ferrules into screw terminals, Wago-style lever connectors, or [XT-class connectors](families.md#xt30-xt60-and-xt90) as appropriate — sized against the *calculated* LED current and verified against the part's documentation, not its title. The engineering track's [power vs signal thinking](power-vs-signal.md) and [high-current DC path](../decision-paths/high-current-dc-power.md) apply the moment real amps show up.

## Before using JST-SM-style connectors in an LED project

- [ ] Pin count
- [ ] Pitch / series (measured, not assumed)
- [ ] Genuine vs clone / unknown
- [ ] Wire gauge
- [ ] Current per pin *(from a datasheet — source needed on typical marketplace parts)*
- [ ] Total LED current (calculated, worst-case white)
- [ ] Voltage
- [ ] Polarity (verified against the controller, not wire color)
- [ ] Data direction, if addressable LEDs
- [ ] Indoor/outdoor exposure
- [ ] Strain relief
- [ ] Waterproofing/sealing condition (mated? heat-shrunk? none?)
- [ ] Mating cycle expectation
- [ ] Prewired lead source (so you can buy the same one again)
- [ ] Spare mating pairs available

Related: [JST Is Not One Connector](jst-is-not-one-connector.md) · [Power vs Signal Connectors](power-vs-signal.md) · [Buying the Right Mating Parts](buying-mating-parts.md).
