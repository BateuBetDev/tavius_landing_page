import Ebook from "./Ebook/Ebook";
import Hero from "./Hero/Hero";
import Main from "./Main/Temp";
import Recommended from "./Recommended/Recommended";
import RecommendItems from "./Recommended/RecommendedItems";
import Tavius from "./Tavius/Tavius";


export default function Home() {
  return (
    <>
    <head>

    </head>
    {/* <Header/> */}
    <Main/>
    <Hero/>
    <Ebook/>
    <Recommended items={RecommendItems}/>
    <Tavius/>
    </>
  );
}
