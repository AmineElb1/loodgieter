import { STATS } from "../data/content";

export default function Stats() {
  return (
    <section className="stats">
      {STATS.map(([n, l]) => (
        <div key={l}><b>{n}</b><span>{l}</span></div>
      ))}
    </section>
  );
}
