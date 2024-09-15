import Script from "next/script";
import Ebook from "./Ebook/Ebook";
import Hero from "./Hero/Hero";
import HeroItems from "./Hero/HeroItems";
import Main from "./Main/Temp";
import Recommended from "./Recommended/Recommended";
import RecommendItems from "./Recommended/RecommendedItems";
import Tavius from "./Tavius/Tavius";


export default function Home() {
  return (
    <>
    <head>

    </head>
    <Script
        id="facebook-pixel"
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
            fbq('init', '1239918470245007');
            fbq('init', '1001101588649654');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1239918470245007&ev=PageView&noscript=1"
        />
      </noscript>
    {/* <Header/> */}
    <Main/>
    <Hero items={HeroItems}/>
    <Ebook/>
    <Recommended items={RecommendItems}/>
    <Tavius/>
    </>
  );
}
