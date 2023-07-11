import React, { useEffect, useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductContextProvider";

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",

    price: 0,
    category: "",
  });
  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ paddingBottom: "3%" }}>
      <Typography
        sx={{
          paddingTop: "2%",
          color: "white",
          WebkitTextStroke: "3px black",
          fontWeight: "900",
          fontSize: "44px",
        }}
        variant="h4"
        align="center"
      >
        EDIT PAGE
      </Typography>
      <Box
        sx={{
          width: "60vw",
          margin: "10px auto",
          padding: "5% 5%",
        }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="title"
          label="title"
          variant="outlined"
          value={product.title}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="desc"
          label="desc"
          variant="outlined"
          value={product.desc}
        />

        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic1"
          label="pic1"
          variant="outlined"
          value={product.pic1}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic2"
          label="pic2"
          variant="outlined"
          value={product.pic2}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic3"
          label="pic3"
          variant="outlined"
          value={product.pic3}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic4"
          label="pic4"
          variant="outlined"
          value={product.pic4}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="price"
          label="price"
          variant="outlined"
          value={product.price}
        />

        <Box sx={{ backgroundColor: "orange", borderRadius: "5px" }}>
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
              fontSize: "22px",
              fontWeight: "900",
              fontFamily: "segoe ui",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={() => saveEditedProduct(product)}
            fullWidth
            variant="outlined"
            size="large"
            className="admin__button"
          >
            SAVE CHANGES
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;
