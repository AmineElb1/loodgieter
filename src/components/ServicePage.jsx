import { AREA, COMPANY } from "../content/content";
import { PAGES } from "../content/pages";
import { handleAnchorClick } from "../lib/smoothScroll";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import ContactBar from "./ContactBar";
import Button from "./ui/Button";
import { CheckIcon, PhoneIcon, StarIcon } from "./ui/Icons";
import "./ServicePage.css";

export default function ServicePage({ page }) {
  const others = PAGES.filter((p) => p.slug !== page.slug);

  return (
    <>
      <a className="skip-link" href="#inhoud">
        Ga naar de inhoud
      </a>
      <Header home={false} />
      <main id="inhoud">
        <section className="section sp-hero">
          <div className="container">
            <nav className="sp-crumbs" aria-label="Kruimelpad">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{page.navTitle}</span>
            </nav>
            <h1>{page.h1}</h1>
            <p className="sp-lead">{page.lead}</p>
            <div className="sp-actions">
              <Button href="#contact" size="lg" onClick={handleAnchorClick}>
                {page.cta.button}
              </Button>
              <a className="sp-tel" href={`tel:${COMPANY.phone}`}>
                <PhoneIcon width={20} height={20} />
                Bel {COMPANY.phoneLabel}
              </a>
            </div>
          </div>
        </section>

        {page.sections.map((s, i) => (
          <section key={s.title} className={`section sp-section${i % 2 === 0 ? " section--paper" : ""}`} aria-labelledby={`sp-${i}`}>
            <div className="container sp-grid">
              <h2 id={`sp-${i}`}>{s.title}</h2>
              <div className="sp-body">
                {s.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul className="sp-list">
                    {s.list.map((item) => (
                      <li key={item}>
                        <CheckIcon width={20} height={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.steps && (
                  <ol className="sp-steps">
                    {s.steps.map((st) => (
                      <li key={st.title}>
                        <h3>{st.title}</h3>
                        <p>{st.text}</p>
                      </li>
                    ))}
                  </ol>
                )}
                {s.after && <p>{s.after}</p>}
              </div>
            </div>
          </section>
        ))}

        <section className="section section--navy on-dark sp-review" aria-label="Review van een klant">
          <div className="container">
            <figure>
              <span className="sp-stars" role="img" aria-label="5 op 5 sterren">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} width={20} height={20} />
                ))}
              </span>
              <blockquote>
                <p>{page.review.text}</p>
              </blockquote>
              <figcaption>
                {page.review.name}
                <span className="sp-source">Google</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section sp-section" aria-labelledby="sp-meer">
          <div className="container sp-grid">
            <h2 id="sp-meer">Werkgebied en andere diensten</h2>
            <div className="sp-body">
              <p>
                We werken vanuit Boom en komen ook naar {AREA.places.slice(1, -1).join(", ")} en {AREA.places.at(-1)}. We zijn open van maandag
                tot en met zaterdag, {COMPANY.hours[0].time.replace(" – ", " tot ")}.
              </p>
              <ul className="sp-more">
                {others.map((p) => (
                  <li key={p.slug}>
                    <a href={`/${p.slug}`}>{p.navTitle}</a>
                  </li>
                ))}
                <li>
                  <a href="/#reviews">Reviews van klanten</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer home={false} />
      <ContactBar />
    </>
  );
}
