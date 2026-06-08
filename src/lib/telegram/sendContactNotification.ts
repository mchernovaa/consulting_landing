import type { ContactNotificationPayload } from "@/lib/contact/types";

const TELEGRAM_API_BASE = "https://api.telegram.org";

function formatOptionalValue(value?: string): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "-";
}

export function formatLocale(locale?: string): string {
  switch (locale?.trim().toLowerCase()) {
    case "ru":
      return "RU";
    case "en":
      return "EN";
    case "es":
      return "ES";
    default:
      return formatOptionalValue(locale?.toUpperCase());
  }
}

export function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Moscow"
  }).format(date);
}

export function formatContactMessage(payload: ContactNotificationPayload): string {
  const email = payload.email?.trim() || "—";

  return [
    "🚀 Новая заявка",
    "",
    "Имя:",
    payload.name.trim(),
    "",
    "Email:",
    email,
    "",
    "Запрос:",
    payload.message.trim(),
    "",
    "Дата и время:",
    payload.submittedAt,
    "",
    "Язык:",
    payload.locale,
    "",
    "URL:",
    payload.pageUrl,
    "",
    "UTM source:",
    payload.utmSource,
    "",
    "UTM medium:",
    payload.utmMedium,
    "",
    "UTM campaign:",
    payload.utmCampaign,
    "",
    "UTM term:",
    payload.utmTerm,
    "",
    "UTM content:",
    payload.utmContent
  ].join("\n");
}

export function buildContactNotificationPayload(input: {
  name: string;
  email?: string;
  message: string;
  locale?: string;
  pageUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  submittedAt?: string;
}): ContactNotificationPayload {
  return {
    name: input.name,
    email: input.email,
    message: input.message,
    submittedAt: input.submittedAt ?? formatSubmittedAt(new Date()),
    locale: formatLocale(input.locale),
    pageUrl: formatOptionalValue(input.pageUrl),
    utmSource: formatOptionalValue(input.utmSource),
    utmMedium: formatOptionalValue(input.utmMedium),
    utmCampaign: formatOptionalValue(input.utmCampaign),
    utmTerm: formatOptionalValue(input.utmTerm),
    utmContent: formatOptionalValue(input.utmContent)
  };
}

type SendContactNotificationOptions = {
  botToken: string;
  chatId: string;
  signal?: AbortSignal;
};

export type SendContactNotificationResult =
  | { ok: true }
  | { ok: false; reason: "telegram_unavailable" | "telegram_rejected" };

export async function sendContactNotification(
  payload: ContactNotificationPayload,
  options: SendContactNotificationOptions
): Promise<SendContactNotificationResult> {
  const url = `${TELEGRAM_API_BASE}/bot${options.botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: options.chatId,
        text: formatContactMessage(payload),
        disable_web_page_preview: true
      }),
      signal: options.signal
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      console.error("Telegram Bot API error:", response.status, errorBody);
      return { ok: false, reason: "telegram_rejected" };
    }

    return { ok: true };
  } catch (error) {
    console.error("Telegram request failed:", error);
    return { ok: false, reason: "telegram_unavailable" };
  }
}
