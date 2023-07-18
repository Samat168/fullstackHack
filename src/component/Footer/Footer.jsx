import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../assets/SellSwap-removebg-preview.png";
import LabelIcon from "@mui/icons-material/Label";
import LockIcon from "@mui/icons-material/Lock";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Visa from "../../assets/1.png";
import Master from "../../assets/2.png";
import Paypall from "../../assets/3.png";
import { useState } from "react";
import { useEffect } from "react";
const Footer = () => {
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
    <div className="footer">
      <div
        style={{
          width: "100%",
          padding: "50px 30px",
          display: "flex",
        }}
      >
        <div style={{ width: "60%" }}>
          <h3
            style={{
              color: "#fff",
              marginBottom: "40px",
              textAlign: "start",
              borderBottom: "2px solid gray ",
              paddingBottom: "10px",
            }}
          >
            О нас
          </h3>

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <li className="svg_li">
              <LabelIcon sx={{ color: "white" }} />
              <div>
                <h4
                  style={{
                    color: "#fff",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  Выгодные цены
                </h4>
                <p>
                  Продаём более 100 миллионов товаров по самым вкусным ценам
                </p>
              </div>
            </li>
            <li className="svg_li">
              <LabelIcon sx={{ color: "white" }} />
              <div>
                <h4
                  style={{
                    color: "#fff",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  Безопасные платежи
                </h4>
                <p>Принимаем оплату всеми популярными способами</p>
              </div>
            </li>
            <li className="svg_li">
              <LockIcon sx={{ color: "white" }} />
              <div>
                <h4
                  style={{
                    color: "#fff",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  Безопасные платежи
                </h4>
                <p>Принимаем оплату всеми популярными способами</p>
              </div>
            </li>
            <li className="svg_li">
              <LocalPoliceIcon sx={{ color: "white" }} />
              <div>
                <h4
                  style={{
                    color: "#fff",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  Уверенность в покупке
                </h4>
                <p>Защищаем интересы покупателя во время и после покупки</p>
              </div>
            </li>
            <li className="svg_li">
              <TextsmsIcon sx={{ color: "white" }} />
              <div>
                <h4
                  style={{
                    color: "#fff",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  Служба поддержки
                </h4>
                <p>Отвечаем на любые вопросы в чате</p>
              </div>
            </li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            width: "40%",
            flexDirection: "column",
            justifyContent: "flex-start",

            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: "center", color: "#fff" }}>Контакты</h3>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: "35px 0",
              }}
            >
              <li className="contacts_li">
                <InstagramIcon
                  className="icons"
                  fontSize="large"
                  sx={{ color: "#b5caff" }}
                />
              </li>
              <li className="contacts_li">
                <FacebookIcon
                  className="icons"
                  fontSize="large"
                  sx={{ color: "#b5caff" }}
                />
              </li>
              <li className="contacts_li">
                <YouTubeIcon
                  className="icons"
                  fontSize="large"
                  sx={{ color: "#b5caff" }}
                />
              </li>
              <li className="contacts_li">
                <TwitterIcon
                  className="icons"
                  fontSize="large"
                  sx={{ color: "#b5caff" }}
                />
              </li>
            </ul>
            <div style={{ color: "#b5caff" }}>+996 700 00 00 00</div>
          </div>
          <div
            style={{ margin: "20px 0", color: "#b5caff", textAlign: "center" }}
          >
            Оставить отзыв на
            <br />
            <h3
              style={{
                marginTop: "10px",
                fontWeight: "300",
                color: "#fff",
                cursor: "pointer",
                letterSpacing: "0.5px",
                fontSize: "25px",
              }}
            >
              <b>Яндекс</b> Маркет
            </h3>
          </div>
          <div
            style={{
              width: "70%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#b5caff" }}>Скачивайте наше приложение</p>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li style={{ width: "100px" }}>
                <img
                  src="https://cdn.sportmaster.ru/upload/content/application/ru_sm3/prod/front/js/../public/images/app-store.034efb73.svg"
                  alt=""
                />
              </li>
              <li style={{ width: "100px" }}>
                <img
                  src="https://cdn.sportmaster.ru/upload/content/application/ru_sm3/prod/front/js/../public/images/google-play.22a0da45.svg"
                  alt=""
                />
              </li>
              <li style={{ width: "100px" }}>
                <img
                  src="https://cdn.sportmaster.ru/upload/content/application/ru_sm3/prod/front/js/../public/images/app-gallery.1afd7b31.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "95%",
          margin: "auto",
          borderTop: "2px solid gray",
          display: "flex",
        }}
      >
        <div style={{ width: "70%" }}>
          <ul style={{ display: "flex" }}>
            <li
              style={{
                margin: "0 25px 0 0",
                fontSize: "12px",
                color: "#b5caff",
              }}
            >
              Пользовательское соглашение
            </li>
            <li
              style={{ margin: "0 25px", fontSize: "12px", color: "#b5caff" }}
            >
              Оферта
            </li>
            <li
              style={{ margin: "0 25px", fontSize: "12px", color: "#b5caff" }}
            >
              Политика конфиденциальности
            </li>
          </ul>
          <div style={{ fontSize: "12px", color: "#b5caff" }}>
            © 1997-2023 ООО «Спортмастер». Все права защищены. «Спортмастер»
            является зарегистрированным товарным знаком Sport & Fashion
            Management Pte ltd
          </div>
        </div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <li>
            <img
              style={{ width: "50px", margin: "0 30px " }}
              src={Visa}
              alt=""
            />
          </li>
          <li>
            <img
              style={{ width: "50px", margin: "0 30px" }}
              src={Master}
              alt=""
            />
          </li>
          <li>
            <img
              style={{ width: "60px", margin: "0 30px" }}
              src={Paypall}
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
