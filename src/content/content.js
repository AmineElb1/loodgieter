/**
 * Alle zichtbare inhoud op één plek.
 * Bron: de bestaande AK & Zonen-website. Wat daar ontbreekt staat hieronder als
 * [PLACEHOLDER] en is duidelijk gemarkeerd op de pagina.
 *
 * Zet SHOW_PLACEHOLDERS op false om alle nog niet ingevulde onderdelen te verbergen
 * zodra de echte gegevens ontbreken én je ze niet wil tonen.
 */
export const SHOW_PLACEHOLDERS = true;

export const COMPANY = {
  name: "AK & Zonen",
  street: "Bosstraat 14",
  city: "2850 Boom",
  phone: "+32486777120",
  phoneLabel: "+32 486 77 71 20",
  email: "Ak.zonen@hotmail.com",
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("AK & Zonen, Bosstraat 14, 2850 Boom");

export const NAV = [
  { label: "Diensten", href: "#diensten" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Reviews", href: "#reviews" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  place: "Familiebedrijf uit Boom",
  title: "Verwarming waar je op kunt vertrouwen",
  lead: "Installatie, onderhoud en herstelling van je cv-ketel. Wij zijn een familiebedrijf uit Boom en elke dag onderweg in de regio.",
  usps: ["Persoonlijke aanpak", "Transparante prijzen", "Snelle service in Boom en omstreken"],
};

export const SERVICES_INTRO = {
  title: "Alles voor een warm huis",
};

export const SERVICES = [
  {
    id: "installatie",
    title: "Installatie en vervanging",
    text: "Is je ketel 10 tot 15 jaar oud? Een nieuw toestel bespaart elke maand op je energiefactuur.",
    cta: "Vraag een offerte",
    image: "installatie",
    position: "50% 45%",
  },
  {
    id: "onderhoud",
    title: "Onderhoud",
    text: "Een regelmatig onderhoud van uw verwarmingsketel is niet alleen wettelijk verplicht, maar zorgt tevens voor een zuiniger energieverbruik en een verlengde levensduur van uw CV-ketel.",
    cta: "Plan je onderhoud",
    image: "tech",
    position: "50% 22%",
  },
  {
    id: "reparatie",
    title: "Reparatie",
    text: "Wisselende temperatuur of geen warm water? We zoeken de oorzaak en herstellen snel.",
    cta: "Meld je probleem",
    image: "reparatie",
    position: "50% 50%",
  },
];

/**
 * value: getal dat optelt; text: vaste tekst zonder getal; value === null: nog in te vullen (aanpasbare tekst).
 * Cijfers: 5,0 en 33 uit de huidige website; 100+ klanten bevestigd door de opdrachtgever.
 */
export const STATS = [
  { id: "score", value: 5, decimals: 1, suffix: "", label: "Score op Google", stars: true },
  { id: "reviews", value: 33, decimals: 0, suffix: "", label: "Google-reviews" },
  { id: "klanten", value: 100, decimals: 0, suffix: "+", label: "tevreden klanten" },
];

export const PROCESS = {
  title: "Zo werken wij",
  steps: [
    {
      title: "Neem contact op",
      text: "Bel of mail ons. We luisteren naar je vraag en denken meteen mee.",
    },
    {
      title: "Offerte en planning",
      text: "Je krijgt een duidelijke, gratis offerte en we plannen samen een moment dat past.",
    },
    {
      title: "Uitvoering",
      text: "Netjes en op tijd uitgevoerd, met uitleg zodat je weet wat we deden.",
    },
  ],
};

/**
 * Google-link voor "Review toevoegen". Vervang door de directe review-link van het bedrijfsprofiel:
 * https://search.google.com/local/writereview?placeid=<PLACE_ID>
 * Zolang die ontbreekt, opent het bedrijfsprofiel op Google Maps (daar staat de knop "Review schrijven").
 */
export const GOOGLE_REVIEW_URL = MAPS_URL;

/**
 * source: waar de review vandaan komt (alleen invullen voor echte, overgenomen reviews).
 * Het blok wisselt automatisch tussen deze reviews af: voeg er gewoon meer aan toe.
 */
export const REVIEWS = {
  title: "5,0 op Google, 33 reviews",
  items: [
    {
      text: "Zeer snelle en goede service. Heel eerlijk advies en professionele interventies. Ze zijn heel correct en komen hun afspraken na.",
      name: "Ingrid Verhulst",
      source: "Google",
    },
    // TIJDELIJK: verzonnen voorbeeldreviews (5 sterren). Vervang door echte Google-reviews vóór livegang.
    { text: "Vlot geholpen en alles netjes achtergelaten. Duidelijke uitleg over wat er moest gebeuren.", name: "Peter D." },
    { text: "Onze ketel werd snel hersteld en de prijs was zoals afgesproken. Aanrader!", name: "Sofie V." },
  ],
  add: {
    title: "Ervaring met AK & Zonen?",
    text: "Laat het ons weten met een review. Het duurt maar een minuutje.",
    cta: "Review toevoegen",
    ratingLabel: "Hoeveel sterren geef je ons?",
    positive: "Fijn om te horen! Plaats je review op Google, zo help je ook andere klanten.",
    positiveCta: "Naar Google reviews",
    negative: "Dat vinden we jammer. Vertel ons wat er beter kon, zodat we het de volgende keer beter doen.",
    success: "Bedankt voor je feedback. We lezen die persoonlijk en nemen ze mee om het beter te doen.",
  },
};

export const ABOUT = {
  title: "Een familiebedrijf uit Boom",
  text: "AK & Zonen staat voor vakmanschap met oog voor detail. Onze kernwaarden zijn kwaliteit, betrouwbaarheid en duidelijke communicatie.",
  values: ["Kwaliteit", "Betrouwbaarheid", "Duidelijke communicatie"],
  quote: "Bij AK & Zonen ben je geen nummer, maar een naam.",
};

export const FAQ = {
  title: "Veelgestelde vragen",
  items: [
    {
      q: "Hoe vaak moet mijn cv-ketel onderhouden worden?",
      a: "Een regelmatig onderhoud zorgt ervoor dat uw cv-ketel veilig, zuinig en betrouwbaar blijft werken. In Vlaanderen moet een gasketel verplicht om de 2 jaar onderhouden worden. Tijdens het onderhoud controleren we de ketel grondig en sporen we eventuele problemen tijdig op.",
    },
    {
      q: "Wanneer is vervanging aangewezen?",
      a: "Is uw cv-ketel verouderd, heeft u regelmatig storingen of merkt u dat uw energieverbruik stijgt? Dan kan vervanging interessant zijn. We bekijken uw situatie en adviseren u graag over de beste oplossing.",
    },
    {
      q: "Werken jullie ook buiten Boom?",
      a: "Ja! We helpen klanten in Boom en ook in de omliggende gemeenten. Neem gerust contact met ons op om te vragen of we bij u in de buurt actief zijn.",
    },
    {
      q: "Is de offerte gratis?",
      a: "Ja, onze offertes zijn volledig gratis en vrijblijvend. We bekijken eerst wat u nodig heeft en bezorgen u daarna een duidelijke offerte, zonder verplichtingen.",
    },
  ],
};

export const CONTACT = {
  title: "Neem contact met ons op",
  lead: "Heb je een vraag, wil je een probleem melden of een gratis offerte aanvragen? Laat je gegevens achter en we nemen snel contact met je op. Liever meteen iemand spreken? Bel gerust.",
  success: "Bedankt! We nemen snel contact met je op.",
};
