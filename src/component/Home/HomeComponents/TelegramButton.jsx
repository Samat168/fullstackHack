import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
const TelegramButton = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "50px",
        height: "50px",
        background: "green",
        bottom: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
      }}
    >
      <a href="https://t.me/sell_haka_bot" target="blank">
        <TelegramIcon style={{ color: "black" }} />
      </a>
    </div>
  );
};

export default TelegramButton;
