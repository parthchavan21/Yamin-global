"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

/**
 * Reusable FAQ accordion in the Yamin Global v2 (yg) style — numbered, single
 * column, blueprint dividers. Pass per-page content via `items`; the number is
 * derived from order so items only need `{ q, a }`.
 */
export function FaqSection({
  items,
  eyebrow = "SUPPORT",
  title = "Frequently asked questions",
  id = "faq",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  id?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section id={id} className="yg-sec border-t border-[#ECEEF2] py-[104px]">
      <div className="mx-auto max-w-[980px] px-[var(--yg-gutter)]">
        <div className="mb-5 font-yg-mono text-[12px] uppercase tracking-[0.12em] text-yg-blue" data-reveal="">
          {eyebrow}
        </div>
        <h2 className="mb-12 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-yg-ink" data-reveal="">
          {title}
        </h2>
        <div className="border-t border-[#E4E8EE]" data-reveal="">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="yg-faq border-b border-[#E4E8EE]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full cursor-pointer grid-cols-[54px_1fr_30px] items-center gap-[18px] border-0 bg-transparent px-1 py-[26px] text-left"
                >
                  <span className="font-yg-mono text-[13px] text-yg-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span className="yg-faq-q text-[20px] font-medium tracking-[-0.015em] text-yg-ink transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`text-center font-yg-mono text-[24px] font-normal transition-all duration-300 ${
                      isOpen ? "rotate-45 text-yg-blue" : "text-[#9AA4B2]"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="m-0 max-w-[720px] pb-7 pl-[72px] text-[16px] leading-[1.65] text-[#5C6675]">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
