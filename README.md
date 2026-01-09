# MaarssenKimiaTaxi - Next.js Applicatie

Dit is een taxi reserveringsapplicatie gebouwd met Next.js 15, React 19 en Tailwind CSS.

## 📋 Functies

- ✅ Next.js 15 met App Router
- ✅ React 19 en TypeScript
- ✅ Tailwind CSS voor styling
- ✅ API Routes voor backend
- ✅ Firebase voor notificaties
- ✅ Responsive design
- ✅ Glass morphism design
- ✅ Automatische prijsberekening
- ✅ SEO geoptimaliseerd
- ✅ Google Maps integratie

## 🚀 Installatie en Setup

### Vereisten
- Node.js 18 of hoger
- npm of yarn

### Installatiestappen

1. Installeer dependencies:
```bash
npm install
```

2. Kopieer environment bestand:
```bash
cp .env.local.example .env.local
```

3. Start development server:
```bash
npm run dev
```

4. Open in browser:
```
http://localhost:3000
```

## 📁 Project Structuur

```
/
├── src/
│   ├── app/
│   │   ├── api/                    # API routes
│   │   │   ├── locations/          # Locatie suggesties
│   │   │   └── reservations/       # Reserveringen
│   │   ├── about/                  # Over ons pagina
│   │   ├── services/               # Diensten pagina
│   │   ├── contact/                # Contact pagina
│   │   ├── driver/                 # Chauffeur dashboard
│   │   ├── luchthavenvervoer/      # Luchthaven taxi dienst
│   │   ├── zakelijk-vervoer/       # Zakelijk vervoer dienst
│   │   ├── city-trips/             # Stadstoeren dienst
│   │   ├── layout.tsx              # Hoofd layout met SEO
│   │   ├── page.tsx                # Homepage
│   │   ├── sitemap.ts              # XML sitemap
│   │   ├── manifest.ts             # PWA manifest
│   │   └── globals.css             # Globale styles
│   ├── components/                 # React componenten
│   │   ├── Header.tsx              # Navigatie header
│   │   ├── Footer.tsx              # Footer met contact info
│   │   ├── Hero.tsx                # Hero sectie
│   │   ├── About.tsx               # Over ons sectie
│   │   ├── ServicesSection.tsx     # Diensten overzicht
│   │   └── Contact.tsx             # Contact formulier
│   ├── services/                   # API services
│   │   └── bookingService.ts
│   ├── types/                      # TypeScript types
│   │   └── booking.ts
│   └── config/                     # Configuratie
│       ├── environment.ts
│       └── firebase.ts
├── public/                         # Statische bestanden
│   ├── car.jpg                     # Taxi foto
│   ├── favicon.svg                 # Site icoon
│   └── robots.txt                  # SEO robots bestand
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Design

Het project gebruikt een Glass Morphism design met de volgende kleuren:

- **Primary**: `#FF9F1C` (Oranje)
- **Secondary**: `#2EC4B6` (Turquoise)
- **Dark Background**: `#0F172A` (Donkerblauw)
- **Light Text**: `#F8FAFC`

## 🔗 API Endpoints

### Next.js API Routes

- `GET /api/locations/suggest?query={query}` - Adres suggesties
- `GET /api/locations/reverse-geocode?lat={lat}&lon={lon}` - Coördinaten naar adres
- `POST /api/reservations/calculate-price` - Prijsberekening
- `GET /api/reservations` - Lijst van reserveringen
- `POST /api/reservations` - Nieuwe reservering aanmaken

### Optionele Java Backend API

Als u de Java backend wilt gebruiken, stel dan de API URL in `.env.local` in:

```
NEXT_PUBLIC_API_URL=http://192.168.178.204:8080/api
```

## 🔧 Commando's

```bash
# Start development server
npm run dev

# Build voor productie
npm run build

# Start productie build
npm start

# Controleer op fouten
npm run lint
```

## 🌐 Pagina's

- `/` - Homepage met diensten overzicht
- `/about` - Over MaarssenKimiaTaxi
- `/services` - Alle diensten
- `/contact` - Contact formulier
- `/driver` - Chauffeur dashboard
- `/luchthavenvervoer` - Luchthaven taxi service
- `/zakelijk-vervoer` - Zakelijk vervoer
- `/city-trips` - Stadstoeren en uitstapjes

## 🎯 SEO Optimalisatie

Het project is volledig geoptimaliseerd voor zoekmachines:

- ✅ Schema.org structured data (TaxiService type)
- ✅ OpenGraph en Twitter Cards metadata
- ✅ XML sitemap op `/sitemap.xml`
- ✅ Robots.txt configuratie
- ✅ PWA manifest voor mobiel
- ✅ Geo-tagging voor lokale SEO (Maarssen)
- ✅ Nederlandse SEO keywords
- ✅ Snelle laadtijd met Next.js optimalisaties

Zie `SEO_GUIDE.md` voor de complete SEO checklist en setup instructies.

## 📱 Responsive Design

De website is volledig responsive en geoptimaliseerd voor:
- 📱 Mobiele telefoons
- 📱 Tablets
- 💻 Desktops
- 🖥️ Grote schermen

## 🔐 Beveiliging

- API keys worden veilig opgeslagen in `.env.local`
- Input validatie voor alle formulieren
- CORS configuratie
- Geen gevoelige data in client-side code

## 📞 Contact & Ondersteuning

Voor vragen en ondersteuning:
- **Telefoon**: +31 6 341 458 06 / +31 6 876 670 13
- **Email**: kimiataxi@maarssen.nl
- **Locatie**: Maarssen, Nederland
- **KVK nummer**: 97710504

## 🚕 Onze Diensten

### 🛫 Luchthavenvervoer
Betrouwbaar vervoer naar alle grote luchthavens in Nederland:
- Schiphol Amsterdam - €55
- Rotterdam The Hague Airport - €85
- Eindhoven Airport - €120

### 💼 Zakelijk Vervoer
Professioneel vervoer voor zakelijke afspraken, meetings en events met:
- Vaste contactpersoon
- Contract prijzen
- Factuurservice
- Prioriteit boeking

### 🏛️ City Trips
Ontdek Nederland met onze gidsdiensten:
- Classic Amsterdam Tour (4 uur) - €180
- Nederlandse Platteland Tour (5 uur) - €220
- Cultuur Route (8 uur) - €350

## 🚀 Deployment

Het project is klaar voor deployment op:
- **Vercel** (aanbevolen voor Next.js)
- **Netlify**
- **Andere Node.js hosting platforms**

### Vercel Deployment

1. Push code naar GitHub (al gedaan)
2. Ga naar [vercel.com](https://vercel.com)
3. Importeer het GitHub repository
4. Configureer environment variabelen
5. Deploy!

## 📝 Licentie

Dit project is onder de MIT licentie.
