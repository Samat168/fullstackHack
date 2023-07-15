import React, { useEffect, useState } from "react";
import AddProduct from "../component/product/AddProduct/AddProduct";
import AddCategory from "../component/Category/AddCategory";
import AddPromo from "../component/Promo/AddPromo";
import { Delete } from "@mui/icons-material";
import DeletePromo from "../component/Promo/DeletePromo";
import { useProduct } from "../context/ProductContextProvider";

const AdminPage = () => {
  const { getPromo } = useProduct();
  const [addProduct, setAddProduct] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [addPromo, setAddPromo] = useState(false);
  const [animat, setAnimat] = useState();
  const [catanim, setCatanim] = useState();
  const [promanim, setPromanim] = useState();
  function closeProduct() {
    setAddProduct(false);
  }
  function closeCategory() {
    setAddCategory(false);
  }
  function closePromo() {
    setAddPromo(false);
  }
  useEffect(() => {
    getPromo();
  }, []);
  return (
    <div
      style={{ display: "flex", margin: "auto", height: "500px", width: "95%" }}
    >
      <div className="button_container">
        <div className="add_button_div">
          {!addProduct ? (
            <button
              className="modal_button"
              onClick={() => {
                setAddProduct(true);
                setAnimat(false);
              }}
            >
              Добавить продукт
            </button>
          ) : (
            <button
              className="modal_button"
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
              className="modal_button"
              onClick={() => {
                setAddCategory(true);
                setCatanim(false);
              }}
            >
              Добавить категорию
            </button>
          ) : (
            <button
              className="modal_button"
              onClick={() => {
                setTimeout(closeCategory, 290);
                setCatanim(true);
              }}
            >
              Отмена
            </button>
          )}
        </div>

        <div className="add_button_div">
          {!addPromo ? (
            <button
              className="modal_button"
              onClick={() => {
                setAddPromo(true);
                setPromanim(false);
              }}
            >
              Добавить Promo
            </button>
          ) : (
            <button
              className="modal_button"
              onClick={() => {
                setTimeout(closePromo, 290);
                setPromanim(true);
              }}
            >
              Отмена
            </button>
          )}
        </div>

        <div className="add_button_div">
          {!addPromo ? (
            <button
              className="modal_button"
              onClick={() => {
                setAddPromo(true);
                setPromanim(false);
              }}
            >
              Удалить Promo
            </button>
          ) : (
            <button
              className="modal_button"
              onClick={() => {
                setTimeout(closePromo, 290);
                setPromanim(true);
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
        {addPromo ? <AddPromo animat={promanim} /> : null}
        <DeletePromo />
      </div>
    </div>
  );
};

export default AdminPage;
