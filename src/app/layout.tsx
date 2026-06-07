import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickySectionNav } from "@/components/layout/StickySectionNav";
import { Pixels } from "@/components/ads/Pixels";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  variable: "--font-display"
});

const sans = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title:
    "Maria Chernova — методолог и консультант по систематизации бизнеса",
  description:
    "Помогаю собственникам превращать знания, процессы и стандарты в понятную систему для команды и масштабирования.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    title: "Maria Chernova — систематизация бизнеса",
    description:
      "Методолог и консультант: описание процессов, регламенты, инструкции, база знаний.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${sans.variable}`}>
        <Pixels
          metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID}
          googleAdsId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}
          ga4Id={process.env.NEXT_PUBLIC_GA4_ID}
        />
        <SchemaOrg />
        <div className="grain flex min-h-screen flex-col bg-canvas">
          <a
            href="#hero"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-terracotta focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.2em] focus:text-ink"
          >
            Перейти к содержанию
          </a>
          <Header />
          <StickySectionNav />
          <main className="flex-1 pb-28 md:pb-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
