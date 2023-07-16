import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useEffect } from "react";
import { useState } from "react";

const DeletePromo = ({ animat }) => {
  const { promo, getPromo, deletePromo } = useProduct();
  const [tru, setTru] = useState(true);
  useEffect(() => {
    getPromo();
  }, []);

  return (
    <div className="add_promo" id={animat ? "product" : "p"}>
      <h3>Рекламы</h3>
      {promo.map((item) => (
        <div key={item.id}>
          <h3>{item.text}</h3>
          <button
            onClick={() => {
              deletePromo(item.id);
              setTru(tru ? false : true);
            }}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeletePromo;
