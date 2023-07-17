import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import moment from "moment/moment";
import { useAuth } from "../../../context/AuthContextProvider";
import { useProduct } from "../../../context/ProductContextProvider";
import { Button, Rating } from "@mui/material";
import { useCart } from "../../../context/CartContextProvider";
import "./ProductDetails.css";
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
  const [commentToEdit, setCommentToEdit] = useState(null);
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

  // const handleChange = (e) => {
  //   setCommentToEdit({ ...commentToEdit, text: e.target.value });
  // };

  // const handleSave = () => {
  //   const editedReview = {
  //     text: commentToEdit.text,
  //     product: commentToEdit.product,
  //   };
  //   saveEditedReview(editedReview, commentToEdit.id);
  //   setCommentToEdit(null);
  // };

  return (
    // <div style={{ margin: "auto" }}>
    //   <div style={{ marginLeft: "10%", width: "87%", display: "flex" }}>
    //     <div style={{ display: "flex", flexDirection: "column", width: "10%" }}>
    //       {oneProduct?.images.map((item) => (
    //         <img src={item.image} alt="" style={{ width: "100%" }} />
    //       ))}
    //     </div>
    //     <img
    //       src={oneProduct?.preview}
    //       alt=""
    //       style={{ marginLeft: "5%", width: "100%" }}
    //     />
    //     <div style={{ width: "32%" }}>
    //       <h3>{oneProduct?.title}</h3>
    //       <button onClick={() => toggleLikes(oneProduct?.id)}>
    //         {oneProduct?.liked_by_user ? "-" : "+"}
    //       </button>
    //       <span style={{ color: "black" }}>
    //         Likes: {oneProduct?.likes_count}
    //       </span>
    //       <p style={{ color: "black" }}>{oneProduct?.category.name}</p>
    //       <p style={{ color: "black" }}>{oneProduct?.price}</p>

    //       <Button
    //         sx={{ color: "blue" }}
    //         variant={oneProduct?.favorite_by_user ? "success" : "secondary"}
    //         onClick={() => togglefav(oneProduct?.id)}
    //       >
    //         {oneProduct?.favorite_by_user
    //           ? "Remove from favorites"
    //           : "Add to Favorites"}
    //       </Button>
    //       <Button
    //         sx={{ color: "blue" }}
    //         onClick={() => addProductToCart(oneProduct)}
    //       >
    //         add to cart
    //       </Button>
    //     </div>
    //   </div>

    //   <div style={{ marginLeft: "40px" }}>
    //     <p style={{ color: "black", width: "50%" }}>
    //       {oneProduct?.description}
    //     </p>
    //   </div>
    //   <div style={{ margin: "auto", width: "50%", marginTop: "30px" }}>
    //     {review.some((item) => item.user === currentUser) ? (
    //       <h3 style={{ color: "black" }}>Вы уже оставили отзыв</h3>
    //     ) : (
    //       <form onSubmit={handleAddReview} action="">
    //         <label style={{ backgroundColor: "white" }}>
    //           Rating:
    //           <Rating
    //             name="rating"
    //             value={rating}
    //             onChange={handleRatingChange}
    //             precision={1}
    //             required
    //           />
    //         </label>
    //         <textarea
    //           value={text}
    //           onChange={(e) => setText(e.target.value)}
    //           className="w-75"
    //           name=""
    //           id=""
    //           cols="30"
    //           rows="10"
    //         ></textarea>
    //         <button>add REVIEWS</button>
    //       </form>
    //     )}

    //     <div>
    //       {review?.map((item) => (
    //         <div key={item.id}>
    //           <h5 style={{ color: "black" }}>{item.user}</h5>
    //           <label style={{ backgroundColor: "white" }}>
    //             Rating:
    //             <Rating
    //               name="rating"
    //               value={item.rating}
    //               precision={item.rating}
    //               required
    //             />
    //           </label>
    //           <p style={{ color: "black" }}>{item.text}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="conter">
      <div className="container_details">
        <div className="details_wrapper">
          <div className="details_img">
            {oneProduct?.images.map((item) => (
              <img className="img_product" src={item.image} alt="" />
            ))}
          </div>
          <div className="block_details_left">
            <img src={oneProduct?.preview} alt="" className="preview_left" />
          </div>

          <div className="block_details_right">
            <h3>{oneProduct?.title}</h3>
            <p className="details_right_desc">{oneProduct?.price}</p>
            <div>
              <button onClick={() => toggleLikes(oneProduct?.id)}>
                {oneProduct?.liked_by_user ? "-" : "+"}
              </button>
              <span style={{ color: "black" }}>
                Likes: {oneProduct?.likes_count}
              </span>

              <Button
                sx={{ color: "blue" }}
                variant={oneProduct?.favorite_by_user ? "success" : "secondary"}
                onClick={() => togglefav(oneProduct?.id)}
              >
                {oneProduct?.favorite_by_user
                  ? "Remove from favorites"
                  : "Add to Favorites"}
              </Button>
              <Button
                sx={{ color: "blue" }}
                onClick={() => addProductToCart(oneProduct)}
              >
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: "auto", width: "50%", marginTop: "30px" }}>
        {review.some((item) => item.user === currentUser) ? (
          <h3 style={{ color: "black" }}>Вы уже оставили отзыв</h3>
        ) : (
          <form onSubmit={handleAddReview} action="">
            <label style={{ backgroundColor: "white" }}>
              Rating:
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
              className="w-75"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>add REVIEWS</button>
          </form>
        )}

        <div>
          {review?.map((item) => (
            <div key={item.id}>
              <h5 style={{ color: "black" }}>{item.user}</h5>
              <label style={{ backgroundColor: "white" }}>
                Rating:
                <Rating
                  name="rating"
                  value={item.rating}
                  precision={item.rating}
                  required
                />
              </label>
              <p style={{ color: "black" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
