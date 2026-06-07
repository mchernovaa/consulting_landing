export function Footer() {
  return (
    <footer className="border-t border-divider/60 bg-canvas-soft">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="font-display text-lg font-bold tracking-tight text-amberRetro">
              Мария Чернова · методолог
            </p>
            <p className="max-w-lg text-sm font-light leading-relaxed text-ink-muted">
              Систематизация бизнеса: описание процессов, регламенты,
              инструкции, база знаний, подготовка к масштабированию. Работаю в
              Аргентине и дистанционно по всему миру.
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted/80">
              От опыта в голове — к системе, которую можно передать
            </p>
          </div>

          <div className="space-y-3 text-sm text-ink-muted">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
              Навигация
            </p>
            <div className="divider" />
            <nav className="flex flex-col gap-2">
              <a className="link-subtle" href="#services">
                Услуги
              </a>
              <a className="link-subtle" href="#formats">
                Форматы
              </a>
              <a className="link-subtle" href="#process">
                Как работаю
              </a>
              <a className="link-subtle" href="#experience">
                Опыт
              </a>
              <a className="link-subtle" href="#cases">
                Кейсы
              </a>
              <a className="link-subtle" href="#faq">
                FAQ
              </a>
              <a className="link-subtle" href="#contact">
                Контакты
              </a>
            </nav>
          </div>

          <div className="space-y-3 text-sm text-ink-muted">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
              Связаться
            </p>
            <div className="divider" />
            <p className="text-sm leading-relaxed text-ink-muted">
              Telegram:{" "}
              <a
                className="link-subtle"
                href="https://t.me/mchernovaa"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-ink">@mchernovaa</span>
              </a>
              <br />
              Email:{" "}
              <a className="link-subtle" href="mailto:m.chernova734@gmail.com">
                <span className="text-ink">m.chernova734@gmail.com</span>
              </a>
              <br />
              Буэнос‑Айрес, Аргентина: офлайн встречи по запросу
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted/80">
              © {new Date().getFullYear()} · Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
