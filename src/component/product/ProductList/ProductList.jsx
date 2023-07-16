import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Box, Grid, Pagination, TextField, Typography } from "@mui/material";
import { useProduct } from "../../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products, pages } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSeacrhParams] = useSearchParams();

  useEffect(() => {
    setSeacrhParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, []);
  const handleChange = (e, p) => {
    setCurrentPage(p);
  };
  return (
    <div>
      <Grid
        className="GridList"
        item
        md={9}
        sx={{
          width: "75%",
          marginLeft: "18%",
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
            gridTemplateColumns: "repeat(4, minmax(0, 1fr)) ",
            gap: "25px",
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
        <Pagination
          sx={{ backgroundColor: "white", color: "white" }}
          count={pages}
          page={currentPage}
          onChange={handleChange}
        />
      </Grid>
    </div>
  );
};

export default ProductList;
