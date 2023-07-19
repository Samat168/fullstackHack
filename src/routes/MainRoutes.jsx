import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FormforPayPage from "../pages/FormforPayPage";
import PasswordResetPage from "../pages/PasswordResetPage";
import PassRessetConfirmPage from "../pages/PassRessetConfirmPage";
import RegisterSuccessPage from "../pages/RegisterSuccessPage";
import ProfilePage from "../pages/ProfilePage";

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
      link: "/login",
      element: <LoginPage />,
      id: 7,
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: 8,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 9,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 10,
    },

    {
      link: "/formforpay",
      element: <FormforPayPage />,
      id: 12,
    },
    {
      link: "/passresset",
      element: <PasswordResetPage />,
      id: 13,
    },
    {
      link: "api/v1/accounts/password_reset/:tokens",
      element: <PassRessetConfirmPage />,
      id: 14,
    },
    {
      link: "api/v1/accounts/activate/:uid",

      element: <RegisterSuccessPage />,
      id: 14,
    },
   
    {
      link: "/profile",

      element: <ProfilePage />,
      id: 16,
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
