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

export default function PrivacyPolicy({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={"Integritetspolicy"}>
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
            blackText={"Integritets"}
            blueText={"policy"}
            className="mx-auto text-center"
            // blueTextClassName=""
          />
        </ScrollReveal>
      </section>

      <section className="relative flex flex-col lg:flex-row gap-10 justify-between mb-12 lg:mb-16">
        <div className="section__content container flex flex-col space-y-[28px]">
          <p>
            Checkified värnar om din integritet och vi vill vara öppna med hur
            vi behandlar dina personuppgifter. Denna integritetspolicy beskriver
            hur vi samlar in, använder, delar och skyddar dina personuppgifter
            när du använder våra tjänster
          </p>
          <span className="block text-xl font-semibold leading-[32px]">
            Vilka personuppgifter samlar vi in?
          </span>
          <p>
            Vi kan samla in följande personuppgifter från dig när du använder
            våra tjänster:
          </p>
          <ol className="space-y-4">
            <li className="list-disc list-inside ">
              Namn och kontaktuppgifter, inklusive e-postadress och
              telefonnummer
            </li>
            <li className="list-disc list-inside ">
              Demografisk information, inklusive kön och ålder
            </li>
            <li className="list-disc list-inside ">
              Användarinformation, inklusive användarnamn och lösenord
            </li>
            <li className="list-disc list-inside ">
              Betalningsinformation, inklusive kreditkortsuppgifter
            </li>
            <li className="list-disc list-inside ">
              Kommunikation med oss, inklusive e-postmeddelanden och andra
              meddelanden som du skickar till oss
            </li>
            <li className="list-disc list-inside ">
              Användningsdata, inklusive information om hur du använder våra
              tjänster
            </li>
          </ol>
          <span className="block text-xl font-semibold leading-[32px]">
            Hur använder vi dina personuppgifter?
          </span>
          <p>
            Vi använder dina personuppgifter för att tillhandahålla och
            förbättra våra tjänster, inklusive:
          </p>
          <ol className="space-y-4">
            <li className="list-disc list-inside ">
              Att behandla din registrering och betalning för våra tjänster
            </li>
            <li className="list-disc list-inside ">
              Att tillhandahålla support och svara på dina frågor och
              förfrågningar
            </li>
            <li className="list-disc list-inside ">
              Att kommunicera med dig om våra tjänster, inklusive nyhetsbrev och
              marknadsföring
            </li>
            <li className="list-disc list-inside ">
              Att analysera och förbättra våra tjänster och användarupplevelse
            </li>
            <li className="list-disc list-inside ">
              Att uppfylla våra rättsliga skyldigheter och skydda vår verksamhet
              och våra användare
            </li>
          </ol>

          <span className="block text-xl font-semibold leading-[32px]">
            Hur delar vi dina personuppgifter?
          </span>
          <p>
            Vi delar dina personuppgifter med tredje parter endast i följande
            situationer:
          </p>
          <ol className="space-y-4">
            <li className="list-disc list-inside ">Med din tillåtelse</li>
            <li className="list-disc list-inside ">
              För att uppfylla våra rättsliga skyldigheter, såsom att svara på
              en domstolsorder eller laglig begäran från myndigheterna
            </li>
            <li className="list-disc list-inside ">
              För att skydda vår verksamhet och våra användare, till exempel för
              att förhindra bedrägerier eller missbruk av våra tjänster
            </li>
            <li className="list-disc list-inside ">
              Med våra samarbetspartners eller tjänsteleverantörer som hjälper
              oss att tillhandahålla våra tjänster, såsom betalningsleverantörer
              och molntjänstleverantörer
            </li>
          </ol>

          <p>
            Vi kommer inte att sälja eller hyra ut dina personuppgifter till
            tredje part för marknadsföring utan din tillåtelse.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            Hur skyddar vi dina personuppgifter?
          </span>
          <p>
            Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att
            skydda dina personuppgifter mot obehörig åtkomst, ändring, spridning
            eller förstörelse. Vi använder exempelvis krypteringsteknik för att
            skydda din betalningsinformation och begränsar åtkomsten till dina
            personuppgifter till auktoriserad persona
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            Hur länge sparar vi dina personuppgifter?
          </span>
          <p>
            Vi sparar dina personuppgifter så länge det behövs för att
            tillhandahålla våra tjänster
          </p>
        </div>
      </section>
    </Layout>
  );
}
