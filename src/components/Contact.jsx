import { useState } from "react";
import { COMPANY, CONTACT, MAPS_URL } from "../content/content";
import Button from "./ui/Button";
import { MailIcon, PhoneIcon, PinIcon } from "./ui/Icons";
import "./Contact.css";

// Zet VITE_FORM_ENDPOINT (bv. een Formspree-URL) in .env om het formulier rechtstreeks te versturen.
// Zonder endpoint opent het formulier het e-mailprogramma van de bezoeker met het bericht ingevuld.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!ENDPOINT) {
      const body = `Naam: ${data.naam}\nTelefoon: ${data.tel}\nE-mail: ${data.email || "-"}\n\n${data.bericht || ""}`;
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent("Offerte-aanvraag via de website")}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const done = status === "sent" || status === "mailto";

  return (
    <section id="contact" className="section section--navy on-dark contact" aria-labelledby="contact-titel">
      <div className="container contact__grid">
        <div className="contact__info">
          <h2 id="contact-titel">{CONTACT.title}</h2>
          <p className="contact__lead">{CONTACT.lead}</p>

          <ul className="contact__details">
            <li>
              <PhoneIcon />
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneLabel}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <PinIcon />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                {COMPANY.street}, {COMPANY.city}
                <span className="sr-only"> (opent Google Maps in een nieuw tabblad)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact__card">
          {done ? (
            <div role="status" className="contact__done" tabIndex={-1}>
              <h3>{status === "sent" ? CONTACT.success : "Je e-mailprogramma is geopend."}</h3>
              {status === "mailto" && (
                <p>
                  Verstuur het ingevulde bericht om je aanvraag te bevestigen. Het mailprogramma niet gevonden? Stuur ons
                  een mail op <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> of bel {COMPANY.phoneLabel}.
                </p>
              )}
            </div>
          ) : (
            <form onSubmit={onSubmit} className="form">
              <div className="field">
                <label htmlFor="f-naam">Naam</label>
                <input id="f-naam" name="naam" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="f-tel">Telefoonnummer</label>
                <input id="f-tel" name="tel" type="tel" inputMode="tel" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="f-email">
                  E-mail <span className="field__opt">(niet verplicht)</span>
                </label>
                <input id="f-email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="f-bericht">
                  Bericht <span className="field__opt">(niet verplicht)</span>
                </label>
                <textarea id="f-bericht" name="bericht" rows={4} />
              </div>

              <Button type="submit" size="lg" disabled={status === "sending"}>
                {status === "sending" ? "Bezig met verzenden…" : "Verzenden"}
              </Button>

              {status === "error" && (
                <p role="alert" className="form__error">
                  Verzenden is niet gelukt. Probeer het opnieuw of bel ons op {COMPANY.phoneLabel}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
