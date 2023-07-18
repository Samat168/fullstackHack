import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomeUl = () => {
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
    <div className="home_ul_main">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",

          marginTop: "100px",
          flexWrap: "wrap",
        }}
      >
        <li className="home_ul_li">
          <img
            src="https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week13/27_03/benefit-delivery.svg"
            alt=""
          />
          <div className="home_li_div">
            <h4 style={{ fontWeight: "500" }}>Доставка и оплата</h4>
            <p>
              Оплата наличными курьеру или
              <br />
              банковской картой без комиссии
            </p>
          </div>
        </li>
        <li className="home_ul_li">
          <img
            src="https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week13/27_03/benefit-return.svg"
            alt=""
          />
          <div className="home_li_div">
            <h4 style={{ fontWeight: "500" }}>Условия возврата</h4>
            <p>
              Быстрый возврат, если товар
              <br />
              не соответсвует качеству{" "}
            </p>
          </div>
        </li>
        <li className="home_ul_li">
          <img
            src="https://cdn.sportmaster.ru/upload/content/cmsgate/ru_sm/smprod/dip_content/2023/sm30/week13/27_03/benefit-warranty.svg"
            alt=""
          />
          <div className="home_li_div">
            <h4 style={{ fontWeight: "500" }}>Гарантийное обслуживание</h4>
            <p>
              Оплата наличными курьеру или
              <br />
              банковской картой
            </p>
          </div>
        </li>
      </ul>
      <div style={{ marginTop: "50px", fontSize: "12px", color: "gray" }}>
        SellSwap — международная сеть магазинов качественного спортивного
        инвентаря для фитнеса, летних и зимних видов спорта, а также товаров для
        активного отдыха. В сети магазинов и на нашем сайте Вы найдете
        тренажеры, спортивную одежду и обувь на любой сезон. Отдельное внимание
        наша сеть уделяет товарам для детей — мы предлагаем форму, обувь и
        снаряды для уроков физкультуры, а также самостоятельных занятий спортом.
        Широкий выбор спорттоваров в сети Спортмастер делает спорт доступным для
        всех!
      </div>
    </div>
  );
};

export default HomeUl;
