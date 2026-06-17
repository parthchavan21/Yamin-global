import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// Primary UI face — self-hosted Satoshi variable font.
const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "./fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
});

// Technical / data face — readouts, serials, table numerics.
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yamin Global — Industrial Monitoring & Safety Systems",
    template: "%s | Yamin Global",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "gas detection systems",
    "process control instruments",
    "data acquisition software",
    "cold chain monitoring",
    "clean room monitoring",
    "vibration monitoring",
    "industrial safety",
    "ATEX",
    "IECEx",
    "SIL 2",
    "environmental monitoring",
  ],
  authors: [{ name: SITE.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Yamin Global — Industrial Monitoring & Safety Systems",
    description: SITE.description,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yamin Global — Industrial Monitoring & Safety Systems",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${ibmPlexMono.variable} h-full`}>
      <body className="min-h-full">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
