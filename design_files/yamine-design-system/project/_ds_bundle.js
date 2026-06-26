/* @ds-bundle: {"format":3,"namespace":"YamineDesignSystem_15fa45","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"StatusDot","sourcePath":"components/data-display/StatusDot.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FIELD_CSS","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AlertPanel","sourcePath":"components/surfaces/AlertPanel.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"MetricCard","sourcePath":"components/surfaces/MetricCard.jsx"},{"name":"Table","sourcePath":"components/tables/Table.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"00cd97f02deb","components/actions/IconButton.jsx":"484f31eb9af9","components/data-display/Badge.jsx":"065784cd2e08","components/data-display/Chip.jsx":"0541345fd8f5","components/data-display/StatusDot.jsx":"fbd2bd6d2301","components/forms/Checkbox.jsx":"f3d10c839af9","components/forms/Input.jsx":"b3b69beac5ee","components/forms/Radio.jsx":"ec6b007bd756","components/forms/Select.jsx":"0e13a9f7cbcb","components/forms/Switch.jsx":"6c90cf97f03f","components/forms/Textarea.jsx":"88a508343958","components/navigation/Accordion.jsx":"a40d3c0dfa88","components/navigation/Breadcrumbs.jsx":"8e63af4eac1c","components/navigation/Tabs.jsx":"6e65fb8fd4f7","components/surfaces/AlertPanel.jsx":"dcc385ccfc39","components/surfaces/Card.jsx":"29147e07e70d","components/surfaces/MetricCard.jsx":"88d59e84b6cf","components/tables/Table.jsx":"44002bc4d100","ui_kits/dashboard/AppSidebar.jsx":"85555908760d","ui_kits/dashboard/AppTopbar.jsx":"a5d11f06454e","ui_kits/dashboard/DashboardScreens.jsx":"ce9944df70fe","ui_kits/website/SiteFooter.jsx":"7748ebe04193","ui_kits/website/SiteHeader.jsx":"2f0659b6eb9d","ui_kits/website/SiteHero.jsx":"9549d9b31c52","ui_kits/website/SiteSections.jsx":"809e1ffd75db"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YamineDesignSystem_15fa45 = window.YamineDesignSystem_15fa45 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject a component stylesheet once. Rules reference DS custom properties so
   they always track the live tokens from styles.css. */
