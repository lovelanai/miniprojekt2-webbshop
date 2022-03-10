import { createElement, useContext, useState } from "react";
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

export default function CartItem(): JSX.Element {
  const { cartItems } = useContext(ShoppingCartContext);
  const { amountOfProducts } = useContext(ShoppingCartContext);
  const { handleAddProduct } = useCart();
  const { handleRemoveProduct } = useCart();

  if (amountOfProducts === 0) {
    return (
      <div className="emtyCart">
        <h1>Varukorgen är tom...</h1>
      </div>
    );
  }

  return (
    <div>
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
                  <Button size="small" onClick={() => handleAddProduct(item)}>
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
  );
}
