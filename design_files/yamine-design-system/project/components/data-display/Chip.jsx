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
.ym-chip{ display:inline-flex; align-items:center; gap:6px; height:28px; padding:0 12px;
  border-radius:var(--radius-pill); font-family:var(--font-sans); font-size:13px; line-height:1; font-weight:500;
  border:1px solid var(--border-primary); background:var(--surface-secondary); color:var(--content-secondary); }
.ym-chip--brand{ background:var(--surface-brand-subtle); color:var(--content-brand); border-color:var(--blue-100); }
.ym-chip--success{ background:var(--surface-success); color:var(--content-success); border-color:var(--green-100); }
.ym-chip--warning{ background:var(--surface-warning); color:var(--content-warning); border-color:var(--amber-100); }
.ym-chip--error{ background:var(--surface-error); color:var(--content-error); border-color:var(--red-100); }
.ym-chip--info{ background:var(--surface-info); color:var(--content-brand); border-color:var(--blue-100); }
.ym-chip--selectable{ cursor:pointer; transition:background .12s, border-color .12s, color .12s; }
.ym-chip--selectable:hover{ border-color:var(--border-strong); }
.ym-chip--selected{ background:var(--surface-brand); color:#fff; border-color:var(--surface-brand); }
.ym-chip__x{ display:inline-flex; margin-right:-4px; border:none; background:transparent; color:currentColor; cursor:pointer; padding:2px; border-radius:999px; opacity:.7; }
.ym-chip__x:hover{ opacity:1; }
`;

/** Compact label / tag. Tones, plus selectable and removable modes. */
export function Chip({ tone = "neutral", selectable = false, selected = false, onRemove, children, className = "", ...rest }) {
  useStyles("ym-chip-styles", CSS);
  const cls = [
    "ym-chip",
    tone !== "neutral" ? `ym-chip--${tone}` : "",
    selectable ? "ym-chip--selectable" : "",
    selected ? "ym-chip--selected" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} role={selectable ? "button" : undefined} tabIndex={selectable ? 0 : undefined} {...rest}>
      {children}
      {onRemove && (
        <button type="button" className="ym-chip__x" aria-label="Remove" onClick={(e)=>{ e.stopPropagation(); onRemove(e); }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </span>
  );
}
