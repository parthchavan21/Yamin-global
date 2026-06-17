import * as React from "react";
/** Binary on/off toggle for settings. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  disabled?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;
