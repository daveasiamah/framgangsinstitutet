import { ArrowRight, CheckCircle2 } from "lucide-react"

const MentorshipCard = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const features = [
    {
      text: "Omedelbar tillgång",
      highlight: "till framgångsinstitutet",
      boldFirst: true,
    },
    {
      text: "Världsledande",
      highlight: "programvara för onlinekurser",
      boldSecond: true,
    },
    {
      text: "45+ e-handelsavsnitt",
      highlight: "inom olika moduler",
      boldFirst: true,
    },
    {
      text: "Privat community med över",
      highlight: "1000+ medlemmar",
      boldSecond: true,
    },
    {
      text: "25 000+ förredigerade videor",
      highlight: "och klipp",
      boldFirst: true,
    },
    {
      text: "Färdigbyggda webbplatsfunnels",
      highlight: "och mallar",
      boldFirst: true,
    },
    { text: "Inbyggda 2026", highlight: "AI-instruktörer", boldSecond: true },
  ]

  return (
    <div className="bg-primary rounded-2xl sm:rounded-3xl p-3 sm:p-4 mt-6">
      {/* Top card */}
      <div className="flex flex-col items-center justify-between rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 bg-white">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          <img
            src="/icons/checkified-icon-blue.png"
            alt="framgångsinstitutet icon"
            width={28}
            height={28}
            className="sm:w-[35px] sm:h-[35px]"
          />
          <h2 className="text-lg sm:text-[22px] md:text-[22px] font-jakarta font-bold text-[#1C46B0] leading-tight">
            Dropshipping Mentorskap
          </h2>
        </div>

        {/* Subtitle */}
        <div className="flex items-center rounded-lg bg-[#f3f6fe] min-h-[26px] justify-center align-middle self-center px-2 sm:px-4 py-1.5 sm:py-2 inset-2 shadow-inner max-w-[434px] md:max-w-full mb-4 w-full">
          <p className="font-inter text-[10px] sm:text-xs md:text-sm text-[#235AE9] text-center leading-tight px-1">
            Få tillgång till din plug-and-play-onlineverksamhet
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="w-full bg-primary hover:bg-primary-deep text-white text-sm sm:text-md py-2.5 sm:py-2 md:py-2.5 rounded-xl mb-4 sm:mb-6 font-medium"
        >
          Ansök till Mentorskap{" "}
          <ArrowRight size={16} className="inline-block ml-2" />
        </button>

        {/* Rating */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-foreground font-inter font-medium text-xs sm:text-sm">
            Strålande
          </span>
          <div className="flex gap-1">
            <img
              src="/icons/trustpilot-stars.svg"
              width={80}
              height={14}
              alt="trustpilot stars"
              className="sm:w-[100px] sm:h-[17px] md:w-[120px] md:h-[20px]"
            />
          </div>
          <span className="text-foreground font-inter text-xs sm:text-sm">
            4.8 av 5.0
          </span>
        </div>
      </div>

      {/* Feature bar */}
      <div
        className="bg-primary/90 border border-white rounded-full px-2 py-2.5 mb-4"
        style={{
          boxShadow: "0 0 9.4px 1px rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="flex items-center border-1 border-white justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white font-inter overflow-hidden">
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
            <img
              src="/icons/bolt.svg"
              width={12}
              height={13.3}
              alt="bolt"
              className="w-[14px] h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
            />
            <span className="font-jakarta text-[10px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
              Få omedelbar åtkomst
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
            <img
              src="/icons/handshake.svg"
              width={12}
              height={13.3}
              alt="handshake"
              className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
            />
            <span className="font-jakarta text-[10px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
              24/7 support
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
            <img
              src="/icons/hand.svg"
              width={12}
              height={13.3}
              alt="hand"
              className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
            />
            <span className="font-jakarta text-[10px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
              Livstids tillgång
            </span>
          </div>
        </div>
      </div>

      {/* Feature list */}
      <div className="bg-white rounded-xl sm:rounded-2xl px-2 py-4 sm:p-6 md:p-4 shadow-lg">
        <ul className="space-y-3 sm:space-y-4">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2 sm:gap-3 text-[#225AEA] font-inter"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#225AEA] flex-shrink-0 mt-0.5" />
              <p className="text-[#225AEA] text-[12px] sm:text-[14px] font-inter leading-relaxed">
                {f.boldFirst ? (
                  <>
                    <span className="font-bold font-inter">{f.text}</span>{" "}
                    {f.highlight}
                  </>
                ) : (
                  <>
                    {f.text}{" "}
                    <span className="font-bold font-inter">{f.highlight}</span>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MentorshipCard
