import Reac, { useState } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Collections from "../Components/Collections";
import Footer from "../Components/Footer";
import { Gents } from "../data";
import { Ladies } from "../data";
import WomenCollection from "../Components/WomenCollection";
const MainPage = () => {
  //this is the use state for the gents
  //pass it to the collections from the use state
  const [gentsFashion, SetgentsFashion] = useState(Gents);
  const [LadiesFashion, SetLadiesFashion] = useState(Ladies);

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <WomenCollection LadiesFashion={LadiesFashion} />
      <Footer />
    </div>
  );
};

export default MainPage;
