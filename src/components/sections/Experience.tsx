import { Reveal } from "@/components/ui/Reveal";

const niches = [
  "кофейни",
  "студии и салоны",
  "образовательные проекты",
  "услуги",
  "строительные компании",
  "американские франшизы"
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section smooth-anchor border-b border-divider/60 bg-canvas-soft"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">07 · Experience</p>
            <h2 className="section-heading">Опыт и проекты</h2>
            <p className="section-subtitle">
              30+ проектов в разных нишах — от студий до американских франшиз.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delayMs={40}>
            <article className="card lift">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                Проекты
              </p>
              <p className="mt-3 font-display text-3xl font-bold tracking-tight text-amberRetro">
                30+
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-ink-muted">
                Систематизация для команд и сетей — процессы, регламенты, базы
                знаний.
              </p>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="card lift">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                Роль
              </p>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight text-amberRetro">
                Старший методолог
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-ink-muted">
                Интервью с собственниками, описание процессов, разработка
                документов.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delayMs={120}>
          <div className="card lift mt-6">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {niches.map((niche) => (
                <li
                  key={niche}
                  className="flex items-start gap-3 text-sm font-light text-ink-muted"
                >
                  <span className="mt-[9px] h-[2px] w-6 shrink-0 rounded-full bg-amberRetro" />
                  <span className="leading-relaxed">{niche}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
