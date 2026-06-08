"use client";

import { useLocale, useTranslations } from "next-intl";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const telegramUrl = "https://t.me/mchernovaa";
const email = "m.chernova734@gmail.com";

export function SchemaOrg() {
  const t = useTranslations("Schema");
  const locale = useLocale();
  const offers = t.raw("offers") as string[];

  const localePath = locale === "ru" ? "" : `/${locale}`;
  const pageUrl = `${siteUrl}${localePath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: t("name"),
    description: t("description"),
    serviceType: t("serviceType"),
    inLanguage: locale,
    provider: {
      "@type": "Person",
      name: "Maria Chernova",
      jobTitle: t("jobTitle"),
      url: pageUrl,
      email,
      sameAs: [telegramUrl]
    },
    areaServed: "Worldwide",
    makesOffer: offers.map((name) => ({ "@type": "Offer", name })),
    potentialAction: {
      "@type": "ContactAction",
      target: `${pageUrl}#contact`,
      name: t("contactAction")
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
