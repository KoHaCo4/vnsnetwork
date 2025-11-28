"use client";

import {
  IoWifi,
  IoFlash,
  IoRocket,
  IoStar,
  IoCheckmarkCircle,
  IoPlayCircle,
  IoPeople,
} from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate-fadeInUp",
            "opacity-0",
            "delay-200"
          );
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Jangan render animasi yang kompleks selama SSR
  if (!isMounted) {
    return (
      <section
        className="w-full min-h-screen flex items-center relative overflow-hidden pt-20 opacity-0"
        style={{
          background:
            "linear-gradient(135deg, #FDFDFD 0%, #BABEDC 50%, #F0F2FF 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Simplified content for SSR */}
            <div className="space-y-8">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ color: "#262140" }}
              >
                Koneksi Stabil, Harga Terjangkau, Layanan Cepat
              </h1>
              <p
                className="text-sm md:text-2xl leading-relaxed max-w-2xl"
                style={{ color: "#262140", opacity: 0.8 }}
              >
                Solusi internet profesional untuk rumah & UMKM dengan instalasi
                jaringan WiFi yang handal dan dukungan teknis 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="#home"
      className="w-full min-h-screen flex items-center relative overflow-hidden pt-20 pb-10"
      style={{
        background:
          "linear-gradient(135deg, #FDFDFD 0%, #BABEDC 50%, #F0F2FF 100%)",
      }}
    >
      {/* Background Elements - Simplified untuk menghindari hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fadeIn order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg">
              <div className="w-2 h-2 bg-[#3B448B] rounded-full"></div>
              <span
                className="text-sm font-medium"
                style={{ color: "#262140" }}
              >
                🚀 Partner Internet Terpercaya di Margoyoso
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{ color: "#262140" }}
            >
              Koneksi{" "}
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stabil
              </span>
              ,{" "}
              <span
                className="inline-block mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, #7177B2 0%, #3B448B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Harga Terjangkau
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl md:text-2xl leading-relaxed max-w-2xl"
              style={{ color: "#262140", opacity: 0.8 }}
            >
              Solusi internet profesional untuk{" "}
              <span className="font-semibold" style={{ color: "#3B448B" }}>
                rumah & UMKM
              </span>{" "}
              dengan instalasi jaringan WiFi yang handal dan dukungan teknis
              24/7.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              {[
                { icon: IoWifi, text: "Koneksi Stabil & Cepat" },
                { icon: IoFlash, text: "Instalasi Profesional" },
                { icon: IoRocket, text: "Dukungan 24/7" },
                { icon: IoStar, text: "Harga Terjangkau" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-[#BABEDC] flex items-center justify-center">
                    <feature.icon
                      className="text-lg"
                      style={{ color: "#3B448B" }}
                    />
                  </div>
                  <span className="font-medium" style={{ color: "#262140" }}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 text-white rounded-2xl shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                }}
              >
                <IoFlash className="text-xl" />
                Konsultasi Gratis
              </a>

              <a
                href="#services"
                className="px-8 py-4 border-2 rounded-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 backdrop-blur-sm bg-white/50"
                style={{
                  borderColor: "#3B448B",
                  color: "#3B448B",
                }}
              >
                <IoPlayCircle className="text-xl" />
                Lihat Layanan
              </a>
            </div>

            {/* Location */}
            <p
              className="text-sm flex items-center justify-center sm:justify-start gap-2"
              style={{ color: "#262140", opacity: 0.6 }}
            >
              <IoCheckmarkCircle style={{ color: "#3B448B" }} />
              Layanan tersedia untuk area Margoyoso, Pati, dan sekitarnya.
            </p>
          </div>

          {/* Visual Content */}
          <div
            className="relative opacity-0 animate-fadeIn order-1 lg:order-2 mt-8 md:mt-0"
            style={{ animationDelay: "300ms" }}
          >
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
              {/* WiFi Signal */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3B448B] to-[#7177B2] rounded-full flex items-center justify-center shadow-lg">
                  <IoWifi className="text-2xl text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 text-center space-y-6">
                <h3 className="text-2xl font-bold" style={{ color: "#262140" }}>
                  Paket Home Basic
                </h3>
                <div className="space-y-2">
                  <div
                    className="text-4xl font-bold"
                    style={{ color: "#3B448B" }}
                  >
                    Rp 165.000
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "#262140", opacity: 0.7 }}
                  >
                    /bulan
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 text-left">
                  {[
                    "Kecepatan hingga 10 Mbps",
                    "Instalasi gratis",
                    "Unlimited data tanpa FUP",
                    "Support 24/7",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IoCheckmarkCircle className="text-green-600 text-sm" />
                      </div>
                      <span className="text-sm" style={{ color: "#262140" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-xl font-semibold shadow-lg transition-all duration-300">
                  Pasang Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "100+", label: "Klien Terpasang", icon: IoPeople },
            { number: "24/7", label: "Dukungan Teknis", icon: IoFlash },
            { number: "99%", label: "Kepuasan Pelanggan", icon: IoStar },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm bg-white/60"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3B448B] to-[#7177B2] flex items-center justify-center">
                <stat.icon className="text-2xl text-white" />
              </div>
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: "#3B448B" }}
              >
                {stat.number}
              </div>
              <div className="font-medium text-lg" style={{ color: "#262140" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
