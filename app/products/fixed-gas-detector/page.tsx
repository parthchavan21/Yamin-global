import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquirySection } from "@/components/site/EnquirySection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FixedGasProductGrid } from "@/components/products/FixedGasProductGrid";
import { YoutubeSlideshow } from "@/components/products/YoutubeSlideshow";
import { FixedGasFaq } from "@/components/products/FixedGasFaq";

const BADGES = ["ATEX", "IECEx", "SIL 2", "4–20 mA", "Modbus RTU"];

export default function FixedGasDetectorPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          aria-labelledby="fgd-hero-heading"
          style={{
            background: "var(--surface-primary)",
            borderBottom: "1px solid var(--border-primary)",
          }}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 pt-24 pb-12 md:pt-28 md:pb-14 lg:pt-32 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] items-center">

              {/* ── Left: copy ─────────────────────────────────────── */}
              <div className="flex flex-col">
                <span
                  className="t-label block mb-4"
                  style={{ color: "var(--content-brand)" }}
                >
                  Gas Detectors
                </span>

                <h1
                  id="fgd-hero-heading"
                  className="t-h1"
                  style={{
                    margin: "0 0 20px",
                    textWrap: "balance",
                    fontSize: "clamp(26px, 4vw, 36px)",
                    lineHeight: "clamp(34px, 5vw, 44px)",
                  }}
                >
                  Fixed Gas Detector Systems for Hazardous Environments
                </h1>

                <p
                  className="t-body-lg t-secondary"
                  style={{ margin: "0 0 28px", maxWidth: 520 }}
                >
                  In the realm of industrial safety, the Fixed Gas Detector emerges as a
                  stalwart defender against potential hazards. Employing state-of-the-art
                  sensor technologies, this device offers unparalleled accuracy in detecting
                  and alerting against toxic and combustible gases.
                </p>
              </div>

              {/* ── Right: pumpjack image ───────────────────────────── */}
              <div className="w-full flex items-center justify-center lg:justify-end">
                <Image
                  src="/assets/Pumpjack-B2.png"
                  alt="Industrial pumpjack oil field — representative environment for fixed gas detection"
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
        <FixedGasProductGrid />
        <YoutubeSlideshow />
        <FixedGasFaq />
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
