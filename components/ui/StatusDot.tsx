import type { HTMLAttributes, ReactNode } from "react";

type Status = "online" | "offline" | "warning" | "error" | "pending" | "certified";

interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
  status?: Status;
  pulse?: boolean;
  children?: ReactNode;
}

/** Minimal labeled live-status dot. Always pair the color with a text label. */
export function StatusDot({ status = "online", pulse = false, children, className = "", ...rest }: StatusDotProps) {
  const cls = [
    "ym-statusdot",
    `ym-statusdot--${status}`,
    pulse ? "ym-statusdot--pulse" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} style={{ color: `var(--status-${status})` }} {...rest}>
      <span className="ym-statusdot__d" />
      {children && <span style={{ color: "var(--content-secondary)" }}>{children}</span>}
    </span>
  );
}
