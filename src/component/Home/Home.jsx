import React from "react";
import HomeSlider from "./HomeComponents/HomeSlider";
import ProductSlider from "./HomeComponents/ProductSlider";
import PeopleFotos from "./HomeComponents/PeopleFotos";
import HomeUl from "./HomeComponents/HomeUl";
import { useProduct } from "../../context/ProductContextProvider";
import { useState } from "react";
import { useEffect } from "react";
import HomeCategory from "./HomeComponents/HomeCategory";

const Home = () => {
  const { categories } = useProduct();
  const [odejda, setOdejda] = useState("");
  const [obuv, setObuv] = useState("");
  const catForSlider = () => {
    categories.map((item) => {
      if (item.parent === null) {
        if (item.slug === "obuv") {
          setObuv(item);
        } else if (item.slug === "odejda") {
          setOdejda(item);
        }
      }
    });
  };
  useEffect(() => {
    catForSlider();
  }, []);
  console.log(odejda);
  return (
    <div className="home_main_div">
      <HomeSlider />
      <ProductSlider cat={odejda} />
      <HomeCategory />
      <ProductSlider cat={obuv} />
      <PeopleFotos />
      <HomeUl />
    </div>
  );
};

export default Home;
