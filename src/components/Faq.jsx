import { useId, useState } from "react";
import { FAQ } from "../content/content";
import { PlusIcon } from "./ui/Icons";
import "./Faq.css";

function FaqItem({ q, a, open, onToggle }) {
  const id = useId();
  return (
    <div className={`faq__item${open ? " is-open" : ""}`}>
      <h3>
        <button type="button" id={`${id}-knop`} aria-expanded={open} aria-controls={`${id}-tekst`} onClick={onToggle}>
          <span>{q}</span>
          <PlusIcon className="faq__icon" width={24} height={24} />
        </button>
      </h3>
      <div className="faq__panel" id={`${id}-tekst`} role="region" aria-labelledby={`${id}-knop`}>
        <div className="faq__panel-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section section--paper" aria-labelledby="faq-titel">
      <div className="container faq">
        <h2 id="faq-titel" className="faq__title">
          {FAQ.title}
        </h2>
        <div className="faq__list">
          {FAQ.items.map((item, i) => (
            <FaqItem key={item.q} {...item} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
