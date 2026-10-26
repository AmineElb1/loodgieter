// Alle foto's zijn vooraf verkleind (webp) en kregen dezelfde kleurgrading
// (iets minder verzadigd, licht contrast). Zie README voor de bronnen.
import heroWide900 from "./img/hero-wide-900.webp";
import heroWide1600 from "./img/hero-wide-1600.webp";
import heroCrop360 from "./img/hero-crop-360.webp";
import heroCrop536 from "./img/hero-crop-536.webp";
import tech400 from "./img/tech-400.webp";
import tech624 from "./img/tech-624.webp";
import warm640 from "./img/warm-640.webp";
import warm1200 from "./img/warm-1200.webp";
import oud640 from "./img/oud-640.webp";
import oud1200 from "./img/oud-1200.webp";
import interieur480 from "./img/interieur-480.webp";
import interieur800 from "./img/interieur-800.webp";
import logo220 from "./img/logo-220.webp";
import logo440 from "./img/logo-440.webp";

export const IMG = {
  heroWide: {
    src: heroWide1600,
    srcSet: `${heroWide900} 900w, ${heroWide1600} 1600w`,
    width: 1600,
    height: 549,
    alt: "Een technicus van AK & Zonen plaatst een nieuwe cv-ketel in een kelder",
  },
  heroCrop: {
    src: heroCrop536,
    srcSet: `${heroCrop360} 360w, ${heroCrop536} 536w`,
    width: 536,
    height: 670,
  },
  warm: {
    src: warm1200,
    srcSet: `${warm640} 640w, ${warm1200} 1200w`,
    width: 1200,
    height: 799,
    alt: "Witte radiator onder een raam in een warme woonkamer",
  },
  tech: {
    src: tech624,
    srcSet: `${tech400} 400w, ${tech624} 624w`,
    width: 624,
    height: 748,
    alt: "Technicus van AK & Zonen meet de verbranding van een cv-ketel",
  },
  oud: {
    src: oud1200,
    srcSet: `${oud640} 640w, ${oud1200} 1200w`,
    width: 1200,
    height: 800,
    alt: "Oude radiator bij een raam, klaar voor herstelling",
  },
  interieur: {
    src: interieur800,
    srcSet: `${interieur480} 480w, ${interieur800} 800w`,
    width: 800,
    height: 1203,
    alt: "Warm ingericht interieur met een radiator en houten vloer",
  },
  logo: {
    src: logo440,
    srcSet: `${logo220} 220w, ${logo440} 440w`,
    width: 440,
    height: 250,
    alt: "AK & Zonen",
  },
};
