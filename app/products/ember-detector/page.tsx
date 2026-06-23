import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquirySection } from "@/components/site/EnquirySection";
import { EmberDetectorGrid } from "@/components/products/EmberDetectorGrid";
import { EmberDetectorFaq } from "@/components/products/EmberDetectorFaq";

const APPLICATIONS = [
  "Conveyors, Silos",
  "Waste Recycling Conveyors",
  "Coal dust conveyance",
  "Escalators",
  "Drying Lines",
  "Extractors",
  "Production & Automation industry",
  "Waste recycling industry",
  "Wood industry: sawdust shavings",
  "Textile industry",
  "Food industry",
  "Pharmaceutical & chemical industry",
];

const WHY_CHOOSE = [
  { title: "Cutting-Edge Technology", body: "Employs high-speed IR technology for rapid and precise ember detection, ensuring a proactive safety approach in industries." },
  { title: "Versatile Output Options", body: "Enjoy flexibility with multiple output options, including three relays for Ember Detection, AUXILIARY, and FAULT, along with 0–20mA or 0–10V outputs. Optional HART protocol and RS-485, MODBUS compatibility provide seamless integration." },
  { title: "Tailored for Hazardous Environments", body: "Specifically designed for hazardous settings, the system boasts a flameproof housing certified to Ex d IIC T6 Gb, making it reliable in potentially explosive conditions." },
  { title: "User-Friendly Configuration", body: "Easily program the system via Bluetooth, HART, or RS-485, ensuring user-friendly configurability and hassle-free integration into existing safety frameworks." },
  { title: "Optical Cleaning System", body: "The innovative Optical Cleaning System prevents dust and dirt accumulation on the window, guaranteeing clear visibility and sustained performance even in challenging environments." },
  { title: "Comprehensive Connectivity", body: "Optional connectivity via IoT, mobile alert (LoRa/WiFi), and RS-485 communication with MODBUS RTU protocol enables seamless integration into modern industrial communication networks." },
  { title: "Accurate Ember Verification", body: "Accuracy is paramount, and the Ember Detector excels in providing accurate and precise ember detection, minimizing false alarms and enhancing operational efficiency." },
  { title: "Optional Features for Enhanced Safety", body: "Choose from optional features like a heat detector extension, date-time stamped event logging, built-in self-test (BIT), and a mobile alert system for additional layers of safety." },
  { title: "Low Power Consumption", body: "With a commitment to sustainability, the system features low power consumption, aligning with industry trends towards energy-efficient solutions." },
  { title: "PESO Approved", body: "The Ember Detector holds PESO approval, attesting to its compliance with stringent safety regulations, making it a trusted solution for industrial safety." },
  { title: "Sunlight Insensitivity", body: "The detector remains insensitive to sunlight, ensuring consistent performance regardless of varying light conditions, offering adaptability to diverse industrial setups." },
  { title: "Make in India – ISO 9001:2015 Certified", body: "Proudly manufactured in India and ISO 9001:2015 certified, Yamin Global ensures a product of the highest quality and excellence." },
  { title: "Sensitivity Selection", body: "Tailor the system to specific zones with sensitivity selection, preventing zone crossover detection and ensuring a customized safety solution." },
];

