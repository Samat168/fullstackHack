import React, { useEffect } from "react";
import Home from "../component/Home/Home";
import { useProduct } from "../context/ProductContextProvider";

const HomePage = () => {
  const { getPromo, getCategories, getProducts } = useProduct();
  useEffect(() => {
    getCategories();
    getPromo();
    getProducts();
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
