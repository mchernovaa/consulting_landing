import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
};

export async function Services() {
  const t = await getTranslations("Services");
  const services = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="section smooth-anchor bg-canvas">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="section-heading">
              {t("title")}{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                {t("titleHighlight")}
              </span>
              .
            </h2>
            <p className="section-subtitle">{t("subtitle")}</p>
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
                    {service.bullets.map((item) => (
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
