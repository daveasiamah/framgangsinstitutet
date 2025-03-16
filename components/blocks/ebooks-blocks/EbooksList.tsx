import { useRouter } from "next/router"
import EbookCard from "@/components/blocks/ebooks-blocks/EbookCard"
import { EbookCardSkeleton } from "./components/EbookCardSkeleton"
import EbookListTitle from "./components/EbookListTitle"
import { Ebook } from "./types"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

const ITEMS_PER_PAGE = 10

interface EbooksListProps {
  ebooks: Ebook[]
  error?: string
}

const EbooksList = ({ ebooks, error }: EbooksListProps) => {
  const router = useRouter()
  const [visibleEbooks, setVisibleEbooks] = useState<Ebook[]>(
    ebooks.slice(0, ITEMS_PER_PAGE)
  )
  const [loadedItems, setLoadedItems] = useState(ITEMS_PER_PAGE)

  const loadMore = () => {
    const newLoadedItems = loadedItems + ITEMS_PER_PAGE
    setLoadedItems(newLoadedItems)
    setVisibleEbooks(ebooks.slice(0, newLoadedItems)) // Append new data
  }

  return (
    <section className="w-full px-4">
      <EbookListTitle blackText="Utforska" blueText="kursböcker" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-6 place-items-center mt-8 mb-8">
        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        {!error && visibleEbooks.length === 0 && (
          <p className="text-center text-red-500 font-semibold">
            No ebooks found.
          </p>
        )}

        {error &&
          Array.from({ length: 10 }).map((_, i) => (
            <EbookCardSkeleton key={i} />
          ))}

        {!error &&
          visibleEbooks.map((ebook) => (
            <div
              key={ebook.id}
              onClick={() => router.push(`/ebocker/${ebook.slug}`)}
              className="cursor-pointer w-full max-w-[90%] md:max-w-[250px]"
            >
              <EbookCard ebook={ebook} />
            </div>
          ))}
      </div>

      {!error && visibleEbooks.length < ebooks.length && (
        <div className="text-center items-center flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="flex items-center justify-center gap-2 px-10 py-3 text-lg font-semibold bg-[#225AEA] text-white rounded-xl hover:bg-blue-500 w-full sm:w-auto transition-colors duration-400 shadow-md"
          >
            Ladda mer
            <FaChevronDown
              className="animate-bounce"
              style={{ marginLeft: "8px" }}
            />
          </button>
        </div>
      )}
    </section>
  )
}

export default EbooksList
