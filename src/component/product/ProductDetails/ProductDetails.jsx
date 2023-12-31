import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import moment from "moment/moment";
import { useAuth } from "../../../context/AuthContextProvider";
import { useProduct } from "../../../context/ProductContextProvider";
import { Box, Button, LinearProgress, Rating, Typography } from "@mui/material";
import { useCart } from "../../../context/CartContextProvider";
import "./ProductDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import moment from "moment/moment";
const ProductDetails = () => {
  const {
    oneProduct,
    getOneProduct,
    addReview,
    deleteReview,
    saveEditedReview,
    toggleLikes,
    togglefav,
    GetReview,
    review,
  } = useProduct();
  const { currentUser } = useAuth();
  const { addProductToCart } = useCart();
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingAvg, setRatingAvg] = useState(
    oneProduct?.rating.rating__avg || 0
  );

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
    GetReview(id);
    const recentlyViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    if (!recentlyViewed.includes(id)) {
      recentlyViewed.unshift(id);
      if (recentlyViewed.length > 4) {
        recentlyViewed.pop();
      }
      localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
    }
  }, []);

  const handleAddReview = async (e) => {
    e.preventDefault();
    const newReview = { rating, text, product: id };
    await addReview(newReview);
    await GetReview(id);
    await getOneProduct(id);
    setRating(0);
    setText("");
  };

  const handleRatingChange = (event, value) => {
    setRating(value);
  };
  const navigate = useNavigate();
  const stars = oneProduct?.stars;

  const totalStars1 = stars?.["1"] || 0;
  const totalStars2 = stars?.["2"] || 0;
  const totalStars3 = stars?.["3"] || 0;
  const totalStars4 = stars?.["4"] || 0;
  const totalStars5 = stars?.["5"] || 0;
  useEffect(() => {
    setRatingAvg(oneProduct?.rating.rating__avg || 0);
  }, [oneProduct?.rating.rating__avg]);

  const [forPic, setForPic] = useState(false);
  const [mainPic, setMainPic] = useState();
  const changePic = (pic) => {
    setMainPic(pic);
    setForPic(true);
  };

  const returnPic = () => {
    setForPic(false);
  };

  return (
    <div className="conter">
      <div className="container_details">
        <div className="details_wrapper">
          <div className="details_img">
            {oneProduct?.images.map((item) => (
              <img
                key={item.id}
                className="img_product"
                src={item.image}
                alt=""
                onMouseOver={(e) => changePic(e.target.src)}
                onMouseOut={() => returnPic()}
              />
            ))}
          </div>
          <div className="block_details_left">
            <img
              alt=""
              className="preview_left"
              src={forPic ? mainPic : oneProduct?.preview}
            />
          </div>

          <div className="block_details_right">
            <h3 style={{ fontSize: "24px", lineHeight: "32px" }}>
              {oneProduct?.title}
            </h3>
            <p style={{ fontSize: "13px", opacity: "0.5" }}>
              Арт. 121637TRT-G2-44-46, 121637TRT-G2-48-50
            </p>
            <div style={{ marginTop: "10px", display: "flex" }}>
              <Rating
                name="rating"
                value={ratingAvg ? ratingAvg : 0}
                precision={0.5}
                required
                size="small"
                sx={{
                  marginRight: "5%",
                  color: "blue",
                  width: "20%",
                }}
              />
              <span style={{ fontSize: "13px", marginLeft: "10px" }}>
                {review.length} отзыв
              </span>
            </div>
            <p className="details_right_desc">{oneProduct?.price} ₽</p>
            <div>
              <p style={{ color: "black", marginTop: "20px" }}>
                <ThumbUpOffAltIcon
                  onClick={() => toggleLikes(oneProduct?.id)}
                  sx={{ color: oneProduct?.liked_by_user ? "blue" : "black" }}
                />{" "}
                {oneProduct?.likes_count}
              </p>
              <h4 style={{ fontSize: "20px", textAlign: "center" }}>
                Описание
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                {oneProduct?.description}
              </p>

              <Button
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  marginTop: "70px",
                  border: "1px solid",
                  width: "100%",
                }}
                onClick={() => addProductToCart(oneProduct)}
              >
                В корзину
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h2
        style={{
          marginTop: "100px",
          fontWeight: "500",
          letterSpacing: "5px",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Рекомендуемые товары
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <Box sx={{ padding: "0 15px" }}>
          {oneProduct?.recommended_products.map((item) => (
            <SwiperSlide
              key={item.id}
              className="product_slider_item"
              style={{ width: "399px", marginLeft: "23px" }}
              onClick={() => navigate(`/details/${item.id}`)}
            >
              <Box sx={{ width: "66%", height: "300px", overflow: "hidden" }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    marginTop: "10px",
                  }}
                  src={`http://34.134.83.129${item.preview}`}
                  alt=""
                />
              </Box>

              <Box sx={{ height: "100px" }}>
                <h4 style={{ textAlign: "start", margin: "5px" }}>
                  {item.title}
                </h4>
                <Rating
                  name="rating"
                  value={item.rating}
                  precision={item.rating}
                  required
                />
              </Box>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
      <div style={{ width: "100%", marginTop: "30px" }}>
        <div className="review-start">
          <div className="raiting-result">
            <h3 style={{ fontSize: "25px" }}>
              {oneProduct?.rating.rating__avg
                ? oneProduct.rating.rating__avg.toFixed(2)
                : 0}
            </h3>
            <Rating
              name="rating"
              value={ratingAvg ? ratingAvg : 0}
              precision={0.5}
              required
              sx={{ marginRight: "5%", color: "blue" }}
            />
          </div>

          <div className="review-progress">
            <h2 className="review_name">ОТЗЫВЫ ({review.length})</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <LinearProgress
                sx={{ height: "10px" }}
                variant="determinate"
                value={totalStars1}
                max={30}
                aria-valuemax={30}
              />
              <span>1</span>
              <LinearProgress
                sx={{ height: "10px" }}
                variant="determinate"
                value={totalStars2}
                max={30}
                aria-valuemax={30}
              />
              <span>2</span>
              <LinearProgress
                sx={{ height: "10px" }}
                variant="determinate"
                value={totalStars3}
                max={30}
                aria-valuemax={30}
              />
              <span>3</span>
              <LinearProgress
                sx={{ height: "10px" }}
                variant="determinate"
                value={totalStars4}
                aria-valuemax={30}
              />
              <span>4</span>
              <LinearProgress
                sx={{ height: "10px" }}
                variant="determinate"
                value={totalStars5}
                max={30}
                aria-valuemax={30}
              />
              <span>5</span>
            </div>
          </div>
          <div
            style={{
              marginLeft: "14%",
              width: "39%",
            }}
          >
            {review.some((item) => item.user === currentUser) ? (
              <h3 style={{ color: "black", marginTop: "50px" }}>
                Вы уже оставили отзыв
              </h3>
            ) : (
              <form
                onSubmit={handleAddReview}
                action=""
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label
                  style={{
                    backgroundColor: "white",
                    width: "56%",
                    marginLeft: "15px",
                  }}
                >
                  Рейтинг
                  <Rating
                    name="rating"
                    value={rating}
                    onChange={handleRatingChange}
                    precision={1}
                    required
                  />
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ height: "153px" }}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button
                  style={{
                    marginTop: "20px",
                    height: "49px",
                    color: "white",
                    backgroundColor: "blue",
                    fontSize: "17px",
                  }}
                >
                  Добавить отзыв
                </button>
              </form>
            )}
          </div>
        </div>
        <div style={{ width: "53%", marginLeft: "16%" }}>
          {review?.map((item) => (
            <div key={item.id} style={{ marginBottom: "20px" }}>
              <h5 style={{ color: "black" }}>{item.user}</h5>
              <label style={{ backgroundColor: "white" }}>
                <Rating
                  name="rating"
                  value={item.rating}
                  precision={item.rating}
                  required
                  sx={{ marginTop: "10px" }}
                />
              </label>
              <div style={{ display: "flex" }}>
                <p style={{ color: "black", marginTop: "7px" }}>{item.text}</p>
                <span
                  style={{
                    fontSize: "10px",
                    color: "lightgrey",
                    marginLeft: "20px",
                  }}
                >
                  {moment(item.created_at).format("DD/MM/YYYY HH:mm:ss")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
