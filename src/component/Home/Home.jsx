import React from "react";
import HomeSlider from "./HomeComponents/HomeSlider";
import ProductSlider from "./HomeComponents/ProductSlider";

const Home = () => {
  return (
    <div className="home_main_div">
      <HomeSlider />
      <ProductSlider />
    </div>
  );
};

export default Home;
