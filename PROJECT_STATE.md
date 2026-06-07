# PROJECT_STATE.md

Подробный паспорт проекта **consulting-landing** — premium editorial landing page для бизнес-консультанта по систематизации и оптимизации бизнес-процессов.

> **Назначение файла:** позволить новому чату Cursor полностью понять проект без чтения предыдущего диалога.

---

## 1. Общая цель проекта

Создать **production-ready premium landing page** для личного бренда бизнес-консультанта, который помогает компаниям:

- выстроить операционную систему;
- описать и оптимизировать бизнес-процессы;
- создать регламенты, должностные инструкции, KPI;
- собрать базу знаний;
- подготовить бизнес к масштабированию и франчайзингу;
- снизить операционный хаос и зависимость от собственника.

**Бизнес-цели сайта:**

1. Получение заявок с рекламы (Meta Ads, Google Ads).
2. Формирование ощущения **дорогого, структурного, интеллектуального** сервиса.
3. Message match: пользователь с рекламы за 5–30 секунд понимает — чем занимается консультант, для кого, какой результат.

**Текущий статус:** frontend готов к локальному просмотру, демонстрации клиентам и подготовке к деплою. Backend для формы **не подключён** — заявки обрабатываются через mailto/Telegram deep links + frontend tracking hooks.

**Домен:** пока **не куплен**. Используется fallback `http://localhost:3000` через `NEXT_PUBLIC_SITE_URL`.

---

## 2. Позиционирование бренда

### Владелец / эксперт

- **Имя:** Мария Чернова (Maria Chernova)
- **Роль:** архитектор операционной системы бизнеса
- **География:** Buenos Aires, Argentina (офлайн) + worldwide remote

### Tone of voice

- Спокойный, дорогой, интеллектуальный, уверенный
- Strategic business consulting
- **Без:** инфоцыганства, агрессивных продаж, «волшебных кнопок», startup/SaaS/crypto aesthetic

### Визуальное направление

**Editorial luxury + premium consulting + modern business minimalism**

Референсы по ощущению (не копировать буквально):

- McKinsey, Bain (структурность, доверие)
- Aesop (тёплый minimal, тактильность)
- Monocle, Stripe Press (editorial typography)
- Boutique strategy/operations consulting

### Ключевая метафора бренда

> «Этот человек превращает хаос в систему»

### Целевая аудитория

- Собственники малого, среднего и крупного бизнеса
- Предприниматели с хаотичными процессами
- Сервисные компании
- Франшизы и компании, готовящиеся к масштабированию
- Бизнесы, завязанные на собственнике
- Компании в Аргентине и дистанционно по всему миру

### Header branding (UI)

- Logo text: **Maria Chernova**
- Subtitle: **Business Systems Consulting**

---

## 3. Структура сайта по секциям

Одностраничный landing (`src/app/page.tsx`), порядок секций:

| # | ID | Компонент | Файл | Назначение |
|---|-----|-----------|------|------------|
| — | — | Header | `src/components/layout/Header.tsx` | Sticky nav + CTA + mobile menu |
| 1 | `hero` | Hero | `src/components/sections/Hero.tsx` | Главный экран, позиционирование, primary CTA |
| 2 | `problems` | BusinessProblems | `src/components/sections/BusinessProblems.tsx` | Pain points — узнавание боли |
| 3 | `services` | Services | `src/components/sections/Services.tsx` | 6 услуг / направлений работы |
| 4 | `process` | Process | `src/components/sections/Process.tsx` | 5 этапов работы (timeline) |
| 5 | `results` | Results | `src/components/sections/Results.tsx` | Результаты для клиента (качественные) |
| 6 | `cases` | Cases | `src/components/sections/Cases.tsx` | 3 типовых кейса (без названий компаний) |
| 7 | `about` | About | `src/components/sections/About.tsx` | Об эксперте + принципы работы |
| 8 | `cta` | Cta | `src/components/sections/Cta.tsx` | Промежуточный CTA-блок (диагностика 45 мин) |
| 9 | `contact` | ContactForm | `src/components/sections/ContactForm.tsx` | Форма заявки + sidebar |
| — | — | MobileStickyCta | `src/components/layout/MobileStickyCta.tsx` | Sticky CTA на mobile |
| — | — | Footer | `src/components/layout/Footer.tsx` | Навигация + контакты + copyright |

**Дополнительные страницы:**

- `src/app/not-found.tsx` — 404
- `src/app/robots.ts`, `src/app/sitemap.ts` — SEO

**Anchor navigation (Header):**

