"use client";

import { useEffect, useState } from "react";

// Auto-playing hero slideshow — these cycle on a loop with a crossfade.
const HERO_SLIDES = [
  "/assets/Hero img corousel/Yamin Product Images - GT-2500-FLP.png",
  "/assets/Hero img corousel/Yamin Product Images - GT-2500-WP.png",
  "/assets/Hero img corousel/Yamin Product Images - GT-2511-FLP.png",
];

export function SiteHero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    // Advance every 4s; loops back to the first slide automatically.
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header id="top" className="yg-hero relative overflow-hidden px-0 pb-[44px] pt-[56px]">
      {/* Full-height vertical frame lines — span the whole hero so the top is
          hidden behind the fixed nav and emerges exactly at the nav border, and
          the bottom meets the certification strip, on every display size. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="relative mx-auto h-full max-w-[1440px]">
          <span className="absolute inset-y-0 left-[var(--yg-gutter)] w-px bg-[#ECEEF2]" />
          <span className="absolute inset-y-0 right-[var(--yg-gutter)] w-px bg-[#ECEEF2]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8 md:px-[calc(var(--yg-gutter)+40px)] xl:pb-10 xl:pt-[64px]">
        <div className="yg-eyebrow-row relative z-[1] flex items-center justify-end gap-4 pb-[34px] font-yg-mono text-[12px] uppercase tracking-[0.08em] text-[#8A93A0]" />

        <div className="yg-hero-grid relative z-[1] grid grid-cols-[1.08fr_.92fr] items-stretch gap-[54px]">
          <div data-reveal-l="">
            <div className="mb-5 font-yg-mono text-[12px] uppercase tracking-[0.12em] text-yg-blue">
              Industrial monitoring &amp; safety
            </div>
            <h1 className="yg-h1 mb-[26px] w-[500px] max-w-full text-[48px] font-semibold leading-none tracking-[-0.035em]">
              Your plant runs on precision. We protect it{" "}
              <span className="text-yg-blue">before risk becomes a problem.</span>
            </h1>
            <p className="mb-[34px] max-w-[520px] text-[16px] leading-[1.6] text-[#46505C]">
              Certified gas, flame, process and environmental monitoring — specified, commissioned and
              supported by engineers, so your people and assets stay safe.
            </p>
            <div className="yg-hero-cta-row flex flex-wrap gap-0">
              <a
                className="yg-cta-line yg-mono inline-flex items-center gap-2.5 bg-yg-ink px-7 py-[17px] text-[13px] uppercase tracking-[0.05em] text-white"
                href="#products"
              >
                <span>Browse products &nbsp;→</span>
              </a>
              <a
                className="yg-ghost yg-mono inline-flex items-center border border-l-0 border-[#D7DDE5] px-7 py-[17px] text-[13px] uppercase tracking-[0.05em] text-yg-ink transition-[background,color] duration-[250ms]"
                href="#enquiry"
              >
                Talk to an engineer
              </a>
            </div>
          </div>

          <div className="relative h-full" data-reveal="">
            <div
              className="relative h-full min-h-[360px] overflow-hidden bg-[linear-gradient(150deg,#0E5FCB,#0A2540)]"
              aria-hidden
            >
              {HERO_SLIDES.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
