import MentorshipButton from "./Mentorship_Button"

interface MentorshipDetailsTextProps {
  onCtaClick?: () => void
}

const MentorshipDetailsText = ({ onCtaClick }: MentorshipDetailsTextProps) => {
  return (
    <div className="w-full max-w-[854px] mx-auto mb-4">
      <div className="text-black text-sm sm:text-base lg:text-lg leading-relaxed font-inter">
        <p className="font-bold font-inter text-xs md:text-base">Kort sagt:</p>
        <br />
        <div className="font-inter text-xs md:text-base font-medium">
          <p>
            Vi ger dig alla verktyg du behöver så att du kan börja tjäna pengar
            med din e-handelsverksamhet.
          </p>
          <br />
          <p>
            Jag har gjort massor av misstag på vägen till över 120 miljoner
            kronor i onlineförsäljning. Jag har ärren för att bevisa det. Du
            slipper alla fallgropar och får ENDAST det som fungerar – och
            fungerar NU.
          </p>
          <br />
          <p>
            Alla exakta strategier, ramverk, exempel från verkligheten,
            fallstudier och färdiga mallar som hjälper dig att lyckas, med ett
            mål i åtanke:
          </p>
          <br />
          <p>
            Ingen onödig information, bara den tydligaste och enklaste vägen...
            för att göra dig till vår nästa framgångshistoria.
          </p>
          <br />
          <p className="font-semibold">Lyssna...</p>
          <br />
          <p>Du kan spendera de kommande åren på att jaga nya trender.</p>
          <br />
          <p>
            Eller så kan du hoppa över allt det och göra något beprövat,
            förutsägbart och verkligt – som ger dig helautomatisk, stadig
            inkomst.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start mt-4">
        <MentorshipButton size="small" onClick={onCtaClick} />
      </div>
    </div>
  )
}

export default MentorshipDetailsText
