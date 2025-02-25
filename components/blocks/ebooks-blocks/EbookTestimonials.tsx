import EbookPageTitle from "@/components/parts/CoursePageTitle"

const EbookTestimonials = () => (
  <section className="flex flex-col items-center justify-center py-8 md:py-12 gap-8 text-center">
    {/* Title Section */}

    <h1 className="leading-[2rem] font-extrabold text-[21px] text-center md:text-left md:text-[40px] mb-4 md:leading-[3rem]">
      <p className="font-jakarta">
        Vad våra användare{" "}
        <span className="font-extrabold font-jakarta text-[#225AEA]">
          säger om oss:
        </span>
      </p>
    </h1>
    {/* Testimonials Container */}
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full px-4 md:px-8">
      {/* Testimonial 1 */}
      <div className="flex flex-col max-w-[385px] md:max-w-full p-1 mx-auto">
        <p className="text-[#707ba0] text-[14px] text-center md:text-base leading-relaxed mb-4">
          Ger de med lässvårigheter utan rätt till hjälpmedel bättre
          förutsättningar att klara plugget.
        </p>
        <p className="text-[#225aea] text-sm font-semibold mt-3">
          Maria, Mälardalens universitet
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="flex flex-col max-w-[385px] md:max-w-full p-1 mx-auto">
        <p className="text-[#707ba0] text-[14px] text-center md:text-base leading-relaxed mb-4">
          Det är bra att det finns billigare böcker med nästan lika bra
          läsupplevelse som med fysisk bok.
        </p>
        <p className="text-[#225aea] text-sm font-semibold mt-3">
          Olga, Blekinge Tekniska Högskola
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="flex flex-col max-w-[385px] md:max-w-full p-1 mx-auto">
        <p className="text-[#707ba0] text-[14px] text-center md:text-base leading-relaxed mb-4">
          Riktigt bra, enkelt och så mycket billigare kurslitteratur digitalt.
        </p>
        <p className="text-[#225aea] text-[14px] font-semibold mt-3">
          Sigrid, Juristprogrammet, Karlstad universitet
        </p>
      </div>
    </div>
  </section>
)

export default EbookTestimonials