`#problems`, `#services`, `#process`, `#results`, `#about`, `#contact`

---

## 4. Цвета, шрифты и дизайн-система

### Цветовая палитра (`tailwind.config.ts`)

| Token | HEX | Роль |
|-------|-----|------|
| `canvas` | `#F7F5F0` | Основной фон (ivory) |
| `canvas-soft` | `#EDE9E1` | Альтернативный фон секций |
| `ink` | `#1A1A1A` | Основной текст |
| `ink-muted` | `#5C5C5C` | Вторичный текст |
| `burgundy` | `#5C1A2E` | Primary CTA, акценты |
| `forest` | `#1E3D32` | Secondary accent, bullets |
| `amberRetro` | `#D4A84B` | Retro yellow highlights (underline, dots) |
| `divider` | `#D8D2C8` | Линии, borders |

**Пропорция:** ~70% светлые нейтрали, ~20% burgundy/forest, ~10% amberRetro (точечно).

### Типографика (`src/app/layout.tsx`)

| Роль | Шрифт | CSS variable | Tailwind class |
|------|-------|--------------|----------------|
| Display (H1–H2, serif) | Cormorant Garamond | `--font-display` | `font-display` |
| UI / Body (sans) | DM Sans | `--font-sans` | `font-sans` |

**Паттерны:**

- Kicker labels: `text-[11px] uppercase tracking-[0.2em]`
- Section headings: `font-display`, `tracking-tight`, underline через `decoration-amberRetro`
- Body: `leading-relaxed`, max-width через `max-w-2xl` / `max-w-xl`

### Global CSS utilities (`src/app/globals.css`)

| Class | Назначение |
|-------|------------|
| `.container-page` | max-w-6xl, responsive padding |
| `.section` | vertical rhythm py-16/20/24 |
| `.section-heading` | serif H2 scale |
| `.section-kicker` | uppercase label |
| `.section-subtitle` | muted intro text |
| `.card` | white card + border + shadow-soft |
| `.pill` | badge/chip |
| `.divider` | thin horizontal line |
| `.button-primary` | burgundy CTA |
| `.button-secondary` | outline CTA |
| `.link-subtle` | underline link |
| `.lift` | hover translate-y |
| `.smooth-anchor` | scroll-margin for sticky header |
| `.text-balance` | text-wrap: balance (hero) |
| `.grain` | subtle noise overlay |

### Shadows

- `shadow-soft`: `0 18px 40px rgba(26, 26, 26, 0.08)`

### Visual effects

- Subtle grain/noise background (fixed pseudo-element)
- Scroll reveal animations (`Reveal` component)
- Sticky header blur + shadow on scroll
- Reduced motion support (`prefers-reduced-motion`)

### ⚠️ Tailwind @apply ограничение

**Нельзя** использовать custom-color opacity в `@apply`, например:

- ~~`hover:bg-burgundy/92`~~
- ~~`ring-burgundy/40`~~

Использовать вместо этого:

- `hover:opacity-90` (на burgundy кнопках)
- `ring-[rgba(92,26,46,0.4)]` (arbitrary values)
- Plain CSS `rgba(...)` в `.css` rules

В `className` JSX классы типа `border-divider/60` **работают** — проблема только в `@apply`.

---

## 5. Все реализованные компоненты

### Layout

| Компонент | Путь | Описание |
|-----------|------|----------|
| `Header` | `src/components/layout/Header.tsx` | Sticky header, desktop nav, mobile hamburger menu, CTA |
| `Footer` | `src/components/layout/Footer.tsx` | 3-column footer: описание, nav, контакты |
| `MobileStickyCta` | `src/components/layout/MobileStickyCta.tsx` | Fixed bottom CTA bar (mobile only) |

### Sections

| Компонент | Путь |
|-----------|------|
| `Hero` | `src/components/sections/Hero.tsx` |
| `BusinessProblems` | `src/components/sections/BusinessProblems.tsx` |
| `Services` | `src/components/sections/Services.tsx` |
| `Process` | `src/components/sections/Process.tsx` |
| `Results` | `src/components/sections/Results.tsx` |
| `Cases` | `src/components/sections/Cases.tsx` |
| `About` | `src/components/sections/About.tsx` |
| `Cta` | `src/components/sections/Cta.tsx` |
| `ContactForm` | `src/components/sections/ContactForm.tsx` |

### UI

| Компонент | Путь | Описание |
|-----------|------|----------|
| `Reveal` | `src/components/ui/Reveal.tsx` | IntersectionObserver scroll reveal |
| `EditorialImage` | `src/components/ui/EditorialImage.tsx` | Next/Image wrapper для SVG placeholders |

