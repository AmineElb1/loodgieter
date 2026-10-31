import { useEffect } from "react";
import { initSmoothScroll } from "./lib/smoothScroll";
import { ScrollTrigger } from "./lib/motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trust from "./components/Trust";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactBar from "./components/ContactBar";
import ServicePage from "./components/ServicePage";
import { findPage } from "./content/pages";

export default function App({ path = "/" }) {
  const page = findPage(path);
  useEffect(() => {
    const destroy = initSmoothScroll();
    // Lettertypes en beelden verschuiven de layout: ScrollTrigger opnieuw meten
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("load", ScrollTrigger.refresh);
    return () => {
      window.removeEventListener("load", ScrollTrigger.refresh);
      destroy();
    };
  }, []);

  if (page) return <ServicePage page={page} />;

  return (
    <>
      <a className="skip-link" href="#inhoud">
        Ga naar de inhoud
      </a>
      <Header />
      <main id="inhoud">
        <Hero />
        <Services />
        <Trust />
        <Process />
        <Reviews />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ContactBar />
    </>
  );
}
