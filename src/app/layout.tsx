import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MaarssenKimiaTaxi - Betrouwbare Taxi Service in Maarssen | 24/7 Beschikbaar",
  description: "🚗 Taxi Maarssen ✓ 24/7 Beschikbaar ✓ Luchthaven Schiphol ✓ Zakelijk Vervoer ✓ Betrouwbaar & Stipt ✓ Bel +31 6 341 458 06. Professionele taxi service in Maarssen, Utrecht en heel Nederland.",
  keywords: [
    "taxi maarssen",
    "taxi service maarssen", 
    "maarssen taxi",
    "taxi maarssen 24/7",
    "taxi naar schiphol maarssen",
    "taxi utrecht maarssen",
    "goedkope taxi maarssen",
    "betrouwbare taxi maarssen",
    "zakelijk vervoer maarssen",
    "airport taxi maarssen",
    "kimiataxi",
    "maarssen kimiataxi"
  ],
  authors: [{ name: "MaarssenKimiaTaxi" }],
  creator: "MaarssenKimiaTaxi",
  publisher: "MaarssenKimiaTaxi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.maarsenkimiataxi.nl",
    title: "MaarssenKimiaTaxi - Betrouwbare Taxi Service in Maarssen",
    description: "Professionele taxi service in Maarssen. 24/7 beschikbaar voor luchthaven vervoer, zakelijke ritten en meer. Bel +31 6 341 458 06",
    siteName: "MaarssenKimiaTaxi",
    images: [
      {
        url: "/car.jpg",
        width: 1200,
        height: 630,
        alt: "MaarssenKimiaTaxi - Toyota Taxi Auto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaarssenKimiaTaxi - Taxi Service Maarssen",
    description: "24/7 Betrouwbare taxi service in Maarssen en omstreken",
    images: ["/car.jpg"],
  },
  verification: {
    google: "voeg-hier-uw-google-verification-code-toe",
  },
  alternates: {
    canonical: "https://www.maarsenkimiataxi.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="NL-UT" />
        <meta name="geo.placename" content="Maarssen" />
        <meta name="geo.position" content="52.139167;5.040556" />
        <meta name="ICBM" content="52.139167, 5.040556" />
      </head>
      <body suppressHydrationWarning>
        {/* Google Analytics - vervang met uw eigen ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Local Business Schema.org Structured Data */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "MaarssenKimiaTaxi",
            "image": "https://www.maarsenkimiataxi.nl/car.jpg",
            "description": "Professionele taxi service in Maarssen en omstreken. 24/7 beschikbaar voor luchthaven vervoer, zakelijke ritten en city trips.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Maarssen",
              "addressRegion": "Utrecht",
              "postalCode": "3600",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.139167",
              "longitude": "5.040556"
            },
            "url": "https://www.maarsenkimiataxi.nl",
            "telephone": "+31634145806",
            "email": "kimiataxi@maarssen.nl",
            "priceRange": "€€",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Maarssen"
              },
              {
                "@type": "City",
                "name": "Utrecht"
              },
              {
                "@type": "City",
                "name": "Amsterdam"
              }
            ],
            "serviceType": [
              "Taxi Service",
              "Airport Transfer",
              "Business Transport",
              "City Trips"
            ],
            "sameAs": [
              "https://www.facebook.com/maarsenkimiataxi",
              "https://www.instagram.com/maarsenkimiataxi"
            ]
          })}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
