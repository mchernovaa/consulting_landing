import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Должностные инструкции и регламенты",
    description:
      "Фиксирую ответственность, правила и стандарты результата — так, чтобы документ был понятен тем, кто им пользуется, а не лежал в папке.",
    items: [
      "Роли, зоны ответственности, требования к результату",
      "Регламенты ключевых операций и критичных решений",
      "Шаблоны, чек-листы, стандарты коммуникации"
    ]
  },
  {
    title: "Описание бизнес-процессов",
    description:
      "Снимаю реальную картину «как есть» через интервью, описываю «как работает на самом деле» и помогаю упростить логику там, где это нужно.",
    items: [
      "Карта процессов и точки неопределённости",
      "Целевая модель и правила передачи задач",
      "Стандарты качества и контроль исполнения"
    ]
  },
  {
    title: "KPI и система контроля",
    description:
      "Помогаю определить показатели и формат отчётности — чтобы руководители видели факты, а не полагались только на ощущения.",
    items: [
      "KPI по ролям и процессам",
      "Формат управленческих встреч и повестки",
      "Прозрачная отчётность и ответственность"
    ]
  },
  {
    title: "Базы знаний и передача экспертизы",
    description:
      "Собираю знания компании в единую структуру: инструкции, стандарты, шаблоны — чтобы новые люди могли разобраться без месяцев устного обучения.",
    items: [
      "Структура и навигация базы знаний",
      "Пути онбординга и чек-листы по ролям",
      "Инструменты: Notion / Confluence / Google Workspace"
    ]
  },
  {
    title: "Подготовка франчайзинговой системы",
    description:
      "Упаковываю накопленный опыт в стандарты и документы для тиражирования. Это не «франчайзинг-бук ради галочки» — а рабочая система для партнёров.",
    items: [
      "Операционные стандарты и требования к партнёрам",
      "Регламенты контроля качества",
      "Роли франчайзи / франчайзера и зоны ответственности"
    ]
  },
  {
    title: "Операционная структура",
    description:
      "Описываю, как устроен бизнес: функции, роли, взаимодействие команды — чтобы было понятно, кто за что отвечает и как передаются задачи.",
    items: [
      "Операционная структура и матрица ответственности",
      "Дорожная карта систематизации и приоритеты",
      "Консультации по использованию готовых документов"
    ]
  }
];

export function Services() {
  return (
    <section
      id="services"
      className="section smooth-anchor border-b border-divider/60 bg-canvas"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">02 · Services</p>
            <h2 className="section-heading">
              Фиксирую опыт бизнеса в{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                передаваемую систему
              </span>
              .
            </h2>
            <p className="section-subtitle">
              Процессы, регламенты, инструкции и база знаний — то, что можно
              передать команде и масштабировать.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={40 * index}>
              <article className="card lift flex flex-col justify-between">
                <div>
                  <h3 className="mb-3 font-display text-xl tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <div className="divider mb-5" />
                  <ul className="space-y-2.5 text-sm text-ink-muted">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[9px] h-[2px] w-6 rounded-full bg-amberRetro" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
