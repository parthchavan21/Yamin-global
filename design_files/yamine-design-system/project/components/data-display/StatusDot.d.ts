import * as React from "react";
/** Minimal labeled live-status dot. */
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "offline" | "warning" | "error" | "pending" | "certified";
  /** Animate a soft pulse (live telemetry). */
  pulse?: boolean;
  children?: React.ReactNode;
}
export function StatusDot(props: StatusDotProps): JSX.Element;
