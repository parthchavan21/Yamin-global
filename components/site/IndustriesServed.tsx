"use client";

import { useRef, useState } from "react";
import { HOME_INDUSTRIES } from "@/lib/home";

const mono = { fontFamily: "var(--yg-mono)" } as const;

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
      className="yg-sec"
      style={{ padding: "104px 0", background: "#0E5FCB", color: "#fff", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--yg-gutter)", position: "relative", zIndex: 1 }}>
        <div
          className="yg-two"
          data-reveal=""
          style={{ display: "flex", flexDirection: "column", gap: 30, alignItems: "stretch", marginBottom: 46, width: 600, maxWidth: "100%" }}
        >
          <div>
            <div style={{ ...mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#DCE8FF", marginBottom: 20 }}>
              INDUSTRIES WE SERVE
            </div>
            <h2 style={{ fontSize: "clamp(32px,4.2vw,50px)", lineHeight: 1.04, letterSpacing: "-0.03em", fontWeight: 600, margin: 0 }}>
              Built for the sites that can&apos;t afford downtime
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.86)", margin: "0 0 6px" }}>
            From hazardous-area gas detection to validated cold chains, we equip operations where accuracy
            and compliance are non-negotiable.
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.13)" }}>
          {HOME_INDUSTRIES.map((ind) => (
            <div
              key={ind.no}
              className="yg-row"
              onMouseEnter={(e) => {
                setHoverImage(ind.image);
                moveCursor(e);
              }}
              onMouseMove={moveCursor}
              onMouseLeave={() => setHoverImage(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto",
                gap: 24,
                alignItems: "center",
                padding: "22px",
                borderBottom: "1px solid rgba(255,255,255,.13)",
                // hide the native cursor so only the image shows
                cursor: hoverImage ? "none" : "default",
              }}
            >
              <span className="yg-row-no" style={{ ...mono, fontSize: 13, color: "rgba(255,255,255,.55)", transition: "color .3s ease" }}>
                {ind.no}
              </span>
              <span
                className="yg-row-name"
                style={{ fontSize: "clamp(22px,2.6vw,34px)", fontWeight: 500, letterSpacing: "-0.02em", color: "#fff", transition: "color .3s ease" }}
              >
                {ind.name}
              </span>
              <span
                className="yg-row-ar"
                style={{ ...mono, fontSize: 18, color: "#fff", opacity: 0, transform: "translateX(-8px)", transition: "all .3s ease" }}
              >
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 80,
          pointerEvents: "none",
          width: "var(--yg-cursor-w)",
          transform: "translate(-50%, -50%)",
          opacity: hoverImage ? 1 : 0,
          transition: "opacity .25s ease",
          overflow: "hidden",
          boxShadow: "0 24px 60px -28px rgba(14,26,43,.65)",
        }}
      >
        {hoverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hoverImage}
            alt=""
            style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
          />
        )}
      </div>
    </section>
  );
}
