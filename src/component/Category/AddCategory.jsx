import React, { useEffect } from "react";
import { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Button } from "@mui/material";

const AddCategory = ({ animat }) => {
  const [subCategory, setSubCategory] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [slugCategory, setSlugCategory] = useState("");
  const { categories, getCategories, postCategories } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategory = () => {
    if (!subCategory) {
      alert("Заполните поля");
      return;
    }
    const newObj = new FormData();
    newObj.append("slug", slugCategory);
    newObj.append("name", subCategory);
    newObj.append("parent", mainCategory);
    postCategories(newObj);
  };
  return (
    <div>
      <h3>Add category</h3>
      <div className="add_category" id={animat ? "product" : "p"}>
        <input
          className="add_category_input"
          type="text"
          onChange={(e) => setMainCategory(e.target.value)}
          value={mainCategory}
          placeholder="Основная категория"
        />
        <input
          className="add_category_input"
          type="text"
          onChange={(e) => setSubCategory(e.target.value)}
          value={subCategory}
          placeholder="Подкатегория"
        />
        <input
          className="add_category_input"
          type="text"
          placeholder="slug"
          onChange={(e) => setSlugCategory(e.target.value)}
          value={slugCategory}
        />
        <button className="add_category_button" onClick={handleCategory}>
          Добавить категорию
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
