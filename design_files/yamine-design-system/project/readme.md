# Yamine Design System

**Yamine** is an industrial distribution company supplying monitoring and safety
solutions — gas detection, process control instruments, data acquisition
software, cold chain / clean room / vibration / environmental monitoring — to
industrial, commercial and environmental sectors. The brand must read as
**reliable, technical, precise, certified, safety-focused and engineering-driven**.

> Sources: this system was authored from a written brand brief only (no Figma,
> no codebase, no existing site). Yamine is a new distributor brand with a
> manufacturing background. The logo in `assets/` is a **placeholder wordmark**
> pending final brand artwork.

---

## 1 · Brand Foundation

**Keywords:** reliable · technical · industrial · precise · certified · modern · clean · professional · global · safety-focused · engineering-driven.

**Visual language:** flat surfaces separated by hairline strokes; a single
deep industrial blue carrying all brand emphasis; cool steel-grey neutrals;
uppercase micro-labels; monospace numerals for anything measured; controlled
4/6/8/12px rounding; zero drop shadows; zero decorative gradients.

**UI personality:** an instrument panel, not a consumer app. Calm by default,
loud only when safety demands it (alarms). Every status is labeled in text —
color is reinforcement, never the only signal.

**The interface should feel like:** a calibrated device — engineered margins,
aligned columns, predictable rhythm, data you can audit.

**Avoid:** drop shadows, pure black, gradient washes, emoji, playful
illustration, bright childish colors, SaaS-generic hero clichés, red/amber/green
used for anything other than semantic state.

---

## 2 · Color System

Defined in `tokens/colors.css` as primitives (`--blue-600`, `--neutral-200`…)
plus **semantic roles** — components must use the roles.

### Surfaces
| Token | Hex | Usage |
|---|---|---|
| `--surface-primary` | `#FFFFFF` | Page background, cards, inputs |
| `--surface-secondary` | `#F7F8FA` | App shell canvas, subtle panels, hero bands |
| `--surface-tertiary` | `#EEF1F4` | Table headers, wells, inset blocks |
| `--surface-inverted` | `#171717` | Footers, dark bands (pair with `content-inverted`) |
| `--surface-brand` | `#0F5CA6` | Primary CTA fill, active nav fill |
| `--surface-brand-hover` | `#0C4C8A` | Primary CTA hover |
| `--surface-brand-subtle` | `#ECF3FB` | Active sidebar item, brand chips, selected row |
| `--surface-success / -warning / -error / -info` | `#E7F4EC / #FBF1DF / #FBEBE9 / #ECF3FB` | Semantic fills for alerts, badges, chips |

### Content
| Token | Hex | Usage |
|---|---|---|
| `--content-primary` | `#171717` | Headings, body on light surfaces |
| `--content-secondary` | `#5B6670` | Supporting text, field labels |
| `--content-tertiary` | `#7C8893` | Placeholders, captions, metadata |
| `--content-inverted` | `#FFFFFF` | Text on dark / brand surfaces |
| `--content-brand` | `#0F5CA6` | Links, active tabs, brand emphasis |
| `--content-success / -warning / -error` | `#14633F / #8A5A06 / #97271E` | Semantic text (AA on their surfaces) |
| `--content-disabled` | `#A3AEB9` | Disabled labels |

### Borders & states
| Token | Hex | Usage |
|---|---|---|
| `--border-secondary` (subtle) | `#EEF1F4` | Faint internal dividers (table rows) |
| `--border-primary` (default) | `#E0E5EA` | Standard 1px component & card edges |
| `--border-strong` | `#CAD2DA` | Emphasized separation, secondary buttons |
| `--border-brand` | `#0F5CA6` | Active tab underline, brand outlines |
| `--border-focus` | `#4187D2` | Focus ring (with `--focus-ring` 3px halo) |
| `--border-error` | `#C03328` | Invalid fields |
| `--state-hover / -pressed / -selected` | `#F7F8FA / #E0E5EA / #ECF3FB` | Row + ghost interactions |
| `--state-disabled-surface / -content` | `#EEF1F4 / #A3AEB9` | Disabled controls |

Secondary support hue: muted teal `--teal-600 #127D8E` (certified status, data
viz only). Red / amber / green are **reserved for semantic state**.

---

## 3 · Typography

Font: **Satoshi** (self-hosted variable font, `assets/fonts/`) for all UI and
marketing text, with **IBM Plex Mono** for readings, serials and table
numerics (CDN). Registered in `tokens/fonts.css`.

