import { profile_setting_pop } from "../types/profile_setting_pop";

export const profile_pop: profile_setting_pop = {
  metaData: {
    title: "profilinställning",
  },

  contactBlackTitle: "Kontakta",
  contactBlueTitle: "Checkified",
  contactSubtitle: "Anslut med Checkified-support.",

  formBlackTitle: "Hur kan vi",
  formBlueTitle: "hjälpa dig?",
  formSubtitle:
    "Om du har några frågor eller funderingar kan du kontakta vårt supportteam; vi svarar inom 24 timmar.",
  profileForm: {
    firstName: "Förnamn",
    lastName: "Efternamn",
    mail: "Mejladress",
    password: "Lösenord",
    button: "Skicka",
  },

  supportData: [
    {
      id: 1,
      imageUrl: "/icons/contact-us/1-general.png",
      title: "Allmänna Förfrågningar",
      subtitle:
        "Om du har några allmänna frågor  om kursen kan du skicka ett e-postmeddelande till oss på info@checkified.se.",
      action: "Vi strävar efter att besvara alla förfrågningar inom 24 timmar.",
    },
    {
      id: 2,
      imageUrl: "/icons/contact-us/2-technical.png",
      title: "Teknisk Support",
      subtitle:
        "Om du har tekniska problem med kursen eller plattformen kan du skicka ett e-postmeddelande till oss på info@checkified.se.",
      action: "Vårt team av tekniska experter hjälper dig gärna.",
    },
    {
      id: 3,
      imageUrl: "/icons/contact-us/3-billing.png",
      title: "Frågor om Fakturering",
      subtitle:
        "Om du har frågor om din fakturering eller betalning för kursen kan du skicka ett e-postmeddelande till oss på billing@checkified.se.",
      action:
        "Vår faktureringsavdelning hjälper dig gärna att lösa eventuella problem.",
    },
  ],
};
