import * as React from "react";
/** KPI / telemetry tile with tabular numeral value and optional trend. */
export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  unit?: string;
  /** Change figure, e.g. "+2.3%". */
  delta?: string;
  trend?: "up" | "down" | "flat";
  /** Trailing context, e.g. "vs last hour". */
  note?: string;
}
export function MetricCard(props: MetricCardProps): JSX.Element;
