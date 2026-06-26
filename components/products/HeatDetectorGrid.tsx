"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const PRODUCTS = [
  {
    id: "htd-8811-flp",
    model: "HTD-8811-FLP",
    name: "Fixed Temperature Heat Detector",
    image: "/assets/products/heat-detector/HTD-8811-FLP.webp",
    categoryLabel: "Heat Detector",
  },
  {
    id: "htd-8822-flp",
    model: "HTD-8822-FLP",
    name: "Advanced Heat Detector with Visual Display",
    image: "/assets/products/heat-detector/HTD-8822-FLP.webp",
    categoryLabel: "Heat Detector",
  },
];

export function HeatDetectorGrid() {
  const [query, setQuery] = useState("");

  const filtered = PRODUCTS.filter(
    (p) =>
      query.trim() === "" ||
      p.model.toLowerCase().includes(query.toLowerCase()) ||
      p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section
      aria-labelledby="htd-products-heading"
      className="max-w-[var(--container-max)] mx-auto px-5 md:px-9 py-12 md:py-20"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <h2 id="htd-products-heading" className="t-h2" style={{ margin: 0 }}>
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
            aria-label="Search heat detector products"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="flex flex-col"
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
              <div className="flex flex-1 flex-col p-5 pt-4 gap-1">
                <span className="t-label" style={{ color: "var(--content-brand)" }}>
                  {product.categoryLabel}
                </span>
                <p className="t-mono font-semibold" style={{ fontSize: 15, color: "var(--content-primary)", margin: 0 }}>
                  {product.model}
                </p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--content-secondary)" }}>
                  {product.name}
                </p>
                <div className="mt-auto pt-4">
                  <span
                    className="ym-btn ym-btn--secondary ym-btn--sm w-full"
                    style={{ height: "38px" }}
                  >
                    View product
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center" style={{ color: "var(--content-tertiary)" }}>
          <p className="t-body-lg">No products match your search.</p>
        </div>
      )}
    </section>
  );
}
