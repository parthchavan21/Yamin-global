import type { HTMLAttributes, ReactNode } from "react";

type Tone = "neutral" | "brand" | "success" | "warning" | "error" | "info";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  children: ReactNode;
}

/** Compact label / tag. */
export function Chip({ tone = "neutral", children, className = "", ...rest }: ChipProps) {
  const cls = [
    "ym-chip",
    tone !== "neutral" ? `ym-chip--${tone}` : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
