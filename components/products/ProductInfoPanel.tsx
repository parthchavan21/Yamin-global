"use client";

import { useState } from "react";
import type { ProductFeature, ProductSpec } from "@/lib/products/types";

type Props = {
  model: string;
  name: string;
  description: string;
  features?: ProductFeature[];
  specs?: ProductSpec[];
  applications?: string[];
  datasheetHref?: string;
};

const TABS = ["Features", "Applications"] as const;
type Tab = (typeof TABS)[number];

export function ProductInfoPanel({
  name,
  description,
  features,
  specs,
  applications,
  datasheetHref,
}: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("Features");

  return (
    <div className="flex flex-col gap-6">
      {/* Title — top-aligned with the breadcrumb in the left column */}
      <h1
        className="t-h1"
        style={{
          margin: 0,
          fontSize: "clamp(22px, 3vw, 32px)",
          lineHeight: "clamp(30px, 4vw, 40px)",
        }}
      >
        {name}
      </h1>

      {/* Hairline divider */}
      <div style={{ height: 1, background: "var(--border-primary)" }} />

      {/* Description */}
      <p
        style={{
          margin: 0,
          fontSize: 15,
          lineHeight: "26px",
          color: "var(--content-secondary)",
        }}
      >
        {description}
      </p>

      {/* CTA buttons */}
      <div className="flex gap-3 flex-wrap">
        <a
          href="#enquiry"
          className="flex items-center justify-center px-6 h-11 text-sm font-medium no-underline"
          style={{
            border: "1.5px solid var(--border-primary)",
            color: "var(--content-primary)",
            fontFamily: "var(--font-sans)",
            borderRadius: "var(--radius-sm)",
            transition: "border-color .12s ease",
            minWidth: 140,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--content-brand)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
        >
          Send Enquiry
        </a>
        <a
          href={datasheetHref ?? "#datasheet"}
          className="flex items-center justify-center px-6 h-11 text-sm font-medium no-underline"
          style={{
            background: "var(--content-brand)",
            color: "#fff",
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-sans)",
            transition: "opacity .12s ease",
            minWidth: 140,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "")}
        >
          Datasheet
        </a>
      </div>

      {/* Tabs */}
      <div>
        {/* Tab bar */}
        <div
          className="flex"
          style={{ borderBottom: "1px solid var(--border-primary)" }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-5 py-3 text-sm font-medium"
              style={{
                fontFamily: "var(--font-sans)",
                color:
                  activeTab === tab
                    ? "var(--content-brand)"
                    : "var(--content-secondary)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "color .12s ease",
              }}
            >
              {tab}
              {activeTab === tab && (
                <span
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: 2, background: "var(--content-brand)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="pt-6">
          {activeTab === "Features" && (
            <div className="flex flex-col gap-8">
              {/* Feature list */}
              {features && features.length > 0 && (
                <ol className="flex flex-col gap-3 list-none m-0 p-0">
                  {features.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm"
                      style={{ lineHeight: "22px", color: "var(--content-secondary)" }}
                    >
                      <span
                        style={{
                          color: "var(--content-tertiary)",
                          flexShrink: 0,
                          minWidth: 22,
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span>
                        <strong
                          style={{
                            color: "var(--content-primary)",
                            fontWeight: 600,
                          }}
                        >
                          {f.title}:
                        </strong>{" "}
                        {f.body}
                      </span>
                    </li>
                  ))}
                </ol>
              )}

              {/* Technical specifications */}
              {specs && specs.length > 0 && (
                <div>
                  <p
                    className="t-label mb-4"
                    style={{ color: "var(--content-primary)", fontWeight: 700 }}
                  >
                    Technical Specifications
                  </p>
                  <ol className="flex flex-col gap-3 list-none m-0 p-0">
                    {specs.map((s, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm"
                        style={{ lineHeight: "22px", color: "var(--content-secondary)" }}
                      >
                        <span
                          style={{
                            color: "var(--content-tertiary)",
                            flexShrink: 0,
                            minWidth: 22,
                          }}
                        >
                          {i + 1}.
                        </span>
                        <span>
                          <strong
                            style={{
                              color: "var(--content-primary)",
                              fontWeight: 600,
                            }}
                          >
                            {s.label}:
                          </strong>{" "}
                          {s.value}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}

          {activeTab === "Applications" && applications && (
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {applications.map((app, i) => (
                <span
                  key={i}
                  className="text-sm py-1"
                  style={{ color: "var(--content-secondary)", lineHeight: "22px" }}
                >
                  {app}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
