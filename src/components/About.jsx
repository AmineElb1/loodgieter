import { useRef } from "react";
import { ABOUT, SHOW_PLACEHOLDERS } from "../content/content";
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
              src={IMG.interieur.src}
              srcSet={IMG.interieur.srcSet}
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, calc(100vw - 40px)"
              width={IMG.interieur.width}
              height={IMG.interieur.height}
              alt={IMG.interieur.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
          {SHOW_PLACEHOLDERS && <figcaption className="todo-note">{ABOUT.photoPlaceholder}</figcaption>}
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

          <blockquote className="about__quote about__reveal">
            <p>{ABOUT.quote}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
