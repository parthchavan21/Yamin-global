import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const LEFT: AccordionItem[] = [
  {
    id: "fgd-1",
    title: "How does the Fixed Gas Detector handle sensor failures?",
    content:
      "The device promptly indicates 'SENSOR OPEN' during a sensor break/open situation, with adjustments made to output current/voltage.",
  },
  {
    id: "fgd-3",
    title: "Can I configure specific alarm levels for different gases?",
    content:
      "Yes, the Fixed Gas Detector allows configuring two independent alarm levels with latch & non-latch facility, offering flexibility for different gas types.",
  },
  {
    id: "fgd-4",
    title: "What is the response time for the Fixed Gas Detector?",
    content:
      "The response time is less than 15 seconds, ensuring quick detection and alerting.",
  },
];

const RIGHT: AccordionItem[] = [
  {
    id: "fgd-2",
    title: "How does the detector handle over-range situations?",
    content:
      "During over-range, the device displays 'OVER RANGE,' and the output current adjusts accordingly, ensuring accuracy even in extreme conditions.",
  },
  {
    id: "fgd-5",
    title: "Is the device compatible with external communication systems?",
    content:
      "Absolutely, the Fixed Gas Detector offers optional RS-485 communication with MODBUS RTU Protocol, facilitating seamless integration into existing systems.",
  },
  {
    id: "fgd-6",
    title: "What certifications does the Fixed Gas Detector carry?",
    content:
      "Every unit ships with ATEX and IECEx certificates. SIL 2-rated variants are available for safety-instrumented systems, along with full calibration records for your compliance audit trail.",
  },
];

export function FixedGasFaq() {
  return (
    <section
      aria-labelledby="fgd-faq-heading"
      style={{
        background: "var(--surface-secondary)",
      }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
        <h2
          id="fgd-faq-heading"
          className="t-h2 text-center"
          style={{ margin: "0 0 40px" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <Accordion items={LEFT} allowMultiple defaultOpen={["fgd-1"]} />
          <Accordion items={RIGHT} allowMultiple defaultOpen={["fgd-2"]} />
        </div>
      </div>
    </section>
  );
}
