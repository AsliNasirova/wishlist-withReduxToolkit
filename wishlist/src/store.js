import { configureStore } from "@reduxjs/toolkit";
import  wishlistReducer  from "./Features/WishlistSlice";

const store = configureStore({
    reducer:{
        wishlist: wishlistReducer,
    },
});
  
export default store

