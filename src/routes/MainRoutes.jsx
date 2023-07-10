import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import FavoritePage from "../pages/FavoritePage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductPage />,
      id: 4,
    },
    {
      link: "/details/:id",
      element: <ProductDetailsPage />,
      id: 6,
    },
    {
      link: "auth",
      element: <ProductDetailsPage />,
      id: 7,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 8,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 9,
    },
    {
      link: "/favorite",
      element: <FavoritePage />,
      id: 9,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
