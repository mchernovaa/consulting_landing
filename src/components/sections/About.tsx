import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

type Principle = { title: string; description: string };

export async function About() {
  const t = await getTranslations("About");
  const principles = t.raw("principles") as Principle[];

  return (
    <section id="about" className="section smooth-anchor bg-canvas">
      <div className="container-page max-w-3xl">
        <Reveal>
          <p className="section-kicker">{t("kicker")}</p>
          <h2 className="section-heading">
            {t("title")}{" "}
            <span className="underline decoration-terracotta decoration-[0.18em] underline-offset-[0.35em]">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-10 space-y-6">
          <Reveal delayMs={80}>
            <div className="card lift ring-1 ring-amberRetro/15">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                {t("advantageLabel")}
              </p>
              <div className="divider my-5" />
              <p className="font-display text-2xl font-bold tracking-tight text-amberRetro sm:text-3xl">
                {t("advantageTitle")}
              </p>
              <p className="mt-4 text-base font-light leading-relaxed text-ink-muted">
                {t("advantageText")}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="card lift">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                {t("principlesLabel")}
              </p>
              <div className="divider my-5" />
              <div className="grid gap-5 sm:grid-cols-3">
                {principles.map((principle) => (
                  <div key={principle.title} className="space-y-2">
                    <p className="font-display text-xl font-bold text-amberRetro">
                      {principle.title}
                    </p>
                    <p className="text-base font-light leading-relaxed text-ink-muted">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
