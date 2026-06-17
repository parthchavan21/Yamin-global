import * as React from "react";

/** Styled native select. Pass <option> elements as children. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
