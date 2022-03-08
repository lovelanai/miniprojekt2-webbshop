import { FC, useState, createContext, useContext, useEffect } from "react";
import { Product, mockedProducts } from "../interfaces/interfaces";

interface ContextValue {
  products: Product[];
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (product: Product) => void;
}

export const ProductContext = createContext<ContextValue>({
  products: [],
  handleAddProduct: (product: Product) => [],
  handleRemoveProduct: (product: Product) => [],
});

const ProductProvider: FC = (props) => {
  const [products, setProducts] = useState<Product[]>(mockedProducts);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const handleRemoveProduct = (product: Product) => {
    setProducts(products.filter(({ id }) => id !== product.id));
  };

  console.log(products);

  return (
    <ProductContext.Provider
      value={{ products, handleAddProduct, handleRemoveProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
