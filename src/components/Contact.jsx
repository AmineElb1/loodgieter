import { useState } from "react";
import { PHONE, PHONE_LABEL, EMAIL, ADDRESS, MAPS_URL } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ naam: "", tel: "", email: "", bericht: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    // TODO: koppel aan backend / formulierdienst
    console.log(form);
    setSent(true);
  };

  return (
    <section id="contact" className="sec contact">
      <form onSubmit={submit}>
        <p className="eb light">Contact</p>
        <h2>Vraag je offerte aan</h2>
        {sent ? (
          <p role="status" className="ok">Bedankt! We nemen snel contact met je op.</p>
        ) : (
          <>
            <label htmlFor="n">Naam</label>
            <input id="n" className="f" required value={form.naam} onChange={set("naam")} autoComplete="name" />
            <label htmlFor="t">Telefoonnummer</label>
            <input id="t" className="f" type="tel" required value={form.tel} onChange={set("tel")} autoComplete="tel" />
            <label htmlFor="e">E-mail</label>
            <input id="e" className="f" type="email" value={form.email} onChange={set("email")} autoComplete="email" />
            <label htmlFor="m">Bericht</label>
            <textarea id="m" className="f" rows={4} value={form.bericht} onChange={set("bericht")} />
            <button className="btn" type="submit">Verzenden</button>
          </>
        )}
      </form>
      <div>
        <h3>AK &amp; Zonen</h3>
        <p className="addr">
          Bosstraat 14<br />2850 Boom<br />
          <a href={`tel:${PHONE}`}>{PHONE_LABEL}</a><br />
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <iframe
          className="map"
          title="Kaart: AK & Zonen in Boom"
          src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a className="more light" href={MAPS_URL} target="_blank" rel="noreferrer">Open in Google Maps →</a>
      </div>
    </section>
  );
}
