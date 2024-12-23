import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"

export function FAQBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="flex flex-col gap-2 md:w-2/3 mx-auto p-4 mb-8">
      <h1 className="font-bold text-[22px] md:text-[32px] lg:text-[32px] mb-5 md:mb-10 lg:mb-10 text-center">
        {t.pricingData.faqBlackTitle} {t.pricingData.faqBlueTitle}
      </h1>
      <div className="flex items-center gap-2">
        <img src="/images/pricing/right-arrow1.png" className="w-2 h-2" />
        <h6 className="text-sm font-semibold">
          Behöver jag ha ett Shopify konto innan jag använder webbplatserna?
        </h6>
      </div>
      <p className="text-xs ml-4">
        Inga! Alla våra Shopify Dropshipping-butiker kommer som helt nya butiker
        som du får en 3 dagars gratis provperiod med. Efter 3 dagars gratis
        provperiod kommer Shopify att kosta 10 kr för 3 månad och efter 3
        månader kommer Shopify att vara 399 kr/månad. Om du inte vill betala $39
        kan du avbryta din 10 kr månad provperiod. Risken är mycket låg.
      </p>
    </section>
  )
}
