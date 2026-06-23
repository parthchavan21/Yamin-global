/**
 * Content for the Yamin Global v2 marketing homepage (Claude Design handoff
 * "Yamin Global v2"). Kept separate from the shared `lib/site.ts` metadata so
 * the homepage copy lives in one place.
 */

export type HomeProduct = {
  tag: string;
  name: string;
  desc: string;
  href: string;
  /** lucide-react icon name, rendered by the Products grid. */
  icon: string;
};

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    tag: "Gas Detection",
    name: "Fixed Gas Detector",
    desc: "Continuous monitoring of combustible and toxic gases in hazardous fixed installations. ATEX, IECEx and SIL 2 certified.",
    href: "/products/fixed-gas-detector",
    icon: "Gauge",
  },
  {
    tag: "Gas Detection",
    name: "LPG / PNG / CNG Detector",
    desc: "Purpose-built detection for LPG, piped natural gas and CNG environments — reliable alarms with low false-trigger rates.",
    href: "#enquiry",
    icon: "Wind",
  },
  {
    tag: "Flame Detection",
    name: "UV & IR Flame Detector",
    desc: "High-speed UV and infrared optical detection for open flames across facilities, oil & gas, and marine environments.",
    href: "#enquiry",
    icon: "Flame",
  },
  {
    tag: "Flame Detection",
    name: "Heat Detector",
    desc: "Ambient temperature monitoring with factory-preset alarm thresholds — auto-reset operation from 40°C to 210°C.",
    href: "#enquiry",
    icon: "Thermometer",
  },
  {
    tag: "Flame Detection",
    name: "Ember Detector",
    desc: "High-speed IR ember detection for conveyors, silos and wood processing lines, with optical self-cleaning.",
    href: "#enquiry",
    icon: "Sparkles",
  },
];

/**
 * Hover-cursor image shown for an industry row. Each industry has a matching
 * file in `/public/assets/Industries/<name>.png`; by default the image is
 * derived from the industry name, so adding a row needs only a matching file.
 * To override, pass an explicit `image: "/some-file.png"` on the entry below.
 */
type IndustryInput = { name: string; tag: string; image?: string };

const INDUSTRY_DATA: IndustryInput[] = [
  { name: "Oil, gas & petrochemical", tag: "ATEX / IECEx" },
  { name: "Pharmaceutical & life sciences", tag: "Clean room" },
  { name: "Food & cold chain", tag: "Validated" },
  { name: "Water & wastewater", tag: "Process" },
  { name: "Manufacturing & process", tag: "SCADA-ready" },
  { name: "Power & energy", tag: "SIL 2" },
  { name: "Semiconductor & clean room", tag: "Particulate" },
  { name: "Environmental & municipal", tag: "Compliance" },
];

export const HOME_INDUSTRIES = INDUSTRY_DATA.map((d, i) => ({
  name: d.name,
  tag: d.tag,
  no: "0" + (i + 1),
  image: d.image ?? encodeURI(`/assets/Industries/${d.name}.png`),
}));

export const HOME_VALUES: {
  no: string;
  title: string;
  body: string;
  image?: string;
}[] = [
  {
    no: "01",
    title: "Certified and compliant",
    body: "Every instrument ships with named certificates — ATEX, IECEx, SIL 2 — and calibration records for your audit trail.",
    image: "/assets/Certified-2.png",
  },
  {
    no: "02",
    title: "Engineered, not just shipped",
    body: "Our engineers specify, commission and calibrate on site, with full documentation for your compliance records.",
    image: "/assets/Engineered%20not%20just%20shipped.png",
  },
  {
    no: "03",
    title: "Integration-ready",
    body: "Standard outputs — 4–20 mA, Modbus RTU/TCP and OPC UA — drop into your existing SCADA without rework.",
    image: "/assets/Integration-ready.png",
  },
  {
    no: "04",
    title: "Supported after delivery",
    body: "Service contracts cover preventive maintenance, spares and 24/7 alarm escalation across every product family.",
    image: "/assets/Supported%20after%20delivery.png",
  },
];

export const HOME_FAQS = [
  {
    q: "Which certifications do your gas detectors carry?",
    a: "Fixed detectors are ATEX and IECEx certified; SIL 2-rated variants are available for safety-instrumented systems. Named certificates ship with every unit.",
  },
  {
    q: "Do you commission and calibrate on site?",
    a: "Yes. Our engineers specify, commission and calibrate on site, then hand over full documentation and calibration records for your compliance file.",
  },
  {
    q: "Can your systems integrate with our existing SCADA?",
    a: "Standard outputs — 4–20 mA, Modbus RTU/TCP and OPC UA — drop into your existing SCADA without rework.",
  },
  {
    q: "What support do you provide after delivery?",
    a: "Service contracts cover preventive maintenance, spares and 24/7 alarm escalation across every product family.",
  },
].map((f, i) => ({ ...f, no: "0" + (i + 1) }));

/** Certification logos for the marquee (files live in /public/logos). */
export const HOME_CERTS: { src: string; alt: string }[] = [
  ["EX.jpg", "ATEX / Ex"],
  ["IECEx.jpg", "IECEx"],
  ["SIL2-Logo.jpg", "SIL 2"],
  ["CE.jpg", "CE"],
  ["HART.png", "HART"],
  ["UKCA.jpg", "UKCA"],
  ["UL.jpg", "UL"],
  ["RoHS-logo.jpg", "RoHS"],
  ["BIS.png", "BIS"],
  ["PESO.jpg", "PESO"],
  ["Make-in-India.jpg", "Make in India"],
  ["SGS-BASEEFA.png", "SGS Baseefa"],
  ["QCI.png", "QCI"],
  ["ISI.jpg", "ISI"],
].map(([file, alt]) => ({ src: `/assets/logos/${file}`, alt }));
