import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  MenuItem,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { useProduct } from "../../../context/ProductContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import Chat from "./Chat";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProductList = () => {
  const {
    getProducts,
    products,
    pages,
    categories,
    getCategories,
    recentlyWatched,
  } = useProduct();
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
  const navigate = useNavigate();
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
          height: "1400px",
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
        <Box sx={{ position: "absolute", left: "20px", marginTop: "10%" }}>
          <Typography sx={{ fontSize: "17px", color: "#000" }}>
            Недавно просмотренные
          </Typography>
          {recentlyWatched
            .filter((product, index, self) => {
              return index === self.findIndex((p) => p.id === product.id);
            })
            .map((product) => (
              <Card
                sx={{
                  maxWidth: 200,
                  border: "1px solid #ccc",
                  marginTop: 5,
                  textAlign: "center",
                }}
                key={product.id}
              >
                <CardMedia
                  sx={{ width: 197, height: 225 }}
                  image={product.preview}
                  title="green iguana"
                  onClick={() => navigate(`/details/${product.id}`)}
                />
                <CardContent>
                  <Typography
                    sx={{ fontSize: "14px" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Box>
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
