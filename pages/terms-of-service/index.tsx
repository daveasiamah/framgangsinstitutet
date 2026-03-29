import React from "react"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"

import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import ScrollReveal from "@/components/transition/ScrollReveal"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function TOS({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={"Användarvillkor"}>
      <section className="relative py-8 lg:py-12 mb-12 lg:mb-16">
        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-15rem] lg:right-[-14rem] 2xl:right-[-12rem] top-[1rem] lg:top-[-30px]"
          className="svg-primary"
        />
        <ShieldBadge positionClassName="top-[1rem] left-[-1rem] lg:top-[6rem] lg:left-[8rem]" />
        <UserBadge positionClassName="top-[1rem] right-[-1rem] lg:top-[4rem] lg:right-[16rem]" />

        <ScrollReveal>
          <Title
            blackText={"Användar"}
            blueText={"villkor"}
            className="mx-auto text-center"
          />
        </ScrollReveal>
      </section>

      <section className="relative flex flex-col lg:flex-row gap-10 justify-between mb-12 lg:mb-16">
        <div className="section__content container flex flex-col space-y-[28px]">
          <span className="block text-xl font-bold leading-[32px]">
            INLEDNING
          </span>
          <p>
            Dessa villkor ("Villkoren") är en del av avtalet ("Avtalet") mellan
            a) framgångsinstitutet ("Leverantören"), och b) kunden som köper
            Leverantörens tjänster ("Kunden"). Tillsammans kallas Leverantören
            och Kunden för "Parterna", och var för sig "Part". Avtal som
            uttryckligen avviker från dessa Villkor gäller före Villkoren, om
            inte sammanhanget tydligt anger något annat. Avtalet träder i kraft
            när Kunden får tillgång till det digitala kursinnehållet, vilket
            markerar att tjänsten anses levererad.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            ERHÅLLNA TJÄNSTER
          </span>
          <p>
            Leverantören tillhandahåller tjänster ("Tjänsterna") till en
            användare hos Kunden enligt Avtalet. Tjänsterna omfattar:
          </p>
          <ol className="list-decimal pl-8 space-y-2">
            <li>Digitalt kursinnehåll</li>
            <li>Digitalt mentorskap</li>
            <li>Digitalt community</li>
          </ol>
          <p>
            Kursinnehållet levereras via en molnbaserad tjänst (SAAS-lösning)
            och anses levererat när det blir tillgängligt på den webbadress
            Leverantören anger. Kursen omfattar: introduktion till
            företagsstart, mental förberedelse, produktval, byggande av
            webbshop, testning med annonsering och analys, fulfillment,
            annonseringsskalning och verksamhetstillväxt. Mentorskapet erbjuds
            som gruppträning online i samma områden som kursinnehållet, ledd av
            representanter från Leverantören. Tiden och teknisk lösning för
            träffarna bestäms av Leverantören. Rätten att delta gäller 12
            månader från Avtalets start. Communityn består av virtuella rum med
            begränsad åtkomst. Inom dessa hålls diskussioner mellan medlemmar
            och mentorer. Plattformen kan förändras över tid.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            KUNDDATA
          </span>
          <p>
            Kunden ger Leverantören rätt att använda kunddata för
            marknadsföring, förutsatt att informationen inte är känslig eller
            affärshemlig. Kunden kan skriftligen begära att viss data inte
            används för marknadsföring, och Leverantören ska då upphöra med
            sådan användning. Informationen om kunder och deras resultat får
            fortfarande användas.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            TILLHANDAHÅLLANDE AV TJÄNSTER
          </span>
          <p>
            Tjänsterna levereras när Kunden betalat hela eller del av
            ersättningen, alternativt när betalningsplan via tredjepart som
            Klarna signerats. Genom att acceptera Villkoren får Kunden tillgång
            till kursmaterial, inspelningar och färdiga mallar. Datum för
            avtalsgodkännande räknas som leveransdatum.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            AVBROTT I TJÄNSTERNA
          </span>
          <p>
            Leverantören kan stänga av tjänsterna tillfälligt för underhåll
            eller säkerhet. Kunden har ingen rätt till ersättning vid avbrott på
            grund av tekniska problem eller nätverksstörningar. Vid avtalsbrott
            eller olagliga handlingar kan Leverantören stänga av Kunden utan
            kompensation.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            UNDERLEVERANTÖRER
          </span>
          <p>
            Leverantören kan använda underleverantörer men ansvarar fortsatt
            fullt ut för åtagandena enligt Avtalet.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            ERSÄTTNING OCH BETALNING
          </span>
          <p>
            Kunden betalar ersättningen vid Avtalets ingående.
            Tredjepartsbetalningar kan ske via Klarna enligt deras villkor.
            Eventuella avgifter eller räntor utöver avtalet kan tillkomma.
            Faktura kan utfärdas med 10 dagars betalningstid om
            tredjepartslösning ej används.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            IMMATERIELLA RÄTTIGHETER
          </span>
          <p>
            Alla immateriella rättigheter till Tjänsterna tillhör Leverantören
            eller dess licensgivare. Kunden får en icke-exklusiv, evig,
            icke-överlåtbar licens att använda materialet för intern användning.
            Data som skapas av Kunden i communityn ägs av Leverantören och kan
            användas fritt.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            SEKRETESS
          </span>
          <p>
            Parterna ska inte avslöja Konfidentiell Information, som inkluderar
            men inte är begränsad till marknadsföring, försäljningsstrategier,
            produkter och kundinformation. Information i communityn från Kunden
            betraktas inte som konfidentiell.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            KUNDTJÄNST
          </span>
          <p>
            All kontakt sker via info@framgångsinstitutet.se. Direktkontakt med
            representanter kan ej garanteras.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            SPARRING
          </span>
          <p>
            Sparringsamtal kan spelas in och användas internt och för
            marknadsföring.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            ÅNGERRÄTT
          </span>
          <p>
            Kunden kan säga upp avtalet och få återbetalning om mindre än 20 %
            av kursen tagits del av och 14 dagar inte passerat. Ångern meddelas
            via officiell blankett.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            GARANTI
          </span>
          <p>
            Efter 12 månader kan Kunden begära återbetalning om villkoren i
            garantin uppfyllts men omsättningen understiger 100 000 SEK. Krav:
            fullföljd kurs, deltagande i mentorskap, annonsering av minst 15
            produkter med angiven budget.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            FÖRSENAD BETALNING
          </span>
          <p>
            Vid försenad betalning kan påminnelseavgift, ränta och inkasso
            tillkomma. Leverantören kan temporärt pausa tjänsterna vid utebliven
            betalning.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            SKADESTÅND OCH VITE
          </span>
          <p>
            Kunden ansvarar för obehörig åtkomst via sina inloggningsuppgifter
            och ersätter skador enligt Avtalet.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            BEFRIELSEGRUNDER
          </span>
          <p>
            Force majeure undantar ansvar vid händelser utanför partens
            kontroll, såsom pandemi eller naturkatastrofer.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            ANSVARSBEGRÄNSNING
          </span>
          <p>
            Leverantören ansvarar inte för indirekta skador. Totalt ansvar
            begränsas till ersättningens storlek.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            AVTALETS GILTIGHET
          </span>
          <p>
            Avtalet gäller tills vidare från avtalsdagen. Uppsägning tidigast 12
            månader efter avtalet med en månads uppsägningstid. Ingen
            återbetalning vid uppsägning.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            KOMMUNIKATION
          </span>
          <p>
            Communityn är öppet för diskussioner, inte privata meddelanden.
            Direktkontakt sker via leverantörens officiella kontaktvägar.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            HELA AVTALET
          </span>
          <p>
            Avtalet och bilagor utgör hela regleringen. Tidigare åtaganden
            ersätts. Godkännande ger tillgång till digitalt material inklusive
            kursvideor och mallar.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            OGILTIGHET AV BESTÄMMELSE
          </span>
          <p>
            Om en bestämmelse blir ogiltig, omförhandlas avtalet för att uppnå
            likvärdigt resultat.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            ANVÄNDARÅTAGANDE
          </span>
          <p>
            Användare som företräder Kunden ansvarar personligen för att följa
            sekretess och Avtalets övriga delar.
          </p>

          <span className="block text-xl font-bold leading-[32px]">
            TOLKNING OCH TILLÄMPNING
          </span>

          <p>Avtalet styrs av svensk lag.</p>

          <span className="block text-xl font-bold leading-[32px]">
            TVISTELÖSNING
          </span>
          <p>Tvister löses av svensk domstol.</p>
        </div>
      </section>
    </Layout>
  )
}
