import { HOME_VALUES } from "@/lib/home";

// Shared placeholder until per-value art is supplied.
const PLACEHOLDER_IMG = "/assets/Herosection.png";

export function WhyChooseUs() {
  return (
    <section id="why" className="yg-sec relative overflow-hidden py-[104px]">
      <div className="relative z-[1] mx-auto max-w-[1440px] px-[var(--yg-gutter)]">
        <div className="yg-why-head mb-16 max-w-[620px]" data-reveal-l="">
          <div className="mb-5 font-yg-mono text-[12px] uppercase tracking-[0.12em] text-yg-blue">
            WHY YAMIN GLOBAL
          </div>
          <h2 className="mb-5 text-[40px] font-semibold leading-[1.06] tracking-[-0.03em]">
            One accountable supplier, from spec to service
          </h2>
          <p className="text-[17px] leading-[1.6] text-[#46505C]">
            We deliver reliable, certified monitoring solutions — and stay accountable for them across gas,
            flame, process and environmental monitoring.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {HOME_VALUES.map((v, i) => {
            // First row: image right / content left. Then alternate.
            const imageRight = i % 2 === 0;
            const isLast = i === HOME_VALUES.length - 1;
            // Blueprint corner crosses — top corners on every card, bottom only on
            // the last so internal dividers carry exactly one cross.
            const crosses = [
              "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
              "right-0 top-0 translate-x-1/2 -translate-y-1/2",
              ...(isLast
                ? [
                    "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
                    "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
                  ]
                : []),
            ];
            return (
              <div
                key={v.no}
                data-reveal=""
                className={`yg-why-row relative grid grid-cols-2 items-center gap-[54px] border border-[#ECEEF2] px-[30px] py-5 ${
                  isLast ? "" : "border-b-0"
                }${imageRight ? "" : " yg-why-flip"}`}
              >
                {/* blueprint corner crosses */}
                <div className="pointer-events-none absolute inset-0 z-0">
                  {crosses.map((pos, ci) => (
                    <span
                      key={ci}
                      className={`absolute font-yg-mono text-[13px] leading-none text-yg-blue ${pos}`}
                    >
                      +
                    </span>
                  ))}
                </div>

                <div className="yg-why-textcell relative z-[1]">
                  <span className="font-yg-mono text-[13px] font-bold text-yg-blue">{v.no}</span>
                  <h3 className="my-3 text-[30px] font-semibold tracking-[-0.02em]">{v.title}</h3>
                  <p className="m-0 max-w-[520px] text-[16px] leading-[1.65] text-[#5C6675]">{v.body}</p>
                </div>

                <div
                  className={`yg-why-imgcell relative z-[1] aspect-[16/10] overflow-hidden ${
                    v.image ? "p-[8%]" : "bg-[linear-gradient(150deg,#0E5FCB,#0A2540)]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.image ?? PLACEHOLDER_IMG}
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    className={`block h-full w-full ${v.image ? "object-contain" : "object-cover"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
