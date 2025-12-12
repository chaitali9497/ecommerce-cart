import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    searchTerm: "",
  },

  reducers: {
    addToCart: (state, action) => {
      const found = state.cart.find((item) => item.id === action.payload.id);

      if (found) {
        found.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    clearCart: (state) => {
      state.cart = [];
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  setSearchTerm,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
