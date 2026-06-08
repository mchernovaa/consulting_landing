"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LocalePreference() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const preferred = localStorage.getItem("preferred-locale") as Locale | null;

    if (
      preferred &&
      preferred !== locale &&
      routing.locales.includes(preferred)
    ) {
      const hash = window.location.hash;
      router.replace(pathname, { locale: preferred });
      if (hash) {
        window.requestAnimationFrame(() => {
          window.location.hash = hash;
        });
      }
    }
  }, [locale, pathname, router]);

  return null;
}
