"use client";

import { useRef, useState } from "react";

const VIDEOS = [
  { id: "MhVw2XZouzk", title: "Safety Gas Detector – Overview" },
  { id: "0QfbY1rfO8s", title: "Safety Gas Detector – Installation" },
  { id: "6MrnijeLBO4", title: "Safety Gas Detector – Features" },
  { id: "uGozBDM3z2Y", title: "Safety Gas Detector – Operation" },
] as const;

export function YoutubeSlideshow() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(VIDEOS.length - 1, i));
    setCurrent(clamped);
    const container = containerRef.current;
    const item = itemRefs.current[clamped];
    if (container && item) {
      container.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
    }
  }

  return (
    <section
      aria-labelledby="yt-section-heading"
      style={{
        background: "var(--surface-secondary)",
        borderTop: "1px solid var(--border-primary)",
      }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
        {/* Heading */}
        <h2
          id="yt-section-heading"
          className="t-h2 text-center"
          style={{ margin: "0 0 40px" }}
        >
          Watch our Youtube Video of Safety Gas Detector
        </h2>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Track — scrollable, scrollbar hidden */}
          <div
            ref={containerRef}
            className="flex gap-4 md:gap-5"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {VIDEOS.map((v, i) => (
              <div
                key={v.id}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="flex-shrink-0 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: "16/9",
                    borderRadius: "var(--radius-lg)",
                    background: "#000",
                    border: "1px solid var(--border-primary)",
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-6" role="tablist" aria-label="Video navigation">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to video ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: 10,
                height: 10,
                background: i === current ? "var(--content-brand)" : "var(--neutral-200)",
                border: i === current ? "none" : "1.5px solid var(--neutral-300)",
                borderRadius: 999,
                cursor: "pointer",
                padding: 0,
                transition: "background .2s ease, border-color .2s ease, transform .2s ease",
                transform: i === current ? "scale(1.25)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
