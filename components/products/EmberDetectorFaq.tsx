import { FaqSection, type FaqItem } from "@/components/site/FaqSection";

const ITEMS: FaqItem[] = [
  {
    q: "How does the Yamin Global Ember Detector contribute to safety in industries and factories?",
    a: "The Yamin Global Ember Detector enhances safety by utilizing high-speed ember detection through Infrared (IR) technology. It is specially designed for hazardous environments, providing accurate and precise detection in diverse industrial settings.",
  },
  {
    q: "What makes the Ember Detector suitable for challenging environments in industries?",
    a: "The Ember Detector is designed with a flameproof housing certified to Ex d IIC T6 Gb, making it ideal for potentially explosive environments. Its robust construction ensures reliability in the presence of conveyors, silos, waste recycling conveyors, coal dust conveyance, escalators, drying lines, and extractors.",
  },
  {
    q: "Can the Ember Detector operate in sunlight, and what is its power consumption?",
    a: "Yes, the Ember Detector is insensitive to sunlight, ensuring consistent performance in various lighting conditions. Additionally, it boasts low power consumption, contributing to energy efficiency in industrial operations.",
  },
  {
    q: "What is Ember verification, and how does it enhance detection accuracy?",
    a: "Ember verification is a feature of the Ember Detector that ensures accurate and precise detection by validating detected embers. This minimizes false alarms and provides a reliable safety net for industries dealing with production and automation, waste recycling, wood processing, textiles, food, and pharmaceuticals.",
  },
  {
    q: "How does the Optical Cleaning System improve the performance of the Ember Detector?",
    a: "The Ember Detector features an Optical Cleaning System to prevent the accumulation of dust and dirt on the window. This ensures clear visibility and uninterrupted performance, even in environments prone to particulate matter.",
  },
];

export function EmberDetectorFaq() {
  return <FaqSection items={ITEMS} />;
}
