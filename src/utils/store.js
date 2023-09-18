import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; // import default export of cartSlice which is cartSlice.reducer.

// store contain slices
// all reducer from cartSlice/slice we get and put inside store
const store = configureStore({
  // Only one reducer having all slices
  reducer: {
    cart: cartSlice, // all reducer from cartSlice we get and put inside store
    // all other slices are come here for e.g.
    // user: userSlice
  },
});

export default store;

// store is need to connect to our application. Because they are different from each other. We have to tell our application that this is our Redux store. So we need a provider to provide store to our application.
