import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useProduct } from "../../../context/ProductContextProvider";
import { Navigation } from "swiper/modules";
import { Box, Button } from "@mui/material";

export default function ProductSlider() {
  const { products, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <>
      <h2>{}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <Box sx={{ padding: "0 15px" }}>
          {products.map((item) => (
            <SwiperSlide key={item.id} className="product_slider_item">
              <Box sx={{ width: "100%", height: "300px" }}>
                <img style={{ maxWidth: "100%" }} src={item.preview} alt="" />
              </Box>

              <Box sx={{ padding: "5px", height: "80px" }}>
                <h4 style={{ textAlign: "start", margin: "5px 0" }}>
                  {item.title}
                </h4>
                <h5 style={{ textAlign: "start" }}>{item.price}</h5>
                <button className="buy_button">В корзину</button>
              </Box>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </>
  );
}
