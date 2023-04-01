import { createContext, useEffect, useState } from "react";
import dataProducts from "../data/shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(dataProducts);
  const value = { products }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
