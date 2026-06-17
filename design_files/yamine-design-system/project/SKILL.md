---
name: yamine-design
description: Use this skill to generate well-branded interfaces and assets for Yamine, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts for Yamine:
- Industrial monitoring & safety distributor: gas detection, process control, data acquisition, cold chain, clean room, vibration, environmental monitoring.
- Link `styles.css` for all tokens (Satoshi + IBM Plex Mono, color roles, 4-based spacing, radius, borders).
- NO drop shadows — hierarchy via surfaces (`--surface-secondary/tertiary`), 1px borders and spacing.
- Darkest color is `#171717` (never pure black). Brand blue `#0F5CA6`. Red/amber/green only for semantic state.
- Labels are 12px uppercase +0.06em. Measured values use IBM Plex Mono with tabular numerals. Minimum text size 12px.
- Tone: plain, precise, engineer-to-engineer. Sentence case. No emoji, no hype.
- Icons: Lucide (CDN), stroke style, 16–22px.
