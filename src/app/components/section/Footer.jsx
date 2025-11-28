"use client";

import {
  IoLogoWhatsapp,
  IoCall,
  IoLocation,
  IoTime,
  IoMail,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Beranda", href: "#" },
    { name: "Layanan", href: "#services" },
    { name: "Paket", href: "#packages" },
    { name: "Tentang Kami", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  const services = [
    "Instalasi WiFi Rumah",
    "Jaringan UMKM",
    "Troubleshooting",
    "Maintenance",
    "Upgrade Jaringan",
    "Consultation",
  ];

  const contactInfo = [
    {
      icon: IoCall,
      text: "0889-5461-944",
      link: "tel:085724733627",
    },
    {
      icon: IoLogoWhatsapp,
      text: "0889-5461-944",
      link: "https://wa.me/628895461944",
    },
    {
      icon: IoLocation,
      text: "Jl. Raya Margoyoso, Pati, Jawa Tengah",
      link: "https://maps.google.com/?q=VNS+Network+Margoyoso",
    },
    {
      icon: IoTime,
      text: "24/7 Setiap Hari",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: IoLogoWhatsapp,
      name: "WhatsApp",
      link: "https://wa.me/628895461944",
      color: "#25D366",
    },
    {
      icon: IoLogoInstagram,
      name: "Instagram",
      link: "#",
      color: "#E4405F",
    },
    {
      icon: IoLogoFacebook,
      name: "Facebook",
      link: "#",
      color: "#1877F2",
    },
  ];

  return (
    <footer
      id="footer"
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: "#262140",
        background: "linear-gradient(135deg, #262140 0%, #3B448B 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), 
                                radial-gradient(circle at 75px 75px, rgba(255,255,255,0.3) 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                VNS<span className="text-[#7177B2]">Network</span>
              </h3>
              <p className="text-[#BABEDC] leading-relaxed">
                Penyedia layanan internet profesional untuk rumah dan UMKM di
                Margoyoso, Pati, dan sekitarnya. Koneksi stabil, harga
                terjangkau, layanan cepat.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{ backgroundColor: social.color }}
                  aria-label={social.name}
                >
                  <social.icon className="text-white text-lg" />
                </a>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white">Online 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#7177B2]">
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#BABEDC] hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#7177B2] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#7177B2]">
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-[#BABEDC] hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-default">
                    <div className="w-1 h-1 bg-[#7177B2] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-[#7177B2]">
              Kontak Kami
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7177B2] flex items-center justify-center flex-shrink-0 mt-1">
                    <contact.icon className="text-white text-sm" />
                  </div>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      target={
                        contact.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noopener noreferrer"
                      className="text-[#BABEDC] hover:text-white transition-colors duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-[#BABEDC]">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="tel:085724733627"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#7177B2] to-[#3B448B] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-center justify-center"
              >
                <IoLogoWhatsapp className="text-lg" />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#7177B2] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#BABEDC] text-sm text-center md:text-left">
              <p>
                &copy; {currentYear} VNS Network. All rights reserved. |
                <span className="text-white"> vnsnetwork.id</span>
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-[#BABEDC] hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#BABEDC] hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#BABEDC] hover:text-white transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="text-[#BABEDC] text-xs">
              Melayani pemasangan WiFi di Margoyoso, Sukolilo, Tayu, Juwana,
              Pati, dan sekitarnya
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/628895461944"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 animate-bounce"
        aria-label="Chat via WhatsApp"
      >
        <IoLogoWhatsapp className="text-white text-2xl" />
      </a>
    </footer>
  );
}
