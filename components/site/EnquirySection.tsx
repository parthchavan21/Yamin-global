"use client";

import { useState, type FormEvent, type SVGProps } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { SITE, SERVICE_OPTIONS } from "@/lib/site";

/* Brand glyphs — lucide-react dropped social logos for trademark reasons, so
   these are inlined (filled paths, 24×24, currentColor). */
const brand = (path: string) =>
  function BrandIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d={path} />
      </svg>
    );
  };

const Linkedin = brand(
  "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z",
);
const Instagram = brand(
  "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.86 5.86 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
);
const Facebook = brand(
  "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
);
const Youtube = brand(
  "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z",
);

const SOCIALS = [
  { Icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
  { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
  { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
  { Icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
];

function ContactRow({ Icon, label, children }: { Icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3.5 items-start">
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={{
          width: 40,
          height: 40,
          borderRadius: "var(--radius-md)",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid var(--neutral-800)",
          color: "var(--blue-300)",
        }}
      >
        <Icon size={18} aria-hidden="true" />
      </span>
      <div>
        <div className="t-label mb-1" style={{ color: "var(--neutral-500)" }}>{label}</div>
        <div style={{ fontSize: 14, lineHeight: "22px", color: "var(--neutral-300)" }}>{children}</div>
      </div>
    </div>
  );
}

export function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="enquiry" aria-labelledby="enquiry-heading" style={{ background: "var(--surface-inverted)" }}>
      <div className="max-w-[var(--container-max)] mx-auto px-5 md:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Form card */}
        <div
          className="p-6 md:p-8"
          style={{
            background: "var(--surface-primary)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <h2 id="enquiry-heading" className="t-h2" style={{ margin: "0 0 6px" }}>
            Send us an enquiry
          </h2>
          <p style={{ margin: "0 0 24px", fontSize: 14, color: "var(--content-secondary)" }}>
            Share your requirements and an engineer will respond within one business day.
          </p>

          {submitted ? (
            <div
              role="status"
              style={{
                background: "var(--surface-success)",
                border: "1px solid var(--green-100)",
                color: "var(--content-success)",
                borderRadius: "var(--radius-md)",
                padding: "16px 18px",
                fontSize: 14,
                lineHeight: "22px",
              }}
            >
              Thanks — your enquiry has been received. An engineer will respond within one business day.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Full name" name="fullName" placeholder="Jane Doe" required autoComplete="name" />
                <Input label="Company name" name="company" placeholder="Acme Industrial" autoComplete="organization" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Phone number" name="phone" type="tel" placeholder="+1 555 0100" autoComplete="tel" />
                <Input label="Email" name="email" type="email" placeholder="jane@acme.com" required autoComplete="email" />
              </div>
              <Select label="Select service" name="service" required defaultValue="">
                <option value="" disabled>Select a service…</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </Select>
              <Textarea
                label="Your requirements"
                name="message"
                placeholder="Describe your site, gases or parameters to monitor, and any standards you must meet."
                rows={4}
              />
              <div>
                <Button type="submit" size="lg" noBubble style={{ width: "100%" }}>
                  Send enquiry
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Contact details */}
        <div className="pt-0 lg:pt-2">
          <span className="t-label block mb-3" style={{ color: "var(--blue-300)" }}>
            Get in touch
          </span>
          <h2 className="t-h2" style={{ margin: "0 0 12px", color: "var(--content-inverted)" }}>
            Let&apos;s connect and start the conversation
          </h2>
          <p style={{ margin: "0 0 32px", fontSize: 15, lineHeight: "24px", color: "var(--neutral-400)", maxWidth: 440 }}>
            Tell us what you need to monitor and the standards you report against. We&apos;ll specify the right system —
            and stand behind it.
          </p>

          <div className="flex flex-col gap-6">
            <ContactRow Icon={MapPin} label="Head office">
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.country}
            </ContactRow>
            <ContactRow Icon={Mail} label="Email us">
              <a href={`mailto:${SITE.email}`} className="no-underline" style={{ color: "var(--blue-300)" }}>
                {SITE.email}
              </a>
            </ContactRow>
            <ContactRow Icon={Phone} label="Call us">
              <a href={SITE.phoneHref} className="no-underline" style={{ color: "var(--blue-300)" }}>
                {SITE.phone}
              </a>
            </ContactRow>
          </div>

          <div className="mt-8">
            <div className="t-label mb-3" style={{ color: "var(--neutral-500)" }}>Follow us</div>
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <div
                  key={label}
                  aria-label={label}
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--neutral-800)",
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--neutral-300)",
                  }}
                >
                  <Icon aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
