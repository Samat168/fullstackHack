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

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        backgroundColor: "#2a2a2a",
        padding: "50px 30px",
        display: "flex",
      }}
    >
      <div style={{ width: "60%" }}>
        <h3
          style={{
            color: "#9baec8",
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
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <li className="contacts_li">
            <InstagramIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
          <li className="contacts_li">
            <FacebookIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
          <li className="contacts_li">
            <YouTubeIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
          <li className="contacts_li">
            <TwitterIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
        </ul>
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
              <h4>Выгодные цены</h4>
              <p>Продаём более 100 миллионов товаров по самым вкусным ценам</p>
            </div>
          </li>
          <li className="svg_li">
            <LabelIcon sx={{ color: "white" }} />
            <div>
              <h4>Безопасные платежи</h4>
              <p>Принимаем оплату всеми популярными способами</p>
            </div>
          </li>
          <li className="svg_li">
            <LockIcon sx={{ color: "white" }} />
            <div>
              <h4>Безопасные платежи</h4>
              <p>Принимаем оплату всеми популярными способами</p>
            </div>
          </li>
          <li className="svg_li">
            <LocalPoliceIcon sx={{ color: "white" }} />
            <div>
              <h4>Уверенность в покупке</h4>
              <p>Защищаем интересы покупателя во время и после покупки</p>
            </div>
          </li>
          <li className="svg_li">
            <TextsmsIcon sx={{ color: "white" }} />
            <div>
              <h4>Служба поддержки</h4>
              <p>Отвечаем на любые вопросы в чате</p>
            </div>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="">
          <img style={{ width: "70%", marginLeft: "80px" }} src={Logo} alt="" />
          <h2 style={{ textAlign: "center" }}>Свяжитесь с нами </h2>
        </a>
      </div>
    </div>
  );
};

export default Footer;
