import React from "react"
import Layout from "@/components/Layout"
import Image from "next/image"
import MentorshipDetailsText from "@/components/parts/Mentorship_Detail_Text"
import { MentorshipGuarantee } from "@/components/parts/Mentorship_Guarantee"
import MentorshipHero from "@/components/parts/Mentorship_Hero"
import MentorWhyThisWorksSection from "@/components/parts/Mentorship_HowItWorks"
import MentorshipStaticImage from "@/components/parts/Mentorship_Image_Static"
import MentorshipMail from "@/components/parts/Mentorship_Mail"
import MentorshipButton from "@/components/parts/Mentorship_Button"
import MentorshipNextStep from "@/components/parts/Mentorship_Next_Step"
import MentorshipPayout from "@/components/parts/Mentorship_Payout"
import MentorshipQuestions from "@/components/parts/Mentorship_Questions"
import MentorshipSteps from "@/components/parts/Mentorship_Steps"
import MentorshipHeroSub from "@/components/parts/Mentorship_Sub"
import SuccessStoriesGrid from "@/components/parts/Mentorship_Success"
import MentorshipSubEhandler from "@/components/parts/MentorshipSub_2"
import MentorshipProducts from "@/components/parts/MentorshipProducts"
import MentorshipCard from "./mentorship-card"

const MentorshipPage = () => {
  return (
    <Layout headTitle="Mentorskap">
      <section className="w-full flex flex-col items-center justify-center h-full">
        <MentorshipHero />
        <MentorshipHeroSub />
        <MentorshipMail />
        <MentorshipButton size="small" />
        <MentorshipSubEhandler />
        <MentorshipProducts />
        <section className="w-full flex flex-col items-center justify-center h-full">
          <Image
            src="/images/mentorship/mentorship-packages.svg"
            width={700}
            height={470}
            alt="mentorship packages"
          />
          <h2 className="text-[#000000] max-w-[303px] md:max-w-[604px] font-jakarta text-center text-[22px] md:text-[48px] font-semibold mt-10 mb-4 md:mb-2">
            Dropshipping Mentorskap
          </h2>
          <p className="font-inter text-center max-w=[272px] md:max-w-[640px]  text-md md:text-lg text-[#000000]">
            Ett mentorskap med så mycket värde att den verkar för bra för att
            vara sann, plus ett pris som passar alla som är redo att vara
            ambitiösa.
          </p>
        </section>

        <MentorshipCard />
        <div className="flex items-center rounded-lg bg-[#f3f6fe] min-h-[26px] justify-center align-middle self-center px-2 py-1.5 sm:py-2 inset-2 shadow-inner max-w-[185px] md:max-w-[208px] mb-4 mt-5">
          <p className="font-inter font-semibold text-[14px] text-[#235AE9] text-center leading-tight px-1">
            Totalt värde: 155 000 kr
          </p>
        </div>
        <MentorshipDetailsText />
        <SuccessStoriesGrid />
        <MentorshipStaticImage />
        <MentorWhyThisWorksSection />
        <MentorshipNextStep />
        <MentorshipSteps />
        <MentorshipGuarantee />
        <MentorshipPayout />
        <MentorshipQuestions />
      </section>
    </Layout>
  )
}

export default MentorshipPage
