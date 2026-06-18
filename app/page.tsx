import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteHero } from "@/components/site/SiteHero";
import { CertificationStrip } from "@/components/site/CertificationStrip";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { FeaturedBand } from "@/components/site/FeaturedBand";
import { IndustriesServed } from "@/components/site/IndustriesServed";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Faq } from "@/components/site/Faq";
import { EnquirySection } from "@/components/site/EnquirySection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SITE, SITE_URL, GAS_PRODUCTS, FLAME_PRODUCTS } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE_URL,
      description: SITE.description,
      logo: `${SITE_URL}/brand/yamine-logo.svg`,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.line1,
        addressLocality: SITE.address.line2,
        addressCountry: SITE.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phone,
      },
      sameAs: Object.values(SITE.social),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "OfferCatalog",
      name: "Monitoring & safety systems",
      itemListElement: [...GAS_PRODUCTS, ...FLAME_PRODUCTS].map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.name, description: p.desc },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="yg-page">
        <SiteHeader />
        <main>
          <SiteHero />
          <CertificationStrip />
          <CategoryGrid />
          <FeaturedBand />
          <IndustriesServed />
          <WhyChooseUs />
          <Faq />
          <EnquirySection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
