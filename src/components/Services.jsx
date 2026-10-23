import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="diensten" className="sec grey">
      <p className="eb">Diensten</p>
      <h2>Alles voor een warm huis</h2>
      <div className="grid3">
        {SERVICES.map((s) => (
          <article className="card lift" key={s.t}>
            {s.img ? <img src={s.img} alt={s.alt} className="cimg" style={{ objectPosition: s.pos }} /> : <div className="ph cimg">[{s.ph}]</div>}
            <div className="cbody">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <a className="more" href="#contact">Meer info →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
