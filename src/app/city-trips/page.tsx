import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "City Trips Maarssen - Ontdek Nederland met MaarssenKimiaTaxi",
  description: "Ontdek Nederland in stijl! City trips naar Amsterdam, Rotterdam, Den Haag en alle bezienswaardigheden. Persoonlijke chauffeur, flexibele routes. Bel +31 6 341 458 06",
  keywords: ["city trips maarssen", "taxi tours", "rondleiding nederland", "dagje uit taxi"],
};

export default function CityTripsPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-darkBg to-secondary/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🌆</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              City Trips door <span className="text-primary">Nederland</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ontdek Nederland in stijl. Wij brengen u naar alle bezienswaardigheden 
              in Amsterdam, Rotterdam, Den Haag en daarbuiten.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+31634145806" className="btn-primary">
                📞 Plan Uw Trip
              </a>
              <Link href="/#contact" className="glass-panel px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Meer Informatie
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
              <h2 className="text-4xl font-bold mb-6">Uw Persoonlijke Chauffeur</h2>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">🗺️</span>
                    Flexibele Routes
                  </h3>
                  <p className="text-gray-400">
                    U bepaalt waar u naartoe wilt. Wijzig onderweg van plan? Geen probleem!
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">📸</span>
                    Fotostops Mogelijk
                  </h3>
                  <p className="text-gray-400">
                    Stop waar u wilt voor die perfecte foto. Uw chauffeur wacht geduldig.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">👨‍🏫</span>
                    Lokale Kennis
                  </h3>
                  <p className="text-gray-400">
                    Onze chauffeurs kennen de beste plekken en kunnen tips geven over lokale hotspots.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">👨‍👩‍👧‍👦</span>
                    Geschikt voor Groepen
                  </h3>
                  <p className="text-gray-400">
                    Perfect voor gezinsuitjes, vriendengroepen of toeristen die Nederland willen ontdekken.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                <Image 
                  src="/car.jpg" 
                  alt="MaarssenKimiaTaxi City Trips"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Populaire Bestemmingen</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="glass-panel p-6 rounded-xl text-center hover:bg-white/5 transition-all">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="text-xl font-bold mb-2">Amsterdam</h3>
                <p className="text-sm text-gray-400">Grachten, musea, centrum</p>
              </div>

              <div className="glass-panel p-6 rounded-xl text-center hover:bg-white/5 transition-all">
                <div className="text-4xl mb-3">🌉</div>
                <h3 className="text-xl font-bold mb-2">Rotterdam</h3>
                <p className="text-sm text-gray-400">Moderne architectuur, haven</p>
              </div>

              <div className="glass-panel p-6 rounded-xl text-center hover:bg-white/5 transition-all">
                <div className="text-4xl mb-3">🏰</div>
                <h3 className="text-xl font-bold mb-2">Den Haag</h3>
                <p className="text-sm text-gray-400">Binnenhof, Scheveningen</p>
              </div>

              <div className="glass-panel p-6 rounded-xl text-center hover:bg-white/5 transition-all">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="text-xl font-bold mb-2">Utrecht</h3>
                <p className="text-sm text-gray-400">Domtoren, grachten, winkels</p>
              </div>
            </div>
          </div>

          {/* Tour Packages */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Voorbeeld Tours</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-xl">
                <div className="text-5xl mb-4">🌷</div>
                <h3 className="text-2xl font-bold mb-3">Klassiek Amsterdam</h3>
                <p className="text-gray-400 mb-4">
                  4 uur tour door Amsterdam met stops bij Rijksmuseum, Anne Frank Huis, grachten en Dam.
                </p>
                <div className="text-primary font-bold text-xl mb-4">€180 (max 4 personen)</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ 4 uur rondleiding</li>
                  <li>✓ Alle stops naar wens</li>
                  <li>✓ Fotomomenten</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <div className="text-5xl mb-4">🧀</div>
                <h3 className="text-2xl font-bold mb-3">Hollands Platteland</h3>
                <p className="text-gray-400 mb-4">
                  5 uur tour: Zaanse Schans, Volendam, Marken. Echte Hollandse ervaring!
                </p>
                <div className="text-primary font-bold text-xl mb-4">€220 (max 4 personen)</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ 5 uur tour</li>
                  <li>✓ Windmolens bezoek</li>
                  <li>✓ Vissersplaatsjes</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3">Cultuur Route</h3>
                <p className="text-gray-400 mb-4">
                  Hele dag tour: Rotterdam, Den Haag, Delft. Moderne en klassieke architectuur.
                </p>
                <div className="text-primary font-bold text-xl mb-4">€350 (max 4 personen)</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ 8 uur tour</li>
                  <li>✓ 3 steden</li>
                  <li>✓ Lunch stop inclusief</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400">
                <strong>Custom tours mogelijk!</strong> Vertel ons uw wensen en wij maken een op maat gemaakte route.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="glass-panel p-8 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold mb-6">Wat u Kunt Verwachten</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">✓ Inclusief</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-3"><span>✓</span> Chauffeur voor de hele rit</li>
                  <li className="flex gap-3"><span>✓</span> Brandstof en parkeerkosten</li>
                  <li className="flex gap-3"><span>✓</span> Wifi in de auto</li>
                  <li className="flex gap-3"><span>✓</span> Water en tissues</li>
                  <li className="flex gap-3"><span>✓</span> Flexibele stops</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">ℹ️ Extra Info</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex gap-3"><span>•</span> Tours starten vanuit Maarssen</li>
                  <li className="flex gap-3"><span>•</span> Ook ophalen op andere locaties mogelijk</li>
                  <li className="flex gap-3"><span>•</span> Entreekosten attracties niet inbegrepen</li>
                  <li className="flex gap-3"><span>•</span> Reserveren minimaal 24u van tevoren</li>
                  <li className="flex gap-3"><span>•</span> Annuleren tot 12u gratis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel p-12 rounded-2xl text-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-4xl font-bold mb-4">Plan Uw Perfecte City Trip!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Bel ons om een op maat gemaakte tour te bespreken
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
