import ProductInfo from "./Productinfo";
import { Routes, Route } from "react-router-dom";
import ShoppingCartPage from "./ShoppingCartPage";
import Store from "./Store";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Main() {
  const { products } = useContext(ProductContext);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />
        {products.map((item) => (
          <Route
            path={item.title.replaceAll(" ", "-")}
            element={<ProductInfo key={item.id} product={item} />}
          />
        ))}
        {/* <Route path="/productInfo" element={<ProductInfo />} /> */}
      </Routes>
      {/* <ProductInfo /> */}
    </main>
  );
}

export default Main;
