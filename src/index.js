import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContexProvider from "./context/CartContextProvider";
import FavoritesContextProvider from "./context/FavoriteContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <FavoritesContextProvider>
        <ProductContextProvider>
          <CartContexProvider>
            <App />
          </CartContexProvider>
        </ProductContextProvider>
      </FavoritesContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
