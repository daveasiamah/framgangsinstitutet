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

export default function CookiePolicy({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={"Cookiepolicy"}>
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
            blackText={"Cookie"}
            blueText={"policy"}
            className="mx-auto text-center"
          />
        </ScrollReveal>
      </section>

      <section className="relative flex flex-col lg:flex-row gap-10 justify-between mb-12 lg:mb-16">
        <div className="section__content container flex flex-col space-y-[28px]">
          <p>
            Vi använder oss av cookies och liknande tekniker på vår webbplats
            för att förbättra din upplevelse och för att samla in information om
            hur vår webbplats används. Genom att använda vår webbplats samtycker
            du till vår användning av cookies enligt denna policy
          </p>
          <div className="flex flex-col space-y-[28px]">
            <span className="block text-xl font-semibold leading-[32px] text-primary-dark-blue">
              Vad är cookies?
            </span>
            <p>
              Cookies är små datafiler som lagras på din dator eller mobila
              enhet när du besöker en webbplats. Cookies används för att samla
              in information om hur webbplatsen används, för att identifiera
              användare och för att anpassa webbplatsens innehåll och
              funktioner.
            </p>
            <span className="block text-xl font-semibold leading-[32px] text-primary-dark-blue">
              Vilken typ av cookies använder vi?
            </span>
            <p>Vi använder följande typer av cookies på vår webbplats:</p>
            <ol className="space-y-4">
              <li className="list-decimal list-inside  font-semibold">
                Nödvändiga cookies
              </li>
              <p>
                Dessa cookies är nödvändiga för att webbplatsen ska fungera
                korrekt och kan inte stängas av i våra system. De används till
                exempel för att komma ihåg dina val när du navigerar på vår
                webbplats.
              </p>

              <li className="list-decimal list-inside  font-semibold">
                Prestanda-cookies
              </li>
              <p>
                Dessa cookies samlar in information om hur besökare använder vår
                webbplats, till exempel vilka sidor som besöks mest och om det
                finns felmeddelanden på vissa sidor. Informationen som samlas in
                används för att förbättra webbplatsens prestanda.
              </p>

              <li className="list-decimal list-inside  font-semibold">
                Funktionscookies
              </li>
              <p>
                Dessa cookies används för att komma ihåg dina val och för att
                förbättra din användarupplevelse på vår webbplats. Till exempel
                kan vi använda cookies för att komma ihåg dina preferenser för
                språk och region.
              </p>

              <li className="list-decimal list-inside  font-semibold">
                Annonscookies
              </li>
              <p>
                Dessa cookies används för att visa riktade annonser på vår
                webbplats och andra webbplatser. Informationen som samlas in av
                dessa cookies används för att visa annonser som är relevanta för
                dig och dina intressen.
              </p>
            </ol>
            <span className="block text-xl font-semibold leading-[32px] text-primary-dark-blue">
              Hur kan du hantera cookies?
            </span>
            <p>
              Du kan välja att acceptera eller avvisa cookies på vår webbplats
              genom att ändra inställningarna i din webbläsare. Observera att
              vissa funktioner på vår webbplats kanske inte fungerar korrekt om
              du stänger av cookies. Du kan också välja att radera cookies från
              din webbläsare när som helst.
            </p>

            <span className="block text-xl font-semibold leading-[32px] text-primary-dark-blue">
              Mer information om cookies
            </span>
            <p>
              Om du vill ha mer information om cookies och hur de används kan du
              besöka www.allaboutcookies.org.
            </p>

            <span className="block text-xl font-semibold leading-[32px] text-primary-dark-blue">
              Kontakta oss
            </span>
            <p>
              Om du har frågor eller funderingar om vår cookiepolicy eller vår
              användning av cookies kan du kontakta oss på info@checkified.se.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
