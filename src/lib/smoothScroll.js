import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion";

let lenis = null;

/**
 * Lenis geeft het smooth scrollen, GSAP's ticker is de enige render-loop en
 * ScrollTrigger wordt bij elke Lenis-scroll bijgewerkt.
 * Bij prefers-reduced-motion blijft de browser gewoon native scrollen.
 */
export function initSmoothScroll() {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}

/** Scrolt naar een element (met Lenis indien actief) en zet de focus erop voor toetsenbord- en screenreadergebruik. */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = -(parseFloat(getComputedStyle(el).scrollMarginTop) || 0);
  const focusTarget = () => {
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.1, onComplete: focusTarget });
  } else {
    el.scrollIntoView();
    focusTarget();
  }
  history.replaceState(null, "", `#${id}`);
}

/** onClick voor interne ankerlinks (#diensten, #contact, …). */
export function handleAnchorClick(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
  const href = event.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  event.preventDefault();
  scrollToId(href.slice(1) || "top");
}
