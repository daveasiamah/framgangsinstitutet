import Layout from "@/components/Layout"
import EbooksHeroBlock from "@/components/blocks/ebooks-blocks/EbooksHeroBlock"
import EbooksList from "@/components/blocks/ebooks-blocks/EbooksList"
import EbookTestimonials from "@/components/blocks/ebooks-blocks/EbookTestimonials"
import EbookOverview from "@/components/blocks/ebooks-blocks/EbookOverview"
import { EasyWayToBuy } from "@/components/blocks/ebooks-blocks/EasyWayToBuy"
import { GetServerSideProps } from "next"
import { getEbooks } from "@/utils/contentful"
import { Ebook } from "@/components/blocks/ebooks-blocks/types"

interface EbooksProps {
  ebooks: Ebook[]
  error?: string
}

export default function Ebooks({ ebooks, error }: EbooksProps) {
  return (
    <Layout headTitle="Eböcker">
      <section className="w-full">
        <EbooksHeroBlock />
        <EbooksList ebooks={ebooks} error={error} />
        <EasyWayToBuy />
        <EbookTestimonials />
        <EbookOverview />
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const ebooks = await getEbooks()
    return { props: { ebooks } }
  } catch (error) {
    return { props: { ebooks: [], error: "Failed to fetch ebooks." } }
  }
}
