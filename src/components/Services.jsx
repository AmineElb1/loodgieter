import { useRef } from "react";
import { SERVICES, SERVICES_INTRO } from "../content/content";
import { IMG } from "../assets/images";
import { handleAnchorClick } from "../lib/smoothScroll";
import useStaggerIn from "../lib/useStaggerIn";
import SpotlightCard from "./reactbits/SpotlightCard";
import "./Services.css";

export default function Services() {
  const root = useRef(null);
  useStaggerIn(root, ".service-card");

  return (
    <section id="diensten" className="section section--paper" ref={root} aria-labelledby="diensten-titel">
      <div className="container">
        <div className="section__head">
          <h2 id="diensten-titel">{SERVICES_INTRO.title}</h2>
        </div>

        <ul className="services">
          {SERVICES.map((s) => {
            const img = IMG[s.image];
            return (
              <li key={s.id}>
                {/* React Bits SpotlightCard: het lichtspoor volgt de muis, op touch blijft de kaart rustig */}
                <SpotlightCard
                  className="service-card"
                  theme="light"
                  spotlightColor="#F28A1A"
                  intensity={0.16}
                  spotlightSize={260}
                  borderGlow={0.8}
                >
                  <div className="service-card__photo photo">
                    <img
                      src={img.src}
                      srcSet={img.srcSet}
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 30vw, calc(100vw - 40px)"
                      width={img.width}
                      height={img.height}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: s.position }}
                    />
                  </div>
                  <div className="service-card__body">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a className="service-card__link" href="#contact" onClick={handleAnchorClick}>
                      {s.cta}
                    </a>
                  </div>
                </SpotlightCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
