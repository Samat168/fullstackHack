import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function HomeSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            style={{
              width: "100%",
              margin: "auto",
              height: "130px",
              background: "#FF4800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <h2>Здесь могла бы быть ваша реклама</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              width: "100%",
              margin: "auto",
              height: "130px",
              background: "gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <h2>Здесь могла бы быть ваша реклама</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
