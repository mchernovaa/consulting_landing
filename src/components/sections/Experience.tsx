import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

export async function Experience() {
  const t = await getTranslations("Experience");
  const niches = t.raw("niches") as string[];

  return (
    <section id="experience" className="section smooth-anchor bg-canvas-soft">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="section-heading">{t("title")}</h2>
            <p className="section-subtitle">{t("subtitle")}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delayMs={40}>
            <article className="card lift">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                {t("projectsLabel")}
              </p>
              <p className="mt-3 font-display text-3xl font-bold tracking-tight text-amberRetro">
                {t("projectsCount")}
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-ink-muted">
                {t("projectsText")}
              </p>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="card lift">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                {t("roleLabel")}
              </p>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight text-amberRetro">
                {t("roleTitle")}
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-ink-muted">
                {t("roleText")}
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delayMs={120}>
          <div className="card lift mt-6">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {niches.map((niche) => (
                <li
                  key={niche}
                  className="flex items-start gap-3 text-sm font-light text-ink-muted"
                >
                  <span className="mt-[9px] h-[2px] w-6 shrink-0 rounded-full bg-amberRetro" />
                  <span className="leading-relaxed">{niche}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
