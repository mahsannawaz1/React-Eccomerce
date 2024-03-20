import ExclusiveOffer from "./ExclusiveOffer";
import Footer from "./Footer";
import Hero from "./Hero";
import NewCollection from "./NewCollection";
import PopularClothing from "./PopularClothing";
import Subscription from "./Subscription";

const Main = () => {
  return (
    <>
      <Hero />
      <PopularClothing />
      <ExclusiveOffer />
      <NewCollection />
      <Subscription />
      <Footer />
    </>
  );
};

export default Main;
