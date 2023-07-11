import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../assets/SellSwap-removebg-preview.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        backgroundColor: "#282c37",
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
            borderBottom: "2px solid black",
            paddingBottom: "10px",
          }}
        >
          Мы в социальных сетях:
        </h3>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <li>
            <InstagramIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
          <li>
            <FacebookIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
          <li>
            <YouTubeIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
          <li>
            <TwitterIcon
              className="icons"
              fontSize="large"
              sx={{ color: "white" }}
            />
          </li>
        </ul>
      </div>
      <div style={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
