import React from "react"
import Head from "next/head"

type Props = {
  title: string
  path?: string
}

export default function MetaHead({ title, path }: Props) {
  return (
    <Head>
      <title>{`${title} - Checkified - Sveriges största e-handelsutbildning som fokuserar på resultat!`}</title>
      <meta
        name="description"
        content={`Skapa mer frihet i vardagen genom att bygga ditt eget e-handelsföretag. Följ över 1000 svenskar som redan tagit steget och upptäck hur det känns att jobba digitalt på riktigt. Gör det smarta valet, utbilda dig genom framtidens skola och börja få resultat medan du lär dig. Se guide.${title}`}
      />
      <meta
        property="og:title"
        content={`${title} - Checkified - Sveriges största e-handelsutbildning som fokuserar på resultat!`}
      />
      <meta
        property="og:description"
        content={`Skapa mer frihet i vardagen genom att bygga ditt eget e-handelsföretag. Följ över 1000 svenskar som redan tagit steget och upptäck hur det känns att jobba digitalt på riktigt. Gör det smarta valet, utbilda dig genom framtidens skola och börja få resultat medan du lär dig. Se guide.${title}`}
      />
      <meta property="og:image" content="/logo.png" />
      {/* <meta
        property="og:URL"
        content={`https://fakestoreapi.com/products/${productId}`}
      /> */}
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      {/* <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="967764a7-1d94-4754-953e-373f89d43089"
        type="text/javascript"
        async
      ></script> */}
    </Head>
  )
}
