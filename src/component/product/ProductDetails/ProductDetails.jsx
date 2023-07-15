import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import { useAuth } from "../../../context/AuthContextProvider";
import { useProduct } from "../../../context/ProductContextProvider";
import { Button, Rating } from "@mui/material";

const ProductDetails = () => {
  const {
    oneProduct,
    getOneProduct,
    addReview,
    deleteReview,
    saveEditedReview,
    toggleLikes,
    GetReview,
    review,
  } = useProduct();
  const { currentUser } = useAuth();
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [commentToEdit, setCommentToEdit] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
    GetReview(id);
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
    <div style={{ margin: "auto", width: "50%" }}>
      <img src={oneProduct?.preview} width={500} alt="" />
      <img src={oneProduct?.images[0].image} width={500} alt="" />
      <img src={oneProduct?.images[1].image} width={500} alt="" />

      <h3>{oneProduct?.title}</h3>
      <button onClick={() => toggleLikes(oneProduct?.id)}>
        {oneProduct?.liked_by_user ? "-" : "+"}
      </button>
      <span style={{ color: "white" }}>Likes: {oneProduct?.likes_count}</span>
      <p>{oneProduct?.category.name}</p>
      <p>{oneProduct?.price}</p>
      <p>{oneProduct?.description}</p>
      <Button
        sx={{ color: "blue" }}
        variant={oneProduct?.favorite_by_user ? "success" : "secondary"}
      >
        {oneProduct?.favorite_by_user
          ? "Remove from favorites"
          : "Add to Favorites"}
      </Button>
      {review.some((item) => item.user === currentUser) ? (
        <h3>Вы уже оставили отзыв</h3>
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
            <h5>{item.user}</h5>
            <label style={{ backgroundColor: "white" }}>
              Rating:
              <Rating
                name="rating"
                value={item.rating}
                precision={item.rating}
                required
              />
            </label>
            <p>{item.text}</p>
          </div>
        ))}
        {/* {oneProduct?.rating.map((item) => (
          <div key={item.id} className="border m-4">
            <h5>{item.author}</h5> */}
        {/* {commentToEdit && commentToEdit.id == item.id ? ( */}
        {/* <>
                <input onChange={handleChange} value={commentToEdit.text} />
                <button onClick={() => setCommentToEdit(null)}>cansel</button>
                <button onClick={handleSave}>save review</button>
              </>
            ) : (
              */}{" "}
        {/* <p> */}
        {/* {item.avg} {"    "} */}
        {/* <span style={{ fontSize: "10px", color: "lightgrey" }}>
                {moment(item.created_at).format("DD/MM/YYYY HH:mm:ss")}
              </span> */}
        {/* </p>
          </div>
        ))}  */}
        {/* {item.author === currentUser ? (
              <div>
                <button onClick={() => setCommentToEdit(item)}>edit</button>
                <button onClick={() => deleteReview(item.id, id)}>
                  delete
                </button>
              </div>
          //   ) : null} */}
      </div>
    </div>
  );
};

export default ProductDetails;
