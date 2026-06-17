import React from "react";

function useStyles(id, css){
  // Inject synchronously on first render — CSS must exist BEFORE the element
  // mounts, so no mount-time transition fires from an unstyled state.
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.ym-metric{ background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-lg);
  padding:20px; font-family:var(--font-sans); display:flex; flex-direction:column; gap:8px; }
.ym-metric__label{ font-size:12px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:var(--content-tertiary); }
.ym-metric__value{ font-family:var(--font-mono); font-feature-settings:"tnum" 1; font-size:32px; line-height:1; font-weight:600; color:var(--content-primary); }
.ym-metric__unit{ font-size:15px; color:var(--content-secondary); margin-left:4px; font-family:var(--font-mono); }
.ym-metric__foot{ display:flex; align-items:center; gap:6px; font-size:13px; }
.ym-metric__delta--up{ color:var(--content-success); }
.ym-metric__delta--down{ color:var(--content-error); }
.ym-metric__delta--flat{ color:var(--content-tertiary); }
.ym-metric__note{ color:var(--content-tertiary); }
`;

const Arrow = ({ dir }) => dir === "flat" ? <span>–</span> : (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dir === "down" ? "rotate(180deg)" : "none" }}>
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

/** KPI / telemetry metric tile. Value uses tabular monospace numerals. */
export function MetricCard({ label, value, unit, delta, trend = "flat", note, className = "", ...rest }) {
  useStyles("ym-metric-styles", CSS);
  return (
    <div className={["ym-metric", className].filter(Boolean).join(" ")} {...rest}>
      <span className="ym-metric__label">{label}</span>
      <div className="ym-metric__value">{value}{unit && <span className="ym-metric__unit">{unit}</span>}</div>
      {(delta || note) && (
        <div className="ym-metric__foot">
          {delta && <span className={`ym-metric__delta--${trend}`} style={{ display: "inline-flex", alignItems: "center", gap: 3, fontWeight: 600 }}><Arrow dir={trend} />{delta}</span>}
          {note && <span className="ym-metric__note">{note}</span>}
        </div>
      )}
    </div>
  );
}
