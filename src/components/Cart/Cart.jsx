import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props.cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  // const { cart } = props;
  for (const product of props.cart) {
    total += product.price * product.quantity;
    shipping += product.shipping;
    quantity += product.quantity;
  }

  const tax = total * 0.7;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p className="cart-text">Selected Items: {quantity}</p>
      <p className="cart-text">Total Price: ${total}</p>
      <p className="cart-text">Total Shipping Charge: ${shipping}</p>
      <p className="cart-text">Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
