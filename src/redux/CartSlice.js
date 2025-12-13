import { createSlice } from "@reduxjs/toolkit";
import { loadCart, saveCart } from "../utils/cartStorage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCart(),   
    searchTerm: "",
  },

  reducers: {
    addToCart: (state, action) => {
      const found = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (found) {
        found.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      saveCart(state.cart); 
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      saveCart(state.cart);
    },

    increaseQty: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );
      if (item) item.quantity += 1;

      saveCart(state.cart);
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      saveCart(state.cart);
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart"); 
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  setSearchTerm,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
