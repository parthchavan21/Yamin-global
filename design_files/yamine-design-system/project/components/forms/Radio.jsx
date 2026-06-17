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
.ym-radio{ display:inline-flex; align-items:flex-start; gap:10px; cursor:pointer; font-family:var(--font-sans);
  font-size:var(--type-body-size); line-height:22px; color:var(--content-primary); }
.ym-radio--disabled{ cursor:not-allowed; color:var(--content-disabled); }
.ym-radio input{ position:absolute; opacity:0; width:0; height:0; }
.ym-radio__dot{ flex:none; width:18px; height:18px; margin-top:2px; border:1px solid var(--border-strong); border-radius:999px;
  background:var(--surface-primary); display:inline-flex; align-items:center; justify-content:center; transition:border-color .12s; }
.ym-radio__dot::after{ content:""; width:8px; height:8px; border-radius:999px; background:var(--surface-brand); transform:scale(0); transition:transform .12s ease; }
.ym-radio input:checked + .ym-radio__dot{ border-color:var(--surface-brand); }
.ym-radio input:checked + .ym-radio__dot::after{ transform:scale(1); }
.ym-radio input:focus-visible + .ym-radio__dot{ box-shadow:var(--focus-ring); }
.ym-radio--disabled .ym-radio__dot{ background:var(--state-disabled-surface); border-color:var(--border-primary); }
`;

/** Single radio option with label. Group by sharing a `name`. */
export function Radio({ label, disabled = false, className = "", id, ...rest }) {
  useStyles("ym-radio-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return (
    <label className={["ym-radio", disabled ? "ym-radio--disabled" : "", className].filter(Boolean).join(" ")} htmlFor={fid}>
      <input type="radio" id={fid} disabled={disabled} {...rest} />
      <span className="ym-radio__dot" aria-hidden="true" />
      {label && <span>{label}</span>}
    </label>
  );
}
