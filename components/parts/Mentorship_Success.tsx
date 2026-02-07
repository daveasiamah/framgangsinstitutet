import Image from "next/image"

interface Story {
  image: string
  title: string
  description: string
}

interface SuccessStoriesGridProps {
  backgroundImage?: string
  stories?: Story[]
}

const SuccessStoriesGrid = ({
  backgroundImage = "/images/mentorship/result1.jpg",
  stories = [
    {
      image: "/images/mentorship/result2.jpg",
      title:
        "Nybörjare gick från ingen kunskap om dropshipping till över 164 000+ på en dag",
      description:
        "Casper visste inget om dropshipping men lärde sig snabbt med hjälp av programmet. På bara en dag tjänade han över 164 000 kr.",
    },
    {
      image: "/images/mentorship/result3.jpg",
      title:
        "Från att jobba på ICA till att göra 2,8 miljoner kronor med dropshipping e-handel",
      description:
        "Caroline gick från heltid på ICA till en dropshipping-verksamhet som nu omsätter miljoner. Mentorskapet gav henne verktygen för att lyckas.",
    },
    {
      image: "/images/mentorship/result4.jpg",
      title:
        "Ingen erfarenhet och jobba på Postnord till att generera över 100k på två månader",
      description:
        "Nils gick från att jobba på Postnord till att tjäna över 100 000 kr på två månader, tack vare mentorskapets stöd och vägledning.",
    },
    {
      image: "/images/mentorship/result5.jpg",
      title:
        "Fattig student lyckades skala till 97 000 kr  med Dropshipping Mentorskap",
      description:
        "Viktor är en helt vanlig student i sitt sista år, med hjälp av vårt mentorskap lyckades han skala upp sin verksamhet till 100 000 kr.",
    },
  ],
}: SuccessStoriesGridProps) => {
  return (
    <div className="relative w-full mx-auto max-w-[858px]">
      {/* Background Image Container */}
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover rounded-[25px]"
          alt="Background"
          src={backgroundImage}
          width={1920}
          height={1080}
        />
      </div>

      {/* Content Grid */}
      <div className="relative w-full pt-[24px] mb-[40px]">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 1 column on mobile, 2 columns on tablet, 4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[30px] lg:gap-[38px]">
            {stories.map((story, index) => (
              <div key={index} className="w-full">
                <div className="overflow-hidden h-full">
                  {/* Story Image */}
                  <div className="w-full overflow-hidden mb-[12px]">
                    <img
                      className="w-full h-full object-contain rounded-[25px]"
                      alt="Success Story"
                      src={story.image}
                      width={396}
                      height={198}
                    />
                  </div>

                  {/* Story Content */}
                  <div className="relative gap-1 flex flex-col">
                    <h3 className="font-extrabold text-[#151e3a] text-sm leading-tight font-jakarta">
                      {story.title}
                    </h3>
                    <p className="font-medium text-[#151e3a] text-xs font-inter">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStoriesGrid
