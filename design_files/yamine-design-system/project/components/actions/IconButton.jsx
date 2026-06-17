import React from "react";

const CSS = `
.ym-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  width:40px; height:40px; border-radius:var(--radius-sm);
  background:transparent; color:var(--content-secondary); border:1px solid transparent;
  cursor:pointer; transition:background .12s ease, color .12s ease, border-color .12s ease;
}
.ym-iconbtn:hover{ background:var(--state-hover); color:var(--content-primary); }
.ym-iconbtn:active{ background:var(--state-pressed); }
.ym-iconbtn:focus-visible{ outline:none; box-shadow:var(--focus-ring); }
.ym-iconbtn--outline{ border-color:var(--border-strong); background:var(--surface-primary); }
.ym-iconbtn--brand{ color:var(--content-inverted); background:var(--surface-brand); }
.ym-iconbtn--brand:hover{ background:var(--surface-brand-hover); color:#fff; }
.ym-iconbtn--sm{ width:32px; height:32px; border-radius:var(--radius-xs); }
.ym-iconbtn[disabled]{ color:var(--state-disabled-content); cursor:not-allowed; background:transparent; }
`;

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

/** Square icon-only button. Always pass an accessible `label`. */
export function IconButton({ variant = "ghost", size = "md", label, children, className = "", ...rest }) {
  useStyles("ym-iconbtn-styles", CSS);
  const cls = ["ym-iconbtn", variant !== "ghost" ? `ym-iconbtn--${variant}` : "", size === "sm" ? "ym-iconbtn--sm" : "", className].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
