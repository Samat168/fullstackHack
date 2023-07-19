import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  Avatar,
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
import { useAuth } from "../../../context/AuthContextProvider";

const ProductList = () => {
  const {
    getProducts,
    products,
    pages,
    categories,
    getCategories,
    recentlyWatched,
  } = useProduct();
  const { getUser, users } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSeacrhParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(users);
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
    <div style={{ marginTop: "68px" }}>
      <Swiper
        navigation={false}
        modules={[Navigation]}
        style={{
          "@media (max-width: 600px)": {
            height: "300px",
          },
        }}
      >
        <SwiperSlide style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              height: "500px",
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
              height: "500px",
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
      <div>
        <Grid
          className="GridList"
          item
          md={9}
          sx={{
            width: "65%",
            marginLeft: "30%",
            marginTop: "4%",
            height: "1400px",
            "@media (max-width: 1100px)": {
              height: "auto",
              marginLeft: "2%",
              width: "93%",
            },
            "@media (max-width: 990px)": {
              width: "89%",
            },
            // "@media (max-width: 716px)": {
            //   width: "70%",
            // },
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
              "@media (max-width: 1100px)": {
                position: "static",
              },
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
                sx={{
                  fontSize: "12px",
                  lineHeight: "1.2",
                  padding: "6px 12px",
                }}
                key={category.slug}
                value={category.slug}
              >
                {category.name}
              </MenuItem>
            ))}
          </TextField>
          <Box
            sx={{
              position: "absolute",
              left: "20px",
              marginTop: "10%",
              "@media (max-width: 1100px)": {
                position: "static",
                display: "flex",
                justifyContent: "space-between",
              },
              "@media (max-width: 684px)": {
                display: "flex",
                flexWrap: "wrap",
              },
              "@media (max-width: 445px)": {
                justifyContent: "center",
              },
            }}
          >
            {recentlyWatched.length > 0 ? (
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#000",
                  "@media (max-width: 1100px)": {
                    position: "absolute",
                  },
                }}
              >
                Недавно просмотренные
              </Typography>
            ) : null}
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

          <Box
            className="BoxList"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr)) ",
              gap: "25px",
              marginTop: "7%",

              "@media (max-width: 940px)": {
                gridTemplateColumns: "repeat(3, minmax(0, 1fr)) ",
              },
              "@media (max-width: 680px)": {
                gridTemplateColumns: "repeat(2, minmax(0, 1fr)) ",
              },
              "@media (max-width: 440px)": {
                gridTemplateColumns: "repeat(1, minmax(0, 1fr)) ",
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
      <Chat />
    </div>
  );
};

export default ProductList;
