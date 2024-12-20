import en from "@/locales/en";
import sv from "@/locales/sv";
import { useRouter } from "next/router";

export default function ExampleStoresBlock() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  const images = [
    "/images/home/stores/store6.png",
    "/images/home/stores/store5.png",
    "/images/home/stores/store1.png",
    "/images/home/stores/store3.png",
    "/images/home/stores/store2.png",
    "/images/home/stores/store4.png",
  ];

  return (
    <section className="flex flex-col items-center justify-center pb-[70px]">
      <div className="flex flex-col">
        <h1 className="font-bold text-[22px] md:text-[32px] lg:text-[32px] mb-5 md:mb-10 lg:mb-10 text-center md:text-left lg:text-left">
          {t.homeData.examplesStores.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[365px] h-[325px] shadow-[0px_0.5px_15px_0.5px_rgba(155,155,155,0.25)] rounded-[25px]"
            >
              <img
                src={image}
                alt="Centered Image"
                className="w-[334px] h-[233px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
