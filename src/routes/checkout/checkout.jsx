import { useContext } from "react";
import "./checkout.scss";
import { CartContext } from "../../contexts/cart";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Product</span>
        </div>
      </div>
      
        {cartItems.map((cartItem) => {
          return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
        })}
      
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
