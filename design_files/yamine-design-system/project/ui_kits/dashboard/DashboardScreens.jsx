const {
  MetricCard, AlertPanel, Table, Badge, Button, Card, Chip, Tabs,
} = window.YamineDesignSystem_15fa45;

const DEVICES = [
  { id: 1, device: "GD-400 · CH₄", zone: "Tank farm A", reading: "12 %LEL", cal: "2026-08-02", status: "online", label: "Online" },
  { id: 2, device: "GD-400 · H₂S", zone: "Pump house", reading: "0.4 ppm", cal: "2026-07-15", status: "online", label: "Online" },
  { id: 3, device: "TP-220 probe", zone: "Cold store 2", reading: "-18.4 °C", cal: "2026-05-28", status: "warning", label: "Cal. due" },
  { id: 4, device: "VB-100 sensor", zone: "Compressor 1", reading: "4.2 mm/s", cal: "2026-09-10", status: "error", label: "Alarm" },
  { id: 5, device: "CR-50 monitor", zone: "Clean room", reading: "352 p/m³", cal: "2026-06-30", status: "offline", label: "Offline" },
  { id: 6, device: "DL-900 logger", zone: "Warehouse", reading: "21.2 °C", cal: "2026-11-02", status: "online", label: "Online" },
];

const COLUMNS = [
  { key: "device", label: "Device" },
  { key: "zone", label: "Zone" },
  { key: "reading", label: "Reading", numeric: true },
  { key: "cal", label: "Next calibration", numeric: true },
  { key: "status", label: "Status", render: (r) => <Badge status={r.status}>{r.label}</Badge> },
];

function OverviewScreen({ onGoAlarms }) {
  const [sel, setSel] = React.useState([]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }} data-screen-label="Dashboard overview">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 className="t-h2" style={{ margin: 0 }}>Overview</h1>
          <p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--content-tertiary)" }}>North Refinery · 128 devices across 14 zones</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="secondary">Export report</Button>
          <Button>Add device</Button>
        </div>
      </div>

      <AlertPanel tone="error" title="Active alarm — Compressor 1" onClose={() => {}}>
        VB-100 vibration above 4.0 mm/s for 12 minutes. <a href="#" onClick={(e)=>{e.preventDefault(); onGoAlarms();}} style={{ color: "inherit", fontWeight: 600 }}>View alarm →</a>
      </AlertPanel>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        <MetricCard label="Devices online" value="124" unit="/128" delta="2" trend="up" note="last 24h" />
        <MetricCard label="Active alarms" value="3" delta="1" trend="down" note="last 24h" />
        <MetricCard label="Ambient CO₂" value="412" unit="ppm" delta="1.2%" trend="up" note="vs last hr" />
        <MetricCard label="Cold store 2" value="-18.4" unit="°C" delta="0.3°" trend="flat" note="setpoint -18" />
      </div>

      <Card flush>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border-secondary)" }}>
          <span className="t-label" style={{ color: "var(--content-secondary)" }}>Device status</span>
          <Chip tone="neutral">Updated 30 s ago</Chip>
        </div>
        <Table columns={COLUMNS} rows={DEVICES} selectedKeys={sel} onRowClick={(r) => setSel([r.id])} style={{ border: "none", borderRadius: 0 }} />
      </Card>
    </div>
  );
}

function DevicesScreen() {
  const [tab, setTab] = React.useState("all");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }} data-screen-label="Devices list">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 className="t-h2" style={{ margin: 0 }}>Devices</h1>
        <Button>Add device</Button>
      </div>
      <Tabs value={tab} onChange={setTab} items={[
        { id: "all", label: "All", count: 128 },
        { id: "gas", label: "Gas detection", count: 46 },
        { id: "temp", label: "Temperature", count: 38 },
        { id: "vib", label: "Vibration", count: 22 },
        { id: "clean", label: "Clean room", count: 12 },
      ]} />
      <Table columns={COLUMNS} rows={DEVICES} striped />
    </div>
  );
}

function AlarmsScreen() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }} data-screen-label="Alarms">
      <h1 className="t-h2" style={{ margin: 0 }}>Alarms</h1>
      <AlertPanel tone="error" title="VB-100 · Compressor 1 — vibration high">4.2 mm/s, threshold 4.0 mm/s. Raised 12 min ago.</AlertPanel>
      <AlertPanel tone="warning" title="TP-220 · Cold store 2 — calibration overdue">Calibration window ended 2026-05-28.</AlertPanel>
      <AlertPanel tone="warning" title="CR-50 · Clean room — connection lost">Last sample received 26 min ago.</AlertPanel>
      <Card variant="secondary">
        <span className="t-label" style={{ color: "var(--content-tertiary)" }}>Resolved today</span>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--content-secondary)" }}>2 alarms acknowledged and closed by R. Khalil.</p>
      </Card>
    </div>
  );
}

function PlaceholderScreen({ name }) {
  return (
    <div style={{
      border: "1px dashed var(--border-strong)", borderRadius: "var(--radius-lg)",
      padding: 64, textAlign: "center", color: "var(--content-tertiary)", fontSize: 14,
    }} data-screen-label={name}>
      {name} — intentionally not designed yet.
    </div>
  );
}

window.OverviewScreen = OverviewScreen;
window.DevicesScreen = DevicesScreen;
window.AlarmsScreen = AlarmsScreen;
window.PlaceholderScreen = PlaceholderScreen;
