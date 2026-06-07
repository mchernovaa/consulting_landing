"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

type CaseCategory = "franchises" | "coffee" | "beauty" | "services";

type CaseItem = {
  title: string;
  category: CaseCategory;
  situation: string;
  done: string[];
  result: string;
};

const filters: { id: "all" | CaseCategory; label: string }[] = [
  { id: "all", label: "Все проекты" },
  { id: "franchises", label: "Франшизы" },
  { id: "coffee", label: "Кофейни" },
  { id: "beauty", label: "Салоны красоты" },
  { id: "services", label: "Сервисный бизнес" }
];

const cases: CaseItem[] = [
  {
    title: "Сеть студий танцев и Pole Dance",
    category: "services",
    situation:
      "Бизнес активно развивался, но большая часть знаний и операционных процессов существовала только в голове собственника. Обучение новых сотрудников происходило устно, что приводило к различиям в качестве работы между филиалами.",
    done: [
      "проведены интервью с собственником",
      "описаны ключевые бизнес-процессы",
      "разработаны должностные инструкции",
      "созданы стандарты обслуживания клиентов",
      "структурирована система адаптации и обучения сотрудников",
      "подготовлена база знаний для дальнейшего масштабирования"
    ],
    result:
      "Собственник получил понятную систему передачи знаний, сократил зависимость бизнеса от личного участия и создал основу для дальнейшего роста сети."
  },
  {
    title: "Американская франшиза мувинговых услуг",
    category: "franchises",
    situation:
      "Необходимо было структурировать существующие процессы для передачи партнёрам и обеспечить единый стандарт работы.",
    done: [
      "проведён анализ текущих процессов",
      "описаны стандарты взаимодействия с клиентами",
      "разработаны инструкции для сотрудников",
      "сформированы регламенты работы команды",
      "создана система передачи знаний для новых партнёров"
    ],
    result:
      "Бизнес получил единые стандарты работы и инструменты для масштабирования без потери качества сервиса."
  },
  {
    title: "Американская франшиза ремонтных услуг",
    category: "franchises",
    situation:
      "Компания готовилась к расширению и нуждалась в систематизации внутренних процессов.",
    done: [
      "проведены интервью с собственниками",
      "описаны ключевые этапы оказания услуг",
      "разработаны регламенты и инструкции",
      "структурирована операционная информация",
      "подготовлены материалы для передачи новым участникам системы"
    ],
    result:
      "Собственники получили прозрачную и понятную систему работы, которую можно использовать при масштабировании бизнеса."
  },
  {
    title: "Салоны красоты и студии коррекционного массажа",
    category: "beauty",
    situation:
      "При росте бизнеса возникала необходимость стандартизировать работу сотрудников и обеспечить единый клиентский опыт.",
    done: [
      "разработаны чек-листы",
      "созданы должностные инструкции",
      "описаны процессы адаптации персонала",
      "сформированы стандарты оказания услуг",
      "подготовлены внутренние регламенты"
    ],
    result:
      "Появилась единая система работы команды, снизилась зависимость от конкретных сотрудников и повысилась предсказуемость качества сервиса."
  },
  {
    title: "Кофейни и сервисные проекты",
    category: "coffee",
    situation:
      "Собственникам требовалась структурированная база знаний для открытия новых точек и обучения персонала.",
    done: [
      "описаны процессы открытия",
      "подготовлены инструкции и стандарты",
      "систематизированы требования к персоналу",
      "сформированы внутренние документы компании"
    ],
    result:
      "Бизнес получил инструменты для масштабирования и передачи опыта новым сотрудникам и управляющим."
  }
];

export function Cases() {
  const [activeFilter, setActiveFilter] = useState<"all" | CaseCategory>("all");

  const filteredCases = useMemo(() => {
    if (activeFilter === "all") return cases;
    return cases.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="cases"
      className="section smooth-anchor border-b border-divider/60 bg-canvas-soft"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">05 · Cases</p>
            <h2 className="section-heading">
              Примеры{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                реальных проектов
              </span>
            </h2>
            <p className="section-subtitle">
              Анонимные кейсы из практики — суть задачи, что было сделано и
              какой результат получил собственник.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={60}>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={[
                    "rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors",
                    isActive
                      ? "border-amberRetro/60 bg-amberRetro/10 text-amberRetro"
                      : "border-divider text-ink-muted hover:border-amberRetro/30 hover:text-ink"
                  ].join(" ")}
                >
                  {filter.label}
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
                        Кейс {String(index + 1).padStart(2, "0")}
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
                        Исходная ситуация
                      </p>
                      <p className="text-base font-light leading-relaxed text-ink-muted">
                        {item.situation}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        Что было сделано
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
                        Результат
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
