import ProductProvider, { ProductContext } from "../contexts/ProductContext";
import Footer from "./Footer";
import ButtonAppBar from "./Header";
import Header from "./Header";
import Main from "./Main";

function Layout() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
