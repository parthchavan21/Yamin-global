Compact tag / chip for filters, categories and removable tokens.

```jsx
<Chip tone="brand">Gas detection</Chip>
<Chip tone="info">ATEX</Chip>
<Chip selectable selected>Active filter</Chip>
<Chip onRemove={() => remove(id)}>Removable</Chip>
```
Tones: neutral · brand · success · warning · error · info. `selectable` adds hover + pressed; `selected` fills brand. `onRemove` renders the × button.
