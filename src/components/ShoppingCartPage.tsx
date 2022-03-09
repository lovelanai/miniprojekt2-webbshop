import { CSSProperties } from "react";
import Shoppingcart from "./Shoppingcart";

function ShoppingCartPage() {
  return (
    <div style={containerStyle}>
      <Shoppingcart />
    </div>
  );
}

const containerStyle: CSSProperties = {
  height: "calc(100vh - 9rem)",
  width: "100%",
  background: "white",
  marginTop: "6rem",
};

export default ShoppingCartPage;
