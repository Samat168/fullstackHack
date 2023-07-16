import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const AddPromo = ({ animat }) => {
  const { postPromo } = useProduct();

  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  const handlePromo = () => {
    const newObj = new FormData();
    if (img) {
      newObj.append("image", img);
    }
    newObj.append("text", desc);
    postPromo(newObj);
  };
  return (
    <div className="add_promo" id={animat ? "product" : "p"}>
      <input
        type="file"
        onChange={(e) => setImg(e.target.files[0])}
        placeholder="Картинка рекламы"
      />
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Описание"
      />

      <button onClick={handlePromo}>Опубликовать</button>
    </div>
  );
};

export default AddPromo;
