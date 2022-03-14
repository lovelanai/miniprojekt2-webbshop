import ProductInfo from "./Productinfo";
import { Routes, Route } from "react-router-dom";
import ShoppingCartPage from "./ShoppingCartPage";
import Store from "./Store";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import AdminPage from "./AdminPage";

function Main() {
  const { products } = useContext(ProductContext);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />

        {products.map((item) => (
          <Route
            key={item.id}
            path={item.title.replaceAll(" ", "-")}
            element={<ProductInfo product={item} />}
          />
        ))}
      </Routes>
    </main>
  );
}

export default Main;
