Data / specification table for device lists, telemetry and product specs.

```jsx
<Table
  columns={[
    { key: "device", label: "Device" },
    { key: "zone", label: "Zone" },
    { key: "reading", label: "Reading", numeric: true },
    { key: "status", label: "Status", render: (r) => <Badge status={r.status}>{r.statusLabel}</Badge> },
  ]}
  rows={devices}
  striped
  selectedKeys={[selectedId]}
  onRowClick={(r) => select(r.id)}
/>
```
Header row: tertiary surface + uppercase 12px labels. Numeric columns right-align in IBM Plex Mono. Empty `rows` shows `emptyMessage`.
