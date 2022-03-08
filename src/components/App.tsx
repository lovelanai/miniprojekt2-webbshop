import { Button } from "@mui/material";
import ProductProvider from "../contexts/ProductContext";
import "./App.css";
import Layout from "./Layout";
import ShoppingCartProvider from "../contexts/ProductContext";

function App() {
  return (
    // <BrowserRouter>

    <ProductProvider>
      <ShoppingCartProvider>
        <Layout />
      </ShoppingCartProvider>
    </ProductProvider>

    // </BrowserRouter>
  );
}

export default App;
