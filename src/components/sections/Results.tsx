import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

type MetricItem = { label: string; details: string };

export async function Results() {
  const t = await getTranslations("Results");
  const metrics = t.raw("items") as MetricItem[];

  return (
    <section id="results" className="section smooth-anchor bg-canvas">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="section-heading">{t("title")}</h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delayMs={40 * index}>
              <article className="card lift">
                <p className="font-display text-xl font-bold tracking-tight text-amberRetro">
                  {metric.label}
                </p>
                <div className="divider my-5" />
                <p className="text-sm font-light leading-relaxed text-ink-muted">
                  {metric.details}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
