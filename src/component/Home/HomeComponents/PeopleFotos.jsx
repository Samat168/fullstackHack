import React from "react";
import { useState } from "react";

const PeopleFotos = () => {
  const [photoForMain, setFotoForMain] = useState(
    "https://www.frisbuy.ru/sld01/post-media/3542/271075424.jpeg"
  );
  const changePhoto = (img) => {
    setFotoForMain(img);
  };
  const returnPhoto = () => {
    setFotoForMain(
      "https://www.frisbuy.ru/sld01/post-media/3542/271075424.jpeg"
    );
  };
  return (
    <div style={{ width: "90%", margin: "auto" }} onMouseOut={returnPhoto}>
      <h2
        style={{
          marginBottom: "10px",
          fontSize: "30px",
          letterSpacing: "5px",
          fontWeight: "500",
        }}
      >
        СМОТРИ БОЛЬШЕ С ЭТИМ ТОВАРОМ
      </h2>
      <h5 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px" }}>
        Делись своими образами в соцсетях, отмечай SellSwap – и твой образ
        появится на сайте
      </h5>
      <div className="photos">
        <div className="photos_left_div">
          <img className="left_photo" src={photoForMain} alt="" />
        </div>
        <div className="photos_right_div">
          <ul className="photos_right_ul">
            <li className="photos_right_li">
              <img
                onMouseOver={(e) => changePhoto(e.target.src)}
                src="https://www.frisbuy.ru/sld01/post-media/2505/271120824.jpeg"
                alt=""
              />
            </li>
            <li className="photos_right_li">
              <img
                onMouseOver={(e) => changePhoto(e.target.src)}
                src="https://www.frisbuy.ru/sld01/post-media/5487/271120894.jpeg"
                alt=""
              />
            </li>
            <li className="photos_right_li">
              <img
                onMouseOver={(e) => changePhoto(e.target.src)}
                src="https://www.frisbuy.ru/sld01/post-media/967/270738056.jpeg"
                alt=""
              />
            </li>
            <li className="photos_right_li">
              <img
                onMouseOver={(e) => changePhoto(e.target.src)}
                src="https://www.frisbuy.ru/sld05/post-media/40224/272540393.jpeg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PeopleFotos;
