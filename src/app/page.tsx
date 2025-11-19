import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";
import HowWeWork from "@/sections/HowWeWork";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Work />
      <About />
      <HowWeWork />
      <Contact />
      <Footer />

    </>
  );
}
