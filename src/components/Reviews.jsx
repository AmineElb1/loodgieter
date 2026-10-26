import { useRef } from "react";
import { REVIEWS, SHOW_PLACEHOLDERS } from "../content/content";
import useStaggerIn from "../lib/useStaggerIn";
import { StarIcon } from "./ui/Icons";
import "./Reviews.css";

const Stars = () => (
  <span className="stars" role="img" aria-label="5 op 5 sterren">
    {[0, 1, 2, 3, 4].map((i) => (
      <StarIcon key={i} width={20} height={20} />
    ))}
  </span>
);

export default function Reviews() {
  const root = useRef(null);
  useStaggerIn(root, ".review");

  const [featured, ...others] = REVIEWS.items;
  const rest = SHOW_PLACEHOLDERS ? others : others.filter((r) => !r.placeholder);

  return (
    <section id="reviews" className="section section--paper" ref={root} aria-labelledby="reviews-titel">
      <div className="container">
        <div className="section__head">
          <h2 id="reviews-titel">{REVIEWS.title}</h2>
        </div>

        <div className="reviews">
          <figure className="review review--featured">
            <Stars />
            <blockquote>
              <p>{featured.text}</p>
            </blockquote>
            <figcaption>{featured.name}</figcaption>
          </figure>

          {rest.map((r, i) => (
            <figure className="review review--small" key={i}>
              <Stars />
              <blockquote>
                <p className={r.placeholder ? "todo" : undefined}>{r.text}</p>
              </blockquote>
              <figcaption className={r.placeholder ? "todo" : undefined}>{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
