import type { LeadPayload } from "@/lib/analytics/track";

const telegramUrl = "https://t.me/mchernovaa";
const email = "m.chernova734@gmail.com";

function buildMessage(payload: LeadPayload) {
  const lines = [
    "Новая заявка с сайта:",
    "",
    `Имя: ${payload.name}`,
    `Telegram/WhatsApp: ${payload.telegramWhatsApp}`,
    `Ниша бизнеса: ${payload.businessNiche}`,
    "",
    "Что нужно систематизировать:",
    payload.whatNeedsSystematization,
    "",
    payload.utmSource || payload.utmMedium || payload.utmCampaign
      ? "UTM:"
      : "",
    payload.utmSource ? `utm_source: ${payload.utmSource}` : "",
    payload.utmMedium ? `utm_medium: ${payload.utmMedium}` : "",
    payload.utmCampaign ? `utm_campaign: ${payload.utmCampaign}` : ""
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildTelegramDeepLink(payload: LeadPayload) {
  const text = encodeURIComponent(buildMessage(payload));
  return `${telegramUrl}?text=${text}`;
}

export function buildMailtoLink(payload: LeadPayload) {
  const subject = encodeURIComponent("Заявка: обсудить задачу по систематизации");
  const body = encodeURIComponent(buildMessage(payload));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

