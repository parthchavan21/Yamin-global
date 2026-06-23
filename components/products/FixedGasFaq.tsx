import { FaqSection, type FaqItem } from "@/components/site/FaqSection";

const ITEMS: FaqItem[] = [
  {
    q: "How does the Fixed Gas Detector handle sensor failures?",
    a: "The device promptly indicates 'SENSOR OPEN' during a sensor break/open situation, with adjustments made to output current/voltage.",
  },
  {
    q: "How does the detector handle over-range situations?",
    a: "During over-range, the device displays 'OVER RANGE,' and the output current adjusts accordingly, ensuring accuracy even in extreme conditions.",
  },
  {
    q: "Can I configure specific alarm levels for different gases?",
    a: "Yes, the Fixed Gas Detector allows configuring two independent alarm levels with latch & non-latch facility, offering flexibility for different gas types.",
  },
  {
    q: "What is the response time for the Fixed Gas Detector?",
    a: "The response time is less than 15 seconds, ensuring quick detection and alerting.",
  },
  {
    q: "Is the device compatible with external communication systems?",
    a: "Absolutely, the Fixed Gas Detector offers optional RS-485 communication with MODBUS RTU Protocol, facilitating seamless integration into existing systems.",
  },
  {
    q: "What certifications does the Fixed Gas Detector carry?",
    a: "Every unit ships with ATEX and IECEx certificates. SIL 2-rated variants are available for safety-instrumented systems, along with full calibration records for your compliance audit trail.",
  },
];

export function FixedGasFaq() {
  return <FaqSection items={ITEMS} />;
}
