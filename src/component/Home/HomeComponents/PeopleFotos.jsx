import React from "react";

const PeopleFotos = () => {
  return (
    <div style={{ width: "100%" }}>
      <h2>СМОТРИ БОЛЬШЕ С ЭТИМ ТОВАРОМ</h2>
      <h5>
        Делись своими образами в соцсетях, отмечай SellSwap – и твой образ
        появится на сайте
      </h5>
      <div className="photos">
        <div className="photos_left_div">
          <img
            className="left_photo"
            src="https://www.frisbuy.ru/sld01/post-media/3542/271075424.jpeg"
            alt=""
          />
        </div>
        <div className="photos_right_div">
          <ul className="photos_right_ul">
            <li className="photos_right_li">
              <img
                src="https://www.frisbuy.ru/sld01/post-media/2505/271120824.jpeg"
                alt=""
              />
            </li>
            <li className="photos_right_li">
              <img
                src="https://www.frisbuy.ru/sld01/post-media/5487/271120894.jpeg"
                alt=""
              />
            </li>
            <li className="photos_right_li">
              <img
                src="https://www.frisbuy.ru/sld01/post-media/967/270738056.jpeg"
                alt=""
              />
            </li>
            <li className="photos_right_li">
              <img
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