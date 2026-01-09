"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert("Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20" id="contact">
      <div className="container-custom">
        <div className="glass-panel p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Neem Contact Op</h2>
              <p className="text-gray-400 mb-8">
                Heeft u vragen of speciale wensen? Wij staan 24/7 voor u klaar.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <div className="font-semibold mb-1">Bel Ons</div>
                    <div className="space-y-1">
                      <a href="tel:+31634145806" className="text-primary hover:underline block">
                        +31 6 341 458 06
                      </a>
                      <a href="tel:+31687667013" className="text-primary hover:underline block">
                        +31 6 876 670 13
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <div className="font-semibold mb-1">Email Ons</div>
                    <a href="mailto:kimiataxi@maarssen.nl" className="text-primary hover:underline">
                      kimiataxi@maarssen.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <div className="font-semibold mb-1">Locatie</div>
                    <span className="text-gray-400">Maarssen, Nederland</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Direct een rit nodig?</h3>
                <p className="text-gray-400 mb-4">
                  Boek nu online en ontvang direct een prijsopgave.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href="tel:+31634145806" className="btn-primary inline-block">
                    📞 Bel Nu
                  </a>
                  <a href="tel:+31687667013" className="glass-panel px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold inline-block">
                    📞 Alternatief
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Verstuur Bericht
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
