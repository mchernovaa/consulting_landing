"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    question: "Вы занимаетесь внедрением?",
    answer:
      "Основной фокус — система, процессы и документы. Консультирую по использованию материалов. Полноценное внедрение — отдельно."
  },
  {
    question: "Сколько длится работа?",
    answer:
      "От нескольких дней до нескольких недель — зависит от объёма и масштаба."
  },
  {
    question: "С какими нишами вы работаете?",
    answer:
      "Кофейни, салоны, образование, услуги, американские франшизы и другие service-бизнесы."
  },
  {
    question: "Что я получу в результате?",
    answer:
      "Регламенты, инструкции, стандарты и описанные процессы — систему, которую можно передать команде."
  },
  {
    question: "Работаете ли вы только в Аргентине?",
    answer: "Нет. Buenos Aires — офлайн, worldwide — удалённо."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section smooth-anchor border-b border-divider/60 bg-canvas"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">09 · FAQ</p>
            <h2 className="section-heading">Часто задаваемые вопросы</h2>
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
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl font-bold tracking-tight text-amberRetro">
                      {item.question}
                    </span>
                    <span
                      className={[
                        "mt-1 shrink-0 text-xl leading-none text-ink-muted transition-transform duration-200",
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
