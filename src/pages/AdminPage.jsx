import React, { useEffect, useState } from "react";
import AddProduct from "../component/product/AddProduct/AddProduct";
import AddCategory from "../component/Category/AddCategory";
import AddPromo from "../component/Promo/AddPromo";

const AdminPage = () => {
  const [addProduct, setAddProduct] = useState();
  const [addCategory, setAddCategory] = useState();
  const [animat, setAnimat] = useState();
  const [catanim, setCatanim] = useState();
  function closeProduct() {
    setAddProduct(false);
  }
  function closeCategory() {
    setAddCategory(false);
  }
  return (
    <div
      style={{ display: "flex", margin: "auto", height: "500px", width: "95%" }}
    >
      <div className="button_container">
        <div className="add_button_div">
          {!addProduct ? (
            <button
              onClick={() => {
                setAddProduct(true);
                setAnimat(false);
              }}
            >
              Добавить продукт
            </button>
          ) : (
            <button
              onClick={() => {
                setTimeout(closeProduct, 290);
                setAnimat(true);
              }}
            >
              Отмена
            </button>
          )}
        </div>

        <div className="add_button_div">
          {!addCategory ? (
            <button
              onClick={() => {
                setAddCategory(true);
                setCatanim(false);
              }}
            >
              Добавить категорию
            </button>
          ) : (
            <button
              onClick={() => {
                setTimeout(closeCategory, 290);
                setCatanim(true);
              }}
            >
              Отмена
            </button>
          )}
        </div>
      </div>
      <div className="adder_container">
        {addProduct ? <AddProduct animat={animat} /> : null}
        {addCategory ? <AddCategory animat={catanim} /> : null}
        <AddPromo />
      </div>
    </div>
  );
};

export default AdminPage;
