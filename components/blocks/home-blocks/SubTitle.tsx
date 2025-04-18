import React from "react"

interface Props {
  subtitleText: string
}
function SubTitle({ subtitleText }: Props) {
  return (
    <p className="font-inter font-500 text-sm md:text-[1.25rem] text-[#434C69] text-center">
      {subtitleText}
    </p>
  )
}

export default SubTitle
