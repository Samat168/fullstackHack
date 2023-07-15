import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const AddPromo = () => {
  const { postPromo, promo } = useProduct();
  const { currentUser } = useAuth();
  const { v4: uuidv4 } = require("uuid");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const handlePromo = () => {
    const newObj = new FormData();
    newObj.append("image", img);
    newObj.append("text", desc);
    postPromo(newObj);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setImg(e.target.value)}
        value={img}
        placeholder="Картинка рекламы"
      />
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        placeholder="Описание"
      />
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        placeholder="Дата обращения"
      />
      <button onClick={handlePromo}>Опубликовать</button>
    </div>
  );
};

export default AddPromo;
