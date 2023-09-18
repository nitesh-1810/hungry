import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // We use useSelector for -> subscribe to the store.
  const cartItem = useSelector((store) => store.cart.items); //This line of code is the place where we tell what this 'Cart' component is subscribing to. We will tell what this 'Cart' component are subscribing to. If I write store over here, what it is subscribing to, it is subscribing to the whole store. If I am writing store.cart over here, what it is subscribing to, it is subscribing to that card slice. If I am writing store.cart.items over here, it is subscribing to only the items that array. That's small array in intialState obj in cartSlice.

  //const cartItem = useSelector((store) => store); // Subscribing to the whole store is bad. Performace issue occurs due to this. Because every time when store is updated, cart component re-render everytime. Store can have many more slices, any slices update their state, this cart component is also re-render unnecessary. To improver the performance we subscribe to the specific portion of the store, whatever is used in this component. This component use items array of store-> slice. That why in above code we write (store.cart.items) to subscribe to the items of store -> cartSlice.
  return (
    <>
      <h3>
        Cart items: {cartItem.length}
        {"  "}
        <button onClick={() => handleClearCart()}>Clear Cart</button>
      </h3>
      <div style={{ display: "flex" }}>
        {cartItem.map((item, index) => (
          <FoodItem key={item?.card?.info?.id + index} {...item?.card?.info} />
        ))}
      </div>
    </>
  );
};

export default Cart;
