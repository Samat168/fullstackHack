import React, { useEffect } from "react";
import { useProducts } from "../../../context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import { Box, Grid } from "@mui/material";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Grid
        className="GridList"
        item
        md={9}
        sx={{
          width: "75%",
          margin: "auto",
          "@media (max-width: 990px)": {
            width: "89%",
          },
          "@media (max-width: 716px)": {
            width: "70%",
          },
        }}
      >
        <Box
          className="BoxList"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "7%",
            "@media (max-width: 716px)": {
              grid: "none",
            },
          }}
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Box>
      </Grid>
    </div>
  );
};

export default ProductList;
