"use client";

import { useState } from "react";
import {
  IoChevronDown,
  IoChevronUp,
  IoHelpCircle,
  IoChatbubbleEllipses,
  IoCall,
  IoTime,
} from "react-icons/io5";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Apa itu VNS Network?",
      answer:
        "VNS Network adalah penyedia layanan internet profesional yang khusus melayani pemasangan WiFi untuk rumah dan UMKM di area Margoyoso, Pati, dan sekitarnya. Kami menyediakan koneksi internet yang cepat, stabil, dan terjangkau dengan dukungan teknis 24/7.",
    },
    {
      question: "Bagaimana cara mendaftar layanan?",
      answer:
        "Anda bisa mendaftar dengan 3 cara mudah: (1) Hubungi kami via WhatsApp di 0889-5461-944, (2) Kunjungi website kami dan isi form konsultasi, atau (3) Datang langsung ke lokasi kami. Tim sales akan memandu proses pendaftaran hingga instalasi.",
    },
    {
      question: "Apakah ada biaya pemasangan?",
      answer:
        "Untuk paket tertentu, kami memberikan GRATIS biaya pemasangan. Biaya pemasangan bervariasi tergantung paket yang dipilih dan kondisi lokasi. Informasi detail tentang biaya akan diberikan secara transparan sebelum pemasangan.",
    },
    {
      question: "Berapa lama proses instalasi?",
      answer:
        "Proses instalasi biasanya memakan waktu 1-3 jam tergantung kompleksitas lokasi. Setelah pemesanan, tim teknik kami akan menjadwalkan kunjungan dalam 1-2 hari kerja untuk survey dan instalasi.",
    },
    {
      question: "Apa saja yang termasuk dalam paket layanan?",
      answer:
        "Semua paket kami termasuk: router WiFi, kabel instalasi, pemasangan oleh teknisi profesional, setting jaringan, dan dukungan teknis 24/7. Untuk paket tertentu juga termasuk garansi perangkat dan maintenance rutin.",
    },
    {
      question: "Bagaimana jika ada gangguan koneksi?",
      answer:
        "Kami menyediakan layanan support 24/7 via WhatsApp dan telepon. Jika terjadi gangguan, tim teknis kami akan merespon dalam 1-2 jam dan melakukan troubleshooting. Untuk gangguan berat, teknisi akan datang ke lokasi maksimal 24 jam setelah laporan.",
    },
    {
      question: "Apakah ada kontrak berlangganan?",
      answer:
        "Ya, kami memiliki sistem berlangganan bulanan dengan minimal kontrak 3 bulan. Setelah periode kontrak berakhir, Anda bisa berhenti kapan saja tanpa biaya penalty. Pembayaran dapat dilakukan secara bulanan atau tahunan.",
    },
    {
      question: "Apakah tersedia paket untuk bisnis/UMKM?",
      answer:
        "Tentu! Kami memiliki paket khusus untuk UMKM dengan kecepatan lebih tinggi, dedicated support, dan fitur tambahan seperti static IP dan enhanced security. Silakan konsultasi dengan tim kami untuk paket yang sesuai kebutuhan bisnis Anda.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const supportOptions = [
    {
      icon: IoChatbubbleEllipses,
      title: "Chat WhatsApp",
      description: "Respon cepat 24/7",
      contact: "0889-5461-944",
      link: "https://wa.me/628895461944",
    },
    {
      icon: IoCall,
      title: "Telepon Langsung",
      description: "Bantuan teknis",
      contact: "0889-5461-944",
      link: "tel:085724733627",
    },
    {
      icon: IoTime,
      title: "Jam Operasional",
      description: "Support 24 jam",
      contact: "Setiap Hari",
      link: null,
    },
  ];

  return (
    <section
      id="faq"
      className="w-full py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#FDFDFD",
        background: "linear-gradient(135deg, #FDFDFD 0%, #F0F2FF 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10% w-56 h-56 bg-purple-100 rounded-full opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10% w-64 h-64 bg-blue-100 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg mb-6">
            <div className="w-2 h-2 bg-[#3B448B] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium" style={{ color: "#262140" }}>
              Bantuan & Support
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#262140" }}
          >
            Pertanyaan yang{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sering Ditanyakan
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            Temukan jawaban untuk pertanyaan umum seputar layanan, instalasi,
            dan dukungan teknis VNS Network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: "#FDFDFD",
                    border: "1px solid #BABEDC",
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B448B] to-[#7177B2] flex items-center justify-center flex-shrink-0">
                        <IoHelpCircle className="text-white text-lg" />
                      </div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "#262140" }}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 transition-transform duration-300">
                      {openIndex === index ? (
                        <IoChevronUp className="text-[#3B448B] text-xl" />
                      ) : (
                        <IoChevronDown className="text-[#3B448B] text-xl" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#3B448B] to-[#7177B2] mb-4"></div>
                      <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#262140", opacity: 0.8 }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Help Text */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white text-center">
              <p className="text-lg font-semibold">
                Tidak menemukan jawaban yang Anda cari?
              </p>
              <p className="opacity-90 mt-2">
                Tim support kami siap membantu menyelesaikan pertanyaan dan
                masalah Anda
              </p>
            </div>
          </div>

          {/* Support Options */}
          <div className="hidden md:block space-y-6">
            <div className="text-center lg:text-left">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#262140" }}
              >
                Butuh Bantuan Langsung?
              </h3>
              <p
                className="text-lg mb-8"
                style={{ color: "#262140", opacity: 0.8 }}
              >
                Hubungi kami melalui berbagai channel support yang tersedia
              </p>
            </div>

            <div className="space-y-6">
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: "#FDFDFD",
                    border: "1px solid #BABEDC",
                  }}
                  onClick={() =>
                    option.link && window.open(option.link, "_blank")
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B448B] to-[#7177B2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <option.icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold text-lg"
                        style={{ color: "#262140" }}
                      >
                        {option.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "#262140", opacity: 0.7 }}
                      >
                        {option.description}
                      </p>
                      <p
                        className="font-semibold mt-1"
                        style={{ color: "#3B448B" }}
                      >
                        {option.contact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg">
              <h4
                className="font-bold text-lg mb-3"
                style={{ color: "#262140" }}
              >
                Konsultasi Gratis
              </h4>
              <p
                className="text-sm mb-4"
                style={{ color: "#262140", opacity: 0.8 }}
              >
                Dapatkan penawaran terbaik untuk kebutuhan internet Anda
              </p>
              <a
                href="https://wa.me/628895461944"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Hubungi Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <IoHelpCircle className="text-green-600 text-lg" />
              </div>
              <span className="font-semibold" style={{ color: "#262140" }}>
                Masih ada pertanyaan?
              </span>
            </div>
            <a
              href="https://wa.me/628895461944"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Tanya Langsung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
