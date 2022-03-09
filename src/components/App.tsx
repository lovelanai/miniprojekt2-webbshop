import { BrowserRouter } from "react-router-dom";
import ProductProvider from "../contexts/ProductContext";
import "./App.css";
import Layout from "./Layout";
import ShoppingCartProvider from "../contexts/ShoppingCartContext";
import ActiveProductProvider from "../contexts/ActiveProduct";

function App() {
  return (

    <BrowserRouter>

    <ProductProvider>
      <ShoppingCartProvider>
        <ActiveProductProvider>
          <Layout />
        </ActiveProductProvider>
      </ShoppingCartProvider>
    </ProductProvider>

    </BrowserRouter>

  );
}

export default App;
