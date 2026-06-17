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
.ym-card{ background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-lg);
  padding:24px; font-family:var(--font-sans); color:var(--content-primary); }
.ym-card--secondary{ background:var(--surface-secondary); }
.ym-card--flush{ padding:0; overflow:hidden; }
.ym-card--interactive{ cursor:pointer; transition:border-color .12s ease, background .12s ease; }
.ym-card--interactive:hover{ border-color:var(--border-strong); background:var(--surface-secondary); }
.ym-card__head{ display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:8px; }
.ym-card__title{ font-size:var(--type-h3-size); line-height:var(--type-h3-line); font-weight:600; letter-spacing:-0.006em; }
.ym-card__eyebrow{ font-size:12px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:var(--content-tertiary); margin-bottom:4px; display:block; }
`;

/** Bordered surface container. Hierarchy from stroke + fill, never shadow. */
export function Card({ title, eyebrow, action, interactive = false, variant = "primary", flush = false, children, className = "", ...rest }) {
  useStyles("ym-card-styles", CSS);
  const cls = [
    "ym-card",
    variant === "secondary" ? "ym-card--secondary" : "",
    interactive ? "ym-card--interactive" : "",
    flush ? "ym-card--flush" : "",
    className,
  ].filter(Boolean).join(" ");
  const hasHead = title || eyebrow || action;
  return (
    <div className={cls} {...rest}>
      {hasHead && (
        <div className="ym-card__head">
          <div>
            {eyebrow && <span className="ym-card__eyebrow">{eyebrow}</span>}
            {title && <div className="ym-card__title">{title}</div>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
