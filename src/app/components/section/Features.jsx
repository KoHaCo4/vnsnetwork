"use client";

import {
  IoWifi,
  IoHeadset,
  IoCash,
  IoRocket,
  IoShieldCheckmark,
  IoStar,
} from "react-icons/io5";
import useInViewAnimation from "../hooks/useInViewAnimation";

export default function Features() {
  const { ref, isVisible } = useInViewAnimation();

  const features = [
    {
      icon: IoWifi,
      title: "Koneksi Stabil",
      description:
        "Kami menyediakan koneksi internet yang handal dengan uptime tinggi untuk memastikan Anda tetap terhubung kapan saja.",
      color: "#3B448B",
    },
    {
      icon: IoHeadset,
      title: "Layanan 24/7",
      description:
        "Tim dukungan kami siap membantu Anda kapan saja, siang atau malam, untuk memastikan pengalaman terbaik.",
      color: "#7177B2",
    },
    {
      icon: IoCash,
      title: "Harga Terjangkau",
      description:
        "Nikmati layanan internet berkualitas tinggi dengan harga yang bersaing dan paket yang sesuai kebutuhan Anda.",
      color: "#3B448B",
    },
    {
      icon: IoRocket,
      title: "Instalasi Cepat",
      description:
        "Proses instalasi yang efisien dan cepat, tim profesional kami akan menyelesaikan pemasangan dalam waktu singkat.",
      color: "#7177B2",
    },
    {
      icon: IoShieldCheckmark,
      title: "Garansi Layanan",
      description:
        "Dengan garansi layanan yang komprehensif, kami memastikan kepuasan dan keamanan investasi internet Anda.",
      color: "#3B448B",
    },
    {
      icon: IoStar,
      title: "Kualitas Terbaik",
      description:
        "Menggunakan perangkat berkualitas tinggi dan teknologi terkini untuk performa internet yang optimal.",
      color: "#7177B2",
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="w-full py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#FDFDFD",
        background:
          "linear-gradient(135deg, #FDFDFD 0%, #F0F2FF 50%, #FDFDFD 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-100 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg mb-6">
            <div className="w-2 h-2 bg-[#3B448B] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium" style={{ color: "#262140" }}>
              Keunggulan Layanan Kami
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#262140" }}
          >
            Mengapa Memilih{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kami?
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            Kami berkomitmen memberikan layanan terbaik dengan solusi lengkap
            untuk semua kebutuhan internet rumah dan bisnis Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden opacity-0 ${
                isVisible ? "animate-fadeIn" : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                backgroundColor: "#FDFDFD",
                border: "1px solid #BABEDC",
              }}
            >
              {/* Hover Effect Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, ${feature.color}15 100%)`,
                }}
              ></div>

              {/* Icon Container */}
              <div className="relative z-10">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg"
                  style={{
                    backgroundColor: feature.color,
                    background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}DD 100%)`,
                  }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                {/* Feature Content */}
                <h3
                  className="text-xl font-bold mb-4 text-center group-hover:translate-y-1 transition-transform duration-300"
                  style={{ color: "#262140" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="hidden md:block text-center leading-relaxed group-hover:translate-y-1 transition-transform duration-300"
                  style={{ color: "#262140", opacity: 0.8 }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div
                className="absolute top-0 right-0 w-12 h-12 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundColor: feature.color,
                  background: `linear-gradient(135deg, transparent 50%, ${feature.color} 50%)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#contact"
              className="px-8 py-4 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
              }}
            >
              Konsultasi Gratis
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 rounded-2xl transition-all duration-300 font-semibold text-lg hover:shadow-xl hover:scale-105"
              style={{
                borderColor: "#3B448B",
                color: "#3B448B",
              }}
            >
              Lihat Semua Layanan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
