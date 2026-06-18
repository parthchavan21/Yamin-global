"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/site/BrandMark";

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Why us", href: "#why" },
  { label: "Support", href: "#faq" },
];

export function SiteHeader() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  // Lift the bar with a soft shadow once the page is scrolled.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.boxShadow =
        (window.scrollY || 0) > 12 ? "0 6px 26px -18px rgba(14,26,43,.4)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the dropdown if the viewport grows back to the desktop layout.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: "rgba(255,255,255,.9)",
        backdropFilter: "saturate(150%) blur(8px)",
        WebkitBackdropFilter: "saturate(150%) blur(8px)",
        borderBottom: "1px solid #ECEEF2",
        transition: "box-shadow .3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "15px var(--yg-gutter)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <BrandMark />
        </a>

        <div
          className="yg-nav-links yg-mono"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            fontSize: 12.5,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            color: "#46505C",
          }}
        >
          {NAV.map((l) => (
            <a key={l.label} className="yg-navlink" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <a
          className="yg-cta yg-nav-cta yg-mono"
          href="#enquiry"
          style={{
            background: "#0E5FCB",
            color: "#fff",
            fontSize: 12.5,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            padding: "11px 18px",
            transition: "background .25s ease",
            whiteSpace: "nowrap",
          }}
        >
          Request a quote
        </a>

        {/* Hamburger — visible on tablet / mobile only */}
        <button
          type="button"
          className="yg-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#0E1A2B",
            marginRight: -8,
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / tablet dropdown panel */}
      <div className={`yg-mobile-panel${open ? " is-open" : ""}`} style={{ borderTop: "1px solid #ECEEF2", background: "#fff" }}>
        <div style={{ padding: "8px var(--yg-gutter) 22px", display: "flex", flexDirection: "column" }}>
          {NAV.map((l) => (
            <a
              key={l.label}
              className="yg-mobile-link yg-mono"
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 14,
                letterSpacing: ".04em",
                textTransform: "uppercase",
                color: "#46505C",
                padding: "16px 0",
                borderBottom: "1px solid #F0F2F5",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            className="yg-cta yg-mono"
            href="#enquiry"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 18,
              textAlign: "center",
              background: "#0E5FCB",
              color: "#fff",
              fontSize: 12.5,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              padding: "14px 18px",
              transition: "background .25s ease",
            }}
          >
            Request a quote
          </a>
        </div>
      </div>
    </nav>
  );
}
