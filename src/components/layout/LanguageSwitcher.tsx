"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const locales: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" }
];

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    const hash =
      typeof window !== "undefined" ? window.location.hash : "";

    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", nextLocale);
      document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    }

    router.replace(pathname, { locale: nextLocale });

    if (hash && typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        window.location.hash = hash;
      });
    }
  };

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 font-sans text-[11px] font-semibold uppercase tracking-[0.06em] sm:gap-1 sm:text-xs sm:tracking-[0.08em]"
      role="group"
      aria-label="Language"
    >
      {locales.map((item, index) => (
        <span key={item.code} className="inline-flex items-center">
          {index > 0 ? (
            <span className="px-1 text-ink/35" aria-hidden="true">
              |
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => switchLocale(item.code)}
            className={[
              "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md px-1.5 transition-colors",
              locale === item.code
                ? "text-amberRetro"
                : "text-ink hover:text-amberRetro"
            ].join(" ")}
            aria-current={locale === item.code ? "true" : undefined}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}
