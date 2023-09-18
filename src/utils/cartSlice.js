import { createSlice } from "@reduxjs/toolkit";

// Creating slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // here we define what action will call what reducer.
  reducers: {
    // reducers have action with name and reducer function corresponding to that action.

    // here we doing mapping b/w action and reducer function.
    // reducer function takes two parameter state and action payload
    //action is that data, which is coming in .Action payload is the place where we will get the item which we will have to add to the cart. So this is basically when we will be dispatching, our actions.
    // state is initialState.

    // Function to modify the state
    addItem: (state, action) => {
      // logic to modify the state, simply we push element and directly modify state, we not do anything like state of component set state like that.
      // to put item inside state we do this push operation.
      //When we click on add button, We will dispatching an action. Then we will pass some data, we will recieve that data here (action.payload).
      // intially state value is initial value of initalState. When we change data into our cart, that will be current state value.
      state.items.push(action.payload);
      // this function never return anything. They only take state and modifing it.
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// So component need to access these slices. So, we will export actions and reducer from here.

// exporting action. We doing named export because there are bunch of actions.

/* Assume cartSlice obj is , define in Redux is like this
 cartSlice= {
    actions:{addItem, removeItem, clearCart},
    reducer:{all reducers here}
 }

*/

// destructuring actions here

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // this is the way Redux Toolkit say to export reducer. It will wrap all these reducers from slices and export them. cartSlice.reducer this dot reducer is different from reducers of slices. This will combine all reducers of slices and create one reducer and export it.
