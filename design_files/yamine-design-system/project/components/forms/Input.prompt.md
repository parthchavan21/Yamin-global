Labeled text input with helper/error states and optional prefix/suffix icons.

```jsx
<Input label="Site name" placeholder="e.g. North Refinery" />
<Input label="Serial number" mono prefix={<HashIcon/>} helperText="Found on the device label" />
<Input label="Email" error="Enter a valid work email" defaultValue="bad@" />
<Input label="Search" prefix={<SearchIcon/>} placeholder="Search devices" />
```

40px tall, 6px radius, 1px border. Focus shows a blue ring (no shadow). `error` turns the border + ring + helper red. Pair with Select, Textarea, Checkbox, Radio, Switch from this group.
