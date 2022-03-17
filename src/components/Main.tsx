import ProductInfo from "./Productinfo";
import { Routes, Route } from "react-router-dom";
import ShoppingCartPage from "./ShoppingCartPage";
import Store from "./Store";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

import CheckOut from "./CheckOutPage";
import Confirmation from "./confirmationPage";

import AdminPage from "./AdminPage";


function Main() {
  const { products } = useContext(ProductContext);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />


        <Route path="/CheckOut" element={<CheckOut />} />
        <Route
          path="/ConfirmationPage/:customerName"
          element={<Confirmation />}
        />


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
