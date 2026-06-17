import type { ComponentType } from "react";
import { Flame, Gauge, Wind, Thermometer, Sparkles, ArrowRight, type LucideProps } from "lucide-react";
import { GAS_PRODUCTS, FLAME_PRODUCTS } from "@/lib/site";

const ICONS: Record<string, ComponentType<LucideProps>> = {
  Flame, Gauge, Wind, Thermometer, Sparkles,
};

function ProductCard({ icon, name, desc, href }: { icon: string; name: string; desc: string; href: string }) {
  const Icon = ICONS[icon];
  return (
    <a
      href={href}
      className="flex flex-col no-underline"
      style={{
        background: "var(--surface-primary)",
        border: "1px solid var(--border-primary)",
        borderRadius: "var(--radius-lg)",
        padding: "24px",
      }}
    >
      <div
        className="flex items-center justify-center mb-4 shrink-0"
        style={{
          width: 40,
          height: 40,
          borderRadius: "var(--radius-md)",
          background: "var(--surface-brand-subtle)",
        }}
      >
        {Icon && <Icon size={20} color="var(--content-brand)" strokeWidth={2} />}
      </div>
      <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600, lineHeight: "22px", color: "var(--content-primary)" }}>
        {name}
      </h3>
      <p style={{ margin: "0 0 16px", fontSize: 13, lineHeight: "20px", color: "var(--content-secondary)", flex: 1 }}>
        {desc}
      </p>
      <span className="inline-flex items-center gap-1.5 t-label" style={{ color: "var(--content-brand)" }}>
        Learn more <ArrowRight size={12} />
      </span>
    </a>
  );
}

export function CategoryGrid() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20"
    >
      <div style={{ maxWidth: 560, marginBottom: 48 }}>
        <span className="t-label block mb-3" style={{ color: "var(--content-brand)" }}>
          What we supply
        </span>
        <h2 id="products-heading" className="t-h1" style={{ margin: "0 0 12px" }}>
          Systems for every monitoring need
        </h2>
        <p className="t-body-lg t-secondary" style={{ margin: 0 }}>
          Purpose-built detection systems — specified, delivered and supported by engineers.
        </p>
      </div>

      <div className="mb-10">
        <span className="t-label block mb-4" style={{ color: "var(--content-tertiary)" }}>Gas Detectors</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GAS_PRODUCTS.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </div>

      <div>
        <span className="t-label block mb-4" style={{ color: "var(--content-tertiary)" }}>Flame Detectors</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FLAME_PRODUCTS.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}
