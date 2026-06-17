const { Button, Badge, StatusDot, MetricCard } = window.YamineDesignSystem_15fa45;

function TelemetryPanel() {
  const rows = [
    { name: "CH₄ · Tank farm A", val: "12 %LEL", status: "online" },
    { name: "H₂S · Pump house", val: "0.4 ppm", status: "online" },
    { name: "Cold store 2", val: "-18.4 °C", status: "warning" },
  ];
  return (
    <div style={{
      background: "var(--surface-primary)", border: "1px solid var(--border-primary)",
      borderRadius: "var(--radius-xl)", padding: 24, display: "flex", flexDirection: "column", gap: 16,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="t-label" style={{ color: "var(--content-secondary)" }}>Live telemetry</span>
        <StatusDot status="online" pulse>Streaming</StatusDot>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <MetricCard label="Ambient CO₂" value="412" unit="ppm" delta="1.2%" trend="up" />
        <MetricCard label="Particles" value="352" unit="p/m³" delta="0.8%" trend="down" />
      </div>
      <div style={{ border: "1px solid var(--border-secondary)", borderRadius: "var(--radius-md)" }}>
        {rows.map((r, i) => (
          <div key={r.name} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "10px 14px", borderTop: i ? "1px solid var(--border-secondary)" : "none",
          }}>
            <span style={{ fontSize: 13, color: "var(--content-secondary)" }}>{r.name}</span>
            <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span className="t-mono" style={{ fontSize: 13 }}>{r.val}</span>
              <StatusDot status={r.status} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SiteHero() {
  return (
    <section style={{ background: "var(--surface-secondary)", borderBottom: "1px solid var(--border-primary)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "80px 32px",
        display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center",
      }}>
        <div>
          <span className="t-label" style={{ color: "var(--content-brand)", display: "block", marginBottom: 16 }}>
            Industrial monitoring &amp; safety
          </span>
          <h1 className="t-display" style={{ margin: "0 0 20px", textWrap: "balance" }}>
            Monitoring technology your compliance depends on.
          </h1>
          <p className="t-body-lg t-secondary" style={{ margin: "0 0 32px", maxWidth: 520 }}>
            Yamine supplies certified gas detection, process control and environmental
            monitoring systems for industrial, commercial and cold-chain operations.
          </p>
          <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
            <Button size="lg">Browse products</Button>
            <Button size="lg" variant="secondary">Talk to an engineer</Button>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Badge status="certified" dot={false}>ATEX</Badge>
            <Badge status="certified" dot={false}>IECEx</Badge>
            <Badge status="certified" dot={false}>SIL2</Badge>
            <Badge status="certified" dot={false}>ISO 9001</Badge>
          </div>
        </div>
        <TelemetryPanel />
      </div>
    </section>
  );
}

window.SiteHero = SiteHero;
