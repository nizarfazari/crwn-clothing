import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment qunatity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  //return new array with modified cartItems / new item cart
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCounts : 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounts, setCartCounts] = useState(0);
  
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) =>  total + cartItem.quantity ,0)
    setCartCounts(newCartCount)
  },[cartItems])


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))
  };
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCounts };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
