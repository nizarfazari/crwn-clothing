import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
