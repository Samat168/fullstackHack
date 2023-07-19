import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../../context/CartContextProvider";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Cart() {
  const { cart, getCart, changeProductCount, deleteCartProduct } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <TableContainer
      component={Paper}
      style={{
        width: "50%",
        marginLeft: "18%",
        backgroundColor: "rgba(0,0,0,0.2)",
        // minHeight: "77px",
      }}
    >
      <h1 style={{ color: "whitesmoke", margin: " 5% 0 5% 3%" }}>
        Ваша Корзина
      </h1>
      <Table
        sx={{
          minWidth: 650,
          backgroundColor: "rgba(0,0,0,0.2)",
          minHeight: "77px",
          color: "white",
          marginBottom: "3%",
          borderRadius: "10px",
        }}
        aria-label="simple table"
      >
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.product?.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img width={80} src={row.product?.preview} alt="" />
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.product?.title}
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.product?.category}
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.product?.price} rub
              </TableCell>
              {/* <TableCell align="right">
                <input
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  min={1}
                  max={20}
                  type="number"
                  value={row.count}
                />
              </TableCell> */}
              <TableCell sx={{ color: "white" }} align="right">
                {row.subPrice}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",

                    borderRadius: "10%",
                    padding: "5px",
                    border: "1px solid white",
                  }}
                  onClick={() => deleteCartProduct(row.product.id)}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to={"/formforpay"}>
        <Button>BUY NOW FOR {cart?.totalPrice} rub</Button>
      </Link>
    </TableContainer>
  );
}
