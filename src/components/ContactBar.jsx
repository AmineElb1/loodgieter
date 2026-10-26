import { COMPANY } from "../content/content";
import { handleAnchorClick } from "../lib/smoothScroll";
import { PhoneIcon, QuoteIcon } from "./ui/Icons";
import "./ContactBar.css";

/**
 * Vaste contactbalk onderaan op mobiel en tablet (verborgen vanaf 1024px, waar
 * dezelfde actie vast in de header staat). De balk heeft een eigen donker vlak,
 * dus het contrast is op elke sectie gelijk. De body krijgt evenveel padding-bottom.
 */
export default function ContactBar() {
  return (
    <nav className="contactbar" aria-label="Snel contact opnemen">
      <a className="contactbar__btn contactbar__btn--call" href={`tel:${COMPANY.phone}`}>
        <PhoneIcon width={22} height={22} />
        Bel ons
      </a>
      <a className="contactbar__btn contactbar__btn--quote" href="#contact" onClick={handleAnchorClick}>
        <QuoteIcon width={22} height={22} />
        Offerte aanvragen
      </a>
    </nav>
  );
}
