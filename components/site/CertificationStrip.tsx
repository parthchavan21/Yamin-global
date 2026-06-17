import Image from "next/image";

const LOGOS = [
  { src: "/logos/EX.jpg",             alt: "ATEX / Ex" },
  { src: "/logos/IECEx.jpg",          alt: "IECEx" },
  { src: "/logos/SIL2-Logo.jpg",      alt: "SIL 2" },
  { src: "/logos/CE.jpg",             alt: "CE" },
  { src: "/logos/HART.png",           alt: "HART" },
  { src: "/logos/UKCA.jpg",           alt: "UKCA" },
  { src: "/logos/UL.jpg",             alt: "UL" },
  { src: "/logos/RoHS-logo.jpg",      alt: "RoHS" },
  { src: "/logos/BIS.png",            alt: "BIS" },
  { src: "/logos/PESO.jpg",           alt: "PESO" },
  { src: "/logos/MSME.jpg",           alt: "MSME" },
  { src: "/logos/NSIC.jpg",           alt: "NSIC" },
  { src: "/logos/GeM.jpg",            alt: "GeM" },
  { src: "/logos/DSIR.png",           alt: "DSIR" },
  { src: "/logos/DRDO.png",           alt: "DRDO" },
  { src: "/logos/Make-in-India.jpg",  alt: "Make in India" },
  { src: "/logos/SGS-BASEEFA.png",    alt: "SGS Baseefa" },
  { src: "/logos/SASO2.png",          alt: "SASO" },
  { src: "/logos/SASOEX-1.png",       alt: "SASO-Ex" },
  { src: "/logos/QCI.png",            alt: "QCI" },
  { src: "/logos/ISI.jpg",            alt: "ISI" },
  { src: "/logos/IP.png",             alt: "IP" },
  { src: "/logos/DME.png",            alt: "DME" },
  { src: "/logos/CIFMR.jpg",          alt: "CIFMR" },
  { src: "/logos/TS-logo.jpg",        alt: "TS" },
  { src: "/logos/Malesiya-logo.jpg",  alt: "Malaysia" },
];

const ITEMS = [...LOGOS, ...LOGOS];

export function CertificationStrip() {
  return (
    <section
      aria-label="Standards and certifications"
      style={{ background: "var(--surface-primary)", borderBottom: "1px solid var(--border-primary)" }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-6 flex flex-col items-center gap-5">
        <span className="t-label" style={{ color: "var(--content-tertiary)" }}>
          Certified &amp; compliant to
        </span>
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <ul className="ym-ticker-track gap-8 list-none m-0 p-0 items-center" aria-hidden="true">
            {ITEMS.map((logo, i) => (
              <li key={`${logo.alt}-${i}`} className="flex-none flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={48}
                  className="object-contain"
                  style={{ height: 48, width: "auto", maxWidth: 80 }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
