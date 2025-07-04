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
  backgroundImage = "/images/mentorship/success-big.png",
  stories = [
    {
      image: "/images/mentorship/success-2.png",
      title:
        "Nybörjare gick från ingen kunskap om dropshipping till över 164 000+ på en dag",
      description:
        "Casper visste inget om dropshipping men lärde sig snabbt med hjälp av programmet. På bara en dag tjänade han över 164 000 kr.",
    },
    {
      image: "/images/mentorship/success-3.png",
      title:
        "Från att jobba på ICA till att göra 2,8 miljoner kronor med dropshipping e-handel",
      description:
        "Caroline gick från heltid på ICA till en dropshipping-verksamhet som nu omsätter miljoner. Mentorskapet gav henne verktygen för att lyckas.",
    },
    {
      image: "/images/mentorship/success-4.png",
      title:
        "Ingen erfarenhet och jobba på Postnord till att generera över 100k på två månader",
      description:
        "Nils gick från att jobba på Postnord till att tjäna över 100 000 kr på två månader, tack vare mentorskapets stöd och vägledning.",
    },
    {
      image: "/images/mentorship/success-5.png",
      title:
        "Fattig student lyckades skala till 97 000 kr  med Dropshipping Mentorskap",
      description:
        "Viktor är en helt vanlig student i sitt sista år, med hjälp av vårt mentorskap lyckades han skala upp sin verksamhet till 100 000 kr.",
    },
  ],
}: SuccessStoriesGridProps) => {
  return (
    <div className="relative w-full  max-w-[1045px] mx-auto mt-10">
      {/* Background Image Container */}
      <div className="w-full h-full">
        <Image
          className="w-full h-full object-cover"
          alt="Background"
          src={backgroundImage}
          width={1920}
          height={1080}
        />
      </div>

      {/* Content Grid */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 1 column on mobile, 2 columns on tablet, 4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {stories.map((story, index) => (
              <div key={index} className="w-full">
                <div className="overflow-hidden h-full">
                  {/* Story Image */}
                  <div className="w-full h-48 sm:h-52 lg:h-64 overflow-hidden">
                    <Image
                      className="w-full h-full object-contain"
                      alt="Success Story"
                      src={story.image}
                      width={400}
                      height={300}
                    />
                  </div>

                  {/* Story Content */}
                  <div className="relative p-4 sm:p-5 lg:p-6">
                    <h3 className="font-bold text-[#151e3a] text-sm sm:text-base lg:text-sm leading-tight mb-3 font-jakarta">
                      {story.title}
                    </h3>
                    <p className="font-medium text-[#151e3a] text-xs sm:text-sm lg:text-xs leading-relaxed font-inter">
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
