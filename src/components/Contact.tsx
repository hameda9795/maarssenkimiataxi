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
    <section className="py-12 md:py-20" id="contact">
      <div className="container-custom px-4">
        <div className="glass-panel p-4 md:p-8 lg:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Neem Contact Op</h2>
              <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
                Heeft u vragen of speciale wensen? Wij staan 24/7 voor u klaar.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="text-2xl md:text-3xl">📞</div>
                  <div>
                    <div className="font-semibold mb-1 text-sm md:text-base">Bel Ons</div>
                    <div className="space-y-1">
                      <a href="tel:+31634145806" className="text-primary hover:underline block text-sm md:text-base">
                        +31 6 341 458 06
                      </a>
                      <a href="tel:+31687667013" className="text-primary hover:underline block text-sm md:text-base">
                        +31 6 876 670 13
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="text-2xl md:text-3xl">✉️</div>
                  <div>
                    <div className="font-semibold mb-1 text-sm md:text-base">Email Ons</div>
                    <a href="mailto:taxikimia@gmail.com" className="text-primary hover:underline text-sm md:text-base">
                      taxikimia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="text-2xl md:text-3xl">📍</div>
                  <div>
                    <div className="font-semibold mb-1 text-sm md:text-base">Locatie</div>
                    <span className="text-gray-400 text-sm md:text-base">Maarssen, Nederland</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-primary/10 rounded-xl">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Direct een rit nodig?</h3>
                <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  Boek nu online en ontvang direct een prijsopgave.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+31634145806" className="btn-primary inline-block text-center">
                    📞 Bel Nu
                  </a>
                  <a href="tel:+31687667013" className="glass-panel px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold inline-block text-center">
                    📞 Alternatief
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-glassBorder focus:border-primary focus:outline-none resize-none text-sm md:text-base"
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
