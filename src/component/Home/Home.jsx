import React from "react";
import HomeSlider from "./HomeComponents/HomeSlider";
import ProductSlider from "./HomeComponents/ProductSlider";
import PeopleFotos from "./HomeComponents/PeopleFotos";

const Home = () => {
  return (
    <div className="home_main_div">
      <HomeSlider />
      <ProductSlider />
      <PeopleFotos />
    </div>
  );
};

export default Home;
