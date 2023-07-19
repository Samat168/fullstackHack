import React from "react";
import ProductDetails from "../component/product/ProductDetails/ProductDetails";
import { useAuth } from "../context/AuthContextProvider";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  const { getUser } = useAuth();
  useEffect(() => {
  
    getUser();
  }, []);
  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
