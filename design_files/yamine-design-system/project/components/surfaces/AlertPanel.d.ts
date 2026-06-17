import * as React from "react";
/** Inline alert / callout panel keyed by semantic tone. */
export interface AlertPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "success" | "warning" | "error";
  title?: React.ReactNode;
  /** When set, renders a dismiss button. */
  onClose?: () => void;
  children?: React.ReactNode;
}
export function AlertPanel(props: AlertPanelProps): JSX.Element;
