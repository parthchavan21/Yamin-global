import React from "react";
import { FIELD_CSS } from "./Input.jsx";

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
const CSS = FIELD_CSS + `
.ym-textarea{ width:100%; min-height:96px; resize:vertical; padding:10px 12px;
  background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-sm);
  font-family:var(--font-sans); font-size:var(--type-input-size); line-height:var(--type-input-line); color:var(--content-primary);
  outline:none; transition:border-color .12s ease, box-shadow .12s ease; }
.ym-textarea::placeholder{ color:var(--content-tertiary); }
.ym-textarea:focus{ border-color:var(--border-focus); box-shadow:var(--focus-ring); }
.ym-textarea--error{ border-color:var(--border-error); }
.ym-textarea:disabled{ background:var(--state-disabled-surface); color:var(--content-disabled); cursor:not-allowed; }
`;

/** Multi-line text field sharing the field label/helper system. */
export function Textarea({ label, helperText, error, required = false, disabled = false, id, className = "", ...rest }) {
  useStyles("ym-textarea-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return (
    <div className={["ym-field", className].filter(Boolean).join(" ")}>
      {label && <label className="ym-field__label" htmlFor={fid}>{label}{required && <span className="ym-field__req">*</span>}</label>}
      <textarea id={fid} className={["ym-textarea", error ? "ym-textarea--error" : ""].filter(Boolean).join(" ")} disabled={disabled} aria-invalid={!!error} {...rest} />
      {(helperText || error) && <span className={["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")}>{error || helperText}</span>}
    </div>
  );
}
