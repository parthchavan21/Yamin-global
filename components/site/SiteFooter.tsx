import Link from "next/link";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { BrandMark } from "@/components/site/BrandMark";

// Homepage-section anchors stay absolute so they work from any page.
const toHref = (href: string) => (href.startsWith("#") && href.length > 1 ? `/${href}` : href);

const COLS = [
  {
    title: "Gas Detectors",
    links: [
      { label: "Fixed Gas Detector", href: "/products/fixed-gas-detector" },
      { label: "GT-2500-FLP", href: "/products/fixed-gas-detector/gt-2500-flp" },
    ],
  },
  {
    title: "Flame Detectors",
    links: [
      { label: "Flame Detector", href: "/products/flame-detector" },
      { label: "Heat Detector", href: "/products/heat-detector" },
      { label: "Ember Detector", href: "/products/ember-detector" },
    ],
  },
];

const headingClass = "mb-4 font-yg-mono text-[11px] font-normal uppercase tracking-[0.1em] text-[#9AA4B2]";
const colClass = "flex flex-col gap-[11px] text-[15px] text-[#46505C]";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ECEEF2] bg-white pb-8 pt-[72px] text-yg-ink">
      <div className="mx-auto max-w-[1440px] px-[var(--yg-gutter)]">
        <div className="yg-footer-grid grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 border-b border-[#ECEEF2] pb-12">
          <div>
            <div className="mb-4 flex items-center gap-[11px]">
              <BrandMark />
            </div>
            <p className="m-0 max-w-[300px] text-[15px] leading-[1.6] text-[#6B7787]">
              Industrial distribution of monitoring, safety and control systems.
            </p>
            <div className="mt-4 flex max-w-[290px] items-center  gap-3 border border-[#ECEEF2] bg-[#F8FAFC] px-[14px] py-3">
              <div className="p-2  bg-[var(--surface-brand)]" ><MapPin size={18} className="mt-[2px] shrink-0 text-white" strokeWidth={2} /> 
              </div>
              <address className="m-0 text-[14px] not-italic leading-[1.6] text-[#6B7787]">
                P O BOX 40369, C1 - 1F - SF0010, Ajman Free Zone, Ajman — UAE.
              </address>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className={headingClass}>{col.title}</h4>
              <div className={colClass}>
                {col.links.map((l) => (
                  <Link key={l.label} className="yg-navlink" href={toHref(l.href)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className={headingClass}>Get in touch</h4>
            <div className={colClass}>
              <a className="yg-navlink" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <a className="yg-navlink" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
              <Link href="/#enquiry" className="font-medium text-yg-blue">
                Request a quote →
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[14px] pt-6 font-yg-mono text-[12px] text-[#9AA4B2]">
          <span>© 2026 {SITE.legalName} — All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#">Privacy policy</a>
            <a href="#">Terms</a>
            <a href="#">Quality policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
