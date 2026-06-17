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
.ym-statusdot{ display:inline-flex; align-items:center; gap:8px; font-family:var(--font-sans); font-size:13px; color:var(--content-secondary); }
.ym-statusdot__d{ width:9px; height:9px; border-radius:999px; flex:none; }
.ym-statusdot--online .ym-statusdot__d{ background:var(--status-online); }
.ym-statusdot--offline .ym-statusdot__d{ background:var(--status-offline); }
.ym-statusdot--warning .ym-statusdot__d{ background:var(--status-warning); }
.ym-statusdot--error .ym-statusdot__d{ background:var(--status-error); }
.ym-statusdot--pending .ym-statusdot__d{ background:var(--status-pending); }
.ym-statusdot--certified .ym-statusdot__d{ background:var(--status-certified); }
.ym-statusdot--pulse .ym-statusdot__d{ box-shadow:0 0 0 0 currentColor; animation:ym-pulse 1.8s ease-out infinite; }
@keyframes ym-pulse{ 0%{ box-shadow:0 0 0 0 color-mix(in srgb, currentColor 50%, transparent);} 100%{ box-shadow:0 0 0 7px transparent;} }
`;

/** Minimal labeled live-status dot. Always pair the color with a text label. */
export function StatusDot({ status = "online", pulse = false, children, className = "", ...rest }) {
  useStyles("ym-statusdot-styles", CSS);
  const cls = ["ym-statusdot", `ym-statusdot--${status}`, pulse ? "ym-statusdot--pulse" : "", className].filter(Boolean).join(" ");
  const color = `var(--status-${status})`;
  return (
    <span className={cls} style={{ color }} {...rest}>
      <span className="ym-statusdot__d" />
      {children && <span style={{ color: "var(--content-secondary)" }}>{children}</span>}
    </span>
  );
}
