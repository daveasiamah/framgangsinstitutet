import React from "react"
import Image from "next/image"

export const WhoCanJoin: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-2 md:px-12 py-10 gap-8 text-center md:text-left">
      {/* Title Section */}
      <h4 className="text-3xl md:text-4xl lg:text-5xl font-jakarta font-extrabold text-[#151e3a] mb-5 md:mb-4 md:self-center">
        För vem passar utbildningarna?
      </h4>

      {/* Text and Image Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-8">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-[#707BA0] w-full md:w-1/2">
          <p className="text-[1rem] mb-4">
            Våra utbildningar passar kreatörer, företagare och anställda som
            vill utvecklas online – utan att fastna i tekniken.
          </p>
          <p className="text-[1rem] mb-4">
            Checkified Academy lanserades 2022 och drivs av Dominic, digital
            entreprenör som brinner för att hjälpa företagare, anställda och
            kreatörer jobba smart digitalt!
          </p>
          <p className="text-[1rem]">
            Våra utbildningar används framgångsrikt av både soloprenörer och
            anställda inom ett 50-tal olika branscher.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            width={416}
            height={243}
            src="/images/courses/who-can-join.svg"
            alt="Who Can Join"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  )
}
