import { FaqSection, type FaqItem } from "@/components/site/FaqSection";

const ITEMS: FaqItem[] = [
  {
    q: "How do flame detectors work?",
    a: "Flame detectors operate by sensing specific wavelengths of light emitted by flames, including ultraviolet (UV), infrared (IR), and visible light. When a flame is detected, they trigger alarms, activate fire suppression systems, or shut down equipment to prevent fire hazards.",
  },
  {
    q: "Where are flame detectors used?",
    a: "Flame detectors are employed in a wide range of industries, including industrial facilities, aerospace, commercial buildings, oil and gas, and maritime environments, to swiftly detect and respond to potential fire hazards.",
  },
  {
    q: "What types of flame detectors are available?",
    a: "Flame detectors come in various types, including ultraviolet (UV) flame detectors, infrared (IR) flame detectors, visible light flame detectors, and combination flame detectors that incorporate multiple sensors for enhanced performance.",
  },
  {
    q: "Why choose combination flame detectors?",
    a: "Combination flame detectors offer the highest level of flame detection accuracy by incorporating UV, IR, and visible light sensors. This reduces false alarms and ensures reliable fire hazard detection.",
  },
  {
    q: "How can Yamin Global help with fire safety?",
    a: "Yamin Global provides a range of top-tier flame detectors designed for specific needs and industries. Our products are engineered to fortify your environment against the threat of fire, ensuring your safety remains our top priority.",
  },
  {
    q: "Which gases do your detectors specialise in detecting?",
    a: "Our gas detection solutions cover a wide range of gases, including methane, propane, natural gas, and many more.",
  },
];

export function FlameDetectorFaq() {
  return <FaqSection items={ITEMS} />;
}