| Style | Size/Line | Weight | Tracking | Notes |
|---|---|---|---|---|
| Display | 48/56 | 600 | -0.02em | Hero only |
| H1 | 36/44 | 600 | -0.018em | Page titles |
| H2 | 28/36 | 600 | -0.012em | Section titles |
| H3 | 22/30 | 600 | -0.006em | Card titles |
| Subheading | 18/26 | 500 | 0 | Intro lines |
| Body L / Body / Body S | 17/26 · 15/24 · 13/20 | 400 | 0 | Paragraphs / default / dense |
| **Label** | **12/16** | **600** | **+0.06em** | **ALWAYS UPPERCASE** |
| Caption | 12/16 | 400 | 0 | Timestamps, footnotes |
| Button | 15/20 | 500 | +0.01em | Sentence case |
| Input | 15/22 | 400 | 0 | |
| Table | 14/20 | 400 | 0 | Numerics: Plex Mono + `tnum` |

**12px is the absolute floor.** Utility classes (`.t-h1`, `.t-label`, `.t-mono`…)
live in `tokens/base.css`.

---

## 4 · Radius · 5 · Spacing · 6 · Borders

- Radius: `xs 4` (checkbox) · `sm 6` (buttons/inputs/chips) · `md 8` (selects, menus, tables) · `lg 12` (cards/modals) · `xl 16` (hero panels) · `pill 999`.
- Spacing: 4-based scale `4 8 12 16 20 24 32 40 48 64 80` (`--spacing-1…20`). Padding presets: compact `8×12`, regular `12×16`, comfortable `16×24`, card `24`, section `80` vertical.
- Strokes: hairline `1px` everywhere; `2px` only for focus and active-tab underline. Named shorthands in `tokens/borders.css`.

## 7 · Elevation without shadows

Hierarchy = **fill steps + strokes + space**: secondary canvas → white bordered
panel → tertiary inset. Emphasis via border-strong, brand accent strokes
(2px left/under-lines), uppercase labels, and generous section spacing. Modals:
white panel + `border-strong` + a flat `rgba(23,23,23,.4)` page scrim.

---

## 8 · Components

React primitives in `/components` (compiled to `window.YamineDesignSystem_15fa45`):

