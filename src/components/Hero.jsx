import hero from "../assets/hero.png";
import { PHONE } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ "--hero": `url(${hero})` }}>
      <div className="hero-in">
        <p className="eb light">Familiebedrijf uit Boom</p>
        <h1>Verwarming waar je op kunt vertrouwen</h1>
        <p className="lead">Installatie, onderhoud en herstelling van je cv-ketel. Wij zijn een familiebedrijf uit Boom en elke dag onderweg in de regio.</p>
        <div className="row">
          <a className="btn" href="#contact">Offerte aanvragen</a>
          <a className="btn out" href={`tel:${PHONE}`}>Bel ons</a>
        </div>
      </div>
      <ul className="usps">
        <li>✔ Persoonlijke aanpak</li>
        <li>✔ Transparante prijzen</li>
        <li>✔ Snelle service in Boom &amp; omstreken</li>
      </ul>
    </section>
  );
}
