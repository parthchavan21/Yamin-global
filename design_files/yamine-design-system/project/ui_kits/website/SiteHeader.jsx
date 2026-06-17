const { Button } = window.YamineDesignSystem_15fa45;

function SiteHeader() {
  const links = ["Products", "Solutions", "Industries", "Support", "About"];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--surface-primary)", borderBottom: "1px solid var(--border-primary)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px",
        height: 64, display: "flex", alignItems: "center", gap: 40,
      }}>
        <img src="../../assets/yamine-logo.svg" alt="Yamine" height="30" />
        <nav style={{ display: "flex", gap: 4, flex: 1 }}>
          {links.map((l, i) => (
            <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{
              padding: "8px 12px", borderRadius: "var(--radius-sm)",
              fontSize: 14, fontWeight: 500, textDecoration: "none",
              color: i === 0 ? "var(--content-brand)" : "var(--content-secondary)",
              background: i === 0 ? "var(--surface-brand-subtle)" : "transparent",
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button variant="tertiary" size="sm">Contact sales</Button>
          <Button size="sm">Request a quote</Button>
        </div>
      </div>
    </header>
  );
}

window.SiteHeader = SiteHeader;
