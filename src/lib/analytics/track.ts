export type LeadPayload = {
  name: string;
  telegramWhatsApp: string;
  businessNiche: string;
  whatNeedsSystematization: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    dataLayer?: Array<Record<string, any>>;
    gtag?: (...args: any[]) => void;
  }
}

function safeTrim(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

export function getLeadUtmFromLocation() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: safeTrim(params.get("utm_source")),
    utmMedium: safeTrim(params.get("utm_medium")),
    utmCampaign: safeTrim(params.get("utm_campaign"))
  };
}

export function trackLeadConversion(payload: LeadPayload) {
  if (typeof window === "undefined") return;

  const metaData = {
    content_name: payload.businessNiche || "",
    content_category: "Business Systematization",
    lead_name: payload.name,
    lead_contact: payload.telegramWhatsApp,
    utm_source: payload.utmSource ?? "",
    utm_medium: payload.utmMedium ?? "",
    utm_campaign: payload.utmCampaign ?? ""
  };

  // Meta Pixel (best-effort; only runs when Pixel is installed).
  try {
    if (window.fbq) {
      window.fbq("track", "Lead", metaData);
      window.fbq("trackCustom", "LeadSubmit", metaData);
    }
  } catch {
    // no-op
  }

  // GA4 via gtag (best-effort; only runs when GA4 is installed).
  try {
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        lead_name: payload.name,
        lead_contact: payload.telegramWhatsApp,
        business_niche: payload.businessNiche,
        what_needs_systematization: payload.whatNeedsSystematization,
        utm_source: payload.utmSource ?? "",
        utm_medium: payload.utmMedium ?? "",
        utm_campaign: payload.utmCampaign ?? ""
      });
    }
  } catch {
    // no-op
  }
}

