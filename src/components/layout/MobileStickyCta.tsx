"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

export function MobileStickyCta() {
  const tc = useTranslations("Common");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "transition-all duration-300 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none"
      ].join(" ")}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-6xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="rounded-2xl border border-divider bg-canvas-soft/95 p-2 shadow-editorial backdrop-blur-md">
          <div className="flex items-stretch gap-2">
            <Link
              href="/#contact"
              data-cta="mobile_sticky_primary"
              className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-xl bg-terracotta px-3 py-2.5 text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-ink shadow-soft transition-colors hover:opacity-90 sm:px-4 sm:text-[11px] sm:tracking-[0.16em]"
            >
              {tc("discussTask")}
            </Link>
            <Link
              href="/#services"
              data-cta="mobile_sticky_secondary"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-divider bg-canvas px-3 py-2.5 text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-ink-muted transition-colors hover:text-amberRetro sm:min-w-0 sm:px-4 sm:text-[11px] sm:tracking-[0.16em]"
            >
              {tc("services")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
