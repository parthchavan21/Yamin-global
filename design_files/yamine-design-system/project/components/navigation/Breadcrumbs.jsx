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
.ym-breadcrumbs{ display:flex; align-items:center; flex-wrap:wrap; gap:6px; font-family:var(--font-sans); font-size:13px; }
.ym-breadcrumbs a{ color:var(--content-secondary); text-decoration:none; padding:2px 4px; border-radius:4px; transition:color .12s, background .12s; }
.ym-breadcrumbs a:hover{ color:var(--content-brand); background:var(--surface-brand-subtle); }
.ym-breadcrumbs__sep{ color:var(--content-tertiary); display:inline-flex; }
.ym-breadcrumbs__current{ color:var(--content-primary); font-weight:500; padding:2px 4px; }
`;

const Sep = () => (
  <span className="ym-breadcrumbs__sep" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </span>
);

/** Breadcrumb trail. Pass items [{label, href}]; last item is the current page. */
export function Breadcrumbs({ items = [], className = "", ...rest }) {
  useStyles("ym-breadcrumbs-styles", CSS);
  return (
    <nav className={["ym-breadcrumbs", className].filter(Boolean).join(" ")} aria-label="Breadcrumb" {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last
              ? <span className="ym-breadcrumbs__current" aria-current="page">{it.label}</span>
              : <a href={it.href || "#"}>{it.label}</a>}
            {!last && <Sep />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
