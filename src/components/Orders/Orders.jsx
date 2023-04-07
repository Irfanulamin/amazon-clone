import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Order.css";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setAddedCart] = useState(savedCart);

  return (
    <div className="shop-container">
      <div className="item-container">
        {cart.reverse().map((item, index) => (
          <CartItem item={item} key={index}></CartItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
