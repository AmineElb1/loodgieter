import { useRef } from "react";
import { COMPANY, HERO } from "../content/content";
import { IMG } from "../assets/images";
import { gsap, useGSAP, MOTION_OK } from "../lib/motion";
import { handleAnchorClick } from "../lib/smoothScroll";
import SplitText from "./reactbits/SplitText";
import Button from "./ui/Button";
import { CheckIcon, PhoneIcon } from "./ui/Icons";
import "./Hero.css";

export default function Hero() {
  const root = useRef(null);

  // Eén georkestreerd laadmoment: titel (React Bits SplitText) → intro en knoppen → foto → pluspunten.
  // De knoppen zijn na ±0,6 s zichtbaar, zodat niets de contactactie vertraagt.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero__place", { opacity: 0, y: 10, duration: 0.6 }, 0)
          .from(".hero__lead, .hero__actions", { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 }, 0.5)
          .fromTo(
            ".hero__media",
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power3.inOut" },
            0.35
          )
          .from(".hero__media img", { scale: 1.1, duration: 1.6 }, 0.35)
          .from(".hero__usps li", { opacity: 0, y: 10, duration: 0.5, stagger: 0.08 }, 1.0);
      });
    },
    { scope: root }
  );

  return (
    <section id="top" className="hero" ref={root}>
      <div className="container hero__grid">
        <div className="hero__title-wrap">
          <p className="hero__place">
            <span className="hero__dot" aria-hidden="true" />
            {HERO.place}
          </p>
          <SplitText
            tag="h1"
            text={HERO.title}
            className="hero__title"
            splitType="words"
            mask
            effect="rise"
            trigger="load"
            delay={80}
            duration={1}
            textAlign="left"
            style={{ display: "block", overflow: "visible" }}
          />
        </div>

        <div className="hero__side">
          <p className="hero__lead">{HERO.lead}</p>
          <div className="hero__actions">
            <Button href="#contact" size="lg" onClick={handleAnchorClick}>
              Offerte aanvragen
            </Button>
            <a className="hero__tel" href={`tel:${COMPANY.phone}`}>
              <PhoneIcon width={20} height={20} />
              Bel {COMPANY.phoneLabel}
            </a>
          </div>
        </div>

        <figure className="hero__media photo">
          <picture>
            <source media="(min-width: 768px)" srcSet={IMG.heroWide.srcSet} sizes="(min-width: 1312px) 1200px, 92vw" width={IMG.heroWide.width} height={IMG.heroWide.height} />
            <img
              src={IMG.heroCrop.src}
              srcSet={IMG.heroCrop.srcSet}
              sizes="(min-width: 768px) 92vw, calc(100vw - 40px)"
              width={IMG.heroCrop.width}
              height={IMG.heroCrop.height}
              alt={IMG.heroWide.alt}
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </figure>

        <ul className="hero__usps">
          {HERO.usps.map((usp) => (
            <li key={usp}>
              <CheckIcon width={20} height={20} />
              {usp}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
