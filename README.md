# AK & Zonen – website

Nieuwe, mobile-first website voor AK & Zonen (verwarming, Boom). React 18 + Vite, met GSAP, Lenis en React Bits.

```bash
npm install
npm run dev        # ontwikkelen
npm run build      # productiebuild in dist/
```

Formulier rechtstreeks versturen: maak een `.env` met `VITE_FORM_ENDPOINT=<url van je formulierdienst, bv. Formspree>`.
Zonder endpoint opent het formulier het e-mailprogramma van de bezoeker met het bericht ingevuld (en zegt dat ook eerlijk).

## Waar pas je inhoud aan?

Alle teksten staan in [src/content/content.js](src/content/content.js). Ontbrekende gegevens staan er als
`[PLACEHOLDER]` in en verschijnen op de pagina met een **streepjesrand**:

| Ontbreekt | Waar |
|---|---|
| tweede en derde Google-review (+ naam) | `REVIEWS.items` |
| teamfoto | `ABOUT.photoPlaceholder` |

Zet `SHOW_PLACEHOLDERS = false` om alles wat nog niet is ingevuld te verbergen.
Cijfers: 100+ klanten en 2 u reactietijd zijn door de opdrachtgever bevestigd; "Jaren ervaring" staat zonder getal (aanpasbaar in `STATS`).
Controleer ook de overgenomen cijfers "5,0 op Google" en "33 reviews" en de antwoorden in de FAQ: die komen uit het bestaande
project en konden niet tegen de live-website gecontroleerd worden.

## Gekozen stijl

**Rustig premium (Kris Theuns) met de directe mobiele CTA-opbouw (Koen & Zoon).**

- **Palet uit het logo:** diep marineblauw (dak/leidingen), oranje (vlam/koperen leiding) als *enige* actiekleur, koel wit en lichtgrijs.
  Oranje wordt nooit als tekstkleur op wit gebruikt; knoppen hebben marinetekst op oranje (±6,5 : 1).
- **Typografie:** Fraunces (serif, groot en warm) voor koppen, Figtree voor lopende tekst. Zelf gehost via Fontsource.
- **Eén opvallend element:** de werkwijze is een *koperen leiding* (verwijzing naar het logo) die zich tijdens het scrollen oranje vult.
  De rest blijft stil: veel witruimte, één hoekradius, één knopstijl.
- **Vaste contactbalk:** op mobiel/tablet onderaan met "Bel ons" en "Offerte aanvragen" (56 px hoog, eigen donker vlak
  dus overal goed contrast, body heeft evenveel `padding-bottom` zodat niets wordt afgedekt). Vanaf 1024 px staat dezelfde actie
  vast in de header (telefoonnummer + oranje knop).
- **Foto's:** eigen werkfoto's van AK & Zonen + 3 Unsplash-beelden. Alles is verkleind naar webp (responsive `srcset`,
  lazy loading, alt-teksten) met dezelfde kleurgrading (iets minder verzadigd). Bronnen staan in de footer en in `CREDITS`.

## React Bits (3 componenten, elk met één vaste rol)

Gekopieerd naar [src/components/reactbits/](src/components/reactbits/) (zo gebruik je React Bits ook officieel):

| Component | Waar | Waarom |
|---|---|---|
| `SplitText` | hero-titel | woorden stijgen op bij het laden; gebruikt dezelfde GSAP als de rest |
| `CountUp` | cijfers (score en aantal reviews) | telt eenmalig op bij in beeld komen; lazy geladen zodat `motion` de eerste bundel niet zwaarder maakt |
| `SpotlightCard` | dienstkaarten | licht oranje lichtspoor bij hover/focus; op touch blijft het rustig |

Twee minimale aanpassingen aan de kopieën: `SplitText` accepteert nu een `style`-prop en `CountUp` een `decimalSeparator`
(voor "5,0" in plaats van "5.0"). Let op: React Bits heeft een MIT + Commons Clause-licentie (gebruiken in een klantensite mag, de componenten zelf doorverkopen niet).

## GSAP + Lenis

- [src/lib/smoothScroll.js](src/lib/smoothScroll.js): Lenis draait zonder eigen loop. `lenis.on("scroll", ScrollTrigger.update)`,
  `gsap.ticker.add(t => lenis.raf(t * 1000))` en `lagSmoothing(0)`: GSAP's ticker is de enige render-loop.
  Ankerlinks en de knop "Offerte aanvragen" scrollen via Lenis (rekening houdend met de header via `scroll-margin-top`) en zetten daarna
  de focus op de sectie voor toetsenbord- en screenreadergebruikers. Touch blijft native scrollen.
- [src/lib/motion.js](src/lib/motion.js): registreert `ScrollTrigger`, `SplitText` en `useGSAP` op één plek.
- Animaties (allemaal in `gsap.matchMedia()` met `prefers-reduced-motion: no-preference`):
  - **Hero:** eenmalige timeline: titel → intro en knoppen (na ±0,6 s zichtbaar) → foto-onthulling → pluspunten.
  - **Dienstkaarten, cijfers, reviews, over ons:** gestaggerde reveal via [useStaggerIn](src/lib/useStaggerIn.js).
  - **Werkwijze:** scrub-timeline die per stap de leiding vult en het knooppunt aanzet (verticaal op mobiel, horizontaal vanaf 1024 px).
  - **FAQ:** pure CSS-animatie (grid-rijhoogte), geen JS nodig.
- **Reduced motion:** Lenis start niet, GSAP-animaties worden niet aangemaakt (alles staat direct op zijn plaats, de leiding is gevuld),
  `SplitText` en `CountUp` tonen meteen de eindwaarde en CSS-transities worden uitgeschakeld.

## Toegankelijkheid en prestaties

- Semantische HTML: één `h1`, `h2` per sectie, `h3` voor kaarten/stappen/vragen; skip-link, `nav`-landmarks, `aria-expanded` op menu en FAQ.
- Zichtbare focus (navy op licht, oranje op donker), tikdoelen ≥ 44 px, formulier met zichtbare labels en 16 px invoer (geen iOS-zoom).
- Getest met axe-core (WCAG 2.0/2.1 A + AA + best practices) op 360, 430, 820 en 1440 px en met reduced motion: 0 schendingen, geen horizontale overflow.
- Hoofdbundel ±113 kB gzip (React + GSAP + Lenis), fonts zelf gehost, hero-foto met `fetchpriority="high"`, overige foto's lazy, afmetingen op alle `img` tegen layout shift.
- Geen WhatsApp-knop: er is geen bevestigd WhatsApp-nummer. Voeg er een toe in `ContactBar` als dat bestaat.

## Structuur

```
src/
  content/content.js        alle teksten, placeholders, fotobronnen
  assets/images.js + img/   geoptimaliseerde beelden
  lib/                      motion.js, smoothScroll.js, useStaggerIn.js
  styles/base.css           tokens, reset, layout
  components/               Header, ContactBar, Hero, Services, Trust, Process, Reviews, About, Faq, Contact, Footer
  components/ui/            Button, Icons
  components/reactbits/     SplitText, CountUp, SpotlightCard
source-assets/              originele logo en werkfoto's (niet in de build)
```
