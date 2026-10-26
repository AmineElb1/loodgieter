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
    image: "warm",
  },
  {
    id: "onderhoud",
    title: "Onderhoud",
    text: "Jaarlijks onderhoud is wettelijk verplicht en houdt je ketel veilig, zuinig en langer in leven.",
    cta: "Plan je onderhoud",
    image: "tech",
  },
  {
    id: "reparatie",
    title: "Reparatie",
    text: "Wisselende temperatuur of geen warm water? We zoeken de oorzaak en herstellen snel.",
    cta: "Meld je probleem",
    image: "oud",
  },
];

/**
 * value: getal dat optelt; text: vaste tekst zonder getal; value === null: nog in te vullen (aanpasbare tekst).
 * Cijfers: 5,0 en 33 uit de huidige website; 100+ klanten en 2 u reactietijd bevestigd door de opdrachtgever.
 */
export const STATS = [
  { id: "score", value: 5, decimals: 1, suffix: "", label: "Score op Google", stars: true },
  { id: "reviews", value: 33, decimals: 0, suffix: "", label: "Google-reviews" },
  { id: "klanten", value: 100, decimals: 0, suffix: "+", label: "tevreden klanten" },
  { id: "reactie", value: 2, decimals: 0, suffix: " u", label: "reactietijd" },
  // Aantal jaren is nog niet bekend: tekst zonder getal. Wil je een getal tonen, vervang `text` door value: 15, decimals: 0, suffix: "+".
  { id: "ervaring", text: "Jaren", label: "ervaring" },
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

export const REVIEWS = {
  title: "5,0 op Google, 33 reviews",
  items: [
    {
      text: "Zeer snelle en goede service. Heel eerlijk advies en professionele interventies. Ze zijn heel correct en komen hun afspraken na.",
      name: "Ingrid Verhulst",
    },
    // Tijdelijke dummy-reviews (5 sterren): vervangen door echte Google-reviews
    { text: "[Dummy] Tweede review van een klant, hier komt de echte tekst.", name: "[Naam klant]", placeholder: true },
    { text: "[Dummy] Derde review van een klant, hier komt de echte tekst.", name: "[Naam klant]", placeholder: true },
  ],
};

export const ABOUT = {
  title: "Een familiebedrijf uit Boom",
  text: "AK & Zonen staat voor vakmanschap met oog voor detail. Onze kernwaarden zijn kwaliteit, betrouwbaarheid en duidelijke communicatie.",
  values: ["Kwaliteit", "Betrouwbaarheid", "Duidelijke communicatie"],
  quote: "Bij AK & Zonen ben je geen nummer, maar een naam.",
  photoPlaceholder: "[Teamfoto AK & Zonen – aan te vullen]",
};

export const FAQ = {
  title: "Veelgestelde vragen",
  items: [
    {
      q: "Hoe vaak moet mijn cv-ketel onderhouden worden?",
      a: "Minstens één keer per jaar. Zo blijft je ketel veilig en zuinig.",
    },
    {
      q: "Wanneer is vervanging aangewezen?",
      a: "Meestal na 10 à 15 jaar, of als herstellingen te vaak terugkomen.",
    },
    {
      q: "Werken jullie ook buiten Boom?",
      a: "Ja, in de hele regio rond Boom. Vraag gerust na voor jouw gemeente.",
    },
    {
      q: "Is de offerte gratis?",
      a: "Ja, je offerte is gratis en vrijblijvend.",
    },
  ],
};

export const CONTACT = {
  title: "Vraag je offerte aan",
  lead: "Laat je gegevens achter en we nemen snel contact met je op. Liever meteen iemand spreken? Bel gerust.",
  success: "Bedankt! We nemen snel contact met je op.",
};

/** Fotobronnen (Unsplash) en eigen beelden */
export const CREDITS = [
  {
    label: "Radiator in woonkamer",
    author: "e24",
    short: "e24 (woonkamer)",
    url: "https://unsplash.com/photos/a-white-radiator-in-a-room-N6KVqGA44ZI",
  },
  {
    label: "Oude radiator bij het raam",
    author: "Julian Hochgesang",
    short: "Julian Hochgesang (radiator)",
    url: "https://unsplash.com/photos/white-radiator-heater-beside-brown-wooden-window-ihx1LdtnGXw",
  },
  {
    label: "Warm interieur",
    author: "e24",
    short: "e24 (interieur)",
    url: "https://unsplash.com/photos/a-room-with-a-table-and-a-chair-ah03LdkafTA",
  },
];
