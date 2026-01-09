import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 md:py-20" id="about">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block bg-primary/20 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Over Ons
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Uw Partner in <span className="text-primary">Mobiliteit</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
              MaarssenKimiaTaxi staat voor kwaliteit, stiptheid en comfort. Wij zijn meer dan alleen een taxibedrijf;
              wij zijn uw persoonlijke chauffeur op de weg.
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
              Met jarenlange ervaring in de branche begrijpen wij wat belangrijk is voor onze klanten.
              Of het nu gaat om een zakelijke rit naar de Zuidas, een vroege vlucht vanaf Schiphol,
              of veilig vervoer na een avond uit, onze gecertificeerde chauffeurs staan voor u klaar.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">2+</div>
                <div className="text-xs md:text-sm text-gray-400">Jaren Ervaring</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">1k+</div>
                <div className="text-xs md:text-sm text-gray-400">Tevreden Klanten</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-sm text-gray-400">Betrouwbaar</div>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
              <Image 
                src="/car.jpg" 
                alt="MaarssenKimiaTaxi - Toyota Auto"
                fill
                className="object-cover"
                priority
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Bottom shadow */}
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 md:h-10 bg-primary/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
