Primary action control — use for any button or call-to-action in Yamine UIs.

```jsx
<Button variant="primary" onClick={save}>Request a quote</Button>
<Button variant="secondary" iconLeft={<DownloadIcon/>}>Datasheet</Button>
<Button variant="tertiary" size="sm">Learn more</Button>
<Button variant="destructive">Decommission sensor</Button>
<Button loading>Saving…</Button>
```

Variants: `primary` (filled brand blue), `secondary` (outlined neutral), `tertiary` (text + brand tint hover), `destructive` (filled red). Sizes `sm` (32px) · `md` (40px, default) · `lg` (48px). `loading` shows a spinner and disables. No drop shadows — focus uses a 3px ring.
