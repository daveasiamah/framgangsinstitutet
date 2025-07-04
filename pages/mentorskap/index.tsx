import React, { useState } from "react"
import Layout from "@/components/Layout"
import MentorshipDetailsText from "@/components/parts/Mentorship_Detail_Text"
import MentorshipDetails from "@/components/parts/Mentorship_Details"
import { MentorshipGuarantee } from "@/components/parts/Mentorship_Guarantee"
import MentorshipHero from "@/components/parts/Mentorship_Hero"
import MentorWhyThisWorksSection from "@/components/parts/Mentorship_HowItWorks"
import MentorshipStaticImage from "@/components/parts/Mentorship_Image_Static"
import MentorshipMail from "@/components/parts/Mentorship_Mail"
import MentorshipButton from "@/components/parts/Mentorship_Button"
import MentorshipMentor from "@/components/parts/Mentorship_Mentor"
import MentorshipNextStep from "@/components/parts/Mentorship_Next_Step"
import MentorshipPayout from "@/components/parts/Mentorship_Payout"
import MentorshipQuestions from "@/components/parts/Mentorship_Questions"
import MentorshipSteps from "@/components/parts/Mentorship_Steps"
import MentorshipHeroSub from "@/components/parts/Mentorship_Sub"
import SuccessStoriesGrid from "@/components/parts/Mentorship_Success"
import MentorshipSubEhandler from "@/components/parts/MentorshipSub_2"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import ContractForm from "@/components/ContractForm"

const MentorshipPage = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <Layout headTitle="Mentorship">
      <section className="w-full flex flex-col items-center justify-center h-full">
        <MentorshipHero onOpenModal={openModal} />
        <MentorshipHeroSub />
        <MentorshipMail />
        <MentorshipButton onClick={openModal} />
        <MentorshipSubEhandler onOpenModal={openModal} />
        <MentorshipMentor onOpenModal={openModal} />
        <MentorshipDetails />
        <MentorshipDetailsText onOpenModal={openModal} />
        <SuccessStoriesGrid />
        <MentorshipStaticImage openModal={openModal} />
        <MentorWhyThisWorksSection />
        <MentorshipNextStep openModal={openModal} />
        <MentorshipSteps />
        <MentorshipGuarantee />
        <MentorshipQuestions />
        <MentorshipPayout openModal={openModal} />
      </section>
      {showModal && (
        <div
          data-theme="light"
          className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
          onClick={closeModal}
        >
          <ContractForm onClose={closeModal} />
        </div>
      )}
    </Layout>
  )
}

export default MentorshipPage
