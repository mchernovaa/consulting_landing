"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "problems", label: "Проблемы бизнеса" },
  { id: "services", label: "Услуги" },
  { id: "process", label: "Как проходит работа" },
  { id: "results", label: "Результаты" },
  { id: "cases", label: "Кейсы" },
  { id: "about", label: "Обо мне" },
  { id: "experience", label: "Опыт" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Контакты" }
];

export function StickySectionNav() {
  const [activeId, setActiveId] = useState("problems");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Навигация по разделам"
      className="pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block 2xl:left-8"
    >
      <ul className="pointer-events-auto space-y-1 border-l border-amberRetro/25 pl-4">
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={[
                  "block max-w-[11rem] py-1 text-[11px] font-medium leading-snug transition-colors",
                  isActive
                    ? "text-amberRetro"
                    : "text-ink-muted/70 hover:text-ink-muted"
                ].join(" ")}
                aria-current={isActive ? "true" : undefined}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
