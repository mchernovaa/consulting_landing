import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

export async function Cta() {
  const t = await getTranslations("Cta");
  const tc = await getTranslations("Common");

  return (
    <section id="cta" className="section smooth-anchor bg-canvas-soft">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-5">
              <p className="section-kicker mb-0">{t("kicker")}</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-amberRetro sm:text-4xl">
                {t("title")}
              </h2>
              <p className="max-w-lg text-base font-light leading-relaxed text-ink-muted sm:text-lg">
                {t("text")}
              </p>
              <Link
                href="/#contact"
                data-cta="cta_primary"
                className="button-primary inline-flex"
              >
                {tc("discussTask")}
              </Link>
            </div>

            <EditorialImage
              src="/images/maria-chernova-cta.jpg"
              alt={t("portraitAlt")}
              width={1024}
              height={768}
              aspect="auto"
              fit="contain"
              className="mx-auto w-full max-w-[320px] sm:max-w-sm lg:max-w-md"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
