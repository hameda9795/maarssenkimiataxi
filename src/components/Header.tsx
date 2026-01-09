"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-panel">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">Maarssen</span>
            <span className="text-primary">Kimia</span>
            <span className="text-white">Taxi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              Over Ons
            </Link>
            <Link href="/services" className="hover:text-primary transition-colors">
              Diensten
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-xs text-gray-400">
              <span className="block">KVK</span>
              <span className="font-semibold text-primary">97710504</span>
            </div>
            <Link href="/#contact" className="btn-primary">
              Boek Nu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Over Ons
            </Link>
            <Link
              href="/services"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Diensten
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/#contact"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Boek Nu
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
