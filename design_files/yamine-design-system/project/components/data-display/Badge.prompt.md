Status / state pill with a leading dot for device and record states.

```jsx
<Badge status="online">Online</Badge>
<Badge status="certified">ATEX certified</Badge>
<Badge status="warning">Calibration due</Badge>
<Badge status="error">Alarm</Badge>
<Badge status="maintenance">Maintenance</Badge>
```
Status maps to a semantic surface + content pair. Never communicate state by color alone — the text label carries the meaning.
