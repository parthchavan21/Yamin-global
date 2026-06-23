"use client";

import { useRef, useState } from "react";
import { HOME_INDUSTRIES } from "@/lib/home";

export function IndustriesServed() {
  // Floating image that follows the pointer while a row is hovered.
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoverImage, setHoverImage] = useState<string | null>(null);

  // Position is written straight to the DOM so pointer movement never re-renders.
  function moveCursor(e: React.MouseEvent) {
    const el = cursorRef.current;
    if (el) {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    }
  }

  return (
    <section
      id="industries"
      className="yg-sec relative overflow-hidden bg-yg-blue py-[104px] text-white"
    >
      <div className="relative z-[1] mx-auto max-w-[1280px] px-[var(--yg-gutter)]">
        <div
          className="yg-two mb-[46px] flex w-[600px] max-w-full flex-col items-stretch gap-[30px]"
          data-reveal=""
        >
          <div>
            <div className="mb-5 font-yg-mono text-[12px] uppercase tracking-[0.12em] text-[#DCE8FF]">
              INDUSTRIES WE SERVE
            </div>
            <h2 className="m-0 text-[40px] font-semibold leading-[1.04] tracking-[-0.03em]">
              Built for the sites that can&apos;t afford downtime
            </h2>
          </div>
          <p className="mb-1.5 text-[17px] leading-[1.6] text-white/[0.86]">
            From hazardous-area gas detection to validated cold chains, we equip operations where accuracy
            and compliance are non-negotiable.
          </p>
        </div>

        <div className="border-t border-white/[0.13]">
          {HOME_INDUSTRIES.map((ind) => (
            <div
              key={ind.no}
              className={`yg-row grid grid-cols-[64px_1fr_auto] items-center gap-6 border-b border-white/[0.13] p-[22px] ${
                hoverImage ? "cursor-none" : "cursor-default"
              }`}
              onMouseEnter={(e) => {
                setHoverImage(ind.image);
                moveCursor(e);
              }}
              onMouseMove={moveCursor}
              onMouseLeave={() => setHoverImage(null)}
            >
              <span className="yg-row-no font-yg-mono text-[13px] text-white/55 transition-colors">
                {ind.no}
              </span>
              <span className="yg-row-name text-[clamp(22px,2.6vw,34px)] font-medium tracking-[-0.02em] text-white transition-colors">
                {ind.name}
              </span>
              <span className="yg-row-ar -translate-x-2 font-yg-mono text-[18px] text-white opacity-0 transition-all">
                →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom image cursor — fixed to the viewport, follows the pointer.
          Width is driven by --yg-cursor-w so it scales with screen size. */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[80] w-[var(--yg-cursor-w)] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_24px_60px_-28px_rgba(14,26,43,0.65)] transition-[opacity,transform] duration-[280ms] ease-out ${
          hoverImage ? "opacity-100 scale-100" : "opacity-0 scale-[0.8]"
        }`}
      >
        {hoverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={hoverImage} alt="" className="block h-auto w-full object-cover" />
        )}
      </div>
    </section>
  );
}
