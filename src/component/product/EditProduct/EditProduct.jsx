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
import { useParams } from "react-router-dom";
const EditProduct = () => {
  const {
    categories,
    getCategories,
    updateProduct,
    oneProduct,
    getOneProduct,
  } = useProduct();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    getCategories();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      if (oneProduct.category) {
        setCategory(oneProduct.category.slug);
      }
    }
  }, [oneProduct]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [preview, setPreview] = useState("");

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
    updateProduct(id, newProduct);
  };
  return (
    <div className="w-50 mt-5 m-auto">
      <h2>CREATE PRODUCT</h2>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
        value={title}
      />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
        value={description}
      />
      <TextField
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
        value={price}
      />

      <FormControl fullWidth>
        <InputLabel>Категории</InputLabel>
        <Select
          id="demo-simple-select"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {categories.map((item) => (
            <MenuItem value={item.slug} key={item.slug}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p>
        Preview BEFORE : {oneProduct ? oneProduct.preview : "preview is empty"}
      </p>
      <TextField onChange={(e) => setPreview(e.target.files[0])} type="file" />

      <p>IMAGE BEFORE : {oneProduct ? oneProduct.images : "image is empty"}</p>
      <TextField onChange={(e) => setImages(e.target.files)} type="file" />

      <Button onClick={handleSave}>Create Product</Button>
    </div>
  );
};

export default EditProduct;
