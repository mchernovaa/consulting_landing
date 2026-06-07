import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Знакомство и постановка задачи",
    description:
      "Обсуждаем контекст, цели и ограничения. Фиксирую, что сейчас «живёт в голове», и определяю, какие артефакты нужны в результате.",
    result: "Понятный запрос, границы проекта и критерии результата."
  },
  {
    title: "Интервью и описание процессов",
    description:
      "Провожу интервью с собственником и ключевыми людьми, разбираю текущие документы и практику. Задача — выявить существующие процессы, а не придумать новые.",
    result: "Карта процессов, зоны неопределённости и приоритеты описания."
  },
  {
    title: "Проектирование структуры",
    description:
      "Описываю, как бизнес устроен и как должен работать: роли, зоны ответственности, логика передачи задач, точки контроля.",
    result: "Целевая структура и план систематизации."
  },
  {
    title: "Разработка регламентов, инструкций и базы знаний",
    description:
      "Создаю документы, которыми можно пользоваться: регламенты, инструкции, чек-листы, структура базы знаний. Не для архива — для ежедневной работы.",
    result: "Готовые артефакты для передачи команде."
  },
  {
    title: "Консультации по использованию системы",
    description:
      "При необходимости консультирую по внедрению: помогаю разобраться в разработанных документах, провожу консультации для собственника и команды по их использованию.",
    result: "Понимание системы и ясность, как с ней работать дальше."
  }
];

export function Process() {
  return (
    <section
      id="process"
      className="section smooth-anchor border-b border-divider/60 bg-canvas-soft"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">03 · How I work</p>
            <h2 className="section-heading">
              Как проходит{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                работа
              </span>
              .
            </h2>
            <p className="section-subtitle">
              Спокойный, структурный процесс. На каждом этапе — понятные
              артефакты. Я занимаюсь методологией и документами; полноценное
              внедрение в команду — зона ответственности собственника, при
              необходимости консультирую.
            </p>
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
                          Результат этапа
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
