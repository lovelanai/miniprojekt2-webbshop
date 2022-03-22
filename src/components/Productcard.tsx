import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { useCart } from "../contexts/ShoppingCartContext";
import ProductAccordion from "./ProductAccordion";
import "./Productcard.css";

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

  return (
    <div className="ProductContainer">
      {products.map((item) => (
        <Card className={classes.root} key={item.id}>
          <Link to={item.title.replaceAll(" ", "-")}>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.price} SEK
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Link>
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
              <Link to={item.title.replaceAll(" ", "-")}>
                <Button
                  variant="contained"
                  size="small"
                  style={{ backgroundColor: "#ec2444", color: "white" }}
                >
                  Till produkten
                </Button>
              </Link>
            </div>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
