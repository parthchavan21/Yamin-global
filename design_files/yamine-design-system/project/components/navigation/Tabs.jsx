import React from "react";

function useStyles(id, css){
  // Inject synchronously on first render — CSS must exist BEFORE the element
  // mounts, so no mount-time transition fires from an unstyled state.
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.ym-tabs{ display:flex; gap:4px; border-bottom:1px solid var(--border-primary); font-family:var(--font-sans); }
.ym-tab{ appearance:none; border:none; background:transparent; cursor:pointer;
  padding:10px 14px; font-size:14px; font-weight:500; color:var(--content-secondary);
  border-bottom:2px solid transparent; margin-bottom:-1px; transition:color .12s, border-color .12s; display:inline-flex; align-items:center; gap:8px; }
.ym-tab:hover{ color:var(--content-primary); }
.ym-tab--active{ color:var(--content-brand); border-bottom-color:var(--border-brand); }
.ym-tab:focus-visible{ outline:none; box-shadow:var(--focus-ring); border-radius:4px; }
.ym-tab--disabled{ color:var(--content-disabled); cursor:not-allowed; }
.ym-tab__count{ font-family:var(--font-mono); font-size:11px; background:var(--surface-tertiary); color:var(--content-secondary); border-radius:999px; padding:1px 7px; }
`;

/** Underline tab bar. Controlled via `value` + `onChange`. */
export function Tabs({ items = [], value, onChange, className = "", ...rest }) {
  useStyles("ym-tabs-styles", CSS);
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = (id) => { if (value === undefined) setInternal(id); onChange && onChange(id); };
  return (
    <div className={["ym-tabs", className].filter(Boolean).join(" ")} role="tablist" {...rest}>
      {items.map((it) => (
        <button
          key={it.id}
          role="tab"
          aria-selected={active === it.id}
          disabled={it.disabled}
          className={["ym-tab", active === it.id ? "ym-tab--active" : "", it.disabled ? "ym-tab--disabled" : ""].filter(Boolean).join(" ")}
          onClick={() => !it.disabled && select(it.id)}
        >
          {it.icon}
          {it.label}
          {it.count != null && <span className="ym-tab__count">{it.count}</span>}
        </button>
      ))}
    </div>
  );
}
