import { PricingData } from "../types/pricing";

export const pricingData: PricingData = {
  metaData: {
    title: "Prisplaner",
  },

  pricingTitle: "Prisplaner",
  pricingSubtitle:
    "Få tillgång till de bästa funktionerna för att ta din e-handel till nästa nivå.",
  pricingList: [
    {
      id: 1,
      text: "Engångsbetalning",
    },
    {
      id: 2,
      text: "Inga månadsavgifter",
    },
    {
      id: 3,
      text: "Livstidsåtkomst",
    },
  ],
  pricingData: [
    {
      id: 1,
      name: "Standard",
      imageUrl: "/icons/pricing/1-standard.png",
      isPopular: false,
      price: "9 997 :-",
      lists: [
        {
          id: 1,
          label: "Introduktion till Dropshipping",
        },
        {
          id: 2,
          label: "Hitta din Nisch",
        },
        {
          id: 3,
          label: "Konfigurera din Butik",
        },
        {
          id: 4,
          label: "Marknadsföring och Reklam",
        },
        {
          id: 5,
          label: "Tillgång till Privat Community",
        },
      ],
      buttonText: "Starta nu",
      secureText: "7-dagars gratis provperiod. Avbryt när som helst",
    },
    {
      id: 2,
      name: "Premium",
      imageUrl: "/icons/pricing/2-premium.png",
      isPopular: true,
      price: "14 997 :-",
      lists: [
        {
          id: 1,
          label: "Hitta rätt Leverantör",
        },
        {
          id: 2,
          label: "Hur man växer ett Varumärke",
        },
        {
          id: 3,
          label: "Gör Virala Annonser",
        },
        {
          id: 4,
          label: "SEO-optimering",
        },
        {
          id: 5,
          label: "Photoshop",
        },
        {
          id: 6,
          label: "Vegas Pro",
        },
      ],
      buttonText: "Starta nu",
      secureText: "7-dagars gratis provperiod. Avbryt när som helst",
    },
    {
      id: 3,
      name: "Platinum",
      imageUrl: "/icons/pricing/3-platinum.png",
      isPopular: false,
      price: "19 997 :-",
      lists: [
        {
          id: 1,
          label: "Anpassad Strategi",
        },
        {
          id: 2,
          label: "Dropshipping-verktyg",
        },
        {
          id: 3,
          label: "Events och Webinars",
        },
        {
          id: 4,
          label: "Färdig e-handelsbutik",
        },
        {
          id: 5,
          label: "Google Ads och SEO-guide",
        },
        {
          id: 6,
          label: "Personlig Coachning",
        },
        {
          id: 7,
          label: "Premium Kundsupport",
        },
      ],
      buttonText: "Starta nu",
      secureText: "7-dagars gratis provperiod. Avbryt när som helst",
    },
  ],

  enterpriseTitle: "Företag",
  enterpriseSubtitle:
    "Kan du inte hitta en prisplan som passar dina behov? Inga problem, vi har alla funktioner för dina behov.",
  enterpriseButton: "Kontakta oss",

  outstandingTitle: "Enastående Kapitaltillväxt",
  outstandingSubtitleFirst:
    "Checkified förespråkar ett entreprenörskap som fungerar på lika villkor och som omfattar både sociala och ekonomiska dimensioner, vilket leder till konstruktiva relationer mellan våra studenter.",
  outstandingSubtitleSecond:
    "Våra insatser främjar mångfald i ägarmodeller inom näringslivet.",

  studentSayBlackTitle: "Vad Våra",
  studentSayBlueTitle: "Studenter Säger?",
  studentsSayData: [
    {
      id: 1,
      imageUrl: "/images/impact/1-kajsa.png",
      message:
        "Dropshipping har förändrat mitt liv. Fick lära mig mycket och slutat mitt 9-5. Rekommenderat detta till mina vänner.",
      name: "Kajsa Wahlgren",
      position: "Checkified Student",
    },
    {
      id: 2,
      imageUrl: "/images/impact/2-andreas.png",
      message:
        "Jag kan dock med säkerhet säga att Checkified slår dem alla. Bästa lösningen för att komma igång med Dropshipping.",
      name: "Andreas Bowall",
      position: "Checkified Student",
    },
    {
      id: 3,
      imageUrl: "/images/impact/3-felix.png",
      message:
        "Skapade min shopify butik, sålde första månaden för 35 tusen i vinstmarginal, utan att skala. Bästa investeringen.",
      name: "Felix Aadland",
      position: "Checkified Student",
    },
    {
      id: 4,
      imageUrl: "/images/impact/4-simon.png",
      message:
        "Riktigt bra innehåll, med kunniga mentorer. Modulerna är enkla att följa, med notifikationer för att hålla dig motiverad.",
      name: "Simon Vimmerson",
      position: "Checkified Student",
    },
    {
      id: 5,
      imageUrl: "/images/impact/5-felicia.png",
      message:
        "Älskar affärsmodellen med dropshipping, så jag köpte kursen och var det bästa jag gjort. Krävs lite startkapital, perfekt för nyböjare.",
      name: "Felicia Benjaminson",
      position: "Checkified Student",
    },
    {
      id: 6,
      imageUrl: "/images/impact/6-lucas.png",
      message:
        "Plattformen är grym. Tog mig tre butiker innan jag hittade en vinnande produkt. Rekommenderar Checkified!",
      name: "Lukas Boström",
      position: "Checkified Student",
    },
  ],

  faqBlackTitle: "Vanliga",
  faqBlueTitle: "Frågor",
  faqData: [
    {
      id: 1,
      question: "Vad är Checkified?",
      answer:
        "Checkified är en plattform för onlineutbildning som erbjuder ett brett utbud av kurser. Checkifieds kurser är tillgängliga inom en mängd olika ämnen, inklusive affärer, teknik, ekonomi och mycket mer.",
    },
    {
      id: 2,
      question: "Vad är Dropshipping?",
      answer:
        "Dropshipping är en metod för detaljhandelsförsäljning där en butik inte har de produkter som säljs i lager. När butiken säljer en produkt köper den i stället varan från en tredje part och skickar den direkt till kunden. Detta innebär att handlaren aldrig ser eller hanterar produkten.",
    },
    {
      id: 3,
      question:
        "Hur skiljer sig Checkified från andra plattformar för lärande online?",
      answer:
        "Checkified skiljer sig från andra plattformar för onlineutbildning genom sitt breda utbud av kurser. En mängd olika funktioner för att förbättra inlärningsupplevelsen, t.ex. kamratbedömda uppgifter och interaktiva frågesporter.",
    },
    {
      id: 4,
      question: "Hur anmäler jag mig till en Checkified-kurs?",
      answer:
        "För att registrera ett konto, klicka på ”Starta nu”. Om du redan har ett konto kan du logga in.",
    },
    {
      id: 5,
      question: "Vad händer om jag inte är nöjd?",
      answer:
        "Om du inte är nöjd med kursen kan du få pengarna tillbaka inom 14 dagar, alternativt inte tittat mer än 25% av kursen.",
    },
    {
      id: 6,
      question: "Kan jag få pengarna tillbaka för en Checkified-kurs?",
      answer:
        "Checkified erbjuder en 14-dagars återbetalningspolicy för de flesta kurser. Det finns dock vissa kurser som inte är berättigade till återbetalning, så det är viktigt att kontrollera återbetalningspolicyn för varje kurs innan du registrerar dig.",
    },
    {
      id: 7,
      question: "Vilka betalningsmetoder accepterar ni?",
      answer:
        "Checkified accepterar Visa, Mastercard och American Express genom säker betalningshantering på plats.",
    },
  ],

  howItWorkData: {
    title: "Hur Det Fungerar",
    subtitle: "Det är så enkelt som 1, 2, 3.",
    button: "Bara 499 kr? Ja Tack!",
    items:  [
      {
        id: 1,
        imageUrl: "/icons/home/feature-unlimited-access.png",
        desc1: "Beställ din e-handelswebbplats från oss så konfigurerar vi den helt åt dig för endast 499 SEK.",
        desc2: "När vi har designat webbplatsen lägger vi till 30 produkter som du kan börja sälja direkt.",
      },
      {
        id: 2,
        imageUrl: "/icons/home/feature-create-content.png",
        desc1: "Låt oss säga att du hade en sminkborste listad på din kosmetikwebbplats för 299 SEK",
        desc2: "Vi kommer att integrera en leverantör som kan skicka den exakta sminkborsten till någon i världen för endast 99 SEK",
      },
      {
        id: 3,
        imageUrl: "/icons/home/feature-selling-service.png",
        desc1: "Om du gör allt detta på rätt sätt kommer detta att vara en bra plattform för en hög avkastning med bara ett minimum av uppmärksamhet!",
        desc2: "Återinvestera tillbaka i ditt företag och upprepa vad som fungerar!",
      }
    ]
  },

  hero: {
    title: 'E-handelsexperter bygger en optimerad e-handelsbutik på under 24 timmar för endast 499 kr!',
    desc: 'Vårt team av e-handelsexperter har designat över 478+ dropshipping-butiker och är här för att hjälpa dig att bygga din butik för endast 499kr!',
    button: 'Få din butik 499 SEK!',
    buttonDesc: '& Lås upp 2 GRATIS gåvor',
    descTitle: '478+ Sålda Butiker'
  },

  reviews: {
    title: 'Recensioner',
    items: [
        'Efter att ha testat flera onlineföretag som Amazon FBA, SMMA, och affiliate marketing, insåg jag att de mest bara var ute efter att ta mina pengar utan att ge något verkligt värde tillbaka. När jag stötte på checkified-butiker bestämde jag mig för att ge dropshipping en chans, och jag är så glad att jag gjorde det. Inom en enda dag hade jag en fullständig butik redo att köra, och tack vare TikTok-annonser har jag redan återhämtat min investering. Jag rekommenderar starkt detta till alla nybörjare!',
        'Som ny inom dropshipping blev jag positivt överraskad av den snabba och enkla installationen av min butik. Nu kan jag fokusera på marknadsföring och ser fram emot min resa med dropshipping.',
        'Checkified ebutiker överträffade mina förväntningar med en modern design och unika produkter. Jag rekommenderar att välja deras färdig byggda e-handelsbutiker.',
        'Trots min initiala skepsis över det låga priset blev jag positivt överraskad av kvaliteten på butiken och produkterna. Checkified ebutiker erbjuder enastående värde för nybörjare som mig och jag är mycket nöjd med mitt köp.',
        'Jag är imponerad av den höga kvaliteten på min butik och de tillhörande produkterna till ett sådant överkomligt pris. Tack vare Checkified kan jag spara massor av tid och pengar.',
        'Jag hade ingen erfarenhet av dropshipping men beslutade ändå att prova det här och blev glatt överraskad av den professionella butiken och de högkvalitativa produkterna. Bonus boken var ovärderlig och jag skulle definitivt rekommendera Checkified-butiker till alla. ',
        'Jag beställde min butik och blev förvånad över att få den levererad redan nästa dag. Tack vare Checkified kan jag nu generera betydande intäkter varje dag. Tack så mycket!',
        'Jag blev positivt överraskad av den höga kvaliteten på min butik och produkterna. Trots min initiala skepsis är jag nu en nöjd kund och ser fram emot att göra fler affärer med Checkified butiker.',
    ]
  },

  bonuses: {
    title: '2 GRATIS bonusar för dagens köpare:',
    cards: [
      '/images/pricing/bonus1.png',
      '/images/pricing/bonus2.png'
    ],
    bottomDesc: '(ENGÅNGSBETALNING)',
    redPrice: 'Normal Kostnad: 2,000 SEK+',
    greenPrice: 'Bara 499 SEK!',
  },

  orderNow: {
    title: 'Beställ Nu Så Får Du',
    items: [
      {
        title: '30 Lönsamma Produkter Utvalda Av Våra Experter',
        desc: 'till i din butik (inklusive produktbeskrivningar)...'
      },
      {
        title: 'Exklusiv Tillgång Till Min Personliga Leverantör',
        desc: 'som lagrar produkterna du säljer och skickar dem till dina kunder billigt och snabbt...'
      },
      {
        title: 'Dropshipping E-handelsbok',
        desc: 'så att du kan förstå grunden till dropshipping utan att behöva lägga pengar på dyra e-handel kurser...'
      },
      {
        title: 'Prisbelönt Kundsupport Dygnet Runt ',
        desc: 'så att du kan ha ett team av e-handelsexperter vid din sida för att hjälpa dig göra din första försäljning online...'
      },
    ]
  }
};
