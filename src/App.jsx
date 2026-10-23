import "./styles/app.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallBar from "./components/CallBar";

export default function App() {
  return (
    <div className="ak">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Steps />
      <Reviews />
      <About />
      <Faq />
      <Contact />
      <Footer />
      <CallBar />
    </div>
  );
}
