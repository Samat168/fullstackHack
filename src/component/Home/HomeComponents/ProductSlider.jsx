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
import { useNavigate } from "react-router-dom";

export default function ProductSlider() {
  const navigate = useNavigate();
  const { products, getProducts, getCategories, categories } = useProduct();

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
          {products.map((item) => {
            if (item.parent === "odejda") {
              return (
                <SwiperSlide key={item.id} className="product_slider_item">
                  <Box
                    sx={{ width: "100%", height: "400px", overflow: "hidden" }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={item.preview}
                      alt=""
                    />
                  </Box>

                  <Box sx={{ height: "100px" }}>
                    <h4 style={{ textAlign: "start", margin: "5px " }}>
                      {item.title}
                    </h4>
                    <h5 style={{ textAlign: "start", margin: "5px" }}>
                      {item.price}
                    </h5>
                    <button
                      onClick={() => navigate(`/details/${item.id}`)}
                      className="buy_button"
                    >
                      Перейти к продукту
                    </button>
                  </Box>
                </SwiperSlide>
              );
            } else {
              return null;
            }
          })}
        </Box>
      </Swiper>
    </>
  );
}
