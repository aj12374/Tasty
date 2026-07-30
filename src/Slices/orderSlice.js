import { createSlice } from "@reduxjs/toolkit";
import { fetchOrdersFromLocalStorage } from "../services/orderService";

const initialState = {
  orders: [],
  loading: true,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    loadOrders: (state) => {
      state.loading = true;

      try {
        state.orders = fetchOrdersFromLocalStorage();
      } catch (error) {
        state.orders = [];
      }

      state.loading = false;
    },

    addOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },

    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const {
  loadOrders,
  addOrder,
  clearOrders,
} = orderSlice.actions;

export default orderSlice.reducer;