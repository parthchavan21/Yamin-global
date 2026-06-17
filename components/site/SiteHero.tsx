import Image from "next/image";
import { Button } from "@/components/ui/Button";

const LOGOS = [
  { src: "/logos/EX.jpg",            alt: "ATEX / Ex" },
  { src: "/logos/IECEx.jpg",         alt: "IECEx" },
  { src: "/logos/SIL2-Logo.jpg",     alt: "SIL 2" },
  { src: "/logos/CE.jpg",            alt: "CE" },
  { src: "/logos/HART.png",          alt: "HART" },
  { src: "/logos/UKCA.jpg",          alt: "UKCA" },
  { src: "/logos/UL.jpg",            alt: "UL" },
  { src: "/logos/RoHS-logo.jpg",     alt: "RoHS" },
  { src: "/logos/BIS.png",           alt: "BIS" },
  { src: "/logos/PESO.jpg",          alt: "PESO" },
  { src: "/logos/MSME.jpg",          alt: "MSME" },
  { src: "/logos/NSIC.jpg",          alt: "NSIC" },
  { src: "/logos/GeM.jpg",           alt: "GeM" },
  { src: "/logos/DSIR.png",          alt: "DSIR" },
  { src: "/logos/DRDO.png",          alt: "DRDO" },
  { src: "/logos/Make-in-India.jpg", alt: "Make in India" },
  { src: "/logos/SGS-BASEEFA.png",   alt: "SGS Baseefa" },
  { src: "/logos/SASO2.png",         alt: "SASO" },
  { src: "/logos/SASOEX-1.png",      alt: "SASO-Ex" },
  { src: "/logos/QCI.png",           alt: "QCI" },
  { src: "/logos/ISI.jpg",           alt: "ISI" },
  { src: "/logos/IP.png",            alt: "IP" },
  { src: "/logos/DME.png",           alt: "DME" },
  { src: "/logos/CIFMR.jpg",         alt: "CIFMR" },
  { src: "/logos/TS-logo.jpg",       alt: "TS" },
  { src: "/logos/Malesiya-logo.jpg", alt: "Malaysia" },
];
const TICKER_ITEMS = [...LOGOS, ...LOGOS];


export function SiteHero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      style={{ background: "var(--surface-primary)", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center" style={{ paddingTop: "calc(24px + 56px + 40px)", paddingBottom: 64 }}>
        <div style={{ minWidth: 0 }}>
          <span className="t-label block mb-4" style={{ color: "var(--content-brand)" }}>
            Industrial monitoring &amp; safety
          </span>
          <h1
            id="hero-heading"
            className="t-display"
            style={{
              margin: "0 0 20px",
              textWrap: "balance",
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: "clamp(36px, 6vw, 50px)",
            }}
          >
            Your industry runs on precision. We help you protect it before risk becomes a problem.
          </h1>
          <p className="t-body-lg t-secondary" style={{ margin: "0 0 32px", maxWidth: 520 }}>
            Yamin Global provides advanced gas detection, process monitoring, cold chain, clean room, IoT, and data acquisition solutions that help you monitor critical conditions, respond faster, and keep your people, assets, and operations safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href="#products" className="w-full sm:w-auto no-underline"><Button size="lg" className="w-full">Browse products</Button></a>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">Talk to an engineer</Button>
          </div>
          <div className="flex flex-col gap-3" style={{ width: "100%", maxWidth: 540, overflow: "hidden" }}>
            <span className="t-label" style={{ color: "var(--content-tertiary)" }}>
              Certified &amp; compliant to
            </span>
            <div style={{ width: "100%", overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
              <ul className="ym-ticker-track gap-6 list-none m-0 p-0 items-center" aria-hidden="true">
                {TICKER_ITEMS.map((logo, i) => (
                  <li key={`${logo.alt}-${i}`} className="flex-none flex items-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={72}
                      height={40}
                      className="object-contain"
                      style={{ height: 40, width: "auto", maxWidth: 72 }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <Image
            src="/heroimg1.png"
            alt="Industrial monitoring systems"
            width={560}
            height={480}
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="w-full h-auto lg:max-h-[480px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
