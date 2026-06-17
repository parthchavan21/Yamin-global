Underline tab bar for switching views.

```jsx
<Tabs value={tab} onChange={setTab} items={[
  { id: "overview", label: "Overview" },
  { id: "specs", label: "Specifications" },
  { id: "alarms", label: "Alarms", count: 3 },
  { id: "archive", label: "Archive", disabled: true },
]} />
```
Active tab uses brand color + 2px underline. Supports `icon`, `count`, `disabled`.
