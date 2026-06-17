import * as React from "react";
export interface AccordionItem { id: string; title: React.ReactNode; content: React.ReactNode; }
/** Accordion / FAQ list. Single-open unless allowMultiple. */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}
export function Accordion(props: AccordionProps): JSX.Element;
