import Link from "next/link"
import reactStringReplace from "react-string-replace"

const replacementFunction = (match: string): JSX.Element => {
  return (
    <Link href={`mailto:${match}`} className="text-primary">
      {match}
    </Link>
  )
}

export const stringToJsx = (text: string) => {
  let findText

  if (text.includes("info@checkified.se")) {
    findText = "info@checkified.se"
  }
  if (text.includes("billing@checkified.se")) {
    findText = "billing@checkified.se"
  }
  if (text.includes("info@checkified.io")) {
    findText = "info@checkified.io"
  } else if (text.includes("billing@checkified.io")) {
    findText = "billing@checkified.io"
  }

  return reactStringReplace(text, findText, replacementFunction)
}
