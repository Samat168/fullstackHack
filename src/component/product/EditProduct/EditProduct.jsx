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
  console.log(id);

  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category);
    }
  }, [oneProduct]);

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
    updateProduct(id, newProduct);
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
  };

  return (
    <div
      style={{
        marginTop: "10%",
        width: "50%",
        marginLeft: "25%",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>EDIT PRODUCT</h2>
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

      <FormControl style={{ width: "30%" }}>
        <InputLabel id="demo-simple-select-label">Категории</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <MenuItem value={item.slug} key={item.slug}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p>
        Preview BEFORE :{" "}
        {oneProduct ? (
          <img style={{ width: "100px" }} src={oneProduct.preview} alt="" />
        ) : (
          "preview is empty"
        )}
      </p>
      <TextField onChange={(e) => setPreview(e.target.files[0])} type="file" />

      <p>
        IMAGE BEFORE :{" "}
        {oneProduct
          ? oneProduct.images.map((item) => (
              <img style={{ width: "100px" }} src={item.image} alt="" />
            ))
          : "image is empty"}
      </p>
      <input
        multiple
        onChange={handleImageChange}
        type="file"
        style={{ padding: "16.5px 14px", border: "1px solid" }}
      />

      <Button onClick={handleSave}>Сохранить</Button>
    </div>
  );
};

export default EditProduct;
