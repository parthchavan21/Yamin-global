import Image from "next/image";

const mono = { fontFamily: "var(--yg-mono)" } as const;

export function FeaturedBand() {
  return (
    <section className="yg-sec" style={{ padding: "0 0 104px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 36px " }}>
        <div className="yg-feat" data-reveal="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #E4E8EE" }}>
          <div className="yg-feat-pad" style={{ padding: "54px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ ...mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0E5FCB", marginBottom: 20 }}>
              [ On site ]
            </div>
            <h3 style={{ fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.08, letterSpacing: "-0.025em", fontWeight: 600, margin: "0 0 16px" }}>
              Engineered, commissioned and calibrated — not just shipped
            </h3>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#46505C", margin: "0 0 28px", maxWidth: 440 }}>
              Our engineers specify, commission and calibrate on site, and hand over named certificates and
              calibration records for your compliance file.
            </p>
            <a
              className="yg-cta-line yg-mono"
              href="#why"
              style={{
                alignSelf: "flex-start",
                background: "#0E1A2B",
                color: "#fff",
                fontSize: 13,
                letterSpacing: ".05em",
                textTransform: "uppercase",
                padding: "15px 26px",
              }}
            >
              <span>How we work &nbsp;→</span>
            </a>
          </div>
          <div style={{ position: "relative", minHeight: 380, borderLeft: "1px solid #E4E8EE", background: "#F4F6F9" }}>
            <Image
              src="/Pumpjack-B.png"
              alt="Field engineer commissioning monitoring equipment on site"
              fill
              sizes="(max-width: 980px) 100vw, 640px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
