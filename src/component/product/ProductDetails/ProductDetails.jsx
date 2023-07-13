import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import moment from "moment/moment";
import { useAuth } from "../../../context/AuthContextProvider";
import { useProduct } from "../../../context/ProductContextProvider";
import { Button } from "@mui/material";

const ProductDetails = () => {
  const {
    oneProduct,
    getOneProduct,
    addReview,
    deleteReview,
    saveEditedReview,
    toggleLikes,
  } = useProduct();
  const { currentUser } = useAuth();
  const [text, setText] = useState("");
  const [commentToEdit, setCommentToEdit] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    const newReview = { text, product: id };
    addReview(newReview);
    getOneProduct(id);
    setText("");
  };

  const handleChange = (e) => {
    setCommentToEdit({ ...commentToEdit, text: e.target.value });
  };

  const handleSave = () => {
    const editedReview = {
      text: commentToEdit.text,
      product: commentToEdit.product,
    };
    saveEditedReview(editedReview, commentToEdit.id);
    setCommentToEdit(null);
  };

  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <img src={oneProduct?.preview} width={500} alt="" />
      <h3>{oneProduct?.title}</h3>
      <button onClick={() => toggleLikes(oneProduct?.id)}>
        {oneProduct?.liked_by_user ? "-" : "+"}
      </button>
      <span style={{ color: "white" }}>Likes: {oneProduct?.likes}</span>
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
      {/* <div>
        {oneProduct?.reviews.map((item) => (
          <div key={item.id} className="border m-4">
            <h5>{item.author}</h5>
            {commentToEdit && commentToEdit.id == item.id ? (
              <>
                <input onChange={handleChange} value={commentToEdit.text} />
                <button onClick={() => setCommentToEdit(null)}>cansel</button>
                <button onClick={handleSave}>save review</button>
              </>
            ) : (
              <p>
                {item.text} {"    "}
                <span style={{ fontSize: "10px", color: "lightgrey" }}>
                  {moment(item.created_at).format("DD/MM/YYYY HH:mm:ss")}
                </span>
              </p>
            )}

            {item.author === currentUser ? (
              <div>
                <button onClick={() => setCommentToEdit(item)}>edit</button>
                <button onClick={() => deleteReview(item.id, id)}>
                  delete
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <form onSubmit={handleAddReview} action="">
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
      </form> */}
    </div>
  );
};

export default ProductDetails;
