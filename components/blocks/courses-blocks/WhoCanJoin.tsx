import React from "react"

export default function WhoCanJoin() {
  return (
    <section className="flex flex-col items-center justify-center md:py-6 gap-6 text-center">
      <h4 className="text-2xl md:text-[30px] lg:text-[40px] font-jakarta font-extrabold text-[#151e3a] mb-2 md:mb-2 md:self-center">
        För vem passar utbildningarna?
      </h4>

      <div className="flex flex-col lg:flex-row justify-center items-center md:gap-10">
        <div className="w-full lg:w-2/5 flex justify-center md:justify-center lg:justify-end lg:mb-0 order-0 lg:order-1">
          <img
            src="/images/courses/who-can-join.svg"
            alt="globe"
            className="object-fill md:mb-1 h-auto"
          />
        </div>

        <div className="w-full md:px-12 lg:px-0 lg:w-2/5 lg:mr-5 md:mb-2 lg:mb-0 order-0 lg:order-0">
          <p className="mt-4 text-[#707ba0] text-[14px] lg:text-[16px] leading-[22px] font-[500] text-center font-inter">
            Våra utbildningar passar kreatörer, företagare och anställda som
            vill utvecklas online – utan att fastna i tekniken.
            <br /> <br />
            Checkified Academy lanserades 2022 och drivs av Dominic, digital
            entreprenör som brinner för att hjälpa företagare, anställda och
            kreatörer jobba smart digitalt!
            <br />
            <br /> Våra utbildningar används framgångsrikt av både soloprenörer
            och anställda inom ett 50-tal olika branscher. 
          </p>
        </div>
      </div>
    </section>
  )
}