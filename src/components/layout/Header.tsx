"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

const sectionIds = [
  "problems",
  "services",
  "process",
  "results",
  "about",
  "experience",
  "contact"
] as const;

export function Header() {
  const t = useTranslations("Header");
  const tc = useTranslations("Common");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass =
    "flex min-h-[44px] items-center font-sans text-sm font-bold uppercase tracking-[0.05em] text-ink transition-colors hover:text-amberRetro sm:tracking-[0.06em]";

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
        "sticky top-0 z-40 bg-canvas/75 backdrop-blur-md transition-shadow",
        scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,0.2)]" : "shadow-none"
      ].join(" ")}
    >
      <div className="container-page flex min-h-14 items-center justify-between gap-1.5 py-2 sm:gap-3 lg:min-h-16 lg:py-0">
        <Link
          href="/"
          className="flex min-w-0 max-w-[calc(100%-8.5rem)] items-center gap-2 sm:max-w-[calc(100%-9.5rem)] sm:gap-2.5 sm:shrink-0 lg:max-w-none lg:min-w-[14rem] xl:min-w-[15.5rem]"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-divider bg-canvas-soft font-display text-sm font-bold text-amberRetro sm:h-8 sm:w-8">
            MC
          </div>
          <div className="min-w-0 leading-[1.15]">
            <span className="block truncate font-display text-[15px] font-bold tracking-tight text-amberRetro sm:text-base lg:text-lg">
              Maria Chernova
            </span>
            <span className="mt-0.5 block font-display text-[8px] font-bold uppercase leading-[1.2] tracking-[0.02em] text-amberRetro sm:text-[10px] sm:tracking-[0.03em] lg:text-xs">
              {t("tagline")}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-4">
          {sectionIds.map((id) => (
            <a key={id} href={`#${id}`} className={`${navLinkClass} whitespace-nowrap`}>
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <LanguageSwitcher />

          <Link
            href="/#contact"
            data-cta="header_primary"
            className="hidden min-h-[44px] rounded-full bg-terracotta px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-colors hover:opacity-90 lg:inline-flex lg:items-center"
          >
            {tc("discussTask")}
          </Link>

          <button
            type="button"
            aria-label={t("openMenu")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={[
              "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              "border border-divider bg-canvas-soft text-ink-muted",
              "transition-colors hover:text-amberRetro",
              "lg:hidden"
            ].join(" ")}
          >
            <span className="sr-only">{t("menu")}</span>
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
        aria-label={t("menu")}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-canvas/80"
          aria-label={t("closeMenu")}
        />
        <div
          className={[
            "absolute left-0 right-0 top-14",
            "mx-3 max-h-[calc(100dvh-4rem)] overflow-y-auto rounded-2xl border border-divider bg-canvas-soft backdrop-blur-md sm:mx-4",
            "shadow-editorial",
            "transition-transform duration-250 ease-out",
            menuOpen ? "translate-y-0" : "-translate-y-4"
          ].join(" ")}
        >
          <div className="p-3 sm:p-4">
            <div className="grid gap-1.5">
              {sectionIds.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "rounded-xl border border-divider bg-canvas px-4",
                    navLinkClass
                  ].join(" ")}
                >
                  {t(`nav.${id}`)}
                </a>
              ))}
              <Link
                href="/#contact"
                data-cta="mobile_menu_primary"
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-terracotta px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:opacity-90 sm:text-xs sm:tracking-[0.18em]"
              >
                {tc("discussTask")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
