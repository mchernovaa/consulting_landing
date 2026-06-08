export type ContactRequestBody = {
  name: string;
  telegram?: string;
  email?: string;
  message: string;
  locale?: string;
  pageUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

export type ContactNotificationPayload = {
  name: string;
  email?: string;
  message: string;
  submittedAt: string;
  locale: string;
  pageUrl: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};
