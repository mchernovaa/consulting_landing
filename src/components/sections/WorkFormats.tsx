import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";

type FormatItem = {
  title: string;
  description: string;
  bullets: string[];
  result: string;
};

export async function WorkFormats() {
  const t = await getTranslations("WorkFormats");
  const tc = await getTranslations("Common");
  const formats = t.raw("items") as FormatItem[];

  return (
    <section id="formats" className="section smooth-anchor bg-canvas-soft">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="section-heading">
              {t("title")}{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                {t("titleHighlight")}
              </span>
            </h2>
            <p className="section-subtitle">{t("subtitle")}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {formats.map((format, index) => (
            <Reveal key={format.title} delayMs={40 * index}>
              <article className="card lift flex h-full flex-col">
                <div className="flex-1">
                  <h3 className="mb-3 font-display text-xl tracking-tight text-ink">
                    {format.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-ink-muted">
                    {format.description}
                  </p>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                    {t("whatIncluded")}
                  </p>
                  <ul className="mb-5 space-y-2 text-sm text-ink-muted">
                    {format.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[9px] h-[2px] w-6 shrink-0 rounded-full bg-amberRetro" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-divider/70 pt-5">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                    {t("result")}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {format.result}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={160}>
          <div className="mt-10 flex flex-col items-start gap-6 border-t border-divider/70 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
              {t("pricingNote")}
            </p>
            <Link href="/#contact" data-cta="formats_primary" className="button-primary">
              {tc("discussTask")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
