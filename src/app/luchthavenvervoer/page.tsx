import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luchthavenvervoer Maarssen - Taxi naar Schiphol, Rotterdam & Eindhoven",
  description: "Betrouwbaar luchthavenvervoer vanuit Maarssen naar Schiphol, Rotterdam en Eindhoven Airport. 24/7 beschikbaar, vaste prijzen, vlucht monitoring. Bel +31 6 341 458 06",
  keywords: ["taxi schiphol maarssen", "luchthaven taxi", "airport shuttle maarssen", "taxi naar schiphol"],
};

export default function LuchthavenvervoerPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-darkBg to-secondary/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">✈️</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Luchthavenvervoer vanuit <span className="text-primary">Maarssen</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stressvrij naar Schiphol, Rotterdam Airport of Eindhoven. 
              Wij houden uw vlucht in de gaten en zorgen dat u op tijd bent.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+31634145806" className="btn-primary">
                📞 Direct Boeken
              </a>
              <Link href="/#contact" className="glass-panel px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Online Reserveren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Waarom kiezen voor onze Airport Taxi?</h2>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">⏰</span>
                    Altijd op Tijd
                  </h3>
                  <p className="text-gray-400">
                    Wij monitoren uw vlucht en passen de ophaaltijd automatisch aan bij vertraging of vroege aankomst.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">💰</span>
                    Vaste Prijzen
                  </h3>
                  <p className="text-gray-400">
                    Geen verrassingen achteraf. U krijgt vooraf een vaste prijs, ongeacht verkeer of drukte.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">🚗</span>
                    Comfortabel Reizen
                  </h3>
                  <p className="text-gray-400">
                    Moderne, goed onderhouden auto's met ruimte voor uw bagage. Airconditioning en wifi beschikbaar.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">👨‍✈️</span>
                    Ervaren Chauffeurs
                  </h3>
                  <p className="text-gray-400">
                    Onze chauffeurs kennen de beste routes en zorgen voor een veilige, prettige reis.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                <Image 
                  src="/car.jpg" 
                  alt="MaarssenKimiaTaxi Airport Taxi"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Airports */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Wij Rijden naar Alle Grote Luchthavens</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-2xl font-bold mb-3">Schiphol Airport</h3>
                <p className="text-gray-400 mb-4">
                  De meest populaire route. Ongeveer 30 minuten vanuit Maarssen.
                </p>
                <div className="text-primary font-bold text-2xl">Vanaf €55</div>
              </div>

              <div className="glass-panel p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-2xl font-bold mb-3">Rotterdam The Hague Airport</h3>
                <p className="text-gray-400 mb-4">
                  Comfortabele rit naar Rotterdam Airport.
                </p>
                <div className="text-primary font-bold text-2xl">Vanaf €85</div>
              </div>

              <div className="glass-panel p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-2xl font-bold mb-3">Eindhoven Airport</h3>
                <p className="text-gray-400 mb-4">
                  Betrouwbaar vervoer naar het zuiden.
                </p>
                <div className="text-primary font-bold text-2xl">Vanaf €120</div>
              </div>
            </div>
          </div>

          {/* Service Info */}
          <div className="glass-panel p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold mb-6">Hoe Werkt Het?</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">1️⃣</div>
                <h4 className="font-semibold mb-2">Bel of Boek Online</h4>
                <p className="text-sm text-gray-400">Geef uw vluchtgegevens door</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">2️⃣</div>
                <h4 className="font-semibold mb-2">Ontvang Bevestiging</h4>
                <p className="text-sm text-gray-400">Met vaste prijs en ophaaltijd</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">3️⃣</div>
                <h4 className="font-semibold mb-2">Chauffeur Komt</h4>
                <p className="text-sm text-gray-400">Op afgesproken tijd en locatie</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">4️⃣</div>
                <h4 className="font-semibold mb-2">Reis Comfortabel</h4>
                <p className="text-sm text-gray-400">Ontspannen naar uw bestemming</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel p-12 rounded-2xl text-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-4xl font-bold mb-4">Klaar om te Vertrekken?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Boek nu uw betrouwbare airport taxi vanuit Maarssen
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+31634145806" className="btn-primary text-lg px-8 py-4">
                📞 +31 6 341 458 06
              </a>
              <a href="tel:+31687667013" className="glass-panel px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold">
                📞 +31 6 876 670 13
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
