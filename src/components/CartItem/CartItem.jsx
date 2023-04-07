import React from "react";
import "./CartItem.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartItem = ({ item }) => {
  return (
    <div className="cart-items">
      <div>
        <img src={item.img} height={100} className="image" />
      </div>
      <div>
        <h5>{item.name}</h5>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <TrashIcon className="icon"></TrashIcon>
    </div>
  );
};

export default CartItem;
