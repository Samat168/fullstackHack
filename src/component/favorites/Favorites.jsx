import React, { useEffect } from "react";

import ProductCard from "../product/ProductCard/ProductCard";
import { useAuth } from "../../context/AuthContextProvider";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import { useProduct } from "../../context/ProductContextProvider";

const Favorites = () => {
  const { favorites, userFavorites, userId, checkuserid, users } = useAuth();
  const { togglefav } = useProduct();
  const navigate = useNavigate();

  checkuserid();
  useEffect(() => {
    
  }, []);

  console.log(users);

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
      className=""
    >
      <Avatar src={users.avatar}/>
      {favorites.map((item) => (
        <div
          style={{ width: "20%", marginRight: "10%" }}
          className="product_card"
        >
          <img
            className="product_img"
            src={item.photo}
            alt=""
            onClick={() => navigate(`/details/${item.id}`)}
          />
          <div className="product_card_bottom">
            <IconButton
              onClick={() => togglefav(item.id)}
              sx={{ color: "grey" }}
            >
              <Favorite />
            </IconButton>
            <p style={{ color: "black" }}>{item.title}</p>

            {/* <span className="product_price">${item.price}</span> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
