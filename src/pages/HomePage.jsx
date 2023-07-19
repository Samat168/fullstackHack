import React, { useEffect } from "react";
import Home from "../component/Home/Home";
import { useProduct } from "../context/ProductContextProvider";
import { useAuth } from "../context/AuthContextProvider";

const HomePage = () => {
  const { getPromo, getCategories, getProducts } = useProduct();
  const { getUser} = useAuth();

  useEffect(() => {
    getCategories();
    getPromo();
    getProducts();
    getUser()
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
