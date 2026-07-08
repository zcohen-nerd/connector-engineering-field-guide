---
id: jst-sh-qwiic-stemma
title: "JST-SH, Qwiic, and STEMMA QT"
description: "The 1.0 mm JST SH series and the Qwiic/STEMMA QT I2C ecosystems built on it — what the conventions actually guarantee, and why Grove is a different world."
slug: /hobby/jst-sh-qwiic-stemma
sidebar_label: JST-SH / Qwiic / STEMMA QT
---

# JST-SH, Qwiic, and STEMMA QT

## What people call it

SH, "1 mm JST," Qwiic cable, STEMMA QT cable, "the little I2C connector."

## What it actually is

Two things stacked: the genuine JST **SH series** — 1.0 mm-pitch crimp **wire-to-board** family, 1.0 A AC/DC (AWG #28) / 50 V per the official JST datasheet[^jst-sh] — and the **vendor ecosystems built on it**. **Qwiic** (SparkFun) and **STEMMA QT** (Adafruit) are *ecosystem conventions*, not just "any 4-pin JST": both standardize a 4-pin 1.0 mm JST SH connector (SparkFun cites the SHR-04V-S-class housing) with a fixed I2C pinout, and the two are cross-compatible by design.[^qwiic][^stemmaqt]

## Where it shows up

Tiny I2C sensor/driver boards, solder-free sensor chains on dev boards, and increasingly as the standard "just works" I2C port on hobby electronics.

## How to identify it

1.0 mm pitch — genuinely tiny; distinguish from **GH** (1.25 mm, has a positive latch arm; SH is friction-fit) and from Molex PicoBlade-style 1.25 mm lookalikes. Four positions + the ecosystem branding usually means Qwiic/STEMMA QT. **Grove (Seeed) is a different ecosystem** on its own larger 4-pin 2.0 mm connector — and, unlike Qwiic/STEMMA QT's single fixed I2C convention, **Grove's pinout varies by port type**: the two signal pins carry SCL/SDA on an I2C port, RX/TX on a UART port, and D0/D1 or A0/A1 on digital/analog ports, with power and ground fixed on the other two.[^grove] A cable moved between ecosystems — or between the wrong Grove port types — puts signals where the board doesn't expect them; verify the vendor pinout and connector documentation before mixing.

## Plain STEMMA is not STEMMA QT

Adafruit runs *two* connector conventions with confusingly similar names, and they sit exactly on this guide's favorite trap — the 2.0 mm vs 1.0 mm pitch split. **Plain STEMMA** uses the larger **JST PH (2.0 mm)**: 4-pin PH for I2C and 3-pin PH for analog/digital/PWM signals. **STEMMA QT** is the smaller **JST SH (1.0 mm)** 4-pin I2C convention this page is mostly about, created for boards where the larger PH connector won't fit.[^stemma] Both conventions specify 3–5 V device power, and Adafruit's 3-pin STEMMA ports add a protection circuit for 3.3 V controllers[^stemma] — but a PH cable will never mate an SH port, so [measure the pitch](pitch.md) first and trust the name second. Plain STEMMA's connector is the same JST PH covered on [its own page](jst-ph.md).

## What to buy

**Pre-made cables, full stop.** SH contacts are the hardest common hobby crimp there is ([crimping](crimping.md)); Qwiic/STEMMA QT cables from the ecosystem vendors exist precisely so you never crimp one. Buy spares in the lengths you need.

## Common traps

- **Power through the sensor chain.** These are signal-level connectors on 3.3 V I2C ecosystems[^qwiic] — do not pull meaningful power through them unless the ecosystem/part documentation explicitly supports the current ([power vs signal](power-vs-signal.md)).
- **Pinout by assumption.** The ecosystems define a fixed pinout — take it from the SparkFun/Adafruit documentation,[^qwiic][^stemmaqt] not from wire colors on a third-party cable.
- **"Any 4-pin 1 mm JST will do."** A bare SH pigtail is not automatically wired to the Qwiic/STEMMA QT convention.
- **Fragility** — the housings and cables are small; strain relief is your problem.

## Source status

SH series figures: official JST datasheet.[^jst-sh] Qwiic/STEMMA QT conventions: the vendors' own documentation.[^qwiic][^stemmaqt] Grove specifics remain qualitative here (verify Seeed's documentation). See [Hobby Source Notes](hobby-source-notes.md).

## When to move to the engineering track

When the "sensor chain" becomes a fielded instrument: vibration, sealing, or documented harnesses — [When Hobby Connectors Are Not Enough](when-hobby-is-not-enough.md) and the [industrial sensor path](../decision-paths/industrial-sensor.md) (where M8/M12 do this job with threads and seals).

## Sources

[^jst-sh]: JST SH series datasheet, official JST PDF — 1.0 mm pitch, crimp wire-to-board; 1.0 A AC/DC (AWG #28), 50 V, wire range AWG #32–28. Genuine-part figures only. <https://www.jst-mfg.com/product/pdf/eng/eSH.pdf>

[^qwiic]: SparkFun, *Qwiic Connect System* — 4-pin 1 mm JST SH-based polarized I2C cabling (SHR-04V-S-class housing), 3.3 V ecosystem, fixed pinout per SparkFun's documentation. <https://www.sparkfun.com/qwiic>

[^stemmaqt]: Adafruit, *STEMMA QT technical specs* — 4-pin JST SH 1.0 mm connectors for I2C; connector and pin ordering identical to Qwiic, cross-compatible with Qwiic devices. <https://learn.adafruit.com/introducing-adafruit-stemma-qt/technical-specs>

[^stemma]: Adafruit, *STEMMA & STEMMA QT technical specs* — plain STEMMA: "JST PH (2mm pitch)" 4-pin for I2C and "JST PH 2mm 3-Pin" for analog/digital/PWM; V+ "can be anything from 3-5V DC" and devices "must accept 3-5V DC"; 3-pin ports include a "1K+3.6V Zener diode protection circuit" to protect 3.3 V controllers. STEMMA QT is the 1.0 mm JST SH variant for boards where the larger PH won't fit. <https://learn.adafruit.com/introducing-adafruit-stemma-qt/technical-specs> and <https://learn.adafruit.com/introducing-adafruit-stemma-qt/what-is-stemma>

[^grove]: Seeed Studio, *Grove System* documentation — 4-pin 2.0 mm-pitch connector; the signal-pin function varies by module/port type ("Grove I2C: Pin 1 is the SCL signal and Pin 2 is the SDA signal"; UART: pin 1 RX, pin 2 TX; digital: D0/D1; analog: A0/A1), with power (pin 3) and ground (pin 4) fixed. <https://wiki.seeedstudio.com/Grove_System/>
