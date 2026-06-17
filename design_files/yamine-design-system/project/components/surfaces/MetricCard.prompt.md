KPI / telemetry tile; value renders in tabular monospace.

```jsx
<MetricCard label="Ambient CO₂" value="412" unit="ppm" delta="1.2%" trend="up" note="vs last hour" />
<MetricCard label="Active alarms" value="3" trend="down" delta="2" note="last 24h" />
```
Use in dashboard metric rows. `trend` colors the delta (up=green, down=red, flat=grey).
