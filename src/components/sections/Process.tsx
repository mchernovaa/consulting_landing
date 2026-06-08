import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

type StepItem = { title: string; description: string; result: string };

export async function Process() {
  const t = await getTranslations("Process");
  const steps = t.raw("items") as StepItem[];

  return (
    <section id="process" className="section smooth-anchor bg-canvas-soft">
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

        <div className="mt-12 border-l border-divider/80 pl-6 sm:pl-10">
          <ol className="space-y-10">
            {steps.map((step, index) => (
              <Reveal key={step.title} delayMs={50 * index}>
                <li className="relative">
                  <div className="absolute -left-[34px] flex h-8 w-8 items-center justify-center rounded-full border border-divider bg-card text-[11px] font-semibold tracking-[0.2em] text-amberRetro sm:-left-[42px]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="card lift">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-xl">
                        <h3 className="mb-2 font-display text-lg tracking-tight text-ink">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-muted">
                          {step.description}
                        </p>
                      </div>
                      <div className="max-w-xs border-l border-divider/70 pl-4 text-xs text-ink-muted">
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                          {t("stageResult")}
                        </p>
                        <p className="leading-relaxed">{step.result}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
