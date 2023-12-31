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

const AddProduct = ({ animat }) => {
  const { categories, getCategories, createProduct, postCategories } =
    useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState("");

  const handleSave = () => {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("price", price);
    newProduct.append("description", description);
    newProduct.append("category", category);

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        newProduct.append("images", images[i]);
      }
    }

    if (preview) {
      newProduct.append("preview", preview);
    }

    createProduct(newProduct);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
  };

  return (
    <div className="add_product" id={animat ? "product" : "p"}>
      <h2>CREATE PRODUCT</h2>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
        className="add_product_input"
      />
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
        className="add_product_input"
      />
      <TextField
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
        className="add_product_input"
      />

      <FormControl fullWidth className="add_product_input">
        <InputLabel id="demo-simple-select-label">Категории</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setCategory(e.target.value)}
          sx={{ width: "100%" }}
        >
          {categories.map((item) => {
            if (item.parent != null) {
              return (
                <MenuItem value={item.slug} key={item.slug}>
                  {item.name}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>

      <TextField
        onChange={(e) => setPreview(e.target.files[0])}
        type="file"
        className="add_product_input"
      />

      <input
        type="file"
        multiple
        onChange={handleImageChange}
        style={{ backgroundColor: "white" }}
        className="add_product_input"
      />

      <button onClick={handleSave} className="add_product_button">
        Create Product
      </button>
    </div>
  );
};

export default AddProduct;
