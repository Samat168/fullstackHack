import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, DbAPI } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const addProduct = async (newProduct) => {
    await axios.post(DbAPI, newProduct);
  };

  const getProducts = async () => {
    const { data } = await axios(`${DbAPI}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${DbAPI}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${DbAPI}/${id}`);
    dispatch({ type: ACTIONS.GET_PRODUCT_DETAILS, payload: data });
  };

  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${DbAPI}/${editedProduct.id}`, editedProduct);
    navigate(`/products`);
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    productDetails: state.productDetails,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
