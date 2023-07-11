import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        backgroundColor: "#282c37",
        padding: "50px 30px",
      }}
    >
      <div style={{ width: "65%" }}>
        <h3>Мы в социальных сетях</h3>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li>
            <InstagramIcon fontSize="large" sx={{ color: "white" }} />
          </li>
          <li>
            <FacebookIcon fontSize="large" sx={{ color: "white" }} />
          </li>
          <li>
            <YouTubeIcon fontSize="large" sx={{ color: "white" }} />
          </li>
          <li>
            <TwitterIcon fontSize="large" sx={{ color: "white" }} />
          </li>
        </ul>
      </div>
      <div style={{ width: "35%" }}></div>
    </div>
  );
};

export default Footer;
