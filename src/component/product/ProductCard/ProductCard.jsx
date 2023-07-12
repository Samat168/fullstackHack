import React from "react";
import { useProducts } from "../../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import "./ProductCard.css";
import { useCart } from "../../../context/CartContextProvider";
const ProductCard = ({ item }) => {

  const { addProductToCart, checkProductInCart } = useCart();
  const { deleteProduct , getProductDetails, productDetails } = useProducts();
  const navigate = useNavigate();
  return (
    <div>
      <div className="product_card">
        <img
          className="product_img"
          src={item.pic1}
          alt=""
          onClick={() => navigate(`/details/${item.id}`)}
        />
        <div className="product_card_bottom">
          <IconButton sx={{ color: "grey" }}>
            <Favorite />
          </IconButton>

          <Button
            sx={{ marginBottom: "8px" }}
            size="small"
            onClick={() => addProductToCart(productDetails)}
          >
            add to cart
          </Button>
          <Button
            sx={{ marginBottom: "8px" }}
            size="small"
            onClick={() => deleteProduct(item.id)}
          >
            Delete
          </Button>
          <Button
            sx={{ marginBottom: "8px" }}
            size="small"
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            Edit
          </Button>

          <span className="product_price">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
