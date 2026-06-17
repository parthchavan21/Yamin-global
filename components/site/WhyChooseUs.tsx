import type { ComponentType } from "react";
import { Cable, LifeBuoy, ShieldCheck, Wrench, type LucideProps } from "lucide-react";

const POINTS: { Icon: ComponentType<LucideProps>; title: string; body: string }[] = [
  {
    Icon: ShieldCheck,
    title: "Certified and compliant",
    body: "Every instrument ships with named certificates — ATEX, IECEx, SIL 2 — and calibration records for your audit trail.",
  },
  {
    Icon: Wrench,
    title: "Engineered, not just shipped",
    body: "Our engineers specify, commission and calibrate on site, with full documentation for your compliance records.",
  },
  {
    Icon: Cable,
    title: "Integration-ready",
    body: "Standard outputs — 4–20 mA, Modbus RTU/TCP and OPC UA — drop into your existing SCADA without rework.",
  },
  {
    Icon: LifeBuoy,
    title: "Supported after delivery",
    body: "Service contracts cover preventive maintenance, spares and 24/7 alarm escalation across every product family.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      style={{ background: "var(--surface-brand)" }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
        <div style={{ maxWidth: 620, marginBottom: 48 }}>
          <span className="t-label block mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            Why Yamin Global
          </span>
          <h2 id="why-heading" className="t-h1" style={{ margin: "0 0 12px", color: "#fff" }}>
            One accountable supplier, from specification to service
          </h2>
          <p className="t-body-lg" style={{ margin: 0, color: "rgba(255,255,255,0.75)" }}>
            We deliver reliable, high-performance monitoring solutions — and stay accountable for them. Expertise across
            gas, flame, process and environmental monitoring means your sites run on dependable, certified systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {POINTS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "var(--radius-lg)",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="inline-flex items-center justify-center shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--radius-md)",
                  background: "rgba(255,255,255,0.15)",
                }}
              >
                <Icon size={22} color="#fff" strokeWidth={2} />
              </span>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 600, color: "#fff" }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: "22px", color: "rgba(255,255,255,0.7)" }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