| Group | Components | Notes |
|---|---|---|
| `actions/` | `Button`, `IconButton` | primary/secondary/tertiary/destructive; sm 32 / md 40 / lg 48; loading + disabled |
| `forms/` | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch` | 40px fields, uppercase labels, helper/error, prefix/suffix icons |
| `data-display/` | `Badge`, `Chip`, `StatusDot` | device states, filter chips (selectable/removable), live dots |
| `surfaces/` | `Card`, `MetricCard`, `AlertPanel` | bordered cards, KPI tiles (mono numerals), semantic alerts |
| `navigation/` | `Breadcrumbs`, `Tabs`, `Accordion` | chevron crumbs, underline tabs, FAQ accordion |
| `tables/` | `Table` | spec/telemetry tables: header, hover, selection, numeric + status columns, empty state |

Each has a `.d.ts` (props), `.prompt.md` (usage), and a `@dsCard` HTML specimen.

---

## 9 · Layout

- 12-col grid, 24px gutters. Marketing max-width **1280px**; dashboard shell fluid with **264px** sidebar + **64px** topbar; content well max 1200px, 24px padding.
- Marketing sections: 80px vertical rhythm, alternating white / `surface-secondary` bands separated by hairlines. Max 2 background colors per page.
- Forms: single column, 20px between fields, labels above, 6px label→control.
- Product listings: 3-up `Card interactive` grid. Spec sheets: `Table` or label/value rows split by subtle dividers.

## 10 · Accessibility

12px minimum text · AA contrast on all pairings above · visible 3px focus ring
on every control · full keyboard reach (accordion/tabs are buttons) · errors =
border + icon/text, never color alone · disabled keeps readable contrast ·
status always carries a text label.

## 11 · Naming

`color.surface.primary` ↔ `--surface-primary`; `radius.md`, `spacing.4`,
`typography.heading.lg`, `component.button.primary.hover`. CSS custom
properties are the source of truth; Figma styles mirror the same paths.

---

## CONTENT FUNDAMENTALS

- **Tone:** plain, confident, engineer-to-engineer. State capability, then proof. No hype words ("revolutionary", "blazing"), no exclamation marks, **no emoji**.
- **Casing:** Sentence case for headings, buttons and nav ("Request a quote", "Talk to an engineer"). UPPERCASE only for 12px micro-labels ("LIVE TELEMETRY").
- **Voice:** "we" for Yamine, "you/your" for the customer. Active voice. Numbers are exact and unit-bearing: "4–20 mA", "-18.4 °C", "12 %LEL" (non-breaking space before units).
- **Headlines** lead with the customer's stake: *"Monitoring technology your compliance depends on."* Body copy is short — one idea per sentence.
- **CTAs** are specific actions: "Request a quote", "Browse products", "Export report" — never "Get started!" or "Learn more →" alone.
- Certifications are named precisely (ATEX, IECEx, SIL2, ISO 14644, 21 CFR Part 11) and shown as badges/chips, not prose claims.

## VISUAL FOUNDATIONS

- **Color vibe:** white + cool steel greys, one deep industrial blue; semantic red/amber/green strictly for state; muted teal for "certified". Dark `#171717` only as footer/CTA band or full dark console — never mid-grey panels on dark.
- **Backgrounds:** flat fills only. No gradients, textures, patterns or hand-drawn anything. Imagery (when supplied) should be cool-toned, documentary photos of real equipment/facilities — never stock-handshake.
- **Type:** Satoshi everywhere; IBM Plex Mono whenever a value is measured. Negative tracking on big sizes, positive on labels.
- **Borders & cards:** every raised element = 1px `border-primary` + white fill on a grey canvas. Radius 12 for cards, 6 for controls. **No shadows of any kind** (inner or outer).
- **Hover:** fill shifts one neutral step (`state-hover`) or border darkens to `border-strong`; links/tabs go brand blue. **Press:** one more step darker (`state-pressed` / `blue-800`). No scale/bounce transforms.
- **Motion:** utilitarian — 120–180ms ease on color/border; 150ms slide-fade for panels; a single soft `StatusDot` pulse is the only ambient animation. No parallax, no bouncing.
- **Transparency/blur:** none in components; only the flat modal scrim. Layout uses fixed sidebar + sticky header; content scrolls.
- **Numbers:** always `--font-mono` with `tnum`, right-aligned in tables.

## ICONOGRAPHY

- **Icon set: [Lucide](https://lucide.dev)** via CDN (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) — chosen for its uniform 2px stroke, technical-but-friendly geometry. This is a **substitution** (no brand icon set exists yet); swap to custom icons when available.
- Stroke icons only, 16–22px in UI, 22px in category tiles on a `surface-brand-subtle` 44px rounded square. Color: `content-secondary` default, `content-brand` active, semantic colors in alerts.
- No emoji, ever. Unicode is allowed only for true symbols inside data: °C, %, ₂ (subscripts in CH₄/CO₂), · separators, → in links.
- Logo: `assets/yamine-logo.svg` (light), `assets/yamine-logo-inverted.svg` (dark), `assets/yamine-mark.svg` (square mark — blue tile + signal waveform). **Placeholders** pending real brand artwork.

## FIGMA SETUP CHECKLIST

- **Color styles:** every semantic token above (surface/content/border/state groups), named `surface/primary`, `content.brand`, etc.
- **Text styles:** Display, H1–H3, Subheading, Body L/M/S, Label (caps), Caption, Button, Input, Table, Mono-value.
- **Effect styles:** none — shadows are not permitted.
- **Grid styles:** 12-col / 24 gutter / 1280 container; dashboard 264 sidebar layout grid.
- **Component groups:** Actions, Forms, Data display, Surfaces, Navigation, Tables (mirror `/components`).
- **Auto-layout:** spacing only from the 4-scale; padding presets 8×12 / 12×16 / 16×24 / 24.
- **Naming:** `component/button/primary/hover` pattern matching section 11.

---

## INDEX

| Path | Contents |
|---|---|
| `styles.css` | Global entry — import this one file |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radius` · `borders` · `base` (utilities) |
| `guidelines/` | Foundation specimen cards (Design System tab) |
| `components/` | actions · forms · data-display · surfaces · navigation · tables |
| `ui_kits/website/` | Marketing homepage reference (interactive) |
| `ui_kits/dashboard/` | Monitoring console reference (interactive) |
| `assets/` | Placeholder logo set |
| `SKILL.md` | Agent skill entry point |
