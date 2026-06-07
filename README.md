# Premium consulting landing

Editorial luxury landing page for business process systematization consulting.

## Requirements

- **Node.js 18+** (recommended: LTS 20 or 22)
- **npm** (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

## Local launch (Cursor / terminal)

1. Open the project folder in Cursor:

```bash
cd /Users/user/consulting-landing
```

2. Install dependencies:

```bash
npm install
```

3. (Optional) Create local env file:

```bash
cp .env.example .env.local
```

For local preview you can leave env empty — site works with `http://localhost:3000` fallback.

4. Start development server:

```bash
npm run dev
```

5. Open in browser:

**http://localhost:3000**

## Production check locally

```bash
npm run build
npm run start
```

Then open **http://localhost:3000** again.

## Mobile preview

In Chrome / Safari DevTools:

1. Open `http://localhost:3000`
2. Press `F12` (or `Cmd+Option+I` on Mac)
3. Toggle device toolbar (phone icon)
4. Test iPhone / Android widths
5. Scroll to verify sticky CTA, menu, form, spacing

## Environment variables (when domain is ready)

Set in `.env.local` or hosting provider:

- `NEXT_PUBLIC_SITE_URL` — your domain (e.g. `https://yourdomain.com`)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Ads Pixel
- `NEXT_PUBLIC_GOOGLE_ADS_ID` — Google Ads conversion tag
- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4

## Contacts (configured in UI)

- Telegram: [@mchernovaa](https://t.me/mchernovaa)
- Email: m.chernova734@gmail.com
- Location: Buenos Aires, Argentina

## Stack

Next.js 14 · React 18 · TypeScript · Tailwind CSS
