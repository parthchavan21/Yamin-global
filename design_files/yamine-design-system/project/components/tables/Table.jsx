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
.ym-table-wrap{ border:1px solid var(--border-primary); border-radius:var(--radius-md); overflow:hidden; background:var(--surface-primary); font-family:var(--font-sans); }
.ym-table{ width:100%; border-collapse:collapse; font-size:var(--type-table-size); line-height:var(--type-table-line); }
.ym-table th{ text-align:left; background:var(--surface-tertiary); color:var(--content-secondary);
  font-size:12px; font-weight:600; letter-spacing:.06em; text-transform:uppercase;
  padding:10px 16px; border-bottom:1px solid var(--border-primary); white-space:nowrap; }
.ym-table td{ padding:12px 16px; border-bottom:1px solid var(--border-secondary); color:var(--content-primary); vertical-align:middle; }
.ym-table tr:last-child td{ border-bottom:none; }
.ym-table--striped tbody tr:nth-child(even) td{ background:var(--surface-secondary); }
.ym-table--hover tbody tr:hover td{ background:var(--state-hover); }
.ym-table tbody tr.ym-table__row--selected td{ background:var(--state-selected); }
.ym-table .ym-table__num{ text-align:right; font-family:var(--font-mono); font-feature-settings:"tnum" 1; }
.ym-table__empty{ padding:40px 16px; text-align:center; color:var(--content-tertiary); font-size:14px; }
`;

/**
 * Data / specification table.
 * columns: [{ key, label, numeric?, render?(row) }]
 * rows: array of records; `selectedKeys` + `rowKey` highlight selection.
 */
export function Table({
  columns = [], rows = [], rowKey = "id",
  striped = false, hoverable = true,
  selectedKeys = [], onRowClick,
  emptyMessage = "No records to display",
  className = "", ...rest
}) {
  useStyles("ym-table-styles", CSS);
  const cls = ["ym-table", striped ? "ym-table--striped" : "", hoverable ? "ym-table--hover" : ""].filter(Boolean).join(" ");
  return (
    <div className={["ym-table-wrap", className].filter(Boolean).join(" ")} {...rest}>
      <table className={cls}>
        <thead>
          <tr>{columns.map((c) => <th key={c.key} className={c.numeric ? "ym-table__num" : ""}>{c.label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr><td className="ym-table__empty" colSpan={columns.length}>{emptyMessage}</td></tr>
          )}
          {rows.map((row, i) => {
            const k = row[rowKey] ?? i;
            const selected = selectedKeys.includes(k);
            return (
              <tr
                key={k}
                className={selected ? "ym-table__row--selected" : ""}
                style={onRowClick ? { cursor: "pointer" } : undefined}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((c) => (
                  <td key={c.key} className={c.numeric ? "ym-table__num" : ""}>
                    {c.render ? c.render(row) : row[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
