import React from "react"
import Head from "next/head"

type Props = {
  title: string
  path?: string
}

export default function MetaHead({ title, path }: Props) {
  return (
    <Head>
      <title>{`${title} - Lär Dig Sälja Med Dropshipping`}</title>
      <meta name="description" content={`Börja sälja med dropshipping och bygg en lönsam e-handel. Vi ger dig de bästa strategierna för framgång inom e-handel. Bli en dropshipping-expert nu!. ${title}`} />
      <meta property="og:title" content={`${title} - Lär Dig Sälja Med Dropshipping`} />
      <meta property="og:description" content={`Börja sälja med dropshipping och bygg en lönsam e-handel. Vi ger dig de bästa strategierna för framgång inom e-handel. Bli en dropshipping-expert nu!. ${title}`} />
      <meta property="og:image" content="/logo.png" />
      {/* <meta
        property="og:URL"
        content={`https://fakestoreapi.com/products/${productId}`}
      /> */}
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
