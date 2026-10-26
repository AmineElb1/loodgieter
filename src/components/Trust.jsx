import { lazy, Suspense, useRef } from "react";
import { SHOW_PLACEHOLDERS, STATS } from "../content/content";
import useStaggerIn from "../lib/useStaggerIn";
// React Bits CountUp (gebruikt `motion`) wordt pas geladen na de eerste paint, zodat de hoofdbundel licht blijft
const CountUp = lazy(() => import("./reactbits/CountUp"));
import { StarIcon } from "./ui/Icons";
import "./Trust.css";

const nl = (n, decimals) => n.toFixed(decimals).replace(".", ",");

export default function Trust() {
  const root = useRef(null);
  useStaggerIn(root, ".trust__item", { stagger: 0.1, y: 20 });

  const items = STATS.filter((s) => s.text || s.value !== null || SHOW_PLACEHOLDERS);

  return (
    <section className="section section--navy on-dark trust" ref={root} aria-label="AK & Zonen in cijfers">
      <div className="container">
        <ul className="trust__list">
          {items.map((s) => (
            <li key={s.id} className="trust__item">
              {s.text ? (
                <p className="trust__value">{s.text}</p>
              ) : s.value !== null ? (
                <>
                  {/* Geanimeerd getal is verborgen voor screenreaders; die lezen de eindwaarde */}
                  <p className="trust__value" aria-hidden="true">
                    <Suspense fallback={nl(s.value, s.decimals)}>
                      <CountUp to={s.value} decimals={s.decimals} decimalSeparator="," duration={1.6} />
                    </Suspense>
                    {s.suffix}
                  </p>
                  <span className="sr-only">{nl(s.value, s.decimals)}</span>
                </>
              ) : (
                <p className="trust__value todo" title="Nog in te vullen door AK & Zonen">
                  {s.placeholder}
                </p>
              )}
              {s.stars && (
                <span className="trust__stars" role="img" aria-label="5 op 5 sterren">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} width={18} height={18} />
                  ))}
                </span>
              )}
              <p className="trust__label">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
