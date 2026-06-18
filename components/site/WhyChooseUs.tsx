import { HOME_VALUES } from "@/lib/home";

const mono = { fontFamily: "var(--yg-mono)" } as const;

export function WhyChooseUs() {
  return (
    <section id="why" className="yg-sec" style={{ padding: "104px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--yg-gutter)", position: "relative", zIndex: 1 }}>
        <div className="yg-two" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 60, alignItems: "start" }}>
          <div className="yg-why-intro" data-reveal-l="" style={{ position: "sticky", top: 104 }}>
            <div style={{ ...mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0E5FCB", marginBottom: 20 }}>
              WHY YAMIN GLOBAL
            </div>
            <h2 style={{ fontSize: "clamp(32px,3.8vw,46px)", lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 600, margin: "0 0 20px" }}>
              One accountable supplier, from spec to service
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#46505C", margin: "0 0 28px" }}>
              We deliver reliable, certified monitoring solutions — and stay accountable for them across gas,
              flame, process and environmental monitoring.
            </p>
          </div>
          <div style={{ borderTop: "1px solid #E4E8EE" }}>
            {HOME_VALUES.map((v) => (
              <div
                key={v.no}
                data-reveal=""
                style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 24, padding: "30px 8px", borderBottom: "1px solid #E4E8EE" }}
              >
                <span style={{ ...mono, fontSize: 13, fontWeight: 700, color: "#0E5FCB" }}>{v.no}</span>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 9px" }}>{v.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#5C6675", margin: 0, maxWidth: 520 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
