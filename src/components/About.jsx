import { useRef } from "react";
import { ABOUT, AREA } from "../content/content";
import { IMG } from "../assets/images";
import useStaggerIn from "../lib/useStaggerIn";
import "./About.css";

export default function About() {
  const root = useRef(null);
  useStaggerIn(root, ".about__reveal", { stagger: 0.14, y: 24 });

  return (
    <section id="over-ons" className="section" ref={root} aria-labelledby="over-ons-titel">
      <div className="container about">
        <figure className="about__media about__reveal">
          <div className="photo about__photo">
            <img
              src={IMG.bus.src}
              srcSet={IMG.bus.srcSet}
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, calc(100vw - 40px)"
              width={IMG.bus.width}
              height={IMG.bus.height}
              alt={IMG.bus.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>

        <div className="about__copy">
          <h2 id="over-ons-titel" className="about__reveal">
            {ABOUT.title}
          </h2>
          <p className="about__text about__reveal">{ABOUT.text}</p>

          <ul className="about__values about__reveal">
            {ABOUT.values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>

          <div className="about__area about__reveal">
            <h3>{AREA.title}</h3>
            <p>{AREA.text}:</p>
            <ul>
              {AREA.places.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <blockquote className="about__quote about__reveal">
            <p>{ABOUT.quote}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
