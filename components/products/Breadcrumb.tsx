import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm list-none m-0 p-0">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight size={13} aria-hidden="true" style={{ color: "var(--neutral-400)", flexShrink: 0 }} />
            )}
            {item.href ? (
              <a
                href={item.href}
                className="no-underline hover:opacity-70"
                style={{ color: "var(--content-brand)", transition: "opacity .12s ease" }}
              >
                {item.label}
              </a>
            ) : (
              <span style={{ color: "var(--content-secondary)" }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
