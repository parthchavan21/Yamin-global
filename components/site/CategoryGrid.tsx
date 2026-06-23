import type { ComponentType } from "react";
import { Flame, Gauge, Sparkles, Thermometer, Wind, type LucideProps } from "lucide-react";
import { HOME_PRODUCTS } from "@/lib/home";

const ICONS: Record<string, ComponentType<LucideProps>> = {
  Gauge,
  Wind,
  Flame,
  Thermometer,
  Sparkles,
};

export function CategoryGrid() {
  return (
    <section id="products" className="yg-sec relative overflow-hidden py-[104px]">
      <div className="relative z-[1] mx-auto max-w-[1440px] px-[var(--yg-gutter)]">
        <div className="mb-[54px] max-w-[640px]" data-reveal="">
          <div className="mb-5 font-yg-mono text-[12px] uppercase tracking-[0.12em] text-yg-blue">
            WHAT WE SUPPLY
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.03em]">
            Systems for every monitoring need
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#46505C]">
            Purpose-built detection systems — specified, delivered and supported by engineers, not just
            shipped from a catalogue.
          </p>
        </div>

        <div className="yg-prods grid grid-cols-3 border-l border-t border-[#E4E8EE]">
          {HOME_PRODUCTS.map((p) => {
            const Icon = ICONS[p.icon] ?? Gauge;
            return (
              <a
                key={p.name}
                className="yg-prod relative flex min-h-[248px] flex-col border-b border-r border-[#E4E8EE] px-7 pb-7 pt-[30px]"
                href={p.href}
                data-reveal=""
              >
                <span className="yg-prod-top absolute inset-x-0 top-0 h-0.5 bg-transparent transition-colors" />
                <div className="mb-auto flex items-start justify-between">
                  <span className="yg-prod-ic inline-flex bg-yg-blue p-3 text-white transition-colors">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <span className="yg-arrow font-yg-mono text-[18px] text-[#C2CAD4] transition-all">↗</span>
                </div>
                <div className="mb-3 mt-7 font-yg-mono text-[11px] uppercase tracking-[0.08em] text-yg-blue">
                  {p.tag}
                </div>
                <h3 className="mb-2.5 text-[22px] font-semibold leading-[1.15] tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-[#5C6675]">{p.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
