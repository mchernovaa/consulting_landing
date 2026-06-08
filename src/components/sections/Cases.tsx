"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

type CaseCategory = "franchises" | "coffee" | "beauty" | "services";

type CaseItem = {
  title: string;
  situation: string;
  done: string[];
  result: string;
};

const caseCategories: CaseCategory[] = [
  "services",
  "franchises",
  "franchises",
  "beauty",
  "coffee"
];

const filterIds = ["all", "franchises", "coffee", "beauty", "services"] as const;

export function Cases() {
  const t = useTranslations("Cases");
  const tc = useTranslations("Common");
  const cases = t.raw("items") as CaseItem[];
  const [activeFilter, setActiveFilter] = useState<
    "all" | CaseCategory
  >("all");

  const filteredCases = useMemo(() => {
    if (activeFilter === "all") return cases;
    return cases.filter(
      (_, index) => caseCategories[index] === activeFilter
    );
  }, [activeFilter, cases]);

  return (
    <section id="cases" className="section smooth-anchor bg-canvas-soft">
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

        <Reveal delayMs={60}>
          <div className="mt-8 flex flex-wrap gap-2">
            {filterIds.map((filterId) => {
              const isActive = activeFilter === filterId;

              return (
                <button
                  key={filterId}
                  type="button"
                  onClick={() => setActiveFilter(filterId)}
                  className={[
                    "inline-flex min-h-[44px] items-center rounded-full border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors",
                    isActive
                      ? "border-amberRetro/60 bg-amberRetro/10 text-amberRetro"
                      : "border-divider text-ink-muted hover:border-amberRetro/30 hover:text-ink"
                  ].join(" ")}
                >
                  {t(`filters.${filterId}`)}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {filteredCases.map((item, index) => (
            <Reveal key={item.title} delayMs={40 * index}>
              <article className="card lift">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        {tc("caseNumber")} {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-amberRetro sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        {t("labels.situation")}
                      </p>
                      <p className="text-base font-light leading-relaxed text-ink-muted">
                        {item.situation}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        {t("labels.done")}
                      </p>
                      <ul className="space-y-2 text-base font-light text-ink-muted">
                        {item.done.map((workItem) => (
                          <li key={workItem} className="flex gap-3">
                            <span className="mt-[9px] h-[2px] w-5 shrink-0 rounded-full bg-amberRetro" />
                            <span className="leading-relaxed">{workItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 lg:border-l lg:border-divider/70 lg:pl-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        {t("labels.result")}
                      </p>
                      <p className="text-base font-light leading-relaxed text-ink-muted">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
