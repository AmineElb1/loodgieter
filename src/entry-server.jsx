import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { FAQ } from "./content/content";

/** Gebruikt door scripts/prerender.mjs: dezelfde boom als in de browser, als statische HTML. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

/** FAQ-schema, altijd gelijk aan de zichtbare vragen op de pagina */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};
