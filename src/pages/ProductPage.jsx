import React from "react";
import ProductList from "../component/product/ProductList/ProductList";
import { useAuth } from "../context/AuthContextProvider";
import { useEffect } from "react";

const ProductPage = () => {
  const { getUser } = useAuth();
  useEffect(() => {
  
    getUser();
  }, []);
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
