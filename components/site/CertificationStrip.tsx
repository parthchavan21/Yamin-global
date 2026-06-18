import { HOME_CERTS } from "@/lib/home";

const LOOP = [...HOME_CERTS, ...HOME_CERTS];

export function CertificationStrip() {
  return (
    <section style={{ borderTop: "1px solid #ECEEF2", borderBottom: "1px solid #ECEEF2", padding: "26px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 var(--yg-gutter) 20px" }}>
        <span
          className="yg-mono"
          style={{ fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#9AA4B2" }}
        >
          [ Certified &amp; compliant to global standards ]
        </span>
      </div>
      <div
        className="yg-marq"
        style={{
          position: "relative",
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)",
          maskImage: "linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)",
        }}
      >
        <div
          className="yg-mt"
          style={{ display: "flex", gap: 56, width: "max-content", alignItems: "center", animation: "ygMarquee 40s linear infinite" }}
        >
          {LOOP.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              style={{ height: 40, width: "auto", objectFit: "contain", filter: "grayscale(1)", opacity: 0.7 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
