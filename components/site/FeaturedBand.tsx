import Image from "next/image";

export function FeaturedBand() {
  return (
    <section className="yg-sec pb-[104px]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-9">
        <div className="yg-feat grid grid-cols-2 border border-[#E4E8EE]" data-reveal="">
          <div className="yg-feat-pad flex flex-col justify-center px-12 py-[54px]">
            <div className="mb-5 font-yg-mono text-[12px] uppercase tracking-[0.12em] text-yg-blue">
              [ On site ]
            </div>
            <h3 className="m-0 mb-4 text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.025em]">
              Engineered, commissioned and calibrated — not just shipped
            </h3>
            <p className="m-0 mb-7 max-w-[440px] text-[17px] leading-[1.6] text-[#46505C]">
              Our engineers specify, commission and calibrate on site, and hand over named certificates and
              calibration records for your compliance file.
            </p>
            <a
              className="yg-cta-line yg-mono self-start bg-yg-ink px-[26px] py-[15px] text-[13px] uppercase tracking-[0.05em] text-white"
              href="#why"
            >
              <span>How we work &nbsp;→</span>
            </a>
          </div>
          <div className="relative min-h-[380px] border-l border-[#E4E8EE] bg-[#F4F6F9]">
            <Image
              src="/assets/Industries/Manufacturing & process.png"
              alt="Field engineer commissioning monitoring equipment on site"
              fill
              sizes="(max-width: 980px) 100vw, 640px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
