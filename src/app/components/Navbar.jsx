"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  IoLogoWhatsapp,
  IoMenu,
  IoClose,
  IoHome,
  IoConstruct,
  IoImages,
  IoCall,
  IoChevronForward,
  IoChevronDown,
  IoInformationCircle,
  IoSpeedometer,
} from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menu = [
    {
      name: "Layanan",
      href: "#features",
      icon: <IoConstruct className="text-lg" />,
    },
    {
      name: "Paket",
      href: "#packages",
      icon: <IoImages className="text-lg" />,
    },
    {
      name: "Test Speed",
      href: "https://billing.indonesianet.co.id/front/speedtest",
      icon: <IoSpeedometer className="text-lg" />, // icon bebas
      external: true,
    },
    {
      name: "Tentang",
      href: "",
      icon: <IoInformationCircle className="text-lg" />,
      children: [
        {
          name: "Tentang Kami",
          href: "#about",
          icon: <IoInformationCircle className="text-sm" />,
        },
        {
          name: "Portofolio",
          href: "#portfolio",
          icon: <IoImages className="text-sm" />,
        },
        {
          name: "FAQ",
          href: "#faq",
          icon: <IoInformationCircle className="text-lg" />,
        },
      ],
    },
    { name: "Kontak", href: "#contact", icon: <IoCall className="text-lg" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav
      className={`w-full z-50 py-3 fixed top-0 left-0 right-0 transition-all duration-500 ${
        scrolled ? "shadow-2xl backdrop-blur-lg" : "shadow-lg"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(59, 68, 139, 0.95)" : "#3B448B",
        background: scrolled
          ? "linear-gradient(135deg, rgba(59, 68, 139, 0.95) 0%, rgba(113, 119, 178, 0.95) 100%)"
          : "linear-gradient(135deg, #3B448B 0%, #7177B2 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center justify-center w-[120px] md:w-[220px] h-[55px] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Link href="#home" className="flex items-center">
                <Image
                  src="/logo/mainlogo.png"
                  alt="VNS Network"
                  width={200}
                  height={45}
                  priority
                  loading="eager"
                  className="object-contain filter brightness-0 invert"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-1 items-center">
          {menu.map((item, index) => (
            <div
              className="relative group"
              key={item.name}
              onMouseEnter={() => item.children && setActiveSubmenu(index)}
              onMouseLeave={() => item.children && setActiveSubmenu(null)}
            >
              <Link
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="relative px-4 py-2.5 text-sm font-medium text-white rounded-lg hover:bg-white/10 transition-all duration-300 overflow-hidden flex items-center gap-2"
              >
                {item.icon}
                <span className="relative z-10">{item.name}</span>
                {item.children && (
                  <IoChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      activeSubmenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
              </Link>

              {/* Submenu */}
              {item.children && (
                <div
                  className={`absolute top-full left-0 mt-2 w-48 h-auto bg-white/55 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 transition-all duration-300 z-50 ${
                    activeSubmenu === index
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-2">
                    {item.children.map((subItem) => (
                      <div className="flex flex-col py-1" key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="flex items-center gap-y-1 px-3 py-2.5 text-sm font-medium rounded-lg bg-[#3B448B] hover:bg-[#3B448B]/80 text-white transition-all duration-200 group"
                          onClick={() => setActiveSubmenu(null)}
                        >
                          <div className="text-white transition-colors">
                            {subItem.icon}
                          </div>
                          <span className="text-white">{subItem.name}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <div className="relative ml-4 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <a
              href="https://wa.me/628895461944"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 group-hover:from-cyan-600 group-hover:to-blue-600 shadow-lg flex items-center"
            >
              <IoLogoWhatsapp className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IoClose className="w-6 h-6 text-white" />
          ) : (
            <IoMenu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden mt-3 py-4 backdrop-blur-xl rounded-2xl border border-white/20 mx-4 shadow-2xl"
          style={{
            backgroundColor: "rgba(42, 50, 102, 0.95)",
            background:
              "linear-gradient(135deg, rgba(42, 50, 102, 0.95) 0%, rgba(59, 68, 139, 0.95) 100%)",
          }}
        >
          {menu.map((item, index) => (
            <div key={item.name}>
              {item.children ? (
                <div className="border-b border-white/10 last:border-0">
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="flex items-center justify-between w-full px-6 py-4 hover:bg-white/10 transition-all duration-300 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-cyan-400">{item.icon}</div>
                      <span className="text-white">{item.name}</span>
                    </div>
                    <IoChevronDown
                      className={`text-white/60 transition-transform duration-300 ${
                        activeSubmenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeSubmenu === index
                        ? "max-h-32 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-14 pr-6 pb-2 space-y-2">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveSubmenu(null);
                          }}
                        >
                          <div className="text-cyan-400">{subItem.icon}</div>
                          <span className="text-white">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-6 py-4 hover:bg-white/10 transition-all duration-300 font-medium border-b border-white/10 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400">{item.icon}</div>
                    <span className="text-white">{item.name}</span>
                  </div>
                  <IoChevronForward className="text-white/60" />
                </Link>
              )}
            </div>
          ))}
          <div className="px-4 pt-4">
            <a
              href="https://wa.me/628895461944"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <IoLogoWhatsapp className="w-5 h-5 mr-2" />
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
