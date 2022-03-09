import { useContext } from "react";


import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { Product } from "../interfaces/interfaces";

function ShoppingCart() {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <p>detta är shoppingcarten</p>
    </div>
  );
}

export default ShoppingCart;
