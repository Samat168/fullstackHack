import React, { useEffect } from "react";
import { useProduct } from "../../../context/ProductContextProvider";

const HomeCategory = () => {
  const { categories, getCategories } = useProduct();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <div style={{ width: "100%" }}></div>
      <div style={{ width: "100%" }}>
        <div className="home_category_left"></div>
      </div>
    </div>
  );
};

export default HomeCategory;
