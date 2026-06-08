import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

type ProblemItem = { title: string; description: string };

export async function BusinessProblems() {
  const t = await getTranslations("BusinessProblems");
  const problems = t.raw("items") as ProblemItem[];

  return (
    <section id="problems" className="section smooth-anchor bg-canvas-soft">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="section-heading">
              {t("title")}{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                {t("titleHighlight")}
              </span>
              .
            </h2>
            <p className="section-subtitle">{t("subtitle")}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delayMs={50 * index}>
              <article className="card lift relative overflow-hidden">
                <div className="absolute right-6 top-6 text-5xl font-display text-ink-muted/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="relative mb-3 font-display text-xl tracking-tight text-ink">
                  {problem.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-ink-muted">
                  {problem.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
