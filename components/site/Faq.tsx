import { HOME_FAQS } from "@/lib/home";
import { FaqSection } from "@/components/site/FaqSection";

export function Faq() {
  return <FaqSection items={HOME_FAQS} />;
}
