import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { AREA, COMPANY, FAQ, GOOGLE_PLACE_ID, LAST_UPDATED, MAPS_URL, SERVICES } from "./content/content";

/** Gebruikt door scripts/prerender.mjs: dezelfde boom als in de browser, als statische HTML. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

const SITE = "https://www.akzonen.be";
const TITLE = "Verwarming Boom – cv-ketel installatie, onderhoud en herstelling | AK & Zonen";

/** Structured data, volledig afgeleid uit src/content/content.js zodat het nooit afwijkt van de zichtbare pagina */
export const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SITE}/#bedrijf`,
    name: COMPANY.name,
    url: `${SITE}/`,
    description: "Familiebedrijf uit Boom voor verwarming: installatie, vervanging, onderhoud en herstelling van cv-ketels.",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: `${SITE}/og-image.jpg`,
    logo: `${SITE}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: "2850",
      addressLocality: "Boom",
      addressCountry: "BE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.0869249, longitude: 4.3885609 },
    hasMap: MAPS_URL,
    openingHoursSpecification: COMPANY.hours
      .filter((h) => h.days)
      .map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    areaServed: AREA.places.map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Verwarming",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text, areaServed: "Boom en omstreken" },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: `${SITE}/`,
    name: COMPANY.name,
    inLanguage: "nl-BE",
    publisher: { "@id": `${SITE}/#bedrijf` },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    url: `${SITE}/`,
    name: TITLE,
    inLanguage: "nl-BE",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#bedrijf` },
    dateModified: LAST_UPDATED,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];
