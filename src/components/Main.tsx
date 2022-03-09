
import { Routes, Route } from "react-router-dom";
import ShoppingCartPage from "./ShoppingCartPage";
import Store from "./Store";

function Main() {
  return (
    <main>

      <Routes>
        <Route
          path="/"
          element={<Store />}
        />
        <Route
          path="/ShoppingCartPage"
          element={
            <ShoppingCartPage />}
        />

      </Routes>















    </main >
  );
}

export default Main;
