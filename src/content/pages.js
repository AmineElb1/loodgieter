/**
 * Dienstpagina's. Elke pagina krijgt een eigen URL (/<slug>), eigen title en description, en wordt bij de build
 * vooraf gerenderd. Alleen feiten die uit de website, de FAQ of echte Google-reviews komen; geen prijzen of merken.
 * sections: { title, paragraphs?, list?, steps? }   review: een echte Google-review (inkorting met […])
 */
export const PAGES = [
  {
    slug: "cv-ketel-vervangen",
    service: "installatie",
    navTitle: "Cv-ketel vervangen",
    seoTitle: "Cv-ketel vervangen in Boom en omgeving | AK & Zonen",
    description:
      "Cv-ketel vervangen in Boom, Niel, Rumst of Aartselaar? AK & Zonen installeert uw nieuwe ketel netjes en met uitleg. Gratis en vrijblijvende offerte.",
    h1: "Cv-ketel vervangen in Boom en omstreken",
    lead: "Is uw cv-ketel verouderd of valt hij regelmatig uit? AK & Zonen vervangt en installeert cv-ketels in Boom, Niel, Rumst, Aartselaar en de rest van de regio. U krijgt vooraf een duidelijke, gratis en vrijblijvende offerte.",
    cta: { title: "Een nieuwe cv-ketel nodig?", text: "Vraag een gratis en vrijblijvende offerte aan, of bel ons.", button: "Offerte aanvragen" },
    sections: [
      {
        title: "Wanneer is vervanging aangewezen?",
        paragraphs: [
          "Is uw ketel 10 tot 15 jaar oud? Dan is het een goed moment om na te gaan of vervanging interessant is. Een nieuw toestel bespaart elke maand op uw energiefactuur.",
        ],
        list: [
          "Uw cv-ketel is verouderd",
          "U heeft regelmatig storingen",
          "Uw energieverbruik stijgt",
          "Herstellingen komen te vaak terug",
        ],
        after: "Twijfelt u? We bekijken uw situatie en adviseren u graag over de beste oplossing.",
      },
      {
        title: "Zo verloopt een vervanging",
        steps: [
          { title: "Neem contact op", text: "Bel of mail ons. We luisteren naar uw vraag en denken meteen mee." },
          { title: "Offerte en planning", text: "U krijgt een duidelijke, gratis offerte en we plannen samen een moment dat past." },
          { title: "Uitvoering", text: "Netjes en op tijd uitgevoerd, met uitleg zodat u weet wat we deden." },
        ],
      },
    ],
    review: {
      text: "Hij heeft bij ons een nieuwe CV ketel geplaats[t] met alles er op en aan […]. Alles netjes afgewerkt zoals de veiligheid het voorschrijft, ook alles heel proper achtergelaten.",
      name: "François Smets",
    },
  },
  {
    slug: "cv-ketel-onderhoud",
    service: "onderhoud",
    navTitle: "Cv-ketel onderhoud",
    seoTitle: "Cv-ketel onderhoud in Boom en omgeving | AK & Zonen",
    description:
      "Cv-ketel onderhoud in Boom, Niel, Rumst en Aartselaar. Veilig, zuinig en betrouwbaar verwarmen met onderhoud door AK & Zonen. Plan uw onderhoud online.",
    h1: "Cv-ketel onderhoud in Boom en omstreken",
    lead: "Een regelmatig onderhoud houdt uw cv-ketel veilig, zuinig en betrouwbaar. AK & Zonen onderhoudt cv-ketels in Boom, Niel, Rumst, Aartselaar en omgeving.",
    cta: { title: "Onderhoud plannen?", text: "Laat uw gegevens achter of bel ons, dan plannen we samen een moment dat past.", button: "Onderhoud plannen" },
    sections: [
      {
        title: "Waarom onderhoud?",
        paragraphs: [
          "In Vlaanderen moet een gasketel verplicht om de 2 jaar onderhouden worden. Een regelmatig onderhoud is niet alleen wettelijk verplicht, maar zorgt tevens voor een zuiniger energieverbruik en een verlengde levensduur van uw cv-ketel.",
        ],
        list: ["Veilig: uw ketel wordt grondig gecontroleerd", "Zuinig: een lager energieverbruik", "Betrouwbaar: minder kans op storingen", "Langer meegaan: een verlengde levensduur"],
      },
      {
        title: "Wat mag u verwachten?",
        paragraphs: [
          "Tijdens het onderhoud controleren we uw ketel grondig en sporen we eventuele problemen tijdig op. Zo weet u waar u aan toe bent en voorkomt u onaangename verrassingen in de winter.",
        ],
      },
    ],
    review: {
      text: "De medewerker kwam langs voor een onderhoud van mijn cv-ketel en heeft alles correct uitgevoerd. Gaf enkele tips om de levensduur van mijn ketel te verlengen en stuurde tijdens het bezoek het keuringsattest al meteen door. Zeer vriendelijk, en daarom hebben we tussendoor ook een leuke babbel gehad. Enorm tevreden over het proces!",
      name: "Islamov Khamzat",
    },
  },
  {
    slug: "cv-ketel-herstelling",
    service: "reparatie",
    navTitle: "Storing of herstelling",
    seoTitle: "Cv-ketel storing en herstelling in Boom | AK & Zonen",
    description:
      "Geen warm water of een storing aan uw cv-ketel? AK & Zonen zoekt de oorzaak en herstelt snel in Boom, Niel, Rumst en Aartselaar. Meld uw probleem.",
    h1: "Cv-ketel storing of herstelling in Boom en omstreken",
    lead: "Geen warm water, wisselende temperatuur of een ketel die niet meer wil starten? AK & Zonen zoekt de oorzaak en herstelt snel, in Boom, Niel, Rumst, Aartselaar en omgeving.",
    cta: { title: "Een probleem met uw ketel?", text: "Meld uw probleem via het formulier of bel ons.", button: "Probleem melden" },
    sections: [
      {
        title: "Herkent u dit?",
        list: [
          "Geen warm water",
          "Een wisselende temperatuur",
          "Radiatoren die niet (goed) warm worden",
          "Een ketel die uitvalt of een foutmelding toont",
          "Ongewone geluiden uit de ketel",
        ],
        after: "Herkent u een van deze signalen? Meld het ons, dan zoeken we de oorzaak.",
      },
      {
        title: "Zo pakken we het aan",
        paragraphs: [
          "We zoeken eerst de oorzaak en bespreken daarna met u wat de beste oplossing is. Is herstellen niet meer zinvol, dan denken we met u mee over vervanging van uw cv-ketel.",
        ],
      },
      {
        title: "Ruikt u gas?",
        paragraphs: [
          "Open ramen en deuren, gebruik geen vuur of elektrische schakelaars, verlaat de woning en bel de hulpdiensten op 112. Bel ons pas daarna.",
        ],
      },
    ],
    review: {
      text: "Een warmwater probleem met mijn H-rendement gasketel van 10 jaar oud. […] probleem met de ketel opgespoord zonder overdreven service kosten of uren aan te rekenen […] Kortom, goed service en eerlijke prijs.",
      name: "Yves Verstraeten",
    },
  },
];

/** Normaliseert "/cv-ketel-onderhoud/" naar de pagina, of undefined voor de homepage en onbekende paden */
export const findPage = (path = "/") => PAGES.find((p) => `/${p.slug}` === path.replace(/\/+$/, ""));
