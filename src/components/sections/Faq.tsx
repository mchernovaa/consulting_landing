"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

type FaqItem = { question: string; answer: string };

export function Faq() {
  const t = useTranslations("Faq");
  const faqs = t.raw("items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section smooth-anchor bg-canvas">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="section-heading">{t("title")}</h2>
          </div>
        </Reveal>

        <div className="mt-10 max-w-3xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delayMs={30 * index}>
                <div className="card">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-[44px] w-full items-start justify-between gap-3 py-1 text-left sm:gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-bold leading-snug tracking-tight text-amberRetro sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={[
                        "inline-flex h-11 w-11 shrink-0 items-center justify-center text-xl leading-none text-ink-muted transition-transform duration-200",
                        isOpen ? "rotate-45" : "rotate-0"
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={[
                      "grid transition-all duration-200 ease-out",
                      isOpen
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="divider mb-4" />
                      <p className="text-base font-light leading-relaxed text-ink-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
