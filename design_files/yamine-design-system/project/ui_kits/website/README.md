# Yamine Marketing Website — UI Kit

Reference implementation of the Yamine design system applied to the public
marketing site of an industrial monitoring distributor.

> Yamine is a NEW brand: there was no existing site to recreate, so this kit is
> the canonical reference for what the website should look like — built 100%
> from the tokens in `/tokens` and the components in `/components`.

## Files
- `index.html` — entry; composes all sections, interactive (accordion, nav)
- `SiteHeader.jsx` — top navigation with CTA
- `SiteHero.jsx` — hero with live-telemetry panel mock
- `SiteSections.jsx` — certification strip, product category grid, FAQ, CTA band
- `SiteFooter.jsx` — dark (#171717) footer

## Patterns demonstrated
- Light page on `surface-primary`, sections separated by 80px rhythm + dividers
- Hero pairs display type with a bordered telemetry card (no imagery needed)
- Product cards: `Card interactive` + category chip + spec list
- Image slots are intentionally placeholders — supply real product photography
- Dark band/footer uses `surface-inverted` with `content-inverted`
