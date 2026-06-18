import { SITE } from "@/lib/site";
import { BrandMark } from "@/components/site/BrandMark";

const mono = { fontFamily: "var(--yg-mono)" } as const;

const COLS = [
  {
    title: "Products",
    links: [
      { label: "Gas detection", href: "#products" },
      { label: "Flame detection", href: "#products" },
      { label: "Process control", href: "#products" },
      { label: "Cold chain", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#why" },
      { label: "Industries", href: "#industries" },
      { label: "Certifications", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const headingStyle = {
  ...mono,
  fontSize: 11,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  color: "#9AA4B2",
  margin: "0 0 16px",
  fontWeight: 400,
} as const;

const colStyle = { display: "flex", flexDirection: "column", gap: 11, fontSize: 15, color: "#46505C" } as const;

export function SiteFooter() {
  return (
    <footer style={{ background: "#fff", color: "#0E1A2B", padding: "72px 0 32px", borderTop: "1px solid #ECEEF2" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--yg-gutter)" }}>
        <div
          className="yg-footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40, paddingBottom: 48, borderBottom: "1px solid #ECEEF2" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
              <BrandMark />
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6B7787", margin: 0, maxWidth: 300 }}>
              Industrial distribution of monitoring, safety and control systems. P O BOX 40369, C1 - 1F - SF0010, Ajman Free
              Zone, Ajman — UAE.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 style={headingStyle}>{col.title}</h4>
              <div style={colStyle}>
                {col.links.map((l) => (
                  <a key={l.label} className="yg-navlink" href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 style={headingStyle}>Get in touch</h4>
            <div style={colStyle}>
              <a className="yg-navlink" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <a className="yg-navlink" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
              <a href="#enquiry" style={{ color: "#0E5FCB", fontWeight: 500 }}>
                Request a quote →
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
            paddingTop: 24,
            ...mono,
            fontSize: 12,
            color: "#9AA4B2",
          }}
        >
          <span>© 2026 {SITE.legalName} — All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#">Privacy policy</a>
            <a href="#">Terms</a>
            <a href="#">Quality policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
