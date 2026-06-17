Accordion / FAQ list.

```jsx
<Accordion defaultOpen={["a"]} items={[
  { id: "a", title: "What certifications do detectors carry?", content: "ATEX, IECEx and SIL2…" },
  { id: "b", title: "What is the calibration interval?", content: "Typically 6–12 months…" },
]} />
```
Single-open by default; pass `allowMultiple` to keep several open. Chevron rotates on open.
