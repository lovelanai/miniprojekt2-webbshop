import ProductInfoImageSlider from "./ProductInfoImageSlider";
import "./Productinfo.css";
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import { ActiveProductContext } from "../contexts/ActiveProduct";

function ProductInfo() {
  const { activeProduct } = useContext(ActiveProductContext);

  return (
    <div className="product-info-container">
      <ProductInfoImageSlider />
      <div key={activeProduct?.id}>
        <h2>{activeProduct?.title}</h2>
        <p>{activeProduct?.longinfo}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