function useStyles(id, css) {
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
function Button({
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
  const cls = ["ym-btn", `ym-btn--${variant}`, size !== "md" ? `ym-btn--${size}` : "", className].filter(Boolean).join(" ");
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: isDisabled,
    "aria-disabled": isDisabled,
    "aria-busy": loading
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "ym-btn__spin",
    "aria-hidden": "true"
  }), !loading && iconLeft, children, !loading && iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ym-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  width:40px; height:40px; border-radius:var(--radius-sm);
  background:transparent; color:var(--content-secondary); border:1px solid transparent;
  cursor:pointer; transition:background .12s ease, color .12s ease, border-color .12s ease;
}
.ym-iconbtn:hover{ background:var(--state-hover); color:var(--content-primary); }
.ym-iconbtn:active{ background:var(--state-pressed); }
.ym-iconbtn:focus-visible{ outline:none; box-shadow:var(--focus-ring); }
.ym-iconbtn--outline{ border-color:var(--border-strong); background:var(--surface-primary); }
.ym-iconbtn--brand{ color:var(--content-inverted); background:var(--surface-brand); }
.ym-iconbtn--brand:hover{ background:var(--surface-brand-hover); color:#fff; }
.ym-iconbtn--sm{ width:32px; height:32px; border-radius:var(--radius-xs); }
.ym-iconbtn[disabled]{ color:var(--state-disabled-content); cursor:not-allowed; background:transparent; }
`;
function useStyles(id, css) {
  // Inject synchronously on first render — CSS must exist BEFORE the element
  // mounts, so no mount-time transition fires from an unstyled state.
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}

/** Square icon-only button. Always pass an accessible `label`. */
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  children,
  className = "",
  ...rest
}) {
  useStyles("ym-iconbtn-styles", CSS);
  const cls = ["ym-iconbtn", variant !== "ghost" ? `ym-iconbtn--${variant}` : "", size === "sm" ? "ym-iconbtn--sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-badge{ display:inline-flex; align-items:center; gap:6px; height:22px; padding:0 10px;
  border-radius:var(--radius-pill); font-family:var(--font-sans); font-size:12px; line-height:1; font-weight:600;
  letter-spacing:.02em; border:1px solid transparent; white-space:nowrap; }
.ym-badge__dot{ width:7px; height:7px; border-radius:999px; background:currentColor; flex:none; }
.ym-badge--neutral{ background:var(--surface-tertiary); color:var(--content-secondary); border-color:var(--border-primary); }
.ym-badge--online{ background:var(--surface-success); color:var(--content-success); border-color:var(--green-100); }
.ym-badge--offline{ background:var(--surface-tertiary); color:var(--content-tertiary); border-color:var(--border-primary); }
.ym-badge--warning{ background:var(--surface-warning); color:var(--content-warning); border-color:var(--amber-100); }
.ym-badge--error{ background:var(--surface-error); color:var(--content-error); border-color:var(--red-100); }
.ym-badge--pending{ background:var(--surface-info); color:var(--content-brand); border-color:var(--blue-100); }
.ym-badge--certified{ background:var(--teal-50); color:var(--teal-700); border-color:var(--teal-100); }
.ym-badge--maintenance{ background:var(--surface-warning); color:var(--content-warning); border-color:var(--amber-100); }
`;
const TONE = {
  online: "online",
  offline: "offline",
  active: "online",
  inactive: "offline",
  warning: "warning",
  error: "error",
  pending: "pending",
  certified: "certified",
  maintenance: "maintenance",
  neutral: "neutral"
};

/** Status / state indicator pill with a leading dot. */
function Badge({
  status = "neutral",
  dot = true,
  children,
  className = "",
  ...rest
}) {
  useStyles("ym-badge-styles", CSS);
  const tone = TONE[status] || "neutral";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["ym-badge", `ym-badge--${tone}`, className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ym-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-chip{ display:inline-flex; align-items:center; gap:6px; height:28px; padding:0 12px;
  border-radius:var(--radius-pill); font-family:var(--font-sans); font-size:13px; line-height:1; font-weight:500;
  border:1px solid var(--border-primary); background:var(--surface-secondary); color:var(--content-secondary); }
.ym-chip--brand{ background:var(--surface-brand-subtle); color:var(--content-brand); border-color:var(--blue-100); }
.ym-chip--success{ background:var(--surface-success); color:var(--content-success); border-color:var(--green-100); }
.ym-chip--warning{ background:var(--surface-warning); color:var(--content-warning); border-color:var(--amber-100); }
.ym-chip--error{ background:var(--surface-error); color:var(--content-error); border-color:var(--red-100); }
.ym-chip--info{ background:var(--surface-info); color:var(--content-brand); border-color:var(--blue-100); }
.ym-chip--selectable{ cursor:pointer; transition:background .12s, border-color .12s, color .12s; }
.ym-chip--selectable:hover{ border-color:var(--border-strong); }
.ym-chip--selected{ background:var(--surface-brand); color:#fff; border-color:var(--surface-brand); }
.ym-chip__x{ display:inline-flex; margin-right:-4px; border:none; background:transparent; color:currentColor; cursor:pointer; padding:2px; border-radius:999px; opacity:.7; }
.ym-chip__x:hover{ opacity:1; }
`;

/** Compact label / tag. Tones, plus selectable and removable modes. */
function Chip({
  tone = "neutral",
  selectable = false,
  selected = false,
  onRemove,
  children,
  className = "",
  ...rest
}) {
  useStyles("ym-chip-styles", CSS);
  const cls = ["ym-chip", tone !== "neutral" ? `ym-chip--${tone}` : "", selectable ? "ym-chip--selectable" : "", selected ? "ym-chip--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    role: selectable ? "button" : undefined,
    tabIndex: selectable ? 0 : undefined
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ym-chip__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
function StatusDot({
  status = "online",
  pulse = false,
  children,
  className = "",
  ...rest
}) {
  useStyles("ym-statusdot-styles", CSS);
  const cls = ["ym-statusdot", `ym-statusdot--${status}`, pulse ? "ym-statusdot--pulse" : "", className].filter(Boolean).join(" ");
  const color = `var(--status-${status})`;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      color
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ym-statusdot__d"
  }), children && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-secondary)"
    }
  }, children));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-choice{ display:inline-flex; align-items:flex-start; gap:10px; cursor:pointer; font-family:var(--font-sans);
  font-size:var(--type-body-size); line-height:22px; color:var(--content-primary); }
.ym-choice--disabled{ cursor:not-allowed; color:var(--content-disabled); }
.ym-choice input{ position:absolute; opacity:0; width:0; height:0; }
.ym-checkbox__box{ flex:none; width:18px; height:18px; margin-top:2px; border:1px solid var(--border-strong); border-radius:var(--radius-xs);
  background:var(--surface-primary); display:inline-flex; align-items:center; justify-content:center; color:#fff; transition:background .12s, border-color .12s; }
.ym-choice input:checked + .ym-checkbox__box{ background:var(--surface-brand); border-color:var(--surface-brand); }
.ym-choice input:focus-visible + .ym-checkbox__box{ box-shadow:var(--focus-ring); }
.ym-choice--disabled .ym-checkbox__box{ background:var(--state-disabled-surface); border-color:var(--border-primary); }
.ym-checkbox__box svg{ opacity:0; }
.ym-choice input:checked + .ym-checkbox__box svg{ opacity:1; }
`;

/** Checkbox with adjacent label. Controlled or uncontrolled. */
function Checkbox({
  label,
  disabled = false,
  className = "",
  id,
  ...rest
}) {
  useStyles("ym-checkbox-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: ["ym-choice", disabled ? "ym-choice--disabled" : "", className].filter(Boolean).join(" "),
    htmlFor: fid
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fid,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ym-checkbox__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  // Inject synchronously on first render — CSS must exist BEFORE the element
  // mounts, so no mount-time transition fires from an unstyled state.
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const FIELD_CSS = `
.ym-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
.ym-field__label{ font-size:var(--type-label-size); line-height:var(--type-label-line); font-weight:var(--type-label-weight); letter-spacing:var(--type-label-track); text-transform:uppercase; color:var(--content-secondary); }
.ym-field__req{ color:var(--content-error); margin-left:4px; }
.ym-field__help{ font-size:var(--type-body-sm-size); line-height:var(--type-body-sm-line); color:var(--content-tertiary); }
.ym-field__help--error{ color:var(--content-error); }

.ym-inputwrap{ display:flex; align-items:center; gap:8px; height:40px; padding:0 12px;
  background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-sm);
  transition:border-color .12s ease, box-shadow .12s ease; }
.ym-inputwrap:focus-within{ border-color:var(--border-focus); box-shadow:var(--focus-ring); }
.ym-inputwrap--error{ border-color:var(--border-error); }
.ym-inputwrap--error:focus-within{ box-shadow:0 0 0 3px color-mix(in srgb, var(--red-600) 30%, transparent); }
.ym-inputwrap--disabled{ background:var(--state-disabled-surface); border-color:var(--border-primary); }
.ym-inputwrap__icon{ display:inline-flex; color:var(--content-tertiary); flex:none; }
.ym-input{ flex:1; min-width:0; border:none; outline:none; background:transparent;
  font-family:var(--font-sans); font-size:var(--type-input-size); line-height:var(--type-input-line); color:var(--content-primary); }
.ym-input::placeholder{ color:var(--content-tertiary); }
.ym-input:disabled{ color:var(--content-disabled); cursor:not-allowed; }
.ym-input--mono{ font-family:var(--font-mono); }
`;

/** Text input with label, helper/error text, optional prefix/suffix icon. */
function Input({
  label,
  helperText,
  error,
  required = false,
  disabled = false,
  prefix = null,
  suffix = null,
  mono = false,
  id,
  className = "",
  ...rest
}) {
  useStyles("ym-field-styles", FIELD_CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  const wrapCls = ["ym-inputwrap", error ? "ym-inputwrap--error" : "", disabled ? "ym-inputwrap--disabled" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["ym-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ym-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ym-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "ym-inputwrap__icon"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: ["ym-input", mono ? "ym-input--mono" : ""].filter(Boolean).join(" "),
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "ym-inputwrap__icon"
  }, suffix)), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    className: ["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")
  }, error || helperText));
}
Object.assign(__ds_scope, { FIELD_CSS, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-radio{ display:inline-flex; align-items:flex-start; gap:10px; cursor:pointer; font-family:var(--font-sans);
  font-size:var(--type-body-size); line-height:22px; color:var(--content-primary); }
.ym-radio--disabled{ cursor:not-allowed; color:var(--content-disabled); }
.ym-radio input{ position:absolute; opacity:0; width:0; height:0; }
.ym-radio__dot{ flex:none; width:18px; height:18px; margin-top:2px; border:1px solid var(--border-strong); border-radius:999px;
  background:var(--surface-primary); display:inline-flex; align-items:center; justify-content:center; transition:border-color .12s; }
.ym-radio__dot::after{ content:""; width:8px; height:8px; border-radius:999px; background:var(--surface-brand); transform:scale(0); transition:transform .12s ease; }
.ym-radio input:checked + .ym-radio__dot{ border-color:var(--surface-brand); }
.ym-radio input:checked + .ym-radio__dot::after{ transform:scale(1); }
.ym-radio input:focus-visible + .ym-radio__dot{ box-shadow:var(--focus-ring); }
.ym-radio--disabled .ym-radio__dot{ background:var(--state-disabled-surface); border-color:var(--border-primary); }
`;

/** Single radio option with label. Group by sharing a `name`. */
function Radio({
  label,
  disabled = false,
  className = "",
  id,
  ...rest
}) {
  useStyles("ym-radio-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: ["ym-radio", disabled ? "ym-radio--disabled" : "", className].filter(Boolean).join(" "),
    htmlFor: fid
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: fid,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ym-radio__dot",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  // Inject synchronously on first render — CSS must exist BEFORE the element
  // mounts, so no mount-time transition fires from an unstyled state.
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = __ds_scope.FIELD_CSS + `
.ym-selectwrap{ position:relative; display:flex; align-items:center; height:40px;
  background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-sm);
  transition:border-color .12s ease, box-shadow .12s ease; }
.ym-selectwrap:focus-within{ border-color:var(--border-focus); box-shadow:var(--focus-ring); }
.ym-selectwrap--error{ border-color:var(--border-error); }
.ym-select{ appearance:none; -webkit-appearance:none; width:100%; height:100%; border:none; outline:none; background:transparent;
  padding:0 36px 0 12px; font-family:var(--font-sans); font-size:var(--type-input-size); color:var(--content-primary); cursor:pointer; }
.ym-select:disabled{ color:var(--content-disabled); cursor:not-allowed; }
.ym-selectwrap--disabled{ background:var(--state-disabled-surface); }
.ym-selectwrap__chev{ position:absolute; right:12px; pointer-events:none; color:var(--content-tertiary); display:inline-flex; }
`;
const Chevron = () => /*#__PURE__*/React.createElement("span", {
  className: "ym-selectwrap__chev",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
})));

/** Native select styled to match Yamine inputs. Pass <option>s as children. */
function Select({
  label,
  helperText,
  error,
  required = false,
  disabled = false,
  id,
  className = "",
  children,
  ...rest
}) {
  useStyles("ym-select-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return /*#__PURE__*/React.createElement("div", {
    className: ["ym-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ym-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ym-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: ["ym-selectwrap", error ? "ym-selectwrap--error" : "", disabled ? "ym-selectwrap--disabled" : ""].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "ym-select",
    disabled: disabled,
    "aria-invalid": !!error
  }, rest), children), /*#__PURE__*/React.createElement(Chevron, null)), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    className: ["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")
  }, error || helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-switch{ display:inline-flex; align-items:center; gap:10px; cursor:pointer; font-family:var(--font-sans);
  font-size:var(--type-body-size); color:var(--content-primary); }
.ym-switch--disabled{ cursor:not-allowed; color:var(--content-disabled); }
.ym-switch input{ position:absolute; opacity:0; width:0; height:0; }
.ym-switch__track{ flex:none; width:40px; height:22px; border-radius:999px; background:var(--neutral-300);
  position:relative; transition:background .15s ease; }
.ym-switch__track::after{ content:""; position:absolute; top:2px; left:2px; width:18px; height:18px; border-radius:999px;
  background:#fff; transition:transform .15s ease; }
.ym-switch input:checked + .ym-switch__track{ background:var(--surface-brand); }
.ym-switch input:checked + .ym-switch__track::after{ transform:translateX(18px); }
.ym-switch input:focus-visible + .ym-switch__track{ box-shadow:var(--focus-ring); }
.ym-switch--disabled .ym-switch__track{ background:var(--neutral-200); }
`;

/** Binary on/off toggle. Use for settings; use Checkbox for form selection. */
function Switch({
  label,
  disabled = false,
  className = "",
  id,
  ...rest
}) {
  useStyles("ym-switch-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    className: ["ym-switch", disabled ? "ym-switch--disabled" : "", className].filter(Boolean).join(" "),
    htmlFor: fid
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: fid,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ym-switch__track",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
  // Inject synchronously on first render — CSS must exist BEFORE the element
  // mounts, so no mount-time transition fires from an unstyled state.
  if (!document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = __ds_scope.FIELD_CSS + `
.ym-textarea{ width:100%; min-height:96px; resize:vertical; padding:10px 12px;
  background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-sm);
  font-family:var(--font-sans); font-size:var(--type-input-size); line-height:var(--type-input-line); color:var(--content-primary);
  outline:none; transition:border-color .12s ease, box-shadow .12s ease; }
.ym-textarea::placeholder{ color:var(--content-tertiary); }
.ym-textarea:focus{ border-color:var(--border-focus); box-shadow:var(--focus-ring); }
.ym-textarea--error{ border-color:var(--border-error); }
.ym-textarea:disabled{ background:var(--state-disabled-surface); color:var(--content-disabled); cursor:not-allowed; }
`;

/** Multi-line text field sharing the field label/helper system. */
function Textarea({
  label,
  helperText,
  error,
  required = false,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  useStyles("ym-textarea-styles", CSS);
  const autoId = React.useId();
  const fid = id || autoId;
  return /*#__PURE__*/React.createElement("div", {
    className: ["ym-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ym-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ym-field__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: ["ym-textarea", error ? "ym-textarea--error" : ""].filter(Boolean).join(" "),
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    className: ["ym-field__help", error ? "ym-field__help--error" : ""].filter(Boolean).join(" ")
  }, error || helperText));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-accordion{ font-family:var(--font-sans); border:1px solid var(--border-primary); border-radius:var(--radius-md); overflow:hidden; background:var(--surface-primary); }
.ym-accordion__item + .ym-accordion__item{ border-top:1px solid var(--border-secondary); }
.ym-accordion__btn{ width:100%; appearance:none; border:none; background:transparent; cursor:pointer; text-align:left;
  display:flex; align-items:center; justify-content:space-between; gap:12px; padding:16px 20px;
  font-size:15px; font-weight:500; color:var(--content-primary); transition:background .12s; }
.ym-accordion__btn:hover{ background:var(--surface-secondary); }
.ym-accordion__btn:focus-visible{ outline:none; box-shadow:inset 0 0 0 2px var(--border-focus); }
.ym-accordion__chev{ flex:none; color:var(--content-tertiary); transition:transform .18s ease; }
.ym-accordion__item--open .ym-accordion__chev{ transform:rotate(180deg); color:var(--content-brand); }
.ym-accordion__panel{ padding:0 20px 18px; font-size:14px; line-height:22px; color:var(--content-secondary); }
`;

/** Accordion / FAQ. items: [{id, title, content}]. Single-open by default. */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = "",
  ...rest
}) {
  useStyles("ym-accordion-styles", CSS);
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = id => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(id)) next.delete(id);else next.add(id);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ym-accordion", className].filter(Boolean).join(" ")
  }, rest), items.map(it => {
    const isOpen = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      className: ["ym-accordion__item", isOpen ? "ym-accordion__item--open" : ""].filter(Boolean).join(" ")
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "ym-accordion__btn",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.id)
    }, it.title, /*#__PURE__*/React.createElement("span", {
      className: "ym-accordion__chev",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    })))), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "ym-accordion__panel"
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-breadcrumbs{ display:flex; align-items:center; flex-wrap:wrap; gap:6px; font-family:var(--font-sans); font-size:13px; }
.ym-breadcrumbs a{ color:var(--content-secondary); text-decoration:none; padding:2px 4px; border-radius:4px; transition:color .12s, background .12s; }
.ym-breadcrumbs a:hover{ color:var(--content-brand); background:var(--surface-brand-subtle); }
.ym-breadcrumbs__sep{ color:var(--content-tertiary); display:inline-flex; }
.ym-breadcrumbs__current{ color:var(--content-primary); font-weight:500; padding:2px 4px; }
`;
const Sep = () => /*#__PURE__*/React.createElement("span", {
  className: "ym-breadcrumbs__sep",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m9 18 6-6-6-6"
})));

/** Breadcrumb trail. Pass items [{label, href}]; last item is the current page. */
function Breadcrumbs({
  items = [],
  className = "",
  ...rest
}) {
  useStyles("ym-breadcrumbs-styles", CSS);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["ym-breadcrumbs", className].filter(Boolean).join(" "),
    "aria-label": "Breadcrumb"
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "ym-breadcrumbs__current",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#"
    }, it.label), !last && /*#__PURE__*/React.createElement(Sep, null));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-tabs{ display:flex; gap:4px; border-bottom:1px solid var(--border-primary); font-family:var(--font-sans); }
.ym-tab{ appearance:none; border:none; background:transparent; cursor:pointer;
  padding:10px 14px; font-size:14px; font-weight:500; color:var(--content-secondary);
  border-bottom:2px solid transparent; margin-bottom:-1px; transition:color .12s, border-color .12s; display:inline-flex; align-items:center; gap:8px; }
.ym-tab:hover{ color:var(--content-primary); }
.ym-tab--active{ color:var(--content-brand); border-bottom-color:var(--border-brand); }
.ym-tab:focus-visible{ outline:none; box-shadow:var(--focus-ring); border-radius:4px; }
.ym-tab--disabled{ color:var(--content-disabled); cursor:not-allowed; }
.ym-tab__count{ font-family:var(--font-mono); font-size:11px; background:var(--surface-tertiary); color:var(--content-secondary); border-radius:999px; padding:1px 7px; }
`;

/** Underline tab bar. Controlled via `value` + `onChange`. */
function Tabs({
  items = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  useStyles("ym-tabs-styles", CSS);
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ym-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    "aria-selected": active === it.id,
    disabled: it.disabled,
    className: ["ym-tab", active === it.id ? "ym-tab--active" : "", it.disabled ? "ym-tab--disabled" : ""].filter(Boolean).join(" "),
    onClick: () => !it.disabled && select(it.id)
  }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "ym-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AlertPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-alert{ display:flex; gap:12px; padding:14px 16px; border-radius:var(--radius-md); border:1px solid; font-family:var(--font-sans); }
.ym-alert__icon{ flex:none; margin-top:1px; }
.ym-alert__title{ font-size:14px; font-weight:600; margin-bottom:2px; }
.ym-alert__body{ font-size:13px; line-height:20px; color:var(--content-secondary); }
.ym-alert__close{ margin-left:auto; border:none; background:transparent; cursor:pointer; color:var(--content-tertiary); padding:2px; border-radius:4px; align-self:flex-start; }
.ym-alert--info{ background:var(--surface-info); border-color:var(--blue-100); color:var(--content-brand); }
.ym-alert--success{ background:var(--surface-success); border-color:var(--green-100); color:var(--content-success); }
.ym-alert--warning{ background:var(--surface-warning); border-color:var(--amber-100); color:var(--content-warning); }
.ym-alert--error{ background:var(--surface-error); border-color:var(--red-100); color:var(--content-error); }
.ym-alert__title, .ym-alert__icon{ color:inherit; }
`;
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"
  }),
  error: /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"
  })
};

