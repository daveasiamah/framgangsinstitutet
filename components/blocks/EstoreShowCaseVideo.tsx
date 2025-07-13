import { useEffect, useRef } from "react"
import Image from "next/image"

export function EstoreShowCaseVideo() {
  const vidalyticsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use a unique script ID for this video
    const scriptId = "vidalytics-embed-script-estore"
    const existing = document.getElementById(scriptId)
    if (existing) existing.remove()
    const script = document.createElement("script")
    script.id = scriptId
    script.type = "text/javascript"
    script.innerHTML = `
      (function (v, i, d, a, l, y, t, c, s) {
        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
        if (!vsl){vsl=function(u,cb){
          if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
          if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
          i.getElementsByTagName("head")[0].appendChild(s);
        };}
        vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_Pt_Ws3ofhxnllDRK', 'https://fast.vidalytics.com/embeds/P54EXqAT/Pt_Ws3ofhxnllDRK/');
    `
    if (vidalyticsRef.current) {
      vidalyticsRef.current.appendChild(script)
    }
  }, [])

  return (
    <div className="relative w-[302px] md:w-[80%] max-w-4xl mt-4 mb-5 md:mt-8">
      <div ref={vidalyticsRef} style={{ borderRadius: 16, overflow: "hidden" }}>
        <div
          id="vidalytics_embed_Pt_Ws3ofhxnllDRK"
          style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
        ></div>
      </div>
    </div>
  )
}
