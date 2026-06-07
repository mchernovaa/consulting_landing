import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="section smooth-anchor border-b border-divider/60 bg-canvas"
    >
      <div className="container-page max-w-3xl">
        <Reveal>
          <p className="section-kicker">06 · About</p>
          <h2 className="section-heading">
            Вывожу бизнес{" "}
            <span className="underline decoration-terracotta decoration-[0.18em] underline-offset-[0.35em]">
              из головы в систему
            </span>
          </h2>
          <p className="section-subtitle">
            Методолог и консультант по систематизации. Фиксирую знания,
            процессы и стандарты в документы, которые можно передать команде,
            партнёрам или франчайзи.
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          <Reveal delayMs={80}>
            <div className="card lift ring-1 ring-amberRetro/15">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                Ключевое преимущество
              </p>
              <div className="divider my-5" />
              <p className="font-display text-2xl font-bold tracking-tight text-amberRetro sm:text-3xl">
                Извлечение знаний из головы собственника
              </p>
              <p className="mt-4 text-base font-light leading-relaxed text-ink-muted">
                Работа начинается с интервью. Не придумываю процессы — выявляю
                те, что уже работают, и перевожу их в регламенты, инструкции и
                базу знаний.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="card lift">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                Принципы
              </p>
              <div className="divider my-5" />
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-2">
                  <p className="font-display text-xl font-bold text-amberRetro">
                    Выявляю, не придумываю
                  </p>
                  <p className="text-base font-light leading-relaxed text-ink-muted">
                    Описываю реальную работу, а не чужую модель.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-display text-xl font-bold text-amberRetro">
                    Документы — инструмент
                  </p>
                  <p className="text-base font-light leading-relaxed text-ink-muted">
                    Коротко, ясно, для ежедневного использования.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-display text-xl font-bold text-amberRetro">
                    Честные границы
                  </p>
                  <p className="text-base font-light leading-relaxed text-ink-muted">
                    Методология и документы; внедрение — зона собственника.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
