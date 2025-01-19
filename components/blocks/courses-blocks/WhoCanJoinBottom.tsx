import React from "react"
import Image from "next/image"

export default function WhoCanJoinBottomSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-8 py-10">
      {/* Column 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-full h-[168px] relative mb-4">
          <Image
            src="/images/courses/who-can-join1.svg"
            alt="100% på distans"
            fill
            className="object-contain"
          />
        </div>
        <h4 className="font-jakarta font-extrabold text-[1.375rem] md:text-[1rem] lg:text-[1.3625rem] xl:text-[1.5625rem] text-[#151e3a] mb-4">
          100% på distans
        </h4>
        <p className="text-[#707BA0] text-[0.875rem] md:text-[0.85rem] leading-relaxed">
          Alla våra kurser sker 100% på distans. Inga klassrum, inga tider att
          hålla. Du bestämmer helt själv när och vart du vill läsa kursen.
        </p>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-full h-[168px] relative mb-4">
          <Image
            src="/images/courses/who-can-join2.svg"
            alt="Börja studera när som helst"
            fill
            className="object-contain"
          />
        </div>
        <h4 className="font-jakarta font-extrabold text-[1.375rem] md:text-[1rem] lg:text-[1.3625rem] xl:text-[1.5625rem] text-[#151e3a] mb-4">
          Börja studera när som helst
        </h4>
        <p className="text-[#707BA0] text-[0.875rem] md:text-[0.85rem] leading-relaxed">
          Vi har inte några startdatum. Du bestämmer helt själv när du vill
          sätta igång med kursen. Vid köp så får du tillgång till kursen direkt.
        </p>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-full h-[168px] relative mb-4">
          <Image
            src="/images/courses/who-can-join3.svg"
            alt="Inget slutdatum"
            fill
            className="object-contain"
          />
        </div>
        <h4 className="font-jakarta font-extrabold text-[1.375rem] md:text-[1rem] lg:text-[1.3625rem] xl:text-[1.5625rem] text-[#151e3a] mb-4">
          Inget slutdatum
        </h4>
        <p className="text-[#707BA0] text-[0.875rem] md:text-[0.85rem] leading-relaxed">
          När du väl har köpt en kurs så får du tillgång till den för alltid.
          Inget slutdatum. Inga tider att passa. Du kan läsa kursen i det tempo
          som passar dig bäst.
        </p>
      </div>
    </section>
  )
}
