import React from "react"
import Layout from "@/components/Layout"
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

const MentorshipPage = () => {
  return (
    <Layout headTitle="Mentorskap">
      <section className="w-full flex flex-col items-center justify-center h-full">
        <MentorshipHero />
        <MentorshipHeroSub />
        <MentorshipMail />
        <MentorshipButton />
        <MentorshipSubEhandler />
        <MentorshipProducts />
        <MentorshipDetailsText />
        <SuccessStoriesGrid />
        <MentorshipStaticImage />
        <MentorWhyThisWorksSection />
        <MentorshipNextStep />
        <MentorshipSteps />
        <MentorshipGuarantee />
        <MentorshipQuestions />
        <MentorshipPayout />
      </section>
    </Layout>
  )
}

export default MentorshipPage
