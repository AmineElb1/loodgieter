import { COMPANY, NAV } from "../content/content";
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
          {COMPANY.hours.map((h) => (
            <span className="footer__line" key={h.label}>
              {h.short}: {h.time}
            </span>
          ))}
        </address>
      </div>

      <div className="container">
        <div className="footer__legal">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
