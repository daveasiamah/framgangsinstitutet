import Layout from "@/components/Layout";
import MentorshipDetailsText from "@/components/parts/Mentorship_Detail_Text";
import MentorshipDetails from "@/components/parts/Mentorship_Details";
import MentorshipHero from "@/components/parts/Mentorship_Hero";
import MentorWhyThisWorksSection from "@/components/parts/Mentorship_HowItWorks";
import MentorshipStaticImage from "@/components/parts/Mentorship_Image_Static";
import MentorshipMail from "@/components/parts/Mentorship_Mail";
import MentorshipButton from "@/components/parts/Mentorship_Mail_Button";
import MentorshipMentor from "@/components/parts/Mentorship_Mentor";
import MentorshipNextStep from "@/components/parts/Mentorship_Next_Step";
import MentorshipPayout from "@/components/parts/Mentorship_Payout";
import MentorshipQuestions from "@/components/parts/Mentorship_Questions";
import MentorshipSteps from "@/components/parts/Mentorship_Steps";
import MentorshipHeroSub from "@/components/parts/Mentorship_Sub";
import SuccessStoriesGrid from "@/components/parts/Mentorship_Success";
import MentorshipSubEhandler from "@/components/parts/MentorshipSub_2";
import en from "@/locales/en";
import sv from "@/locales/sv";
import { useRouter } from "next/router";

const MentorshipPage = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : sv;
    return (
        <Layout headTitle="Mentorship">
            <section className="w-full flex flex-col justify-center  h-full">
                <MentorshipHero />
                <MentorshipHeroSub />
                <MentorshipMail />
                <MentorshipButton className="mt-5" />
                <MentorshipSubEhandler />
                <MentorshipMentor />
                <MentorshipDetails />
                <MentorshipDetailsText />
                <SuccessStoriesGrid />
                <MentorshipStaticImage />
                <MentorWhyThisWorksSection />
                <MentorshipNextStep />
                <MentorshipSteps />
                <MentorshipQuestions />
                <MentorshipPayout />
            </section>
        </Layout>
    );
};

export default MentorshipPage;
