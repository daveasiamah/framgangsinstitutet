"use client"
import "@/styles/globals.scss";
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// // import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// // import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// // import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// // import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

// library.add(fas)
import {useSession,SessionProvider} from 'next-auth/react'

import type { AppProps } from "next/app";
import Script from "next/script";


export default function App({ Component,  pageProps: { session, ...pageProps } }: AppProps) {
  return(
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
      <script src="//code.tidio.co/b3qsg0t7uu4nseq9piuuayi3u5gx3bi6.js" async></script>
      <meta name="facebook-domain-verification" content="t53l0hv3hj3lqy0wlcz3y3mt0aywav" />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BC5XVQ" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
      <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
    </SessionProvider>
    
    </>
    );
}
