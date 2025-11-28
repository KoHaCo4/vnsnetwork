"use client";

import {
  IoCheckmarkCircle,
  IoRocket,
  IoStar,
  IoHome,
  IoBusiness,
  IoFlash,
} from "react-icons/io5";
import useInViewAnimation from "../hooks/useInViewAnimation";

export default function Packages() {
  const { ref, isVisible } = useInViewAnimation();
  const packages = [
    {
      name: "Paket Home Lite",
      description:
        "Cocok untuk penggunaan rumahan dengan kebutuhan dasar internet seperti browsing, media sosial, dan streaming video SD.",
      price: "Rp 100.000",
      period: "/ bulan",
      features: [
        "Kecepatan hingga 5 Mbps",
        "Efektif untuk 2-4 perangkat",
        "Unlimited data tanpa FUP",
        "Browsing & media sosial",
        "Support 24/7",
        ,
      ],
      popular: false,
      icon: IoHome,
      color: "#7177B2",
    },
    {
      name: "Paket Home Basic",
      description:
        "Ideal untuk keluarga dengan multiple devices, streaming HD, dan work from home yang nyaman.",
      price: "Rp 165.000",
      period: "/ bulan",
      features: [
        "Kecepatan hingga 10 Mbps",
        "Efektif untuk 5-8 perangkat",
        "Streaming video HD",
        "Gaming online",
        "Video conference",
        "Prioritas support 24/7",
        "Instalasi gratis",
      ],
      popular: true,
      icon: IoRocket,
      color: "#3B448B",
    },
    {
      name: "Paket Home Stream",
      description:
        "Solusi terbaik untuk UMKM dengan kebutuhan koneksi tinggi, server, dan multiple users.",
      price: "Rp 200.000",
      period: "/ bulan",
      features: [
        "Kecepatan hingga 20 Mbps",
        "Unlimited perangkat",
        "Streaming 4K & gaming",
        "Priority support 24/7",
        "Unlimited data tanpa FUP",
        "Instalasi gratis",
        "Advanced security",
        "Professional installation",
      ],
      popular: false,
      icon: IoBusiness,
      color: "#7177B2",
    },
  ];

  return (
    <section
      id="packages"
      ref={ref}
      className="w-full py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#FDFDFD",
        background: "linear-gradient(135deg, #FDFDFD 0%, #F0F2FF 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-5% w-48 h-48 bg-purple-100 rounded-full opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-5% w-56 h-56 bg-blue-100 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-100 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg mb-6">
            <div className="w-2 h-2 bg-[#3B448B] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium" style={{ color: "#262140" }}>
              Pilihan Paket Terbaik
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#262140" }}
          >
            Paket Layanan{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Internet
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket termasuk
            instalasi gratis dan dukungan teknis 24/7 untuk pengalaman internet
            terbaik.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                pkg.popular
                  ? "transform md:scale-110 md:translate-y-10"
                  : "order-1 md:order-none"
              } lg:opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}
              style={{
                animationDelay: `${index * 200}ms`,
                backgroundColor: "#FDFDFD",
                border: pkg.popular ? "2px solid #3B448B" : "1px solid #BABEDC",
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div
                  className="absolute text-center -top-15 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-white font-semibold text-sm shadow-lg"
                  style={{ backgroundColor: "#3B448B" }}
                >
                  ⭐ Best Seller ⭐
                </div>
              )}

              {/* Header Section */}
              <div
                className="p-8 rounded-t-3xl text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}DD 100%)`,
                }}
              >
                <div className="absolute top-4 right-4 opacity-20">
                  <pkg.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">
                  {pkg.name}
                </h3>
                <p className="text-white/80 text-center text-sm">
                  {pkg.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="p-6 text-center border-b border-[#BABEDC]">
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: "#262140" }}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className="text-lg"
                    style={{ color: "#262140", opacity: 0.7 }}
                  >
                    {pkg.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IoCheckmarkCircle className="text-green-600 text-sm" />
                      </div>
                      <span
                        className="text-left"
                        style={{ color: "#262140", opacity: 0.9 }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/628895461944?text=Halo, saya tertarik dengan ${pkg.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 text-center rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white hover:scale-105"
                      : "border-2 hover:bg-[#3B448B] hover:text-white"
                  }`}
                >
                  {pkg.popular ? "Pasang Sekarang" : "Pilih Paket"}
                </a>
              </div>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${pkg.color}15 0%, transparent 50%)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-22 ">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <IoCheckmarkCircle className="text-green-600 text-lg" />
              </div>
              <span style={{ color: "#262140" }}>Garansi 30 hari</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <IoFlash className="text-blue-600 text-lg" />
              </div>
              <span style={{ color: "#262140" }}>Instalasi 1-2 jam</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <IoStar className="text-purple-600 text-lg" />
              </div>
              <span style={{ color: "#262140" }}>Kualitas terjamin</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p
            className="text-lg mb-6"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            Butuh paket khusus atau konsultasi gratis?
          </p>
          <a
            href="https://wa.me/628895461944"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105"
          >
            <IoFlash className="text-xl" />
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
