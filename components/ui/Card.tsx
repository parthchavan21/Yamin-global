import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  children: ReactNode;
}

/** Bordered surface container. Hierarchy from stroke + fill, never shadow. */
export function Card({ interactive = false, children, className = "", ...rest }: CardProps) {
  const cls = [
    "ym-card",
    interactive ? "ym-card--interactive" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
