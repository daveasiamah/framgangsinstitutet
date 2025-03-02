import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import "react-loading-skeleton/dist/skeleton.css"
import { getCourses } from "@/utils/contentful"
import { Ebook } from "./types"
import EbookCard from "./EbookCard"
import { EbookCardSkeleton } from "./components/EbookCardSkeleton"
import EbookListTitle from "./components/EbookListTitle"

const ITEMS_PER_PAGE = 10

const EbooksList = () => {
  const [ebooks, setEbooks] = useState<Ebook[]>([])
  const [visibleEbooks, setVisibleEbooks] = useState<Ebook[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loadedItems, setLoadedItems] = useState(ITEMS_PER_PAGE)
  const router = useRouter()

  useEffect(() => {
    const fetchEbooks = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const allEbooks = await getCourses()
        if (allEbooks && allEbooks.length > 0) {
          setEbooks(allEbooks)
          setVisibleEbooks(allEbooks.slice(0, ITEMS_PER_PAGE))
        } else {
          setError("No ebooks found.")
        }
      } catch (err) {
        setError("Failed to fetch ebooks. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchEbooks()
  }, [])

  const loadMore = () => {
    const newLoadedItems = loadedItems + ITEMS_PER_PAGE
    setLoadedItems(newLoadedItems)
    setVisibleEbooks(ebooks.slice(0, newLoadedItems))
  }

  return (
    <section className="w-full px-4">
      <EbookListTitle blackText="Utforska" blueText="kursböcker" />

      {/* Updated Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-6 place-items-center mt-8 mb-8">
        {isLoading &&
          Array.from({ length: 10 }).map((_, i) => (
            <EbookCardSkeleton key={i} />
          ))}

        {!isLoading &&
          !error &&
          visibleEbooks.map((ebook: Ebook) => (
            <div
              key={ebook.id}
              onClick={() => router.push(`/ebocker/${ebook.slug}`)}
              className="cursor-pointer w-full max-w-[250px]"
            >
              <EbookCard ebook={ebook} />
            </div>
          ))}

        {!isLoading && error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}
      </div>

      {!isLoading && !error && visibleEbooks.length < ebooks.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="px-10 font-jakarta py-2 bg-[#225AEA] text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}

export default EbooksList
