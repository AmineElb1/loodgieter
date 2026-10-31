import { useEffect, useId, useRef, useState } from "react";
import { GOOGLE_REVIEW_URL, REVIEWS } from "../content/content";
import useStaggerIn from "../lib/useStaggerIn";
import { StarIcon } from "./ui/Icons";
import ReviewAdd from "./ReviewAdd";
import "./Reviews.css";

const ROTATE_MS = 7000;

const Stars = ({ rating = 5 }) => (
  <span className="stars" role="img" aria-label={`${rating} op 5 sterren`}>
    {[0, 1, 2, 3, 4].map((i) => (
      <StarIcon key={i} width={20} height={20} className={i < rating ? undefined : "is-off"} />
    ))}
  </span>
);

const Arrow = ({ dir }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "prev" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} />
  </svg>
);

export default function Reviews() {
  const root = useRef(null);
  const liveId = useId();
  useStaggerIn(root, ".reviews__slider, .review-add");

  const items = REVIEWS.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // muis of toetsenbordfocus in het blok
  const [stopped, setStopped] = useState(false); // bezoeker bladert zelf: niet meer automatisch wisselen
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const auto = items.length > 1 && !reduced && !stopped;

  useEffect(() => {
    if (!auto || paused) return undefined;
    const t = setTimeout(() => setIndex((i) => (i + 1) % items.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [auto, paused, index, items.length]);

  const go = (next) => {
    setStopped(true);
    setIndex((next + items.length) % items.length);
  };

  return (
    <section id="reviews" className="section section--paper" ref={root} aria-labelledby="reviews-titel">
      <div className="container">
        <div className="section__head">
          <h2 id="reviews-titel">{REVIEWS.title}</h2>
        </div>

        <div
          className="reviews__slider"
          role="group"
          aria-roledescription="carrousel"
          aria-label="Reviews van klanten"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Alle reviews staan boven elkaar: de hoogste bepaalt de hoogte, dus de pagina springt niet bij het wisselen */}
          <div className="reviews__stage" id={liveId} aria-live={auto && !paused ? "off" : "polite"}>
            {items.map((r, i) => (
              <figure
                key={r.name}
                className={`review${i === index ? " is-active" : ""}${r.text.length > 200 ? " review--long" : ""}`}
                aria-hidden={i === index ? undefined : true}
                aria-roledescription="slide"
                aria-label={`${i + 1} van ${items.length}`}
              >
                <Stars rating={r.rating} />
                <blockquote>
                  <p>{r.text}</p>
                </blockquote>
                <figcaption>
                  {r.name}
                  {r.source && <span className="review__source">{r.source}</span>}
                </figcaption>
              </figure>
            ))}
          </div>

          {items.length > 1 && (
            <div className="reviews__controls">
              <button type="button" className="reviews__arrow" onClick={() => go(index - 1)} aria-controls={liveId}>
                <Arrow dir="prev" />
                <span className="sr-only">Vorige review</span>
              </button>
              <div className="reviews__dots">
                {items.map((r, i) => (
                  <button
                    key={r.name}
                    type="button"
                    className={i === index ? "is-active" : undefined}
                    aria-label={`Review ${i + 1} van ${items.length}`}
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
              <button type="button" className="reviews__arrow" onClick={() => go(index + 1)} aria-controls={liveId}>
                <Arrow dir="next" />
                <span className="sr-only">Volgende review</span>
              </button>
            </div>
          )}
        </div>

        <ReviewAdd googleUrl={GOOGLE_REVIEW_URL} content={REVIEWS.add} />
      </div>
    </section>
  );
}
