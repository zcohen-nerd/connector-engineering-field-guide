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

![Line diagram of a JST SM wire-to-wire pair: plug with latch arm mating a receptacle with latch window](/img/diagrams/hobby-jst-sm-id.svg)

*ID marks: an inline pair in the middle of a cable — 2.5 mm pitch, positive latch, no PCB side.*

## What you're actually looking at

- **JST-SM is commonly seen as an inline wire-to-wire family/style** in hobby LED wiring — one half on the string, the pigtail half on your controller.
- **The genuine JST SM series is documented:** 2.5 mm pitch, disconnectable crimp wire-to-wire, 3 A AC/DC max (2 A for the 18-circuit version), 250 V, wire range AWG #28–22, per the official JST datasheet.[^jst-sm] **But clone and "compatible-style" parts circulate freely in LED listings and are not covered by those numbers** — latch engagement, contact fit, and dimensions can differ. Verify **pitch, latch geometry, housing shape, contact style, wire gauge, and pin count** against a drawing, not the product title.
- **Many LED pigtails are sold pre-crimped/prewired.** This is usually the sane choice — buying matching prewired pigtail pairs beats hand-crimping small wire-to-wire contacts. See [Crimping](crimping.md).
- **Verify polarity and pinout every time.** LED conventions like power/data/ground are common, but **wire colors and pin order are not guaranteed** — red is not always positive, and data direction matters on addressable strings (they have an input end and an output end).
- **Do not assume waterproofing.** An outdoor-rated LED product does not make its little inline connector sealed — many are open connectors heat-shrunk or left bare. Sealing, if any, has a stated condition. Families that actually state one live in [rugged on a budget](../decision-paths/rugged-on-a-budget.md).
- **Do not assume a current rating from appearance or product title.** "LED connector" is not a rating.

:::warning[LED connector trap]

The small inline connector that came on an LED string may be fine for that string, but that does not automatically make it appropriate for power injection, longer runs, outdoor exposure, or higher-current loads. Calculate current and choose the connector/wire system intentionally.

:::

## Power injection is a different job

Short LED runs can be powered from one point. Longer, higher-current, or lower-voltage runs may need **distributed power feeds** when the calculated worst-case current and round-trip conductor resistance create unacceptable voltage drop or visible color shift.[^led-power] Decide the number and placement of feeds from that calculation — not from a universal length rule — and do not assume the little data-string connector is adequate for the resulting current.

![An LED strip fed by a controller through its small inline pigtail connector, with separate thick injection feeds from an LED power supply landing mid-strip and at the far end through rated connectors, and a crossed-out path showing supply current must not route through the small data-string connector](/img/diagrams/hobby-led-power-injection.svg)

*The split that keeps long runs alive: data (and a short run's power) through the pigtail; injection current through its own rated, sized, protected path.*

For distribution wiring, use deliberately rated power connectors, distribution blocks, ferrules into screw terminals, Wago-style lever connectors, or [XT-class connectors](xt-connectors.md) as appropriate. Size every conductor, connector, and protective device for its branch current. With one supply, protect the source and branches so a short cannot turn small-gauge wire into a fuse. With multiple supplies, keep the LED sections' positive feeds separate so the supplies cannot back-feed each other, while maintaining the common ground/reference required by the data signal.[^led-power] The [power vs signal thinking](power-vs-signal.md) and the engineering track's [high-current DC path](../decision-paths/high-current-dc-power.md) apply the moment real amps show up.

## Before using JST-SM-style connectors in an LED project

- [ ] Pin count
- [ ] Pitch / series (measured, not assumed)
- [ ] Genuine vs clone / unknown
- [ ] Wire gauge
- [ ] Current per pin (genuine JST SM: per the datasheet[^jst-sm]; unknown/clone parts: treat as unrated until verified)
- [ ] Total LED current (calculated, worst-case white)
- [ ] Worst-case voltage drop to the farthest LED
- [ ] Feed-point locations and branch protection
- [ ] If using multiple supplies: common reference verified, positive outputs not paralleled
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

## Sources

[^jst-sm]: JST SM series datasheet, official JST PDF — 2.5 mm pitch, disconnectable crimp wire-to-wire; 3 A AC/DC max (2 A for the 18-circuit version), 250 V, wire range AWG #28–22. Figures apply to genuine JST parts assembled per the datasheet — not to clones or "compatible" parts. <https://www.jst-mfg.com/product/pdf/eng/eSM.pdf>

[^led-power]: Adafruit, *Powering NeoPixels* — short runs can use a single supply point; larger installations distribute power according to current and voltage drop, with roughly 1 m or less from a pixel to a power connection offered as a color-consistency target rather than a universal requirement. For multiple supplies, grounds remain common while each supply's positive output feeds only its assigned LED section to prevent back-feeding. <https://learn.adafruit.com/adafruit-neopixel-uberguide/powering-neopixels>
