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
  const [slidesPerView, setSlidesPerView] = useState(4);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else if (window.innerWidth > 900) {
        setSlidesPerView(4);
      } else if (window.innerWidth < 900) {
        setSlidesPerView(3);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home_main_div">
      <HomeSlider />
      <ProductSlider cat={odejda} slidesPerView={slidesPerView} />
      <HomeCategory />
      <ProductSlider cat={obuv} slidesPerView={slidesPerView} />
      <PeopleFotos />
      <HomeUl />
    </div>
  );
};

export default Home;
