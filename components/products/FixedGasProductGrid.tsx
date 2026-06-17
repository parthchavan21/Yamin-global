"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const PRODUCTS = [
  {
    id: "gt-2500-flp",
    model: "GT-2500-FLP",
    name: "Smart Gas Detector with LED Display",
    image: "/products/fixed-gas-detector/GT-2500-FLP-1.webp",
    href: "/products/fixed-gas-detector/gt-2500-flp",
  },
  {
    id: "gt-2500-wp",
    model: "GT-2500-WP",
    name: "Smart Gas Detector for Oxygen, VOC and Toxic Gas",
    image: "/products/fixed-gas-detector/GT-2500-WP.webp",
  },
  {
    id: "gt-2511-flp-sil",
    model: "GT-2511-FLP",
    name: "SIL 2 Certified Smart Gas Detector",
    image: "/products/fixed-gas-detector/GT-2511-FLP-SIL-2-7.png",
  },
  {
    id: "gt-2511-flp",
    model: "GT-2511-FLP",
    name: "Smart Gas Detector with LCD Display",
    image: "/products/fixed-gas-detector/GT-2511-FLP.webp",
  },
  {
    id: "gt-2511-wp",
    model: "GT-2511-WP",
    name: "Smart Gas Detector",
    image: "/products/fixed-gas-detector/GT-2511-WP.webp",
  },
  {
    id: "gt-1033-flp",
    model: "GT-1033-FLP",
    name: "2 Wire Loop Powered Transmitter",
    image: "/products/fixed-gas-detector/GT-1033-FLP-PPM-copy.webp",
  },
  {
    id: "gt-1033-wp",
    model: "GT-1033-WP",
    name: "Smart Gas Detector for Industrial Safety",
    image: "/products/fixed-gas-detector/GT-1033-WP-1.webp",
  },
  {
    id: "gt-4220-flp",
    model: "GT-4220-FLP-A",
    name: "Gas Leak Detector for Combustible Gases",
    image: "/products/fixed-gas-detector/GT-4220-FLP.webp",
  },
  {
    id: "gt-4220-wp-hcf",
    model: "GT-4220-WP-HCF",
    name: "LPG/PNG/CNG Gas Leak Detector for Enhanced Safety",
    image: "/products/fixed-gas-detector/GT-4220-WP.webp",
  },
  {
    id: "gt-4000-flp",
    model: "GT-4000-FLP",
    name: "Combustible Gas Leak Detector",
    image: "/products/fixed-gas-detector/GT-4000-FLP-1.webp",
  },
  {
    id: "gt-5022-flp",
    model: "GT-5022-FLP",
    name: "Smart Gas Transmitter",
    image: "/products/fixed-gas-detector/GT-5022-FLP-HCF.webp",
  },
  {
    id: "bgd-6033-flp",
    model: "BGD-6033-FLP",
    name: "Battery Powered Gas Detector",
    image: "/products/fixed-gas-detector/BGD-6033-FLP.webp",
  },
  {
    id: "gla-222-flp",
    model: "GLA-222-FLP",
    name: "LPG Gas Leak Detector",
    image: "/products/fixed-gas-detector/GLA-222-FLP.webp",
  },
] as const;

export function FixedGasProductGrid() {
  const [query, setQuery] = useState("");
  const chipRef = useRef<HTMLSpanElement>(null);

  function showChip(e: React.MouseEvent) {
    if (!chipRef.current) return;
    chipRef.current.style.opacity = "1";
    chipRef.current.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 16}px)`;
  }

  function moveChip(e: React.MouseEvent) {
    if (!chipRef.current) return;
    chipRef.current.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 16}px)`;
  }

  function hideChip() {
    if (!chipRef.current) return;
    chipRef.current.style.opacity = "0";
  }

  const filtered = PRODUCTS.filter(
    (p) =>
      query.trim() === "" ||
      p.model.toLowerCase().includes(query.toLowerCase()) ||
      p.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section aria-labelledby="fgd-products-heading" className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20">
      {/* Header row: heading + search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <h2
          id="fgd-products-heading"
          className="t-h2"
          style={{ margin: 0 }}
        >
          Available Products
        </h2>

        {/* Search bar */}
        <div
          className="flex items-center gap-2.5 px-3.5 h-10 w-full sm:w-72"
          style={{
            background: "var(--surface-primary)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-sm)",
            transition: "border-color .12s ease, box-shadow .12s ease",
          }}
          onFocusCapture={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-focus)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--focus-ring)";
          }}
          onBlurCapture={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "";
          }}
        >
          <Search size={15} aria-hidden="true" style={{ color: "var(--content-tertiary)", flexShrink: 0 }} />
          <input
            type="search"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm"
            style={{ color: "var(--content-primary)", fontFamily: "var(--font-sans)" }}
            aria-label="Search fixed gas detector products"
          />
        </div>
      </div>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => {
            const Tag = "href" in product && product.href ? "a" : "article";
            const linkProps = "href" in product && product.href ? { href: product.href } : {};
            return (
            <Tag
              key={product.id}
              {...(linkProps as Record<string, string>)}
              onMouseEnter={showChip}
              onMouseMove={moveChip}
              onMouseLeave={hideChip}
              className="flex flex-col cursor-pointer no-underline"
              style={{
                background: "var(--surface-primary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              {/* Image area */}
              <div
                className="relative w-full"
                style={{
                  aspectRatio: "4/3",
                  background: "var(--surface-secondary)",
                }}
              >
                <Image
                  src={product.image}
                  alt={`${product.model} — ${product.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-contain p-6"
                />
              </div>

              {/* Text area */}
              <div className="flex flex-col p-5 pt-4">
                <p
                  className="t-mono font-semibold mb-1"
                  style={{ fontSize: 15, color: "var(--content-primary)" }}
                >
                  {product.model}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    lineHeight: "20px",
                    color: "var(--content-secondary)",
                  }}
                >
                  {product.name}
                </p>
              </div>
            </Tag>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center" style={{ color: "var(--content-tertiary)" }}>
          <p className="t-body-lg">No products match &ldquo;{query}&rdquo;</p>
        </div>
      )}

      {/* Cursor-follow chip */}
      <span
        ref={chipRef}
        className="ym-chip ym-chip--brand"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transform: "translate(0px, 0px)",
          transition: "opacity .15s ease",
          willChange: "transform",
        }}
      >
        View product
      </span>
    </section>
  );
}
