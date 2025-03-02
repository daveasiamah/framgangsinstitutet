import Image from "next/image"

export function EasyWayToBuy() {
  return (
    <div className="flex flex-col items-center gap-6 mt-14">
      <div className="flex flex-col items-center">
        <h1 className="font-jakarta font-extrabold text-center text-[22px] md:text-5xl">
          Checkified — ett enkelt sätt att köpa böcker.
        </h1>
        <div className="flex justify-center max-w-[768px] w-full text-center items-center mt-10 p-4 mx-auto">
          <p className="font-inter text-center text-[#707BA0] text-base">
            Våra e-böcker passar kreatörer, företagare och anställda som vill
            utvecklas online - utan att fastna i tekniken. Våra e-böcker används
            framgångsrikt av både soloprenörer och anställda inom ett 50-tal
            olika branscher.
          </p>
        </div>
      </div>
      <section className="flex flex-col md:flex-row gap-4 justify-center">
        {[
          {
            image: "ebook1.png",
            title: "E-bok med plusmeny",
            description:
              "Stryk under och sätt bokmärken, anteckna i och utanför boken, tagga upp, kategorisera, planera och strukturera. Checkified är en digital studieplattform som ger.",
          },
          {
            image: "ebook2.png",
            title: "Kurslitteratur",
            description:
              "Alla ska kunna ta till sig kunskap och lyckas med sina studier. Vi erbjuder funktioner som tillgängliggör kurslitteraturen såsom varierade läsarinställningar.",
          },
          {
            image: "ebook3.png",
            title: "Livstids Tillgång",
            description:
              "När du väl har köpt en e-bok så får du tillgång till den för alltid. Inget slutdatum. Inga tider att passa. Du kan läsa kursen i det tempo som passar dig bäst.",
          },
        ].map((ebook, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center gap-3 p-4"
          >
            <Image
              src={`/images/ebocker/${ebook.image}`}
              width={182}
              height={160}
              alt={ebook.title}
            />
            <h1 className="font-jakarta font-extrabold text-[22px] md:text-[25px]">
              {ebook.title}
            </h1>
            <p className="font-inter md:font-medium md:text-base text-[#707BA0]">
              {ebook.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}
