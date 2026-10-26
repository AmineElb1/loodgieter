import { useRef } from "react";
import { PROCESS } from "../content/content";
import { gsap, useGSAP, MOTION_OK } from "../lib/motion";
import "./Process.css";

/**
 * Werkwijze als koperen leiding: tijdens het scrollen loopt de oranje vulling door
 * de leiding en "schakelt" elke stap aan. Verticaal op mobiel, horizontaal vanaf 1024px.
 * Zonder animatie (prefers-reduced-motion) staat de leiding volledig gevuld.
 */
export default function Process() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ motion: MOTION_OK, wide: "(min-width: 1024px)" }, (ctx) => {
        const { motion, wide } = ctx.conditions;
        if (!motion) return;

        const css = getComputedStyle(root.current);
        const navy = css.getPropertyValue("--navy-900").trim();
        const line = css.getPropertyValue("--line").trim();
        const axis = wide ? "scaleX" : "scaleY";

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: ".process", start: "top 75%", end: "bottom 60%", scrub: 0.6 },
        });

        gsap.utils.toArray(".process__step").forEach((step) => {
          const node = step.querySelector(".process__node");
          const fill = step.querySelector(".process__fill");

          tl.fromTo(
            node,
            { backgroundColor: "#ffffff", color: navy, borderColor: line },
            { backgroundColor: navy, color: "#ffffff", borderColor: navy, duration: 0.3 }
          );
          if (fill) tl.fromTo(fill, { [axis]: 0 }, { [axis]: 1, duration: 1 });
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="werkwijze" className="section" ref={root} aria-labelledby="werkwijze-titel">
      <div className="container">
        <div className="section__head">
          <h2 id="werkwijze-titel">{PROCESS.title}</h2>
        </div>

        <ol className="process">
          {PROCESS.steps.map((step, i) => (
            <li className="process__step" key={step.title}>
              <span className="process__node" aria-hidden="true">
                {i + 1}
              </span>
              {i < PROCESS.steps.length - 1 && (
                <span className="process__seg" aria-hidden="true">
                  <span className="process__fill" />
                </span>
              )}
              <div className="process__body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
