import { Reveal } from "@/components/ui/Reveal";

const problems = [
  {
    title: "Бизнес существует в голове собственника",
    description:
      "Решения, стандарты и логика работы не зафиксированы. Команда обращается к вам по каждому вопросу — потому что «как принято» нигде не описано."
  },
  {
    title: "Процессы не описаны, знания передаются устно",
    description:
      "Новые сотрудники учатся долго. Качество зависит от конкретного человека, а не от понятных правил. При росте это становится узким местом."
  },
  {
    title: "Нет регламентов, которыми реально пользуются",
    description:
      "Документы либо отсутствуют, либо лежат «для галочки». В работе каждый делает по-своему — результат сложно предсказать."
  },
  {
    title: "Сложно передать бизнес команде или партнёрам",
    description:
      "Делегирование, масштабирование и подготовка к франчайзингу упираются в то, что опыт не оформлен в понятную структуру."
  },
  {
    title: "Риск потери знаний",
    description:
      "Уход ключевого человека обнуляет участок работы. Нет единого места, где собраны стандарты, инструкции и логика принятия решений."
  },
  {
    title: "Непонятно, с чего начать систематизацию",
    description:
      "Запрос «навести порядок» понятен, но неясно, какие процессы описывать первыми и как не утонуть в документах."
  }
];

export function BusinessProblems() {
  return (
    <section
      id="problems"
      className="section smooth-anchor border-b border-divider/60 bg-canvas-soft"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">01 · Pain points</p>
            <h2 className="section-heading">
              Когда бизнес работает, но{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                знания остаются в голове
              </span>
              .
            </h2>
            <p className="section-subtitle">
              Нужно зафиксировать то, что вы уже знаете — и передать это
              команде.
            </p>
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
