function SiteFooter() {
  const cols = [
    { h: "Products", links: ["Gas detection", "Process control", "Data acquisition", "Cold chain", "Clean room", "Vibration"] },
    { h: "Company", links: ["About Yamine", "Industries", "Certifications", "Careers"] },
    { h: "Support", links: ["Documentation", "Calibration service", "Contact an engineer"] },
  ];
  return (
    <footer style={{ background: "var(--surface-inverted)", borderTop: "1px solid var(--neutral-800)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 40px",
        display: "grid", gridTemplateColumns: "1.2fr repeat(3, 1fr)", gap: 48,
      }}>
        <div>
          <img src="../../assets/yamine-logo-inverted.svg" alt="Yamine" height="28" style={{ marginBottom: 16 }} />
          <p style={{ margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--neutral-500)", maxWidth: 260 }}>
            Industrial distribution of monitoring, safety and control systems.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <span className="t-label" style={{ color: "var(--neutral-500)", display: "block", marginBottom: 16 }}>{c.h}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {c.links.map((l) => (
                <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--neutral-300)", textDecoration: "none", fontSize: 14 }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "20px 32px",
        borderTop: "1px solid var(--neutral-800)", display: "flex", justifyContent: "space-between",
        fontSize: 12, color: "var(--neutral-500)",
      }}>
        <span>© 2026 Yamine. All rights reserved.</span>
        <span style={{ display: "flex", gap: 24 }}>
          <span>Privacy</span><span>Terms</span><span>Quality policy</span>
        </span>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
