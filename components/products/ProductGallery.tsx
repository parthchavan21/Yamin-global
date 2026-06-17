"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { ProductImage } from "@/lib/products/types";

type Props = {
  images: ProductImage[];
  videoId?: string;
  productName: string;
};

const VIDEO_SLOT = "__video__";

export function ProductGallery({ images, videoId, productName }: Props) {
  const [activeKey, setActiveKey] = useState<string>(
    images[0] ? `${images[0].src}::0` : VIDEO_SLOT,
  );

  const isVideo = activeKey === VIDEO_SLOT;
  const activeImage = images.find((img, i) => `${img.src}::${i}` === activeKey);

  return (
    <div className="flex flex-col gap-3">
      {/* ── Main preview ──────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "1 / 1",
          background: "var(--surface-secondary)",
          border: "1px solid var(--border-primary)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        {isVideo && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title={`${productName} product video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        ) : (
          <Image
            key={activeKey}
            src={activeImage?.src ?? images[0]?.src ?? ""}
            alt={activeImage?.alt ?? productName}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6"
          />
        )}
      </div>

      {/* ── Thumbnail strip ───────────────────────────────────────── */}
      <div className="grid gap-2.5" style={{ gridTemplateColumns: `repeat(${images.length + (videoId ? 1 : 0)}, 1fr)` }}>
        {/* Image thumbnails */}
        {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveKey(`${img.src}::${i}`)}
              aria-label={`View image: ${img.alt}`}
              aria-pressed={`${img.src}::${i}` === activeKey}
              className="relative overflow-hidden p-0"
              style={{
                aspectRatio: "1 / 1",
                background: "var(--surface-secondary)",
                border: (`${img.src}::${i}` === activeKey)
                  ? "2px solid var(--border-brand)"
                  : "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                transition: "border-color .12s ease",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100px"
                className="object-contain p-2"
              />
            </button>
        ))}

        {/* Video thumbnail */}
        {videoId && (
          <button
            onClick={() => setActiveKey(VIDEO_SLOT)}
            aria-label="Watch product video"
            aria-pressed={isVideo}
            className="relative overflow-hidden flex flex-col items-center justify-center gap-1 p-0"
            style={{
              aspectRatio: "1 / 1",
              background: isVideo ? "var(--surface-inverted)" : "var(--neutral-900)",
              border: isVideo
                ? "2px solid var(--border-brand)"
                : "1px solid var(--border-primary)",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              transition: "border-color .12s ease, background .12s ease",
            }}
          >
            <span
              className="flex items-center justify-center rounded-full"
              style={{
                width: 28,
                height: 28,
                background: "rgba(255,255,255,0.15)",
              }}
            >
              <Play size={13} fill="white" color="white" aria-hidden="true" />
            </span>
            <span style={{ fontSize: 10, color: "var(--neutral-300)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Video
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
