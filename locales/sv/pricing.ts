import { PricingData } from "../types/pricing"

export const pricingData: PricingData = {
  metaData: {
    title: "Butiker",
  },

  pricingTitle: "Butiker",
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
    "framgångsinstitutet förespråkar ett entreprenörskap som fungerar på lika villkor och som omfattar både sociala och ekonomiska dimensioner, vilket leder till konstruktiva relationer mellan våra studenter.",
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
      position: "framgångsinstitutet Student",
    },
    {
      id: 2,
      imageUrl: "/images/impact/2-andreas.png",
      message:
        "Jag kan dock med säkerhet säga att framgångsinstitutet slår dem alla. Bästa lösningen för att komma igång med Dropshipping.",
      name: "Andreas Bowall",
      position: "framgångsinstitutet Student",
    },
    {
      id: 3,
      imageUrl: "/images/impact/3-felix.png",
      message:
        "Skapade min shopify butik, sålde första månaden för 35 tusen i vinstmarginal, utan att skala. Bästa investeringen.",
      name: "Felix Aadland",
      position: "framgångsinstitutet Student",
    },
    {
      id: 4,
      imageUrl: "/images/impact/4-simon.png",
      message:
        "Riktigt bra innehåll, med kunniga mentorer. Modulerna är enkla att följa, med notifikationer för att hålla dig motiverad.",
      name: "Simon Vimmerson",
      position: "framgångsinstitutet Student",
    },
    {
      id: 5,
      imageUrl: "/images/impact/5-felicia.png",
      message:
        "Älskar affärsmodellen med dropshipping, så jag köpte kursen och var det bästa jag gjort. Krävs lite startkapital, perfekt för nyböjare.",
      name: "Felicia Benjaminson",
      position: "framgångsinstitutet Student",
    },
    {
      id: 6,
      imageUrl: "/images/impact/6-lucas.png",
      message:
        "Plattformen är grym. Tog mig tre butiker innan jag hittade en vinnande produkt. Rekommenderar framgångsinstitutet!",
      name: "Lukas Boström",
      position: "framgångsinstitutet Student",
    },
  ],

  faqBlackTitle: "Vanliga",
  faqBlueTitle: "Frågor",
  faqData: [
    {
      id: 1,
      question:
        "Behöver jag ha ett Shopify-konto innan jag använder e-butiken?",
      answer:
        "Nej! Alla våra Shopify Dropshipping-butiker kommer som helt nya butiker som du får en 3 dagars gratis provperiod med. Efter 3 dagars gratis provperiod kommer Shopify att kosta $1 för 1 månad och efter 3 månader kommer Shopify att kosta $39/månad.  Om du inte vill betala $39 kan du avbryta din $1 månad provperiod. Risken är mycket låg.",
    },
    {
      id: 2,
      question: "Vad händer om jag redan har en Shopify-butik?",
      answer:
        "För det mesta är det mycket bättre om du har en expert som ställer in butiken från grunden åt dig, eftersom designen du gjort med största sannolikhet inte är inställd för framgång. Så även om du redan har en shopify-butik, oroa dig inte. Vi kommer fortfarande att kunna skapa en ny åt dig som är korrekt konfigurerad.",
    },
    {
      id: 3,
      question: "Hur många produkter kommer jag att få i min e-butik?",
      answer: "Alla våra butiker kommer färdigimplementerade med 30 produkter.",
    },
    {
      id: 4,
      question: "Vilka andra avgifter är förknippade med detta?",
      answer:
        "Det enda du måste betala för är värd för din Shopify-butik. Du kommer att få en gratis 3-dagars provperiod utan behov av kreditkort, om du väljer att behålla det måste du betala $1 din första månad för att fortsätta vara värd för din webbplats genom Shopify, du kan avbryta när som helst och det finns inga kontrakt eller andra dolda avgifter.",
    },
    {
      id: 5,
      question: "Annonserar ni butiken åt mig?",
      answer:
        "Vi gör INTE någon reklam för din butik. Det får du göra när butiken är klar.",
    },
    {
      id: 6,
      question: "Vad händer om jag har mina egna produkter?",
      answer:
        "Du kommer enkelt att kunna lägga till så många produkter du vill i din butik efter att ha levererat den. Processen är extremt enkel och du kan göra det inom ett par klick..",
    },
    {
      id: 7,
      question: "Hur kommer jag att kunna använda min e-butik som min egen?",
      answer:
        "24 - 48 timmar efter att du har lagt din beställning skickar vi din inloggningsinformation till din nya Shopify Dropshipping Butik. Allt du behöver göra är att logga in, ändra lösenordet och butiken är helt och hållet din!",
    },
  ],

  howItWorksData: {
    title: "Hur det fungerar?",
    items: [
      {
        id: 1,
        imageUrl: "/icons/home/build-site-icon.png",
        title: "Vi bygger din webbplats och lägger till 30 produkter",
        description: [
          "Beställ din e-handelswebbplats från oss för endast 999 kr så är du igång inom 24 timmar.",
          "Vi designar och sätter upp allt – inklusive 30 produkter, 5 videoannonser, logotyp, leverantör, och e-bok så du kan börja sälja direkt.",
        ],
      },
      {
        id: 2,
        imageUrl: "/icons/home/ship-orders-icon.png",
        title: "Leverantören skickar dina beställningar när du säljer",
        description: [
          "Låt oss säga att du hade en sminkborste listad på din kosmetikwebbplats för 399 kr.",
          "Vi kommer att integrera en leverantör som kan skicka den exakta sminkborsten till vem som helst i världen för endast 99 kr.",
        ],
      },
      {
        id: 3,
        imageUrl: "/icons/home/retain-profits-icon.png",
        title: "Behåll vinsten och utveckla din butik",
        description: [
          "Om du gör allt detta korrekt kommer detta att vara en bra plattform för en hög avkastning med bara ett minimum av uppmärksamhet! Återinvestera tillbaka i ditt företag och upprepa det som fungerar!",
        ],
      },
    ],
  },

  hero: {
    title:
      "E-handelsexperter bygger dig en helt\n optimerad e-handelsbutik på under\n 24 timmar för endast 999 kr",
    desc: "Vårt team av e-handelsexperter har designat över 834+ dropshipping butiker och är här för att hjälpa dig att starta din nästa butik för endast 999 kr!",
    button: "Få din butik 499 SEK!",
    buttonDesc: "& Lås upp 2 GRATIS gåvor",
    descTitle: "478+ Sålda Butiker",
  },

  reviews: {
    title: "Recensioner",
    items: [
      "Efter att ha testat flera onlineföretag som Amazon FBA, SMMA, och affiliate marketing, insåg jag att de mest bara var ute efter att ta mina pengar utan att ge något verkligt värde tillbaka. När jag stötte på framgångsinstitutet-butiker bestämde jag mig för att ge dropshipping en chans, och jag är så glad att jag gjorde det. Inom en enda dag hade jag en fullständig butik redo att köra, och tack vare TikTok-annonser har jag redan återhämtat min investering. Jag rekommenderar starkt detta till alla nybörjare!",
      "Som ny inom dropshipping blev jag positivt överraskad av den snabba och enkla installationen av min butik. Nu kan jag fokusera på marknadsföring och ser fram emot min resa med dropshipping.",
      "framgångsinstitutet ebutiker överträffade mina förväntningar med en modern design och unika produkter. Jag rekommenderar att välja deras färdig byggda e-handelsbutiker.",
      "Trots min initiala skepsis över det låga priset blev jag positivt överraskad av kvaliteten på butiken och produkterna. framgångsinstitutet ebutiker erbjuder enastående värde för nybörjare som mig och jag är mycket nöjd med mitt köp.",
      "Jag är imponerad av den höga kvaliteten på min butik och de tillhörande produkterna till ett sådant överkomligt pris. Tack vare framgångsinstitutet kan jag spara massor av tid och pengar.",
      "Jag hade ingen erfarenhet av dropshipping men beslutade ändå att prova det här och blev glatt överraskad av den professionella butiken och de högkvalitativa produkterna. Bonus boken var ovärderlig och jag skulle definitivt rekommendera framgångsinstitutet-butiker till alla. ",
      "Jag beställde min butik och blev förvånad över att få den levererad redan nästa dag. Tack vare framgångsinstitutet kan jag nu generera betydande intäkter varje dag. Tack så mycket!",
      "Jag blev positivt överraskad av den höga kvaliteten på min butik och produkterna. Trots min initiala skepsis är jag nu en nöjd kund och ser fram emot att göra fler affärer med framgångsinstitutet butiker.",
    ],
  },
  topReview: {
    title: "Recension",
    avatar: "JM",
    stars: 5,
    time: "18 minuter sen",
    verified: "Verifierad",
    description:
      "Jag är verkligen imponerad av Checkifeds färdiga e-butik med 30 produkter och 10 videoannonser redo att marknadsföras! Tack vare deras hjälp har jag nu en verksamhet som omsätter 350 000 kr. Butiken var färdigbyggd med professionellt utvalda produkter, och jag kunde börja sälja direkt. Det bästa var att jag fick tillgång till en gratis kurs om hur man driver en framgångsrik dropshipping-butik, vilket gjorde det enkelt för mig att förstå allt från marknadsföring till logistik. Supporten har också varit fantastisk – när jag behövt hjälp har de alltid funnits där. Det enda jag behövde göra efteråt var att köpa ett domännamn och sätta igång med marknadsföringen. För mig, som inte hade någon tidigare erfarenhet av e-handel, har det här varit en riktig gamechanger. Rekommenderar verkligen till alla som vill börja med dropshipping!",
  },

  bonuses: {
    title: "6 gratis bonusar för dagens köpare:",
    items: [
      {
        id: "Bonus #1",
        title: "Varumärkeslogotyp",
        image: "/images/pricing/bonus1.png",
        description:
          "(Vårt team av e-handelsexperter kommer att ge dig en logotyp som du kan använda i din butik.",
        price: "997.00 kr värde",
      },
      {
        id: "Bonus #2",
        title: "Fullständig Dropshipping Kurs",
        image: "/images/pricing/bonus2.png",
        description:
          "Tillgång till en fullständig AÖ-guide om hur man startar en lönsam dropshipping butik 2025.",
        price: "4997.00 kr värde",
      },
      {
        id: "Bonus #3",
        title: "Mystery Gift",
        image: "/images/pricing/bonus3.png",
        description:
          "Beställ idag och få en Mystery Gift med ditt köp som kommer att slå dig med häpnad.",
        price: "1997.00 kr värde",
      },
      {
        id: "Bonus #4",
        title: "10 Videoannonser",
        image: "/images/pricing/bonus4.png",
        description:
          "Vårt team kommer att skapa video annonser som du kan använda i din marknadsföring.",
        price: "4997.00 kr värde",
      },
      {
        id: "Bonus #5",
        title: "Dropshipping E-bok",
        image: "/images/pricing/bonus5.png",
        description:
          "Ladda ner dropshipping e-bok som täcker de grundläggande kunskaper som krävs för dropshipping e-handel.",
        price: "2997.00 kr värde",
      },
      {
        id: "Bonus #6",
        title: "Dropshipping Leverantör",
        image: "/images/pricing/bonus6.png",
        description:
          "Du får vår personliga dropshipping leverantör med snabb leverans på 6-10 arbetsdagar och billiga inköpriser.",
        price: "997.00 kr värde",
      },
    ],
  },

  discountPrice: {
    redPrice: "Normal Kostnad: 16,000 SEK+",
    greenPrice: "Bara 999.00 KR!",
    paymentMode: "Engångsbetalning",
  },
  exampleStoreTitle: "Exempel På Butiker",
  buyNowPrice: "Köp för 999,00 kr",
  createMyStore: "Fixa mig min butik",

  orderNow: {
    title: "Beställ nu och du får",
    items: [
      {
        id: "01",
        desc: "Beprövad dropshipping butik utformad för att sälja produkter online utan att behöva köpa något lager...",
      },
      {
        id: "02",
        desc: "Exklusiv tillgång till våra betrodda leverans partners som lagrar de produkter du säljer och skickar dem till dina kunder billigt och snabbt......",
      },
      {
        id: "03",
        desc: "Prisbelönt marknadsföringsteam som skapar 10 video annonser så att du kan göra din första försäljning online med din dropshipping butik...",
      },
    ],
  },
}
