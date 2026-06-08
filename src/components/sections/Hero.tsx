import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

function PortraitPhoto({
  className = "",
  priority = false,
  alt
}: {
  className?: string;
  priority?: boolean;
  alt: string;
}) {
  return (
    <EditorialImage
      src="/images/maria-chernova-hero.jpg"
      alt={alt}
      width={1024}
      height={768}
      aspect="auto"
      fit="contain"
      priority={priority}
      className={className}
    />
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-divider/25 bg-canvas-soft/55 px-4 py-4 sm:px-5 sm:py-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amberRetro/75 sm:text-xs">
        {label}
      </p>
      <p className="mt-2.5 text-sm font-light leading-relaxed text-ink sm:text-[0.9375rem]">
        {value}
      </p>
    </div>
  );
}

export async function Hero() {
  const t = await getTranslations("Hero");
  const tc = await getTranslations("Common");

  return (
    <section
      id="hero"
      className="smooth-anchor bg-canvas py-8 sm:py-12 lg:min-h-[calc(100vh-4rem)] lg:py-14 xl:py-16"
    >
      <div className="container-page grid gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 xl:gap-20">
        <div className="max-w-2xl space-y-8 sm:space-y-12 lg:max-w-none">
          <Reveal>
            <div className="space-y-5 sm:space-y-7">
              <h1 className="font-display text-[1.5rem] font-bold leading-[1.12] tracking-tight text-amberRetro text-balance sm:text-[1.875rem] lg:text-[2.375rem] xl:text-[2.5rem]">
                {t("title")}
              </h1>
              <p className="max-w-xl text-sm font-light leading-relaxed text-ink-muted sm:max-w-2xl sm:text-base lg:text-[1.0625rem] lg:leading-[1.7]">
                {t("subtitle")}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={60} className="lg:hidden">
            <PortraitPhoto
              priority
              alt={t("portraitAlt")}
              className="mx-auto w-full max-w-full sm:max-w-[380px]"
            />
          </Reveal>

          <Reveal delayMs={80}>
            <div className="flex flex-col gap-8 sm:gap-11">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                <HeroMetric
                  label={t("metrics.audience.label")}
                  value={t("metrics.audience.value")}
                />
                <HeroMetric
                  label={t("metrics.result.label")}
                  value={t("metrics.result.value")}
                />
                <HeroMetric
                  label={t("metrics.format.label")}
                  value={t("metrics.format.value")}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/#contact"
                  data-cta="hero_primary"
                  className="button-primary w-full sm:w-auto"
                >
                  {tc("discussTask")}
                </Link>
                <Link
                  href="/#services"
                  data-cta="hero_secondary"
                  className="button-secondary w-full sm:w-auto"
                >
                  {tc("services")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={100} className="hidden lg:flex lg:justify-end">
          <PortraitPhoto
            priority
            alt={t("portraitAlt")}
            className="w-full max-w-[380px] xl:max-w-[440px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
