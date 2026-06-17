import * as React from "react";

/**
 * Single-line text field with label, helper/error text and optional icons.
 * @startingPoint section="Forms" subtitle="Inputs, selects, toggles & choices" viewport="700x420"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  /** Uppercase field label rendered above the control. */
  label?: string;
  /** Neutral helper text below the control. */
  helperText?: string;
  /** Error message — overrides helperText and applies error styling. */
  error?: string;
  required?: boolean;
  disabled?: boolean;
  /** Leading icon node (e.g. search). */
  prefix?: React.ReactNode;
  /** Trailing icon node (e.g. unit, clear). */
  suffix?: React.ReactNode;
  /** Use monospace for serial numbers / codes / numeric entry. */
  mono?: boolean;
}

export function Input(props: InputProps): JSX.Element;
