import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="section bg-canvas">
      <div className="container-page">
        <p className="section-kicker">{t("kicker")}</p>
        <h1 className="section-heading">{t("title")}</h1>
        <p className="mt-4 max-w-xl text-sm font-light text-ink-muted sm:text-base">
          {t("text")}
        </p>
        <Link href="/" className="button-primary mt-8">
          {t("home")}
        </Link>
      </div>
    </div>
  );
}
