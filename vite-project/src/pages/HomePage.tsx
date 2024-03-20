import ExclusiveOffer from "../components/ExclusiveOffer";
import Hero from "../components/Hero";
import NewCollection from "../components/NewCollection";
import PopularClothing from "../components/PopularClothing";
import Subscription from "../components/Subscription";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularClothing />
      <ExclusiveOffer />
      <NewCollection />
      <Subscription />
    </>
  );
};

export default HomePage;
