import type { HTMLAttributes, ReactNode } from "react";

type Trend = "up" | "down" | "flat";

interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  unit?: ReactNode;
  delta?: ReactNode;
  trend?: Trend;
  note?: ReactNode;
}

function Arrow({ dir }: { dir: Trend }) {
  if (dir === "flat") return <span>–</span>;
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: dir === "down" ? "rotate(180deg)" : "none" }}
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

/** KPI / telemetry metric tile. Value uses tabular monospace numerals. */
export function MetricCard({ label, value, unit, delta, trend = "flat", note, className = "", ...rest }: MetricCardProps) {
  return (
    <div className={["ym-metric", className].filter(Boolean).join(" ")} {...rest}>
      <span className="ym-metric__label">{label}</span>
      <div className="ym-metric__value">
        {value}
        {unit && <span className="ym-metric__unit">{unit}</span>}
      </div>
      {(delta || note) && (
        <div className="ym-metric__foot">
          {delta && (
            <span
              className={`ym-metric__delta--${trend}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 3, fontWeight: 600 }}
            >
              <Arrow dir={trend} />
              {delta}
            </span>
          )}
          {note && <span className="ym-metric__note">{note}</span>}
        </div>
      )}
    </div>
  );
}
