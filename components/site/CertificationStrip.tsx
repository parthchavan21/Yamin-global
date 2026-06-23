import { HOME_CERTS } from "@/lib/home";

const LOOP = [...HOME_CERTS, ...HOME_CERTS];

export function CertificationStrip() {
  return (
    <section className="border-y border-[#ECEEF2] py-[26px]">
      <div className="mx-auto max-w-[1280px] px-[var(--yg-gutter)] pb-5">
        <span className="font-yg-mono text-[11.5px] uppercase tracking-[0.12em] text-[#9AA4B2]">
          [ Certified &amp; compliant to global standards ]
        </span>
      </div>
      <div className="yg-marq relative overflow-hidden">
        <div className="yg-mt flex w-max items-center gap-14 animate-[ygMarquee_40s_linear_infinite]">
          {LOOP.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-10 w-auto object-contain opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
