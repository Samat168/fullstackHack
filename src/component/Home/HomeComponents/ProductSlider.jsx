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

export default function ProductSlider({ cat, slidesPerView }) {
  const navigate = useNavigate();
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);
  console.log(cat);

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2
        style={{
          marginTop: "100px",
          fontWeight: "500",
          letterSpacing: "5px",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        {cat.name}
      </h2>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <Box sx={{}}>
          {products.map((item) => {
            if (item.parent === cat.slug) {
              return (
                <SwiperSlide key={item.id} className="product_slider_item">
                  <Box
                    sx={{
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
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
                      {item.price}$
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
    </div>
  );
}
