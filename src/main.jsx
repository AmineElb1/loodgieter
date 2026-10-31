import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/figtree";
import "lenis/dist/lenis.css";
import "./styles/base.css";
import { inject } from "@vercel/analytics";
import App from "./App.jsx";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// De productiebuild is vooraf als HTML gerenderd (scripts/prerender.mjs): dan hydrateren we.
// In `npm run dev` is #root leeg en renderen we gewoon in de browser.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

// Vercel Web Analytics: cookievrij, telt paginaweergaven. Zet "Web Analytics" ook aan in het Vercel-dashboard.
inject();
