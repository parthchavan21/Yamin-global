import type { HTMLAttributes, ReactNode } from "react";

type Status =
  | "neutral" | "online" | "offline" | "active" | "inactive"
  | "warning" | "error" | "pending" | "certified" | "maintenance";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status?: Status;
  dot?: boolean;
  children: ReactNode;
}

const TONE: Record<Status, string> = {
  online: "online", offline: "offline", active: "online", inactive: "offline",
  warning: "warning", error: "error", pending: "pending", certified: "certified",
  maintenance: "maintenance", neutral: "neutral",
};

/** Status / state indicator pill with an optional leading dot. */
export function Badge({ status = "neutral", dot = true, children, className = "", ...rest }: BadgeProps) {
  const tone = TONE[status] || "neutral";
  return (
    <span className={["ym-badge", `ym-badge--${tone}`, className].filter(Boolean).join(" ")} {...rest}>
      {dot && <span className="ym-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
