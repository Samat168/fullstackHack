import { Switch } from "@mui/material";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/consts";
import { calcSubPrice, calcTotalPrice, getTokens } from "../helpers/functions";
import axios from "axios";
import { Api } from "@mui/icons-material";

export const cartContex = createContext();
export const useCart = () => useContext(cartContex);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const CartContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    let newProduct = {
      product: product,
      // quantity: 1,
      // subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.product.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const handleSubmit = async (order) => {
    // e.preventDefault();

    try {
      const response = await axios.post(`${API}/orders/`, order, getTokens());
      console.log("Заказ успешно отправлен!");
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
    }
  };

  const values = {
    handleSubmit,
    cart: state.cart,
    getCart,
    addProductToCart,

    checkProductInCart,
    changeProductCount,
    deleteCartProduct,
  };
  return <cartContex.Provider value={values}>{children}</cartContex.Provider>;
};

export default CartContexProvider;
