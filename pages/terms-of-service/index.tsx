import React from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import Title from "@/components/parts/Title";

import BlurCircle from "@/components/graphic/BlurCircle";
import LineGraphic from "@/components/graphic/LineGraphic";
import ShieldBadge from "@/components/graphic/ShieldBadge";
import UserBadge from "@/components/graphic/UserBadge";
import ScrollReveal from "@/components/transition/ScrollReveal";

import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function TOS({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

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
          {/* INLEDNING */}
          <span className="block text-xl font-bold leading-[32px]">
            INLEDNING
          </span>
          <p>
            Dessa allmänna villkor ("Villkoren") är en central del av det avtal
            ("Avtalet") som har ingåtts mellan Checkified ("Leverantören") och den
            fysiska eller juridiska person ("Kunden") som har beställt och betalat
            för Leverantörens tjänster. Genomgående i Villkoren benämns Leverantören
            och Kunden gemensamt som "Parterna" och var för sig som en "Part". Villkoren
            beskriver Parternas respektive rättigheter och skyldigheter i samband med
            Leverantörens tillhandahållande av digitala tjänster till Kunden. Parterna
            är medvetna om att eventuella särskilda villkor kan avtalas skriftligen
            och uttryckligen mellan dem, och dessa särskilda villkor kommer i sådana
            fall att ha företräde framför de allmänna Villkoren. Avtalet anses ha trätt
            i kraft när Kunden erhåller tillgång till det digitala kursinnehållet, vilket
            innebär att tjänsten har börjat levereras i enlighet med Distansavtalslagen.
          </p>

          {/* Erhållna Tjänster */}
          <span className="block text-xl font-bold leading-[32px]">
           ERHÅLLNA TJÄNSTER
          </span>
          <p>
            Leverantören åtar sig att leverera de överenskomna tjänsterna ("Tjänsterna")
            till Kunden i enlighet med Avtalet. Tjänsterna inkluderar:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>1. Digitalt Kursinnehåll:</strong> Kursen består av ett omfattande
              utbildningsprogram, levererat genom en molnbaserad plattform (SaaS).
              Kunden får tillgång till kursinnehållet efter att Avtalet trätt i kraft och
              betalningen har fullgjorts. Kursen täcker ämnesområden som:
              <ul className="list-inside list-disc">
                <li>Grunderna i företagsstart</li>
                <li>Mentala strategier och entreprenörsmindset</li>
                <li>Produktval och marknadsanalys</li>
                <li>Skapandet av en webbshop</li>
                <li>Marknadsföring genom Facebook-annonser och analys av kampanjresultat</li>
                <li>Hantering av kundtjänst och logistik</li>
                <li>Skalningsstrategier för affärs- och marknadsföringsutveckling</li>
              </ul>
            </li>
            <li>
              <strong>2. Digitalt Mentorskap:</strong> Leverantören erbjuder mentorskap via
              gruppträning och handledning inom de ämnesområden som anges ovan. Gruppmentorskapet
              genomförs genom digitala videomöten, och Leverantörens representanter leder dessa
              sessioner. Kunden har rätt att delta i mentorskapet enligt det upplägg Leverantören bestämmer.
            </li>
            <li>
              <strong>3. Digitalt Community:</strong> Leverantören erbjuder en digital plattform,
              till exempel genom Discord, där Kunden kan interagera med andra kursdeltagare och
              Leverantörens representanter. Leverantören förbehåller sig rätten att vid behov ändra
              teknisk lösning eller format för communityn för att säkerställa tjänstens funktionalitet.
            </li>
          </ul>

          {/* Kunddata */}
          <span className="block text-xl font-semibold leading-[32px]">
            KUNDDATA
          </span>
          <p>
            Kunden samtycker till att Leverantören får använda anonymiserad data som genereras genom
            Kundens deltagande i kursen och communityn för marknadsföringssyften och för att förbättra
            Tjänsterna. Kunden kan skriftligen begära att viss data exkluderas från marknadsföringssyften,
            förutsatt att sådan begäran inte strider mot tillämpliga lagar.
          </p>

          {/* Tillhandahållande av Tjänster */}
          <span className="block text-xl font-semibold leading-[32px]">
            TILLHANDAHÅLLANDE AV TJÄNSTER
          </span>
          <p>
            Leverantören påbörjar leveransen av Tjänsterna först efter att Kunden har fullgjort betalningen
            eller den första delbetalningen, om detta är överenskommet. Betalning kan ske via tredjepartsleverantörer
            som Stripe eller Revolut, och Kunden accepterar att de regler och villkor som gäller för dessa tjänster
            också är bindande för Kunden.
          </p>

          {/* Avbrott i Tjänsterna */}
          <span className="block text-xl font-semibold leading-[32px]">
            AVBROTT I TJÄNSTERNA
          </span>
          <p>
            Leverantören förbehåller sig rätten att vid behov temporärt avbryta eller begränsa åtkomsten
            till Tjänsterna för underhåll, säkerhetsåtgärder eller uppdateringar. Vid sådana tillfällen
            utgår ingen ersättning eller kompensation till Kunden, men Leverantören strävar efter att
            minimera störningar och i möjligaste mån förvarna Kunden om planerade avbrott.
          </p>

          {/* Underleverantörer */}
          <span className="block text-xl font-semibold leading-[32px]">
            UNDERLEVERANTÖRER
          </span>
          <p>
            För att uppfylla sina åtaganden enligt Avtalet kan Leverantören anlita underleverantörer.
            Leverantören ansvarar för underleverantörernas arbete som om det vore Leverantörens eget
            och förbinder sig att säkerställa att dessa underleverantörer följer gällande krav och standarder.
          </p>

          {/* Ersättning och Betalning */}
          <span className="block text-xl font-semibold leading-[32px]">
            ERSÄTTNING OCH BETALNING
          </span>
          <p>
            Kunden ska erlägga en ersättning om totalt femton tusen (15 000) SEK, inklusive moms, för
            de Tjänster som anges i Avtalet. Betalning sker enligt Leverantörens anvisningar, oftast via
            tredjepartsbetalningslösningar, vars villkor även gäller för Kunden. Vid frågor eller problem
            med betalning genom en tredjepartsleverantör hänvisas Kunden till aktuell leverantör.
          </p>

          {/* Immateriella Rättigheter */}
          <span className="block text-xl font-semibold leading-[32px]">
            IMMATERIELLA RÄTTIGHETER
          </span>
          <p>
            Alla immateriella rättigheter relaterade till Tjänsterna, inklusive men inte begränsat till
            kursmaterial, design, logotyper och annat innehåll, tillhör Leverantören eller dess licensgivare.
            Kunden beviljas en icke-exklusiv, icke-överlåtbar licens att använda kursmaterialet för internt bruk
            under avtalets löptid. Det är förbjudet att sprida, kopiera eller dela materialet utanför denna licens.
          </p>

          {/* Ansvarsbegränsning */}
          <span className="block text-xl font-semibold leading-[32px]">
            ANSVARSBEGRÄNSNING OCH ÅNGERRÄTT
          </span>
          <p>
           Leverantörens ansvar är begränsat till den summa som Kunden har betalat för Tjänsterna.
           Leverantören ansvarar inte för indirekta skador, dataförluster, inkomstbortfall eller andra
           följdskador. Eftersom tjänsten levereras digitalt och anses påbörjad när Kunden får åtkomst
           till innehållet, gäller ingen ångerrätt i enlighet med Distansavtalslagen.
          </p>

         
        </div>
      </section>
    </Layout>
  );
}
