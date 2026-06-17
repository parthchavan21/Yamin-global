const { Card, Chip, Accordion, Button } = window.YamineDesignSystem_15fa45;

const CATEGORIES = [
  { icon: "Flame",       name: "Gas Detection Systems",      desc: "Fixed and portable detectors for combustible and toxic gases.", tags: ["ATEX", "4–20 mA"] },
  { icon: "Gauge",       name: "Process Control Instruments", desc: "Transmitters, controllers and indicators for process lines.",  tags: ["Modbus", "HART"] },
  { icon: "Database",    name: "Data Acquisition Software",   desc: "Logging, trending and alarm management across sites.",          tags: ["OPC UA", "Cloud"] },
  { icon: "Snowflake",   name: "Cold Chain Monitoring",       desc: "Temperature mapping and alerting for storage and transport.",   tags: ["21 CFR 11", "GDP"] },
  { icon: "Wind",        name: "Clean Room Monitoring",       desc: "Particle, pressure and humidity monitoring for controlled environments.", tags: ["ISO 14644"] },
  { icon: "Activity",    name: "Vibration Monitoring",        desc: "Continuous machine-health sensing for rotating equipment.",     tags: ["ISO 10816"] },
];

function LucideIcon({ name, size = 22, color = "var(--content-brand)" }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons[name]) {
      ref.current.innerHTML = "";
      const el = window.lucide.createElement(window.lucide.icons[name]);
      el.setAttribute("width", size); el.setAttribute("height", size);
      ref.current.appendChild(el);
    }
  });
  return <span ref={ref} style={{ display: "inline-flex", color }}></span>;
}

function CategoryGrid() {
  return (
    <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "80px 32px" }}>
      <div style={{ maxWidth: 560, marginBottom: 48 }}>
        <span className="t-label" style={{ color: "var(--content-brand)", display: "block", marginBottom: 12 }}>What we supply</span>
        <h2 className="t-h1" style={{ margin: "0 0 12px" }}>Systems for every monitoring need</h2>
        <p className="t-body-lg t-secondary" style={{ margin: 0 }}>
          Eight product families, one accountable supplier — specified, delivered and supported by engineers.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {CATEGORIES.map((c) => (
          <Card key={c.name} interactive>
            <div style={{
              width: 44, height: 44, borderRadius: "var(--radius-md)",
              background: "var(--surface-brand-subtle)", display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: 16,
            }}>
              <LucideIcon name={c.icon} />
            </div>
            <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 600 }}>{c.name}</h3>
            <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: "22px", color: "var(--content-secondary)" }}>{c.desc}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {c.tags.map((t) => <Chip key={t} tone="info">{t}</Chip>)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section style={{ background: "var(--surface-secondary)", borderTop: "1px solid var(--border-primary)", borderBottom: "1px solid var(--border-primary)" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "80px 32px" }}>
        <h2 className="t-h2" style={{ margin: "0 0 32px", textAlign: "center" }}>Frequently asked questions</h2>
        <Accordion defaultOpen={["a"]} items={[
          { id: "a", title: "Which certifications do your gas detectors carry?", content: "Fixed detectors are ATEX and IECEx certified; SIL2-rated variants are available for safety-instrumented systems. Certificates ship with every unit." },
          { id: "b", title: "Do you commission and calibrate on site?", content: "Yes. Our engineers handle installation, commissioning, and scheduled calibration with full documentation for your compliance records." },
          { id: "c", title: "Can your systems integrate with our existing SCADA?", content: "All instruments expose standard outputs — 4–20 mA, Modbus RTU/TCP, and OPC UA via our data acquisition software." },
          { id: "d", title: "What support do you provide after delivery?", content: "Service contracts cover preventive maintenance, spares and 24/7 alarm escalation support." },
        ]} />
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{ background: "var(--surface-inverted)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap",
      }}>
        <div>
          <h2 className="t-h2" style={{ margin: "0 0 8px", color: "var(--content-inverted)" }}>Specify your monitoring system</h2>
          <p style={{ margin: 0, color: "var(--neutral-400)", fontSize: 15 }}>Send us your site requirements — an engineer responds within one business day.</p>
        </div>
        <Button size="lg">Request a quote</Button>
      </div>
    </section>
  );
}

window.CategoryGrid = CategoryGrid;
window.Faq = Faq;
window.CtaBand = CtaBand;
