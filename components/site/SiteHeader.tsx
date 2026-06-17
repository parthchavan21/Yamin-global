"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE, NAV_LINKS } from "@/lib/site";

const PRODUCT_MEGA = [
  {
    category: "Gas Detectors",
    items: [
      { label: "Fixed Gas Detector", href: "/products/fixed-gas-detector" },
      { label: "LPG / PNG / CNG Gas Detector", href: "#products" },
    ],
  },
  {
    category: "Flame Detector",
    items: [
      { label: "UV and IR Flame Detector", href: "/products/flame-detector" },
      { label: "Heat Detector", href: "/products/heat-detector" },
      { label: "Ember Detector", href: "/products/ember-detector" },
    ],
  },
] as const;

function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 pt-2 z-50">
      <div
        className="p-6 grid grid-cols-2 gap-8"
        style={{
          minWidth: 480,
          background: "var(--surface-primary)",
          border: "1px solid var(--border-strong)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        {PRODUCT_MEGA.map((group) => (
          <div key={group.category}>
            <span className="t-label block mb-2" style={{ color: "var(--content-tertiary)" }}>
              {group.category}
            </span>
            <div className="mb-3" style={{ height: 1, background: "var(--border-secondary)" }} />
            <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
              {group.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-2.5 px-2.5 py-2 no-underline text-sm font-medium"
                    style={{
                      borderRadius: "var(--radius-sm)",
                      color: "var(--content-secondary)",
                      transition: "background .12s ease, color .12s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "var(--surface-brand-subtle)";
                      el.style.color = "var(--content-brand)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = "";
                      el.style.color = "var(--content-secondary)";
                    }}
                  >
                    <span
                      className="shrink-0 rounded-full"
                      style={{ width: 6, height: 6, background: "var(--content-brand)" }}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  function closeMobile() {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ pointerEvents: "none" }}>
      {/* Main nav bar */}
      <div className="px-4 md:px-6" style={{ paddingTop: 24, pointerEvents: "none" }}>
        <div
          className="w-full max-w-[1000px] mx-auto h-14 flex items-center gap-8 px-5 md:px-6"
          style={{
            pointerEvents: "auto",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <a href="/" aria-label="Yamin Global home" className="inline-flex items-center shrink-0 no-underline">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--content-brand)", fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
            >
              Yamin Global
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:flex gap-1 flex-1 items-center">
            {NAV_LINKS.map((l) => {
              if (l.label === "Products") {
                return (
                  <div
                    key={l.label}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button
                      className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium"
                      style={{
                        borderRadius: "var(--radius-sm)",
                        color: megaOpen ? "var(--content-brand)" : "var(--content-secondary)",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        transition: "color .12s ease",
                      }}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                    >
                      {l.label}
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        style={{
                          transition: "transform .18s ease",
                          transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                    {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
                  </div>
                );
              }
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-3 py-2 text-sm font-medium no-underline"
                  style={{
                    borderRadius: "var(--radius-sm)",
                    color: "var(--content-secondary)",
                    background: "transparent",
                  }}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Button size="sm">Request a quote</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto flex items-center justify-center w-10 h-10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--content-primary)" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet full-height menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-x-0 bottom-0 flex flex-col overflow-y-auto"
          style={{ top: "calc(24px + 56px + 8px)", background: "var(--surface-primary)", zIndex: 49, borderTop: "1px solid var(--border-primary)" }}
        >
          {/* Nav links */}
          <nav aria-label="Mobile primary" className="flex flex-col px-4 pt-3 flex-1">
            {NAV_LINKS.map((l) => {
              if (l.label === "Products") {
                return (
                  <div key={l.label}>
                    {/* Products trigger with chevron */}
                    <button
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium"
                      style={{
                        borderRadius: "var(--radius-sm)",
                        color: mobileProductsOpen ? "var(--content-brand)" : "var(--content-secondary)",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                      }}
                      aria-expanded={mobileProductsOpen}
                    >
                      {l.label}
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        style={{
                          transition: "transform .18s ease",
                          transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    {/* Expandable sub-categories */}
                    {mobileProductsOpen && (
                      <div className="mt-1 mb-2 ml-3 flex flex-col gap-0">
                        {PRODUCT_MEGA.map((group) => (
                          <div key={group.category} className="mt-3">
                            <span
                              className="t-label block px-3 mb-2"
                              style={{ color: "var(--content-tertiary)" }}
                            >
                              {group.category}
                            </span>
                            {group.items.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={closeMobile}
                                className="flex items-center gap-2.5 px-3 py-2 text-sm no-underline"
                                style={{
                                  borderRadius: "var(--radius-sm)",
                                  color: "var(--content-secondary)",
                                }}
                              >
                                <span
                                  className="shrink-0 rounded-full"
                                  style={{ width: 6, height: 6, background: "var(--content-brand)" }}
                                />
                                {item.label}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={closeMobile}
                  className="px-3 py-3 text-sm font-medium no-underline"
                  style={{
                    borderRadius: "var(--radius-sm)",
                    color: "var(--content-secondary)",
                    display: "block",
                  }}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* CTA buttons pinned to bottom */}
          <div className="px-4 pb-8 pt-4 flex flex-col gap-3" style={{ borderTop: "1px solid var(--border-primary)" }}>
            <Button variant="secondary" size="lg" style={{ width: "100%" }}>Contact sales</Button>
            <Button size="lg" style={{ width: "100%" }}>Request a quote</Button>
          </div>
        </div>
      )}
    </header>
  );
}
