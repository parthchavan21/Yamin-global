import * as React from "react";

/** Square icon-only button. Provide `label` for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "outline" | "brand";
  size?: "sm" | "md";
  /** Accessible name (used for aria-label + title). */
  label: string;
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
