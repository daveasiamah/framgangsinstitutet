import React from "react"
import Head from "next/head"

type Props = {
  title: string
  path?: string
}

export default function MetaHead({ title, path }: Props) {
  return (
    <Head>
      <title>{`${title} - Utbildningar och kurser på distans`}</title>
      <meta
        name="description"
        content={`Börja din framtid Checkified! Våra praktiska och digitala utbildningar ger dig rätt kompetens för jobb inom e-handel och tech. Lär dig på distans och ta nästa steg i karriären. ${title}`}
      />
      <meta
        property="og:title"
        content={`${title} - Utbildningar och kurser på distans`}
      />
      <meta
        property="og:description"
        content={`Börja din framtid Checkified! Våra praktiska och digitala utbildningar ger dig rätt kompetens för jobb inom e-handel och tech. Lär dig på distans och ta nästa steg i karriären.. ${title}`}
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