/** Inline alert / callout panel. Tone drives surface, border and icon. */
function AlertPanel({
  tone = "info",
  title,
  onClose,
  children,
  className = "",
  ...rest
}) {
  useStyles("ym-alert-styles", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ym-alert", `ym-alert--${tone}`, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ym-alert__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "ym-alert__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ym-alert__body"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ym-alert__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { AlertPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AlertPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
.ym-card{ background:var(--surface-primary); border:1px solid var(--border-primary); border-radius:var(--radius-lg);
  padding:24px; font-family:var(--font-sans); color:var(--content-primary); }
.ym-card--secondary{ background:var(--surface-secondary); }
.ym-card--flush{ padding:0; overflow:hidden; }
.ym-card--interactive{ cursor:pointer; transition:border-color .12s ease, background .12s ease; }
.ym-card--interactive:hover{ border-color:var(--border-strong); background:var(--surface-secondary); }
.ym-card__head{ display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:8px; }
.ym-card__title{ font-size:var(--type-h3-size); line-height:var(--type-h3-line); font-weight:600; letter-spacing:-0.006em; }
.ym-card__eyebrow{ font-size:12px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:var(--content-tertiary); margin-bottom:4px; display:block; }
`;

/** Bordered surface container. Hierarchy from stroke + fill, never shadow. */
function Card({
  title,
  eyebrow,
  action,
  interactive = false,
  variant = "primary",
  flush = false,
  children,
  className = "",
  ...rest
}) {
  useStyles("ym-card-styles", CSS);
  const cls = ["ym-card", variant === "secondary" ? "ym-card--secondary" : "", interactive ? "ym-card--interactive" : "", flush ? "ym-card--flush" : "", className].filter(Boolean).join(" ");
  const hasHead = title || eyebrow || action;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), hasHead && /*#__PURE__*/React.createElement("div", {
    className: "ym-card__head"
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "ym-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    className: "ym-card__title"
  }, title)), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
const Arrow = ({
  dir
}) => dir === "flat" ? /*#__PURE__*/React.createElement("span", null, "\u2013") : /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    transform: dir === "down" ? "rotate(180deg)" : "none"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 19V5M5 12l7-7 7 7"
}));

/** KPI / telemetry metric tile. Value uses tabular monospace numerals. */
function MetricCard({
  label,
  value,
  unit,
  delta,
  trend = "flat",
  note,
  className = "",
  ...rest
}) {
  useStyles("ym-metric-styles", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ym-metric", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ym-metric__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ym-metric__value"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "ym-metric__unit"
  }, unit)), (delta || note) && /*#__PURE__*/React.createElement("div", {
    className: "ym-metric__foot"
  }, delta && /*#__PURE__*/React.createElement("span", {
    className: `ym-metric__delta--${trend}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: trend
  }), delta), note && /*#__PURE__*/React.createElement("span", {
    className: "ym-metric__note"
  }, note)));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/tables/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyles(id, css) {
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
function Table({
  columns = [],
  rows = [],
  rowKey = "id",
  striped = false,
  hoverable = true,
  selectedKeys = [],
  onRowClick,
  emptyMessage = "No records to display",
  className = "",
  ...rest
}) {
  useStyles("ym-table-styles", CSS);
  const cls = ["ym-table", striped ? "ym-table--striped" : "", hoverable ? "ym-table--hover" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["ym-table-wrap", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("table", {
    className: cls
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.numeric ? "ym-table__num" : ""
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "ym-table__empty",
    colSpan: columns.length
  }, emptyMessage)), rows.map((row, i) => {
    const k = row[rowKey] ?? i;
    const selected = selectedKeys.includes(k);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      className: selected ? "ym-table__row--selected" : "",
      style: onRowClick ? {
        cursor: "pointer"
      } : undefined,
      onClick: onRowClick ? () => onRowClick(row) : undefined
    }, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      className: c.numeric ? "ym-table__num" : ""
    }, c.render ? c.render(row) : row[c.key])));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/Table.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppSidebar.jsx
