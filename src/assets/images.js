// Alle foto's zijn vooraf verkleind (webp) en kregen dezelfde kleurgrading
// (iets minder verzadigd, licht contrast). Zie README voor de bronnen.
import heroWide900 from "./img/hero-wide-900.webp";
import heroWide1600 from "./img/hero-wide-1600.webp";
import heroCrop360 from "./img/hero-crop-360.webp";
import heroCrop536 from "./img/hero-crop-536.webp";
import tech400 from "./img/tech-400.webp";
import tech624 from "./img/tech-624.webp";
import installatie640 from "./img/installatie-640.webp";
import installatie1000 from "./img/installatie-1000.webp";
import reparatie480 from "./img/reparatie-480.webp";
import bus640 from "./img/bus-640.webp";
import bus1000 from "./img/bus-1000.webp";
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
  installatie: {
    src: installatie1000,
    srcSet: `${installatie640} 640w, ${installatie1000} 1000w`,
    width: 1000,
    height: 1333,
    alt: "Nieuw geïnstalleerde Vaillant-ketel met boiler, expansievat en koperen leidingen",
  },
  tech: {
    src: tech624,
    srcSet: `${tech400} 400w, ${tech624} 624w`,
    width: 624,
    height: 748,
    alt: "Technicus van AK & Zonen meet de verbranding van een cv-ketel",
  },
  reparatie: {
    src: reparatie480,
    width: 480,
    height: 359,
    alt: "Technicus werkt aan de onderdelen van een cv-ketel",
  },
  bus: {
    src: bus1000,
    srcSet: `${bus640} 640w, ${bus1000} 1000w`,
    width: 1000,
    height: 1333,
    alt: "Bedrijfsbusje van AK & Zonen met logo, telefoonnummer en e-mailadres",
  },
  logo: {
    src: logo440,
    srcSet: `${logo220} 220w, ${logo440} 440w`,
    width: 440,
    height: 249,
    alt: "AK & Zonen",
  },
};
