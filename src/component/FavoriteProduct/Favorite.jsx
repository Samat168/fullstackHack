import * as React from "react";
import { useEffect } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../context/FavoriteContextProvider";
export default function FavoriteProducts() {
  const { favorites, getFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    getFavorites();
  }, []);

  const FavoriteCleaner = () => {
    localStorage.removeItem("favorites");
    getFavorites();
  };
  const navigate = useNavigate();
  return (
    <Grid
      item
      md={9}
      sx={{
        width: "75%",
        margin: "auto",
        "@media (max-width: 550px)": {
          width: "64%",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "7%",
          "@media (max-width: 550px)": {
            grid: "none",
          },
        }}
      >
        {favorites.map((favor) => (
          <div className="product_card" key={favor.id}>
            <img
              className="product_img"
              src={favor.pic1}
              alt=""
              onClick={() => navigate(`/details/${favor.id}`)}
            />
            <div className="product_card_bottom">
              <span className="product_price">${favor.price}</span>
              <Button
                sx={{ marginBottom: "8px" }}
                size="small"
                onClick={() => removeFromFavorites(favor.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Box>
    </Grid>
  );
}