try { (() => {
function SidebarIcon({
  name,
  size = 18
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons[name]) {
      ref.current.innerHTML = "";
      const el = window.lucide.createElement(window.lucide.icons[name]);
      el.setAttribute("width", size);
      el.setAttribute("height", size);
      ref.current.appendChild(el);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex"
    }
  });
}
const NAV = [{
  id: "overview",
  icon: "LayoutDashboard",
  label: "Overview"
}, {
  id: "devices",
  icon: "Cpu",
  label: "Devices",
  count: 128
}, {
  id: "alarms",
  icon: "BellRing",
  label: "Alarms",
  count: 3
}, {
  id: "reports",
  icon: "FileBarChart",
  label: "Reports",
  children: ["Daily summary", "Calibration log"]
}, {
  id: "compliance",
  icon: "ShieldCheck",
  label: "Compliance"
}, {
  id: "billing",
  icon: "CreditCard",
  label: "Billing",
  disabled: true
}];
function AppSidebar({
  active,
  onSelect
}) {
  const itemStyle = it => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    padding: "10px 12px",
    borderRadius: "var(--radius-sm)",
    border: "none",
    background: active === it.id ? "var(--surface-brand-subtle)" : "transparent",
    color: it.disabled ? "var(--content-disabled)" : active === it.id ? "var(--content-brand)" : "var(--content-secondary)",
    fontSize: 14,
    fontWeight: active === it.id ? 600 : 500,
    fontFamily: "var(--font-sans)",
    cursor: it.disabled ? "not-allowed" : "pointer",
    textAlign: "left"
  });
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-width)",
      flex: "none",
      background: "var(--surface-primary)",
      borderRight: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      padding: 16,
      gap: 4,
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 12px 20px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/yamine-logo.svg",
    alt: "Yamine",
    height: "26"
  })), /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--content-tertiary)",
      padding: "0 12px 8px"
    }
  }, "Monitoring"), NAV.map(it => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.id
  }, /*#__PURE__*/React.createElement("button", {
    style: itemStyle(it),
    onClick: () => !it.disabled && onSelect(it.id),
    onMouseEnter: e => {
      if (!it.disabled && active !== it.id) e.currentTarget.style.background = "var(--state-hover)";
    },
    onMouseLeave: e => {
      if (active !== it.id) e.currentTarget.style.background = "transparent";
    },
    disabled: it.disabled
  }, /*#__PURE__*/React.createElement(SidebarIcon, {
    name: it.icon
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "t-mono",
    style: {
      fontSize: 11,
      background: it.id === "alarms" ? "var(--surface-error)" : "var(--surface-tertiary)",
      color: it.id === "alarms" ? "var(--content-error)" : "var(--content-secondary)",
      borderRadius: 999,
      padding: "2px 8px"
    }
  }, it.count)), it.children && active === it.id && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      margin: "2px 0 4px 30px",
      borderLeft: "1px solid var(--border-primary)",
      paddingLeft: 12
    }
  }, it.children.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      padding: "6px 8px",
      fontSize: 13,
      textDecoration: "none",
      borderRadius: 4,
      color: i === 0 ? "var(--content-primary)" : "var(--content-tertiary)",
      fontWeight: i === 0 ? 500 : 400
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      borderTop: "1px solid var(--border-secondary)",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: itemStyle({
      id: "settings"
    }),
    onClick: () => {}
  }, /*#__PURE__*/React.createElement(SidebarIcon, {
    name: "Settings"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Settings"))));
}
window.AppSidebar = AppSidebar;
window.SidebarIcon = SidebarIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppTopbar.jsx
try { (() => {
const {
  Input,
  IconButton,
  Breadcrumbs,
  StatusDot
} = window.YamineDesignSystem_15fa45;
function AppTopbar({
  section
}) {
  const labels = {
    overview: "Overview",
    devices: "Devices",
    alarms: "Alarms",
    reports: "Reports",
    compliance: "Compliance"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      background: "var(--surface-primary)",
      borderBottom: "1px solid var(--border-primary)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "North Refinery",
      href: "#"
    }, {
      label: labels[section] || section
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search devices, zones, alarms\u2026",
    prefix: /*#__PURE__*/React.createElement(window.SidebarIcon, {
      name: "Search",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(StatusDot, {
    status: "online",
    pulse: true
  }, "All systems"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(window.SidebarIcon, {
    name: "Bell"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: "var(--surface-brand)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      fontWeight: 600
    }
  }, "RK"));
}
window.AppTopbar = AppTopbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppTopbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardScreens.jsx
try { (() => {
const {
  MetricCard,
  AlertPanel,
  Table,
  Badge,
  Button,
  Card,
  Chip,
  Tabs
} = window.YamineDesignSystem_15fa45;
const DEVICES = [{
  id: 1,
  device: "GD-400 · CH₄",
  zone: "Tank farm A",
  reading: "12 %LEL",
  cal: "2026-08-02",
  status: "online",
  label: "Online"
}, {
  id: 2,
  device: "GD-400 · H₂S",
  zone: "Pump house",
  reading: "0.4 ppm",
  cal: "2026-07-15",
  status: "online",
  label: "Online"
}, {
  id: 3,
  device: "TP-220 probe",
  zone: "Cold store 2",
  reading: "-18.4 °C",
  cal: "2026-05-28",
  status: "warning",
  label: "Cal. due"
}, {
  id: 4,
  device: "VB-100 sensor",
  zone: "Compressor 1",
  reading: "4.2 mm/s",
  cal: "2026-09-10",
  status: "error",
  label: "Alarm"
}, {
  id: 5,
  device: "CR-50 monitor",
  zone: "Clean room",
  reading: "352 p/m³",
  cal: "2026-06-30",
  status: "offline",
  label: "Offline"
}, {
  id: 6,
  device: "DL-900 logger",
  zone: "Warehouse",
  reading: "21.2 °C",
  cal: "2026-11-02",
  status: "online",
  label: "Online"
}];
const COLUMNS = [{
  key: "device",
  label: "Device"
}, {
  key: "zone",
  label: "Zone"
}, {
  key: "reading",
  label: "Reading",
  numeric: true
}, {
  key: "cal",
  label: "Next calibration",
  numeric: true
}, {
  key: "status",
  label: "Status",
  render: r => /*#__PURE__*/React.createElement(Badge, {
    status: r.status
  }, r.label)
}];
function OverviewScreen({
  onGoAlarms
}) {
  const [sel, setSel] = React.useState([]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    },
    "data-screen-label": "Dashboard overview"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "t-h2",
    style: {
      margin: 0
    }
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 14,
      color: "var(--content-tertiary)"
    }
  }, "North Refinery \xB7 128 devices across 14 zones")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Export report"), /*#__PURE__*/React.createElement(Button, null, "Add device"))), /*#__PURE__*/React.createElement(AlertPanel, {
    tone: "error",
    title: "Active alarm \u2014 Compressor 1",
    onClose: () => {}
  }, "VB-100 vibration above 4.0 mm/s for 12 minutes. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onGoAlarms();
    },
    style: {
      color: "inherit",
      fontWeight: 600
    }
  }, "View alarm \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Devices online",
    value: "124",
    unit: "/128",
    delta: "2",
    trend: "up",
    note: "last 24h"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Active alarms",
    value: "3",
    delta: "1",
    trend: "down",
    note: "last 24h"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Ambient CO\u2082",
    value: "412",
    unit: "ppm",
    delta: "1.2%",
    trend: "up",
    note: "vs last hr"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Cold store 2",
    value: "-18.4",
    unit: "\xB0C",
    delta: "0.3\xB0",
    trend: "flat",
    note: "setpoint -18"
  })), /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--border-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--content-secondary)"
    }
  }, "Device status"), /*#__PURE__*/React.createElement(Chip, {
    tone: "neutral"
  }, "Updated 30 s ago")), /*#__PURE__*/React.createElement(Table, {
    columns: COLUMNS,
    rows: DEVICES,
    selectedKeys: sel,
    onRowClick: r => setSel([r.id]),
    style: {
      border: "none",
      borderRadius: 0
    }
  })));
}
function DevicesScreen() {
  const [tab, setTab] = React.useState("all");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    },
    "data-screen-label": "Devices list"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "t-h2",
    style: {
      margin: 0
    }
  }, "Devices"), /*#__PURE__*/React.createElement(Button, null, "Add device")), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: "all",
      label: "All",
      count: 128
    }, {
      id: "gas",
      label: "Gas detection",
      count: 46
    }, {
      id: "temp",
      label: "Temperature",
      count: 38
    }, {
      id: "vib",
      label: "Vibration",
      count: 22
    }, {
      id: "clean",
      label: "Clean room",
      count: 12
    }]
  }), /*#__PURE__*/React.createElement(Table, {
    columns: COLUMNS,
    rows: DEVICES,
    striped: true
  }));
}
function AlarmsScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    },
    "data-screen-label": "Alarms"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "t-h2",
    style: {
      margin: 0
    }
  }, "Alarms"), /*#__PURE__*/React.createElement(AlertPanel, {
    tone: "error",
    title: "VB-100 \xB7 Compressor 1 \u2014 vibration high"
  }, "4.2 mm/s, threshold 4.0 mm/s. Raised 12 min ago."), /*#__PURE__*/React.createElement(AlertPanel, {
    tone: "warning",
    title: "TP-220 \xB7 Cold store 2 \u2014 calibration overdue"
  }, "Calibration window ended 2026-05-28."), /*#__PURE__*/React.createElement(AlertPanel, {
    tone: "warning",
    title: "CR-50 \xB7 Clean room \u2014 connection lost"
  }, "Last sample received 26 min ago."), /*#__PURE__*/React.createElement(Card, {
    variant: "secondary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--content-tertiary)"
    }
  }, "Resolved today"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "var(--content-secondary)"
    }
  }, "2 alarms acknowledged and closed by R. Khalil.")));
}
function PlaceholderScreen({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px dashed var(--border-strong)",
      borderRadius: "var(--radius-lg)",
      padding: 64,
      textAlign: "center",
      color: "var(--content-tertiary)",
      fontSize: 14
    },
    "data-screen-label": name
  }, name, " \u2014 intentionally not designed yet.");
}
window.OverviewScreen = OverviewScreen;
window.DevicesScreen = DevicesScreen;
window.AlarmsScreen = AlarmsScreen;
window.PlaceholderScreen = PlaceholderScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
function SiteFooter() {
  const cols = [{
    h: "Products",
    links: ["Gas detection", "Process control", "Data acquisition", "Cold chain", "Clean room", "Vibration"]
  }, {
    h: "Company",
    links: ["About Yamine", "Industries", "Certifications", "Careers"]
  }, {
    h: "Support",
    links: ["Documentation", "Calibration service", "Contact an engineer"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverted)",
      borderTop: "1px solid var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 40px",
      display: "grid",
      gridTemplateColumns: "1.2fr repeat(3, 1fr)",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/yamine-logo-inverted.svg",
    alt: "Yamine",
    height: "28",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: "20px",
      color: "var(--neutral-500)",
      maxWidth: 260
    }
  }, "Industrial distribution of monitoring, safety and control systems.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--neutral-500)",
      display: "block",
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--neutral-300)",
      textDecoration: "none",
      fontSize: 14
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px 32px",
      borderTop: "1px solid var(--neutral-800)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--neutral-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Yamine. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", null, "Quality policy"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Button
} = window.YamineDesignSystem_15fa45;
function SiteHeader() {
  const links = ["Products", "Solutions", "Industries", "Support", "About"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--surface-primary)",
      borderBottom: "1px solid var(--border-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px",
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/yamine-logo.svg",
    alt: "Yamine",
    height: "30"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      flex: 1
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      padding: "8px 12px",
      borderRadius: "var(--radius-sm)",
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "none",
      color: i === 0 ? "var(--content-brand)" : "var(--content-secondary)",
      background: i === 0 ? "var(--surface-brand-subtle)" : "transparent"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "sm"
  }, "Contact sales"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Request a quote"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHero.jsx
