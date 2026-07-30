import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.category === item.category
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const { id, category } = action.payload;

      const item = state.cartItems.find(
        (cartItem) =>
          cartItem.id === id &&
          cartItem.category === category
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const { id, category } = action.payload;

      const item = state.cartItems.find(
        (cartItem) =>
          cartItem.id === id &&
          cartItem.category === category
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) =>
            !(
              cartItem.id === id &&
              cartItem.category === category
            )
        );
      }
    },

    removeFromCart: (state, action) => {
      const { id, category } = action.payload;

      state.cartItems = state.cartItems.filter(
        (cartItem) =>
          !(
            cartItem.id === id &&
            cartItem.category === category
          )
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;