import * as React from "react";
/** Compact tag / chip with tones; supports selectable + removable. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "brand" | "success" | "warning" | "error" | "info";
  selectable?: boolean;
  selected?: boolean;
  /** When provided, renders a remove (×) button. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Chip(props: ChipProps): JSX.Element;
