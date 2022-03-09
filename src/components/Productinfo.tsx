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
        <h2>{product.title}</h2>
        <p>{product.longinfo}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
