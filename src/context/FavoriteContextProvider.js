import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";

export const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const INIT_STATE = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_FAVORITES:
      return { ...state, favorites: action.payload };

    case ACTIONS.ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };

    case ACTIONS.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  const getFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (!favorites) {
      localStorage.setItem("favorites", JSON.stringify([]));
      favorites = [];
    }

    dispatch({ type: ACTIONS.GET_FAVORITES, payload: favorites });
  };

  const addToFavorites = (product) => {
    dispatch({ type: ACTIONS.ADD_TO_FAVORITES, payload: product });
  };

  const removeFromFavorites = (productId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: productId });
  };

  const checkProductInFavorites = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites) {
      let foundProduct = favorites.find((product) => product.id === id);
      return foundProduct ? true : false;
    }
  };

  const values = {
    favorites: state.favorites,
    getFavorites,
    addToFavorites,
    removeFromFavorites,
    checkProductInFavorites,
  };

  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
