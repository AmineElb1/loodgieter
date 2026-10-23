import { STEPS } from "../data/content";

export default function Steps() {
  return (
    <section id="werkwijze" className="sec">
      <p className="eb">Werkwijze</p>
      <h2>Zo werken wij</h2>
      <ol className="steps">
        {STEPS.map(([t, d], i) => (
          <li key={t}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
        ))}
      </ol>
    </section>
  );
}
