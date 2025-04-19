interface FAQ {
  id: number
  question: string
  answer: string
}

interface Partner {
  id: number
  image: string
  imageSize: {
    mobile: string
    lg: string
  }
}

interface CTA {
  title: string
  text: string
  image: string
  buttonText: string
}

export const homePageFaqs: FAQ[] = [
  {
    id: 0,
    question: "Behöver jag ha en egen dator för att studera på Checkified?",
    answer:
      "För att kunna delta på utbildningen behöver du tillgång till en dator och det är därför viktigt att du har införskaffat en dator när utbildningen väl startar. Du kan inte genomföra utbildningen med en mobiltelefon.",
  },
  {
    id: 1,
    question: "Får jag ett diplom kursbevis efter att ha genomfört en kurs?",
    answer:
      "Efter genomgången kurs får du ett kursbevis med ditt betyg som visar vilken kompetens du har erhållit. Du kan sedan ta med detta på ditt CV, vilket gör dig mer attraktiv för potentiella arbetsgivare och för ditt nästa jobb.",
  },
  {
    id: 2,
    question: "Vilket språk bedrivs onlineutbildningarna på?",
    answer:
      "Alla våra onlineutbildningar genomförs på svenska. Det krävs alltså att du har goda kunskaper och förståelse för det svenska språket för att genomföra utbildningen.",
  },
  {
    id: 3,
    question: "Kan jag läsa flera kurser samtidigt?",
    answer:
      "Ja.du kan absolut läsa flera kurser samtidigt. Ibland kan det dock vara svårt att kombinera flera kurser med arbete, så se över hur mycket tid du har att lägga för att du ska få bästa resultat.",
  },
  {
    id: 4,
    question: "Vad innebär det att studera en onlineutbildning?",
    answer:
      "En onlineutbildning hos Checkified passar dig som önskar lite extra frihet och flexibilitet under din studietid. Alla onlineutbildningar består av digitalt innehåll i form av förinspelade lektioner och/eller digitalt studiematerial som studenter kan ta del av när och vart som helst. Utbildningarna är generellt sett kortare än traditionella yrkeshögskoleutbildningar och kan läsas på hel eller halvfart – perfekt för dig som vill kombinera studier med arbete eller annat kul!",
  },
  {
    id: 5,
    question: "Inom vilka branscher har ni utbildningar inom?",
    answer: "IT, samhällsbyggnad, UX-design, kommunikation och e-handel.",
  },
  {
    id: 6,
    question: "För vem passar en skräddarsydd utbildning?",
    answer:
      "Skräddarsydda utbildningar är till för företag, organisationer eller myndigheter som behöver få in ny kompetens i teamet.",
  },
]

export const homePagePartners: Partner[] = [
  {
    id: 0,
    image: "/new-home/verisure.svg",
    imageSize: {
      mobile: "w-[207px] h-[107px]",
      lg: "w-[240px] h-[120px]",
    },
  },
  {
    id: 1,
    image: "/new-home/ericsson.svg",
    imageSize: {
      mobile: "w-[202px] h-[40px]",
      lg: "w-[250px] h-[50px]",
    },
  },
  {
    id: 2,
    image: "/new-home/almin.svg",
    imageSize: {
      mobile: "w-[152px] h-[43px]",
      lg: "w-[200px] h-[55px]",
    },
  },
  {
    id: 3,
    image: "/new-home/telenor.svg",
    imageSize: {
      mobile: "w-[172px] h-[53px]",
      lg: "w-[220px] h-[65px]",
    },
  },
  {
    id: 4,
    image: "/new-home/exergi.svg",
    imageSize: {
      mobile: "w-[172px] h-[50px]",
      lg: "w-[220px] h-[65px]",
    },
  },
  {
    id: 5,
    image: "/new-home/indeed.svg",
    imageSize: {
      mobile: "w-[173px] h-[47px]",
      lg: "w-[230px] h-[60px]",
    },
  },
  {
    id: 6,
    image: "/new-home/stockholms.svg",
    imageSize: {
      mobile: "w-[145px] h-[50px]",
      lg: "w-[200px] h-[60px]",
    },
  },
  {
    id: 7,
    image: "/new-home/ikea.svg",
    imageSize: {
      mobile: "w-[144px] h-[57px]",
      lg: "w-[200px] h-[70px]",
    },
  },
]

export const homePageCTAData: CTA[] = [
  {
    title: "Utbildningar skapade av experter.",
    text: "Våra utbildningar är framtagna av ämnesexperter som har omfattande kunskap och praktisk erfarenhet inom sina respektive områden. Du kommer att att lära av de bästa och få kompetenser som är efterfrågade på arbetsmarknaden.",
    image: "/new-home/distance-learning.jpg",
    buttonText: "Ansök nu",
  },
  {
    title: "Lär och utveckla dig själv genom distansstudier.",
    text: "Det är otroligt viktigt med kontinuerligt lärande och kompetensutveckling för att vara attraktiv i dagens dynamiska arbetsmiljö. Vi har noggrant designat utbildningar som leder till jobb inom populära yrken.",
    image: "/new-home/online-study.jpg",
    buttonText: "Läs mer",
  },
  {
    title: "Allt samlat på ett ställe.",
    text: "Glöm tunga väskor och förlorade papper – alla dina studieresurser finns lättillgängliga i vår app, när du behöver dem.",
    image: "/new-home/self-learning.jpg",
    buttonText: "Utforska här",
  },
]
