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
.ym-selectwrap{ position:relative; display:flex; align-items:center; height:40px;
  background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-sm);
  transition:border-color .12s ease, box-shadow .12s ease; }
.ym-selectwrap:focus-within{ border-color:var(--border-focus); box-shadow:var(--focus-ring); }
.ym-selectwrap--error{ border-color:var(--border-error); }
.ym-select{ appearance:none; -webkit-appearance:none; width:100%; height:100%; border:none; outline:none; background:transparent;
  padding:0 36px 0 12px; font-family:var(--font-sans); font-size:var(--type-input-size); color:var(--content-primary); cursor:pointer; }
.ym-select:disabled{ color:var(--content-disabled); cursor:not-allowed; }
.ym-selectwrap--disabled{ background:var(--state-disabled-surface); }
.ym-selectwrap__chev{ position:absolute; right:12px; pointer-events:none; color:var(--content-tertiary); display:inline-flex; }
`;

const Chevron = () => (
  <span className="ym-selectwrap__chev" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </span>
);

/** Native select styled to match Yamine inputs. Pass <option>s as children. */
export function Select({ label, helperText, error, required = false, disabled = false, id, className = "", children, ...rest }) {
  useStyles("ym-select-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return (
    <div className={["ym-field", className].filter(Boolean).join(" ")}>
      {label && <label className="ym-field__label" htmlFor={fid}>{label}{required && <span className="ym-field__req">*</span>}</label>}
      <div className={["ym-selectwrap", error ? "ym-selectwrap--error" : "", disabled ? "ym-selectwrap--disabled" : ""].filter(Boolean).join(" ")}>
        <select id={fid} className="ym-select" disabled={disabled} aria-invalid={!!error} {...rest}>{children}</select>
        <Chevron />
      </div>
      {(helperText || error) && <span className={["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")}>{error || helperText}</span>}
    </div>
  );
}
