import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteHero } from "@/components/site/SiteHero";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { IndustriesServed } from "@/components/site/IndustriesServed";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Faq } from "@/components/site/Faq";
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
      <SiteHeader />
      <main>
        <SiteHero />
        <CategoryGrid />
        <IndustriesServed />
        <WhyChooseUs />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
