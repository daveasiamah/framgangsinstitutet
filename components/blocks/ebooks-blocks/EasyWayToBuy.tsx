import Image from "next/image"
export function EasyWayToBuy() {
  return (
    <div className="flex-col md:flex-row gap-6 mt-14">
      <div className="flex flex-col">
        <h1 className="font-jakarta text-center text-5xl">
          Checkified — ett enkelt sätt att köpa böcker.
        </h1>
        <div className="flex justify-center border border-red-500 max-w-[768px] text-center items-center mt-10">
          <p className="font-inter text-center text-[#707BA0] text-base">
            Våra e-böcker passar kreatörer, företagare och anställda som vill
            utvecklas online - utan att fastna i tekniken. Våra e-böcker används
            framgångsrikt av både soloprenörer och anställda inom ett 50-tal
            olika branscher.
          </p>
        </div>
      </div>
      <section className="flex">
        <div className="flex flex-col text-center items-center border border-red-500 gap-3">
          <Image
            src={"/images/ebocker/ebook1.png"}
            width={130}
            height={200}
            alt="ebook1"
          />
          <h1 className="font-jakarta text-[25px]">E-bok med plusmeny</h1>
          <p className="font-inter text-base text-[#707BA0]">
            Stryk under och sätt bokmärken, anteckna i och utanför boken, tagga
            upp, kategorisera, planera och strukturera. Checkified är en digital
            studieplattform som ger.
          </p>
        </div>

        <div className="flex flex-col text-center items-center border border-red-500 gap-3">
          <Image
            src={"/images/ebocker/ebook2.png"}
            width={130}
            height={200}
            alt="ebook1"
          />
          <h1 className="font-jakarta text-[25px]">Kurslitteratur</h1>
          <p className="font-inter text-base text-[#707BA0]">
            Alla ska kunna ta till sig kunskap och lyckas med sina studier. Vi
            erbjuder funktioner som tillgängliggör kurslitteraturen såsom
            varierade läsarinställningar.
          </p>
        </div>
        <div className="flex flex-col text-center items-center border border-red-500 gap-3">
          <Image
            src={"/images/ebocker/ebook3.png"}
            width={130}
            height={200}
            alt="ebook1"
          />

          <h1 className="font-jakarta text-[25px]">Livstids Tillgång</h1>
          <p className="font-inter text-base text-[#707BA0]">
            När du väl har köpt en e-bok så får du tillgång till den för alltid.
            Inget slutdatum. Inga tider att passa. Du kan läsa kursen i det
            tempo som passar dig bäst.
          </p>
        </div>
      </section>
    </div>
  )
}
