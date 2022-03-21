import { BrowserRouter } from "react-router-dom";
import ProductProvider from "../contexts/ProductContext";
import ShoppingCartProvider from "../contexts/ShoppingCartContext";
import "./App.css";
import Layout from "./Layout";

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
