import { SITE, SERVICE_OPTIONS } from "@/lib/site";

const labelClass = "mb-2 block font-yg-mono text-[11px] uppercase tracking-[0.06em] text-[#6B7787]";
const inputClass =
  "yg-input w-full border border-[#DDE3EB] bg-[#F8FAFC] px-[14px] py-[13px] font-[inherit] text-[15px] text-yg-ink transition-all";

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span className="font-yg-mono text-[11px] uppercase tracking-[0.1em] text-[#7E90A8]">{label}</span>
      <span className={`text-right font-medium ${label === "Office" ? "text-[15px]" : "text-[16px]"}`}>{value}</span>
    </>
  );
  const className = "flex items-center justify-between gap-[14px] border-b border-white/[0.14] py-[18px]";
  return href ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export function EnquirySection() {
  return (
    <section id="enquiry" className="yg-sec relative overflow-hidden bg-yg-ink py-[104px] text-white">
      <div className="relative z-[1] mx-auto max-w-[1440px] px-[var(--yg-gutter)]">
        <div className="yg-contact-grid grid grid-cols-[1fr_1.05fr] items-start gap-[60px]">
          <div data-reveal-l="">
            <div className="mb-5 font-yg-mono text-[12px] uppercase tracking-[0.12em] text-[#6FA0EE]">
              SEND US AN ENQUIRY
            </div>
            <h2 className="mb-[18px] text-[40px] font-semibold leading-[1.02] tracking-[-0.03em]">
              Tell us what you need to monitor.
            </h2>
            <p className="mb-9 max-w-[420px] text-[18px] leading-[1.6] text-[#9FB0C6]">
              Share your requirements and the standards you report against — an engineer responds within one
              business day.
            </p>
            <div className="border-t border-white/[0.14]">
              <ContactRow label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactRow label="Phone" value={SITE.phone} href={SITE.phoneHref} />
              <ContactRow label="Office" value={`${SITE.address.line2} — ${SITE.address.country}`} />
            </div>
          </div>

          <form className="yg-form-pad bg-white p-9 text-yg-ink" data-reveal="">
            <div className="yg-form-grid grid grid-cols-2 gap-[18px]">
              <div>
                <label className={labelClass}>Full name *</label>
                <input className={inputClass} placeholder="Jane Doe" />
              </div>
              <div>
                <label className={labelClass}>Company</label>
                <input className={inputClass} placeholder="Acme Industries" />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input className={inputClass} type="email" placeholder="jane@acme.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input className={inputClass} placeholder="+971 …" />
              </div>
            </div>
            <div className="mt-[18px]">
              <label className={labelClass}>Service of interest *</label>
              <select className={inputClass} defaultValue={SERVICE_OPTIONS[0]}>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="mt-[18px]">
              <label className={labelClass}>Your requirements</label>
              <textarea
                className={`${inputClass} resize-y`}
                rows={3}
                placeholder="What are you monitoring, where, and against which standards?"
              />
            </div>
            <button
              type="submit"
              className="yg-cta yg-mono mt-[22px] w-full cursor-pointer border-none bg-yg-blue p-4 text-[13px] uppercase tracking-[0.05em] text-white transition-colors"
            >
              Send enquiry &nbsp;→
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
