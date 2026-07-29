import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../Slices/authenticationSlice";
import themeReducer from "../store/themeSlice";
import cartReducer from "../Slices/cartSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});