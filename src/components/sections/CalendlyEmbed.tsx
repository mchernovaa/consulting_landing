export function CalendlyEmbed() {
  return (
    <section
      id="calendly"
      className="section smooth-anchor border-t border-divider/40 bg-canvas-soft"
    >
      <div className="container-page max-w-3xl">
        <p className="text-base font-light leading-relaxed text-ink-muted sm:text-lg">
          Если вам удобнее сразу выбрать время для разговора, воспользуйтесь
          календарём ниже.
        </p>

        <div className="card mt-6 flex min-h-[320px] items-center justify-center border-dashed border-amberRetro/30 bg-canvas/60">
          <p className="max-w-md px-6 text-center text-sm font-light leading-relaxed text-ink-muted">
            {/* TODO: Insert Calendly Embed URL */}
            Здесь будет встроен виджет Calendly. Добавьте embed-код, когда
            календарь будет готов.
          </p>
        </div>
      </div>
    </section>
  );
}
