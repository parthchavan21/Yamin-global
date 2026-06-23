import Image from "next/image";
import { Zap, Settings, Thermometer, BatteryLow, Network, MousePointerClick, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquirySection } from "@/components/site/EnquirySection";
import { HeatDetectorGrid } from "@/components/products/HeatDetectorGrid";

const FEATURES: { Icon: ComponentType<LucideProps>; text: string }[] = [
  { Icon: Zap,               text: "Fast and reliable response by sensing heat build-up — overheat in ambient temperature" },
  { Icon: Settings,          text: "Factory preset to the required temperature" },
  { Icon: Thermometer,       text: "Wide range of temperature detection from 40°C to 210°C" },
  { Icon: BatteryLow,        text: "Low power consumption (<3W)" },
  { Icon: Network,           text: "Isolated RS-485 communication port with MODBUS RTU protocol" },
  { Icon: MousePointerClick, text: "User-friendly, plug-and-play operation, easy testing" },
];

export default function HeatDetectorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          aria-labelledby="htd-hero-heading"
          style={{ background: "var(--surface-primary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-20 md:py-28 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] items-center">

              {/* Left: copy */}
              <div className="flex flex-col">
                <span className="t-label block mb-4" style={{ color: "var(--content-brand)" }}>
                  Heat Detectors
                </span>
                <h1
                  id="htd-hero-heading"
                  className="t-h1"
                  style={{
                    margin: "0 0 20px",
                    textWrap: "balance",
                    fontSize: "clamp(26px, 4vw, 36px)",
                    lineHeight: "clamp(34px, 5vw, 44px)",
                  }}
                >
                  Yamin Global Heat Detectors: Advanced Overheat Detection
                </h1>
                <p className="t-body-lg t-secondary" style={{ margin: 0, maxWidth: 520 }}>
                  Yamin Global heat detectors are your trusted partner in detecting overheat and fire
                  in the form of temperature rise. Designed to deliver an actuating alarm signal when
                  ambient temperature exceeds preset thresholds — keeping your people and assets safe.
                </p>
              </div>

              {/* Right: image */}
              <div className="w-full flex items-center justify-center lg:justify-end">
                <Image
                  src="/assets/products/heat-detector/HTD-8822-FLP.webp"
                  alt="Yamin Global HTD-8822-FLP heat detector"
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
        <HeatDetectorGrid />

        {/* ── Why Choose Yamin Global ────────────────────────────────── */}
        <section
          style={{ background: "var(--surface-secondary)", borderTop: "1px solid var(--border-primary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20 flex justify-center">
            <div
              className="w-full max-w-2xl flex flex-col items-center text-center p-10"
              style={{
                background: "var(--surface-primary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span className="t-label block mb-3" style={{ color: "var(--content-brand)" }}>
                Why us
              </span>
              <h2 className="t-h2" style={{ margin: "0 0 16px" }}>
                Why Choose Yamin Global Heat Sensor Detectors?
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: "28px", color: "var(--content-secondary)" }}>
                Choosing Yamin Global heat detectors means choosing reliability, accuracy, and peace
                of mind. Our detectors are designed to provide fast and reliable responses, ensuring
                that you are alerted as soon as a potential risk is detected. With our detectors,
                you can rest assured that your premises are protected against the risk of overheating.
              </p>
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────── */}
        <section
          aria-labelledby="htd-how-heading"
          style={{ background: "var(--surface-primary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 id="htd-how-heading" className="t-h2" style={{ margin: "0 0 20px" }}>
                  How Does a Heat Detector Work?
                </h2>
                <p style={{ margin: 0, fontSize: 16, lineHeight: "28px", color: "var(--content-secondary)" }}>
                  Heat detectors work by continuously monitoring the ambient temperature. When the
                  temperature rises above a certain threshold, the detector sends an alarm signal.
                  This threshold is factory preset according to the customer&apos;s requirements.
                  The detector resets itself after the temperature cools down.
                </p>
              </div>
              <div className="w-full flex items-center justify-center lg:justify-end">
                <Image
                  src="/assets/products/heat-detector/howitworks-1.png"
                  alt="How a heat detector works"
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

        {/* ── Features ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="htd-features-heading"
          style={{ background: "var(--surface-secondary)", borderBottom: "1px solid var(--border-primary)" }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20">
            <h2 id="htd-features-heading" className="t-h2" style={{ margin: "0 0 40px" }}>
              Features of Yamin Global Heat Detection System
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-4"
                  style={{
                    background: "var(--surface-primary)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center shrink-0"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--radius-md)",
                      background: "var(--surface-brand)",
                    }}
                  >
                    <Icon size={20} color="var(--surface-primary)" strokeWidth={2} />
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px", color: "var(--content-primary)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
