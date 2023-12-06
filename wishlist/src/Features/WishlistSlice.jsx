import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const find = state.items.find((x) => x.id === action.payload.id);
      if (find) {
        return;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = WishlistSlice.actions;
export default WishlistSlice.reducer;
