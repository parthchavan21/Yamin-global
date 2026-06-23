/**
 * Central site metadata for Yamin Global. Contact details below are PLACEHOLDERS —
 * replace with real company information before launch (they also feed the
 * JSON-LD structured data and the page footer / enquiry section).
 */

export const SITE_URL = "https://www.yamine.com";

export const SITE = {
  name: "Yamin Global",
  legalName: "Yamin Global FZC",
  tagline: "Industrial monitoring & safety distribution",
  description:
    "Yamin Global supplies certified gas detection, process control and environmental monitoring systems for industrial, commercial and cold-chain operations.",
  url: SITE_URL,
  email: "demo@emailid",
  phone: "+971 55 428 0562",
  phoneHref: "tel:+971554280562",
  address: {
    line1: "P O BOX. 40369, C1 - 1F - SF0010",
    line2: "Ajman Free Zone",
    country: "Ajman – UAE",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/yamine",
    youtube: "https://www.youtube.com/@yamine",
    instagram: "https://www.instagram.com/yamine",
    facebook: "https://www.facebook.com/yamine",
  },
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#industries" },
  { label: "Why Us", href: "#why" },
  { label: "Support", href: "#faq" },
  { label: "Contact", href: "#enquiry" },
] as const;

/** Product families — the services Yamin Global supplies. */
export const GAS_PRODUCTS = [
  {
    icon: "Gauge",
    name: "Fixed Gas Detector",
    desc: "Continuous monitoring of combustible and toxic gases in hazardous fixed installations. ATEX, IECEx and SIL 2 certified.",
    href: "/products/fixed-gas-detector",
  },
  {
    icon: "Wind",
    name: "LPG / PNG / CNG Gas Detector",
    desc: "Purpose-built detection for LPG, piped natural gas and CNG environments — reliable alarm response with low false-trigger rates.",
    href: "#products",
  },
] as const;

export const FLAME_PRODUCTS = [
  {
    icon: "Flame",
    name: "UV and IR Flame Detector",
    desc: "High-speed UV and infrared optical detection for open flames across industrial facilities, oil & gas, and marine environments.",
    href: "/products/flame-detector",
  },
  {
    icon: "Thermometer",
    name: "Heat Detector",
    desc: "Ambient temperature monitoring with factory-preset alarm thresholds — auto-reset operation from 40°C to 210°C.",
    href: "/products/heat-detector",
  },
  {
    icon: "Sparkles",
    name: "Ember Detector",
    desc: "High-speed IR ember detection for conveyors, silos, and wood processing lines. Optical cleaning system prevents dust interference.",
    href: "/products/ember-detector",
  },
] as const;

/** @deprecated use GAS_PRODUCTS / FLAME_PRODUCTS */
export const PRODUCTS = [] as const;

/** Service options offered in the enquiry form's select. */
export const SERVICE_OPTIONS = [
  "Fixed Gas Detector",
  "LPG / PNG / CNG Gas Detector",
  "UV and IR Flame Detector",
  "Heat Detector",
  "Ember Detector",
  "Something else",
] as const;
