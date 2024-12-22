import { useCallback } from "react"

export function useStars() {
  const getStars = useCallback((rating: number) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img
          src="/images/pricing/green-star.svg"
          className="w-5 h-full p-[0.25px]"
        />
      )
    }
    return stars
  }, [])

  return getStars
}
