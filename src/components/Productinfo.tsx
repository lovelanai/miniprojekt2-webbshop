import ProductInfoImageSlider from "./ProductInfoImageSlider";
import "./Productinfo.css";
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import { Product } from "../interfaces/interfaces";
import { Button } from "@mui/material";
import { useCart } from "../contexts/ShoppingCartContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import ProductTab from "./ProductTab";

interface Props {
  product: Product;
}

function ProductInfo(props: Props) {
  // const { activeProduct } = useContext(ActiveProductContext);
  const { product } = props;
  const { handleAddProduct } = useCart();

  return (
    <div className="product-info-container">
      <Link to="/">
        <ArrowBackIcon sx={{ fontSize: "2.2rem" }} className="back-arrow" />
      </Link>
      <ProductInfoImageSlider product={product} />
      <div className="right-product-container" key={product.id}>
        <h2 className="product-info-title">{product.title}</h2>
        <ProductTab product={product} />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="product-info-price">{product.price} :-</p>
          <Button
            style={{ height: "2rem", margin: "1rem 0" }}
            onClick={() => handleAddProduct(product)}
            variant="contained"
            size="small"
            color="primary"
          >
            Lägg i kundvagn
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
