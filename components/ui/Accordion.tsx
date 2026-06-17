"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

/** Accordion / FAQ. Single-open by default; buttons are keyboard-reachable. */
export function Accordion({ items, allowMultiple = false, defaultOpen = [], className = "" }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className={["ym-accordion", className].filter(Boolean).join(" ")}>
      {items.map((it) => {
        const isOpen = open.has(it.id);
        return (
          <div
            key={it.id}
            className={["ym-accordion__item", isOpen ? "ym-accordion__item--open" : ""].filter(Boolean).join(" ")}
          >
            <button
              type="button"
              className="ym-accordion__btn"
              aria-expanded={isOpen}
              onClick={() => toggle(it.id)}
            >
              {it.title}
              <span className="ym-accordion__chev" aria-hidden="true">
                <ChevronDown size={18} />
              </span>
            </button>
            {isOpen && <div className="ym-accordion__panel">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
