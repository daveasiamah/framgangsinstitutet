import en from "@/locales/en";
import Accordion from "./Accordion"
import sv from "@/locales/sv";
import { useRouter } from "next/router";
import Layout from "@/components/Layout"

const Annonser = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  const faqData = [
    {
      id: 1,
      question: "Hur skapas filmerna?",
      answer: "Våra videoredigerare använder klipp från YouTube och premium stock video. Vi skapar alltid en helt ny video för varje kund och gör dem alltid mycket engagerande med fantastiska bilder och taktfull försäljningstext."
    },
    {
      id: 2,
      question: "Hur lång tid kommer det att ta innan jag får min video?",
      answer: "Vi vet hur viktigt det är för dig att få dina videor gjorda så snabbt som möjligt. Med det sagt är våra videor vanligtvis färdiga inom 1-3 arbetsdagar!"
    },
    {
      id: 3,
      question: "Äger jag filmerna?",
      answer: "Det kan du mycket väl göra. Även om detta fortfarande är bättre än att rakt upp kopiera någon annans video, finns det fortfarande en risk att videoklippets ursprungliga skapare når ut och gör upphovsrättsanspråk eller ber dig att ta ner videon. Det är DITT ansvar att se till att klippen i dina videor är säkra att använda. Vi redigerar helt enkelt videor åt dig. Det är ditt beslut om du tycker att de är livskraftiga för dina marknadsföringsplattformar."
    },
    {
      id: 4,
      question: "Skriver ni manusen?",
      answer: "Ja, det gör vi! Vi gör allt åt dig, från idé, manus, produktion och redigering. Vi har extremt begåvade manusförfattare som kan generera fantastiska idéer för dina produkter."
    }
  ]

  return (
    <Layout headTitle={t.pricingData.metaData.title} isFullWidth>
      <div className="container-full-width_ann body_ann">
        <div className="banner_ann container_ann">
          <div>
            <p className="ad-container_ann">
              <span>
                <img src="/img/ad.svg" className="ad-svg_ann" alt="adsvg" />
              </span>
              Shopify <span className="andsign_ann">&</span> Meta officiell partners
            </p>
            <h1>Låt din butik växa med</h1>
            <h1>
              {" "}
              <span className="highlight">högkvalitativa annonser</span>
            </h1>
            <p className="ad-details_ann">
              <img src="/img/shopify1.png" alt="Shopify" className="shopify_ann" />
              <span>159+ Sålda Annonser</span>
            </p>
            <div className="video-wrapper_ann">
              <img src="/img/ss.svg" alt="Video Placeholder" />
              <iframe
                src="https://www.youtube.com/embed/-61N0rafuPk"
                title="Högkonverterande Annonser"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://buy.stripe.com/8wM15i52CfwJ492148"
              className="cta-button_ann"
              target="_blank"
            >
              <div className="main-banner-button_ann">
                <span className="main-banner-button-content_ann">
                  <img src="/img/arrow-icon-28.png" alt="Lock" />
                  <p className="main-banner-button-text_ann">
                    Lås upp din tillväxt{" "}
                  </p>
                </span>
                <p className="sec-banner-button-text_ann">
                  {" "}
                  100% tillfredsställelsegaranti
                </p>
              </div>
            </a>
            <div className="icons-container_ann">
              <div className="icon-section_ann">
                <span>
                  <img src="/img/calender.svg" alt="svg" />
                  Beprövade annonser
                </span>
                <span>
                  <img src="/img/hand.svg" alt="svg" />
                  Snabb leverans
                </span>
                <span>
                  <img src="/img/check.svg" alt="svg" />
                  Verifierade partners
                </span>
              </div>
            </div>
            <div className="divider_ann">
              <hr />
              <span>Annonsmaterial för varje plattform</span>
              <hr />
            </div>
            <div className="partners-logo_ann">
              <div className="logos_ann">
                <span>
                  <img src="/img/meta.svg" alt="meta" />
                </span>
                <span>
                  <img src="/img/pintrest.svg" alt="meta" />
                </span>
                <span>
                  <img src="/img/tiktok.svg" alt="meta" />
                </span>
                <span>
                  <img src="/img/snapchat.svg" alt="meta" />
                </span>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="how-we-help_ann container_ann section_ann">
          <img src="/img/star.png" alt="Star" className="star_ann" />
          <h2>Hur Vi Kan Hjälpa Till</h2>
          <div className="help-items_ann">
            <div className="help-item_ann">
              <h3>Annonser med Hög Konverteringsgrad</h3>
              <p className="mobile-hide_ann">
                Våra annonser ger konsekvent exceptionella resultat och
                förvandlar tillfälliga skrollare till lojala kunder. Se hur dina
                intäkter ökar avsevärt.
              </p>
              <p className="mobile-show_ann">
                Våra annonser ger bra resultat och förvandlar tillfälliga
                skrollare till lojala kunder.
              </p>
            </div>
            <div className="help-item_ann">
              <h3>Snabb Butikstillväxt</h3>
              <p>
                Öka tillväxten i din butik med våra beprövade tillväxtstrategier
                som driver trafik och ökar dina intäkter.
              </p>
            </div>
            <div className="help-item_ann">
              <h3>Expert på Annonsstrategier</h3>
              <p>
                Använd expertstrategier för annonser som är skräddarsydda för
                dropshippers. Optimera dina kampanjer för bättre räckvidd och
                högre konvertering.
              </p>
            </div>
            <div className="help-item_ann">
              <h3>Snabb Omställning</h3>
              <p>
                Vi förstår hur viktigt det är med snabbhet. Vi levererar
                högkvalitativa annonser inom 1-3 dagar så att du kan ligga
                steget före.
              </p>
            </div>
            <div className="help-item_ann">
              <h3>Personlig Service</h3>
              <p>
                Vi anpassar varje annons till dina specifika behov och mål. Med
                revideringar och ett djupgående frågeformulär ser vi till att vi
                ger dig exakt vad du behöver!
              </p>
            </div>
          </div>
          <a
            href="https://buy.stripe.com/8wM15i52CfwJ492148"
            className="help-cta-button_ann"
            target="_blank"
          >
            <img src="/img/arrow-icon-28.png" alt="Lock" />
            Lås upp din tillväxt
          </a>
        </div>

        <div className="how-it-works_ann steps-container_ann section_ann">
          <img src="/img/setting.png" alt="Setting" className="star_ann" />
          <h2>Hur Det Fungerar</h2>
          <p>
            Vår enkla 3-stegsprocess för att leverera högkonverterade annonser
            som driver försäljning inom 24-48 timmar.
          </p>
          <div className="steps_ann">
            <div className="step_ann">
              <div className="step-content_ann">
                <span>1</span>
                <img src="/img/di.svg" alt="Step 1" />
              </div>
              <h3>Välj Din Bild/Videoannons</h3>
              <p>
                Våra annonser ger konsekvent exceptionella <br /> resultat och
                förvandlar tillfälliga skrollare till
                <br /> lojala kunder. Se hur dina intäkter ökar avsevärt.
              </p>
            </div>
            <div className="step_ann">
              <div className="step-content_ann">
                <span>2</span>
                <img src="/img/m2.svg" alt="Step 1" />
              </div>
              <h3>Skriv Om Din Verksamhet</h3>
              <p>
                Öka tillväxten i din butik med våra beprövade <br />{" "}
                tillväxtstrategier som driver trafik och ökar <br />
                dina intäkter.
              </p>
            </div>
            <div className="step_ann">
              <div className="step-content_ann">
                <span>3</span>
                <img src="/img/m3.svg" alt="Step 1" />
              </div>
              <h3>Få Din Annons Inom 1-3 Dagar</h3>
              <p>
                Använd expertstrategier för annonser som är <br /> skräddarsydda
                för dropshippers. Optimera <br /> dina kampanjer för bättre
                räckvidd och högre konvertering.
              </p>
            </div>
          </div>
        </div>

        <div className="pricing_ann container_ann section_ann">
          <img src="/img/store.png" alt="Setting" className="star_ann" />
          <h2>Högkonverterande Annonser</h2>
          <div className="pricing-options_ann">
            <div className="pricing-item_ann">
              <span>
                <img src="/img/ll.svg" alt="Video Ads" />
                <div className="white-background-text_ann desktop-show_ann">
                  <p>3 VIDEOANNONSER FÖR TIKTOK & FB/IG</p>
                </div>
              </span>
              <p className="price_ann">699KR</p>
              <button
                onClick={() =>
                  window.open(
                    "https://buy.stripe.com/8wM15i52CfwJ492148",
                    "_blank"
                  )
                }
                className="price-btn_ann"
              >
                LÄGG TILL I KUNDVAGN
              </button>
            </div>
          </div>
        </div>

        <div className="testimonials_ann section_ann">
          <img src="/img/star2.png" alt="Setting" className="star_ann" />
          <h2>ÖKA DINA INTÄKTER</h2>
          <div className="testimonial-cards_ann container_ann">
            <div className="testimonial_ann">
              <img src="/img/review.svg" alt="Testimonial" />
              <h3>Josefin M.</h3>
              <p>
                "Jag var skeptisk först eftersom jag aldrig har fått någon annan
                att bygga mina annonser förut ... Vi har fått positiva resultat
                och något som lönar sig. "
              </p>
            </div>
            <div className="testimonial_ann">
              <img src="/img/review2.svg" alt="Testimonial" />
              <h3>Joel G.</h3>
              <p>
                "Att använda Checkified Ads är en game changer för min ehandel.
                Jag märkte direkt förbättring i engagemang och <br />{" "}
                konverteringar. “
              </p>
            </div>
            <div className="testimonial_ann">
              <img src="/img/review3.svg" alt="Testimonial" />
              <h3>Mikael W.</h3>
              <p>
                "Jag har provat själv med annonsering och content, med mindre
                lycka. Efter <br /> Checkified så har försäljningssifrorna{" "}
                <br /> stigit stadigt."
              </p>
            </div>
            <div className="testimonial_ann">
              <img src="/img/review4.svg" alt="Testimonial" />
              <h3>Nicklas R.</h3>
              <p>
                "Mitt varumärke känns mer äkta och tilltalande för mina kunder.
                Omsättningen har ökat med 25% och jag är mycket nöjd med
                resultatet."
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              window.open("https://buy.stripe.com/8wM15i52CfwJ492148", "_blank")
            }
            className="cta-button-info_ann"
          >
            <img src="/img/arrow2.png" alt="Lock" />
            <div className="mobile-show_ann">Lås upp din tillväxt</div>
            <p className="desktop-show_ann">Bara 699kr? Ja Tack!</p>
          </button>
        </div>

        <div className="faq_ann how-we-help_ann section_ann">
          <img src="/img/dropship-faq%206.png" alt="Setting" className="star_ann" />
          <h2>Vanliga Frågor</h2>
          <div className="faq-items_ann container_ann  mobile-show_ann">
            <Accordion data={faqData} />
          </div>
          <div className="faq-items_ann container_ann desktop-show_ann">
            <div className="faq-item_ann">
              <h3>Hur skapas filmerna?</h3>
              <p>
                Våra videoredigerare använder klipp från YouTube och premium
                stock video. Vi skapar alltid en helt ny video för varje kund
                och gör dem alltid mycket engagerande med fantastiska bilder och
                taktfull försäljningstext.
              </p>
            </div>
            <div className="faq-item_ann">
              <h3>Hur lång tid kommer det att ta innan jag får min video?</h3>
              <p>
                Vi vet hur viktigt det är för dig att få dina videor gjorda så
                snabbt som möjligt. Med det sagt är våra videor vanligtvis
                färdiga inom 1-3 arbetsdagar!
              </p>
            </div>
            <div className="faq-item_ann">
              <h3>Äger jag filmerna?</h3>
              <p>
                Det kan du mycket väl göra. Även om detta fortfarande är bättre
                än att rakt upp kopiera någon annans video, finns det
                fortfarande en risk att videoklippets ursprungliga skapare når
                ut och gör upphovsrättsanspråk eller ber dig att ta ner videon.
                Det är DITT ansvar att se till att klippen i dina videor är
                säkra att använda. Vi redigerar helt enkelt videor åt dig. Det
                är ditt beslut om du tycker att de är livskraftiga för dina
                marknadsföringsplattformar.
              </p>
            </div>
            <div className="faq-item_ann">
              <h3>Skriver ni manusen?</h3>
              <p>
                Ja, det gör vi! Vi gör allt åt dig, från idé, manus, produktion
                och redigering. Vi har extremt begåvade manusförfattare som kan
                generera fantastiska idéer för dina produkter.
              </p>
            </div>
          </div>
        </div>

        <div className="footer_ann">
          <h2>
            BÖRJA SKALA DIN DROPSHIPPING <br /> BUTIK MED EXPERTANNONSER
          </h2>
          <a
            href="https://buy.stripe.com/8wM15i52CfwJ492148"
            target="_blank"
            className="cta-button-footer_ann"
          >
            Börja Skala Din Butik
          </a>
        </div>
        <div className="footer-logo_ann container_ann">
          <div className="footer-logo-content_ann">
            <img src="/img/logo.png" alt="Logo" />
            <span>Checkified</span>
          </div>
          <p>
            *Du samtycker till att vi "Checkified" inte har gjort några
            implikationer, garantier, löften, förslag, prognoser,
            representationer eller garantier överhuvudtaget till dig om framtida
            försäljning eller resultat, eller att du kommer att tjäna några
            pengar och att vi inte har godkänt någon sådan projektion, löfte
            eller representation av andra. Du måste få råd om skatter (skatter
            för affiliatemarknadsföring, försäljningsskatt, inkomstskatt,
            företagsskatter etc.) från en skatteexpert. Du måste få råd om
            företagsbildning, juridisk rådgivning och patent från en advokat. Vi
            tar inget ansvar för all information som ges som faller under dessa
            kategorier. Du accepterar att vi inte är skatte- eller jurister. Du
            måste rådfråga en jurist för råd om dessa ämnen. vi ger absolut
            INGEN garanti för framgång, vare sig monetär eller på annat sätt,
            och vi tar inget ansvar för någon tid eller pengar som spenderas i
            samband med denna tjänst, kurs, produkter, reklam, vår assistans
            eller annat. Endast en person kan komma åt våra produkter per köp.
            Om en användare ser att tillåta andra att använda hans konto för att
            komma åt kursen, kommer den personen att tas bort från kursen utan
            återbetalning. Du får inte dela denna information med andra som inte
            är anmälda till kursen. Om du upptäcker att du laddar upp dessa
            videor eller delar information någon annanstans kommer du att tas
            bort utan återbetalning. Resultaten kan variera. Du accepterar att
            även om du använder våra tjänster och produkter, kanske du inte får
            den försäljning eller inkomst som önskas. vi ansvarar inte för ditt
            välbefinnande eller din inkomst. Var medveten om detta.
            <br /> <br />
            VI PÅSTÅR INTE ATT DU KOMMER ATT GÄRNA INKOMSTER PÅ DIN WEBBPLATS.
            VI ÄR INTE EN AFFÄRSMÖJLIGHET, VI ÄR EN WEBBPLATSENS DESIGNBYRÅ.
            <br /> <br />
            Checkified är en deltagare i Shopify Affiliate Program, ett
            affiliate-annonseringsprogram som är utformat för att tillhandahålla
            ett sätt för webbplatser att tjäna reklamavgifter genom att
            annonsera och länka till Shopify.com. Som affiliate tjänar
            Checkified provision på kvalificerade köp som görs via länkar på
            denna webbplats och tjänster som levereras till våra kunder. De
            intjänade provisionerna hjälper till att stödja driften av denna
            webbplats och tillhandahålla värdefullt innehåll till våra läsare.
            Checkified rekommenderar endast produkter och tjänster som vi
            personligen har använt och tror på kvaliteten på. 
            <br /> <br />
            Den här webbplatsen är inte en del av Facebooks webbplats eller
            Facebook Inc. Dessutom är denna webbplats INTE godkänd av Facebook
            på något sätt. Facebook är ett varumärke som tillhör FACEBOOK, Inc.
            <br /> <br />
            Checkified
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Annonser;
