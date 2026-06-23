"use client";

import { useEffect, useRef } from "react";

const CROSSES = [
  "left-[var(--yg-gutter)] top-[-20px] -translate-x-1/2 -translate-y-1/2",
  "right-[var(--yg-gutter)] top-[-20px] translate-x-1/2 -translate-y-1/2",
  "bottom-[-44px] left-[var(--yg-gutter)] -translate-x-1/2 translate-y-1/2",
  "bottom-[-44px] right-[var(--yg-gutter)] translate-x-1/2 translate-y-1/2",
];

export function SiteHero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const ppmRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (img) img.style.transform = `translateY(${-Math.min(y * 0.1, 60)}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Live "telemetry" readout — wanders within the normal band.
    const ppmTimer = setInterval(() => {
      if (ppmRef.current) ppmRef.current.textContent = (8 + Math.random() * 9).toFixed(0);
    }, 1400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(ppmTimer);
    };
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

      <div className="relative mx-auto max-w-[1440px] px-[calc(var(--yg-gutter)+40px)] xl:pb-10 xl:pt-[64px]">
        {/* blueprint corner crosses */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {CROSSES.map((pos, i) => (
            <span key={i} className={`absolute font-yg-mono text-[13px] text-yg-blue ${pos}`}>
              +
            </span>
          ))}
        </div>

        <div className="yg-eyebrow-row relative z-[1] flex items-center justify-end gap-4 pb-[34px] font-yg-mono text-[12px] uppercase tracking-[0.08em] text-[#8A93A0]" />

        <div className="yg-hero-grid relative z-[1] grid grid-cols-[1.08fr_.92fr] items-center gap-[54px]">
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

          <div className="relative" data-reveal="">
            <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(150deg,#0E5FCB,#0A2540)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src="/assets/Herosection.png"
                alt="Industrial monitoring systems"
                className="block h-[112%] w-full object-cover will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
