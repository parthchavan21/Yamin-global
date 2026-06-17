import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const LEFT: AccordionItem[] = [
  {
    id: "fld-1",
    title: "How do flame detectors work?",
    content:
      "Flame detectors operate by sensing specific wavelengths of light emitted by flames, including ultraviolet (UV), infrared (IR), and visible light. When a flame is detected, they trigger alarms, activate fire suppression systems, or shut down equipment to prevent fire hazards.",
  },
  {
    id: "fld-3",
    title: "What types of flame detectors are available?",
    content:
      "Flame detectors come in various types, including ultraviolet (UV) flame detectors, infrared (IR) flame detectors, visible light flame detectors, and combination flame detectors that incorporate multiple sensors for enhanced performance."  },
  {
    id: "fld-4",
    title: "Why choose combination flame detectors?",
    content:
      "Combination flame detectors offer the highest level of flame detection accuracy by incorporating UV, IR, and visible light sensors. This reduces false alarms and ensures reliable fire hazard detection."  },
];

const RIGHT: AccordionItem[] = [
  {
    id: "fld-2",
    title: "Where are flame detectors used?",
    content:
      "Flame detectors are employed in a wide range of industries, including industrial facilities, aerospace, commercial buildings, oil and gas, and maritime environments, to swiftly detect and respond to potential fire hazards."  },
  {
    id: "fld-5",
    title: "How can Yamin Global help with fire safety?",
    content:
      "Yamin Global provides a range of top-tier flame detectors designed for specific needs and industries. Our products are engineered to fortify your environment against the threat of fire, ensuring your safety remains our top priority."  },
  {
    id: "fld-6",
    title: "Which gases do your detectors specialise in detecting?",
    content:
      "Our gas detection solutions cover a wide range of gases, including methane, propane, natural gas, and many more."  },
];

export function FlameDetectorFaq() {
  return (
    <section
      aria-labelledby="fld-faq-heading"
      style={{ background: "var(--surface-secondary)", borderTop: "1px solid var(--border-primary)" }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
        <h2 id="fld-faq-heading" className="t-h2 text-center" style={{ margin: "0 0 40px" }}>
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <Accordion items={LEFT} allowMultiple defaultOpen={["fld-1"]} />
          <Accordion items={RIGHT} allowMultiple defaultOpen={["fld-2"]} />
        </div>
      </div>
    </section>
  );
}
