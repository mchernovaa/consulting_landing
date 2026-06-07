"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { LeadPayload } from "@/lib/analytics/track";
import {
  getLeadUtmFromLocation,
  trackLeadConversion
} from "@/lib/analytics/track";
import {
  buildMailtoLink,
  buildTelegramDeepLink
} from "@/lib/leads/leadLinks";

type FormState = {
  name: string;
  telegramWhatsApp: string;
  businessNiche: string;
  whatNeedsSystematization: string;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    name: "",
    telegramWhatsApp: "",
    businessNiche: "",
    whatNeedsSystematization: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done">(
    "idle"
  );
  const [submitted, setSubmitted] = useState<LeadPayload | null>(null);

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
            <p className="section-kicker">10 · Contact</p>
            <h2 className="section-heading">
              Обсудим{" "}
              <span className="underline decoration-amberRetro decoration-[0.18em] underline-offset-[0.35em]">
                вашу задачу
              </span>
            </h2>
            <p className="section-subtitle">
              Расскажите немного о вашем бизнесе и текущих задачах. Я свяжусь
              с вами в течение 24 часов.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
          <Reveal delayMs={80}>
            <div className="card">
              {status === "done" && submitted ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                      Заявка принята
                    </p>
                    <p className="font-display text-2xl tracking-tight text-ink text-balance">
                      Спасибо. Я свяжусь с вами в течение 24 часов.
                    </p>
                  </div>

                  <div className="divider" />

                  <p className="text-sm leading-relaxed text-ink-muted">
                    Можно сразу написать в Telegram или открыть письмо с
                    подробностями заявки — так мы быстрее договоримся о
                    разговоре.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={buildMailtoLink(submitted)}
                      className="button-primary lift w-full sm:w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Открыть письмо
                    </a>
                    <a
                      href={buildTelegramDeepLink(submitted)}
                      className="button-secondary lift w-full sm:w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Написать в Telegram
                    </a>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted/80">
                    Конфиденциально · Без спама
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!canSubmit) return;

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
                    trackLeadConversion(payload);
                    setSubmitted(payload);

                    window.setTimeout(() => {
                      setStatus("done");
                    }, 800);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        Имя
                      </span>
                      <input
                        value={state.name}
                        onChange={(e) =>
                          setState((s) => ({ ...s, name: e.target.value }))
                        }
                        placeholder="Например, Мария"
                        className="w-full rounded-xl border border-divider bg-canvas px-4 py-3 text-sm font-light text-ink outline-none transition-colors focus:border-amberRetro focus:ring-2 focus:ring-[rgba(198,166,75,0.2)]"
                        autoComplete="name"
                        required
                        minLength={2}
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                        Telegram / WhatsApp
                      </span>
                      <input
                        value={state.telegramWhatsApp}
                        onChange={(e) =>
                          setState((s) => ({
                            ...s,
                            telegramWhatsApp: e.target.value
                          }))
                        }
                        placeholder="@username / +7…"
                        className="w-full rounded-xl border border-divider bg-canvas px-4 py-3 text-sm font-light text-ink outline-none transition-colors focus:border-amberRetro focus:ring-2 focus:ring-[rgba(198,166,75,0.2)]"
                        autoComplete="tel"
                        required
                        minLength={5}
                      />
                    </label>
                  </div>

                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                      Ниша бизнеса
                    </span>
                    <input
                      value={state.businessNiche}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          businessNiche: e.target.value
                        }))
                      }
                      placeholder="Например, кофейня / салон / франшиза"
                      className="w-full rounded-xl border border-divider bg-canvas px-4 py-3 text-sm font-light text-ink outline-none transition-colors focus:border-amberRetro focus:ring-2 focus:ring-[rgba(198,166,75,0.2)]"
                      required
                      minLength={2}
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                      Что нужно систематизировать
                    </span>
                    <textarea
                      value={state.whatNeedsSystematization}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          whatNeedsSystematization: e.target.value
                        }))
                      }
                      placeholder="Коротко: какие процессы стоит описать, что мешает делегировать, что хотите передать команде."
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
                        {status === "submitting"
                          ? "Отправляем…"
                          : "Обсудить задачу"}
                      </span>
                    </button>
                    <p className="text-[11px] text-ink-muted/80">
                      Нажимая кнопку, вы соглашаетесь на обработку данных для
                      ответа.
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
                  Telegram
                </p>
                <div className="divider my-5" />
                <p className="text-sm leading-relaxed text-ink-muted">
                  Если вам удобнее, вы можете написать напрямую в Telegram.
                </p>
                <a
                  href="https://t.me/mchernovaa"
                  target="_blank"
                  rel="noreferrer"
                  data-cta="form_telegram_direct"
                  className="button-secondary mt-4 inline-flex w-full justify-center sm:w-auto"
                >
                  @mchernovaa
                </a>
              </div>

              <div className="card lift">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                  Что будет дальше
                </p>
                <div className="divider my-5" />
                <div className="space-y-3 text-sm leading-relaxed text-ink-muted">
                  <p>
                    Я прочитаю ваше сообщение и задам 2–3 уточняющих вопроса,
                    если потребуется.
                  </p>
                  <p>
                    Обсудим, какие процессы имеет смысл описывать в первую
                    очередь, и согласуем формат работы.
                  </p>
                  <p>
                    Работаю в Буэнос‑Айресе офлайн и дистанционно по всему
                    миру.
                  </p>
                </div>
              </div>

              <div className="card lift">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted/80">
                  Email
                </p>
                <div className="divider my-5" />
                <p className="text-sm leading-relaxed text-ink-muted">
                  <a
                    className="link-subtle text-ink"
                    href="mailto:m.chernova734@gmail.com"
                  >
                    m.chernova734@gmail.com
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
