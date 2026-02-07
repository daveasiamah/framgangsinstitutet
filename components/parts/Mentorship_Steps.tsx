import React from "react"

const MentorshipSteps = () => {
  const steps = [
    {
      number: "Steg 1",
      title: "Steg 1: Ansök om mentorskap i världsklass (tar 2 minuter)...",
    },
    {
      number: "Steg 2",
      title:
        "Steg 2: Hoppa på en snabb framgångssession online med en av mina rådgivare för att skapa en personlig spelplan...",
    },
    {
      number: "Steg 3",
      title:
        "Steg 3: Våra experter kommer att börja bygga din butik medan du går igenom modulerna (så att du kan tjäna medan du lär dig)...",
    },
    {
      number: "Steg 4",
      title:
        "Steg 4: Se din dropshippingbutik (och bankkonto) explodera, medan dina stressnivåer sjunker...",
    },
  ]

  return (
    <div className="w-full max-w-[1266px] mx-auto py-8">
      <p className="font-inter text-xl font-semibold mb-3">Dina nästa steg</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          const isLast = index === 3

          return (
            <div
              key={index}
              className={`
                relative w-full h-[262px] p-[18px] bg-gray-100 rounded-3xl overflow-hidden border border-gray
                ${
                  isLast
                    ? "col-span-1 lg:col-span-3 pb-[64px] lg:bg-[url('/images/mentorship/mentorship-products/step4-bg.svg')] bg-no-repeat bg-[90%_300%] lg:bg-[length:1300px]"
                    : ""
                }
              `}
            >
              {/* Step Badge */}
              <div className="flex items-center justify-center w-16 h-[21px] bg-[#edf5fe] rounded-[5px] shadow-[0px_32px_115px_#00000029]">
                <div className="font-medium text-[#225aea] text-[10px] text-left">
                  {step.number}
                </div>
              </div>

              {/* Step Content (centered text) */}
              <p
                className={
                  isLast
                    ? "absolute left-4 right-4 bottom-[20px] lg:bottom-[60px] font-inter font-semibold text-[#151e3a] text-lg leading-[25px]"
                    : "absolute bottom-[20px] left-4 right-4 font-inter max-w-[327px] font-semibold text-[#151e3a] text-lg leading-[25px]"
                }
              >
                {step.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MentorshipSteps
