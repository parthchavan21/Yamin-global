import { useId, type SelectHTMLAttributes, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  children: ReactNode;
}

/** Native select styled to match Yamine inputs. Pass <option>s as children. */
export function Select({
  label,
  helperText,
  error,
  required = false,
  disabled = false,
  id,
  className = "",
  children,
  ...rest
}: SelectProps) {
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
      <div
        className={[
          "ym-selectwrap",
          error ? "ym-selectwrap--error" : "",
          disabled ? "ym-selectwrap--disabled" : "",
        ].filter(Boolean).join(" ")}
      >
        <select id={fid} className="ym-select" disabled={disabled} aria-invalid={!!error} {...rest}>
          {children}
        </select>
        <span className="ym-selectwrap__chev" aria-hidden="true">
          <ChevronDown size={16} />
        </span>
      </div>
      {(helperText || error) && (
        <span className={["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
