import * as React from "react";
/** Radio option; group by a shared `name`. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  disabled?: boolean;
}
export function Radio(props: RadioProps): JSX.Element;
