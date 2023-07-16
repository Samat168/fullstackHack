import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useProduct } from "../../../context/ProductContextProvider";

export default function HomeSlider() {
  const { getPromo, promo } = useProduct();
  useEffect(() => {
    getPromo();
  }, []);
  console.log(promo);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {promo.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                margin: "auto",
                height: "300px",
                background: "#FF4800",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <h2 style={{ color: "#fff" }}>{item.text}</h2>
                <button style={{ width: "100%", height: "25px" }}>
                  Перейти
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div
            style={{
              width: "100%",
              margin: "auto",
              height: "300px",
              background: "#FF4800",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <div background>
              <h2>Здесь могла бы быть ваша реклама</h2>
              <button style={{ width: "100%", height: "25px" }}>
                Заказать рекламу
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
