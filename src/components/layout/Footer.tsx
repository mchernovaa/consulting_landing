import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");

  const navLinks = [
    { href: "#services", key: "services" },
    { href: "#formats", key: "formats" },
    { href: "#process", key: "process" },
    { href: "#experience", key: "experience" },
    { href: "#cases", key: "cases" },
    { href: "#faq", key: "faq" },
    { href: "#contact", key: "contact" }
  ] as const;

  return (
    <footer className="bg-canvas-soft">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="font-display text-lg font-bold tracking-tight text-amberRetro">
              {t("brand")}
            </p>
            <p className="max-w-lg text-sm font-light leading-relaxed text-ink-muted">
              {t("description")}
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted/80">
              {t("tagline")}
            </p>
          </div>

          <div className="space-y-3 text-sm text-ink-muted">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
              {t("navigation")}
            </p>
            <div className="divider" />
            <nav className="flex flex-col gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  className="link-subtle inline-flex min-h-[44px] items-center sm:min-h-0"
                  href={link.href}
                >
                  {t(`navLinks.${link.key}`)}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 text-sm text-ink-muted">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
              {t("contact")}
            </p>
            <div className="divider" />
            <p className="text-sm leading-relaxed text-ink-muted">
              Telegram:{" "}
              <a
                className="link-subtle"
                href="https://t.me/mchernovaa"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-ink">@mchernovaa</span>
              </a>
              <br />
              Email:{" "}
              <a className="link-subtle" href="mailto:m.chernova734@gmail.com">
                <span className="text-ink">m.chernova734@gmail.com</span>
              </a>
              <br />
              {t("remoteNote")}
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted/80">
              © {new Date().getFullYear()} · {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
