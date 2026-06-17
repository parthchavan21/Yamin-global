import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const ITEMS: AccordionItem[] = [
  {
    id: "a",
    title: "Which certifications do your gas detectors carry?",
    content:
      "Fixed detectors are ATEX and IECEx certified; SIL2-rated variants are available for safety-instrumented systems. Certificates ship with every unit.",
  },
  {
    id: "b",
    title: "Do you commission and calibrate on site?",
    content:
      "Yes. Our engineers handle installation, commissioning, and scheduled calibration with full documentation for your compliance records.",
  },
  {
    id: "c",
    title: "Can your systems integrate with our existing SCADA?",
    content:
      "All instruments expose standard outputs — 4–20 mA, Modbus RTU/TCP, and OPC UA via our data acquisition software.",
  },
  {
    id: "d",
    title: "What support do you provide after delivery?",
    content: "Service contracts cover preventive maintenance, spares and 24/7 alarm escalation support.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        background: "var(--surface-secondary)",
        borderTop: "1px solid var(--border-primary)",
        borderBottom: "1px solid var(--border-primary)",
      }}
    >
      <div className="max-w-[880px] mx-auto px-5 md:px-8 py-12 md:py-20">
        <h2 id="faq-heading" className="t-h2 text-center" style={{ margin: "0 0 32px" }}>
          Frequently asked questions
        </h2>
        <Accordion defaultOpen={["a"]} items={ITEMS} />
      </div>
    </section>
  );
}
