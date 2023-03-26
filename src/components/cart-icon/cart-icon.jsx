import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";

import "./cart-icon.scss";
import { CartContext } from "../../contexts/cart";

const CartIcon = () => {
  const { setIsCartOpen,isCartOpen } = useContext(CartContext)

  const toogleIsOpen = () => setIsCartOpen(!isCartOpen)
  
  return (
    <div className="cart-icon-container" onClick={toogleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
