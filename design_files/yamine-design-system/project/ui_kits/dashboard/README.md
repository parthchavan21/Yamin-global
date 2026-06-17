# Yamine Monitoring Dashboard — UI Kit

Reference implementation of the design system applied to an admin / monitoring
console: the surface Yamine's customers (and internal teams) use to watch
devices, alarms and compliance.

> Yamine is a NEW brand — no existing dashboard exists to recreate. This kit is
> the canonical reference, built entirely from `/tokens` and `/components`.

## Files
- `index.html` — entry; interactive shell (switch nav sections, select rows)
- `AppSidebar.jsx` — light side navigation with active / hover / disabled / nested items
- `AppTopbar.jsx` — breadcrumb, global search, actions
- `DashboardScreens.jsx` — Overview (metrics + alerts + table), Devices, Alarms views

## Patterns demonstrated
- App shell: `surface-secondary` canvas, white bordered panels, no shadows
- 264px sidebar, 64px topbar, 24px content gutter
- Metric rows with tabular-mono values; device table with status badges
- Alarm states always pair color with a text label
