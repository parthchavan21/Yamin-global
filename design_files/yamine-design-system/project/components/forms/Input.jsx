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

export const FIELD_CSS = `
.ym-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
.ym-field__label{ font-size:var(--type-label-size); line-height:var(--type-label-line); font-weight:var(--type-label-weight); letter-spacing:var(--type-label-track); text-transform:uppercase; color:var(--content-secondary); }
.ym-field__req{ color:var(--content-error); margin-left:4px; }
.ym-field__help{ font-size:var(--type-body-sm-size); line-height:var(--type-body-sm-line); color:var(--content-tertiary); }
.ym-field__help--error{ color:var(--content-error); }

.ym-inputwrap{ display:flex; align-items:center; gap:8px; height:40px; padding:0 12px;
  background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-sm);
  transition:border-color .12s ease, box-shadow .12s ease; }
.ym-inputwrap:focus-within{ border-color:var(--border-focus); box-shadow:var(--focus-ring); }
.ym-inputwrap--error{ border-color:var(--border-error); }
.ym-inputwrap--error:focus-within{ box-shadow:0 0 0 3px color-mix(in srgb, var(--red-600) 30%, transparent); }
.ym-inputwrap--disabled{ background:var(--state-disabled-surface); border-color:var(--border-primary); }
.ym-inputwrap__icon{ display:inline-flex; color:var(--content-tertiary); flex:none; }
.ym-input{ flex:1; min-width:0; border:none; outline:none; background:transparent;
  font-family:var(--font-sans); font-size:var(--type-input-size); line-height:var(--type-input-line); color:var(--content-primary); }
.ym-input::placeholder{ color:var(--content-tertiary); }
.ym-input:disabled{ color:var(--content-disabled); cursor:not-allowed; }
.ym-input--mono{ font-family:var(--font-mono); }
`;

/** Text input with label, helper/error text, optional prefix/suffix icon. */
export function Input({
  label, helperText, error, required = false, disabled = false,
  prefix = null, suffix = null, mono = false, id, className = "", ...rest
}) {
  useStyles("ym-field-styles", FIELD_CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  const wrapCls = ["ym-inputwrap", error ? "ym-inputwrap--error" : "", disabled ? "ym-inputwrap--disabled" : ""].filter(Boolean).join(" ");
  return (
    <div className={["ym-field", className].filter(Boolean).join(" ")}>
      {label && <label className="ym-field__label" htmlFor={fid}>{label}{required && <span className="ym-field__req">*</span>}</label>}
      <div className={wrapCls}>
        {prefix && <span className="ym-inputwrap__icon">{prefix}</span>}
        <input id={fid} className={["ym-input", mono ? "ym-input--mono" : ""].filter(Boolean).join(" ")} disabled={disabled} aria-invalid={!!error} {...rest} />
        {suffix && <span className="ym-inputwrap__icon">{suffix}</span>}
      </div>
      {(helperText || error) && <span className={["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")}>{error || helperText}</span>}
    </div>
  );
}
