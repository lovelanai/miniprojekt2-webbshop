import { FC, useState, createContext, useContext, useEffect } from "react";
import { Product } from "../interfaces/interfaces";

export interface ContextValue {
  cartItems: Product[];
  amountOfProducts: number;
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (product: Product) => void;
}

export const ShoppingCartContext = createContext<ContextValue>({
  cartItems: [],
  amountOfProducts: 0,
  handleAddProduct: () => {},
  handleRemoveProduct: () => {},
});

const ShoppingCartProvider: FC = (props) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [amountOfProducts, setAmountOfProducts] = useState<number>(0);

  /**
   * This function adds a product to the cartItems-array.
   * If the product already exists, the product's quantity increases by one.
   * @param product This is the product we want to add.
   */
  function handleAddProduct(product: Product) {
    const productExists = cartItems.find((item) => item.id === product.id);
    // If the product already exist we won't add it to the array again,
    // we will just set its quantity to plus one
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setAmountOfProducts(amountOfProducts + 1);
  }

  /**
   * This function removes a product from the cartItems-array.
   * If the product's quantity is more than one, the product's quantity decreases by one.
   * @param product This is the product we want to remove.
   */
  function handleRemoveProduct(product: Product) {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (!productExists) return;

    if (productExists.quantity === 1) {
      setCartItems(cartItems?.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...productExists, quantity: productExists.quantity - 1 };
          }
          return item;
        })
      );
    }
    setAmountOfProducts(amountOfProducts - 1);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleAddProduct,
        handleRemoveProduct,
        amountOfProducts,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useCart = () => useContext(ShoppingCartContext);
