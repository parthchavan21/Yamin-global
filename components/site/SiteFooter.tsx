import { SITE } from "@/lib/site";
import { EnquirySection } from "@/components/site/EnquirySection";

const COLS = [
  { h: "Products", links: ["Gas detection", "Process control", "Data acquisition", "Cold chain", "Clean room", "Vibration"] },
  { h: "Company", links: ["About Yamin Global", "Industries", "Certifications", "Careers"] },
  { h: "Support", links: ["Documentation", "Calibration service", "Contact an engineer"] },
];

export function SiteFooter() {
  return (
    <footer>
      <EnquirySection />
      <div style={{ background: "var(--surface-inverted)", borderTop: "1px solid var(--neutral-800)" }}>
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr] gap-10 lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <span
            className="block text-xl font-bold mb-4"
            style={{ color: "var(--blue-300)", fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
          >
            Yamin Global
          </span>
          <p style={{ margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--neutral-500)", maxWidth: 260 }}>
            Industrial distribution of monitoring, safety and control systems.
          </p>
        </div>
        {COLS.map((c) => (
          <nav key={c.h} aria-label={c.h}>
            <span className="t-label block mb-4" style={{ color: "var(--neutral-500)" }}>{c.h}</span>
            <div className="flex flex-col gap-2.5">
              {c.links.map((l) => (
                <a key={l} href="#" className="no-underline" style={{ color: "var(--neutral-300)", fontSize: 14 }}>
                  {l}
                </a>
              ))}
            </div>
          </nav>
        ))}
        <div>
          <span className="t-label block mb-4" style={{ color: "var(--neutral-500)" }}>Contact</span>
          <address className="not-italic flex flex-col gap-2.5" style={{ fontSize: 14, color: "var(--neutral-300)" }}>
            <span style={{ color: "var(--neutral-500)", lineHeight: "20px" }}>
              {SITE.address.line1}, {SITE.address.line2}, {SITE.address.country}
            </span>
            <a href={`mailto:${SITE.email}`} className="no-underline" style={{ color: "var(--neutral-300)" }}>
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="no-underline" style={{ color: "var(--neutral-300)" }}>
              {SITE.phone}
            </a>
          </address>
        </div>
      </div>
      <div
        className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row sm:justify-between gap-3"
        style={{ borderTop: "1px solid var(--neutral-800)", fontSize: 12, color: "var(--neutral-500)" }}
      >
        <span>© 2026 {SITE.legalName} All rights reserved.</span>
        <span className="flex gap-6">
          <span>Privacy policy</span>
          <span>Terms</span>
          <span>Quality policy</span>
        </span>
      </div>
      </div>
    </footer>
  );
}
