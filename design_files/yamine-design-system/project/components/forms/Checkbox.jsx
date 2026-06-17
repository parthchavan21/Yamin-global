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
.ym-choice{ display:inline-flex; align-items:flex-start; gap:10px; cursor:pointer; font-family:var(--font-sans);
  font-size:var(--type-body-size); line-height:22px; color:var(--content-primary); }
.ym-choice--disabled{ cursor:not-allowed; color:var(--content-disabled); }
.ym-choice input{ position:absolute; opacity:0; width:0; height:0; }
.ym-checkbox__box{ flex:none; width:18px; height:18px; margin-top:2px; border:1px solid var(--border-strong); border-radius:var(--radius-xs);
  background:var(--surface-primary); display:inline-flex; align-items:center; justify-content:center; color:#fff; transition:background .12s, border-color .12s; }
.ym-choice input:checked + .ym-checkbox__box{ background:var(--surface-brand); border-color:var(--surface-brand); }
.ym-choice input:focus-visible + .ym-checkbox__box{ box-shadow:var(--focus-ring); }
.ym-choice--disabled .ym-checkbox__box{ background:var(--state-disabled-surface); border-color:var(--border-primary); }
.ym-checkbox__box svg{ opacity:0; }
.ym-choice input:checked + .ym-checkbox__box svg{ opacity:1; }
`;

/** Checkbox with adjacent label. Controlled or uncontrolled. */
export function Checkbox({ label, disabled = false, className = "", id, ...rest }) {
  useStyles("ym-checkbox-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return (
    <label className={["ym-choice", disabled ? "ym-choice--disabled" : "", className].filter(Boolean).join(" ")} htmlFor={fid}>
      <input type="checkbox" id={fid} disabled={disabled} {...rest} />
      <span className="ym-checkbox__box" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
