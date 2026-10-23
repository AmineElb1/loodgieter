import { FAQ } from "../data/content";

export default function Faq() {
  return (
    <section className="sec faq">
      <p className="eb">FAQ</p>
      <h2>Veelgestelde vragen</h2>
      {FAQ.map(([q, a]) => (
        <details key={q}><summary>{q}</summary><p>{a}</p></details>
      ))}
    </section>
  );
}
