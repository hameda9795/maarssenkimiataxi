import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: "✈️",
      title: "Luchthavenvervoer",
      description:
        "Stressvrij naar Schiphol, Rotterdam Airport of Eindhoven. Wij houden uw vlucht in de gaten en zorgen dat u op tijd bent.",
      link: "/luchthavenvervoer",
    },
    {
      icon: "💼",
      title: "Zakelijk Vervoer",
      description:
        "Professioneel vervoer voor u en uw klanten. Comfortabele auto's, discrete chauffeurs en facturatie achteraf mogelijk.",
      link: "/zakelijk-vervoer",
    },
    {
      icon: "🌆",
      title: "City Trips",
      description:
        "Ontdek Nederland in stijl. Wij brengen u naar alle bezienswaardigheden in Amsterdam, Rotterdam, Den Haag en daarbuiten.",
      link: "/city-trips",
    },
  ];

  return (
    <section className="py-20" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Onze Diensten
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Waarmee kunnen we u <span className="text-secondary">helpen?</span>
          </h2>
          <p className="text-gray-400">
            Wij bieden een breed scala aan vervoersoplossingen op maat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link 
                href={service.link}
                className="inline-flex items-center text-primary hover:text-secondary transition-colors font-semibold"
              >
                Meer info <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
