Bordered surface container for product, information and specification cards.

```jsx
<Card eyebrow="Gas detection" title="YM-GD-400 Fixed Detector" action={<IconButton label="More"><MoreIcon/></IconButton>}>
  <p>Catalytic bead sensor for combustible gases, ATEX Zone 1.</p>
</Card>
<Card interactive variant="secondary">Clickable summary tile</Card>
<Card flush>{/* table or media bleeds to the rounded edge */}</Card>
```
12px radius, 1px border, 24px padding. No shadow — use `variant="secondary"` fill or nesting for hierarchy.