### SEO / Ads

| Компонент | Путь | Описание |
|-----------|------|----------|
| `SchemaOrg` | `src/components/seo/SchemaOrg.tsx` | JSON-LD ProfessionalService |
| `Pixels` | `src/components/ads/Pixels.tsx` | Meta Pixel + Google Ads + GA4 scripts |

### Lib

| Модуль | Путь | Описание |
|--------|------|----------|
| `trackLeadConversion` | `src/lib/analytics/track.ts` | Meta Lead + GA4 generate_lead events |
| `buildTelegramDeepLink` | `src/lib/leads/leadLinks.ts` | Telegram pre-filled message |
| `buildMailtoLink` | `src/lib/leads/leadLinks.ts` | Email pre-filled body |

### Static assets

| Файл | Назначение |
|------|------------|
| `public/images/hero-editorial.svg` | Hero visual |
| `public/images/about-editorial.svg` | About visual |
| `public/images/case-network.svg` | Case 1 |
| `public/images/case-operations.svg` | Case 2 |
| `public/images/case-knowledge.svg` | Case 3 |
| `src/app/icon.svg` | Favicon |
| `src/app/opengraph-image.svg` | OG image |

---

## 6. Все реализованные функции

### UX / Navigation

- [x] Smooth scroll (`scroll-behavior: smooth`)
- [x] Anchor offsets под sticky header (`.smooth-anchor`)
- [x] Sticky header с blur + shadow on scroll
- [x] Mobile hamburger menu с overlay + slide animation
- [x] Body scroll lock при открытом mobile menu
- [x] Skip link «Перейти к содержанию» (accessibility)
- [x] Mobile sticky CTA (появляется после scroll > 260px)

### Animations / Interactions

- [x] Scroll reveal (`Reveal` — opacity + translateY, respects reduced motion)
- [x] Card hover lift (`.lift`)
- [x] Button hover/focus/active states
- [x] Subtle grain background

### Contact / Lead capture

- [x] Contact form (4 fields, client-side validation)
- [x] Loading state («Отправляем…» + spinner)
- [x] Success state с CTA: «Открыть письмо» / «Написать в Telegram»
- [x] UTM capture (`utm_source`, `utm_medium`, `utm_campaign`)
- [x] **No backend** — simulated submit + mailto/Telegram links

### Analytics (frontend-ready)

- [x] Meta Pixel placeholder (`NEXT_PUBLIC_META_PIXEL_ID`)
- [x] Google Ads tag (`NEXT_PUBLIC_GOOGLE_ADS_ID`)
- [x] GA4 (`NEXT_PUBLIC_GA4_ID`)
- [x] `trackLeadConversion()` on form submit
- [x] `data-cta` attributes on CTA buttons for future event mapping

### SEO

- [x] Next.js Metadata API (title, description, OG, canonical)
- [x] `robots.ts`
- [x] `sitemap.ts`
- [x] JSON-LD Schema.org (`ProfessionalService`)
- [x] `metadataBase` from `NEXT_PUBLIC_SITE_URL` (fallback localhost)

### Responsive

- [x] Mobile-first typography hierarchy
- [x] Grid layouts collapse on mobile
- [x] About section: text first on mobile, image second (`order-*`)
- [x] Main padding-bottom for sticky mobile CTA

---

## 7. Контакты владельца сайта

