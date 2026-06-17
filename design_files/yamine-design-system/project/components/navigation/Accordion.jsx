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
.ym-accordion{ font-family:var(--font-sans); border:1px solid var(--border-primary); border-radius:var(--radius-md); overflow:hidden; background:var(--surface-primary); }
.ym-accordion__item + .ym-accordion__item{ border-top:1px solid var(--border-secondary); }
.ym-accordion__btn{ width:100%; appearance:none; border:none; background:transparent; cursor:pointer; text-align:left;
  display:flex; align-items:center; justify-content:space-between; gap:12px; padding:16px 20px;
  font-size:15px; font-weight:500; color:var(--content-primary); transition:background .12s; }
.ym-accordion__btn:hover{ background:var(--surface-secondary); }
.ym-accordion__btn:focus-visible{ outline:none; box-shadow:inset 0 0 0 2px var(--border-focus); }
.ym-accordion__chev{ flex:none; color:var(--content-tertiary); transition:transform .18s ease; }
.ym-accordion__item--open .ym-accordion__chev{ transform:rotate(180deg); color:var(--content-brand); }
.ym-accordion__panel{ padding:0 20px 18px; font-size:14px; line-height:22px; color:var(--content-secondary); }
`;

/** Accordion / FAQ. items: [{id, title, content}]. Single-open by default. */
export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], className = "", ...rest }) {
  useStyles("ym-accordion-styles", CSS);
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (id) => setOpen((prev) => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  return (
    <div className={["ym-accordion", className].filter(Boolean).join(" ")} {...rest}>
      {items.map((it) => {
        const isOpen = open.has(it.id);
        return (
          <div key={it.id} className={["ym-accordion__item", isOpen ? "ym-accordion__item--open" : ""].filter(Boolean).join(" ")}>
            <button type="button" className="ym-accordion__btn" aria-expanded={isOpen} onClick={() => toggle(it.id)}>
              {it.title}
              <span className="ym-accordion__chev" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>
            {isOpen && <div className="ym-accordion__panel">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
