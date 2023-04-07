import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Order.css";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const removeCartItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="item-container">
        {cart.reverse().map((item, index) => (
          <CartItem
            item={item}
            key={index}
            removeCartItem={removeCartItem}
          ></CartItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