export default function EmberDetectorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          aria-labelledby="emb-hero-heading"
          style={{ background: "var(--surface-primary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] items-center">

              {/* Left: copy */}
              <div className="pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 flex flex-col">
                <span className="t-label block mb-4" style={{ color: "var(--content-brand)" }}>
                  Ember Detectors
                </span>
                <h1
                  id="emb-hero-heading"
                  className="t-h1"
                  style={{
                    margin: "0 0 20px",
                    textWrap: "balance",
                    fontSize: "clamp(26px, 4vw, 36px)",
                    lineHeight: "clamp(34px, 5vw, 44px)",
                  }}
                >
                  Yamin Global Ember Detector: The Ultimate Solution
                </h1>
                <p className="t-body-lg t-secondary" style={{ margin: 0, maxWidth: 520 }}>
                  In the dynamic landscape of industrial safety, Yamin Global introduces the Ember
                  Detector — a cutting-edge solution designed to revolutionize safety in industries
                  and factories. State-of-the-art IR technology with advanced features tailored to
                  meet the rigorous demands of diverse industrial environments.
                </p>
              </div>

              {/* Right: image */}
              <div className="w-full flex items-center justify-center lg:justify-end">
                <Image
                  src="/assets/products/ember-detector/EMB-7700-FLP.webp"
                  alt="Yamin Global EMB-7700-FLP ember detector"
                  width={560}
                  height={480}
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="w-full h-auto lg:max-h-[480px] object-contain"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── Product grid ──────────────────────────────────────────── */}
        <EmberDetectorGrid />

        {/* ── Why Choose ────────────────────────────────────────────── */}
        <section
          aria-labelledby="emb-why-heading"
          style={{ background: "var(--surface-secondary)", borderTop: "1px solid var(--border-primary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20">
              <span className="t-label block mb-3" style={{ color: "var(--content-brand)" }}>
                Why us
              </span>
              <h2 id="emb-why-heading" className="t-h2" style={{ margin: "0 0 12px" }}>
                Why Choose Yamin Global Ember Detector?
              </h2>
              <p style={{ margin: "0 0 40px", fontSize: 16, lineHeight: "28px", color: "var(--content-secondary)", maxWidth: 720 }}>
                When it comes to safeguarding industrial environments and ensuring the well-being of
                personnel, the Yamin Global Ember Detector stands out as the premier choice — here&apos;s why.
              </p>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                style={{ border: "1px solid var(--border-primary)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--border-primary)" }}
              >
                {WHY_CHOOSE.map((item) => (
                  <div
                    key={item.title}
                    className="p-6"
                    style={{ background: "var(--surface-primary)" }}
                  >
                    <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 600, lineHeight: "22px", color: "var(--content-primary)" }}>
                      {item.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: "22px", color: "var(--content-secondary)" }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────── */}
        <section
          aria-labelledby="emb-how-heading"
          style={{ background: "var(--surface-primary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 id="emb-how-heading" className="t-h2" style={{ margin: "0 0 20px" }}>
                  How Does an Ember Detector Work?
                </h2>
                <p style={{ margin: 0, fontSize: 16, lineHeight: "28px", color: "var(--content-secondary)" }}>
                  The Ember Detector operates by utilizing cutting-edge IR technology for high-speed
                  ember detection in hazardous industrial environments, featuring an optical cleaning
                  system to prevent dust accumulation, sensitivity selection for zone customization,
                  and multiple output options for flexibility. It ensures accurate and precise
                  detection, low power consumption, and compliance with safety standards, offering
                  additional features like optional connectivity via IoT and mobile alerts for
                  enhanced safety.
                </p>
              </div>
              <div className="w-full flex items-center justify-center lg:justify-end">
                <Image
                  src="/assets/products/ember-detector/howitworks.png"
                  alt="How an ember detector works"
                  width={560}
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="w-full h-auto object-contain"
                  style={{ borderRadius: "var(--radius-lg)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Applications ──────────────────────────────────────────── */}
        <section
          aria-labelledby="emb-apps-heading"
          style={{ background: "var(--surface-secondary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20">
            <h2 id="emb-apps-heading" className="t-h2" style={{ margin: "0 0 40px" }}>
              Applications of Ember Detector
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {APPLICATIONS.map((app) => (
                <div
                  key={app}
                  className="flex items-center gap-3 p-4"
                  style={{
                    background: "var(--surface-primary)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <span
                    className="shrink-0 rounded-full"
                    style={{ width: 8, height: 8, background: "var(--content-brand)" }}
                  />
                  <span style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px", color: "var(--content-primary)" }}>
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <EmberDetectorFaq />
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
