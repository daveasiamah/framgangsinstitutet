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

  if (text.includes("info@framgångsinstitutet.se")) {
    findText = "info@framgångsinstitutet.se"
  }
  if (text.includes("billing@framgångsinstitutet.se")) {
    findText = "billing@framgångsinstitutet.se"
  }
  if (text.includes("info@framgångsinstitutet.io")) {
    findText = "info@framgångsinstitutet.io"
  } else if (text.includes("billing@framgångsinstitutet.io")) {
    findText = "billing@framgångsinstitutet.io"
  }

  return reactStringReplace(text, findText, replacementFunction)
}
