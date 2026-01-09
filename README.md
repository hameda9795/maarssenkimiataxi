# MaarssenKimiaTaxi - Next.js Application

این یک اپلیکیشن رزرو تاکسی است که با Next.js 15، React 19 و Tailwind CSS ساخته شده است.

## 📋 ویژگی‌ها

- ✅ Next.js 15 با App Router
- ✅ React 19 و TypeScript
- ✅ Tailwind CSS برای استایل‌دهی
- ✅ API Routes برای backend
- ✅ Firebase برای notifications
- ✅ طراحی ریسپانسیو
- ✅ Glass morphism design
- ✅ محاسبه قیمت خودکار

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18 یا بالاتر
- npm یا yarn

### مراحل نصب

1. نصب dependencies:
```bash
npm install
```

2. کپی فایل environment:
```bash
cp .env.local.example .env.local
```

3. اجرای در حالت development:
```bash
npm run dev
```

4. باز کردن در مرورگر:
```
http://localhost:3000
```

## 📁 ساختار پروژه

```
nextjs-app/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── locations/
│   │   │   └── reservations/
│   │   ├── about/            # صفحه درباره ما
│   │   ├── services/         # صفحه خدمات
│   │   ├── contact/          # صفحه تماس
│   │   ├── driver/           # داشبورد راننده
│   │   ├── layout.tsx        # Layout اصلی
│   │   ├── page.tsx          # صفحه اصلی
│   │   └── globals.css       # استایل‌های سراسری
│   ├── components/           # کامپوننت‌های React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ServicesSection.tsx
│   │   └── Contact.tsx
│   ├── services/             # سرویس‌های API
│   │   └── bookingService.ts
│   ├── types/                # TypeScript types
│   │   └── booking.ts
│   └── config/               # تنظیمات
│       └── environment.ts
├── public/                   # فایل‌های استاتیک
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 طراحی

پروژه از طراحی Glass Morphism با رنگ‌های زیر استفاده می‌کند:

- **Primary**: `#FF9F1C` (نارنجی هلندی)
- **Secondary**: `#2EC4B6` (فیروزه‌ای)
- **Dark Background**: `#0F172A` (آبی تیره)
- **Light Text**: `#F8FAFC`

## 🔗 API Endpoints

### Next.js API Routes (Frontend API)

- `GET /api/locations/suggest?query={query}` - پیشنهاد آدرس‌ها
- `GET /api/locations/reverse-geocode?lat={lat}&lon={lon}` - تبدیل مختصات به آدرس
- `POST /api/reservations/calculate-price` - محاسبه قیمت
- `GET /api/reservations` - دریافت لیست رزروها
- `POST /api/reservations` - ایجاد رزرو جدید

### Java Backend API (اختیاری)

اگر می‌خواهید از backend Java استفاده کنید، آدرس API را در `.env.local` تنظیم کنید:

```
NEXT_PUBLIC_API_URL=http://192.168.178.204:8080/api
```

## 🔧 دستورات

```bash
# اجرای development server
npm run dev

# ساخت برای production
npm run build

# اجرای production build
npm start

# بررسی خطاها
npm run lint
```

## 🌐 صفحات

- `/` - صفحه اصلی (Home)
- `/about` - درباره ما
- `/services` - خدمات
- `/contact` - تماس با ما
- `/driver` - داشبورد راننده

## 📱 ریسپانسیو

پروژه کاملاً ریسپانسیو است و برای موبایل، تبلت و دسکتاپ بهینه شده است.

## 🔐 امنیت

- API keys در فایل `.env.local` ذخیره می‌شوند
- Validation برای تمام ورودی‌ها
- CORS configuration

## 📞 پشتیبانی

برای سوالات و پشتیبانی:
- تلفن: +31 6 341 458 06 / +31 6 876 670 13
- ایمیل: kimiataxi@maarssen.nl

## 📝 لایسنس

این پروژه تحت لایسنس MIT است.
