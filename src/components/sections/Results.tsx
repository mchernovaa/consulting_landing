import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  {
    label: "Знания зафиксированы",
    details:
      "Опыт и стандарты — в регламентах, инструкциях и базе знаний, а не в голове собственника."
  },
  {
    label: "Процессы понятны",
    details:
      "Команда знает, что делать и какой результат считается правильным."
  },
  {
    label: "Систему можно передать",
    details:
      "Новые люди, партнёры и франчайзи получают документы — не устные инструкции."
  }
];

export function Results() {
  return (
    <section
      id="results"
      className="section smooth-anchor border-b border-divider/60 bg-canvas"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">04 · Results</p>
            <h2 className="section-heading">Что получает собственник</h2>
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
