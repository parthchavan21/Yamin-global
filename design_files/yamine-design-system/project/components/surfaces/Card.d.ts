import * as React from "react";

/**
 * Bordered surface container — product, info and spec cards.
 * @startingPoint section="Surfaces" subtitle="Cards, metric tiles & alert panels" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** Uppercase label above the title. */
  eyebrow?: React.ReactNode;
  /** Node rendered at the top-right (e.g. a Button or IconButton). */
  action?: React.ReactNode;
  variant?: "primary" | "secondary";
  /** Hover affordance for clickable cards. */
  interactive?: boolean;
  /** Remove interior padding (for media / tables that bleed to the edge). */
  flush?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
