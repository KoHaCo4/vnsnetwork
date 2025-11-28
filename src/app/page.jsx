import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/section/Hero";
import Features from "./components/section/Features";
import Packages from "./components/section/Packages";
import About from "./components/section/About";
import FAQ from "./components/section/FAQ";
import Maps from "./components/section/Maps";
import ContactForm from "./components/section/ContactForm";
import Footer from "./components/section/Footer";
import Portfolio from "./components/section/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Packages />
      <About />
      <Portfolio />
      <FAQ />
      <Maps />
      <ContactForm />
      <Footer />
    </main>
  );
}
