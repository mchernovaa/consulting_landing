import type { LeadPayload } from "@/lib/analytics/track";

const telegramUrl = "https://t.me/mchernovaa";
const email = "m.chernova734@gmail.com";

export type LeadLinkLabels = {
  header: string;
  subject: string;
  fields: {
    name: string;
    telegramWhatsApp: string;
    businessNiche: string;
    whatNeedsSystematization: string;
    utm: string;
  };
};

function buildMessage(payload: LeadPayload, labels: LeadLinkLabels) {
  const lines = [
    labels.header,
    "",
    `${labels.fields.name}: ${payload.name}`,
    `${labels.fields.telegramWhatsApp}: ${payload.telegramWhatsApp}`,
    `${labels.fields.businessNiche}: ${payload.businessNiche}`,
    "",
    `${labels.fields.whatNeedsSystematization}:`,
    payload.whatNeedsSystematization,
    "",
    payload.utmSource || payload.utmMedium || payload.utmCampaign
      ? labels.fields.utm + ":"
      : "",
    payload.utmSource ? `utm_source: ${payload.utmSource}` : "",
    payload.utmMedium ? `utm_medium: ${payload.utmMedium}` : "",
    payload.utmCampaign ? `utm_campaign: ${payload.utmCampaign}` : ""
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildTelegramDeepLink(
  payload: LeadPayload,
  labels: LeadLinkLabels
) {
  const text = encodeURIComponent(buildMessage(payload, labels));
  return `${telegramUrl}?text=${text}`;
}

export function buildMailtoLink(payload: LeadPayload, labels: LeadLinkLabels) {
  const subject = encodeURIComponent(labels.subject);
  const body = encodeURIComponent(buildMessage(payload, labels));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}
