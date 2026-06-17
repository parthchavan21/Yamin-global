import * as React from "react";
/** Checkbox with adjacent label. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
