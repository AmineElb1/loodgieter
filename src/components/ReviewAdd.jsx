import { useId, useState } from "react";
import { COMPANY } from "../content/content";
import submitForm from "../lib/submitForm";
import Button from "./ui/Button";
import { StarIcon } from "./ui/Icons";

/**
 * "Review toevoegen": 4 of 5 sterren stuurt door naar Google, 3 sterren of lager geeft
 * feedback aan het bedrijf zelf (via hetzelfde kanaal als het contactformulier).
 */
export default function ReviewAdd({ googleUrl, content }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto | error

  const shown = hover || rating;
  const positive = rating >= 4;
  const done = status === "sent" || status === "mailto";

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { sterren: rating, ...Object.fromEntries(new FormData(e.currentTarget)) };
    setStatus("sending");
    try {
      setStatus(
        await submitForm({
          subject: `Feedback via de website (${rating} op 5 sterren)`,
          mailBody: `Beoordeling: ${rating} op 5 sterren\n\n${data.bericht}`,
          data,
        })
      );
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="review-add">
      <div className="review-add__head">
        <div>
          <h3>{content.title}</h3>
          <p>{content.text}</p>
        </div>
        {!open && (
          <Button variant="ghost" onClick={() => setOpen(true)} aria-expanded="false" aria-controls={`${id}-paneel`}>
            <StarIcon width={18} height={18} />
            {content.cta}
          </Button>
        )}
      </div>

      {open && (
        <div className="review-add__panel" id={`${id}-paneel`}>
          <fieldset className="review-add__rating" onMouseLeave={() => setHover(0)}>
            <legend>{content.ratingLabel}</legend>
            <div className="review-add__stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <label key={n} className={n <= shown ? "is-on" : undefined} onMouseEnter={() => setHover(n)}>
                  <input
                    type="radio"
                    name="sterren"
                    value={n}
                    checked={rating === n}
                    onChange={() => {
                      setRating(n);
                      setStatus("idle");
                    }}
                  />
                  <StarIcon width={40} height={40} aria-hidden="true" />
                  <span className="sr-only">{n === 1 ? "1 ster" : `${n} sterren`}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {rating > 0 && (
            <div className="review-add__result" aria-live="polite">
              {positive ? (
                <>
                  <p>{content.positive}</p>
                  <Button href={googleUrl} target="_blank" rel="noopener noreferrer" size="lg">
                    {content.positiveCta}
                    <span className="sr-only"> (opent in een nieuw tabblad)</span>
                  </Button>
                </>
              ) : done ? (
                <div role="status">
                  <p className="review-add__done">{content.success}</p>
                  {status === "mailto" && (
                    <p>
                      Verstuur het ingevulde bericht in je e-mailprogramma om je feedback te bevestigen, of mail ons op{" "}
                      <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
                    </p>
                  )}
                </div>
              ) : (
                <form className="form" onSubmit={onSubmit}>
                  <p>{content.negative}</p>
                  <div className="field">
                    <label htmlFor={`${id}-bericht`}>Wat kon er beter?</label>
                    <textarea id={`${id}-bericht`} name="bericht" rows={4} required />
                  </div>
                  <Button type="submit" size="lg" disabled={status === "sending"}>
                    {status === "sending" ? "Bezig met verzenden…" : "Feedback versturen"}
                  </Button>
                  {status === "error" && (
                    <p role="alert" className="form__error">
                      Verzenden is niet gelukt. Probeer het opnieuw of bel ons op {COMPANY.phoneLabel}.
                    </p>
                  )}
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
