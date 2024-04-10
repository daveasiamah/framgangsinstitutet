import Link from "next/link"
import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

type Props = {
  className?: string
  isReverse?: boolean
  href: string,
  as: string,
  onClick: () => void,
  children: React.ReactNode
}
 
export default function ButtonArrow({
  className,
  isReverse,
  children,
  href,
  as="link",
  onClick
}: Props) {
  return (

    as === "btn" ? 
    (
      <button
      className={`btn btn-outline ${
        isReverse ? "btn-icon-reverse" : "btn-icon"
      }  border-2 ${
        isReverse ? "border-white text-white" : "border-primary text-primary "
      } pr-2 pl-4 ${className}`}
      onClick={onClick}
    >
      {children}
      <MdKeyboardArrowRight
        className={`${
          isReverse ? "bg-white/40 text-white" : "bg-primary text-white"
        }  p-1 rounded-lg ml-2`}
        size={34}
      />
    </button>
    ) 
    :
    (
    <Link
      href={href}
      className={`btn btn-outline ${
        isReverse ? "btn-icon-reverse" : "btn-icon"
      }  border-2 ${
        isReverse ? "border-white text-white" : "border-primary text-primary "
      } pr-2 pl-4 ${className}`}
    >
      {children}
      <MdKeyboardArrowRight
        className={`${
          isReverse ? "bg-white/40 text-white" : "bg-primary text-white"
        }  p-1 rounded-lg ml-2`}
        size={34}
      />
    </Link>
    )
    
  )
}
