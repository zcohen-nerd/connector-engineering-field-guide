---
id: debug-service-port
title: "Pick a connector for a debug/service port"
slug: /decision-paths/debug-service-port
sidebar_label: Debug / service port
sidebar_position: 6
---

# Pick a connector for a debug/service port

Occasional programming, debug, or service access — used at a bench or in maintenance, not as an operational interface.

## Use this when

- The port is for programming, debug, or periodic service.
- Access is occasional and usually by a technician.

## Avoid this when

- It is really a permanent operational interface wearing a "debug" label — if so, treat it as a first-class interface and document it fully.

## Families to start with

- **Keyed shrouded header** or **Tag-Connect** for board-level programming/debug.
- **Micro-D** or **MIL-grade D-sub** for a benign, protected service port.
- **Sealed service M12** or a **38999 maintenance connector** if the port is external.
- **USB-C only behind a cover**, never as a bare exposed panel port.

See [Decision Examples](../09-decision-examples.md).

## Search terms

- `Tag-Connect programming header footprint`
- `keyed shrouded header 2.54mm`
- `Micro-D service connector`

## Specs to check

- **Access level** — who opens it, and how often.
- **Mating cycles** for the expected service life.
- **ESD** strategy and **pin protection**.
- **Sealing** if the port is exposed, and **distinct keying** from operational ports.

## Parts people forget

- A **dust cap** for the unmated port.
- **ESD** protection at the port.
- **Distinct keying** so the service port can't be confused with an operational one.

See [What People Forget](../what-people-forget.md).

## Common traps

- A **bare USB-C on an exposed panel**.
- **Same keying** as an operational port, inviting a mis-mate.
- Letting a debug port quietly become an **undocumented production interface**.
- A tiny hobby connector chosen for what turns into repeated lab use.

## Questions to ask a vendor/FAE

- What is the rated mating-cycle life for this connector?
- What ESD and pin-protection options exist?
- Is a cover / cap available, and what alternate keying options are there?

## Example documentation bundle

- A [selection table](../tools/connector-comparison-matrix.md) row noting access level and mating cycles.
- A source-controlled **pinout** — even a debug port gets documented.
- An [ICD entry](../tools/connector-icd-template.md) so the "temporary" port doesn't become tribal knowledge.

Related: [Decision Examples](../09-decision-examples.md) · [Consumer / Hobby / Prototype connectors](../12-consumer-hobby-prototype-connectors.md).
