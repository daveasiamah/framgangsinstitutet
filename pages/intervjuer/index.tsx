import { useEffect } from "react"
import { useRouter } from "next/router"

function Intervjuer() {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  }, [router])

  return null
}

export default Intervjuer
