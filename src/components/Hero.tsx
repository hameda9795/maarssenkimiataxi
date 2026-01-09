"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-darkBg to-secondary/20"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Betrouwbare Taxi Service
            <br />
            <span className="text-primary">In Maarssen</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-normal">
            24/7 bereikbaar voor luchthavenvervoer Schiphol, zakelijke ritten en city trips door heel Nederland.
            Bel direct: +31 6 341 458 06 | +31 6 876 670 13
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#contact" className="btn-primary text-lg px-8 py-4">
              Boek Nu
            </Link>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="tel:+31634145806"
                className="glass-panel px-6 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
              >
                📞 +31 6 341 458 06
              </Link>
              <Link 
                href="tel:+31687667013"
                className="glass-panel px-6 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
              >
                📞 +31 6 876 670 13
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-panel p-6 rounded-xl">
              <div className="text-4xl mb-3">✈️</div>
              <h3 className="font-semibold text-lg mb-2">Luchthavenvervoer</h3>
              <p className="text-gray-400">Altijd op tijd naar Schiphol</p>
            </div>
            <div className="glass-panel p-6 rounded-xl">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-lg mb-2">Zakelijk Vervoer</h3>
              <p className="text-gray-400">Professioneel & discreet</p>
            </div>
            <div className="glass-panel p-6 rounded-xl">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-semibold text-lg mb-2">City Trips</h3>
              <p className="text-gray-400">Ontdek Nederland in stijl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
