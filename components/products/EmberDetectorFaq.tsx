import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const LEFT: AccordionItem[] = [
  {
    id: "emb-1",
    title: "How does the Yamin Global Ember Detector contribute to safety in industries and factories?",
    content:
      "The Yamin Global Ember Detector enhances safety by utilizing high-speed ember detection through Infrared (IR) technology. It is specially designed for hazardous environments, providing accurate and precise detection in diverse industrial settings.",
  },
  {
    id: "emb-2",
    title: "What makes the Ember Detector suitable for challenging environments in industries?",
    content:
      "The Ember Detector is designed with a flameproof housing certified to Ex d IIC T6 Gb, making it ideal for potentially explosive environments. Its robust construction ensures reliability in the presence of conveyors, silos, waste recycling conveyors, coal dust conveyance, escalators, drying lines, and extractors.",
  },
  {
    id: "emb-3",
    title: "Can the Ember Detector operate in sunlight, and what is its power consumption?",
    content:
      "Yes, the Ember Detector is insensitive to sunlight, ensuring consistent performance in various lighting conditions. Additionally, it boasts low power consumption, contributing to energy efficiency in industrial operations.",
  },
];

const RIGHT: AccordionItem[] = [
  {
    id: "emb-4",
    title: "What is Ember verification, and how does it enhance detection accuracy?",
    content:
      "Ember verification is a feature of the Ember Detector that ensures accurate and precise detection by validating detected embers. This minimizes false alarms and provides a reliable safety net for industries dealing with production and automation, waste recycling, wood processing, textiles, food, and pharmaceuticals.",
  },
  {
    id: "emb-5",
    title: "How does the Optical Cleaning System improve the performance of the Ember Detector?",
    content:
      "The Ember Detector features an Optical Cleaning System to prevent the accumulation of dust and dirt on the window. This ensures clear visibility and uninterrupted performance, even in environments prone to particulate matter.",
  },
];

export function EmberDetectorFaq() {
  return (
    <section
      aria-labelledby="emb-faq-heading"
      style={{ background: "var(--surface-secondary)" }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
        <h2
          id="emb-faq-heading"
          className="t-h2 text-center"
          style={{ margin: "0 0 40px" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <Accordion items={LEFT} allowMultiple defaultOpen={["emb-1"]} />
          <Accordion items={RIGHT} allowMultiple defaultOpen={["emb-4"]} />
        </div>
      </div>
    </section>
  );
}
