import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  Box,
  Grid,
  MenuItem,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { useProduct } from "../../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import Chat from "./Chat";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProductList = () => {
  const { getProducts, products, pages, categories, getCategories } =
    useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSeacrhParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSeacrhParams({
      page: currentPage,
      category: selectedCategory,
    });
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, [searchParams]);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const handleFilterByCategory = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };
  return (
    <div>
      <Swiper navigation={false} modules={[Navigation]}>
        <SwiperSlide style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              height: "300px",
              background: "#FF4800",
              backgroundImage: `url(https://intersport.kg/media/WEBP/5d/a3fb54/media/slider_images/7.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              height: "300px",
              background: "#FF4800",
              backgroundImage: `url(https://intersport.kg/media/WEBP/42/96bb70/media/slider_images/10.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <Grid
        className="GridList"
        item
        md={9}
        sx={{
          width: "65%",
          marginLeft: "30%",
          marginTop: "4%",
          "@media (max-width: 990px)": {
            width: "89%",
          },
          "@media (max-width: 716px)": {
            width: "70%",
          },
        }}
      >
        <TextField
          select
          label="Category"
          value={selectedCategory}
          onChange={handleFilterByCategory}
          sx={{
            marginTop: "16px",
            width: "20%",
            position: "absolute",
            left: "20px",
          }}
        >
          <MenuItem
            sx={{ fontSize: "12px", lineHeight: "1.2", padding: "6px 12px" }}
            value=""
          >
            All
          </MenuItem>
          {categories.map((category) => (
            <MenuItem
              sx={{ fontSize: "12px", lineHeight: "1.2", padding: "6px 12px" }}
              key={category.slug}
              value={category.slug}
            >
              {category.name}
            </MenuItem>
          ))}
        </TextField>
        {/* <Chat /> */}
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
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            margin: "16px 0",
            "& .MuiPaginationItem-root": {
              borderRadius: "50%",
              border: "1px solid #ccc",
              margin: "0 4px",
              color: "#000",
              "&.Mui-selected": {
                backgroundColor: "#ccc",
              },
              "&:hover": {
                backgroundColor: "#eee",
              },
            },
            "& .MuiPaginationItem-text": {
              fontSize: "14px",
            },
          }}
          count={pages}
          page={currentPage}
          onChange={handleChange}
        />
      </Grid>
    </div>
  );
};

export default ProductList;
