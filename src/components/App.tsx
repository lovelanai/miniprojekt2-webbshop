import { BrowserRouter } from "react-router-dom";
import ProductProvider from "../contexts/ProductContext";
import "./App.css";
import Layout from "./Layout";
import ShoppingCartProvider from "../contexts/ShoppingCartContext";
import ConfirmationProvider from "../contexts/confirmationContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <ShoppingCartProvider>
          <ConfirmationProvider>
            <Layout />
          </ConfirmationProvider>
        </ShoppingCartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
