import technicus from "../assets/technicus.png";

export default function About() {
  return (
    <section id="over-ons" className="sec about">
      <div>
        <p className="eb">Over ons</p>
        <h2>Een familiebedrijf uit Boom</h2>
        <p className="big">AK&amp;zonen staat voor vakmanschap met oog voor detail. Onze kernwaarden zijn kwaliteit, betrouwbaarheid en duidelijke communicatie.</p>
        <p className="quote">Bij AK&amp;zonen ben je geen nummer, maar een naam.</p>
      </div>
      <img className="team" src={technicus} alt="Technicus van AK & Zonen meet een cv-ketel" />
    </section>
  );
}
