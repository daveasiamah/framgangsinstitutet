import { Variants } from "framer-motion"

export const fadeBottomVariants: Variants = {
  hide: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}
