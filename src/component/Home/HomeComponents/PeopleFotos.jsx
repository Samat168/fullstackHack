import React from "react";
import { useState } from "react";

const PeopleFotos = () => {
  const [photoForMain, setFotoForMain] = useState(
    "https://diesel.elcat.kg/uploads/monthly_11_2021/post-69829-0-81010900-1637051632.jpg"
  );
  const changePhoto = (img) => {
    setFotoForMain(img);
  };
  const returnPhoto = () => {
    setFotoForMain(
      "https://diesel.elcat.kg/uploads/monthly_11_2021/post-69829-0-81010900-1637051632.jpg"
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
        Присоединяйся к спорту
      </h2>
      <h5 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px" }}>
        Делись своими образами в соцсетях, отмечай спортзал Felix – и твой образ
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
                src="https://with-sport.com/images/articles/190/first-time-gym.jpg"
                alt=""
              />
            </li>
            <li className="photos_right_li">
              <img
                onMouseOver={(e) => changePhoto(e.target.src)}
                src="https://prestij.kg/gym2/images/gallery/2.jpg"
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
