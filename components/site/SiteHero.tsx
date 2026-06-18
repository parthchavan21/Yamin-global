"use client";

import { useEffect, useRef } from "react";

const mono = {
  fontFamily: "var(--yg-mono)",
} as const;

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
    <header id="top" className="yg-hero" style={{ position: "relative", padding: "142px 0 60px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--yg-gutter)", position: "relative" }}>
        {/* blueprint grid frame */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <span style={{ position: "absolute", top: -20, bottom: -20, left: 0, width: 1, background: "#ECEEF2" }} />
          <span style={{ position: "absolute", top: -20, bottom: -20, right: 0, width: 1, background: "#ECEEF2" }} />
          {[
            { pos: { top: -20, left: 0 }, t: "translate(-50%,-50%)" },
            { pos: { top: -20, right: 0 }, t: "translate(50%,-50%)" },
            { pos: { bottom: -20, left: 0 }, t: "translate(-50%,50%)" },
            { pos: { bottom: -20, right: 0 }, t: "translate(50%,50%)" },
          ].map((c, i) => (
            <span
              key={i}
              style={{ position: "absolute", ...c.pos, color: "#0E5FCB", ...mono, fontSize: 13, transform: c.t }}
            >
              +
            </span>
          ))}
        </div>

        <div
          className="yg-eyebrow-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 16,
            ...mono,
            fontSize: 12,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#8A93A0",
            position: "relative",
            zIndex: 1,
            paddingBottom: 34,
          }}
        >
          <span>Ajman Free Zone — UAE</span>
        </div>

        <div
          className="yg-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.08fr .92fr",
            gap: 54,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div data-reveal-l="">
            <div
              className="yg-mono"
              style={{
                fontSize: 12,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#0E5FCB",
                marginBottom: 20,
              }}
            >
              Industrial monitoring &amp; safety
            </div>
            <h1
              className="yg-h1"
              style={{
                fontSize: 48,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                fontWeight: 600,
                margin: "0 0 26px",
                width: 500,
                maxWidth: "100%",
              }}
            >
              Your plant runs on precision. We protect it{" "}
              <span style={{ color: "#0E5FCB" }}>before risk becomes a problem.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#46505C", maxWidth: 520, margin: "0 0 34px" }}>
              Certified gas, flame, process and environmental monitoring — specified, commissioned and
              supported by engineers, so your people and assets stay safe.
            </p>
            <div className="yg-hero-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
              <a
                className="yg-cta-line yg-mono"
                href="#products"
                style={{
                  background: "#0E1A2B",
                  color: "#fff",
                  fontSize: 13,
                  letterSpacing: ".05em",
                  textTransform: "uppercase",
                  padding: "17px 28px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span>Browse products &nbsp;→</span>
              </a>
              <a
                className="yg-ghost yg-mono"
                href="#enquiry"
                style={{
                  border: "1px solid #D7DDE5",
                  borderLeft: "none",
                  color: "#0E1A2B",
                  fontSize: 13,
                  letterSpacing: ".05em",
                  textTransform: "uppercase",
                  padding: "17px 28px",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "background .25s ease, color .25s ease",
                }}
              >
                Talk to an engineer
              </a>
            </div>
          </div>

          <div data-reveal="" style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                background: "linear-gradient(150deg,#0E5FCB,#0A2540)",
                overflow: "hidden",
                aspectRatio: "4 / 4.1",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src="/Herosection.png"
                alt="Industrial monitoring systems"
                style={{ width: "100%", height: "112%", objectFit: "cover", display: "block", willChange: "transform" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
