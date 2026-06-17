"use client";

import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "destructive";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  noBubble?: boolean;
}

/** Yamine primary button / CTA. Variants: primary | secondary | tertiary | destructive. */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  iconLeft,
  iconRight,
  type = "button",
  className = "",
  children,
  noBubble = false,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: ButtonProps) {
  const circleRef = useRef<HTMLSpanElement>(null);

  const cls = [
    "ym-btn",
    `ym-btn--${variant}`,
    size !== "md" ? `ym-btn--${size}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || loading;
  const isPrimary = variant === "primary" && !noBubble;

  function handleMouseEnter(e: React.MouseEvent<HTMLButtonElement>) {
    if (isPrimary && circleRef.current) {
      circleRef.current.style.transition = "transform 0.8s cubic-bezier(0.33, 0, 0.66, 0)";
      circleRef.current.style.transform = "translateX(-50%) scale(10)";
    }
    onMouseEnter?.(e);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
    if (isPrimary && circleRef.current) {
      circleRef.current.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      circleRef.current.style.transform = "translateX(-50%) scale(0)";
    }
    onMouseLeave?.(e);
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", overflow: "hidden", ...rest.style }}
      {...rest}
    >
      {isPrimary && (
        <span
          ref={circleRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "50%",
            width: "100%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.18)",
            transform: "translateX(-50%) scale(0)",
            transition: "transform 0.8s cubic-bezier(0.33, 0, 0.66, 0)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      {loading && <span className="ym-btn__spin" aria-hidden="true" style={{ position: "relative", zIndex: 1 }} />}
      {!loading && iconLeft && <span style={{ position: "relative", zIndex: 1 }}>{iconLeft}</span>}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      {!loading && iconRight && <span style={{ position: "relative", zIndex: 1 }}>{iconRight}</span>}
    </button>
  );
}
