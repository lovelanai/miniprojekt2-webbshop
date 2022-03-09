import { FC, useState, createContext } from "react";
import { Product } from "../interfaces/interfaces";

interface ContextValue {
  activeProduct?: Product;
  handleSetActiveProduct: (product: Product) => void;
}

export const ActiveProductContext = createContext<ContextValue>({
  activeProduct: {
    id: 0,
    title: "",
    longinfo: "",
    info1: "",
    info2: "",
    info3: "",
    price: 0,
    quantity: 0,
    image: "",
    image2: "",
    image3: "",
  },
  handleSetActiveProduct: () => {},
});

const ActiveProductProvider: FC = (props) => {
  const [activeProduct, setActiveProduct] = useState<Product>();

  const handleSetActiveProduct = (product: Product) => {
    setActiveProduct(product);
  };

  return (
    <ActiveProductContext.Provider
      value={{ activeProduct, handleSetActiveProduct }}
    >
      {props.children}
    </ActiveProductContext.Provider>
  );
};

export default ActiveProductProvider;
