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
import { Box } from "@mui/material";

export default function ProductSlider() {
  const { products, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2>{}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <Box sx={{ margin: "0 20px" }}>
          {products.map((item) => (
            <SwiperSlide key={item.id} className="product_slider_item">
              <Box sx={{ width: "100%", height: "200px" }}>
                <img
                  style={{ maxWidth: "100%", borderRadius: "20px" }}
                  src={item.preview}
                  alt=""
                />
              </Box>

              <Box>
                <h4>{item.title}</h4>
                <h5>{item.price}</h5>
              </Box>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </>
  );
}
