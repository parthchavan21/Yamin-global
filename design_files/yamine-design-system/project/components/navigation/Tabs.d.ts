import * as React from "react";
export interface TabItem { id: string; label: React.ReactNode; icon?: React.ReactNode; count?: number; disabled?: boolean; }
/** Underline tab bar (controlled or uncontrolled). */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  value?: string;
  onChange?: (id: string) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
