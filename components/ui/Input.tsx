import { useId, type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  mono?: boolean;
}

/** Text input with label, helper/error text, optional prefix/suffix icon. */
export function Input({
  label,
  helperText,
  error,
  required = false,
  disabled = false,
  prefix,
  suffix,
  mono = false,
  id,
  className = "",
  ...rest
}: InputProps) {
  const autoId = useId();
  const fid = id || autoId;
  const wrapCls = [
    "ym-inputwrap",
    error ? "ym-inputwrap--error" : "",
    disabled ? "ym-inputwrap--disabled" : "",
  ].filter(Boolean).join(" ");
  return (
    <div className={["ym-field", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="ym-field__label" htmlFor={fid}>
          {label}
          {required && <span className="ym-field__req">*</span>}
        </label>
      )}
      <div className={wrapCls}>
        {prefix && <span className="ym-inputwrap__icon">{prefix}</span>}
        <input
          id={fid}
          className={["ym-input", mono ? "ym-input--mono" : ""].filter(Boolean).join(" ")}
          disabled={disabled}
          aria-invalid={!!error}
          {...rest}
        />
        {suffix && <span className="ym-inputwrap__icon">{suffix}</span>}
      </div>
      {(helperText || error) && (
        <span className={["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