try { (() => {
const {
  Button,
  Badge,
  StatusDot,
  MetricCard
} = window.YamineDesignSystem_15fa45;
function TelemetryPanel() {
  const rows = [{
    name: "CH₄ · Tank farm A",
    val: "12 %LEL",
    status: "online"
  }, {
    name: "H₂S · Pump house",
    val: "0.4 ppm",
    status: "online"
  }, {
    name: "Cold store 2",
    val: "-18.4 °C",
    status: "warning"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-primary)",
      border: "1px solid var(--border-primary)",
      borderRadius: "var(--radius-xl)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--content-secondary)"
    }
  }, "Live telemetry"), /*#__PURE__*/React.createElement(StatusDot, {
    status: "online",
    pulse: true
  }, "Streaming")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Ambient CO\u2082",
    value: "412",
    unit: "ppm",
    delta: "1.2%",
    trend: "up"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Particles",
    value: "352",
    unit: "p/m\xB3",
    delta: "0.8%",
    trend: "down"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-secondary)",
      borderRadius: "var(--radius-md)"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderTop: i ? "1px solid var(--border-secondary)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--content-secondary)"
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-mono",
    style: {
      fontSize: 13
    }
  }, r.val), /*#__PURE__*/React.createElement(StatusDot, {
    status: r.status
  }))))));
}
function SiteHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-secondary)",
      borderBottom: "1px solid var(--border-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--content-brand)",
      display: "block",
      marginBottom: 16
    }
  }, "Industrial monitoring & safety"), /*#__PURE__*/React.createElement("h1", {
    className: "t-display",
    style: {
      margin: "0 0 20px",
      textWrap: "balance"
    }
  }, "Monitoring technology your compliance depends on."), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg t-secondary",
    style: {
      margin: "0 0 32px",
      maxWidth: 520
    }
  }, "Yamine supplies certified gas detection, process control and environmental monitoring systems for industrial, commercial and cold-chain operations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Browse products"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Talk to an engineer")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "certified",
    dot: false
  }, "ATEX"), /*#__PURE__*/React.createElement(Badge, {
    status: "certified",
    dot: false
  }, "IECEx"), /*#__PURE__*/React.createElement(Badge, {
    status: "certified",
    dot: false
  }, "SIL2"), /*#__PURE__*/React.createElement(Badge, {
    status: "certified",
    dot: false
  }, "ISO 9001"))), /*#__PURE__*/React.createElement(TelemetryPanel, null)));
}
window.SiteHero = SiteHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteSections.jsx
try { (() => {
const {
  Card,
  Chip,
  Accordion,
  Button
} = window.YamineDesignSystem_15fa45;
const CATEGORIES = [{
  icon: "Flame",
  name: "Gas Detection Systems",
  desc: "Fixed and portable detectors for combustible and toxic gases.",
  tags: ["ATEX", "4–20 mA"]
}, {
  icon: "Gauge",
  name: "Process Control Instruments",
  desc: "Transmitters, controllers and indicators for process lines.",
  tags: ["Modbus", "HART"]
}, {
  icon: "Database",
  name: "Data Acquisition Software",
  desc: "Logging, trending and alarm management across sites.",
  tags: ["OPC UA", "Cloud"]
}, {
  icon: "Snowflake",
  name: "Cold Chain Monitoring",
  desc: "Temperature mapping and alerting for storage and transport.",
  tags: ["21 CFR 11", "GDP"]
}, {
  icon: "Wind",
  name: "Clean Room Monitoring",
  desc: "Particle, pressure and humidity monitoring for controlled environments.",
  tags: ["ISO 14644"]
}, {
  icon: "Activity",
  name: "Vibration Monitoring",
  desc: "Continuous machine-health sensing for rotating equipment.",
  tags: ["ISO 10816"]
}];
function LucideIcon({
  name,
  size = 22,
  color = "var(--content-brand)"
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons[name]) {
      ref.current.innerHTML = "";
      const el = window.lucide.createElement(window.lucide.icons[name]);
      el.setAttribute("width", size);
      el.setAttribute("height", size);
      ref.current.appendChild(el);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      color
    }
  });
}
function CategoryGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-label",
    style: {
      color: "var(--content-brand)",
      display: "block",
      marginBottom: 12
    }
  }, "What we supply"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h1",
    style: {
      margin: "0 0 12px"
    }
  }, "Systems for every monitoring need"), /*#__PURE__*/React.createElement("p", {
    className: "t-body-lg t-secondary",
    style: {
      margin: 0
    }
  }, "Eight product families, one accountable supplier \u2014 specified, delivered and supported by engineers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-brand-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(LucideIcon, {
    name: c.icon
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      fontSize: 17,
      fontWeight: 600
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 14,
      lineHeight: "22px",
      color: "var(--content-secondary)"
    }
  }, c.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, c.tags.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    tone: "info"
  }, t)))))));
}
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-secondary)",
      borderTop: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      margin: "0 0 32px",
      textAlign: "center"
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: ["a"],
    items: [{
      id: "a",
      title: "Which certifications do your gas detectors carry?",
      content: "Fixed detectors are ATEX and IECEx certified; SIL2-rated variants are available for safety-instrumented systems. Certificates ship with every unit."
    }, {
      id: "b",
      title: "Do you commission and calibrate on site?",
      content: "Yes. Our engineers handle installation, commissioning, and scheduled calibration with full documentation for your compliance records."
    }, {
      id: "c",
      title: "Can your systems integrate with our existing SCADA?",
      content: "All instruments expose standard outputs — 4–20 mA, Modbus RTU/TCP, and OPC UA via our data acquisition software."
    }, {
      id: "d",
      title: "What support do you provide after delivery?",
      content: "We provide technical support after delivery"
    }]
  })));
}
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      margin: "0 0 8px",
      color: "var(--content-inverted)"
    }
  }, "Specify your monitoring system"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--neutral-400)",
      fontSize: 15
    }
  }, "Send us your site requirements \u2014 an engineer responds within one business day.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Request a quote")));
}
window.CategoryGrid = CategoryGrid;
window.Faq = Faq;
window.CtaBand = CtaBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteSections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FIELD_CSS = __ds_scope.FIELD_CSS;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AlertPanel = __ds_scope.AlertPanel;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Table = __ds_scope.Table;

})();
