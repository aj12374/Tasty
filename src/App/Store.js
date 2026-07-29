import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication/authenticationSlice";
import themeReducer from "../store/themeSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    theme: themeReducer,
  },
});