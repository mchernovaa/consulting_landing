const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const telegramUrl = "https://t.me/mchernovaa";
const email = "m.chernova734@gmail.com";
const locationCity = "Buenos Aires";

export function SchemaOrg() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Бизнес-консалтинг: система процессов и масштабирование",
    description:
      "Помогаю выстроить операционную систему бизнеса: регламенты, должностные инструкции, описание бизнес-процессов, KPI и контур контроля, база знаний, франчайзибуки и подготовка к масштабированию.",
    serviceType:
      "Систематизация и оптимизация бизнес-процессов, регламенты, KPI, база знаний, операционная структура, франчайзинг",
    provider: {
      "@type": "Person",
      name: "Мария Чернова",
      url: siteUrl,
      email,
      sameAs: [telegramUrl]
    },
    areaServed: ["Argentina", "Worldwide"],
    address: {
      "@type": "PostalAddress",
      addressLocality: locationCity,
      addressCountry: "AR"
    },
    makesOffer: [
      { "@type": "Offer", name: "Диагностика операционной системы" },
      { "@type": "Offer", name: "Разработка регламентов и процессов" },
      { "@type": "Offer", name: "KPI и база знаний" }
    ],
    potentialAction: {
      "@type": "ContactAction",
      target: `${siteUrl}#contact`,
      name: "Запросить разбор системы"
    }
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

