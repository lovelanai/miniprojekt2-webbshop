import { BrowserRouter } from "react-router-dom";
import ProductProvider from "../contexts/ProductContext";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Layout />
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
