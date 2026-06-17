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
.ym-alert{ display:flex; gap:12px; padding:14px 16px; border-radius:var(--radius-md); border:1px solid; font-family:var(--font-sans); }
.ym-alert__icon{ flex:none; margin-top:1px; }
.ym-alert__title{ font-size:14px; font-weight:600; margin-bottom:2px; }
.ym-alert__body{ font-size:13px; line-height:20px; color:var(--content-secondary); }
.ym-alert__close{ margin-left:auto; border:none; background:transparent; cursor:pointer; color:var(--content-tertiary); padding:2px; border-radius:4px; align-self:flex-start; }
.ym-alert--info{ background:var(--surface-info); border-color:var(--blue-100); color:var(--content-brand); }
.ym-alert--success{ background:var(--surface-success); border-color:var(--green-100); color:var(--content-success); }
.ym-alert--warning{ background:var(--surface-warning); border-color:var(--amber-100); color:var(--content-warning); }
.ym-alert--error{ background:var(--surface-error); border-color:var(--red-100); color:var(--content-error); }
.ym-alert__title, .ym-alert__icon{ color:inherit; }
`;

const ICONS = {
  info: <path d="M12 16v-4M12 8h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"/>,
  success: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"/>,
  warning: <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>,
  error: <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/>,
};

/** Inline alert / callout panel. Tone drives surface, border and icon. */
export function AlertPanel({ tone = "info", title, onClose, children, className = "", ...rest }) {
  useStyles("ym-alert-styles", CSS);
  return (
    <div className={["ym-alert", `ym-alert--${tone}`, className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className="ym-alert__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS[tone]}</svg>
      </span>
      <div style={{ minWidth: 0 }}>
        {title && <div className="ym-alert__title">{title}</div>}
        <div className="ym-alert__body">{children}</div>
      </div>
      {onClose && (
        <button type="button" className="ym-alert__close" aria-label="Dismiss" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}
