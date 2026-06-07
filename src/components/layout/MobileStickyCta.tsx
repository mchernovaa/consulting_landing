"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileStickyCta() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      ].join(" ")}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-2xl border border-divider bg-canvas-soft/95 p-2 shadow-editorial backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Link
              href={isHome ? "#contact" : "/#contact"}
              data-cta="mobile_sticky_primary"
              className="flex-1 rounded-xl bg-terracotta px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink shadow-soft transition-colors hover:opacity-90"
            >
              Обсудить задачу
            </Link>
            <Link
              href={isHome ? "#services" : "/#services"}
              data-cta="mobile_sticky_secondary"
              className="rounded-xl border border-divider bg-canvas px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-amberRetro"
            >
              Услуги
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
