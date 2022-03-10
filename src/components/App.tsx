import { BrowserRouter } from "react-router-dom";
import ProductProvider from "../contexts/ProductContext";
import "./App.css";
import Layout from "./Layout";
import ShoppingCartProvider from "../contexts/ShoppingCartContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <ShoppingCartProvider>
          <Layout />
        </ShoppingCartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
