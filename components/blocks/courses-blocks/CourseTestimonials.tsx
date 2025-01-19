import CoursePageTitle from "@/components/parts/CoursePageTitle"

const CourseTestimonials = () => (
  <section className="flex flex-col items-center justify-center py-8 md:py-12 gap-8 text-center">
    {/* Title Section */}
    <CoursePageTitle blackText={"Våra kunder"} blueText={"berättar"} />
    {/* Testimonials Container */}
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full px-4 md:px-8">
      {/* Testimonial 1 */}
      <div className="flex flex-col max-w-[365px] mx-auto">
        <p className="text-[#707ba0] text-[12px] md:text-base leading-relaxed mb-4">
          “Kan varmt rekommendera Marknadsföring Meta ad hos Checkified! Det är
          en utbildning alla borde gå oavsett om man är chef eller inte.“
        </p>
        <p className="text-[#225aea] text-sm font-semibold uppercase">
          Alexandra - Marknadsföring Meta Ads
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="flex flex-col max-w-[365px] mx-auto">
        <p className="text-[#707ba0] text-[12px] md:text-base leading-relaxed mb-4">
          "Programmet motsvarade absolut mina förväntningar och jag kan säga så
          här – jag hade inte velat vara chef utan det."
        </p>
        <p className="text-[#225aea] text-sm font-semibold uppercase">
          Daniel - Skapa en egen online kurs
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="flex flex-col max-w-[365px] mx-auto">
        <p className="text-[#707ba0] text-[12px] md:text-base leading-relaxed mb-4">
          “Nätverket av fantastiska ledare och människor. Mängder med verktyg
          som jag använder dagligen.“
        </p>
        <p className="text-[#225aea] text-sm font-semibold uppercase">
          Pär - Social Media Manager
        </p>
      </div>
    </div>
  </section>
)

export default CourseTestimonials
