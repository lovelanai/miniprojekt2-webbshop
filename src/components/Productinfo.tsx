import ProductInfoImageSlider from "./ProductInfoImageSlider";
import "./Productinfo.css";
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import { ActiveProductContext } from "../contexts/ActiveProduct";
import { Product } from "../interfaces/interfaces";

interface Props {
  product: Product;
}

function ProductInfo(props: Props) {
  // const { activeProduct } = useContext(ActiveProductContext);
  const { product } = props;

  return (
    <div className="product-info-container">
      <ProductInfoImageSlider product={product} />
      <div key={product.id}>
        <h2 className="product-info-title">{product.title}</h2>
        <p className="product-info-description">{product.longinfo}</p>
        <p className="product-info-price">{product.price} :-</p>
      </div>
    </div>
  );
}

export default ProductInfo;
