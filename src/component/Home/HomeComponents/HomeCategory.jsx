import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomeCategory = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div
        className="div_up"
        style={{
          display: "flex",
          flexDirection: windowWidth < 1000 ? "column" : "row",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url(https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week28/14_07/slot1-item1.webp)",
            backgroundSize: "cover",
            width: windowWidth < 1000 ? "100%" : "49%",
            maxWidth: "100%",
            height: "450px",

            padding: "50px",
          }}
        >
          <h3
            style={{
              color: "#fff",

              lineHeight: "28px",
              letterSpacing: "2px",
            }}
          >
            ФУТБОЛКИ
          </h3>
          <button className="home_category_button">Перейти</button>
        </div>

        <div
          style={{
            backgroundImage:
              "url(https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week28/14_07/slot1-item2.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: windowWidth < 1000 ? "100%" : "24%",
            marginTop: windowWidth < 1000 ? "10px" : "0",
            padding: "50px",
            height: "450px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              color: "#fff",
              lineHeight: "28px",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            КРОССОВКИ И КЕДЫ
          </h3>
          <button className="home_category_button">Перейти</button>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week28/14_07/slot1-item3.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: windowWidth < 1000 ? "100%" : "24%",
            marginTop: windowWidth < 1000 ? "10px" : "0",
            padding: "50px",
            height: "450px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              color: "#fff",
              lineHeight: "28px",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            ТОЛСТОВКИ И ХУДИ
          </h3>
          <button className="home_category_button">Перейти</button>
        </div>
      </div>

      <div
        className="div_down"
        style={{
          display: "flex",
          flexDirection: windowWidth < 1000 ? "column" : "row",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url(https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week28/14_07/slot1-item4.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: windowWidth < 1000 ? "100%" : "24%",
            marginTop: windowWidth < 1000 ? "10px" : "0",
            padding: "50px",
            height: "450px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              color: "#fff",
              lineHeight: "28px",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            АКСЕССУАРЫ
          </h3>
          <button className="home_category_button">Перейти</button>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week28/14_07/slot1-item5.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: windowWidth < 1000 ? "100%" : "24%",
            marginTop: windowWidth < 1000 ? "10px" : "0",
            padding: "50px",
            height: "450px",
            marginRight: "7px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              color: "#fff",
              lineHeight: "28px",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            ДРУГИЕ
          </h3>
          <button className="home_category_button">Перейти</button>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week28/14_07/slot1-item6.webp)",
            backgroundSize: "cover",
            width: windowWidth < 1000 ? "100%" : "49.5%",
            maxWidth: "100%",
            height: "450px",

            padding: "50px",
          }}
        >
          <h3
            style={{
              color: "#fff",

              lineHeight: "28px",
              letterSpacing: "2px",
            }}
          >
            ПЛАВКИ И КУПАЛЬНИКИ
          </h3>
          <button className="home_category_button">Перейти</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
