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
    const productExists = products.find((item) => item.id === product.id);
    // If the product already exist we won't add it to the array again,
    // we will just change its values
    if (productExists) {
      setProducts(
        products.map((item) => (item.id === product.id ? { ...product } : item))
      );
      console.log(products);
    } else {
      setProducts([...products, product]);
    }
  };

  const handleRemoveProduct = (product: Product) => {
    setProducts(products.filter(({ id }) => id !== product.id));
  };

  return (
    <ProductContext.Provider
      value={{ products, handleAddProduct, handleRemoveProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
