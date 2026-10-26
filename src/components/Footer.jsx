import { COMPANY, CREDITS, NAV } from "../content/content";
import { handleAnchorClick } from "../lib/smoothScroll";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{COMPANY.name}</p>
          <p className="footer__text">Verwarming in Boom en omstreken</p>
        </div>

        <nav aria-label="Footermenu">
          <ul className="footer__links">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={handleAnchorClick}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="footer__address">
          <span className="footer__line">{COMPANY.street}</span>
          <span className="footer__line">{COMPANY.city}</span>
          <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneLabel}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </address>
      </div>

      <div className="container">
        <div className="footer__legal">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}
        </p>
        <div className="footer__credits">
          <p>Foto’s van eigen werk: AK & Zonen. Overige foto’s via Unsplash:</p>
          <ul>
            {CREDITS.map((c) => (
              <li key={c.url}>
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.short}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}
