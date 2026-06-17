const { Input, IconButton, Breadcrumbs, StatusDot } = window.YamineDesignSystem_15fa45;

function AppTopbar({ section }) {
  const labels = { overview: "Overview", devices: "Devices", alarms: "Alarms", reports: "Reports", compliance: "Compliance" };
  return (
    <div style={{
      height: 64, background: "var(--surface-primary)", borderBottom: "1px solid var(--border-primary)",
      display: "flex", alignItems: "center", gap: 16, padding: "0 24px",
    }}>
      <Breadcrumbs items={[{ label: "North Refinery", href: "#" }, { label: labels[section] || section }]} />
      <div style={{ flex: 1 }} />
      <div style={{ width: 320 }}>
        <Input placeholder="Search devices, zones, alarms…" prefix={<window.SidebarIcon name="Search" size={16} />} />
      </div>
      <StatusDot status="online" pulse>All systems</StatusDot>
      <IconButton label="Notifications"><window.SidebarIcon name="Bell" /></IconButton>
      <div style={{
        width: 32, height: 32, borderRadius: 999, background: "var(--surface-brand)",
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 600,
      }}>RK</div>
    </div>
  );
}

window.AppTopbar = AppTopbar;
