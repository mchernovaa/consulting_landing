import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickySectionNav } from "@/components/layout/StickySectionNav";
import { Pixels } from "@/components/ads/Pixels";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { LocalePreference } from "@/components/layout/LocalePreference";
import { routing, type Locale } from "@/i18n/routing";

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

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const languages: Record<string, string> = {
    ru: `${siteUrl}/`,
    en: `${siteUrl}/en`,
    es: `${siteUrl}/es`
  };

  const canonical =
    locale === "ru" ? `${siteUrl}/` : `${siteUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: canonical,
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US"
    },
    alternates: {
      canonical: locale === "ru" ? "/" : `/${locale}`,
      languages
    }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "Common" });

  return (
    <html lang={locale}>
      <body className={`${display.variable} ${sans.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <LocalePreference />
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
              {t("skipToContent")}
            </a>
            <Header />
            <StickySectionNav />
            <main className="flex-1 pb-28 md:pb-0">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
