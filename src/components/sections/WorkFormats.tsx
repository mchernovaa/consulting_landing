import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const formats = [
  {
    title: "Систематизация отдельных процессов",
    description:
      "Подходит, если необходимо описать конкретное направление работы компании.",
    items: [
      "регламенты",
      "инструкции",
      "должностные обязанности",
      "чек-листы",
      "стандарты работы",
      "адаптация сотрудников"
    ],
    result: "Команда получает понятные инструменты для ежедневной работы."
  },
  {
    title: "Комплексная систематизация бизнеса",
    description:
      "Подходит компаниям, которые хотят снизить зависимость от личного участия собственника.",
    items: [
      "описание бизнес-процессов",
      "операционная структура",
      "база знаний",
      "регламенты и инструкции",
      "стандарты взаимодействия",
      "система передачи знаний"
    ],
    result: "Бизнес становится более управляемым и предсказуемым."
  },
  {
    title: "Подготовка бизнеса к масштабированию",
    description:
      "Для компаний, планирующих рост, открытие новых точек или развитие франчайзинга.",
    items: [
      "упаковка опыта собственника",
      "стандартизация процессов",
      "описание операционной модели",
      "создание франчайзинговой документации",
      "подготовка системы передачи знаний"
    ],
    result:
      "Появляется фундамент для масштабирования без потери качества."
  }
];

export function WorkFormats() {
  return (
    <section
      id="formats"
      className="section smooth-anchor border-b border-divider/60 bg-canvas-soft"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">Форматы · Work formats</p>
            <h2 className="section-heading">
              Форматы{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                сотрудничества
              </span>
            </h2>
            <p className="section-subtitle">
              В зависимости от задач бизнеса я могу работать точечно над
              отдельными процессами или комплексно выстраивать систему знаний
              и стандартов компании.
            </p>
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
                    Что может входить
                  </p>
                  <ul className="mb-5 space-y-2 text-sm text-ink-muted">
                    {format.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[9px] h-[2px] w-6 shrink-0 rounded-full bg-amberRetro" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-divider/70 pt-5">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                    Результат
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
              Стоимость и формат работы определяются индивидуально после
              знакомства с задачами бизнеса.
            </p>
            <Link href="#contact" data-cta="formats_primary" className="button-primary">
              Обсудить задачу
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
