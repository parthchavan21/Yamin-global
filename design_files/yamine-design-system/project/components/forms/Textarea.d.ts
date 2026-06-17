import * as React from "react";

/** Multi-line text area with the shared field label / helper / error system. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
