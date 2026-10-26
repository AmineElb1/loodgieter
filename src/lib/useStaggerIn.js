import { gsap, useGSAP, MOTION_OK } from "./motion";

/**
 * Gestaffelde, subtiele reveal van kinderen bij het in beeld scrollen.
 * Bij prefers-reduced-motion gebeurt er niets: de inhoud staat dan gewoon op zijn plaats.
 */
export default function useStaggerIn(scope, selector, { y = 28, stagger = 0.12, duration = 0.8, start = "top 85%" } = {}) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(selector, {
          opacity: 0,
          y,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: { trigger: scope.current, start, once: true },
        });
      });
    },
    { scope }
  );
}
