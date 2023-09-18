import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  return <div>Cart item : {cartItem[1]?.card?.info?.name}</div>;
};

export default Cart;
