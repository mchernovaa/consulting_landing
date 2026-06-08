"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import type { LeadPayload } from "@/lib/analytics/track";
import {
  getLeadUtmFromLocation,
  trackLeadConversion
} from "@/lib/analytics/track";
import {
  buildMailtoLink,
  buildTelegramDeepLink,
  type LeadLinkLabels
} from "@/lib/leads/leadLinks";

type FormState = {
  name: string;
  telegramWhatsApp: string;
  businessNiche: string;
  whatNeedsSystematization: string;
};

export function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const tl = useTranslations("LeadLinks");
  const tc = useTranslations("Common");

  const leadLabels: LeadLinkLabels = {
    header: tl("header"),
    subject: tl("subject"),
    fields: {
      name: tl("fields.name"),
      telegramWhatsApp: tl("fields.telegramWhatsApp"),
      businessNiche: tl("fields.businessNiche"),
      whatNeedsSystematization: tl("fields.whatNeedsSystematization"),
      utm: tl("fields.utm")
    }
  };

  const [state, setState] = useState<FormState>({
    name: "",
    telegramWhatsApp: "",
    businessNiche: "",
    whatNeedsSystematization: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const [submitted, setSubmitted] = useState<LeadPayload | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const emptyFormState: FormState = {
    name: "",
    telegramWhatsApp: "",
    businessNiche: "",
    whatNeedsSystematization: ""
  };

  const buildContactMessage = (form: FormState) => {
    return [
      `Telegram / WhatsApp: ${form.telegramWhatsApp.trim()}`,
      `Ниша: ${form.businessNiche.trim()}`,
      "",
      form.whatNeedsSystematization.trim()
    ].join("\n");
  };

  const canSubmit = useMemo(() => {
    return (
      state.name.trim().length >= 2 &&
      state.telegramWhatsApp.trim().length >= 5 &&
      state.businessNiche.trim().length >= 2 &&
      state.whatNeedsSystematization.trim().length >= 15
    );
  }, [state]);

  return (
    <section id="contact" className="section smooth-anchor bg-canvas">
      <div className="container-page">
        <Reveal>
          <div className="max-w-3xl">
            <p className="section-kicker">{t("kicker")}</p>
            <h2 className="section-heading">
              {t("title")}{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                {t("titleHighlight")}
              </span>
            </h2>
            <p className="section-subtitle">{t("subtitle")}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
          <Reveal delayMs={80}>
            <div className="card">
              {status === "done" && submitted ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                      {t("success.kicker")}
                    </p>
                    <p className="font-display text-2xl tracking-tight text-ink text-balance">
                      {t("success.title")}
                    </p>
                  </div>

                  <div className="divider" />

                  <p className="text-sm leading-relaxed text-ink-muted">
                    {t("success.text")}
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={buildMailtoLink(submitted, leadLabels)}
                      className="button-primary lift w-full sm:w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("success.openEmail")}
                    </a>
                    <a
                      href={buildTelegramDeepLink(submitted, leadLabels)}
                      className="button-secondary lift w-full sm:w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("success.writeTelegram")}
                    </a>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted/80">
                    {tc("confidential")}
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!canSubmit || status === "submitting") return;

                    const utm = getLeadUtmFromLocation();
                    const payload: LeadPayload = {
                      name: state.name.trim(),
                      telegramWhatsApp: state.telegramWhatsApp.trim(),
                      businessNiche: state.businessNiche.trim(),
                      whatNeedsSystematization:
                        state.whatNeedsSystematization.trim(),
                      ...utm
                    };

                    setStatus("submitting");
                    setErrorMessage(null);

                    try {
                      const response = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name: payload.name,
                          telegram: payload.telegramWhatsApp,
                          message: buildContactMessage(state),
                          locale,
                          pageUrl: window.location.href,
                          utmSource: utm.utmSource,
                          utmMedium: utm.utmMedium,
                          utmCampaign: utm.utmCampaign,
                          utmTerm: utm.utmTerm,
                          utmContent: utm.utmContent
                        })
                      });

                      if (!response.ok) {
                        throw new Error("contact_submit_failed");
                      }

                      trackLeadConversion(payload);
                      setSubmitted(payload);
                      setState(emptyFormState);
                      setStatus("done");
                    } catch {
                      setStatus("error");
                      setErrorMessage(t("error.text"));
                    }
                  }}
                >
                  {status === "error" && errorMessage ? (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                    >
                      <p className="font-medium">{t("error.title")}</p>
                      <p className="mt-1 leading-relaxed">{errorMessage}</p>
                    </div>
                  ) : null}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        {t("labels.name")}
                      </span>
                      <input
                        value={state.name}
                        onChange={(e) =>
                          setState((s) => ({ ...s, name: e.target.value }))
                        }
                        placeholder={t("placeholders.name")}
                        className="w-full rounded-xl border border-divider bg-canvas px-4 py-3 text-sm font-light text-ink outline-none transition-colors focus:border-amberRetro focus:ring-2 focus:ring-[rgba(198,166,75,0.2)]"
                        autoComplete="name"
                        required
                        minLength={2}
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        {t("labels.telegramWhatsApp")}
                      </span>
                      <input
                        value={state.telegramWhatsApp}
                        onChange={(e) =>
                          setState((s) => ({
                            ...s,
                            telegramWhatsApp: e.target.value
                          }))
                        }
                        placeholder={t("placeholders.telegramWhatsApp")}
                        className="w-full rounded-xl border border-divider bg-canvas px-4 py-3 text-sm font-light text-ink outline-none transition-colors focus:border-amberRetro focus:ring-2 focus:ring-[rgba(198,166,75,0.2)]"
                        autoComplete="tel"
                        required
                        minLength={5}
                      />
                    </label>
                  </div>

                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                      {t("labels.businessNiche")}
                    </span>
                    <input
                      value={state.businessNiche}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          businessNiche: e.target.value
                        }))
                      }
                      placeholder={t("placeholders.businessNiche")}
                      className="w-full rounded-xl border border-divider bg-canvas px-4 py-3 text-sm font-light text-ink outline-none transition-colors focus:border-amberRetro focus:ring-2 focus:ring-[rgba(198,166,75,0.2)]"
                      required
                      minLength={2}
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                      {t("labels.whatNeedsSystematization")}
                    </span>
                    <textarea
                      value={state.whatNeedsSystematization}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          whatNeedsSystematization: e.target.value
                        }))
                      }
                      placeholder={t("placeholders.whatNeedsSystematization")}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-divider bg-canvas px-4 py-3 text-sm font-light text-ink outline-none transition-colors focus:border-amberRetro focus:ring-2 focus:ring-[rgba(198,166,75,0.2)]"
                      required
                      minLength={15}
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      data-cta="form_submit"
                      disabled={!canSubmit || status === "submitting"}
                      className="button-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        {status === "submitting" ? (
                          <span
                            className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-canvas border-t-transparent"
                            aria-hidden="true"
                          />
                        ) : null}
                        {status === "submitting" ? t("submitting") : t("submit")}
                      </span>
                    </button>
                    <p className="text-[11px] text-ink-muted/80">
                      {tc("privacyNote")}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <aside className="space-y-6">
              <div className="card lift">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                  {t("sidebar.telegram.title")}
                </p>
                <div className="divider my-5" />
                <p className="text-sm leading-relaxed text-ink-muted">
                  {t("sidebar.telegram.text")}
                </p>
                <a
                  href="https://t.me/mchernovaa"
                  target="_blank"
                  rel="noreferrer"
                  data-cta="form_telegram_direct"
                  className="button-secondary mt-4 inline-flex w-full justify-center sm:w-auto"
                >
                  {t("sidebar.telegram.button")}
                </a>
              </div>

              <div className="card lift">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                  {t("sidebar.whatHappensNext.title")}
                </p>
                <div className="divider my-5" />
                <div className="space-y-3 text-sm leading-relaxed text-ink-muted">
                  <p>{t("sidebar.whatHappensNext.step1")}</p>
                  <p>{t("sidebar.whatHappensNext.step2")}</p>
                  <p>{t("sidebar.whatHappensNext.step3")}</p>
                </div>
              </div>

              <div className="card lift">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                  {t("sidebar.email.title")}
                </p>
                <div className="divider my-5" />
                <p className="text-sm leading-relaxed text-ink-muted">
                  <a
                    className="link-subtle text-ink"
                    href="mailto:m.chernova734@gmail.com"
                  >
                    {t("sidebar.email.address")}
                  </a>
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
