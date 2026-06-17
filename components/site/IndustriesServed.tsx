import type { ComponentType } from "react";
import {
  CircuitBoard, Cog, Droplets, Factory, FlaskConical, Leaf, Snowflake, Zap,
  type LucideProps,
} from "lucide-react";

const INDUSTRIES: { Icon: ComponentType<LucideProps>; name: string }[] = [
  { Icon: Factory, name: "Oil, gas & petrochemical" },
  { Icon: FlaskConical, name: "Pharmaceutical & life sciences" },
  { Icon: Snowflake, name: "Food & cold chain" },
  { Icon: Droplets, name: "Water & wastewater" },
  { Icon: Cog, name: "Manufacturing & process" },
  { Icon: Zap, name: "Power & energy" },
  { Icon: CircuitBoard, name: "Semiconductor & clean room" },
  { Icon: Leaf, name: "Environmental & municipal" },
];


export function IndustriesServed() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      style={{
        background: "var(--surface-secondary)",
        borderTop: "1px solid var(--border-primary)",
        borderBottom: "1px solid var(--border-primary)",
      }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
        <div style={{ maxWidth: 560, marginBottom: 48 }}>
          <span className="t-label block mb-3" style={{ color: "var(--content-brand)" }}>
            Industries we serve
          </span>
          <h2 id="industries-heading" className="t-h1" style={{ margin: "0 0 12px" }}>
            Built for the sites that can&apos;t afford downtime
          </h2>
          <p className="t-body-lg t-secondary" style={{ margin: 0 }}>
            From hazardous-area gas detection to validated cold chains, we equip operations where accuracy and
            compliance are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map(({ Icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-3 p-4"
              style={{
                background: "var(--surface-primary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span
                className="inline-flex items-center justify-center shrink-0"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-md)",
                  background: "var(--surface-brand-subtle)",
                }}
              >
                <Icon size={20} color="var(--content-brand)" strokeWidth={2} />
              </span>
              <span style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>{name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
