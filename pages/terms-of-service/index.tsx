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
            // blueTextClassName=""
          />
        </ScrollReveal>
      </section>

      <section className="relative flex flex-col lg:flex-row gap-10 justify-between mb-12 lg:mb-16">
        <div className="section__content container flex flex-col space-y-[28px]">
          <p>
            Välkommen till Checkified! Dessa användarvillkor utgör ett rättsligt
            avtal mellan dig och Checkified som styr din användning av våra
            digitala kurser och tjänster. Genom att använda våra tjänster
            samtycker du till dessa villkor och bekräftar att du har läst och
            förstått dem. Om du inte godkänner dessa villkor får du inte använda
            våra tjänster.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            1. Tjänster
          </span>
          <p>
            Checkified tillhandahåller digitala kurser och tjänster inom
            utbildning och lärande. Våra kurser är utformade för att hjälpa
            användare att utveckla sin kompetens och utveckla sina färdigheter
            inom specifika områden. Vi kan också tillhandahålla andra tjänster,
            såsom kommunikationsverktyg och tillgång till communityn.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            2. Kursinnehåll
          </span>
          <p>
            Allt kursinnehåll som tillhandahålls av Checkified, såsom video-,
            text-, och bildmaterial, är skyddat av upphovsrätt och andra
            immateriella rättigheter. Du har endast rätt att använda
            kursinnehållet för personligt bruk. Du får inte kopiera,
            distribuera, sälja, överföra, publicera eller på annat sätt göra
            kursinnehållet tillgängligt för tredje part utan vårt skriftliga
            tillstånd. Du får inte heller ladda ner kursinnehållet, förutom när
            det uttryckligen tillåts i tjänsten. Vid överträdelse av denna
            bestämmelse har vi rätt att avsluta ditt användarkonto och vidta
            ytterligare rättsliga åtgärder enligt tillämplig lagstiftning.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            3. Kursavgifter och betalning
          </span>
          <p>
            För att få tillgång till våra digitala kurser måste du betala en
            kursavgift. Betalning kan ske via kreditkort eller annan
            betalningsmetod som tillhandahålls av Checkified. Alla priser anges
            i svenska kronor och inkluderar moms om inte annat anges. Checkified
            förbehåller sig rätten att ändra priser och kursavgifter när som
            helst utan föregående meddelande.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            4. Användarkonto
          </span>
          <p>
            För att använda våra tjänster måste du skapa ett användarkonto och
            ange dina personliga uppgifter, såsom namn och e-postadress. Du är
            ansvarig för att skydda ditt användarnamn och lösenord för att
            förhindra obehörig åtkomst till ditt konto.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            4. Användarkonto
          </span>
          <p>
            För att använda våra tjänster måste du skapa ett användarkonto och
            ange dina personliga uppgifter, såsom namn och e-postadress. Du är
            ansvarig för att skydda ditt användarnamn och lösenord för att
            förhindra obehörig åtkomst till ditt konto.
          </p>
          <span className="block text-xl font-semibold leading-[32px]">
            5. Personuppgiftshantering
          </span>
          <p>
            Checkified behandlar dina personuppgifter i enlighet med tillämpliga
            dataskyddslagar och vår integritetspolicy. Genom att använda våra
            tjänster samtycker du till vår behandling av dina personuppgifter
            som beskrivs i integritetspolicyn.
          </p>
          <span className="block text-xl font-semibold leading-[32px]">
            6. Ansvarsfriskrivning
          </span>
          <p>
            Vi strävar efter att tillhandahålla korrekt och tillförlitlig
            information i våra kurser, men Checkified kan inte garantera att all
            information är fullständig och korrekt. Vi är inte ansvariga för
            några skador eller förluster som uppstår på grund av användningen av
            våra tjänster eller kursinnehåll.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            7. Ändringar av användarvillkoren
          </span>
          <p>
            Vi kan ändra dessa användarvillkor när som helst och meddela dig om
            ändringarna via e-post eller genom att publicera uppdaterade villkor
            på vår webbplats. Dina fortsatta användning av våra tjänster efter
            att ändringar har genomförts innebär att du accepterar de
            uppdaterade användarvillkoren.
          </p>

          <span className="block text-xl font-semibold leading-[32px]">
            8. Tillämplig lag och tvister
          </span>
          <p>
            Dessa användarvillkor regleras av svensk lagstiftning. Eventuella
            tvister som uppstår på grund av dessa villkor ska avgöras av svenska
            domstolar.
          </p>
        </div>
      </section>
    </Layout>
  );
}
