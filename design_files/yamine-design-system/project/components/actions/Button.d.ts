import * as React from "react";

/**
 * Primary action button / CTA for Yamine interfaces.
 * @startingPoint section="Actions" subtitle="Buttons, CTAs and icon button" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. @default "primary" */
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  /** Control height. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Show spinner and block interaction. */
  loading?: boolean;
  disabled?: boolean;
  /** Element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
