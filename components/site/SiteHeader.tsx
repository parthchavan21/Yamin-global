"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { BrandMark } from "@/components/site/BrandMark";
import { GAS_PRODUCTS, FLAME_PRODUCTS } from "@/lib/site";

type NavItem = { label: string; href: string };
type NavGroup = { heading: string; items: NavItem[] };

// Homepage-section anchors must be absolute so they also work from other pages
// (e.g. clicking "Industries" on a product page returns to the homepage section).
const toHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

const PRODUCT_GROUPS: NavGroup[] = [
  { heading: "Gas Detectors", items: GAS_PRODUCTS.map((p) => ({ label: p.name, href: toHref(p.href) })) },
  { heading: "Flame Detector", items: FLAME_PRODUCTS.map((p) => ({ label: p.name, href: toHref(p.href) })) },
];

const NAV: { label: string; href: string; groups?: NavGroup[] }[] = [
  { label: "Products", href: "/#products", groups: PRODUCT_GROUPS },
  { label: "Industries", href: "/#industries" },
  { label: "Why us", href: "/#why" },
  { label: "Support", href: "/#faq" },
];

export function SiteHeader() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  // Mobile/tablet panel: Products is a collapsible chevron section.
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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
      className="fixed inset-x-0 top-0 z-[60] border-b border-[#ECEEF2] bg-white/90 backdrop-blur-[8px] backdrop-saturate-150 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-[var(--yg-gutter)] py-2">
        <Link href="/" className="flex items-center gap-[11px]">
          <BrandMark className="h-8 w-auto min-[981px]:h-12" />
        </Link>

        <div className="yg-nav-links yg-mono flex items-center gap-9 text-[12.5px] uppercase tracking-[0.04em] text-[#46505C]">
          {NAV.map((l) =>
            l.groups ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  className="yg-navlink inline-flex items-center gap-1.5"
                  href={l.href}
                  aria-haspopup="true"
                  aria-expanded={productsOpen}
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {/* Desktop dropdown — pt bridges the gap so hover doesn't drop */}
                <div
                  className={`absolute left-0 top-full pt-[26px] transition-[opacity,transform,visibility] duration-[180ms] ${
                    productsOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible translate-y-1.5 opacity-0"
                  }`}
                >
                  <div className="flex gap-12 border border-[#ECEEF2] bg-white px-[30px] py-[26px] shadow-[0_18px_44px_-26px_rgba(14,26,43,0.5)]">
                    {l.groups.map((g) => (
                      <div key={g.heading} className="min-w-[190px]">
                        <div className="mb-1.5 border-b border-[#ECEEF2] pb-3 text-[11.5px] uppercase tracking-[0.1em] text-[#8A93A0]">
                          {g.heading}
                        </div>
                        {g.items.map((c, ci) => (
                          <Link
                            key={c.label}
                            className="yg-drop-link flex items-start gap-2.5 px-2 py-[9px] text-[13.5px] leading-[20px] normal-case tracking-normal text-[#2A3645] transition-[background,color] duration-150"
                            href={c.href}
                            onClick={() => setProductsOpen(false)}
                          >
                            <span className="shrink-0 font-yg-mono text-[12px] font-bold leading-[20px] text-yg-blue">
                              {String(ci + 1).padStart(2, "0")}
                            </span>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.label} className="yg-navlink" href={l.href}>
                {l.label}
              </Link>
            )
          )}
        </div>

        <Link
          className="yg-cta yg-nav-cta yg-mono whitespace-nowrap bg-yg-blue px-[18px] py-[11px] text-[12.5px] uppercase tracking-[0.04em] text-white transition-colors"
          href="/#enquiry"
        >
          Request a quote
        </Link>

        {/* Hamburger — visible on tablet / mobile only */}
        <button
          type="button"
          className="yg-burger -mr-2 h-10 w-10 cursor-pointer items-center justify-center border-none bg-transparent text-yg-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / tablet dropdown panel — full-height, scrollable links, pinned CTA */}
      <div className={`yg-mobile-panel border-t border-[#ECEEF2] bg-white${open ? " is-open" : ""}`}>
        <div className="yg-mobile-scroll flex-1 overflow-y-auto px-[var(--yg-gutter)] pb-[22px] pt-2">
          {NAV.map((l) =>
            l.groups ? (
              <div key={l.label}>
                <button
                  type="button"
                  className="yg-mobile-link yg-mono flex w-full items-center justify-between border-b border-[#F0F2F5] py-4 text-[14px] uppercase tracking-[0.04em] text-[#46505C]"
                  aria-expanded={mobileProductsOpen}
                  onClick={() => setMobileProductsOpen((v) => !v)}
                >
                  {l.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileProductsOpen && (
                  <div className="pl-[14px] pb-1">
                    {l.groups.map((g) => (
                      <div key={g.heading} className="pt-[14px]">
                        <div className="mb-1 font-yg-mono text-[11px] uppercase tracking-[0.1em] text-[#8A93A0]">
                          {g.heading}
                        </div>
                        {g.items.map((c, ci) => (
                          <Link
                            key={c.label}
                            className="yg-mobile-link flex items-start gap-2.5 border-b border-[#F4F6F8] py-[11px] text-[14px] leading-[20px] text-[#2A3645]"
                            href={c.href}
                            onClick={() => setOpen(false)}
                          >
                            <span className="shrink-0 font-yg-mono text-[12px] font-bold leading-[20px] text-yg-blue">
                              {String(ci + 1).padStart(2, "0")}
                            </span>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.label}
                className="yg-mobile-link yg-mono block border-b border-[#F0F2F5] py-4 text-[14px] uppercase tracking-[0.04em] text-[#46505C]"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            )
          )}
        </div>
        <div className="shrink-0 border-t border-[#ECEEF2] bg-white px-[var(--yg-gutter)] py-[14px]">
          <Link
            className="yg-cta yg-mono block bg-yg-blue px-[18px] py-[14px] text-center text-[12.5px] uppercase tracking-[0.04em] text-white transition-colors"
            href="/#enquiry"
            onClick={() => setOpen(false)}
          >
            Request a quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
