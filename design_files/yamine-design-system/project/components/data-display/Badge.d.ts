import * as React from "react";

/**
 * Status / state pill with a leading dot — device and record states.
 * @startingPoint section="Data" subtitle="Badges, chips & status indicators" viewport="700x200"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "offline" | "active" | "inactive" | "warning" | "error" | "pending" | "certified" | "maintenance" | "neutral";
  /** Show the leading status dot. @default true */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
