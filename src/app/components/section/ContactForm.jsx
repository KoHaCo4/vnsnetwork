"use client";

import { useState } from "react";
import {
  IoSend,
  IoCall,
  IoLogoWhatsapp,
  IoLocation,
  IoTime,
  IoMail,
  IoCheckmarkCircle,
} from "react-icons/io5";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: IoCall,
      title: "Telepon",
      detail: "0889-5461-944",
      description: "Langsung berbicara dengan tim kami",
      link: "tel:085724733627",
      color: "#3B448B",
    },
    {
      icon: IoLogoWhatsapp,
      title: "WhatsApp",
      detail: "0889-5461-944",
      description: "Respon cepat via chat",
      link: "https://wa.me/628895461944",
      color: "#25D366",
    },
    {
      icon: IoLocation,
      title: "Alamat",
      detail: "Margoyoso, Pati",
      description: "Jl. Raya Margoyoso",
      link: "https://maps.google.com/?q=VNS+Network+Margoyoso",
      color: "#7177B2",
    },
    {
      icon: IoTime,
      title: "Jam Operasional",
      detail: "24/7 Setiap Hari",
      description: "Support teknis tersedia",
      color: "#3B448B",
    },
  ];

  const services = [
    "Paket Home Lite",
    "Paket Home Basic",
    "Paket Business Pro",
    "Konsultasi Gratis",
    "Laporan Gangguan",
    "Lainnya",
  ];

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="w-full py-20 relative overflow-hidden"
        style={{
          backgroundColor: "#FDFDFD",
          background: "linear-gradient(135deg, #FDFDFD 0%, #F0F2FF 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-2xl border border-[#BABEDC] p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <IoCheckmarkCircle className="text-green-600 text-4xl" />
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#262140" }}
            >
              Terima Kasih!
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "#262140", opacity: 0.8 }}
            >
              Pesan Anda telah berhasil dikirim. Tim kami akan menghubungi Anda
              dalam 1-2 jam kerja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Kirim Pesan Lain
              </button>
              <a
                href="https://wa.me/628895461944"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  borderColor: "#3B448B",
                  color: "#3B448B",
                }}
              >
                <IoLogoWhatsapp className="text-lg" />
                Chat Langsung
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#FDFDFD",
        background: "linear-gradient(135deg, #FDFDFD 0%, #F0F2FF 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10% w-64 h-64 bg-purple-100 rounded-full opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10% w-72 h-72 bg-blue-100 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg mb-6">
            <div className="w-2 h-2 bg-[#3B448B] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium" style={{ color: "#262140" }}>
              Konsultasi & Support
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#262140" }}
          >
            Hubungi{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kami
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            Tim support kami siap membantu menjawab pertanyaan dan memberikan
            solusi terbaik untuk kebutuhan internet Anda.
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
                Kontak Langsung
              </h3>
              <p
                className="text-lg mb-6"
                style={{ color: "#262140", opacity: 0.8 }}
              >
                Hubungi kami melalui berbagai channel yang tersedia untuk respon
                tercepat.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 hidden md:block">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    method.link ? "cursor-pointer hover:scale-105" : ""
                  }`}
                  style={{
                    backgroundColor: "#FDFDFD",
                    border: "1px solid #BABEDC",
                  }}
                  onClick={() =>
                    method.link && window.open(method.link, "_blank")
                  }
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: method.color }}
                    >
                      <method.icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-semibold text-lg"
                        style={{ color: "#262140" }}
                      >
                        {method.title}
                      </h4>
                      <p className="font-semibold" style={{ color: "#3B448B" }}>
                        {method.detail}
                      </p>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "#262140", opacity: 0.7 }}
                      >
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white text-center">
              <h4 className="text-lg font-bold mb-2">Response Time</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold">1-2</div>
                  <div>Jam (WhatsApp)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15</div>
                  <div>Menit (Telepon)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-3 font-semibold text-lg"
                    style={{ color: "#262140" }}
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B448B] transition-all duration-300"
                    style={{
                      borderColor: "#BABEDC",
                      backgroundColor: "#FDFDFD",
                    }}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-3 font-semibold text-lg"
                    style={{ color: "#262140" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B448B] transition-all duration-300"
                    style={{
                      borderColor: "#BABEDC",
                      backgroundColor: "#FDFDFD",
                    }}
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-3 font-semibold text-lg"
                    style={{ color: "#262140" }}
                  >
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B448B] transition-all duration-300"
                    style={{
                      borderColor: "#BABEDC",
                      backgroundColor: "#FDFDFD",
                    }}
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block mb-3 font-semibold text-lg"
                    style={{ color: "#262140" }}
                  >
                    Jenis Layanan
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B448B] transition-all duration-300"
                    style={{
                      borderColor: "#BABEDC",
                      backgroundColor: "#FDFDFD",
                    }}
                  >
                    <option value="">Pilih layanan...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-3 font-semibold text-lg"
                  style={{ color: "#262140" }}
                >
                  Pesan Anda *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B448B] transition-all duration-300 resize-none"
                  style={{
                    borderColor: "#BABEDC",
                    backgroundColor: "#FDFDFD",
                  }}
                  placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <IoSend className="text-xl" />
                      Kirim Pesan
                    </>
                  )}
                </button>

                <div className="text-center sm:text-right">
                  <p
                    className="text-sm"
                    style={{ color: "#262140", opacity: 0.7 }}
                  >
                    Atau hubungi langsung
                  </p>
                  <a
                    href="https://wa.me/628895461944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 text-sm font-semibold"
                    style={{ color: "#3B448B" }}
                  >
                    <IoLogoWhatsapp className="text-lg" />
                    WhatsApp Sekarang
                  </a>
                </div>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center hidden md:block">
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC]">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#3B448B" }}
                >
                  24/7
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#262140", opacity: 0.8 }}
                >
                  Support
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC]">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#3B448B" }}
                >
                  1-2
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#262140", opacity: 0.8 }}
                >
                  Jam Response
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC]">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#3B448B" }}
                >
                  100%
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#262140", opacity: 0.8 }}
                >
                  Gratis Konsultasi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
