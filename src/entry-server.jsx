import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { AREA, COMPANY, FAQ, LAST_UPDATED, MAPS_URL, SERVICES } from "./content/content";
import { PAGES } from "./content/pages";

/** Gebruikt door scripts/prerender.mjs: dezelfde boom als in de browser, als statische HTML. */
export function render(path = "/") {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>
  );
}

const SITE = "https://www.akzonen.be";
export const HOME_TITLE = "Verwarming Boom | Cv-ketel & onderhoud | AK & Zonen";
const HOME_DESCRIPTION =
  "Verwarming in Boom en omstreken: cv-ketel installatie, onderhoud en herstelling door familiebedrijf AK & Zonen. 5,0 op Google. Vraag een gratis offerte.";

/** Structured data, volledig afgeleid uit src/content/content.js zodat het nooit afwijkt van de zichtbare pagina */
const homeSchemas = [
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
    sameAs: COMPANY.social,
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
    alternateName: ["AK&zonen", "AK en Zonen"],
    inLanguage: "nl-BE",
    publisher: { "@id": `${SITE}/#bedrijf` },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    url: `${SITE}/`,
    name: HOME_TITLE,
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

const businessSchema = homeSchemas[0];
const websiteSchema = homeSchemas[1];

/** Alle pagina's die vooraf worden gerenderd, met hun eigen metadata en structured data */
export const routes = [
  {
    path: "/",
    file: "index.html",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    schemas: homeSchemas,
  },
  ...PAGES.map((p) => {
    const url = `${SITE}/${p.slug}`;
    return {
      path: `/${p.slug}`,
      file: `${p.slug}/index.html`,
      title: p.seoTitle,
      description: p.description,
      schemas: [
        businessSchema,
        websiteSchema,
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: p.seoTitle,
          inLanguage: "nl-BE",
          isPartOf: { "@id": `${SITE}/#website` },
          about: { "@id": `${url}#dienst` },
          dateModified: LAST_UPDATED,
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#dienst`,
          name: p.h1,
          serviceType: p.navTitle,
          description: p.lead,
          provider: { "@id": `${SITE}/#bedrijf` },
          areaServed: AREA.places.map((name) => ({ "@type": "City", name })),
          url,
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: p.navTitle, item: url },
          ],
        },
      ],
    };
  }),
];
