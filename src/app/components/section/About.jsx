import {
  IoRocket,
  IoShieldCheckmark,
  IoPeople,
  IoStar,
  IoCheckmarkCircle,
  IoFlash,
} from "react-icons/io5";

export default function About() {
  const stats = [
    { number: "3+", label: "Tahun Pengalaman", icon: IoRocket },
    { number: "100+", label: "Klien Terpasang", icon: IoPeople },
    { number: "24/7", label: "Dukungan Teknis", icon: IoShieldCheckmark },
    { number: "99%", label: "Kepuasan Pelanggan", icon: IoStar },
  ];

  const values = [
    {
      icon: IoShieldCheckmark,
      title: "Keandalan",
      description:
        "Kami menjamin koneksi stabil dengan uptime 99.9% dan monitoring 24/7",
    },
    {
      icon: IoFlash,
      title: "Kecepatan",
      description:
        "Teknologi fiber optic terbaru untuk performa internet tercepat",
    },
    {
      icon: IoPeople,
      title: "Pelayanan",
      description: "Tim support siap membantu kapan saja dengan respon cepat",
    },
    {
      icon: IoStar,
      title: "Kualitas",
      description:
        "Hanya menggunakan perangkat berkualitas tinggi dan terpercaya",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#FDFDFD",
        background: "linear-gradient(135deg, #FDFDFD 0%, #F0F2FF 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 w-64 h-64 bg-purple-100 rounded-full opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-4 w-72 h-72 bg-blue-100 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-100 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#BABEDC] shadow-lg mb-6">
            <div className="w-2 h-2 bg-[#3B448B] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium" style={{ color: "#262140" }}>
              Profil Perusahaan
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#262140" }}
          >
            Tentang{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VNS Network
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            VNS Network adalah penyedia layanan internet profesional yang
            berkomitmen memberikan koneksi cepat, stabil, dan terjangkau bagi
            pelanggan rumahan dan bisnis kecil di Margoyoso, Pati, dan
            sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#262140" }}
              >
                Partner Terpercaya untuk Solusi Internet Anda
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#262140", opacity: 0.8 }}
              >
                Sejak berdirinya, VNS Network telah menjadi pilihan utama
                masyarakat Margoyoso untuk kebutuhan internet rumah dan bisnis.
                Dengan pengalaman lebih dari 3 tahun di industri jaringan, kami
                memahami betul kebutuhan koneksi yang handal untuk aktivitas
                digital sehari-hari.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Instalasi profesional oleh tim ahli bersertifikat",
                "Penggunaan perangkat jaringan berkualitas tinggi",
                "Monitoring jaringan 24/7 untuk kestabilan koneksi",
                "Layanan support responsif via WhatsApp & telepon",
                "Solusi custom sesuai kebutuhan spesifik pelanggan",
                "Garansi perangkat dan layanan yang terjamin",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <IoCheckmarkCircle className="text-green-600 text-lg" />
                  </div>
                  <span
                    className="text-lg"
                    style={{ color: "#262140", opacity: 0.9 }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://wa.me/628895461944"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg hover:scale-105 text-center flex items-center justify-center gap-3"
              >
                <IoFlash className="text-xl" />
                Konsultasi Gratis
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 rounded-2xl transition-all duration-300 font-semibold text-lg hover:shadow-xl hover:scale-105 text-center backdrop-blur-sm bg-white/50"
                style={{
                  borderColor: "#3B448B",
                  color: "#3B448B",
                }}
              >
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-105 transition-transform duration-500">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-2xl bg-gradient-to-br from-white to-[#F0F2FF] border border-[#BABEDC]"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#3B448B] to-[#7177B2] flex items-center justify-center">
                      <stat.icon className="text-xl text-white" />
                    </div>
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "#3B448B" }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "#262140", opacity: 0.8 }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission Statement */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#3B448B] to-[#7177B2] text-white">
                <h4 className="text-lg font-bold mb-2">Visi Kami</h4>
                <p className="text-white/90">
                  Menjadi penyedia layanan internet terdepan yang menghubungkan
                  setiap rumah dan bisnis dengan dunia digital secara handal dan
                  terjangkau.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#BABEDC] rounded-2xl rotate-12 opacity-60 animate-float"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7177B2] rounded-2xl -rotate-12 opacity-40 animate-float"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="hidden md:block text-center mb-16">
          <h3
            className="text-2xl md:text-3xl font-bold mb-12"
            style={{ color: "#262140" }}
          >
            Nilai-Nilai Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                style={{
                  backgroundColor: "#FDFDFD",
                  border: "1px solid #BABEDC",
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3B448B] to-[#7177B2] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="text-2xl text-white" />
                </div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ color: "#262140" }}
                >
                  {value.title}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{ color: "#262140", opacity: 0.8 }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Area */}
        <div className="hidden text-center p-8 rounded-3xl bg-white/80 backdrop-blur-lg border border-[#BABEDC] shadow-lg">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#262140" }}>
            Area Layanan Kami
          </h3>
          <p
            className="text-lg mb-6"
            style={{ color: "#262140", opacity: 0.8 }}
          >
            Melayani pemasangan WiFi di Margoyoso, Pati, dan sekitarnya
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {[
              "Margoyoso",
              "Sukolilo",
              "Tayu",
              "Juwana",
              "Pati Kota",
              "Trangkil",
              "Wedarijaksa",
              "Winong",
            ].map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#3B448B] to-[#7177B2] text-white font-medium shadow-lg"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
