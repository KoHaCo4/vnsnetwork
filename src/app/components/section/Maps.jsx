"use client";

import {
  IoLocation,
  IoCall,
  IoTime,
  IoLogoWhatsapp,
  IoNavigate,
} from "react-icons/io5";

export default function Maps() {
  const serviceAreas = [
    "Margoyoso",
    "Sukolilo",
    "Tayu",
    "Juwana",
    "Pati Kota",
    "Trangkil",
    "Wedarijaksa",
    "Winong",
    "Pucakwangi",
    "Batangan",
    "Jaken",
    "Jakenan",
    "Pati Selatan",
    "Pati Utara",
    "Gabus",
    "Kayen",
  ];

  const contactInfo = [
    {
      icon: IoLocation,
      title: "Alamat Kami",
      detail: "Jl. Raya Margoyoso, Pati, Jawa Tengah",
      description: "Pusat layanan instalasi WiFi Margoyoso",
    },
    {
      icon: IoCall,
      title: "Telepon",
      detail: "0889-5461-944",
      description: "Layanan pelanggan 24/7",
      link: "tel:085724733627",
    },
    {
      icon: IoLogoWhatsapp,
      title: "WhatsApp",
      detail: "0889-5461-944",
      description: "Konsultasi cepat & respon instan",
      link: "https://wa.me/628895461944",
    },
    {
      icon: IoTime,
      title: "Jam Operasional",
      detail: "24/7 Every Day",
      description: "Support teknis tersedia setiap saat",
    },
  ];

  return (
    <section
      id="maps"
      className="w-full py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#FDFDFD",
        background: "linear-gradient(135deg, #FDFDFD 0%, #F0F2FF 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5% w-64 h-64 bg-purple-100 rounded-full opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-5% w-72 h-72 bg-blue-100 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-100 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg mb-6">
            <div className="w-2 h-2 bg-[#3B448B] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium" style={{ color: "#262140" }}>
              Jangkauan Layanan
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#262140" }}
          >
            Cakupan Area{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Layanan Kami
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            Melayani pemasangan WiFi di Pati dan sekitarnya dengan jangkauan
            luas dan dukungan teknis yang responsif di seluruh area layanan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#262140" }}
              >
                Hubungi Kami
              </h3>
              <p
                className="text-lg mb-6"
                style={{ color: "#262140", opacity: 0.8 }}
              >
                Tim support kami siap membantu Anda kapan saja. Konsultasi
                gratis untuk pemasangan WiFi di lokasi Anda.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    contact.link ? "cursor-pointer hover:scale-105" : ""
                  }`}
                  style={{
                    backgroundColor: "#FDFDFD",
                    border: "1px solid #BABEDC",
                  }}
                  onClick={() =>
                    contact.link && window.open(contact.link, "_blank")
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B448B] to-[#7177B2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold text-lg"
                        style={{ color: "#262140" }}
                      >
                        {contact.title}
                      </h4>
                      <p className="font-semibold" style={{ color: "#3B448B" }}>
                        {contact.detail}
                      </p>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "#262140", opacity: 0.7 }}
                      >
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white shadow-lg">
              <h4 className="text-lg font-bold mb-2">Siap Dipasang?</h4>
              <p className="text-white/90 text-sm mb-4">
                Cek ketersediaan layanan di alamat Anda
              </p>
              <a
                href="https://wa.me/628895461944"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#3B448B] rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
              >
                <IoNavigate className="text-lg" />
                Cek Ketersediaan
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#BABEDC]">
              <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.190488505493!2d111.02496269999999!3d-6.623244799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e712b9fd933e647%3A0xe6ff579e65b4612c!2sVNS%20Network!5e0!3m2!1sid!2sid!4v1763994449019!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter saturate-110 contrast-110 brightness-105"
                ></iframe>
              </div>
            </div>

            {/* Map Controls & Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg">
                <h4
                  className="text-lg font-bold mb-3 flex items-center gap-2"
                  style={{ color: "#262140" }}
                >
                  <IoLocation className="text-[#3B448B]" />
                  Lokasi Kantor
                </h4>
                <p
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#3B448B" }}
                >
                  VNS Network Margoyoso
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#262140", opacity: 0.8 }}
                >
                  Jl. Raya Margoyoso, Kec. Margoyoso, Kab. Pati, Jawa Tengah
                  59154
                </p>
                <a
                  href="https://maps.google.com/?q=VNS+Network+Margoyoso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <IoNavigate className="text-sm" />
                  Buka di Google Maps
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg">
                <h4
                  className="text-lg font-bold mb-3"
                  style={{ color: "#262140" }}
                >
                  Informasi Layanan
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: "#262140", opacity: 0.8 }}>
                      Jangkauan Layanan:
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "#3B448B" }}
                    >
                      15+ Kecamatan
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#262140", opacity: 0.8 }}>
                      Waktu Response:
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "#3B448B" }}
                    >
                      1-2 Jam
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#262140", opacity: 0.8 }}>
                      Instalasi:
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "#3B448B" }}
                    >
                      1-3 Hari
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#262140", opacity: 0.8 }}>
                      Support:
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "#3B448B" }}
                    >
                      24/7 Tersedia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center p-8 rounded-3xl bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white shadow-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Siap Memasang WiFi?</h3>
              <p className="text-white/90">
                Konsultasi gratis dan survey lokasi tanpa biaya
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/628895461944"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#3B448B] rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                <IoLogoWhatsapp className="text-xl" />
                WhatsApp Sekarang
              </a>
              <a
                href="tel:085724733627"
                className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-[#3B448B] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <IoCall className="text-xl" />
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
