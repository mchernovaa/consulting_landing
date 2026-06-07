"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  { id: "problems", label: "Проблемы" },
  { id: "services", label: "Услуги" },
  { id: "process", label: "Процесс" },
  { id: "results", label: "Результаты" },
  { id: "about", label: "Обо мне" },
  { id: "experience", label: "Опыт" },
  { id: "contact", label: "Контакт" }
];

export function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-40 border-b border-divider/50 bg-canvas/75 backdrop-blur-md transition-shadow",
        scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,0.2)]" : "shadow-none"
      ].join(" ")}
    >
      <div className="container-page flex h-14 items-center justify-between gap-3 lg:h-16">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-divider bg-canvas-soft font-display text-sm font-bold text-amberRetro">
            MC
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-bold tracking-tight text-amberRetro lg:text-lg">
              Maria Chernova
            </span>
            <span className="hidden truncate text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted xl:block">
              Методолог
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted lg:flex xl:gap-6">
          {sections.map((section) =>
            isHome ? (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="whitespace-nowrap transition-colors hover:text-amberRetro"
              >
                {section.label}
              </a>
            ) : (
              <Link
                key={section.id}
                href={`/#${section.id}`}
                className="whitespace-nowrap transition-colors hover:text-amberRetro"
              >
                {section.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {isHome ? (
            <a
              href="#contact"
              data-cta="header_primary"
              className="hidden rounded-full bg-terracotta px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-colors hover:opacity-90 lg:inline-flex"
            >
              Обсудить задачу
            </a>
          ) : (
            <Link
              href="/#contact"
              data-cta="header_primary"
              className="hidden rounded-full bg-terracotta px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-colors hover:opacity-90 lg:inline-flex"
            >
              Обсудить задачу
            </Link>
          )}

          <button
            type="button"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-full",
              "border border-divider bg-canvas-soft text-ink-muted",
              "transition-colors hover:text-amberRetro",
              "lg:hidden"
            ].join(" ")}
          >
            <span className="sr-only">Меню</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-current"
            >
              <path
                d="M3 5.25H15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M3 9H15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M3 12.75H15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={[
          "fixed inset-0 z-50 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
          "transition-opacity duration-200 ease-out"
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-canvas/80"
          aria-label="Закрыть меню"
        />
        <div
          className={[
            "absolute left-0 right-0 top-[56px]",
            "mx-4 rounded-2xl border border-divider bg-canvas-soft backdrop-blur-md",
            "shadow-editorial",
            "transition-transform duration-250 ease-out",
            menuOpen ? "translate-y-0" : "-translate-y-4"
          ].join(" ")}
        >
          <div className="p-4">
            <div className="mt-2 grid gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={isHome ? `#${section.id}` : `/#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "rounded-xl border border-divider bg-canvas px-4 py-3",
                    "text-sm font-medium text-ink-muted",
                    "transition-colors hover:text-amberRetro"
                  ].join(" ")}
                >
                  {section.label}
                </a>
              ))}
              <a
                href={isHome ? "#contact" : "/#contact"}
                data-cta="mobile_menu_primary"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-terracotta px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:opacity-90"
              >
                Обсудить задачу
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
