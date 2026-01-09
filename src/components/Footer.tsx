import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkBg border-t border-glassBorder py-8 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Maarssen</span>
              <span className="text-primary">Kimia</span>
              <span className="text-white">Taxi</span>
            </h3>
            <p className="text-gray-400">
              Uw betrouwbare taxi service in Maarssen en omstreken.
              Kwaliteit, stiptheid en comfort sinds 2022.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="text-primary">📞</span> +31 6 341 458 06
              </li>
              <li>
                <span className="text-primary">📞</span> +31 6 876 670 13
              </li>
              <li>
                <span className="text-primary">✉️</span> kimiataxi@maarssen.nl
              </li>
              <li>
                <span className="text-primary">📍</span> Maarssen, Nederland
              </li>
              <li>
                <span className="text-primary">🏢</span> KVK: 97710504
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-glassBorder text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MaarssenKimiaTaxi. Alle rechten voorbehouden.</p>
          <p className="text-sm mt-2">KVK: 97710504</p>
        </div>
      </div>
    </footer>
  );
}
