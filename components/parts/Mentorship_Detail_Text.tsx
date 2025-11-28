import MentorshipButton from "./Mentorship_Button"

interface MentorshipDetailsTextProps {
  onCtaClick?: () => void
}

const MentorshipDetailsText = ({ onCtaClick }: MentorshipDetailsTextProps) => {
  return (
    <div className="w-full  max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-0 mt-10 mb-10">
      <div className="text-black text-sm sm:text-base lg:text-lg leading-relaxed font-inter">
        <span className="font-bold text-lg sm:text-xl lg:text-2xl font-inter">
          Kort sagt:
        </span>

        <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6 font-medium">
          <p>
            Vi ger dig alla verktyg du behöver så att du kan börja tjäna pengar
            med din e-handelsverksamhet.
          </p>

          <p>
            Jag har gjort massor av misstag på vägen till över 120 miljoner
            kronor i onlineförsäljning. Jag har ärren för att bevisa det. Du
            slipper alla fallgropar och får ENDAST det som fungerar – och
            fungerar NU.
          </p>

          <p>
            Alla exakta strategier, ramverk, exempel från verkligheten,
            fallstudier och färdiga mallar som hjälper dig att lyckas, med ett
            mål i åtanke:
          </p>

          <p>
            Ingen onödig information, bara den tydligaste och enklaste vägen...
            för att göra dig till vår nästa framgångshistoria.
          </p>

          <p className="font-semibold">Lyssna...</p>

          <p>Du kan spendera de kommande åren på att jaga nya trender.</p>

          <p>
            Eller så kan du hoppa över allt det och göra något beprövat,
            förutsägbart och verkligt – som ger dig helautomatisk, stadig
            inkomst.
          </p>
        </div>
      </div>
      <MentorshipButton
        className="mx-0 mt-7 text-xs"
        size="small"
        onClick={onCtaClick}
      />
    </div>
  )
}

export default MentorshipDetailsText
