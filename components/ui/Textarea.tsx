import { useId, type TextareaHTMLAttributes, type ReactNode } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  required?: boolean;
}

/** Multi-line text field sharing the field label/helper system. */
export function Textarea({
  label,
  helperText,
  error,
  required = false,
  disabled = false,
  id,
  className = "",
  ...rest
}: TextareaProps) {
  const autoId = useId();
  const fid = id || autoId;
  return (
    <div className={["ym-field", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="ym-field__label" htmlFor={fid}>
          {label}
          {required && <span className="ym-field__req">*</span>}
        </label>
      )}
      <textarea
        id={fid}
        className={["ym-textarea", error ? "ym-textarea--error" : ""].filter(Boolean).join(" ")}
        disabled={disabled}
        aria-invalid={!!error}
        {...rest}
      />
      {(helperText || error) && (
        <span className={["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
