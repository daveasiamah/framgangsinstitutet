import Title from "@/components/parts/Title";
import en from "@/locales/en";
import sv from "@/locales/sv";
import {useRouter} from "next/router";

export default function ExampleStoresBlock() {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv

    const images = [
        '/images/home/stores/store6.png',
        '/images/home/stores/store5.png',
        '/images/home/stores/store1.png',
        '/images/home/stores/store3.png',
        '/images/home/stores/store2.png',
        '/images/home/stores/store4.png',
    ];


    return (
        <section className="flex items-center flex-col">
            <img
                src="/images/home/stores/dropship-stores.png"
                alt="dropship-stores"
                className="lg:w-[144px] lg:h-[144px] w-[96px] h-[96px]"
            />
            <Title blackText={t.homeData.examplesStores.title}/>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="store"
                        className="w-full h-full object-contain"
                    />
                ))}
            </div>
        </section>
    )
}