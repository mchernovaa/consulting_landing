import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

const PORTRAIT = {
  src: "/images/maria-chernova-hero.jpg",
  alt: "Мария Чернова — методолог и консультант по систематизации бизнеса"
};

function PortraitPhoto({
  className = "",
  priority = false
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <EditorialImage
      src={PORTRAIT.src}
      alt={PORTRAIT.alt}
      aspect="4/5"
      priority={priority}
      className={className}
    />
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="smooth-anchor border-b border-divider/60 bg-canvas py-12 sm:py-16 lg:py-16"
    >
      <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:items-center lg:gap-12">
        <div className="space-y-6 sm:space-y-7">
          <Reveal>
            <div className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-amberRetro" />
              Методолог · Argentina + worldwide
            </div>
          </Reveal>

          <Reveal delayMs={60}>
            <div className="space-y-4 sm:space-y-5">
              <h1 className="font-display text-[2.125rem] font-bold leading-[1.1] tracking-tight text-amberRetro text-balance sm:text-[2.5rem] lg:text-[2.875rem]">
                Превращаю знания и процессы собственника в систему, которую
                можно передать команде
              </h1>
              <p className="max-w-xl text-base font-light leading-relaxed text-ink-muted sm:text-lg">
                Мария Чернова — методолог и консультант по систематизации
                бизнеса. Описываю процессы, создаю регламенты и базу знаний.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={90} className="lg:hidden">
            <PortraitPhoto
              priority
              className="mx-auto w-full max-w-[260px] sm:max-w-[280px]"
            />
          </Reveal>

          <Reveal delayMs={110}>
            <div className="flex flex-col gap-5">
              <div className="grid gap-4 text-sm text-ink-muted sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                    Для кого
                  </p>
                  <p className="text-sm font-light leading-relaxed">
                    Собственники, которые делегируют и масштабируются
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                    Результат
                  </p>
                  <p className="text-sm font-light leading-relaxed">
                    Бизнес перестаёт жить только в голове собственника
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted/80">
                    Формат
                  </p>
                  <p className="text-sm font-light leading-relaxed">
                    Buenos Aires · Worldwide remote
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="#contact" data-cta="hero_primary" className="button-primary">
                  Обсудить задачу
                </Link>
                <Link
                  href="#services"
                  data-cta="hero_secondary"
                  className="button-secondary"
                >
                  Услуги
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={140} className="hidden lg:block">
          <PortraitPhoto priority className="ml-auto w-full max-w-none" />
        </Reveal>
      </div>
    </section>
  );
}
