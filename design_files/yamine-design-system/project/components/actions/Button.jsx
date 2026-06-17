import React from "react";

/* Inject a component stylesheet once. Rules reference DS custom properties so
   they always track the live tokens from styles.css. */
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
.ym-btn{
  --_bg:var(--surface-brand); --_fg:var(--content-inverted); --_bd:transparent; --_bgh:var(--surface-brand-hover); --_bgp:var(--blue-800);
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-sans); font-size:var(--type-button-size); line-height:var(--type-button-line);
  font-weight:var(--type-button-weight); letter-spacing:var(--type-button-track);
  height:40px; padding:0 16px; border-radius:var(--radius-sm);
  background:var(--_bg); color:var(--_fg); border:1px solid var(--_bd);
  cursor:pointer; white-space:nowrap; transition:background .12s ease, border-color .12s ease, color .12s ease;
  text-decoration:none;
}
.ym-btn:hover{ background:var(--_bgh); }
.ym-btn:active{ background:var(--_bgp); }
.ym-btn:focus-visible{ outline:none; box-shadow:var(--focus-ring); }
.ym-btn--sm{ height:32px; padding:0 12px; font-size:13px; gap:6px; }
.ym-btn--lg{ height:48px; padding:0 24px; font-size:16px; }
.ym-btn--secondary{ --_bg:var(--surface-primary); --_fg:var(--content-primary); --_bd:var(--border-strong); --_bgh:var(--state-hover); --_bgp:var(--state-pressed); }
.ym-btn--secondary:hover{ border-color:var(--border-strong); }
.ym-btn--tertiary{ --_bg:transparent; --_fg:var(--content-brand); --_bd:transparent; --_bgh:var(--surface-brand-subtle); --_bgp:var(--blue-100); }
.ym-btn--destructive{ --_bg:var(--red-600); --_fg:#fff; --_bd:transparent; --_bgh:var(--red-700); --_bgp:#7e2018; }
.ym-btn[disabled],.ym-btn[aria-disabled="true"]{ background:var(--state-disabled-surface)!important; color:var(--state-disabled-content)!important; border-color:var(--border-primary)!important; cursor:not-allowed; box-shadow:none!important; }
.ym-btn--tertiary[disabled],.ym-btn--tertiary[aria-disabled="true"]{ background:transparent!important; }
.ym-btn__spin{ width:15px; height:15px; border-radius:999px; border:2px solid currentColor; border-top-color:transparent; animation:ym-spin .7s linear infinite; }
@keyframes ym-spin{ to{ transform:rotate(360deg); } }
`;

/**
 * Yamine primary button / CTA.
 * Variants: primary | secondary | tertiary | destructive. Sizes: sm | md | lg.
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  useStyles("ym-button-styles", CSS);
  const cls = [
    "ym-btn",
    `ym-btn--${variant}`,
    size !== "md" ? `ym-btn--${size}` : "",
    className,
  ].filter(Boolean).join(" ");
  const isDisabled = disabled || loading;
  return (
    <button type={type} className={cls} disabled={isDisabled} aria-disabled={isDisabled} aria-busy={loading} {...rest}>
      {loading && <span className="ym-btn__spin" aria-hidden="true" />}
      {!loading && iconLeft}
      {children}
      {!loading && iconRight}
    </button>
  );
}
