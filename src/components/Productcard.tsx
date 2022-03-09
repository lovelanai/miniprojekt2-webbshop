import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Product } from "../interfaces/interfaces";
import "./Productcard.css";
import { info } from "console";
import ProductAccordion from "./ProductAccordion";
import { Theme } from "@mui/material";
import { ProductContext } from "../contexts/ProductContext";
import { ShoppingCartContext, useCart } from "../contexts/ShoppingCartContext";
import { ActiveProductContext } from "../contexts/ActiveProduct";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "2rem",
    padding: "0 2rem",
  },
});

export default function ImgMediaCard(): JSX.Element {
  const classes = useStyles();

  const { products } = useContext(ProductContext);
  const { handleAddProduct } = useCart();
  const { handleSetActiveProduct } = useContext(ActiveProductContext);

  return (
    <div className="ProductContainer">
      {products.map((item) => (
        <Card className={classes.root} key={item.id}>
          <CardActionArea>
            <div className="ImageContainer">
              <CardMedia
                component="img"
                alt={item.title}
                height="auto"
                image={item.image}
                title={item.title}
              />
            </div>
            <CardContent>
              <div className="InfoContainer">
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="ul"
                >
                  <li>{item.info1}</li>
                  <li>{item.info2}</li> <li>{item.info3}</li>
                </Typography>
              </div>
              <div className="price">
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.price} SEK
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
          <ProductAccordion info={item.longinfo} />
          <CardActions>
            <div className="buttons">
              <Button
                onClick={() => handleAddProduct(item)}
                variant="contained"
                size="small"
                color="primary"
              >
                Lägg i kundvagn
              </Button>
              <Button
                onClick={() => handleSetActiveProduct(item)}
                variant="contained"
                size="small"
                color="secondary"
              >
                Till produkten
              </Button>
            </div>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
