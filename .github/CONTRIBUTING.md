# Contributing

Thanks for helping improve the Connector Field Guides — both the Hobby track and the Professional / Industrial track.

## Technical corrections require a source

Technical corrections, exact values, standards claims, part-number interpretations, and qualification statements must be backed by a source.

Acceptable sources include:

- Current manufacturer datasheet
- Applicable standard reference
- QPL listing
- Manufacturer application note
- Program/customer requirement when applicable

The hobby track follows the same source discipline as the professional track. Hobby-track corrections should distinguish official manufacturer datasheets, vendor ecosystem documentation (e.g. SparkFun/Adafruit), marketplace listings, and clone/"compatible" claims. Marketplace listings are useful evidence of common naming chaos, but they are not design authority for pitch, current, voltage, compatibility, crimp tooling, or safety limits.

## Source discipline rules

- Do not reproduce paid standards tables.
- Do not copy proprietary catalog tables.
- Do not add universal connector ratings unless they are truly universal and sourced.
- Mark exact values as examples unless verified.
- Preserve the guide's engineering-judgment tone.
- Preserve existing warnings, disclaimers, caveats, and `<!-- TODO: source/verify -->` comments.

## Content expectations

- Keep the guide practical and mentor-style.
- Do not invent new connector facts.
- Prefer practical decision logic over vendor marketing language.
- If a claim cannot yet be sourced, add or preserve a source-verification TODO rather than inventing a citation.

## Development workflow

```bash
npm install
npm run start    # dev server with hot reload
npm run build    # production build into build/
```

Use `npm run build` before opening a pull request so broken links and navigation issues are caught early.
