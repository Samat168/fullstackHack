import React, { useEffect, useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useProduct } from "../../../context/ProductContextProvider";
import { useAuth } from "../../../context/AuthContextProvider";
const AddProduct = () => {
  const { categories, getCategories, createProduct, postCategories } =
    useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [preview, setPreview] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [slugCategory, setSlugCategory] = useState("");

  const handleSave = () => {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("price", price);
    newProduct.append("description", description);
    newProduct.append("category", category);
    if (images) {
      newProduct.append("images", images);
    }
    if (preview) {
      newProduct.append("preview", preview);
    }
    createProduct(newProduct);
  };

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
    <div className="w-50 mt-5 m-auto">
      <h2>CREATE PRODUCT</h2>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
        sx={{ backgroundColor: "white" }}
      />

      <FormControl fullWidth sx={{ backgroundColor: "white" }}>
        <InputLabel id="demo-simple-select-label">Категории</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <MenuItem value={item.slug} key={item.slug}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        onChange={(e) => setPreview(e.target.files[0])}
        type="file"
        sx={{ backgroundColor: "white" }}
      />

      <TextField
        onChange={(e) => setImages(e.target.files[4])}
        type="file"
        sx={{ backgroundColor: "white" }}
      />

      <Button onClick={handleSave}>Create Product</Button>
      <div>
        <input
          type="text"
          onChange={(e) => setMainCategory(e.target.value)}
          value={mainCategory}
          placeholder="Основная категория"
        />
        <input
          type="text"
          onChange={(e) => setSubCategory(e.target.value)}
          value={subCategory}
          placeholder="Подкатегория"
        />
        <input
          type="text"
          placeholder="slug"
          onChange={(e) => setSlugCategory(e.target.value)}
          value={slugCategory}
        />
        <Button onClick={handleCategory}>Добавить категорию</Button>
      </div>
    </div>
  );
};

export default AddProduct;
