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

const mono = { fontFamily: "var(--yg-mono)" } as const;

export function CategoryGrid() {
  return (
    <section id="products" className="yg-sec" style={{ padding: "104px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--yg-gutter)", position: "relative", zIndex: 1 }}>
        <div data-reveal="" style={{ maxWidth: 640, marginBottom: 54 }}>
          <div style={{ ...mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0E5FCB", marginBottom: 20 }}>
            WHAT WE SUPPLY
          </div>
          <h2 style={{ fontSize: "clamp(34px,4.4vw,52px)", lineHeight: 1.04, letterSpacing: "-0.03em", fontWeight: 600, margin: "0 0 16px" }}>
            Systems for every monitoring need
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#46505C", margin: 0 }}>
            Purpose-built detection systems — specified, delivered and supported by engineers, not just
            shipped from a catalogue.
          </p>
        </div>

        <div
          className="yg-prods"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid #E4E8EE", borderLeft: "1px solid #E4E8EE" }}
        >
          {HOME_PRODUCTS.map((p) => {
            const Icon = ICONS[p.icon] ?? Gauge;
            return (
              <a
                key={p.name}
                className="yg-prod"
                href={p.href}
                data-reveal=""
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "30px 28px 28px",
                  borderRight: "1px solid #E4E8EE",
                  borderBottom: "1px solid #E4E8EE",
                  minHeight: 248,
                }}
              >
                <span className="yg-prod-top" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "transparent", transition: "background .3s ease" }} />
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "auto" }}>
                  <span
                    className="yg-prod-ic"
                    style={{
                      display: "inline-flex",
                      padding: 12,
                      background: "#0E5FCB",
                      color: "#fff",
                      transition: "background .3s ease",
                    }}
                  >
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <span className="yg-arrow" style={{ ...mono, fontSize: 18, color: "#C2CAD4", transition: "all .3s ease" }}>
                    ↗
                  </span>
                </div>
                <div style={{ ...mono, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#0E5FCB", margin: "28px 0 12px" }}>
                  {p.tag}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 10px", lineHeight: 1.15 }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5C6675", margin: 0 }}>{p.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
