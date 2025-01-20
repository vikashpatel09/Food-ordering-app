import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
    search: searchSlice,
  },
});

export default store;