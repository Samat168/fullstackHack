import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useProduct } from "../../../context/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {/* <Typography
        variant="h1"
        fontSize={77}
        sx={{
          fontFamily: "apercu, sans-serif",
          textAlign: "center",
          marginTop: "20px",
          fill: "var(--color-primary)",
          fontWeight: "300",
        }}
      >
        SELL SWAP "ПОКУПАЙ И ПРОДАВАЙ"
      </Typography>
      <marquee>
        <h5 style={{ fontSize: "30px" }}>
          Frontend Developer : Samat Nurkemel Arslan Python
          Developer:loremdgdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        </h5>
      </marquee> */}
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
