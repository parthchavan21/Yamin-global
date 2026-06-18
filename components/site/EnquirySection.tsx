import { SITE, SERVICE_OPTIONS } from "@/lib/site";

const mono = { fontFamily: "var(--yg-mono)" } as const;

const labelStyle = {
  display: "block",
  ...mono,
  fontSize: 11,
  letterSpacing: ".06em",
  textTransform: "uppercase",
  color: "#6B7787",
  marginBottom: 8,
} as const;

const inputStyle = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid #DDE3EB",
  background: "#F8FAFC",
  fontFamily: "inherit",
  fontSize: 15,
  color: "#0E1A2B",
  transition: "all .2s ease",
} as const;

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span style={{ ...mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#7E90A8" }}>
        {label}
      </span>
      <span style={{ fontSize: label === "Office" ? 15 : 16, fontWeight: 500, textAlign: "right" }}>{value}</span>
    </>
  );
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    padding: "18px 0",
    borderBottom: "1px solid rgba(255,255,255,.14)",
  } as const;
  return href ? (
    <a href={href} style={style}>
      {inner}
    </a>
  ) : (
    <div style={style}>{inner}</div>
  );
}

export function EnquirySection() {
  return (
    <section id="enquiry" className="yg-sec" style={{ padding: "104px 0", background: "#0E1A2B", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--yg-gutter)", position: "relative", zIndex: 1 }}>
        <div className="yg-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 60, alignItems: "start" }}>
          <div data-reveal-l="">
            <div style={{ ...mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#6FA0EE", marginBottom: 20 }}>
              SEND US AN ENQUIRY
            </div>
            <h2 style={{ fontSize: "clamp(34px,4.4vw,52px)", lineHeight: 1.02, letterSpacing: "-0.03em", fontWeight: 600, margin: "0 0 18px" }}>
              Tell us what you need to monitor.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#9FB0C6", margin: "0 0 36px", maxWidth: 420 }}>
              Share your requirements and the standards you report against — an engineer responds within one
              business day.
            </p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}>
              <ContactRow label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactRow label="Phone" value={SITE.phone} href={SITE.phoneHref} />
              <ContactRow label="Office" value={`${SITE.address.line2} — ${SITE.address.country}`} />
            </div>
          </div>

          <form className="yg-form-pad" data-reveal="" style={{ background: "#fff", color: "#0E1A2B", padding: 36 }}>
            <div className="yg-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div>
                <label style={labelStyle}>Full name *</label>
                <input className="yg-input" placeholder="Jane Doe" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Company</label>
                <input className="yg-input" placeholder="Acme Industries" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input className="yg-input" type="email" placeholder="jane@acme.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input className="yg-input" placeholder="+971 …" style={inputStyle} />
              </div>
            </div>
            <div style={{ marginTop: 18 }}>
              <label style={labelStyle}>Service of interest *</label>
              <select className="yg-input" style={inputStyle} defaultValue={SERVICE_OPTIONS[0]}>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div style={{ marginTop: 18 }}>
              <label style={labelStyle}>Your requirements</label>
              <textarea
                className="yg-input"
                rows={3}
                placeholder="What are you monitoring, where, and against which standards?"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              className="yg-cta yg-mono"
              style={{
                marginTop: 22,
                width: "100%",
                background: "#0E5FCB",
                color: "#fff",
                border: "none",
                fontSize: 13,
                letterSpacing: ".05em",
                textTransform: "uppercase",
                padding: 16,
                cursor: "pointer",
                transition: "background .25s ease",
              }}
            >
              Send enquiry &nbsp;→
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
