Inline alert / callout panel.

```jsx
<AlertPanel tone="warning" title="Calibration overdue">3 detectors are past their calibration window.</AlertPanel>
<AlertPanel tone="error" title="Sensor fault" onClose={dismiss}>Channel 4 reporting out-of-range values.</AlertPanel>
```
Tones: info · success · warning · error. Each maps to a semantic surface + icon.
