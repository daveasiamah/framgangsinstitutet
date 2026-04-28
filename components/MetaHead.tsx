import React from "react"
import Head from "next/head"

type Props = {
  title: string
  description?: string
  exactTitle?: boolean
  path?: string
}

export default function MetaHead({
  title,
  description,
  exactTitle,
  path,
}: Props) {
  const resolvedTitle = title?.trim() || "Framgångsinstitutet"
  const resolvedDescription =
    description ||
    `Skapa mer frihet i vardagen genom att bygga ditt eget e-handelsföretag. Följ över 1000 svenskar som redan tagit steget och upptäck hur det känns att jobba digitalt på riktigt. Gör det smarta valet, utbilda dig genom framtidens skola och börja få resultat medan du lär dig. Se guide.${title}`

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
