import React from "react";
import HomeSlider from "./HomeComponents/HomeSlider";
import ProductSlider from "./HomeComponents/ProductSlider";
import HomeCategory from "./HomeComponents/HomeCategory";

const Home = () => {
  return (
    <div className="home_main_div">
      <HomeSlider />
      <ProductSlider />
      <HomeCategory />
    </div>
  );
};

export default Home;
