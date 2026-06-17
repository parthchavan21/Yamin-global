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
.ym-switch{ display:inline-flex; align-items:center; gap:10px; cursor:pointer; font-family:var(--font-sans);
  font-size:var(--type-body-size); color:var(--content-primary); }
.ym-switch--disabled{ cursor:not-allowed; color:var(--content-disabled); }
.ym-switch input{ position:absolute; opacity:0; width:0; height:0; }
.ym-switch__track{ flex:none; width:40px; height:22px; border-radius:999px; background:var(--neutral-300);
  position:relative; transition:background .15s ease; }
.ym-switch__track::after{ content:""; position:absolute; top:2px; left:2px; width:18px; height:18px; border-radius:999px;
  background:#fff; transition:transform .15s ease; }
.ym-switch input:checked + .ym-switch__track{ background:var(--surface-brand); }
.ym-switch input:checked + .ym-switch__track::after{ transform:translateX(18px); }
.ym-switch input:focus-visible + .ym-switch__track{ box-shadow:var(--focus-ring); }
.ym-switch--disabled .ym-switch__track{ background:var(--neutral-200); }
`;

/** Binary on/off toggle. Use for settings; use Checkbox for form selection. */
export function Switch({ label, disabled = false, className = "", id, ...rest }) {
  useStyles("ym-switch-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return (
    <label className={["ym-switch", disabled ? "ym-switch--disabled" : "", className].filter(Boolean).join(" ")} htmlFor={fid}>
      <input type="checkbox" role="switch" id={fid} disabled={disabled} {...rest} />
      <span className="ym-switch__track" aria-hidden="true" />
      {label && <span>{label}</span>}
    </label>
  );
}
