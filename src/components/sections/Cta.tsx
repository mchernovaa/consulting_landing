import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function Cta() {
  return (
    <section
      id="cta"
      className="section smooth-anchor border-b border-divider/60 bg-canvas-soft"
    >
      <div className="container-page">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-5">
              <p className="section-kicker mb-0">08 · CTA</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-amberRetro sm:text-4xl">
                Обсудим вашу задачу
              </h2>
              <p className="max-w-lg text-base font-light leading-relaxed text-ink-muted sm:text-lg">
                Разберём, с чего начать систематизацию — спокойно, без
                давления. Можно написать в форму ниже или выбрать время в
                календаре.
              </p>
              <Link
                href="#contact"
                data-cta="cta_primary"
                className="button-primary inline-flex"
              >
                Обсудить задачу
              </Link>
            </div>

            <EditorialImage
              src="/images/maria-chernova-cta.jpg"
              alt="Мария Чернова — личный контакт с консультантом"
              aspect="3/4"
              className="mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
