import { NextResponse } from "next/server";
import type { ContactRequestBody } from "@/lib/contact/types";
import {
  buildContactNotificationPayload,
  sendContactNotification
} from "@/lib/telegram/sendContactNotification";

const TELEGRAM_TIMEOUT_MS = 10_000;

function readOptionalString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function parseContactBody(body: unknown): ContactRequestBody | null {
  if (!body || typeof body !== "object") return null;

  const record = body as Record<string, unknown>;
  const name = readOptionalString(record.name);
  const message = readOptionalString(record.message);

  if (!name || name.length < 2 || !message || message.length < 1) {
    return null;
  }

  return {
    name,
    message,
    telegram: readOptionalString(record.telegram),
    email: readOptionalString(record.email),
    locale: readOptionalString(record.locale),
    pageUrl: readOptionalString(record.pageUrl),
    utmSource: readOptionalString(record.utmSource),
    utmMedium: readOptionalString(record.utmMedium),
    utmCampaign: readOptionalString(record.utmCampaign),
    utmTerm: readOptionalString(record.utmTerm),
    utmContent: readOptionalString(record.utmContent)
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const payload = parseContactBody(body);
  if (!payload) {
    return NextResponse.json(
      { error: "Name and message are required" },
      { status: 400 }
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram env vars are not configured");
    return NextResponse.json(
      { error: "Notification service is not configured" },
      { status: 503 }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

  try {
    const result = await sendContactNotification(
      buildContactNotificationPayload({
        name: payload.name,
        email: payload.email,
        message: payload.message,
        locale: payload.locale,
        pageUrl: payload.pageUrl,
        utmSource: payload.utmSource,
        utmMedium: payload.utmMedium,
        utmCampaign: payload.utmCampaign,
        utmTerm: payload.utmTerm,
        utmContent: payload.utmContent
      }),
      {
        botToken,
        chatId,
        signal: controller.signal
      }
    );

    if (!result.ok) {
      return NextResponse.json(
        { error: "Failed to deliver notification" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } finally {
    clearTimeout(timeout);
  }
}
