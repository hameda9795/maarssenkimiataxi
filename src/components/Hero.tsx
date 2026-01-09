"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] md:min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-12 md:pb-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-darkBg to-secondary/20"></div>
      
      <div className="container-custom relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Betrouwbare Taxi Service
            <br />
            <span className="text-primary">In Maarssen</span>
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-normal px-2">
            24/7 bereikbaar voor luchthavenvervoer Schiphol, zakelijke ritten en city trips door heel Nederland.
          </h2>
          
          <div className="flex flex-col gap-3 md:gap-4 justify-center items-stretch md:items-center mb-8">
            <Link href="/#contact" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 text-center">
              Boek Nu
            </Link>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="tel:+31634145806"
                className="glass-panel px-6 py-3 md:py-4 rounded-lg hover:bg-white/10 transition-colors text-base md:text-lg font-semibold text-center"
              >
                📞 +31 6 341 458 06
              </Link>
              <Link 
                href="tel:+31687667013"
                className="glass-panel px-6 py-3 md:py-4 rounded-lg hover:bg-white/10 transition-colors text-base md:text-lg font-semibold text-center"
              >
                📞 +31 6 876 670 13
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16">
            <div className="glass-panel p-4 md:p-6 rounded-xl">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">✈️</div>
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Luchthavenvervoer</h3>
              <p className="text-sm md:text-base text-gray-400">Altijd op tijd naar Schiphol</p>
            </div>
            <div className="glass-panel p-4 md:p-6 rounded-xl">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">💼</div>
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">Zakelijk Vervoer</h3>
              <p className="text-sm md:text-base text-gray-400">Professioneel & discreet</p>
            </div>
            <div className="glass-panel p-4 md:p-6 rounded-xl">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🚗</div>
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">City Trips</h3>
              <p className="text-sm md:text-base text-gray-400">Ontdek Nederland in stijl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
