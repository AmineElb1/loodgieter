import { COMPANY } from "../content/content";

// Zet VITE_FORM_ENDPOINT (bv. een Formspree-URL) in .env om formulieren rechtstreeks te versturen.
// Zonder endpoint opent het formulier het e-mailprogramma van de bezoeker met het bericht ingevuld.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

/**
 * Verstuurt formuliergegevens. Geeft "sent" (via endpoint) of "mailto" (mailprogramma geopend) terug
 * en gooit een fout als het endpoint de aanvraag weigert.
 * `mailBody` is de tekst voor het mailprogramma; `data` gaat als JSON naar het endpoint.
 */
export default async function submitForm({ subject, mailBody, data }) {
  if (!ENDPOINT) {
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    return "mailto";
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, ...data }),
  });
  if (!res.ok) throw new Error(res.statusText);
  return "sent";
}
