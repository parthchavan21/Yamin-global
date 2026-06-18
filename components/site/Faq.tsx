"use client";

import { useState } from "react";
import { HOME_FAQS } from "@/lib/home";

const mono = { fontFamily: "var(--yg-mono)" } as const;

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="yg-sec" style={{ padding: "104px 0", borderTop: "1px solid #ECEEF2" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 var(--yg-gutter)" }}>
        <div data-reveal="" style={{ ...mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#0E5FCB", marginBottom: 20 }}>
          SUPPORT
        </div>
        <h2 data-reveal="" style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.04, letterSpacing: "-0.03em", fontWeight: 600, margin: "0 0 48px" }}>
          Frequently asked questions
        </h2>
        <div data-reveal="" style={{ borderTop: "1px solid #E4E8EE" }}>
          {HOME_FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.no} className="yg-faq" style={{ borderBottom: "1px solid #E4E8EE" }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "54px 1fr 30px",
                    gap: 18,
                    alignItems: "center",
                    padding: "26px 4px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ ...mono, fontSize: 13, color: "#0E5FCB" }}>{f.no}</span>
                  <span className="yg-faq-q" style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", color: "#0E1A2B", transition: "color .25s ease" }}>
                    {f.q}
                  </span>
                  <span
                    style={{
                      ...mono,
                      fontSize: 24,
                      fontWeight: 400,
                      color: isOpen ? "#0E5FCB" : "#9AA4B2",
                      textAlign: "center",
                      transition: "transform .3s ease, color .3s ease",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    transition: "max-height .4s ease, opacity .3s ease",
                    maxHeight: isOpen ? 260 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: "#5C6675", margin: 0, padding: "0 0 28px 72px", maxWidth: 720 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
