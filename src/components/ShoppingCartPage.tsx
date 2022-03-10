import { createElement, CSSProperties, useContext, useState } from "react";
import "./ShoppingCart.css";
import { ShoppingCartContext, useCart } from "../contexts/ShoppingCartContext";
import { Product } from "../interfaces/interfaces";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ProductContext from "../contexts/ProductContext";
import Shoppingcart from "./CartItem";
import CartItem from "./CartItem";

function ShoppingCartPage() {
  const { cartItems } = useContext(ShoppingCartContext);
  const { amountOfProducts } = useContext(ShoppingCartContext);
  const { handleAddProduct } = useCart();
  const { handleRemoveProduct } = useCart();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div style={containerStyle}>
        <div className="cart-container">
          <div className="cart">
            <div className="cart-left">
              <div className="CartHeader">
                <h1 className="header-font">Varukorg</h1>
              </div>
              <CartItem />
            </div>
            <div className="cart-right">
              <div className="orderSummary">
                <h1 className="header-font">Översikt</h1>
              </div>
              <div className="items">
                <h3>Produkter</h3>
                <p>{amountOfProducts}</p>
              </div>
              <div className="total">
                <h3>Total</h3>

                <p>{totalCost}:-</p>

                <Link to="/checkOut">
                  <Button variant="contained" size="small" color="secondary">
                    Bekräfta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle: CSSProperties = {
  height: "calc(100vh - 9rem)",
  width: "100%",
  background: "white",
  marginTop: "6rem",
};

export default ShoppingCartPage;
