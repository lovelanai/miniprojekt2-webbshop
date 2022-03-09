import { useContext } from "react";
import "./ShoppingCart.css";
import { ShoppingCartContext, useCart } from "../contexts/ShoppingCartContext";

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
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-left">
          <div className="CartHeader">
            <h1> Varukorg</h1>
          </div>
          <div className="itemsCard">
            <p>balle</p>
            <p>snopp</p>
            <p>hej</p>
            <p>hej</p>
          </div>

          <div className="productContainer">
            {cartItems.map((item) => (
              <div className="addedProducts">
                <Card key={item.id}>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="auto"
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">+ </Button>
                    <Typography>{item.quantity} </Typography>
                    <Button size="small">-</Button>
                    <Typography>{item.quantity * item.price}:- </Typography>
                  </CardActions>
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
            <p> {amountOfProducts}</p>
          </div>
          <div className="total">
            <h3>Total</h3>
            {/* <p>Summa "{item.price * item.quantity}"</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
