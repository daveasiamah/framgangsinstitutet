"use client"
import "@/styles/globals.scss"
import "@/styles/annonser.css"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

import type { AppProps } from "next/app"
import Script from "next/script"
import { ModalProvider, useModal } from "@/components/ModalContext"
import ContractForm from "@/components/ContractForm"

function AppContent({ Component, pageProps }: AppProps) {
  const { isContractFormOpen, closeContractForm } = useModal()

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T9V9474454"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T9V9474454');
          `,
        }}
      />

      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1245929254370382');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1245929254370382&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <Component {...pageProps} />
      {isContractFormOpen && <ContractForm onClose={closeContractForm} />}
    </>
  )
}

export default function App(props: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ModalProvider>
        <AppContent {...props} />
      </ModalProvider>
    </ChakraProvider>
  )
}
