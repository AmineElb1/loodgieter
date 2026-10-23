import { REVIEWS } from "../data/content";

export default function Reviews() {
  return (
    <section id="reviews" className="sec grey">
      <p className="eb">Reviews</p>
      <h2>5,0 op Google, 33 reviews</h2>
      <div className="grid3">
        {REVIEWS.map(([q, n]) => (
          <figure className="card rev" key={n}>
            <div className="stars" aria-label="5 sterren">★★★★★</div>
            <blockquote>{q}</blockquote>
            <figcaption>{n}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
