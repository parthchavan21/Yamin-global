function SidebarIcon({ name, size = 18 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons[name]) {
      ref.current.innerHTML = "";
      const el = window.lucide.createElement(window.lucide.icons[name]);
      el.setAttribute("width", size); el.setAttribute("height", size);
      ref.current.appendChild(el);
    }
  });
  return <span ref={ref} style={{ display: "inline-flex" }}></span>;
}

const NAV = [
  { id: "overview", icon: "LayoutDashboard", label: "Overview" },
  { id: "devices", icon: "Cpu", label: "Devices", count: 128 },
  { id: "alarms", icon: "BellRing", label: "Alarms", count: 3 },
  { id: "reports", icon: "FileBarChart", label: "Reports", children: ["Daily summary", "Calibration log"] },
  { id: "compliance", icon: "ShieldCheck", label: "Compliance" },
  { id: "billing", icon: "CreditCard", label: "Billing", disabled: true },
];

function AppSidebar({ active, onSelect }) {
  const itemStyle = (it) => ({
    display: "flex", alignItems: "center", gap: 12, width: "100%",
    padding: "10px 12px", borderRadius: "var(--radius-sm)", border: "none",
    background: active === it.id ? "var(--surface-brand-subtle)" : "transparent",
    color: it.disabled ? "var(--content-disabled)" : active === it.id ? "var(--content-brand)" : "var(--content-secondary)",
    fontSize: 14, fontWeight: active === it.id ? 600 : 500, fontFamily: "var(--font-sans)",
    cursor: it.disabled ? "not-allowed" : "pointer", textAlign: "left",
  });
  return (
    <aside style={{
      width: "var(--sidebar-width)", flex: "none", background: "var(--surface-primary)",
      borderRight: "1px solid var(--border-primary)", display: "flex", flexDirection: "column",
      padding: 16, gap: 4, minHeight: "100vh",
    }}>
      <div style={{ padding: "8px 12px 20px" }}>
        <img src="../../assets/yamine-logo.svg" alt="Yamine" height="26" />
      </div>
      <span className="t-label" style={{ color: "var(--content-tertiary)", padding: "0 12px 8px" }}>Monitoring</span>
      {NAV.map((it) => (
        <React.Fragment key={it.id}>
          <button
            style={itemStyle(it)}
            onClick={() => !it.disabled && onSelect(it.id)}
            onMouseEnter={(e) => { if (!it.disabled && active !== it.id) e.currentTarget.style.background = "var(--state-hover)"; }}
            onMouseLeave={(e) => { if (active !== it.id) e.currentTarget.style.background = "transparent"; }}
            disabled={it.disabled}
          >
            <SidebarIcon name={it.icon} />
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.count != null && (
              <span className="t-mono" style={{
                fontSize: 11, background: it.id === "alarms" ? "var(--surface-error)" : "var(--surface-tertiary)",
                color: it.id === "alarms" ? "var(--content-error)" : "var(--content-secondary)",
                borderRadius: 999, padding: "2px 8px",
              }}>{it.count}</span>
            )}
          </button>
          {it.children && active === it.id && (
            <div style={{ display: "flex", flexDirection: "column", gap: 2, margin: "2px 0 4px 30px", borderLeft: "1px solid var(--border-primary)", paddingLeft: 12 }}>
              {it.children.map((c, i) => (
                <a key={c} href="#" onClick={(e) => e.preventDefault()} style={{
                  padding: "6px 8px", fontSize: 13, textDecoration: "none", borderRadius: 4,
                  color: i === 0 ? "var(--content-primary)" : "var(--content-tertiary)",
                  fontWeight: i === 0 ? 500 : 400,
                }}>{c}</a>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
      <div style={{ marginTop: "auto", borderTop: "1px solid var(--border-secondary)", paddingTop: 12 }}>
        <button style={itemStyle({ id: "settings" })} onClick={() => {}}>
          <SidebarIcon name="Settings" />
          <span style={{ flex: 1 }}>Settings</span>
        </button>
      </div>
    </aside>
  );
}

window.AppSidebar = AppSidebar;
window.SidebarIcon = SidebarIcon;
