import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
import { getTokens } from "../helpers/functions";
import { async } from "q";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  oneProduct: null,
  favorites: [],
  review: [],
  promo: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 12),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };
    case "GET_PROMO":
      return { ...state, promo: action.payload };

    case "GET_REVIEW":
      return { ...state, review: action.payload };

    default:
      return state;
  }
}
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  async function getProducts() {
    try {
      const res = await axios(
        `${API}/products/${window.location.search}`,
        getTokens()
      );

      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(state);

  async function getCategories() {
    try {
      const res = await axios(`${API}/categories/`);
      dispatch({ type: "GET_CATEGORIES", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(INIT_STATE.categories);

  async function postCategories(category) {
    try {
      await axios.post(`${API}/categories/`, category, getTokens());
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(newProduct) {
    try {
      await axios.post(`${API}/products/`, newProduct, getTokens());
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/products/${id}/`, getTokens());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      const res = await axios(`${API}/products/${id}/`, getTokens());
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(id, editedProduct) {
    try {
      await axios.patch(`${API}/products/${id}/`, editedProduct, getTokens());
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleLikes(id) {
    try {
      await axios(`${API}/products/${id}/toggle_like`, getTokens());
      getOneProduct(id);
    } catch (error) {
      console.log(error);
    }
  }
  async function getPromo() {
    try {
      const res = await axios(`${API}/promo/`, getTokens());
      dispatch({ type: "GET_PROMO", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }
  async function postPromo(obj) {
    try {
      await axios.post(`${API}/promo/`, obj, getTokens());
    } catch (error) {
      console.log(error);
    }
  }
  async function deletePromo(id) {
    try {
      await axios.delete(`${API}/promo/${id}/`, getTokens());
      getPromo();
    } catch (error) {
      console.log(error);
    }
  }

  async function addReview(review) {
    try {
      await axios.post(`${API}/ratings/`, review, getTokens());
    } catch (error) {
      console.log(error);
    }
  }

  async function GetReview(id) {
    try {
      let res = await axios(`${API}/products/${id}/reviews/`, getTokens());
      dispatch({ type: "GET_REVIEW", payload: res.data });
      getOneProduct(id);
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    getProducts,
    products: state.products,
    pages: state.pages,
    categories: state.categories,
    getCategories,
    createProduct,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    updateProduct,
    toggleLikes,
    postCategories,
    addReview,
    GetReview,
    review: state.review,
    postPromo,
    promo: state.promo,
    getPromo,
    deletePromo,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
