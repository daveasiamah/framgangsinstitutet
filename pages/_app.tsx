"use client"
import "@/styles/globals.scss"
import "@/styles/annonser.css"

import { useSession, SessionProvider } from "next-auth/react"

import type { AppProps } from "next/app"
import Script from "next/script"
import { useRouter } from "next/router"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()

  // Conditionally apply CSS for specific pages
  // router.pathname === "/annonser" ? require("@/styles/annonser.css") : require("@/styles/globals.scss");

  return (
    <>
      {/* Add the Hotjar tracking code */}

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-FF7H6JCNB6`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FF7H6JCNB6', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="gtag-init1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3447699,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      {/* Add the Google Tag Manager (GTM) code here */}
      <Script
        id="gtag-init2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-5BC5XVQ'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5BC5XVQ');
          `,
        }}
      />

      {/* Chatbase initialization script */}
      <Script id="chatbase-init" strategy="beforeInteractive">
        {`
          (function(){
            if (!window.chatbase || window.chatbase("getState") !== "initialized") {
              window.chatbase = (...arguments) => {
                if (!window.chatbase.q) {
                  window.chatbase.q = [];
                }
                window.chatbase.q.push(arguments);
              };

              window.chatbase = new Proxy(window.chatbase, {
                get(target, prop) {
                  if (prop === "q") {
                    return target.q;
                  }
                  return (...args) => target(prop, ...args);
                }
              });
            }

            const onLoad = function() {
              const script = document.createElement("script");
              script.src = "https://www.chatbase.co/embed.min.js";
              script.id = "9FKzKqGL58yZU4C5KxhTD"; // <-- Replace with your chatbot ID
              script.domain = "www.chatbase.co";
              document.body.appendChild(script);
            };

            if (document.readyState === "complete") {
              onLoad();
            } else {
              window.addEventListener("load", onLoad);
            }
          })();
        `}
      </Script>

      {/* <script src="//code.tidio.co/b3qsg0t7uu4nseq9piuuayi3u5gx3bi6.js" async></script> */}
      <meta
        name="facebook-domain-verification"
        content="t53l0hv3hj3lqy0wlcz3y3mt0aywav"
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5BC5XVQ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
