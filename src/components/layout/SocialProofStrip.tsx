export function SocialProofStrip() {
  const items = [
    "30+ проектов",
    "Старший методолог отдела методологии",
    "Буэнос‑Айрес + удалённо по всему миру"
  ];

  return (
    <div className="border-y border-divider/30 bg-canvas-soft/40">
      <div className="container-page py-3.5 sm:py-4">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-sm font-light tracking-[0.02em] text-ink-muted sm:text-[15px]">
          {items.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-3">
              {index > 0 ? (
                <span className="hidden text-amberRetro/50 sm:inline" aria-hidden="true">
                  ·
                </span>
              ) : null}
              <span>{item}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
