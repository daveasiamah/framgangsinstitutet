"use client"
import "@/styles/globals.scss"
import "@/styles/annonser.css"

import { useSession, SessionProvider } from "next-auth/react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

import type { AppProps } from "next/app"
import Script from "next/script"
import { useRouter } from "next/router"
import { ModalProvider } from "@/components/ModalContext"

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
        id="Cookiebot"
        strategy="afterInteractive"
        data-cbid="967764a7-1d94-4754-953e-373f89d43089"
        src="https://consent.cookiebot.com/uc.js"
      ></Script>
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

      <script
        src="//code.tidio.co/b3qsg0t7uu4nseq9piuuayi3u5gx3bi6.js"
        async
      ></script>

      {/* <!-- TikTok Pixel Code Start --> */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
            ttq.setAndDefer = function(t, e) {
              t[e] = function() {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
              }
            };
            for (var i = 0; i < ttq.methods.length; i++) {
              ttq.setAndDefer(ttq, ttq.methods[i]);
            }
            ttq.instance = function(t) {
              var e = ttq._i[t] || [];
              for (var n = 0; n < ttq.methods.length; n++) {
                ttq.setAndDefer(e, ttq.methods[n]);
              }
              return e;
            };
            ttq.load = function(e, n) {
              var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
              var o = n && n.partner;
              ttq._i = ttq._i || {};
              ttq._i[e] = [];
              ttq._i[e]._u = r;
              ttq._t = ttq._t || {};
              ttq._t[e] = +new Date();
              ttq._o = ttq._o || {};
              ttq._o[e] = n || {};
              n = d.createElement("script");
              n.type = "text/javascript";
              n.async = !0;
              n.src = r + "?sdkid=" + e + "&lib=" + t;
              e = d.getElementsByTagName("script")[0];
              e.parentNode.insertBefore(n, e);
            };

            ttq.load('CV2PRLBC77UDUE7BPJ50');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>
      {/* <!-- TikTok Pixel Code End --> */}
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
      <ChakraProvider value={defaultSystem}>
        <SessionProvider session={pageProps.session}>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </SessionProvider>
      </ChakraProvider>
    </>
  )
}
