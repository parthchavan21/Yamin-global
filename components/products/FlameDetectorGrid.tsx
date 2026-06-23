"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

type Category = "all" | "flame" | "ultrafast";

const PRODUCTS = [
  {
    id: "fld-3311-flp",
    model: "FLD-3311-FLP",
    name: "UV and Triple IR Sensor",
    image: "/assets/products/flame-detector/FLD-3311-FLP.webp",
    category: "flame" as Category,
    categoryLabel: "Flame Detector",
  },
  {
    id: "fld-0011-flp",
    model: "FLD-0011-FLP",
    name: "UV Flame (Radiant Energy) Detector",
    image: "/assets/products/flame-detector/FLD-0011-FLP.webp",
    category: "flame" as Category,
    categoryLabel: "Flame Detector",
  },
  {
    id: "fld-1111-flp",
    model: "FLD-1111-FLP",
    name: "UV and IR Flame (Radiant Energy) Detector",
    image: "/assets/products/flame-detector/FLD-1111-FLP-1.webp",
    category: "flame" as Category,
    categoryLabel: "Flame Detector",
  },
  {
    id: "fld-3300-flp",
    model: "FLD-3300-FLP",
    name: "Triple IR Sensor Flame Detector",
    image: "/assets/products/flame-detector/FLD-3300-FLP.webp",
    category: "flame" as Category,
    categoryLabel: "Flame Detector",
  },
  {
    id: "fld-3311-flp-sil",
    model: "FLD-3311-FLP",
    name: "UV & Triple IR SIL 2 Certified Flame Detector",
    image: "/assets/products/flame-detector/FLD-3311-FLP-GT-2511-FLP-SIL-2-4.png",
    category: "flame" as Category,
    categoryLabel: "Flame Detector",
  },
  {
    id: "fld-1111-flp-ultrafast",
    model: "FLD-1111-FLP",
    name: "Ultra Fast Flame (Radiant Energy) Detector",
    image: "/assets/products/flame-detector/FLD-1111-FLP-ultrafast.webp",
    category: "ultrafast" as Category,
    categoryLabel: "Ultra Fast Flame Detector",
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Flame Detectors", value: "flame" },
  { label: "Ultra Fast Flame Detectors", value: "ultrafast" },
];

export function FlameDetectorGrid() {
  const [active, setActive] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const chipRef = useRef<HTMLSpanElement>(null);

  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = active === "all" || p.category === active;
    const matchesQuery =
      query.trim() === "" ||
      p.model.toLowerCase().includes(query.toLowerCase()) ||
      p.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

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

  return (
    <section
      aria-labelledby="fld-products-heading"
      className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20"
    >
      {/* Row 1: heading + search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <h2 id="fld-products-heading" className="t-h2" style={{ margin: 0 }}>
          Available Products
        </h2>
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
            aria-label="Search flame detector products"
          />
        </div>
      </div>

      {/* Row 2: filter tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className="ym-chip"
            style={{
              background: active === tab.value ? "var(--surface-brand)" : "var(--surface-secondary)",
              color: active === tab.value ? "var(--content-inverted)" : "var(--content-secondary)",
              borderColor: active === tab.value ? "var(--surface-brand)" : "var(--border-primary)",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              transition: "background .12s ease, color .12s ease, border-color .12s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <article
              key={product.id}
              onMouseEnter={showChip}
              onMouseMove={moveChip}
              onMouseLeave={hideChip}
              className="flex flex-col cursor-pointer"
              style={{
                background: "var(--surface-primary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: "4/3", background: "var(--surface-secondary)" }}
              >
                <Image
                  src={product.image}
                  alt={`${product.model} — ${product.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="flex flex-col p-5 pt-4 gap-1">
                <span className="t-label" style={{ color: "var(--content-brand)" }}>
                  {product.categoryLabel}
                </span>
                <p className="t-mono font-semibold" style={{ fontSize: 15, color: "var(--content-primary)", margin: 0 }}>
                  {product.model}
                </p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--content-secondary)" }}>
                  {product.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center" style={{ color: "var(--content-tertiary)" }}>
          <p className="t-body-lg">No products match your search.</p>
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
          transform: "translate(0px,0px)",
          transition: "opacity .15s ease",
          willChange: "transform",
        }}
      >
        View product
      </span>
    </section>
  );
}