| Канал | Значение |
|-------|----------|
| **Telegram** | [@mchernovaa](https://t.me/mchernovaa) |
| **Email** | [m.chernova734@gmail.com](mailto:m.chernova734@gmail.com) |
| **Location** | Buenos Aires, Argentina |
| **Format** | Офлайн в BA + worldwide remote |

Контакты прописаны в:

- `src/components/layout/Footer.tsx`
- `src/components/sections/ContactForm.tsx` (sidebar)
- `src/lib/leads/leadLinks.ts`
- `src/components/seo/SchemaOrg.tsx`

---

## 8. Кейсы и портфолио

> **Важно:** кейсы **анонимные** (без названий компаний и логотипов) — конфиденциальность как часть premium-сервиса. Это **типовые сценарии**, не верифицированные публичные кейсы с цифрами.

### Кейс 01 — Сервисная сеть, масштабирование через стандарты

- **Исходная ситуация:** каждая точка работала по-своему, качество «гуляло», собственник — единая точка решений.
- **Результат:** рост сети без потери качества; единые стандарты, роли, контур контроля.
- **В работе:** картирование процессов, операционные стандарты, франчайзибук, контроль сети.
- **Image:** `/images/case-network.svg`

### Кейс 02 — Операционная система для команды 100+

- **Исходная ситуация:** нет единых регламентов, перегруженные руководители, реактивные решения.
- **Результат:** меньше «пожаров», освобождение времени руководителей.
- **В работе:** сквозные процессы, KPI, управленческий контур, база знаний.
- **Image:** `/images/case-operations.svg`

### Кейс 03 — Распределённая команда: база знаний и стандарты

- **Исходная ситуация:** знания «в головах», стандарты не описаны, долгий онбординг.
- **Результат:** стабилизация качества, ускорение адаптации новых сотрудников.
- **В работе:** архитектура базы знаний, регламенты, операционный контроль.
- **Image:** `/images/case-knowledge.svg`

### Placeholder images

Все изображения — **custom SVG** в editorial/architecture style (warm neutrals, burgundy/green/amber accents). **Не stock photos.** Заменить на реальные фото/портрет при наличии.

---

## 9. Текущие тексты и концепция сайта

### Hero — ключевые сообщения

**H1:** «Строю управляемую систему процессов для бизнеса, который готов расти.»

**Подзаголовок:** операционная система — процессы, ответственность, KPI, база знаний, снижение хаоса, предсказуемое масштабирование.

**3 блока:**

- **Для кого:** малый, средний, крупный бизнес; сервисные компании; франшизы
- **Ключевой результат:** прозрачные процессы, понятные роли, управляемость
- **Формат:** Аргентина офлайн, worldwide remote

**3 результата (bullets):**

1. Собственник перестаёт держать бизнес «в голове»
2. Команда понимает ответственность и стандарт результата
3. Масштабирование становится предсказуемым

**CTA:**

- Primary: «Запросить разбор системы» → `#contact`
- Secondary: «Услуги и форматы работы» → `#services`

**Trust line:** «Конфиденциально · Спокойно · Стратегически · Без «волшебных кнопок»»

### Pain points (6 карточек)

1. Бизнес держится на собственнике
2. Процессы только «в головах»
3. Нет прозрачной системы контроля
4. Сложно масштабироваться
5. Риск потери знаний
6. Хаос в зоне ответственности

### Услуги (6 направлений)

1. Должностные инструкции и регламенты
2. Описание и оптимизация бизнес-процессов
3. KPI и система операционного контроля
4. Базы знаний и передача экспертизы
5. Франчайзинг: франчайзибук и упаковка
6. Операционная структура и оптимизация команды

### Process (5 этапов)

1. Диагностика и постановка задачи
2. Съёмка и анализ процессов
3. Проектирование новой операционной модели
4. Разработка регламентов, KPI и базы знаний
5. Сопровождение внедрения и корректировки

### Results (4 блока — качественные, не «цифры ради цифр»)

1. Снижение операционного хаоса — «существенно»
2. Собственник перестаёт держать всё в голове — «структурно»
3. Понятные зоны ответственности — «по ролям»
4. Масштабирование управляемо — «без перегруза»

### About — 3 принципа

1. Системность важнее героизма
2. Документы — это инструмент
3. Контроль на цифрах, не на ощущениях

### CTA section

- «Начнём с короткой диагностики» (45 минут)
- Buenos Aires офлайн + worldwide remote

### Contact form fields

1. **Имя** (required, min 2)
2. **Telegram / WhatsApp** (required, min 5)
3. **Ниша бизнеса** (required, min 2)
4. **Что нужно систематизировать** (textarea, required, min 15)

---

## 10. Используемый стек технологий

| Технология | Версия | Назначение |
|------------|--------|------------|
| **Next.js** | 14.2.0 | App Router, SSR/SSG, metadata |
| **React** | 18.3.1 | UI |
| **TypeScript** | ^5.0 | Type safety |
| **Tailwind CSS** | ^3.4 | Styling |
| **PostCSS + Autoprefixer** | ^8.4 / ^10.4 | CSS pipeline |
| **ESLint** | ^8.0 + eslint-config-next | Linting |
| **Google Fonts** | next/font | Cormorant Garamond + DM Sans |

**Node requirement:** `>=18.17.0` (см. `package.json` engines)

### Scripts

```bash
npm run dev      # localhost:3000
npm run build    # production build
npm run start    # production server
npm run lint     # eslint
```

### Environment variables (`.env.example`)

```env
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_SITE_URL=
```

### Project structure

```
consulting-landing/
├── public/images/          # SVG placeholder images
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/         # Header, Footer, MobileStickyCta
│   │   ├── sections/       # Landing sections
│   │   ├── ui/             # Reveal, EditorialImage
│   │   ├── seo/            # SchemaOrg
│   │   └── ads/            # Pixels
│   └── lib/
│       ├── analytics/      # track.ts
│       └── leads/          # leadLinks.ts
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── .env.example
├── README.md
└── PROJECT_STATE.md        # этот файл
```

---

## 11. Какие проблемы уже были исправлены

### Критические

| Проблема | Решение |
|----------|---------|
| `Cases.tsx` содержал **дублированный код** (2 export, 2 массива cases) | Файл переписан, одна версия с Reveal + EditorialImage |
| Tailwind **@apply crash** на `hover:bg-burgundy/92`, `ring-burgundy/40` | Заменено на `hover:opacity-90`, `ring-[rgba(...)]`, plain CSS rgba |
| Placeholder contacts (`@your_handle`, `hello@example.com`) | Заменены на реальные контакты |
| `example.com` в sitemap/robots | Заменено на `NEXT_PUBLIC_SITE_URL` fallback |

### UX / Polish

| Проблема | Решение |
|----------|---------|
| Нет mobile menu | Hamburger + overlay menu |
| Нет mobile sticky CTA | `MobileStickyCta` component |
| Нет loading/success form states | Submitting spinner + success with mailto/Telegram |
| Пустые visual blocks | Editorial SVG placeholders в Hero, About, Cases |
| Header brand generic «Structured» | Обновлено на «Maria Chernova» |
| Anchor scroll под sticky header | `.smooth-anchor` scroll-margin-top |

### Build / Dev

| Проблема | Решение |
|----------|---------|
| `npm` отсутствовал в среде | README с инструкцией установки Node.js LTS |
| SVG images в Next/Image | `dangerouslyAllowSVG: true` в next.config.mjs |
| Deprecated `experimental.appDir` | Удалено из next.config.mjs |

**Текущий статус build:** `npm run build` — ✅ успешно. `npm run dev` — ✅ localhost:3000 HTTP 200.

---

## 12. Какие задачи остались на будущее

### Деплой и домен (приоритет при покупке домена)

- [ ] Купить домен
- [ ] Установить `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
- [ ] Обновить metadata canonical, OG url
- [ ] Проверить sitemap.xml и robots.txt на production URL
- [ ] Деплой (Vercel / Netlify / другой хостинг)

### Backend / Lead processing

- [ ] Подключить реальную отправку формы (API route / server action)
- [ ] Telegram Bot notifications (вместо deep link)
- [ ] Email service (Resend, SendGrid, etc.)
- [ ] CRM integration (Notion, HubSpot, amoCRM)
- [ ] Thank-you page (`/thank-you`) для conversion tracking

### Analytics / Ads

- [ ] Установить реальные ID: Meta Pixel, Google Ads, GA4
- [ ] Настроить conversion events в Meta Ads Manager / Google Ads
- [ ] A/B тест hero (портрет vs схема) — если добавится фото
- [ ] Dynamic UTM → hero subtitle (message match с рекламой)

### Content

- [ ] Заменить SVG placeholders на **реальные фото** (портрет эксперта, editorial business shots)
- [ ] Добавить реальные кейсы с согласия клиентов (если возможно)
- [ ] FAQ section (6–8 вопросов) + FAQ schema
- [ ] Privacy policy / обработка данных (legal page)
- [ ] RU/EN или ES версия (если нужна для AR market)

### Design / UX (optional polish)

- [ ] Реальный logo (не placeholder circle)
- [ ] Favicon refinement
- [ ] OG image с реальным брендингом
- [ ] Testimonials (если появятся)
- [ ] Calendly / booking integration для диагностики

### Technical

- [ ] E2E tests (Playwright)
- [ ] Lighthouse performance audit
- [ ] i18n если потребуется
- [ ] Rate limiting / spam protection на форме (после backend)

---

## Быстрый старт для нового чата

```bash
cd /Users/user/consulting-landing
npm install
npm run dev
# → http://localhost:3000
```

**Не делать без запроса:**

- Не добавлять backend без явной задачи
- Не переписывать архитектуру
- Не менять tone of voice на агрессивный/infobiz
- Не использовать startup/SaaS/crypto aesthetic
- Не использовать custom-color opacity в `@apply` blocks

**При редактировании стилей:** проверять `npm run build` после изменений в `globals.css`.

---

*Последнее обновление: май 2026*
