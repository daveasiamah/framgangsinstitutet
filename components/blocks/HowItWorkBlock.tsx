import Title from "@/components/parts/Title";
import en from "@/locales/en";
import sv from "@/locales/sv";
import { useRouter } from "next/router";
import Image from "next/image";
import ScrollReveal from "@/components/transition/ScrollReveal";

export default function HowItWorkBlock({
  openModal,
}: {
  openModal: () => void;
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  const { howItWorksData } = t.pricingData;

  return (
    <section className="flex flex-col p-4 md:p-20">
      <h1 className="font-bold text-[22px] md:text-[32px] text-center mb-12">
        {howItWorksData.title}
      </h1>

      <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-8">
        {/* First Step */}
        <div className="w-full rounded-[30px] border-[0.5px] border-[#BBBBBF80]">
          <div className="flex flex-col p-7">
            <img
              src="/images/pricing/how_it_works1.svg"
              className="w-[40.57px] h-[40.57px] self-end"
            />
            <div className="text-black font-bold text-[18px] mb-4 mt-6 font-jakarta">
              {howItWorksData.items[0].title}
            </div>
            <p className="text-[#464C69] text-[14px] md:text-[16px] mb-4">
              {howItWorksData.items[0].description[0]}
            </p>
            <p className="text-[#464C69] text-[14px] md:text-[16px]">
              {howItWorksData.items[0].description[1]}
            </p>
          </div>
        </div>

        {/* Second Step */}
        <div className="w-full rounded-[30px] border-[0.5px] border-[#BBBBBF80]">
          <div className="flex flex-col p-7">
            <img
              src="/images/pricing/how_it_works2.svg"
              className="w-[40.57px] h-[40.57px] self-end"
            />
            <div className="text-black font-bold text-[18px] mb-4 mt-6 font-jakarta">
              {howItWorksData.items[1].title}
            </div>
            <p className="text-[#464C69] text-[14px] md:text-[16px] mb-4">
              {howItWorksData.items[1].description[0]}
            </p>
            <p className="text-[#464C69] text-[14px] md:text-[16px]">
              {howItWorksData.items[1].description[1]}
            </p>
          </div>
        </div>

        {/* Third Step */}
        <div className="w-full md:col-span-2 rounded-[30px] border-[0.5px] border-[#BBBBBF80] relative overflow-hidden">
          {/* Content Layer */}
          <div className="flex flex-col p-7 relative z-10">
            <img
              src="/images/pricing/how_it_works3.svg"
              className="w-[40.57px] h-[40.57px] self-end"
            />
            <div className="text-black font-bold text-[18px] mb-2 mt-[76px] font-jakarta">
              {howItWorksData.items[2].title}
            </div>
            <p className="text-[#464C69] text-[12px] md:text-[14px] max-w-2xl">
              {howItWorksData.items[2].description[0]}
              {howItWorksData.items[2].description[1]}
            </p>
          </div>

          {/* Background Layer */}
          <div
            className="absolute inset-0 h-full hidden md:block lg:block bg-[url('/images/pricing/howitworks_bg.svg')] bg-no-repeat bg-contain opacity-50"
            style={{
              backgroundPosition: "right bottom",
            }}
          />
        </div>
      </div>
    </section>
  );
}
