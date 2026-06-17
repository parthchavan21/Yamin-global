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
.ym-badge{ display:inline-flex; align-items:center; gap:6px; height:22px; padding:0 10px;
  border-radius:var(--radius-pill); font-family:var(--font-sans); font-size:12px; line-height:1; font-weight:600;
  letter-spacing:.02em; border:1px solid transparent; white-space:nowrap; }
.ym-badge__dot{ width:7px; height:7px; border-radius:999px; background:currentColor; flex:none; }
.ym-badge--neutral{ background:var(--surface-tertiary); color:var(--content-secondary); border-color:var(--border-primary); }
.ym-badge--online{ background:var(--surface-success); color:var(--content-success); border-color:var(--green-100); }
.ym-badge--offline{ background:var(--surface-tertiary); color:var(--content-tertiary); border-color:var(--border-primary); }
.ym-badge--warning{ background:var(--surface-warning); color:var(--content-warning); border-color:var(--amber-100); }
.ym-badge--error{ background:var(--surface-error); color:var(--content-error); border-color:var(--red-100); }
.ym-badge--pending{ background:var(--surface-info); color:var(--content-brand); border-color:var(--blue-100); }
.ym-badge--certified{ background:var(--teal-50); color:var(--teal-700); border-color:var(--teal-100); }
.ym-badge--maintenance{ background:var(--surface-warning); color:var(--content-warning); border-color:var(--amber-100); }
`;

const TONE = {
  online: "online", offline: "offline", active: "online", inactive: "offline",
  warning: "warning", error: "error", pending: "pending", certified: "certified",
  maintenance: "maintenance", neutral: "neutral",
};

/** Status / state indicator pill with a leading dot. */
export function Badge({ status = "neutral", dot = true, children, className = "", ...rest }) {
  useStyles("ym-badge-styles", CSS);
  const tone = TONE[status] || "neutral";
  return (
    <span className={["ym-badge", `ym-badge--${tone}`, className].filter(Boolean).join(" ")} {...rest}>
      {dot && <span className="ym-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
