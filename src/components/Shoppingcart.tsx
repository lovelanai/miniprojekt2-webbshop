import { useContext, useState } from "react";
import "./ShoppingCart.css";
import { ShoppingCartContext, useCart } from "../contexts/ShoppingCartContext";
import { Product } from "../interfaces/interfaces";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ProductContext from "../contexts/ProductContext";

export default function ShoppingCart(): JSX.Element {
  const { cartItems } = useContext(ShoppingCartContext);
  const { amountOfProducts } = useContext(ShoppingCartContext);
  const { handleAddProduct } = useCart();
  const { handleRemoveProduct } = useCart();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-left">
          <div className="CartHeader">
            <h1>Varukorg</h1>
          </div>

          <div className="test-container">
            {cartItems.map((item) => (
              <div>
                <Card className="test" key={item.id}>
                  <div className="image">
                    <CardMedia
                      component="img"
                      alt={item.title}
                      height="auto"
                      image={item.image}
                      title={item.title}
                    />
                    <h1>{item.title}</h1>
                  </div>

                  <div className="product-info">
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {item.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => handleAddProduct(item)}
                      >
                        +
                      </Button>
                      <Typography>{item.quantity} </Typography>
                      <Button
                        size="small"
                        onClick={() => handleRemoveProduct(item)}
                      >
                        -
                      </Button>
                    </CardActions>
                    <Typography>{item.quantity * item.price}:- </Typography>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-right">
          <div className="orderSummary">
            <h1>Översikt</h1>
          </div>
          <div className="items">
            <h3>Produkter</h3>
            <p>{amountOfProducts}</p>
          </div>
          <div className="total">
            <h3>Total</h3>

            <p>{totalCost}:-</p>

            {/* <Link to="checkOut">Bekfräfta</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
