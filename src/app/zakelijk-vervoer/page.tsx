import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zakelijk Vervoer Maarssen - Professionele Taxi voor Bedrijven",
  description: "Betrouwbaar zakelijk vervoer in Maarssen. Discrete chauffeurs, comfortabele auto's, facturatie achteraf mogelijk. Perfect voor zakelijke afspraken, meetings en events. Bel +31 6 341 458 06",
  keywords: ["zakelijk vervoer maarssen", "business taxi", "corporate transport", "zakelijke taxi maarssen"],
};

export default function ZakelijkVervoerPage() {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center relative overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-darkBg to-primary/20"></div>
        
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl md:text-6xl mb-4 md:mb-6">💼</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Zakelijk Vervoer in <span className="text-primary">Maarssen</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-2">
              Professioneel vervoer voor u en uw klanten. Comfortabele auto's, 
              discrete chauffeurs en facturatie achteraf mogelijk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <a href="tel:+31634145806" className="btn-primary text-center w-full sm:w-auto">
                📞 Direct Contact
              </a>
              <Link href="/#contact" className="glass-panel px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center w-full sm:w-auto">
                Offerte Aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="relative group order-2 md:order-1">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
                <Image 
                  src="/car.jpg" 
                  alt="MaarssenKimiaTaxi Zakelijk Vervoer"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Waarom Zakelijk Vervoer bij Ons?</h2>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">🤝</span>
                    Professionele Uitstraling
                  </h3>
                  <p className="text-gray-400">
                    Maak indruk op uw klanten met representatief vervoer. Onze chauffeurs zijn netjes gekleed en discreet.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">📊</span>
                    Facturatie Achteraf
                  </h3>
                  <p className="text-gray-400">
                    Eenvoudige administratie met maandelijkse facturatie. Ideaal voor bedrijven met regelmatig vervoer.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">⚡</span>
                    Flexibel & Betrouwbaar
                  </h3>
                  <p className="text-gray-400">
                    Last-minute wijzigingen? Geen probleem. Wij passen ons aan uw agenda aan.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="text-3xl">🔒</span>
                    Discretie Gegarandeerd
                  </h3>
                  <p className="text-gray-400">
                    Vertrouwelijke gesprekken blijven vertrouwelijk. Onze chauffeurs zijn discreet en professioneel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Zakelijke Diensten</h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              <div className="glass-panel p-8 rounded-xl">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-3">Zakelijke Meetings</h3>
                <p className="text-gray-400 mb-4">
                  Vervoer naar vergaderingen, presentaties en zakelijke afspraken in heel Nederland.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Amsterdam Zuidas</li>
                  <li>✓ Utrecht Centrum</li>
                  <li>✓ Rotterdam</li>
                  <li>✓ Den Haag</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-3">Klanten Vervoer</h3>
                <p className="text-gray-400 mb-4">
                  Haal uw klanten op van luchthaven of station. Eerste indruk is belangrijk!
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Airport pickup</li>
                  <li>✓ Station transfer</li>
                  <li>✓ Hotel vervoer</li>
                  <li>✓ City tours</li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <div className="text-5xl mb-4">🎪</div>
                <h3 className="text-2xl font-bold mb-3">Evenementen</h3>
                <p className="text-gray-400 mb-4">
                  Vervoer voor beurzen, conferenties, teambuilding en bedrijfsfeesten.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ RAI Amsterdam</li>
                  <li>✓ Jaarbeurs Utrecht</li>
                  <li>✓ Ahoy Rotterdam</li>
                  <li>✓ Custom events</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="glass-panel p-4 md:p-8 rounded-2xl mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Voordelen voor Bedrijven</h2>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-semibold mb-2">Vaste Contactpersoon</h4>
                  <p className="text-sm text-gray-400">Een vast aanspreekpunt voor al uw vervoersbehoeften</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-semibold mb-2">Contractprijzen</h4>
                  <p className="text-sm text-gray-400">Aantrekkelijke tarieven bij regelmatig gebruik</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-semibold mb-2">Prioriteit bij Boekingen</h4>
                  <p className="text-sm text-gray-400">Ook op drukke momenten zijn wij beschikbaar</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="font-semibold mb-2">Ritadministratie</h4>
                  <p className="text-sm text-gray-400">Overzichtelijke rapportage van alle ritten</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel p-6 md:p-12 rounded-2xl text-center bg-gradient-to-br from-secondary/10 to-primary/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Zakelijk Contract Afsluiten?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-2">
              Neem contact op voor een persoonlijk gesprek en aantrekkelijke zakelijke tarieven
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <a href="tel:+31634145806" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-center">
                📞 +31 6 341 458 06
              </a>
              <a href="mailto:taxikimia@gmail.com" className="glass-panel px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/10 transition-colors text-base md:text-lg font-semibold w-full sm:w-auto text-center">
                ✉️ Email Ons
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
